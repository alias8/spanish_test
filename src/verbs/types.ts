export type ConjugationEntry = { id: string; stem: string; ending: string }
export type ConjugationRow = { pronoun: string; cells: ConjugationEntry[] }
export type ConjugationScreen = { kind: 'conjugation'; label: string; description: string; verbs: string[]; rows: ConjugationRow[] }

export const VERB_PRONOUNS = ['Yo', 'Tú', 'Él / Usted', 'Nosotros', 'Ellos / Ustedes'] as const
export const INFINITIVE_ITEMS = ['Infinitive', 'Past participle', 'Gerund'] as const
export const IMPERATIVE_PRONOUNS = ['Tú', 'Usted', 'Ustedes'] as const
export const TENSE_META = [
    { name: 'Indicative Present', spanishName: 'El Presente', pronouns: VERB_PRONOUNS },
    { name: 'Indicative Preterite', spanishName: 'El Pretérito Indefinido', pronouns: VERB_PRONOUNS },
    { name: 'Indicative Imperfect', spanishName: 'El Pretérito Imperfecto', pronouns: VERB_PRONOUNS },
    { name: 'Indicative Present Perfect', spanishName: 'El Pretérito Perfecto', pronouns: VERB_PRONOUNS },
    { name: 'Affirmative Imperative', spanishName: 'El Imperativo Afirmativo', pronouns: IMPERATIVE_PRONOUNS },
] as const

export type VerbForm = { spanish: string; english: string; irregular?: boolean }
export type VerbTense = {
    description?: string
    example?: { spanish: string; english: string }
    forms: VerbForm[] // aligned with the tense's TENSE_META pronouns by index
}
export type VerbInfoRow = { spanish: string; english: string }
export type VerbEntry = {
    infinitive: string
    translation: string
    summary?: string
    infinitiveForms: VerbInfoRow[] // aligned with INFINITIVE_ITEMS by index
    tenses: VerbTense[] // aligned with TENSE_META by index; the imperative (index 4, last) is optional
}
export type VerbLookupScreen = { kind: 'verbs'; label: string }
