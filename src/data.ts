export type NumberEntry = { value: number; spanish: string }

export type ConjugationEntry = { id: string; stem: string; ending: string }
export type ConjugationRow = { pronoun: string; cells: ConjugationEntry[] }
export type NumberScreen = { kind: 'numbers'; label: string; col1: NumberEntry[]; col2: NumberEntry[] }
export type ConjugationScreen = { kind: 'conjugation'; label: string; description: string; verbs: string[]; rows: ConjugationRow[] }

export type VerbForm = { pronoun: string; spanish: string; english: string; irregular?: boolean }
export type VerbTense = {
  name: string
  spanishName: string
  description: string
  example: { spanish: string; english: string }
  forms: VerbForm[]
}
export type VerbInfoRow = { item: string; spanish: string; english: string }
export type VerbEntry = {
  infinitive: string
  translation: string
  summary: string
  infinitiveForms: VerbInfoRow[]
  tenses: VerbTense[]
}
export type VerbLookupScreen = { kind: 'verbs'; label: string }

export type Screen = NumberScreen | ConjugationScreen | VerbLookupScreen

const ALL_NUMBERS: NumberEntry[] = [
  { value: 1,  spanish: 'uno' },
  { value: 2,  spanish: 'dos' },
  { value: 3,  spanish: 'tres' },
  { value: 4,  spanish: 'cuatro' },
  { value: 5,  spanish: 'cinco' },
  { value: 6,  spanish: 'seis' },
  { value: 7,  spanish: 'siete' },
  { value: 8,  spanish: 'ocho' },
  { value: 9,  spanish: 'nueve' },
  { value: 10, spanish: 'diez' },
  { value: 11, spanish: 'once' },
  { value: 12, spanish: 'doce' },
  { value: 13, spanish: 'trece' },
  { value: 14, spanish: 'catorce' },
  { value: 15, spanish: 'quince' },
  { value: 16, spanish: 'dieciséis' },
  { value: 17, spanish: 'diecisiete' },
  { value: 18, spanish: 'dieciocho' },
  { value: 19, spanish: 'diecinueve' },
  { value: 20, spanish: 'veinte' },
  { value: 21, spanish: 'veintiuno' },
  { value: 22, spanish: 'veintidós' },
  { value: 23, spanish: 'veintitrés' },
  { value: 24, spanish: 'veinticuatro' },
  { value: 25, spanish: 'veinticinco' },
  { value: 26, spanish: 'veintiséis' },
  { value: 27, spanish: 'veintisiete' },
  { value: 28, spanish: 'veintiocho' },
  { value: 29, spanish: 'veintinueve' },
  { value: 30, spanish: 'treinta' },
  { value: 31, spanish: 'treinta y uno' },
  { value: 32, spanish: 'treinta y dos' },
  { value: 33, spanish: 'treinta y tres' },
  { value: 34, spanish: 'treinta y cuatro' },
  { value: 35, spanish: 'treinta y cinco' },
  { value: 36, spanish: 'treinta y seis' },
  { value: 37, spanish: 'treinta y siete' },
  { value: 38, spanish: 'treinta y ocho' },
  { value: 39, spanish: 'treinta y nueve' },
  { value: 40, spanish: 'cuarenta' },
]

const TENS: NumberEntry[] = [
  { value: 10,  spanish: 'diez' },
  { value: 20,  spanish: 'veinte' },
  { value: 30,  spanish: 'treinta' },
  { value: 40,  spanish: 'cuarenta' },
  { value: 50,  spanish: 'cincuenta' },
  { value: 60,  spanish: 'sesenta' },
  { value: 70,  spanish: 'setenta' },
  { value: 80,  spanish: 'ochenta' },
  { value: 90,  spanish: 'noventa' },
  { value: 100, spanish: 'cien' },
]

const HUNDREDS: NumberEntry[] = [
  { value: 100, spanish: 'cien' },
  { value: 101, spanish: 'ciento uno' },
  { value: 102, spanish: 'ciento dos' },
  { value: 103, spanish: 'ciento tres' },
  { value: 104, spanish: 'ciento cuatro' },
  { value: 105, spanish: 'ciento cinco' },
  { value: 106, spanish: 'ciento seis' },
  { value: 107, spanish: 'ciento siete' },
  { value: 108, spanish: 'ciento ocho' },
  { value: 109, spanish: 'ciento nueve' },
  { value: 110, spanish: 'ciento diez' },
  { value: 111, spanish: 'ciento once' },
  { value: 112, spanish: 'ciento doce' },
  { value: 113, spanish: 'ciento trece' },
  { value: 114, spanish: 'ciento catorce' },
  { value: 115, spanish: 'ciento quince' },
  { value: 116, spanish: 'ciento dieciséis' },
  { value: 117, spanish: 'ciento diecisiete' },
  { value: 118, spanish: 'ciento dieciocho' },
  { value: 119, spanish: 'ciento diecinueve' },
  { value: 120, spanish: 'ciento veinte' },
  { value: 121, spanish: 'ciento veintiuno' },
  { value: 122, spanish: 'ciento veintidós' },
  { value: 123, spanish: 'ciento veintitrés' },
  { value: 124, spanish: 'ciento veinticuatro' },
  { value: 125, spanish: 'ciento veinticinco' },
  { value: 126, spanish: 'ciento veintiséis' },
  { value: 127, spanish: 'ciento veintisiete' },
  { value: 128, spanish: 'ciento veintiocho' },
  { value: 129, spanish: 'ciento veintinueve' },
  { value: 130, spanish: 'ciento treinta' },
  { value: 131, spanish: 'ciento treinta y uno' },
  { value: 132, spanish: 'ciento treinta y dos' },
  { value: 133, spanish: 'ciento treinta y tres' },
  { value: 134, spanish: 'ciento treinta y cuatro' },
  { value: 135, spanish: 'ciento treinta y cinco' },
  { value: 136, spanish: 'ciento treinta y seis' },
  { value: 137, spanish: 'ciento treinta y siete' },
  { value: 138, spanish: 'ciento treinta y ocho' },
  { value: 139, spanish: 'ciento treinta y nueve' },
  { value: 140, spanish: 'ciento cuarenta' },
]

const ROUND_HUNDREDS: NumberEntry[] = [
  { value: 100,  spanish: 'cien' },
  { value: 200,  spanish: 'doscientos' },
  { value: 300,  spanish: 'trescientos' },
  { value: 400,  spanish: 'cuatrocientos' },
  { value: 500,  spanish: 'quinientos' },
  { value: 600,  spanish: 'seiscientos' },
  { value: 700,  spanish: 'setecientos' },
  { value: 800,  spanish: 'ochocientos' },
  { value: 900,  spanish: 'novecientos' },
  { value: 1000, spanish: 'mil' },
]

const THOUSANDS: NumberEntry[] = [
  { value: 1000,  spanish: 'mil' },
  { value: 2000,  spanish: 'dos mil' },
  { value: 3000,  spanish: 'tres mil' },
  { value: 4000,  spanish: 'cuatro mil' },
  { value: 5000,  spanish: 'cinco mil' },
  { value: 6000,  spanish: 'seis mil' },
  { value: 7000,  spanish: 'siete mil' },
  { value: 8000,  spanish: 'ocho mil' },
  { value: 9000,  spanish: 'nueve mil' },
  { value: 10000, spanish: 'diez mil' },
]

const YEARS: NumberEntry[] = [
  { value: 1000, spanish: 'mil' },
  { value: 1492, spanish: 'mil cuatrocientos noventa y dos' },
  { value: 1776, spanish: 'mil setecientos setenta y seis' },
  { value: 1815, spanish: 'mil ochocientos quince' },
  { value: 1900, spanish: 'mil novecientos' },
  { value: 1914, spanish: 'mil novecientos catorce' },
  { value: 1939, spanish: 'mil novecientos treinta y nueve' },
  { value: 1945, spanish: 'mil novecientos cuarenta y cinco' },
  { value: 1960, spanish: 'mil novecientos sesenta' },
  { value: 1969, spanish: 'mil novecientos sesenta y nueve' },
  { value: 1975, spanish: 'mil novecientos setenta y cinco' },
  { value: 1980, spanish: 'mil novecientos ochenta' },
  { value: 1985, spanish: 'mil novecientos ochenta y cinco' },
  { value: 1990, spanish: 'mil novecientos noventa' },
  { value: 1995, spanish: 'mil novecientos noventa y cinco' },
  { value: 1999, spanish: 'mil novecientos noventa y nueve' },
  { value: 2000, spanish: 'dos mil' },
  { value: 2010, spanish: 'dos mil diez' },
  { value: 2024, spanish: 'dos mil veinticuatro' },
  { value: 2050, spanish: 'dos mil cincuenta' },
]

const TRICKY_HUNDREDS: NumberEntry[] = [
  { value: 155, spanish: 'ciento cincuenta y cinco' },
  { value: 176, spanish: 'ciento setenta y seis' },
  { value: 193, spanish: 'ciento noventa y tres' },
  { value: 222, spanish: 'doscientos veintidós' },
  { value: 316, spanish: 'trescientos dieciséis' },
  { value: 423, spanish: 'cuatrocientos veintitrés' },
  { value: 444, spanish: 'cuatrocientos cuarenta y cuatro' },
  { value: 516, spanish: 'quinientos dieciséis' },
  { value: 522, spanish: 'quinientos veintidós' },
  { value: 550, spanish: 'quinientos cincuenta' },
  { value: 576, spanish: 'quinientos setenta y seis' },
  { value: 626, spanish: 'seiscientos veintiséis' },
  { value: 711, spanish: 'setecientos once' },
  { value: 726, spanish: 'setecientos veintiséis' },
  { value: 750, spanish: 'setecientos cincuenta' },
  { value: 789, spanish: 'setecientos ochenta y nueve' },
  { value: 816, spanish: 'ochocientos dieciséis' },
  { value: 916, spanish: 'novecientos dieciséis' },
  { value: 923, spanish: 'novecientos veintitrés' },
  { value: 999, spanish: 'novecientos noventa y nueve' },
]

const CONJUGATION_VERBS = [
  { infinitive: 'hablar', stem: 'habl' },
  { infinitive: 'comer', stem: 'com' },
  { infinitive: 'vivir', stem: 'viv' },
]

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

const CONJUGATION_SCREENS: ConjugationScreen[] = [
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

export const VERBS: VerbEntry[] = [
  {
    infinitive: 'ser',
    translation: 'to be',
    summary: 'Ser is the Spanish verb "to be". It is generally used to portray permanent situations, for example: I am from Spain, he is a profesor, she is tall, this watch is my mother\'s etc. You\'ll find that this particular verb is one of the most versatile out there, but also hugely irregular, following almost no rules. Ser is not to be confused with Estar, also meaning "to be", but used for different situations.',
    infinitiveForms: [
      { item: 'Infinitive', spanish: 'ser', english: 'to be (permanent)' },
      { item: 'Past participle', spanish: 'sido', english: 'been' },
      { item: 'Gerund', spanish: 'siendo', english: 'being' },
    ],
    tenses: [
      {
        name: 'Indicative Present',
        spanishName: 'El Presente',
        description: 'The Indicative Present of ser is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.',
        example: { spanish: 'soy estudiante', english: 'I am a student' },
        forms: [
          { pronoun: 'Yo', spanish: 'soy', english: 'I am', irregular: true },
          { pronoun: 'Tú', spanish: 'eres', english: 'you are', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'es', english: 's/he is', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'somos', english: 'we are', irregular: true },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'son', english: 'they are', irregular: true },
        ],
      },
      {
        name: 'Indicative Preterite',
        spanishName: 'El Pretérito Indefinido',
        description: 'The Indicative Preterite of ser is used to talk about actions completed in the past, at a specific point in time.',
        example: { spanish: 'fui estudiante', english: 'I was a student' },
        forms: [
          { pronoun: 'Yo', spanish: 'fui', english: 'I was', irregular: true },
          { pronoun: 'Tú', spanish: 'fuiste', english: 'you were', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'fue', english: 's/he was', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'fuimos', english: 'we were', irregular: true },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'fueron', english: 'they were', irregular: true },
        ],
      },
      {
        name: 'Indicative Imperfect',
        spanishName: 'El Pretérito Imperfecto',
        description: 'The Indicative Imperfect of ser is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
        example: { spanish: 'era estudiante', english: 'I used to be a student' },
        forms: [
          { pronoun: 'Yo', spanish: 'era', english: 'I used to be', irregular: true },
          { pronoun: 'Tú', spanish: 'eras', english: 'you used to be', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'era', english: 's/he used to be', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'éramos', english: 'we used to be', irregular: true },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'eran', english: 'they used to be', irregular: true },
        ],
      },
    ],
  },
  {
    infinitive: 'estar',
    translation: 'to be',
    summary: 'Estar is another Spanish verb which means "to be". In contrast to Ser, Estar is generally used to portray more temporary feelings or situations. For example: I am not at home, you are angry, she is at the concert, this cake is delicious, we are singing a song, this restaurant is very popular. This is an important and versatile verb that you will use in everyday life. Estar is also irregular in most cases, meaning you will need to learn the conjugations off by heart.',
    infinitiveForms: [
      { item: 'Infinitive', spanish: 'estar', english: 'to be (temporary)' },
      { item: 'Past participle', spanish: 'estado', english: 'been' },
      { item: 'Gerund', spanish: 'estando', english: 'being' },
    ],
    tenses: [
      {
        name: 'Indicative Present',
        spanishName: 'El Presente',
        description: 'The Indicative Present of estar is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.',
        example: { spanish: 'estoy cansado', english: 'I am tired' },
        forms: [
          { pronoun: 'Yo', spanish: 'estoy', english: 'I am', irregular: true },
          { pronoun: 'Tú', spanish: 'estás', english: 'you are', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'está', english: 's/he is', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'estamos', english: 'we are' },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'están', english: 'they are', irregular: true },
        ],
      },
      {
        name: 'Indicative Preterite',
        spanishName: 'El Pretérito Indefinido',
        description: 'The Indicative Preterite of estar is used to talk about actions completed in the past, at a specific point in time.',
        example: { spanish: 'estuve cansado', english: 'I was tired' },
        forms: [
          { pronoun: 'Yo', spanish: 'estuve', english: 'I was', irregular: true },
          { pronoun: 'Tú', spanish: 'estuviste', english: 'you were', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'estuvo', english: 's/he was', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'estuvimos', english: 'we were', irregular: true },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'estuvieron', english: 'they were', irregular: true },
        ],
      },
      {
        name: 'Indicative Imperfect',
        spanishName: 'El Pretérito Imperfecto',
        description: 'The Indicative Imperfect of estar is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
        example: { spanish: 'estaba cansado', english: 'I used to be tired' },
        forms: [
          { pronoun: 'Yo', spanish: 'estaba', english: 'I used to be' },
          { pronoun: 'Tú', spanish: 'estabas', english: 'you used to be' },
          { pronoun: 'Ella / Él / Usted', spanish: 'estaba', english: 's/he used to be' },
          { pronoun: 'Nosotras / Nosotros', spanish: 'estábamos', english: 'we used to be' },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'estaban', english: 'they used to be' },
        ],
      },
    ],
  },
]

export const SCREENS: Screen[] = [
  { kind: 'numbers', label: '1 – 20',      col1: ALL_NUMBERS.slice(0, 10),  col2: ALL_NUMBERS.slice(10, 20) },
  { kind: 'numbers', label: '21 – 40',     col1: ALL_NUMBERS.slice(20, 30), col2: ALL_NUMBERS.slice(30, 40) },
  { kind: 'numbers', label: 'Tens',        col1: TENS,                      col2: [] as NumberEntry[] },
  { kind: 'numbers', label: '101 – 120',   col1: HUNDREDS.slice(1, 11),     col2: HUNDREDS.slice(11, 21) },
  { kind: 'numbers', label: '121 – 140',   col1: HUNDREDS.slice(21, 31),    col2: HUNDREDS.slice(31, 41) },
  { kind: 'numbers', label: 'Hundreds',    col1: ROUND_HUNDREDS,            col2: [] as NumberEntry[] },
  { kind: 'numbers', label: 'Thousands',   col1: THOUSANDS,                 col2: [] as NumberEntry[] },
  { kind: 'numbers', label: 'Tricky 100s', col1: TRICKY_HUNDREDS.slice(0, 10), col2: TRICKY_HUNDREDS.slice(10) },
  { kind: 'numbers', label: 'Years',       col1: YEARS.slice(0, 10),        col2: YEARS.slice(10) },
  ...CONJUGATION_SCREENS,
  { kind: 'verbs', label: 'Verbs' },
]
