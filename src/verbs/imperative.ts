import type { VerbEntry, VerbForm, VerbTense } from './types'

// Generates the affirmative imperative (tú, usted, ustedes) for every verb from data it
// already has, rather than hand-writing ~270 tables:
//   - tú is the present-tense él/ella form (habla, come, piensa), except a few irregulars
//   - usted/ustedes are the present subjunctive: the yo form minus -o, with the vowel swapped
//     (hablo → hable, tengo → tenga), plus the -car/-gar/-zar/-guar spelling changes
//   - reflexive verbs attach the pronoun (levántate, levántese, levántense)
// A form is marked irregular when it differs from the plain infinitive-stem pattern.

// Verbs with no natural command form (impersonal, gustar-style, or modal) get no imperative box.
const NO_IMPERATIVE = new Set([
    'haber', 'poder', 'deber', 'soler', 'gustar', 'encantar', 'doler', 'llover', 'nevar',
    'amanecer', 'anochecer', 'ocurrir', 'resultar', 'existir', 'durar', 'costar', 'faltar', 'convenir', 'parecer', 'nacer',
])

const TU_OVERRIDES: Record<string, string> = {
    decir: 'di', hacer: 'haz', ir: 've', poner: 'pon', salir: 'sal', ser: 'sé', tener: 'ten', venir: 'ven',
    mantener: 'mantén', suponer: 'supón',
}

const USTED_OVERRIDES: Record<string, [usted: string, ustedes: string]> = {
    ser: ['sea', 'sean'], estar: ['esté', 'estén'], ir: ['vaya', 'vayan'], dar: ['dé', 'den'], saber: ['sepa', 'sepan'],
}

const STRONG_VOWELS = 'aeoáéó'
const VOWELS = 'aeiouáéíóúü'
const ACCENTED: Record<string, string> = { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú' }

// Adds the written accent needed once an extra syllable is attached (levanta → levánta-te).
// The base forms are all stressed on their second-to-last syllable, so that's where it goes.
function addStressAccent(word: string): string {
    if (/[áéíóú]/.test(word)) return word
    // vowel nuclei, splitting two adjacent strong vowels (pre-o-cu-pa) into separate syllables
    const nuclei: { start: number; end: number }[] = []
    for (let i = 0; i < word.length; i++) {
        if (!VOWELS.includes(word[i])) continue
        const prev = nuclei[nuclei.length - 1]
        const joinsPrev = prev && prev.end === i &&
            !(STRONG_VOWELS.includes(word[i - 1]) && STRONG_VOWELS.includes(word[i]))
        if (joinsPrev) prev.end = i + 1
        else nuclei.push({ start: i, end: i + 1 })
    }
    if (nuclei.length < 2) return word // one syllable (pon → ponte, ve → vete) needs no accent
    const { start, end } = nuclei[nuclei.length - 2]
    const group = word.slice(start, end)
    // the accent goes on the strong vowel of a diphthong (siente → siéntete), or the second of two weak ones (cuida → cuídate)
    let offset = [...group].findIndex(c => STRONG_VOWELS.includes(c))
    if (offset === -1) offset = group.length - 1
    const pos = start + offset
    return word.slice(0, pos) + (ACCENTED[word[pos]] ?? word[pos]) + word.slice(pos + 1)
}

function presentSubjunctive(yo: string, isAr: boolean): string {
    const stem = yo.slice(0, -1)
    if (!isAr) return stem + 'a'
    if (stem.endsWith('gu')) return stem.slice(0, -2) + 'güe'
    if (stem.endsWith('c')) return stem.slice(0, -1) + 'que'
    if (stem.endsWith('g')) return stem + 'ue'
    if (stem.endsWith('z')) return stem.slice(0, -1) + 'ce'
    return stem + 'e'
}

export function buildImperative(verb: VerbEntry): VerbTense | null {
    if (NO_IMPERATIVE.has(verb.infinitive)) return null
    const [firstWord, ...rest] = verb.infinitive.split(' ')
    const tail = rest.length ? ' ' + rest.join(' ') : '' // e.g. pedir prestado, hacer snowboard
    const reflexive = firstWord.endsWith('se')
    const base = reflexive ? firstWord.slice(0, -2) : firstWord
    const isAr = base.endsWith('ar')
    const regularStem = base.slice(0, -2)

    // present forms without the reflexive pronoun or the tail (me levanto → levanto)
    const bare = (form: VerbForm) => {
        let s = form.spanish
        if (tail && s.endsWith(tail)) s = s.slice(0, -tail.length)
        if (reflexive) s = s.split(' ').slice(1).join(' ')
        return s
    }
    const [yo, , el] = verb.tenses[0].forms.map(bare)

    const tu = TU_OVERRIDES[base] ?? el
    const [usted, ustedes] = USTED_OVERRIDES[base] ?? (() => {
        const subj = presentSubjunctive(yo, isAr)
        return [subj, subj + 'n']
    })()
    const regular = [regularStem + (isAr ? 'a' : 'e'), regularStem + (isAr ? 'e' : 'a'), regularStem + (isAr ? 'en' : 'an')]

    const gloss = verb.infinitiveForms[0].english.split(',')[0].replace(/^to /, '').replace(/\s*\(.*?\)/g, '').replace('oneself', 'yourself').trim()
    const english = [`${gloss}! (you, informal)`, `${gloss}! (you, formal)`, `${gloss}! (you all)`]
    const pronouns = ['te', 'se', 'se']

    const forms = [tu, usted, ustedes].map((form, i): VerbForm => {
        const spanish = (reflexive ? addStressAccent(form) + pronouns[i] : form) + tail
        return form !== regular[i] ? { spanish, english: english[i], irregular: true } : { spanish, english: english[i] }
    })

    const description = reflexive
        ? `The Affirmative Imperative is used to give commands, instructions or invitations — telling someone to ${gloss}. The reflexive pronoun is attached to the end (${forms[0].spanish}), which usually adds a written accent to keep the stress in the same place.`
        : `The Affirmative Imperative is used to give commands, instructions or invitations — telling someone to ${gloss}. Use tú with friends and family, usted to be polite, and ustedes for more than one person.`
    return { description, forms }
}
