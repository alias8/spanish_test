import type { ConjugationRow, ConjugationScreen } from './types'

const PRONOUNS = ['yo', 'tú', 'él, usted', 'nosotros', 'ellos, ustedes']

function buildConjugationRows(tenseKey: string, endings: string[][]): ConjugationRow[] {
    return PRONOUNS.map((pronoun, rowIndex) => ({
        pronoun,
        cells: CONJUGATION_VERBS.map((verb, columnIndex) => ({
            id: `${tenseKey}-${rowIndex}-${columnIndex}`,
            stem: verb.stem,
            ending: endings[rowIndex][columnIndex],
        })),
    }))
}

const PRESENT_ENDINGS = [
    ['o', 'o', 'o'],
    ['as', 'es', 'es'],
    ['a', 'e', 'e'],
    ['amos', 'emos', 'imos'],
    ['an', 'en', 'en'],
]

const PRETERITE_ENDINGS = [
    ['é', 'í', 'í'],
    ['aste', 'iste', 'iste'],
    ['ó', 'ió', 'ió'],
    ['amos', 'imos', 'imos'],
    ['aron', 'ieron', 'ieron'],
]

const IMPERFECT_ENDINGS = [
    ['aba', 'ía', 'ía'],
    ['abas', 'ías', 'ías'],
    ['aba', 'ía', 'ía'],
    ['ábamos', 'íamos', 'íamos'],
    ['aban', 'ían', 'ían'],
]

const CONJUGATION_VERBS = [
    { infinitive: 'hablar', stem: 'habl' },
    { infinitive: 'comer', stem: 'com' },
    { infinitive: 'vivir', stem: 'viv' },
]

export const CONJUGATION_SCREENS: ConjugationScreen[] = [
    {
        kind: 'conjugation',
        label: 'Present Tense',
        description: 'The present tense describes actions happening right now or that happen regularly.',
        verbs: CONJUGATION_VERBS.map(v => v.infinitive),
        rows: buildConjugationRows('present', PRESENT_ENDINGS),
    },
    {
        kind: 'conjugation',
        label: 'Preterite',
        description: 'The preterite describes completed actions in the past with a clear beginning and end.',
        verbs: CONJUGATION_VERBS.map(v => v.infinitive),
        rows: buildConjugationRows('preterite', PRETERITE_ENDINGS),
    },
    {
        kind: 'conjugation',
        label: 'Imperfect',
        description: 'The imperfect describes ongoing, repeated, or background actions in the past.',
        verbs: CONJUGATION_VERBS.map(v => v.infinitive),
        rows: buildConjugationRows('imperfect', IMPERFECT_ENDINGS),
    },
]
