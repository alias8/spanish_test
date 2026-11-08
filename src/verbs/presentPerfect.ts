import type { VerbEntry, VerbForm, VerbTense } from './types'

// Generates the present perfect (he hablado, has hablado…) for every verb: the present of
// haber plus the past participle each verb already stores, with any reflexive or indirect
// object pronoun in front (me he levantado, me ha gustado). All five forms are marked
// irregular when the participle itself is irregular (hecho, puesto, vuelto…).

const HABER = ['he', 'has', 'ha', 'hemos', 'han']
const ENGLISH_SUBJECTS = ['I have', 'you have', 's/he has', 'we have', 'they have']

export function buildPresentPerfect(verb: VerbEntry): VerbTense {
    const [firstWord] = verb.infinitive.split(' ')
    const base = firstWord.endsWith('se') ? firstWord.slice(0, -2) : firstWord
    const participle = verb.infinitiveForms[1]
    const [participleWord] = participle.spanish.split(' ')
    const irregular = participleWord !== base.slice(0, -2) + (base.endsWith('ar') ? 'ado' : 'ido')

    const forms = verb.tenses[0].forms.map((present, i): VerbForm => {
        let spanish: string
        let english = `${ENGLISH_SUBJECTS[i]} ${participle.english}`
        if (present.spanish.includes(' / ')) {
            // gustar-style verbs show both singular and plural (me gusta / me gustan)
            const object = present.spanish.split(' ')[0]
            spanish = `${object} ha ${participle.spanish} / ${object} han ${participle.spanish}`
            if (verb.infinitive === 'doler') english = present.english.replace('hurts', 'has hurt').replace('feels', 'has felt')
        } else {
            const pronoun = firstWord.endsWith('se') ? present.spanish.split(' ')[0] + ' ' : ''
            spanish = `${pronoun}${HABER[i]} ${participle.spanish}`
        }
        return irregular ? { spanish, english, irregular: true } : { spanish, english }
    })

    const description = `The Present Perfect is used for things that have happened recently, or in a period of time that isn't over yet (hoy, esta semana, este año), and for experiences up to now (¿has estado en México?). It is formed with the present of haber plus the past participle, ${participle.spanish}${irregular ? ', which is irregular' : ''}.`
    return { description, forms }
}
