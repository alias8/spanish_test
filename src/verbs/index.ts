import type { VerbEntry } from './types'
import { BULK_VERBS_1 } from './bulkVerbs1'
import { BULK_VERBS_2 } from './bulkVerbs2'
import { BULK_VERBS_3 } from './bulkVerbs3'
import { BULK_VERBS_4 } from './bulkVerbs4'
import { VERB_DETAILS } from './details'
import { normalize } from '../utils'

export const VERBS: VerbEntry[] = [...BULK_VERBS_1, ...BULK_VERBS_2, ...BULK_VERBS_3, ...BULK_VERBS_4]

// Original summaries and tense descriptions (not copied from any external source),
// merged onto matching entries above by infinitive. Only a subset of verbs have
// these — the rest stay conjugation-only.
for (const verb of VERBS) {
    const details = VERB_DETAILS[verb.infinitive]
    if (!details) continue
    verb.summary = details.summary
    const [present, preterite, imperfect] = verb.tenses
    Object.assign(present, details.present)
    Object.assign(preterite, details.preterite)
    Object.assign(imperfect, details.imperfect)
}

// Indices built once from VERBS, so exact-match lookups (infinitive or any conjugated
// form) are O(1) instead of scanning the array. They don't help substring/partial
// matches — a hashmap only helps when you're checking for an exact key.
export const VERBS_BY_INFINITIVE = new Map(VERBS.map(v => [normalize(v.infinitive), v]))

export const VERBS_BY_FORM = new Map<string, VerbEntry[]>()
for (const v of VERBS) {
    const forms = new Set<string>()
    v.infinitiveForms.forEach(f => forms.add(normalize(f.spanish)))
    v.tenses.forEach(t => t.forms.forEach(f => forms.add(normalize(f.spanish))))
    for (const form of forms) {
        const list = VERBS_BY_FORM.get(form)
        if (list) list.push(v)
        else VERBS_BY_FORM.set(form, [v])
    }
}

// translation is a comma-separated list of English glosses (e.g. "to do, to make"), so
// index each gloss individually — a search for "to owe" should exact-match "should, to
// owe, must" even though that phrase isn't the whole field.
export const VERBS_BY_TRANSLATION = new Map<string, VerbEntry[]>()
for (const v of VERBS) {
    const glosses = new Set(v.translation.split(',').map(g => normalize(g)))
    for (const gloss of glosses) {
        const list = VERBS_BY_TRANSLATION.get(gloss)
        if (list) list.push(v)
        else VERBS_BY_TRANSLATION.set(gloss, [v])
    }
}

export * from './types'
export { CONJUGATION_SCREENS } from './conjugationPractice'
export { FREQUENCY_RANK } from './frequency'
