import type { CharRange } from './verbs/types'

// The 20 most frequent English verbs, for comparing against the Spanish ones. Only the
// principal parts are stored; every tense table is built from them below, and irregular
// letters are found by diffing each form against what the regular pattern would give
// (add -s, -ed, -ing), the same idea as the Spanish verbs' irregularity.ts.

export type EnglishForm = { english: string; irregular?: CharRange[] }
export type EnglishTense = { name: string; description: string; pronouns: string[]; forms: EnglishForm[] }
export type EnglishVerb = {
    base: string
    spanish: string // closest Spanish equivalent(s)
    summary: string
    infinitiveForms: EnglishForm[] // aligned with ENGLISH_INFINITIVE_ITEMS
    tenses: EnglishTense[]
}

export const ENGLISH_INFINITIVE_ITEMS = ['Infinitive', 'Past participle', 'Gerund'] as const
const PRONOUNS = ['I', 'You', 'He / She / It', 'We', 'They']
const SUBJECTS = ['I', 'you', 's/he', 'we', 'they'] // as written inside the English sentences

type Parts = {
    base: string
    third: string
    past: string
    participle: string
    gerund: string
    spanish: string
    summary: string
    present?: string[] // only be has more than two present forms
    pastForms?: string[] // only be has more than one past form
}

// Frequency order (most common first)
const PARTS: Parts[] = [
    { base: 'be', third: 'is', past: 'was', participle: 'been', gerund: 'being', spanish: 'ser, estar',
      present: ['am', 'are', 'is', 'are', 'are'], pastForms: ['was', 'were', 'was', 'were', 'were'],
      summary: 'Be is the most common verb in English and by far the most irregular: it is the only verb with three present forms (am, are, is) and two past forms (was, were). Where Spanish splits "to be" into ser and estar, English uses be for both permanent and temporary states.' },
    { base: 'have', third: 'has', past: 'had', participle: 'had', gerund: 'having', spanish: 'tener, haber',
      summary: 'Have covers both possession (I have a car, like tener) and the helper verb that builds the perfect tenses (I have eaten, like haber). Its forms are contracted from an older "haves" and "haved", which is why has and had look shortened.' },
    { base: 'do', third: 'does', past: 'did', participle: 'done', gerund: 'doing', spanish: 'hacer',
      summary: 'Do means "to do" or "to perform", and is also the helper verb English uses for questions and negatives (Do you speak Spanish? I don\'t know.) — something Spanish has no equivalent for.' },
    { base: 'say', third: 'says', past: 'said', participle: 'said', gerund: 'saying', spanish: 'decir',
      summary: 'Say is the main verb for reporting speech (she said that…). It looks almost regular on paper, but said and says are pronounced "sed" and "sez".' },
    { base: 'go', third: 'goes', past: 'went', participle: 'gone', gerund: 'going', spanish: 'ir',
      summary: 'Go is the main verb of movement. Like Spanish ir, whose preterite fui comes from a different verb entirely, its past went was borrowed from another verb (wend). "Going to" plus an infinitive is the everyday way to talk about the future, just like ir a.' },
    { base: 'get', third: 'gets', past: 'got', participle: 'gotten', gerund: 'getting', spanish: 'conseguir, obtener, llegar',
      summary: 'Get is one of the most flexible verbs in English: to obtain (get a job), to become (get tired), to arrive (get home), and many phrasal verbs (get up, get along). American English uses gotten as the past participle; British English uses got.' },
    { base: 'make', third: 'makes', past: 'made', participle: 'made', gerund: 'making', spanish: 'hacer',
      summary: 'Make means to create or build something (make dinner, make a mistake). Spanish uses hacer for both make and do, which is why English learners from Spanish often mix the two up.' },
    { base: 'know', third: 'knows', past: 'knew', participle: 'known', gerund: 'knowing', spanish: 'saber, conocer',
      summary: 'Know covers both knowing facts (saber) and being familiar with people or places (conocer), which Spanish keeps as two separate verbs.' },
    { base: 'think', third: 'thinks', past: 'thought', participle: 'thought', gerund: 'thinking', spanish: 'pensar, creer',
      summary: 'Think is used both for the act of thinking and for giving an opinion (I think so). Its past, thought, is one of a small group of irregular pasts ending in -ought (bought, brought, fought).' },
    { base: 'take', third: 'takes', past: 'took', participle: 'taken', gerund: 'taking', spanish: 'tomar, llevar',
      summary: 'Take means to grab or carry something (take an umbrella), and also appears in many fixed phrases: take a photo, take a shower, take time.' },
    { base: 'see', third: 'sees', past: 'saw', participle: 'seen', gerund: 'seeing', spanish: 'ver',
      summary: 'See is the main verb of sight, and like ver it also means to understand (I see what you mean) and to meet up with someone (see you later).' },
    { base: 'come', third: 'comes', past: 'came', participle: 'come', gerund: 'coming', spanish: 'venir',
      summary: 'Come describes movement toward the speaker, the opposite of go. Unusually, its past participle is the same as its base form (I have come).' },
    { base: 'want', third: 'wants', past: 'wanted', participle: 'wanted', gerund: 'wanting', spanish: 'querer',
      summary: 'Want expresses desire, like querer, but unlike querer it never means "to love". It is the first fully regular verb on this list.' },
    { base: 'look', third: 'looks', past: 'looked', participle: 'looked', gerund: 'looking', spanish: 'mirar, buscar, parecer',
      summary: 'Look means to direct your eyes at something (look at me), and with other words covers searching (look for, like buscar) and seeming (you look tired, like parecer). It is fully regular.' },
    { base: 'use', third: 'uses', past: 'used', participle: 'used', gerund: 'using', spanish: 'usar',
      summary: 'Use is a regular verb meaning to make use of something. "Used to" plus an infinitive (I used to live there) is one of the ways English expresses what the Spanish imperfect does.' },
    { base: 'find', third: 'finds', past: 'found', participle: 'found', gerund: 'finding', spanish: 'encontrar',
      summary: 'Find means to discover or come across something, and also to have an opinion about it (I find it boring), much like encontrar.' },
    { base: 'give', third: 'gives', past: 'gave', participle: 'given', gerund: 'giving', spanish: 'dar',
      summary: 'Give means to hand something over, like dar. Its forms follow the same vowel-change pattern as many old English verbs: give, gave, given.' },
    { base: 'tell', third: 'tells', past: 'told', participle: 'told', gerund: 'telling', spanish: 'decir, contar',
      summary: 'Tell is used for passing information to someone (tell me the truth) or telling a story (contar). Unlike say, it is almost always followed by the person being told.' },
    { base: 'work', third: 'works', past: 'worked', participle: 'worked', gerund: 'working', spanish: 'trabajar, funcionar',
      summary: 'Work means both to do a job (trabajar) and for something to function (funcionar — it doesn\'t work). It is fully regular.' },
    { base: 'call', third: 'calls', past: 'called', participle: 'called', gerund: 'calling', spanish: 'llamar',
      summary: 'Call means to phone someone or to name something (they call him Joe), just like llamar. It is fully regular, and the doubled l is part of the base, not a spelling change.' },
]

// --- what a regular verb would give, so the real forms can be diffed against it ---

const isConsonant = (c: string) => !!c && !'aeiou'.includes(c)

function regularThird(base: string) {
    if (/(s|x|z|ch|sh|o)$/.test(base)) return base + 'es'
    if (base.endsWith('y') && isConsonant(base[base.length - 2])) return base.slice(0, -1) + 'ies'
    return base + 's'
}

function regularPast(base: string) {
    if (base.endsWith('e')) return base + 'd'
    if (base.endsWith('y') && isConsonant(base[base.length - 2])) return base.slice(0, -1) + 'ied'
    return base + 'ed'
}

function regularGerund(base: string) {
    if (base.endsWith('e') && !base.endsWith('ee') && base.length > 2) return base.slice(0, -1) + 'ing'
    return base + 'ing'
}

// Marks the letters of `actual` that differ from `regular`: strip the shared start and end, and
// whatever is left in the middle is irregular. If the real form only drops letters (had vs haved),
// there's nothing left to color, so the whole word is marked instead.
function diff(actual: string, regular: string, offset = 0): CharRange[] | undefined {
    if (actual === regular) return undefined
    let prefix = 0
    while (prefix < actual.length && prefix < regular.length && actual[prefix] === regular[prefix]) prefix++
    let suffix = 0
    const maxSuffix = Math.min(actual.length, regular.length) - prefix
    while (suffix < maxSuffix && actual[actual.length - 1 - suffix] === regular[regular.length - 1 - suffix]) suffix++
    const start = prefix
    const end = actual.length - suffix
    return start < end ? [[offset + start, offset + end]] : [[offset, offset + actual.length]]
}

// a form whose last word is checked against the regular pattern (e.g. "has gone" → "gone")
function form(english: string, word: string, regular: string): EnglishForm {
    return { english, irregular: diff(word, regular, english.lastIndexOf(word)) }
}

function build(p: Parts): EnglishVerb {
    const { base } = p
    const present = p.present ?? [base, base, p.third, base, base]
    const presentRegular = [base, base, regularThird(base), base, base]
    const past = p.pastForms ?? Array(5).fill(p.past)
    const was = ['was', 'were', 'was', 'were', 'were']
    const have = ['have', 'have', 'has', 'have', 'have']
    const third = p.third !== regularThird(base)
    const irregularPast = p.past !== regularPast(base)
    const irregularParticiple = p.participle !== regularPast(base)

    return {
        base,
        spanish: p.spanish,
        summary: p.summary,
        infinitiveForms: [
            { english: `to ${base}` },
            form(p.participle, p.participle, regularPast(base)),
            form(p.gerund, p.gerund, regularGerund(base)),
        ],
        tenses: [
            {
                name: 'Present Simple',
                description: `The Present Simple is used for habits, facts, and things that are generally true. Only he/she/it changes, adding -s${third ? ` — here irregularly, as ${p.third}` : ` (${p.third})`}${p.present ? ', except for be, which has three forms' : ''}. Unlike Spanish, English needs the pronoun every time, because the verb barely changes. Equivalent to "El Presente".`,
                pronouns: PRONOUNS,
                forms: present.map((f, i) => form(`${SUBJECTS[i]} ${f}`, f, presentRegular[i])),
            },
            {
                name: 'Past Simple',
                description: `The Past Simple is used for completed actions at a specific time in the past. Regular verbs add -ed, and the same form is used for every person${irregularPast ? `; ${base}'s past, ${p.past}, is irregular` : ''}${p.pastForms ? ' (be is the one exception, with was and were)' : ''}. Equivalent to "El Pretérito Indefinido".`,
                pronouns: PRONOUNS,
                forms: past.map((f, i) => form(`${SUBJECTS[i]} ${f}`, f, regularPast(base))),
            },
            {
                name: 'Past Continuous',
                description: `The Past Continuous is used for actions that were in progress in the past, often as the background to another event (I was ${p.gerund} when…). It is formed with was/were plus the gerund. Together with "used to", it covers what Spanish expresses with "El Pretérito Imperfecto".`,
                pronouns: PRONOUNS,
                forms: was.map((w, i) => form(`${SUBJECTS[i]} ${w} ${p.gerund}`, p.gerund, regularGerund(base))),
            },
            {
                name: 'Present Perfect',
                description: `The Present Perfect is used for experiences up to now and for past actions connected to the present (I have just eaten). It is formed with have/has plus the past participle, ${p.participle}${irregularParticiple ? ', which is irregular' : ''}. Equivalent to "El Pretérito Perfecto", although American English often uses the Past Simple where Spanish would use it.`,
                pronouns: PRONOUNS,
                forms: have.map((h, i) => form(`${SUBJECTS[i]} ${h} ${p.participle}`, p.participle, regularPast(base))),
            },
            {
                name: 'Imperative',
                description: `The Imperative is used to give commands, instructions, or invitations. It is just the base form, ${base}, with no pronoun — and the same form is used for one person or many, formal or informal, where Spanish has separate tú, usted, and ustedes forms. "Let's" adds a suggestion that includes the speaker. Equivalent to "El Imperativo Afirmativo".`,
                pronouns: ['You (anyone)', 'We'],
                forms: [{ english: `${base}!` }, { english: `let's ${base}!` }],
            },
        ],
    }
}

export const ENGLISH_VERBS: EnglishVerb[] = PARTS.map(build)
