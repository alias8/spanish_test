import type { CharRange, VerbEntry } from './types'
import { addStressAccent } from './imperative'

// Works out which letters of each conjugated form are irregular, so they can be shown in red.
// For every form we build what a fully regular verb of the same class would give (stem +
// the standard -ar/-er/-ir ending) and diff the two letter by letter: any letter the real
// form adds or changes is irregular (tengo vs teno → g, puedo vs podo → ue, estás vs estas → á).
// Spelling changes count too (llegué, conozco), since they still differ from the pattern.
//
// The stem and the ending are diffed separately whenever the real form ends in a recognisable
// ending, so a strong preterite's unaccented ending shows up (tuve vs tení → t[uve], not t[uv]e).
// When the real form only *drops* letters (has vs habes, diré vs deciré, ten vs tiene) there's
// nothing to color, so the whole word is marked instead.

type VerbClass = 'ar' | 'er' | 'ir'

// One ending per pronoun, aligned with VERB_PRONOUNS (yo, tú, él, nosotros, ellos).
const ENDINGS: Record<VerbClass, string[][]> = {
    ar: [
        ['o', 'as', 'a', 'amos', 'an'],
        ['é', 'aste', 'ó', 'amos', 'aron'],
        ['aba', 'abas', 'aba', 'ábamos', 'aban'],
    ],
    er: [
        ['o', 'es', 'e', 'emos', 'en'],
        ['í', 'iste', 'ió', 'imos', 'ieron'],
        ['ía', 'ías', 'ía', 'íamos', 'ían'],
    ],
    ir: [
        ['o', 'es', 'e', 'imos', 'en'],
        ['í', 'iste', 'ió', 'imos', 'ieron'],
        ['ía', 'ías', 'ía', 'íamos', 'ían'],
    ],
}
// tú, usted, ustedes
const IMPERATIVE_ENDINGS: Record<VerbClass, string[]> = { ar: ['a', 'e', 'en'], er: ['e', 'a', 'an'], ir: ['e', 'a', 'an'] }
const IMPERATIVE_PRONOUNS = ['te', 'se', 'se']
// endings of the strong preterites (tuve, hizo, dijeron), which replace the stem *and* the ending
const STRONG_PRETERITE_ENDINGS = [['e'], ['iste'], ['o'], ['imos'], ['ieron', 'eron']]
const PRETERITE = 1
const PRESENT_PERFECT = 3
const IMPERATIVE = 4

type VerbShape = { stem: string; cls: VerbClass; reflexive: boolean; tail: string[] }

function shapeOf(infinitive: string): VerbShape {
    const [firstWord, ...tail] = infinitive.split(' ') // pedir prestado, hacer snowboard
    const reflexive = firstWord.endsWith('se')
    const base = reflexive ? firstWord.slice(0, -2) : firstWord
    const ending = base.slice(-2).replace('í', 'i') // oír, reír
    return { stem: base.slice(0, -2), cls: ending as VerbClass, reflexive, tail }
}

// The regular verb word split into stem + ending, plus other endings the real form might use.
type Regular = { stem: string; ending: string; altEndings?: string[] }

function regularParticiple(shape: VerbShape): Regular {
    return { stem: shape.stem, ending: shape.cls === 'ar' ? 'ado' : 'ido' }
}

function regularGerund(shape: VerbShape): Regular {
    return { stem: shape.stem, ending: shape.cls === 'ar' ? 'ando' : 'iendo' }
}

// Letters of `actual` that aren't part of a longest common subsequence with `regular`. Ties are
// broken by matching from the end of the word, so the change lands on the stem (dicho vs decido
// → d[i]c[h]o, not di[ch]o).
function lcsMarks(actual: string, regular: string): boolean[] {
    const a = [...actual], r = [...regular]
    // lcs[i][j] = LCS length of a[..i] and r[..j]
    const lcs = Array.from({ length: a.length + 1 }, () => new Array<number>(r.length + 1).fill(0))
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= r.length; j++) {
            lcs[i][j] = a[i - 1] === r[j - 1] ? lcs[i - 1][j - 1] + 1 : Math.max(lcs[i - 1][j], lcs[i][j - 1])
        }
    }
    const marked = new Array<boolean>(a.length).fill(true)
    for (let i = a.length, j = r.length; i > 0 && j > 0;) {
        if (a[i - 1] === r[j - 1]) { marked[i - 1] = false; i--; j-- }
        else if (lcs[i][j - 1] >= lcs[i - 1][j]) j-- // skip a regular letter that was dropped
        else i-- // this real letter was added
    }
    return marked
}

function diffWord(actual: string, regular: Regular): boolean[] {
    const full = regular.stem + regular.ending
    const ending = [regular.ending, ...regular.altEndings ?? []]
        .sort((x, y) => y.length - x.length)
        .find(e => actual.endsWith(e))
    const marked = ending === undefined
        ? lcsMarks(actual, full)
        : [...lcsMarks(actual.slice(0, actual.length - ending.length), regular.stem), ...lcsMarks(ending, regular.ending)]
    if (actual !== full && !marked.includes(true)) marked.fill(true) // only letters dropped: mark the whole word
    return marked
}

// Diffs the verb word inside a full form like "me levanto", "he hecho", "pedí prestado" or
// "me gusta / me gustan". `regularFor(part)` gives the regular verb word for each " / " part.
function markForm(spanish: string, regularFor: (part: number) => Regular, tail: string[]): CharRange[] | undefined {
    const ranges: CharRange[] = []
    let offset = 0
    spanish.split(' / ').forEach((part, p) => {
        const words = part.split(' ')
        const verbIndex = words.length - 1 - (tail.length && words.slice(-tail.length).join(' ') === tail.join(' ') ? tail.length : 0)
        const wordStart = offset + words.slice(0, verbIndex).reduce((n, w) => n + w.length + 1, 0)
        const marked = diffWord(words[verbIndex], regularFor(p))
        marked.forEach((m, k) => {
            if (!m) return
            const last = ranges[ranges.length - 1]
            if (last && last[1] === wordStart + k) last[1]++
            else ranges.push([wordStart + k, wordStart + k + 1])
        })
        offset += part.length + 3
    })
    return ranges.length ? ranges : undefined
}

export function markIrregularLetters(verb: VerbEntry) {
    const shape = shapeOf(verb.infinitive)
    const { stem, cls, tail } = shape

    const [, participle, gerund] = verb.infinitiveForms
    participle.irregular = markForm(participle.spanish, () => regularParticiple(shape), tail)
    gerund.irregular = markForm(gerund.spanish, () => regularGerund(shape), tail)

    verb.tenses.forEach((tense, t) => {
        tense.forms.forEach((form, person) => {
            let regularFor: (part: number) => Regular
            if (t === PRESENT_PERFECT) {
                regularFor = () => regularParticiple(shape)
            } else if (t === IMPERATIVE) {
                const ending = IMPERATIVE_ENDINGS[cls][person]
                // a reflexive command's written accent is regular (levántate), so it's part of the pattern
                const full = shape.reflexive ? addStressAccent(stem + ending) + IMPERATIVE_PRONOUNS[person] : stem + ending
                regularFor = () => ({ stem: full.slice(0, stem.length), ending: full.slice(stem.length) })
            } else {
                // gustar-style "me gusta / me gustan": the parts are the él and ellos forms
                const endings = ENDINGS[cls][t]
                regularFor = part => {
                    const p = form.spanish.includes(' / ') ? [2, 4][part] : person
                    return { stem, ending: endings[p], altEndings: t === PRETERITE ? STRONG_PRETERITE_ENDINGS[p] : undefined }
                }
            }
            form.irregular = markForm(form.spanish, regularFor, tail)
        })
    })
}

export function verbClassOf(infinitive: string): VerbClass {
    return shapeOf(infinitive).cls
}
