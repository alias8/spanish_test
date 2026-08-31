import type { VerbEntry } from './types'
import { CORE_VERBS } from './coreVerbs'
import { BULK_VERBS_1 } from './bulkVerbs1'
import { BULK_VERBS_2 } from './bulkVerbs2'
import { BULK_VERBS_3 } from './bulkVerbs3'
import { BULK_VERBS_4 } from './bulkVerbs4'
import { VERB_DETAILS } from './details'

export const VERBS: VerbEntry[] = [...CORE_VERBS, ...BULK_VERBS_1, ...BULK_VERBS_2, ...BULK_VERBS_3, ...BULK_VERBS_4]

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

export * from './types'
export { CONJUGATION_SCREENS } from './conjugationPractice'
export { FREQUENCY_RANK } from './frequency'
