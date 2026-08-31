import type { VerbEntry, VerbTense } from './types'

export type SimpleForm = [spanish: string, english: string, irregular?: boolean]

export function buildTense(forms: SimpleForm[]): VerbTense {
    return {
        forms: forms.map(([spanish, english, irregular]) => (
            irregular ? { spanish, english, irregular: true } : { spanish, english }
        )),
    }
}

export function simpleVerb(
    infinitive: string,
    translation: string,
    infinitiveForms: [string, string][],
    present: SimpleForm[],
    preterite: SimpleForm[],
    imperfect: SimpleForm[],
): VerbEntry {
    return {
        infinitive,
        translation,
        infinitiveForms: infinitiveForms.map(([spanish, english]) => ({ spanish, english })),
        tenses: [buildTense(present), buildTense(preterite), buildTense(imperfect)],
    }
}
