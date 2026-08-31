export type NumberEntry = { value: number; spanish: string }

export type ConjugationEntry = { id: string; stem: string; ending: string }
export type ConjugationRow = { pronoun: string; cells: ConjugationEntry[] }
export type NumberScreen = { kind: 'numbers'; label: string; col1: NumberEntry[]; col2: NumberEntry[] }
export type ConjugationScreen = { kind: 'conjugation'; label: string; description: string; verbs: string[]; rows: ConjugationRow[] }

export type VerbForm = { pronoun: string; spanish: string; english: string; irregular?: boolean }
export type VerbTense = {
  name: string
  spanishName: string
  description?: string
  example?: { spanish: string; english: string }
  forms: VerbForm[]
}
export type VerbInfoRow = { item: string; spanish: string; english: string }
export type VerbEntry = {
  infinitive: string
  translation: string
  summary?: string
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
  {
    infinitive: 'tener',
    translation: 'to have',
    summary: 'Tener is the Spanish verb "to have". It is an extremely useful verb and is largely irregular when conjugating. It is important to note that in Spanish, tener is used to portray a person\'s age; for example: "tengo 21 años". This literally translates to "I have 21 years". Another common use for Tener is to indicate an obligation, for example: "tengo que irme a casa" - "I have to go home". It is always followed by "que" to indicate this type of obligation or "must".',
    infinitiveForms: [
      { item: 'Infinitive', spanish: 'tener', english: 'to have' },
      { item: 'Past participle', spanish: 'tenido', english: 'had' },
      { item: 'Gerund', spanish: 'teniendo', english: 'having' },
    ],
    tenses: [
      {
        name: 'Indicative Present',
        spanishName: 'El Presente',
        description: 'The Indicative Present of tener is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.',
        example: { spanish: 'tengo un gato gris', english: 'I have a grey cat' },
        forms: [
          { pronoun: 'Yo', spanish: 'tengo', english: 'I have', irregular: true },
          { pronoun: 'Tú', spanish: 'tienes', english: 'you have', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'tiene', english: 's/he has', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'tenemos', english: 'we have' },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'tienen', english: 'they have', irregular: true },
        ],
      },
      {
        name: 'Indicative Preterite',
        spanishName: 'El Pretérito Indefinido',
        description: 'The Indicative Preterite of tener is used to talk about actions completed in the past, at a specific point in time.',
        example: { spanish: 'tuve un gato gris', english: 'I had a grey cat' },
        forms: [
          { pronoun: 'Yo', spanish: 'tuve', english: 'I had', irregular: true },
          { pronoun: 'Tú', spanish: 'tuviste', english: 'you had', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'tuvo', english: 's/he had', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'tuvimos', english: 'we had', irregular: true },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'tuvieron', english: 'they had', irregular: true },
        ],
      },
      {
        name: 'Indicative Imperfect',
        spanishName: 'El Pretérito Imperfecto',
        description: 'The Indicative Imperfect of tener is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
        example: { spanish: 'tenía un gato gris', english: 'I used to have a grey cat' },
        forms: [
          { pronoun: 'Yo', spanish: 'tenía', english: 'I used to have' },
          { pronoun: 'Tú', spanish: 'tenías', english: 'you used to have' },
          { pronoun: 'Ella / Él / Usted', spanish: 'tenía', english: 's/he used to have' },
          { pronoun: 'Nosotras / Nosotros', spanish: 'teníamos', english: 'we used to have' },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'tenían', english: 'they used to have' },
        ],
      },
    ],
  },
  {
    infinitive: 'ir',
    translation: 'to go',
    summary: 'Ir is the Spanish verb "to go", and is one of the most common irregular verbs in Spanish. It is used in various contexts like "I go to school", "you went to Mexico on holiday", "we are going to the concert on Saturday".',
    infinitiveForms: [
      { item: 'Infinitive', spanish: 'ir', english: 'to go' },
      { item: 'Past participle', spanish: 'ido', english: 'gone' },
      { item: 'Gerund', spanish: 'yendo', english: 'going' },
    ],
    tenses: [
      {
        name: 'Indicative Present',
        spanishName: 'El Presente',
        description: 'The Indicative Present of ir is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.',
        example: { spanish: 'voy al supermercado todos los sábados', english: 'I go to the supermarket every Saturday' },
        forms: [
          { pronoun: 'Yo', spanish: 'voy', english: 'I go', irregular: true },
          { pronoun: 'Tú', spanish: 'vas', english: 'you go', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'va', english: 's/he goes', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'vamos', english: 'we go', irregular: true },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'van', english: 'they go', irregular: true },
        ],
      },
      {
        name: 'Indicative Preterite',
        spanishName: 'El Pretérito Indefinido',
        description: 'The Indicative Preterite of ir is used to talk about actions completed in the past, at a specific point in time.',
        example: { spanish: 'fui al supermercado todos los sábados', english: 'I went to the supermarket every Saturday' },
        forms: [
          { pronoun: 'Yo', spanish: 'fui', english: 'I went', irregular: true },
          { pronoun: 'Tú', spanish: 'fuiste', english: 'you went', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'fue', english: 's/he went', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'fuimos', english: 'we went', irregular: true },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'fueron', english: 'they went', irregular: true },
        ],
      },
      {
        name: 'Indicative Imperfect',
        spanishName: 'El Pretérito Imperfecto',
        description: 'The Indicative Imperfect of ir is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
        example: { spanish: 'iba al supermercado todos los sábados', english: 'I used to go to the supermarket every Saturday' },
        forms: [
          { pronoun: 'Yo', spanish: 'iba', english: 'I used to go', irregular: true },
          { pronoun: 'Tú', spanish: 'ibas', english: 'you used to go', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'iba', english: 's/he used to go', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'íbamos', english: 'we used to go', irregular: true },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'iban', english: 'they used to go', irregular: true },
        ],
      },
    ],
  },
  {
    infinitive: 'hacer',
    translation: 'to do, to make',
    summary: 'Hacer is the Spanish verb meaning "to do / to make". It is extremely versatile, and one common use is to express the weather or time. In this sense, it is different from English, whereby we would use "to be". For example: "hace frío" is how to say "it is cold", which directly translates to "it makes cold".',
    infinitiveForms: [
      { item: 'Infinitive', spanish: 'hacer', english: 'to do, to make' },
      { item: 'Past participle', spanish: 'hecho', english: 'done' },
      { item: 'Gerund', spanish: 'haciendo', english: 'doing' },
    ],
    tenses: [
      {
        name: 'Indicative Present',
        spanishName: 'El Presente',
        description: 'The Indicative Present of hacer is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.',
        example: { spanish: 'hago los deberes después de cenar', english: 'I do my homework after dinner' },
        forms: [
          { pronoun: 'Yo', spanish: 'hago', english: 'I do', irregular: true },
          { pronoun: 'Tú', spanish: 'haces', english: 'you do', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'hace', english: 's/he does', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'hacemos', english: 'we do' },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'hacen', english: 'they do', irregular: true },
        ],
      },
      {
        name: 'Indicative Preterite',
        spanishName: 'El Pretérito Indefinido',
        description: 'The Indicative Preterite of hacer is used to talk about actions completed in the past, at a specific point in time.',
        example: { spanish: 'hice los deberes después de cenar', english: 'I did my homework after dinner' },
        forms: [
          { pronoun: 'Yo', spanish: 'hice', english: 'I did', irregular: true },
          { pronoun: 'Tú', spanish: 'hiciste', english: 'you did', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'hizo', english: 's/he did', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'hicimos', english: 'we did', irregular: true },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'hicieron', english: 'they did', irregular: true },
        ],
      },
      {
        name: 'Indicative Imperfect',
        spanishName: 'El Pretérito Imperfecto',
        description: 'The Indicative Imperfect of hacer is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
        example: { spanish: 'hacía los deberes después de cenar', english: 'I used to do my homework after dinner' },
        forms: [
          { pronoun: 'Yo', spanish: 'hacía', english: 'I used to do' },
          { pronoun: 'Tú', spanish: 'hacías', english: 'you used to do' },
          { pronoun: 'Ella / Él / Usted', spanish: 'hacía', english: 's/he used to do' },
          { pronoun: 'Nosotras / Nosotros', spanish: 'hacíamos', english: 'we used to do' },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'hacían', english: 'they used to do' },
        ],
      },
    ],
  },
  {
    infinitive: 'haber',
    translation: 'to have (helper verb)',
    summary: 'Haber is the Spanish verb meaning "to have". It is a very unique verb in that it is used in compound tenses as an auxiliary, meaning that is comes before the main verb in the sentence and is used to set the main verbs\' tense or mood. For example: He estado (I have been), hemos comido (we have eaten). It is also very commonly used as an impersonal verb, to say "there is / there are". For example: Hay mucho chocolate en el armario. (There is a lot of chocolate in the press).',
    infinitiveForms: [
      { item: 'Infinitive', spanish: 'haber', english: 'to have (helper verb)' },
      { item: 'Past participle', spanish: 'habido', english: 'had' },
      { item: 'Gerund', spanish: 'habiendo', english: 'having' },
    ],
    tenses: [
      {
        name: 'Indicative Present',
        spanishName: 'El Presente',
        description: 'As an auxiliary verb, haber in the indicative present is used to form the "indicative present perfect" tense.',
        example: { spanish: 'he escrito la carta', english: 'I have written the letter' },
        forms: [
          { pronoun: 'Yo', spanish: 'he', english: 'I have', irregular: true },
          { pronoun: 'Tú', spanish: 'has', english: 'you have', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'ha', english: 's/he has', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'hemos', english: 'we have', irregular: true },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'han', english: 'they have', irregular: true },
        ],
      },
      {
        name: 'Indicative Preterite',
        spanishName: 'El Pretérito Indefinido',
        description: 'Because haber is an auxiliary verb used to form compound conjugations, it is rarely used alone in this tense — except in the impersonal form, meaning "there was / there were".',
        example: { spanish: 'hubo una fiesta anoche', english: 'there was a party last night' },
        forms: [
          { pronoun: 'Yo', spanish: 'hube', english: 'I had', irregular: true },
          { pronoun: 'Tú', spanish: 'hubiste', english: 'you had', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'hubo', english: 's/he had', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'hubimos', english: 'we had', irregular: true },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'hubieron', english: 'they had', irregular: true },
        ],
      },
      {
        name: 'Indicative Imperfect',
        spanishName: 'El Pretérito Imperfecto',
        description: 'As an auxiliary verb, haber in the indicative imperfect is used to form the "indicative past perfect" tense.',
        example: { spanish: 'había escrito la carta', english: 'I had written the letter' },
        forms: [
          { pronoun: 'Yo', spanish: 'había', english: 'I had' },
          { pronoun: 'Tú', spanish: 'habías', english: 'you had' },
          { pronoun: 'Ella / Él / Usted', spanish: 'había', english: 's/he had' },
          { pronoun: 'Nosotras / Nosotros', spanish: 'habíamos', english: 'we had' },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'habían', english: 'they had' },
        ],
      },
    ],
  },
  {
    infinitive: 'ver',
    translation: 'to see, to watch',
    summary: 'Ver is the Spanish verb "to see". It is mostly irregular, so endings must be learned by heart. Ver can be used for a number of reasons, the most basic "to see", for example: "Veo un coche". It can also be used to describe "watching" a movie or tv show, asking a person if they have "seen" a particular movie or object, or to notice something.',
    infinitiveForms: [
      { item: 'Infinitive', spanish: 'ver', english: 'to see, to watch' },
      { item: 'Past participle', spanish: 'visto', english: 'seen' },
      { item: 'Gerund', spanish: 'viendo', english: 'seeing' },
    ],
    tenses: [
      {
        name: 'Indicative Present',
        spanishName: 'El Presente',
        description: 'The Indicative Present of ver is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.',
        example: { spanish: 'veo fantasmas', english: 'I see ghosts' },
        forms: [
          { pronoun: 'Yo', spanish: 'veo', english: 'I see', irregular: true },
          { pronoun: 'Tú', spanish: 'ves', english: 'you see', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 've', english: 's/he sees', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'vemos', english: 'we see' },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'ven', english: 'they see', irregular: true },
        ],
      },
      {
        name: 'Indicative Preterite',
        spanishName: 'El Pretérito Indefinido',
        description: 'The Indicative Preterite of ver is used to talk about actions completed in the past, at a specific point in time.',
        example: { spanish: 'vi fantasmas', english: 'I saw ghosts' },
        forms: [
          { pronoun: 'Yo', spanish: 'vi', english: 'I saw', irregular: true },
          { pronoun: 'Tú', spanish: 'viste', english: 'you saw', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'vio', english: 's/he saw', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'vimos', english: 'we saw', irregular: true },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'vieron', english: 'they saw', irregular: true },
        ],
      },
      {
        name: 'Indicative Imperfect',
        spanishName: 'El Pretérito Imperfecto',
        description: 'The Indicative Imperfect of ver is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
        example: { spanish: 'veía fantasmas', english: 'I used to see ghosts' },
        forms: [
          { pronoun: 'Yo', spanish: 'veía', english: 'I used to see', irregular: true },
          { pronoun: 'Tú', spanish: 'veías', english: 'you used to see', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'veía', english: 's/he used to see', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'veíamos', english: 'we used to see', irregular: true },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'veían', english: 'they used to see', irregular: true },
        ],
      },
    ],
  },
  {
    infinitive: 'venir',
    translation: 'to come',
    summary: 'Venir is the Spanish verb meaning "to come". Similar verbs to venir include: llegar (to arrive).',
    infinitiveForms: [
      { item: 'Infinitive', spanish: 'venir', english: 'to come' },
      { item: 'Past participle', spanish: 'venido', english: 'come' },
      { item: 'Gerund', spanish: 'viniendo', english: 'coming' },
    ],
    tenses: [
      {
        name: 'Indicative Present',
        spanishName: 'El Presente',
        description: 'The Indicative Present of venir is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.',
        example: { spanish: 'vengo a casa', english: 'I come home' },
        forms: [
          { pronoun: 'Yo', spanish: 'vengo', english: 'I come', irregular: true },
          { pronoun: 'Tú', spanish: 'vienes', english: 'you come', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'viene', english: 's/he comes', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'venimos', english: 'we come' },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'vienen', english: 'they come', irregular: true },
        ],
      },
      {
        name: 'Indicative Preterite',
        spanishName: 'El Pretérito Indefinido',
        description: 'The Indicative Preterite of venir is used to talk about actions completed in the past, at a specific point in time.',
        example: { spanish: 'vine a casa', english: 'I came home' },
        forms: [
          { pronoun: 'Yo', spanish: 'vine', english: 'I came', irregular: true },
          { pronoun: 'Tú', spanish: 'viniste', english: 'you came', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'vino', english: 's/he came', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'vinimos', english: 'we came', irregular: true },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'vinieron', english: 'they came', irregular: true },
        ],
      },
      {
        name: 'Indicative Imperfect',
        spanishName: 'El Pretérito Imperfecto',
        description: 'The Indicative Imperfect of venir is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
        example: { spanish: 'venía a casa', english: 'I used to come home' },
        forms: [
          { pronoun: 'Yo', spanish: 'venía', english: 'I used to come' },
          { pronoun: 'Tú', spanish: 'venías', english: 'you used to come' },
          { pronoun: 'Ella / Él / Usted', spanish: 'venía', english: 's/he used to come' },
          { pronoun: 'Nosotras / Nosotros', spanish: 'veníamos', english: 'we used to come' },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'venían', english: 'they used to come' },
        ],
      },
    ],
  },
  {
    infinitive: 'vivir',
    translation: 'to live',
    summary: 'Vivir is the Spanish verb for "to live". It is a regular IR verb, and one of the most popular 100 Spanish verbs.',
    infinitiveForms: [
      { item: 'Infinitive', spanish: 'vivir', english: 'to live' },
      { item: 'Past participle', spanish: 'vivido', english: 'lived' },
      { item: 'Gerund', spanish: 'viviendo', english: 'living' },
    ],
    tenses: [
      {
        name: 'Indicative Present',
        spanishName: 'El Presente',
        description: 'The Indicative Present of vivir is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.',
        example: { spanish: 'vivo cerca de mi hermana', english: 'I live close to my sister' },
        forms: [
          { pronoun: 'Yo', spanish: 'vivo', english: 'I live' },
          { pronoun: 'Tú', spanish: 'vives', english: 'you live' },
          { pronoun: 'Ella / Él / Usted', spanish: 'vive', english: 's/he lives' },
          { pronoun: 'Nosotras / Nosotros', spanish: 'vivimos', english: 'we live' },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'viven', english: 'they live' },
        ],
      },
      {
        name: 'Indicative Preterite',
        spanishName: 'El Pretérito Indefinido',
        description: 'The Indicative Preterite of vivir is used to talk about actions completed in the past, at a specific point in time.',
        example: { spanish: 'viví cerca de mi hermana', english: 'I lived close to my sister' },
        forms: [
          { pronoun: 'Yo', spanish: 'viví', english: 'I lived' },
          { pronoun: 'Tú', spanish: 'viviste', english: 'you lived' },
          { pronoun: 'Ella / Él / Usted', spanish: 'vivió', english: 's/he lived' },
          { pronoun: 'Nosotras / Nosotros', spanish: 'vivimos', english: 'we lived' },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'vivieron', english: 'they lived' },
        ],
      },
      {
        name: 'Indicative Imperfect',
        spanishName: 'El Pretérito Imperfecto',
        description: 'The Indicative Imperfect of vivir is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
        example: { spanish: 'vivía cerca de mi hermana', english: 'I used to live close to my sister' },
        forms: [
          { pronoun: 'Yo', spanish: 'vivía', english: 'I used to live' },
          { pronoun: 'Tú', spanish: 'vivías', english: 'you used to live' },
          { pronoun: 'Ella / Él / Usted', spanish: 'vivía', english: 's/he used to live' },
          { pronoun: 'Nosotras / Nosotros', spanish: 'vivíamos', english: 'we used to live' },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'vivían', english: 'they used to live' },
        ],
      },
    ],
  },
  {
    infinitive: 'poder',
    translation: 'to be able to / can',
    summary: 'Poder is the Spanish verb meaning "to be able to / to can". This verb can be used to ask for permission, e.g. ¿Podría usar el baño?, or to express tolerance for something "No puedo más", meaning "I can\'t do any more". In its purist form, it is used to express capability to do something. For example: "Mi hermano puede nadar 1 kilómetro sin parar" - "My brother can swim 1km without stopping".',
    infinitiveForms: [
      { item: 'Infinitive', spanish: 'poder', english: 'to be able to / can' },
      { item: 'Past participle', spanish: 'podido', english: 'been able to' },
      { item: 'Gerund', spanish: 'pudiendo', english: 'being able to' },
    ],
    tenses: [
      {
        name: 'Indicative Present',
        spanishName: 'El Presente',
        description: 'The Indicative Present of poder is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.',
        example: { spanish: 'puedo hablar español', english: 'I am able to speak Spanish' },
        forms: [
          { pronoun: 'Yo', spanish: 'puedo', english: 'I am able to', irregular: true },
          { pronoun: 'Tú', spanish: 'puedes', english: 'you are able to', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'puede', english: 's/he is able to', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'podemos', english: 'we are able to' },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'pueden', english: 'they are able to', irregular: true },
        ],
      },
      {
        name: 'Indicative Preterite',
        spanishName: 'El Pretérito Indefinido',
        description: 'The Indicative Preterite of poder is used to talk about actions completed in the past, at a specific point in time.',
        example: { spanish: 'pude hablar español', english: 'I was able to speak Spanish' },
        forms: [
          { pronoun: 'Yo', spanish: 'pude', english: 'I was able to', irregular: true },
          { pronoun: 'Tú', spanish: 'pudiste', english: 'you were able to', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'pudo', english: 's/he was able to', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'pudimos', english: 'we were able to', irregular: true },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'pudieron', english: 'they were able to', irregular: true },
        ],
      },
      {
        name: 'Indicative Imperfect',
        spanishName: 'El Pretérito Imperfecto',
        description: 'The Indicative Imperfect of poder is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
        example: { spanish: 'podía hablar español', english: 'I used to be able to speak Spanish' },
        forms: [
          { pronoun: 'Yo', spanish: 'podía', english: 'I used to be able to' },
          { pronoun: 'Tú', spanish: 'podías', english: 'you used to be able to' },
          { pronoun: 'Ella / Él / Usted', spanish: 'podía', english: 's/he used to be able to' },
          { pronoun: 'Nosotras / Nosotros', spanish: 'podíamos', english: 'we used to be able to' },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'podían', english: 'they used to be able to' },
        ],
      },
    ],
  },
  {
    infinitive: 'saber',
    translation: 'to know (things)',
    summary: 'Saber is the Spanish verb meaning "to know" (things). It is mostly used to portray knowledge - for example: "I speak Spanish" and "I know all the capital cities in Europe". It can also be used to express taste; for example: "The cake tastes like chocolate and orange". Saber is not to be confused with Conocer, also meaning "to know" but used in different situations.',
    infinitiveForms: [
      { item: 'Infinitive', spanish: 'saber', english: 'to know (things)' },
      { item: 'Past participle', spanish: 'sabido', english: 'known' },
      { item: 'Gerund', spanish: 'sabiendo', english: 'knowing' },
    ],
    tenses: [
      {
        name: 'Indicative Present',
        spanishName: 'El Presente',
        description: 'The Indicative Present of saber is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.',
        example: { spanish: 'sé español', english: 'I know Spanish' },
        forms: [
          { pronoun: 'Yo', spanish: 'sé', english: 'I know', irregular: true },
          { pronoun: 'Tú', spanish: 'sabes', english: 'you know' },
          { pronoun: 'Ella / Él / Usted', spanish: 'sabe', english: 's/he knows' },
          { pronoun: 'Nosotras / Nosotros', spanish: 'sabemos', english: 'we know' },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'saben', english: 'they know' },
        ],
      },
      {
        name: 'Indicative Preterite',
        spanishName: 'El Pretérito Indefinido',
        description: 'The Indicative Preterite of saber is used to talk about actions completed in the past, at a specific point in time.',
        example: { spanish: 'supe español', english: 'I knew Spanish' },
        forms: [
          { pronoun: 'Yo', spanish: 'supe', english: 'I knew', irregular: true },
          { pronoun: 'Tú', spanish: 'supiste', english: 'you knew', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'supo', english: 's/he knew', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'supimos', english: 'we knew', irregular: true },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'supieron', english: 'they knew', irregular: true },
        ],
      },
      {
        name: 'Indicative Imperfect',
        spanishName: 'El Pretérito Imperfecto',
        description: 'The Indicative Imperfect of saber is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
        example: { spanish: 'sabía español', english: 'I used to know Spanish' },
        forms: [
          { pronoun: 'Yo', spanish: 'sabía', english: 'I used to know' },
          { pronoun: 'Tú', spanish: 'sabías', english: 'you used to know' },
          { pronoun: 'Ella / Él / Usted', spanish: 'sabía', english: 's/he used to know' },
          { pronoun: 'Nosotras / Nosotros', spanish: 'sabíamos', english: 'we used to know' },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'sabían', english: 'they used to know' },
        ],
      },
    ],
  },
  {
    infinitive: 'decir',
    translation: 'to say, to tell',
    summary: 'Decir is the Spanish verb meaning "to say / to tell". For example: "What did you say?" or "I swear to tell the truth". In Spain, it is used when answering the phone - you will hear "¿Diga?" meaning "hello" or "¡Digame!", literally translating to "tell me". It can also be used to express rumours and opinions - "they say it\'s going to rain all next week" and "What do you say, will we go on holidays in June?"',
    infinitiveForms: [
      { item: 'Infinitive', spanish: 'decir', english: 'to say, to tell' },
      { item: 'Past participle', spanish: 'dicho', english: 'said' },
      { item: 'Gerund', spanish: 'diciendo', english: 'saying' },
    ],
    tenses: [
      {
        name: 'Indicative Present',
        spanishName: 'El Presente',
        description: 'The Indicative Present of decir is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.',
        example: { spanish: 'digo hola al profesor', english: 'I say hello to the teacher' },
        forms: [
          { pronoun: 'Yo', spanish: 'digo', english: 'I say', irregular: true },
          { pronoun: 'Tú', spanish: 'dices', english: 'you say', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'dice', english: 's/he says', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'decimos', english: 'we say' },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'dicen', english: 'they say', irregular: true },
        ],
      },
      {
        name: 'Indicative Preterite',
        spanishName: 'El Pretérito Indefinido',
        description: 'The Indicative Preterite of decir is used to talk about actions completed in the past, at a specific point in time.',
        example: { spanish: 'dije hola al profesor', english: 'I said hello to the teacher' },
        forms: [
          { pronoun: 'Yo', spanish: 'dije', english: 'I said', irregular: true },
          { pronoun: 'Tú', spanish: 'dijiste', english: 'you said', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'dijo', english: 's/he said', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'dijimos', english: 'we said', irregular: true },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'dijeron', english: 'they said', irregular: true },
        ],
      },
      {
        name: 'Indicative Imperfect',
        spanishName: 'El Pretérito Imperfecto',
        description: 'The Indicative Imperfect of decir is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
        example: { spanish: 'decía hola al profesor', english: 'I used to say hello to the teacher' },
        forms: [
          { pronoun: 'Yo', spanish: 'decía', english: 'I used to say' },
          { pronoun: 'Tú', spanish: 'decías', english: 'you used to say' },
          { pronoun: 'Ella / Él / Usted', spanish: 'decía', english: 's/he used to say' },
          { pronoun: 'Nosotras / Nosotros', spanish: 'decíamos', english: 'we used to say' },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'decían', english: 'they used to say' },
        ],
      },
    ],
  },
  {
    infinitive: 'dar',
    translation: 'to give',
    summary: 'Dar is the Spanish verb "to give". It is a very versatile verb, with many meanings and uses. For example: "Dame las llaves" - "Give me the keys", "dar las gracias" - "to give thanks", to express fear "Me da miedo" - "It scares me" as well as to perform an action "dar un paseo" - "to go for a walk".',
    infinitiveForms: [
      { item: 'Infinitive', spanish: 'dar', english: 'to give' },
      { item: 'Past participle', spanish: 'dado', english: 'given' },
      { item: 'Gerund', spanish: 'dando', english: 'giving' },
    ],
    tenses: [
      {
        name: 'Indicative Present',
        spanishName: 'El Presente',
        description: 'The Indicative Present of dar is used to talk about situations, events or thoughts that are happening now or in the near future.',
        example: { spanish: 'doy regalos a mis hermanos', english: 'I give presents to my siblings' },
        forms: [
          { pronoun: 'Yo', spanish: 'doy', english: 'I give', irregular: true },
          { pronoun: 'Tú', spanish: 'das', english: 'you give', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'da', english: 's/he gives', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'damos', english: 'we give' },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'dan', english: 'they give', irregular: true },
        ],
      },
      {
        name: 'Indicative Preterite',
        spanishName: 'El Pretérito Indefinido',
        description: 'The Indicative Preterite of dar is used to talk about actions completed in the past, at a specific point in time.',
        example: { spanish: 'di regalos a mis hermanos', english: 'I gave presents to my siblings' },
        forms: [
          { pronoun: 'Yo', spanish: 'di', english: 'I gave', irregular: true },
          { pronoun: 'Tú', spanish: 'diste', english: 'you gave', irregular: true },
          { pronoun: 'Ella / Él / Usted', spanish: 'dio', english: 's/he gave', irregular: true },
          { pronoun: 'Nosotras / Nosotros', spanish: 'dimos', english: 'we gave', irregular: true },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'dieron', english: 'they gave', irregular: true },
        ],
      },
      {
        name: 'Indicative Imperfect',
        spanishName: 'El Pretérito Imperfecto',
        description: 'The Indicative Imperfect of dar is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
        example: { spanish: 'daba regalos a mis hermanos', english: 'I used to give presents to my siblings' },
        forms: [
          { pronoun: 'Yo', spanish: 'daba', english: 'I used to give' },
          { pronoun: 'Tú', spanish: 'dabas', english: 'you used to give' },
          { pronoun: 'Ella / Él / Usted', spanish: 'daba', english: 's/he used to give' },
          { pronoun: 'Nosotras / Nosotros', spanish: 'dábamos', english: 'we used to give' },
          { pronoun: 'Ellas / Ellos / Ustedes', spanish: 'daban', english: 'they used to give' },
        ],
      },
    ],
  },
]

type SimpleForm = [pronoun: string, spanish: string, english: string, irregular?: boolean]

function buildTense(name: string, spanishName: string, forms: SimpleForm[]): VerbTense {
  return {
    name,
    spanishName,
    forms: forms.map(([pronoun, spanish, english, irregular]) => (
      irregular ? { pronoun, spanish, english, irregular: true } : { pronoun, spanish, english }
    )),
  }
}

function simpleVerb(
  infinitive: string,
  translation: string,
  infinitiveForms: [string, string, string][],
  present: SimpleForm[],
  preterite: SimpleForm[],
  imperfect: SimpleForm[],
): VerbEntry {
  return {
    infinitive,
    translation,
    infinitiveForms: infinitiveForms.map(([item, spanish, english]) => ({ item, spanish, english })),
    tenses: [
      buildTense('Indicative Present', 'El Presente', present),
      buildTense('Indicative Preterite', 'El Pretérito Indefinido', preterite),
      buildTense('Indicative Imperfect', 'El Pretérito Imperfecto', imperfect),
    ],
  }
}

const BULK_VERBS: VerbEntry[] = [
  simpleVerb('llegar', 'to arrive', [
    ['Infinitive', 'llegar', 'to arrive'], ['Past participle', 'llegado', 'arrived'], ['Gerund', 'llegando', 'arriving'],
  ], [
    ['Yo', 'llego', 'I arrive'], ['Tú', 'llegas', 'you arrive'], ['Ella / Él / Usted', 'llega', 's/he arrives'],
    ['Nosotras / Nosotros', 'llegamos', 'we arrive'], ['Ellas / Ellos / Ustedes', 'llegan', 'they arrive'],
  ], [
    ['Yo', 'llegué', 'I arrived', true], ['Tú', 'llegaste', 'you arrived'], ['Ella / Él / Usted', 'llegó', 's/he arrived'],
    ['Nosotras / Nosotros', 'llegamos', 'we arrived'], ['Ellas / Ellos / Ustedes', 'llegaron', 'they arrived'],
  ], [
    ['Yo', 'llegaba', 'I used to arrive'], ['Tú', 'llegabas', 'you used to arrive'], ['Ella / Él / Usted', 'llegaba', 's/he used to arrive'],
    ['Nosotras / Nosotros', 'llegábamos', 'we used to arrive'], ['Ellas / Ellos / Ustedes', 'llegaban', 'they used to arrive'],
  ]),
  simpleVerb('llevar', 'to carry, to take, to wear', [
    ['Infinitive', 'llevar', 'to carry'], ['Past participle', 'llevado', 'carried'], ['Gerund', 'llevando', 'carrying'],
  ], [
    ['Yo', 'llevo', 'I carry'], ['Tú', 'llevas', 'you carry'], ['Ella / Él / Usted', 'lleva', 's/he carries'],
    ['Nosotras / Nosotros', 'llevamos', 'we carry'], ['Ellas / Ellos / Ustedes', 'llevan', 'they carry'],
  ], [
    ['Yo', 'llevé', 'I carried'], ['Tú', 'llevaste', 'you carried'], ['Ella / Él / Usted', 'llevó', 's/he carried'],
    ['Nosotras / Nosotros', 'llevamos', 'we carried'], ['Ellas / Ellos / Ustedes', 'llevaron', 'they carried'],
  ], [
    ['Yo', 'llevaba', 'I used to carry'], ['Tú', 'llevabas', 'you used to carry'], ['Ella / Él / Usted', 'llevaba', 's/he used to carry'],
    ['Nosotras / Nosotros', 'llevábamos', 'we used to carry'], ['Ellas / Ellos / Ustedes', 'llevaban', 'they used to carry'],
  ]),
  simpleVerb('llamar', 'to call', [
    ['Infinitive', 'llamar', 'to call'], ['Past participle', 'llamado', 'called'], ['Gerund', 'llamando', 'calling'],
  ], [
    ['Yo', 'llamo', 'I call'], ['Tú', 'llamas', 'you call'], ['Ella / Él / Usted', 'llama', 's/he calls'],
    ['Nosotras / Nosotros', 'llamamos', 'we call'], ['Ellas / Ellos / Ustedes', 'llaman', 'they call'],
  ], [
    ['Yo', 'llamé', 'I called'], ['Tú', 'llamaste', 'you called'], ['Ella / Él / Usted', 'llamó', 's/he called'],
    ['Nosotras / Nosotros', 'llamamos', 'we called'], ['Ellas / Ellos / Ustedes', 'llamaron', 'they called'],
  ], [
    ['Yo', 'llamaba', 'I used to call'], ['Tú', 'llamabas', 'you used to call'], ['Ella / Él / Usted', 'llamaba', 's/he used to call'],
    ['Nosotras / Nosotros', 'llamábamos', 'we used to call'], ['Ellas / Ellos / Ustedes', 'llamaban', 'they used to call'],
  ]),
  simpleVerb('ponerse', 'to put on', [
    ['Infinitive', 'ponerse', 'to put on'], ['Past participle', 'puesto', 'put on'], ['Gerund', 'poniendo', 'putting on'],
  ], [
    ['Yo', 'me pongo', 'I put on', true], ['Tú', 'te pones', 'you put on'], ['Ella / Él / Usted', 'se pone', 's/he puts on'],
    ['Nosotras / Nosotros', 'nos ponemos', 'we put on'], ['Ellas / Ellos / Ustedes', 'se ponen', 'they put on'],
  ], [
    ['Yo', 'me puse', 'I put on', true], ['Tú', 'te pusiste', 'you put on'], ['Ella / Él / Usted', 'se puso', 's/he put on'],
    ['Nosotras / Nosotros', 'nos pusimos', 'we put on'], ['Ellas / Ellos / Ustedes', 'se pusieron', 'they put on'],
  ], [
    ['Yo', 'me ponía', 'I used to put on'], ['Tú', 'te ponías', 'you used to put on'], ['Ella / Él / Usted', 'se ponía', 's/he used to put on'],
    ['Nosotras / Nosotros', 'nos poníamos', 'we used to put on'], ['Ellas / Ellos / Ustedes', 'se ponían', 'they used to put on'],
  ]),
  simpleVerb('perder', 'to lose', [
    ['Infinitive', 'perder', 'to lose'], ['Past participle', 'perdido', 'lost'], ['Gerund', 'perdiendo', 'losing'],
  ], [
    ['Yo', 'pierdo', 'I lose', true], ['Tú', 'pierdes', 'you lose', true], ['Ella / Él / Usted', 'pierde', 's/he loses', true],
    ['Nosotras / Nosotros', 'perdemos', 'we lose'], ['Ellas / Ellos / Ustedes', 'pierden', 'they lose', true],
  ], [
    ['Yo', 'perdí', 'I lost'], ['Tú', 'perdiste', 'you lost'], ['Ella / Él / Usted', 'perdió', 's/he lost'],
    ['Nosotras / Nosotros', 'perdimos', 'we lost'], ['Ellas / Ellos / Ustedes', 'perdieron', 'they lost'],
  ], [
    ['Yo', 'perdía', 'I used to lose'], ['Tú', 'perdías', 'you used to lose'], ['Ella / Él / Usted', 'perdía', 's/he used to lose'],
    ['Nosotras / Nosotros', 'perdíamos', 'we used to lose'], ['Ellas / Ellos / Ustedes', 'perdían', 'they used to lose'],
  ]),
  simpleVerb('probar', 'to try, to taste, to test', [
    ['Infinitive', 'probar', 'to try'], ['Past participle', 'probado', 'tried'], ['Gerund', 'probando', 'trying'],
  ], [
    ['Yo', 'pruebo', 'I try', true], ['Tú', 'pruebas', 'you try', true], ['Ella / Él / Usted', 'prueba', 's/he tries', true],
    ['Nosotras / Nosotros', 'probamos', 'we try'], ['Ellas / Ellos / Ustedes', 'prueban', 'they try', true],
  ], [
    ['Yo', 'probé', 'I tried'], ['Tú', 'probaste', 'you tried'], ['Ella / Él / Usted', 'probó', 's/he tried'],
    ['Nosotras / Nosotros', 'probamos', 'we tried'], ['Ellas / Ellos / Ustedes', 'probaron', 'they tried'],
  ], [
    ['Yo', 'probaba', 'I used to try'], ['Tú', 'probabas', 'you used to try'], ['Ella / Él / Usted', 'probaba', 's/he used to try'],
    ['Nosotras / Nosotros', 'probábamos', 'we used to try'], ['Ellas / Ellos / Ustedes', 'probaban', 'they used to try'],
  ]),
  simpleVerb('conocer', 'to know (people, places)', [
    ['Infinitive', 'conocer', 'to know'], ['Past participle', 'conocido', 'known'], ['Gerund', 'conociendo', 'knowing'],
  ], [
    ['Yo', 'conozco', 'I know', true], ['Tú', 'conoces', 'you know'], ['Ella / Él / Usted', 'conoce', 's/he knows'],
    ['Nosotras / Nosotros', 'conocemos', 'we know'], ['Ellas / Ellos / Ustedes', 'conocen', 'they know'],
  ], [
    ['Yo', 'conocí', 'I knew'], ['Tú', 'conociste', 'you knew'], ['Ella / Él / Usted', 'conoció', 's/he knew'],
    ['Nosotras / Nosotros', 'conocimos', 'we knew'], ['Ellas / Ellos / Ustedes', 'conocieron', 'they knew'],
  ], [
    ['Yo', 'conocía', 'I used to know'], ['Tú', 'conocías', 'you used to know'], ['Ella / Él / Usted', 'conocía', 's/he used to know'],
    ['Nosotras / Nosotros', 'conocíamos', 'we used to know'], ['Ellas / Ellos / Ustedes', 'conocían', 'they used to know'],
  ]),
  simpleVerb('sentirse', 'to feel', [
    ['Infinitive', 'sentirse', 'to feel'], ['Past participle', 'sentido', 'felt'], ['Gerund', 'sintiendo', 'feeling'],
  ], [
    ['Yo', 'me siento', 'I feel', true], ['Tú', 'te sientes', 'you feel', true], ['Ella / Él / Usted', 'se siente', 's/he feels', true],
    ['Nosotras / Nosotros', 'nos sentimos', 'we feel'], ['Ellas / Ellos / Ustedes', 'se sienten', 'they feel', true],
  ], [
    ['Yo', 'me sentí', 'I felt', true], ['Tú', 'te sentiste', 'you felt', true], ['Ella / Él / Usted', 'se sintió', 's/he felt', true],
    ['Nosotras / Nosotros', 'nos sentimos', 'we felt'], ['Ellas / Ellos / Ustedes', 'se sintieron', 'they felt', true],
  ], [
    ['Yo', 'me sentía', 'I used to feel'], ['Tú', 'te sentías', 'you used to feel'], ['Ella / Él / Usted', 'se sentía', 's/he used to feel'],
    ['Nosotras / Nosotros', 'nos sentíamos', 'we used to feel'], ['Ellas / Ellos / Ustedes', 'se sentían', 'they used to feel'],
  ]),
  simpleVerb('sentarse', 'to sit (oneself)', [
    ['Infinitive', 'sentarse', 'to sit'], ['Past participle', 'sentado', 'sat'], ['Gerund', 'sentando', 'sitting'],
  ], [
    ['Yo', 'me siento', 'I sit', true], ['Tú', 'te sientas', 'you sit', true], ['Ella / Él / Usted', 'se sienta', 's/he sits', true],
    ['Nosotras / Nosotros', 'nos sentamos', 'we sit'], ['Ellas / Ellos / Ustedes', 'se sientan', 'they sit', true],
  ], [
    ['Yo', 'me senté', 'I sat'], ['Tú', 'te sentaste', 'you sat'], ['Ella / Él / Usted', 'se sentó', 's/he sat'],
    ['Nosotras / Nosotros', 'nos sentamos', 'we sat'], ['Ellas / Ellos / Ustedes', 'se sentaron', 'they sat'],
  ], [
    ['Yo', 'me sentaba', 'I used to sit'], ['Tú', 'te sentabas', 'you used to sit'], ['Ella / Él / Usted', 'se sentaba', 's/he used to sit'],
    ['Nosotras / Nosotros', 'nos sentábamos', 'we used to sit'], ['Ellas / Ellos / Ustedes', 'se sentaban', 'they used to sit'],
  ]),
  simpleVerb('encantar', 'to love, to enchant', [
    ['Infinitive', 'encantar', 'to love, to enchant'], ['Past participle', 'encantado', 'loved'], ['Gerund', 'encantando', 'loving'],
  ], [
    ['Yo', 'me encanta / me encantan', 'I love'], ['Tú', 'te encanta / te encantan', 'you love'], ['Ella / Él / Usted', 'le encanta / le encantan', 's/he loves'],
    ['Nosotras / Nosotros', 'nos encanta / nos encantan', 'we love'], ['Ellas / Ellos / Ustedes', 'les encanta / les encantan', 'they love'],
  ], [
    ['Yo', 'me encantó / me encantaron', 'I loved'], ['Tú', 'te encantó / te encantaron', 'you loved'], ['Ella / Él / Usted', 'le encantó / le encantaron', 's/he loved'],
    ['Nosotras / Nosotros', 'nos encantó / nos encantaron', 'we loved'], ['Ellas / Ellos / Ustedes', 'les encantó / les encantaron', 'they loved'],
  ], [
    ['Yo', 'me encantaba / me encantaban', 'I used to love'], ['Tú', 'te encantaba / te encantaban', 'you used to love'], ['Ella / Él / Usted', 'le encantaba / le encantaban', 's/he used to love'],
    ['Nosotras / Nosotros', 'nos encantaba / nos encantaban', 'we used to love'], ['Ellas / Ellos / Ustedes', 'les encantaba / les encantaban', 'they used to love'],
  ]),
  simpleVerb('gustar', 'to like, to be pleasing to', [
    ['Infinitive', 'gustar', 'to like'], ['Past participle', 'gustado', 'liked'], ['Gerund', 'gustando', 'liking'],
  ], [
    ['Yo', 'me gusta / me gustan', 'I like'], ['Tú', 'te gusta / te gustan', 'you like'], ['Ella / Él / Usted', 'le gusta / le gustan', 's/he likes'],
    ['Nosotras / Nosotros', 'nos gusta / nos gustan', 'we like'], ['Ellas / Ellos / Ustedes', 'les gusta / les gustan', 'they like'],
  ], [
    ['Yo', 'me gustó / me gustaron', 'I liked'], ['Tú', 'te gustó / te gustaron', 'you liked'], ['Ella / Él / Usted', 'le gustó / le gustaron', 's/he liked'],
    ['Nosotras / Nosotros', 'nos gustó / nos gustaron', 'we liked'], ['Ellas / Ellos / Ustedes', 'les gustó / les gustaron', 'they liked'],
  ], [
    ['Yo', 'me gustaba / me gustaban', 'I used to like'], ['Tú', 'te gustaba / te gustaban', 'you used to like'], ['Ella / Él / Usted', 'le gustaba / le gustaban', 's/he used to like'],
    ['Nosotras / Nosotros', 'nos gustaba / nos gustaban', 'we used to like'], ['Ellas / Ellos / Ustedes', 'les gustaba / les gustaban', 'they used to like'],
  ]),
  simpleVerb('amar', 'to love', [
    ['Infinitive', 'amar', 'to love'], ['Past participle', 'amado', 'loved'], ['Gerund', 'amando', 'loving'],
  ], [
    ['Yo', 'amo', 'I love'], ['Tú', 'amas', 'you love'], ['Ella / Él / Usted', 'ama', 's/he loves'],
    ['Nosotras / Nosotros', 'amamos', 'we love'], ['Ellas / Ellos / Ustedes', 'aman', 'they love'],
  ], [
    ['Yo', 'amé', 'I loved'], ['Tú', 'amaste', 'you loved'], ['Ella / Él / Usted', 'amó', 's/he loved'],
    ['Nosotras / Nosotros', 'amamos', 'we loved'], ['Ellas / Ellos / Ustedes', 'amaron', 'they loved'],
  ], [
    ['Yo', 'amaba', 'I used to love'], ['Tú', 'amabas', 'you used to love'], ['Ella / Él / Usted', 'amaba', 's/he used to love'],
    ['Nosotras / Nosotros', 'amábamos', 'we used to love'], ['Ellas / Ellos / Ustedes', 'amaban', 'they used to love'],
  ]),
  simpleVerb('acordarse', 'to remember', [
    ['Infinitive', 'acordarse', 'to remember'], ['Past participle', 'acordado', 'remembered'], ['Gerund', 'acordando', 'remembering'],
  ], [
    ['Yo', 'me acuerdo', 'I remember', true], ['Tú', 'te acuerdas', 'you remember', true], ['Ella / Él / Usted', 'se acuerda', 's/he remembers', true],
    ['Nosotras / Nosotros', 'nos acordamos', 'we remember'], ['Ellas / Ellos / Ustedes', 'se acuerdan', 'they remember', true],
  ], [
    ['Yo', 'me acordé', 'I remembered'], ['Tú', 'te acordaste', 'you remembered'], ['Ella / Él / Usted', 'se acordó', 's/he remembered'],
    ['Nosotras / Nosotros', 'nos acordamos', 'we remembered'], ['Ellas / Ellos / Ustedes', 'se acordaron', 'they remembered'],
  ], [
    ['Yo', 'me acordaba', 'I used to remember'], ['Tú', 'te acordabas', 'you used to remember'], ['Ella / Él / Usted', 'se acordaba', 's/he used to remember'],
    ['Nosotras / Nosotros', 'nos acordábamos', 'we used to remember'], ['Ellas / Ellos / Ustedes', 'se acordaban', 'they used to remember'],
  ]),
  simpleVerb('acostarse', 'to go to bed, to lie down', [
    ['Infinitive', 'acostarse', 'to go to bed'], ['Past participle', 'acostado', 'gone to bed'], ['Gerund', 'acostando', 'going to bed'],
  ], [
    ['Yo', 'me acuesto', 'I go to bed', true], ['Tú', 'te acuestas', 'you go to bed', true], ['Ella / Él / Usted', 'se acuesta', 's/he goes to bed', true],
    ['Nosotras / Nosotros', 'nos acostamos', 'we go to bed'], ['Ellas / Ellos / Ustedes', 'se acuestan', 'they go to bed', true],
  ], [
    ['Yo', 'me acosté', 'I went to bed'], ['Tú', 'te acostaste', 'you went to bed'], ['Ella / Él / Usted', 'se acostó', 's/he went to bed'],
    ['Nosotras / Nosotros', 'nos acostamos', 'we went to bed'], ['Ellas / Ellos / Ustedes', 'se acostaron', 'they went to bed'],
  ], [
    ['Yo', 'me acostaba', 'I used to go to bed'], ['Tú', 'te acostabas', 'you used to go to bed'], ['Ella / Él / Usted', 'se acostaba', 's/he used to go to bed'],
    ['Nosotras / Nosotros', 'nos acostábamos', 'we used to go to bed'], ['Ellas / Ellos / Ustedes', 'se acostaban', 'they used to go to bed'],
  ]),
  simpleVerb('volver', 'to return', [
    ['Infinitive', 'volver', 'to return'], ['Past participle', 'vuelto', 'returned'], ['Gerund', 'volviendo', 'returning'],
  ], [
    ['Yo', 'vuelvo', 'I return', true], ['Tú', 'vuelves', 'you return', true], ['Ella / Él / Usted', 'vuelve', 's/he returns', true],
    ['Nosotras / Nosotros', 'volvemos', 'we return'], ['Ellas / Ellos / Ustedes', 'vuelven', 'they return', true],
  ], [
    ['Yo', 'volví', 'I returned'], ['Tú', 'volviste', 'you returned'], ['Ella / Él / Usted', 'volvió', 's/he returned'],
    ['Nosotras / Nosotros', 'volvimos', 'we returned'], ['Ellas / Ellos / Ustedes', 'volvieron', 'they returned'],
  ], [
    ['Yo', 'volvía', 'I used to return'], ['Tú', 'volvías', 'you used to return'], ['Ella / Él / Usted', 'volvía', 's/he used to return'],
    ['Nosotras / Nosotros', 'volvíamos', 'we used to return'], ['Ellas / Ellos / Ustedes', 'volvían', 'they used to return'],
  ]),
  simpleVerb('empezar', 'to start, to begin', [
    ['Infinitive', 'empezar', 'to start'], ['Past participle', 'empezado', 'started'], ['Gerund', 'empezando', 'starting'],
  ], [
    ['Yo', 'empiezo', 'I start', true], ['Tú', 'empiezas', 'you start', true], ['Ella / Él / Usted', 'empieza', 's/he starts', true],
    ['Nosotras / Nosotros', 'empezamos', 'we start'], ['Ellas / Ellos / Ustedes', 'empiezan', 'they start', true],
  ], [
    ['Yo', 'empecé', 'I started', true], ['Tú', 'empezaste', 'you started'], ['Ella / Él / Usted', 'empezó', 's/he started'],
    ['Nosotras / Nosotros', 'empezamos', 'we started'], ['Ellas / Ellos / Ustedes', 'empezaron', 'they started'],
  ], [
    ['Yo', 'empezaba', 'I used to start'], ['Tú', 'empezabas', 'you used to start'], ['Ella / Él / Usted', 'empezaba', 's/he used to start'],
    ['Nosotras / Nosotros', 'empezábamos', 'we used to start'], ['Ellas / Ellos / Ustedes', 'empezaban', 'they used to start'],
  ]),
  simpleVerb('comenzar', 'to start, to commence', [
    ['Infinitive', 'comenzar', 'to start'], ['Past participle', 'comenzado', 'started'], ['Gerund', 'comenzando', 'starting'],
  ], [
    ['Yo', 'comienzo', 'I start', true], ['Tú', 'comienzas', 'you start', true], ['Ella / Él / Usted', 'comienza', 's/he starts', true],
    ['Nosotras / Nosotros', 'comenzamos', 'we start'], ['Ellas / Ellos / Ustedes', 'comienzan', 'they start', true],
  ], [
    ['Yo', 'comencé', 'I started', true], ['Tú', 'comenzaste', 'you started'], ['Ella / Él / Usted', 'comenzó', 's/he started'],
    ['Nosotras / Nosotros', 'comenzamos', 'we started'], ['Ellas / Ellos / Ustedes', 'comenzaron', 'they started'],
  ], [
    ['Yo', 'comenzaba', 'I used to start'], ['Tú', 'comenzabas', 'you used to start'], ['Ella / Él / Usted', 'comenzaba', 's/he used to start'],
    ['Nosotras / Nosotros', 'comenzábamos', 'we used to start'], ['Ellas / Ellos / Ustedes', 'comenzaban', 'they used to start'],
  ]),
  simpleVerb('aprender', 'to learn', [
    ['Infinitive', 'aprender', 'to learn'], ['Past participle', 'aprendido', 'learnt'], ['Gerund', 'aprendiendo', 'learning'],
  ], [
    ['Yo', 'aprendo', 'I learn'], ['Tú', 'aprendes', 'you learn'], ['Ella / Él / Usted', 'aprende', 's/he learns'],
    ['Nosotras / Nosotros', 'aprendemos', 'we learn'], ['Ellas / Ellos / Ustedes', 'aprenden', 'they learn'],
  ], [
    ['Yo', 'aprendí', 'I learnt'], ['Tú', 'aprendiste', 'you learnt'], ['Ella / Él / Usted', 'aprendió', 's/he learnt'],
    ['Nosotras / Nosotros', 'aprendimos', 'we learnt'], ['Ellas / Ellos / Ustedes', 'aprendieron', 'they learnt'],
  ], [
    ['Yo', 'aprendía', 'I used to learn'], ['Tú', 'aprendías', 'you used to learn'], ['Ella / Él / Usted', 'aprendía', 's/he used to learn'],
    ['Nosotras / Nosotros', 'aprendíamos', 'we used to learn'], ['Ellas / Ellos / Ustedes', 'aprendían', 'they used to learn'],
  ]),
  simpleVerb('enseñar', 'to teach, to show', [
    ['Infinitive', 'enseñar', 'to teach'], ['Past participle', 'enseñado', 'taught'], ['Gerund', 'enseñando', 'teaching'],
  ], [
    ['Yo', 'enseño', 'I teach'], ['Tú', 'enseñas', 'you teach'], ['Ella / Él / Usted', 'enseña', 's/he teaches'],
    ['Nosotras / Nosotros', 'enseñamos', 'we teach'], ['Ellas / Ellos / Ustedes', 'enseñan', 'they teach'],
  ], [
    ['Yo', 'enseñé', 'I taught'], ['Tú', 'enseñaste', 'you taught'], ['Ella / Él / Usted', 'enseñó', 's/he taught'],
    ['Nosotras / Nosotros', 'enseñamos', 'we taught'], ['Ellas / Ellos / Ustedes', 'enseñaron', 'they taught'],
  ], [
    ['Yo', 'enseñaba', 'I used to teach'], ['Tú', 'enseñabas', 'you used to teach'], ['Ella / Él / Usted', 'enseñaba', 's/he used to teach'],
    ['Nosotras / Nosotros', 'enseñábamos', 'we used to teach'], ['Ellas / Ellos / Ustedes', 'enseñaban', 'they used to teach'],
  ]),
  simpleVerb('invitar', 'to invite', [
    ['Infinitive', 'invitar', 'to invite'], ['Past participle', 'invitado', 'invited'], ['Gerund', 'invitando', 'inviting'],
  ], [
    ['Yo', 'invito', 'I invite'], ['Tú', 'invitas', 'you invite'], ['Ella / Él / Usted', 'invita', 's/he invites'],
    ['Nosotras / Nosotros', 'invitamos', 'we invite'], ['Ellas / Ellos / Ustedes', 'invitan', 'they invite'],
  ], [
    ['Yo', 'invité', 'I invited'], ['Tú', 'invitaste', 'you invited'], ['Ella / Él / Usted', 'invitó', 's/he invited'],
    ['Nosotras / Nosotros', 'invitamos', 'we invited'], ['Ellas / Ellos / Ustedes', 'invitaron', 'they invited'],
  ], [
    ['Yo', 'invitaba', 'I used to invite'], ['Tú', 'invitabas', 'you used to invite'], ['Ella / Él / Usted', 'invitaba', 's/he used to invite'],
    ['Nosotras / Nosotros', 'invitábamos', 'we used to invite'], ['Ellas / Ellos / Ustedes', 'invitaban', 'they used to invite'],
  ]),
  simpleVerb('salir', 'to leave, to go out', [
    ['Infinitive', 'salir', 'to leave, to go out'], ['Past participle', 'salido', 'left'], ['Gerund', 'saliendo', 'leaving'],
  ], [
    ['Yo', 'salgo', 'I leave', true], ['Tú', 'sales', 'you leave'], ['Ella / Él / Usted', 'sale', 's/he leaves'],
    ['Nosotras / Nosotros', 'salimos', 'we leave'], ['Ellas / Ellos / Ustedes', 'salen', 'they leave'],
  ], [
    ['Yo', 'salí', 'I left'], ['Tú', 'saliste', 'you left'], ['Ella / Él / Usted', 'salió', 's/he left'],
    ['Nosotras / Nosotros', 'salimos', 'we left'], ['Ellas / Ellos / Ustedes', 'salieron', 'they left'],
  ], [
    ['Yo', 'salía', 'I used to leave'], ['Tú', 'salías', 'you used to leave'], ['Ella / Él / Usted', 'salía', 's/he used to leave'],
    ['Nosotras / Nosotros', 'salíamos', 'we used to leave'], ['Ellas / Ellos / Ustedes', 'salían', 'they used to leave'],
  ]),
  simpleVerb('quedarse', 'to stay', [
    ['Infinitive', 'quedarse', 'to stay'], ['Past participle', 'quedado', 'stayed'], ['Gerund', 'quedando', 'staying'],
  ], [
    ['Yo', 'me quedo', 'I stay'], ['Tú', 'te quedas', 'you stay'], ['Ella / Él / Usted', 'se queda', 's/he stays'],
    ['Nosotras / Nosotros', 'nos quedamos', 'we stay'], ['Ellas / Ellos / Ustedes', 'se quedan', 'they stay'],
  ], [
    ['Yo', 'me quedé', 'I stayed'], ['Tú', 'te quedaste', 'you stayed'], ['Ella / Él / Usted', 'se quedó', 's/he stayed'],
    ['Nosotras / Nosotros', 'nos quedamos', 'we stayed'], ['Ellas / Ellos / Ustedes', 'se quedaron', 'they stayed'],
  ], [
    ['Yo', 'me quedaba', 'I used to stay'], ['Tú', 'te quedabas', 'you used to stay'], ['Ella / Él / Usted', 'se quedaba', 's/he used to stay'],
    ['Nosotras / Nosotros', 'nos quedábamos', 'we used to stay'], ['Ellas / Ellos / Ustedes', 'se quedaban', 'they used to stay'],
  ]),
  simpleVerb('quedar', 'to remain, to be left, to meet up', [
    ['Infinitive', 'quedar', 'to remain'], ['Past participle', 'quedado', 'remained'], ['Gerund', 'quedando', 'remaining'],
  ], [
    ['Yo', 'quedo', 'I remain'], ['Tú', 'quedas', 'you remain'], ['Ella / Él / Usted', 'queda', 's/he remains'],
    ['Nosotras / Nosotros', 'quedamos', 'we remain'], ['Ellas / Ellos / Ustedes', 'quedan', 'they remain'],
  ], [
    ['Yo', 'quedé', 'I remained'], ['Tú', 'quedaste', 'you remained'], ['Ella / Él / Usted', 'quedó', 's/he remained'],
    ['Nosotras / Nosotros', 'quedamos', 'we remained'], ['Ellas / Ellos / Ustedes', 'quedaron', 'they remained'],
  ], [
    ['Yo', 'quedaba', 'I used to remain'], ['Tú', 'quedabas', 'you used to remain'], ['Ella / Él / Usted', 'quedaba', 's/he used to remain'],
    ['Nosotras / Nosotros', 'quedábamos', 'we used to remain'], ['Ellas / Ellos / Ustedes', 'quedaban', 'they used to remain'],
  ]),
  simpleVerb('enojarse', 'to get angry, to get annoyed', [
    ['Infinitive', 'enojarse', 'to get angry'], ['Past participle', 'enojado', 'gotten angry'], ['Gerund', 'enojando', 'getting angry'],
  ], [
    ['Yo', 'me enojo', 'I get angry'], ['Tú', 'te enojas', 'you get angry'], ['Ella / Él / Usted', 'se enoja', 's/he gets angry'],
    ['Nosotras / Nosotros', 'nos enojamos', 'we get angry'], ['Ellas / Ellos / Ustedes', 'se enojan', 'they get angry'],
  ], [
    ['Yo', 'me enojé', 'I got angry'], ['Tú', 'te enojaste', 'you got angry'], ['Ella / Él / Usted', 'se enojó', 's/he got angry'],
    ['Nosotras / Nosotros', 'nos enojamos', 'we got angry'], ['Ellas / Ellos / Ustedes', 'se enojaron', 'they got angry'],
  ], [
    ['Yo', 'me enojaba', 'I used to get angry'], ['Tú', 'te enojabas', 'you used to get angry'], ['Ella / Él / Usted', 'se enojaba', 's/he used to get angry'],
    ['Nosotras / Nosotros', 'nos enojábamos', 'we used to get angry'], ['Ellas / Ellos / Ustedes', 'se enojaban', 'they used to get angry'],
  ]),
  simpleVerb('enfadarse', 'to get angry, to get annoyed', [
    ['Infinitive', 'enfadarse', 'to get angry'], ['Past participle', 'enfadado', 'gotten angry'], ['Gerund', 'enfadando', 'getting angry'],
  ], [
    ['Yo', 'me enfado', 'I get angry'], ['Tú', 'te enfadas', 'you get angry'], ['Ella / Él / Usted', 'se enfada', 's/he gets angry'],
    ['Nosotras / Nosotros', 'nos enfadamos', 'we get angry'], ['Ellas / Ellos / Ustedes', 'se enfadan', 'they get angry'],
  ], [
    ['Yo', 'me enfadé', 'I got angry'], ['Tú', 'te enfadaste', 'you got angry'], ['Ella / Él / Usted', 'se enfadó', 's/he got angry'],
    ['Nosotras / Nosotros', 'nos enfadamos', 'we got angry'], ['Ellas / Ellos / Ustedes', 'se enfadaron', 'they got angry'],
  ], [
    ['Yo', 'me enfadaba', 'I used to get angry'], ['Tú', 'te enfadabas', 'you used to get angry'], ['Ella / Él / Usted', 'se enfadaba', 's/he used to get angry'],
    ['Nosotras / Nosotros', 'nos enfadábamos', 'we used to get angry'], ['Ellas / Ellos / Ustedes', 'se enfadaban', 'they used to get angry'],
  ]),
  simpleVerb('dormirse', 'to fall asleep', [
    ['Infinitive', 'dormirse', 'to fall asleep'], ['Past participle', 'dormido', 'fallen asleep'], ['Gerund', 'durmiendo', 'falling asleep'],
  ], [
    ['Yo', 'me duermo', 'I fall asleep', true], ['Tú', 'te duermes', 'you fall asleep', true], ['Ella / Él / Usted', 'se duerme', 's/he falls asleep', true],
    ['Nosotras / Nosotros', 'nos dormimos', 'we fall asleep'], ['Ellas / Ellos / Ustedes', 'se duermen', 'they fall asleep', true],
  ], [
    ['Yo', 'me dormí', 'I fell asleep'], ['Tú', 'te dormiste', 'you fell asleep'], ['Ella / Él / Usted', 'se durmió', 's/he fell asleep', true],
    ['Nosotras / Nosotros', 'nos dormimos', 'we fell asleep'], ['Ellas / Ellos / Ustedes', 'se durmieron', 'they fell asleep', true],
  ], [
    ['Yo', 'me dormía', 'I used to fall asleep'], ['Tú', 'te dormías', 'you used to fall asleep'], ['Ella / Él / Usted', 'se dormía', 's/he used to fall asleep'],
    ['Nosotras / Nosotros', 'nos dormíamos', 'we used to fall asleep'], ['Ellas / Ellos / Ustedes', 'se dormían', 'they used to fall asleep'],
  ]),
  simpleVerb('levantarse', 'to get up, to stand up', [
    ['Infinitive', 'levantarse', 'to get up'], ['Past participle', 'levantado', 'gotten up'], ['Gerund', 'levantando', 'getting up'],
  ], [
    ['Yo', 'me levanto', 'I get up'], ['Tú', 'te levantas', 'you get up'], ['Ella / Él / Usted', 'se levanta', 's/he gets up'],
    ['Nosotras / Nosotros', 'nos levantamos', 'we get up'], ['Ellas / Ellos / Ustedes', 'se levantan', 'they get up'],
  ], [
    ['Yo', 'me levanté', 'I got up'], ['Tú', 'te levantaste', 'you got up'], ['Ella / Él / Usted', 'se levantó', 's/he got up'],
    ['Nosotras / Nosotros', 'nos levantamos', 'we got up'], ['Ellas / Ellos / Ustedes', 'se levantaron', 'they got up'],
  ], [
    ['Yo', 'me levantaba', 'I used to get up'], ['Tú', 'te levantabas', 'you used to get up'], ['Ella / Él / Usted', 'se levantaba', 's/he used to get up'],
    ['Nosotras / Nosotros', 'nos levantábamos', 'we used to get up'], ['Ellas / Ellos / Ustedes', 'se levantaban', 'they used to get up'],
  ]),
  simpleVerb('ducharse', 'to shower (oneself)', [
    ['Infinitive', 'ducharse', 'to shower'], ['Past participle', 'duchado', 'showered'], ['Gerund', 'duchando', 'showering'],
  ], [
    ['Yo', 'me ducho', 'I shower'], ['Tú', 'te duchas', 'you shower'], ['Ella / Él / Usted', 'se ducha', 's/he showers'],
    ['Nosotras / Nosotros', 'nos duchamos', 'we shower'], ['Ellas / Ellos / Ustedes', 'se duchan', 'they shower'],
  ], [
    ['Yo', 'me duché', 'I showered'], ['Tú', 'te duchaste', 'you showered'], ['Ella / Él / Usted', 'se duchó', 's/he showered'],
    ['Nosotras / Nosotros', 'nos duchamos', 'we showered'], ['Ellas / Ellos / Ustedes', 'se ducharon', 'they showered'],
  ], [
    ['Yo', 'me duchaba', 'I used to shower'], ['Tú', 'te duchabas', 'you used to shower'], ['Ella / Él / Usted', 'se duchaba', 's/he used to shower'],
    ['Nosotras / Nosotros', 'nos duchábamos', 'we used to shower'], ['Ellas / Ellos / Ustedes', 'se duchaban', 'they used to shower'],
  ]),
  simpleVerb('lavarse', 'to wash (oneself)', [
    ['Infinitive', 'lavarse', 'to wash'], ['Past participle', 'lavado', 'washed'], ['Gerund', 'lavando', 'washing'],
  ], [
    ['Yo', 'me lavo', 'I wash'], ['Tú', 'te lavas', 'you wash'], ['Ella / Él / Usted', 'se lava', 's/he washes'],
    ['Nosotras / Nosotros', 'nos lavamos', 'we wash'], ['Ellas / Ellos / Ustedes', 'se lavan', 'they wash'],
  ], [
    ['Yo', 'me lavé', 'I washed'], ['Tú', 'te lavaste', 'you washed'], ['Ella / Él / Usted', 'se lavó', 's/he washed'],
    ['Nosotras / Nosotros', 'nos lavamos', 'we washed'], ['Ellas / Ellos / Ustedes', 'se lavaron', 'they washed'],
  ], [
    ['Yo', 'me lavaba', 'I used to wash'], ['Tú', 'te lavabas', 'you used to wash'], ['Ella / Él / Usted', 'se lavaba', 's/he used to wash'],
    ['Nosotras / Nosotros', 'nos lavábamos', 'we used to wash'], ['Ellas / Ellos / Ustedes', 'se lavaban', 'they used to wash'],
  ]),
  simpleVerb('olvidarse', 'to forget', [
    ['Infinitive', 'olvidarse', 'to forget'], ['Past participle', 'olvidado', 'forgotten'], ['Gerund', 'olvidando', 'forgetting'],
  ], [
    ['Yo', 'me olvido', 'I forget'], ['Tú', 'te olvidas', 'you forget'], ['Ella / Él / Usted', 'se olvida', 's/he forgets'], 
    ['Nosotras / Nosotros', 'nos olvidamos', 'we forget'], ['Ellas / Ellos / Ustedes', 'se olvidan', 'they forget'],
  ], [
    ['Yo', 'me olvidé', 'I forgot'], ['Tú', 'te olvidaste', 'you forgot'], ['Ella / Él / Usted', 'se olvidó', 's/he forgot'],
    ['Nosotras / Nosotros', 'nos olvidamos', 'we forgot'], ['Ellas / Ellos / Ustedes', 'se olvidaron', 'they forgot'],
  ], [
    ['Yo', 'me olvidaba', 'I used to forget'], ['Tú', 'te olvidabas', 'you used to forget'], ['Ella / Él / Usted', 'se olvidaba', 's/he used to forget'],
    ['Nosotras / Nosotros', 'nos olvidábamos', 'we used to forget'], ['Ellas / Ellos / Ustedes', 'se olvidaban', 'they used to forget'],
  ]),
  simpleVerb('despertarse', 'to wake up', [
    ['Infinitive', 'despertarse', 'to wake up'], ['Past participle', 'despertado', 'woken'], ['Gerund', 'despertando', 'waking'],
  ], [
    ['Yo', 'me despierto', 'I wake', true], ['Tú', 'te despiertas', 'you wake', true], ['Ella / Él / Usted', 'se despierta', 's/he wakes', true],
    ['Nosotras / Nosotros', 'nos despertamos', 'we wake'], ['Ellas / Ellos / Ustedes', 'se despiertan', 'they wake', true],
  ], [
    ['Yo', 'me desperté', 'I woke'], ['Tú', 'te despertaste', 'you woke'], ['Ella / Él / Usted', 'se despertó', 's/he woke'],
    ['Nosotras / Nosotros', 'nos despertamos', 'we woke'], ['Ellas / Ellos / Ustedes', 'se despertaron', 'they woke'],
  ], [
    ['Yo', 'me despertaba', 'I used to wake'], ['Tú', 'te despertabas', 'you used to wake'], ['Ella / Él / Usted', 'se despertaba', 's/he used to wake'],
    ['Nosotras / Nosotros', 'nos despertábamos', 'we used to wake'], ['Ellas / Ellos / Ustedes', 'se despertaban', 'they used to wake'],
  ]),
  simpleVerb('preocuparse', 'to worry, to concern', [
    ['Infinitive', 'preocuparse', 'to worry'], ['Past participle', 'preocupado', 'worried'], ['Gerund', 'preocupando', 'worrying'],
  ], [
    ['Yo', 'me preocupo', 'I worry'], ['Tú', 'te preocupas', 'you worry'], ['Ella / Él / Usted', 'se preocupa', 's/he worries'],
    ['Nosotras / Nosotros', 'nos preocupamos', 'we worry'], ['Ellas / Ellos / Ustedes', 'se preocupan', 'they worry'],
  ], [
    ['Yo', 'me preocupé', 'I worried'], ['Tú', 'te preocupaste', 'you worried'], ['Ella / Él / Usted', 'se preocupó', 's/he worried'],
    ['Nosotras / Nosotros', 'nos preocupamos', 'we worried'], ['Ellas / Ellos / Ustedes', 'se preocuparon', 'they worried'],
  ], [
    ['Yo', 'me preocupaba', 'I used to worry'], ['Tú', 'te preocupabas', 'you used to worry'], ['Ella / Él / Usted', 'se preocupaba', 's/he used to worry'],
    ['Nosotras / Nosotros', 'nos preocupábamos', 'we used to worry'], ['Ellas / Ellos / Ustedes', 'se preocupaban', 'they used to worry'],
  ]),
  simpleVerb('aburrirse', 'to get bored', [
    ['Infinitive', 'aburrirse', 'to get bored'], ['Past participle', 'aburrido', 'gotten bored'], ['Gerund', 'aburriendo', 'getting bored'],
  ], [
    ['Yo', 'me aburro', 'I get bored'], ['Tú', 'te aburres', 'you get bored'], ['Ella / Él / Usted', 'se aburre', 's/he gets bored'],
    ['Nosotras / Nosotros', 'nos aburrimos', 'we get bored'], ['Ellas / Ellos / Ustedes', 'se aburren', 'they get bored'],
  ], [
    ['Yo', 'me aburrí', 'I got bored'], ['Tú', 'te aburriste', 'you got bored'], ['Ella / Él / Usted', 'se aburrió', 's/he got bored'],
    ['Nosotras / Nosotros', 'nos aburrimos', 'we got bored'], ['Ellas / Ellos / Ustedes', 'se aburrieron', 'they got bored'],
  ], [
    ['Yo', 'me aburría', 'I used to get bored'], ['Tú', 'te aburrías', 'you used to get bored'], ['Ella / Él / Usted', 'se aburría', 's/he used to get bored'],
    ['Nosotras / Nosotros', 'nos aburríamos', 'we used to get bored'], ['Ellas / Ellos / Ustedes', 'se aburrían', 'they used to get bored'],
  ]),
  simpleVerb('divertirse', 'to enjoy (oneself), to have fun', [
    ['Infinitive', 'divertirse', 'to enjoy oneself'], ['Past participle', 'divertido', 'enjoyed'], ['Gerund', 'divirtiendo', 'enjoying'],
  ], [
    ['Yo', 'me divierto', 'I enjoy', true], ['Tú', 'te diviertes', 'you enjoy', true], ['Ella / Él / Usted', 'se divierte', 's/he enjoys', true],
    ['Nosotras / Nosotros', 'nos divertimos', 'we enjoy'], ['Ellas / Ellos / Ustedes', 'se divierten', 'they enjoy', true],
  ], [
    ['Yo', 'me divertí', 'I enjoyed'], ['Tú', 'te divertiste', 'you enjoyed'], ['Ella / Él / Usted', 'se divirtió', 's/he enjoyed', true],
    ['Nosotras / Nosotros', 'nos divertimos', 'we enjoyed'], ['Ellas / Ellos / Ustedes', 'se divirtieron', 'they enjoyed', true],
  ], [
    ['Yo', 'me divertía', 'I used to enjoy'], ['Tú', 'te divertías', 'you used to enjoy'], ['Ella / Él / Usted', 'se divertía', 's/he used to enjoy'],
    ['Nosotras / Nosotros', 'nos divertíamos', 'we used to enjoy'], ['Ellas / Ellos / Ustedes', 'se divertían', 'they used to enjoy'],
  ]),
  simpleVerb('cepillarse', 'to brush (oneself)', [
    ['Infinitive', 'cepillarse', 'to brush'], ['Past participle', 'cepillado', 'brushed'], ['Gerund', 'cepillando', 'brushing'],
  ], [
    ['Yo', 'me cepillo', 'I brush'], ['Tú', 'te cepillas', 'you brush'], ['Ella / Él / Usted', 'se cepilla', 's/he brushes'],
    ['Nosotras / Nosotros', 'nos cepillamos', 'we brush'], ['Ellas / Ellos / Ustedes', 'se cepillan', 'they brush'],
  ], [
    ['Yo', 'me cepillé', 'I brushed'], ['Tú', 'te cepillaste', 'you brushed'], ['Ella / Él / Usted', 'se cepilló', 's/he brushed'],
    ['Nosotras / Nosotros', 'nos cepillamos', 'we brushed'], ['Ellas / Ellos / Ustedes', 'se cepillaron', 'they brushed'],
  ], [
    ['Yo', 'me cepillaba', 'I used to brush'], ['Tú', 'te cepillabas', 'you used to brush'], ['Ella / Él / Usted', 'se cepillaba', 's/he used to brush'],
    ['Nosotras / Nosotros', 'nos cepillábamos', 'we used to brush'], ['Ellas / Ellos / Ustedes', 'se cepillaban', 'they used to brush'],
  ]),
  simpleVerb('encontrarse', 'to find (oneself), to be located', [
    ['Infinitive', 'encontrarse', 'to find oneself'], ['Past participle', 'encontrado', 'found'], ['Gerund', 'encontrando', 'finding'],
  ], [
    ['Yo', 'me encuentro', 'I find', true], ['Tú', 'te encuentras', 'you find', true], ['Ella / Él / Usted', 'se encuentra', 's/he finds', true],
    ['Nosotras / Nosotros', 'nos encontramos', 'we find'], ['Ellas / Ellos / Ustedes', 'se encuentran', 'they find', true],
  ], [
    ['Yo', 'me encontré', 'I found'], ['Tú', 'te encontraste', 'you found'], ['Ella / Él / Usted', 'se encontró', 's/he found'],
    ['Nosotras / Nosotros', 'nos encontramos', 'we found'], ['Ellas / Ellos / Ustedes', 'se encontraron', 'they found'],
  ], [
    ['Yo', 'me encontraba', 'I used to find'], ['Tú', 'te encontrabas', 'you used to find'], ['Ella / Él / Usted', 'se encontraba', 's/he used to find'],
    ['Nosotras / Nosotros', 'nos encontrábamos', 'we used to find'], ['Ellas / Ellos / Ustedes', 'se encontraban', 'they used to find'],
  ]),
  simpleVerb('cuidarse', 'to look after (oneself)', [
    ['Infinitive', 'cuidarse', 'to look after oneself'], ['Past participle', 'cuidado', 'looked after'], ['Gerund', 'cuidando', 'looking after'],
  ], [
    ['Yo', 'me cuido', 'I look after'], ['Tú', 'te cuidas', 'you look after'], ['Ella / Él / Usted', 'se cuida', 's/he looks after'],
    ['Nosotras / Nosotros', 'nos cuidamos', 'we look after'], ['Ellas / Ellos / Ustedes', 'se cuidan', 'they look after'],
  ], [
    ['Yo', 'me cuidé', 'I looked after'], ['Tú', 'te cuidaste', 'you looked after'], ['Ella / Él / Usted', 'se cuidó', 's/he looked after'],
    ['Nosotras / Nosotros', 'nos cuidamos', 'we looked after'], ['Ellas / Ellos / Ustedes', 'se cuidaron', 'they looked after'],
  ], [
    ['Yo', 'me cuidaba', 'I used to look after'], ['Tú', 'te cuidabas', 'you used to look after'], ['Ella / Él / Usted', 'se cuidaba', 's/he used to look after'],
    ['Nosotras / Nosotros', 'nos cuidábamos', 'we used to look after'], ['Ellas / Ellos / Ustedes', 'se cuidaban', 'they used to look after'],
  ]),
  simpleVerb('casarse', 'to marry', [
    ['Infinitive', 'casarse', 'to marry'], ['Past participle', 'casado', 'married'], ['Gerund', 'casando', 'marrying'],
  ], [
    ['Yo', 'me caso', 'I marry'], ['Tú', 'te casas', 'you marry'], ['Ella / Él / Usted', 'se casa', 's/he marries'],
    ['Nosotras / Nosotros', 'nos casamos', 'we marry'], ['Ellas / Ellos / Ustedes', 'se casan', 'they marry'],
  ], [
    ['Yo', 'me casé', 'I married'], ['Tú', 'te casaste', 'you married'], ['Ella / Él / Usted', 'se casó', 's/he married'],
    ['Nosotras / Nosotros', 'nos casamos', 'we married'], ['Ellas / Ellos / Ustedes', 'se casaron', 'they married'],
  ], [
    ['Yo', 'me casaba', 'I used to marry'], ['Tú', 'te casabas', 'you used to marry'], ['Ella / Él / Usted', 'se casaba', 's/he used to marry'],
    ['Nosotras / Nosotros', 'nos casábamos', 'we used to marry'], ['Ellas / Ellos / Ustedes', 'se casaban', 'they used to marry'],
  ]),
  simpleVerb('vestirse', 'to dress (oneself), to get dressed', [
    ['Infinitive', 'vestirse', 'to dress'], ['Past participle', 'vestido', 'dressed'], ['Gerund', 'vistiendo', 'dressing'],
  ], [
    ['Yo', 'me visto', 'I dress', true], ['Tú', 'te vistes', 'you dress', true], ['Ella / Él / Usted', 'se viste', 's/he dresses', true],
    ['Nosotras / Nosotros', 'nos vestimos', 'we dress'], ['Ellas / Ellos / Ustedes', 'se visten', 'they dress', true],
  ], [
    ['Yo', 'me vestí', 'I dressed'], ['Tú', 'te vestiste', 'you dressed'], ['Ella / Él / Usted', 'se vistió', 's/he dressed', true],
    ['Nosotras / Nosotros', 'nos vestimos', 'we dressed'], ['Ellas / Ellos / Ustedes', 'se vistieron', 'they dressed', true],
  ], [
    ['Yo', 'me vestía', 'I used to dress'], ['Tú', 'te vestías', 'you used to dress'], ['Ella / Él / Usted', 'se vestía', 's/he used to dress'],
    ['Nosotras / Nosotros', 'nos vestíamos', 'we used to dress'], ['Ellas / Ellos / Ustedes', 'se vestían', 'they used to dress'],
  ]),
  simpleVerb('querer', 'to want, to love', [
    ['Infinitive', 'querer', 'to want, to love'], ['Past participle', 'querido', 'wanted'], ['Gerund', 'queriendo', 'wanting'],
  ], [
    ['Yo', 'quiero', 'I want', true], ['Tú', 'quieres', 'you want', true], ['Ella / Él / Usted', 'quiere', 's/he wants', true],
    ['Nosotras / Nosotros', 'queremos', 'we want'], ['Ellas / Ellos / Ustedes', 'quieren', 'they want', true],
  ], [
    ['Yo', 'quise', 'I wanted', true], ['Tú', 'quisiste', 'you wanted', true], ['Ella / Él / Usted', 'quiso', 's/he wanted', true],
    ['Nosotras / Nosotros', 'quisimos', 'we wanted', true], ['Ellas / Ellos / Ustedes', 'quisieron', 'they wanted', true],
  ], [
    ['Yo', 'quería', 'I used to want'], ['Tú', 'querías', 'you used to want'], ['Ella / Él / Usted', 'quería', 's/he used to want'],
    ['Nosotras / Nosotros', 'queríamos', 'we used to want'], ['Ellas / Ellos / Ustedes', 'querían', 'they used to want'],
  ]),
  simpleVerb('entender', 'to understand', [
    ['Infinitive', 'entender', 'to understand'], ['Past participle', 'entendido', 'understood'], ['Gerund', 'entendiendo', 'understanding'],
  ], [
    ['Yo', 'entiendo', 'I understand', true], ['Tú', 'entiendes', 'you understand', true], ['Ella / Él / Usted', 'entiende', 's/he understands', true],
    ['Nosotras / Nosotros', 'entendemos', 'we understand'], ['Ellas / Ellos / Ustedes', 'entienden', 'they understand', true],
  ], [
    ['Yo', 'entendí', 'I understood'], ['Tú', 'entendiste', 'you understood'], ['Ella / Él / Usted', 'entendió', 's/he understood'],
    ['Nosotras / Nosotros', 'entendimos', 'we understood'], ['Ellas / Ellos / Ustedes', 'entendieron', 'they understood'],
  ], [
    ['Yo', 'entendía', 'I used to understand'], ['Tú', 'entendías', 'you used to understand'], ['Ella / Él / Usted', 'entendía', 's/he used to understand'],
    ['Nosotras / Nosotros', 'entendíamos', 'we used to understand'], ['Ellas / Ellos / Ustedes', 'entendían', 'they used to understand'],
  ]),
  simpleVerb('jugar', 'to play', [
    ['Infinitive', 'jugar', 'to play'], ['Past participle', 'jugado', 'played'], ['Gerund', 'jugando', 'playing'],
  ], [
    ['Yo', 'juego', 'I play', true], ['Tú', 'juegas', 'you play', true], ['Ella / Él / Usted', 'juega', 's/he plays', true],
    ['Nosotras / Nosotros', 'jugamos', 'we play'], ['Ellas / Ellos / Ustedes', 'juegan', 'they play', true],
  ], [
    ['Yo', 'jugué', 'I played', true], ['Tú', 'jugaste', 'you played'], ['Ella / Él / Usted', 'jugó', 's/he played'],
    ['Nosotras / Nosotros', 'jugamos', 'we played'], ['Ellas / Ellos / Ustedes', 'jugaron', 'they played'],
  ], [
    ['Yo', 'jugaba', 'I used to play'], ['Tú', 'jugabas', 'you used to play'], ['Ella / Él / Usted', 'jugaba', 's/he used to play'],
    ['Nosotras / Nosotros', 'jugábamos', 'we used to play'], ['Ellas / Ellos / Ustedes', 'jugaban', 'they used to play'],
  ]),
  simpleVerb('cerrar', 'to close, to shut, to lock', [
    ['Infinitive', 'cerrar', 'to close'], ['Past participle', 'cerrado', 'closed'], ['Gerund', 'cerrando', 'closing'],
  ], [
    ['Yo', 'cierro', 'I close', true], ['Tú', 'cierras', 'you close', true], ['Ella / Él / Usted', 'cierra', 's/he closes', true],
    ['Nosotras / Nosotros', 'cerramos', 'we close'], ['Ellas / Ellos / Ustedes', 'cierran', 'they close', true],
  ], [
    ['Yo', 'cerré', 'I closed'], ['Tú', 'cerraste', 'you closed'], ['Ella / Él / Usted', 'cerró', 's/he closed'],
    ['Nosotras / Nosotros', 'cerramos', 'we closed'], ['Ellas / Ellos / Ustedes', 'cerraron', 'they closed'],
  ], [
    ['Yo', 'cerraba', 'I used to close'], ['Tú', 'cerrabas', 'you used to close'], ['Ella / Él / Usted', 'cerraba', 's/he used to close'],
    ['Nosotras / Nosotros', 'cerrábamos', 'we used to close'], ['Ellas / Ellos / Ustedes', 'cerraban', 'they used to close'],
  ]),
  simpleVerb('almorzar', 'to lunch, to eat lunch', [
    ['Infinitive', 'almorzar', 'to lunch'], ['Past participle', 'almorzado', 'lunched'], ['Gerund', 'almorzando', 'lunching'],
  ], [
    ['Yo', 'almuerzo', 'I lunch', true], ['Tú', 'almuerzas', 'you lunch', true], ['Ella / Él / Usted', 'almuerza', 's/he lunches', true],
    ['Nosotras / Nosotros', 'almorzamos', 'we lunch'], ['Ellas / Ellos / Ustedes', 'almuerzan', 'they lunch', true],
  ], [
    ['Yo', 'almorcé', 'I lunched', true], ['Tú', 'almorzaste', 'you lunched'], ['Ella / Él / Usted', 'almorzó', 's/he lunched'],
    ['Nosotras / Nosotros', 'almorzamos', 'we lunched'], ['Ellas / Ellos / Ustedes', 'almorzaron', 'they lunched'],
  ], [
    ['Yo', 'almorzaba', 'I used to lunch'], ['Tú', 'almorzabas', 'you used to lunch'], ['Ella / Él / Usted', 'almorzaba', 's/he used to lunch'],
    ['Nosotras / Nosotros', 'almorzábamos', 'we used to lunch'], ['Ellas / Ellos / Ustedes', 'almorzaban', 'they used to lunch'],
  ]),
  simpleVerb('pasar', 'to pass, to happen, to spend (time)', [
    ['Infinitive', 'pasar', 'to pass'], ['Past participle', 'pasado', 'passed'], ['Gerund', 'pasando', 'passing'],
  ], [
    ['Yo', 'paso', 'I pass'], ['Tú', 'pasas', 'you pass'], ['Ella / Él / Usted', 'pasa', 's/he passes'],
    ['Nosotras / Nosotros', 'pasamos', 'we pass'], ['Ellas / Ellos / Ustedes', 'pasan', 'they pass'],
  ], [
    ['Yo', 'pasé', 'I passed'], ['Tú', 'pasaste', 'you passed'], ['Ella / Él / Usted', 'pasó', 's/he passed'],
    ['Nosotras / Nosotros', 'pasamos', 'we passed'], ['Ellas / Ellos / Ustedes', 'pasaron', 'they passed'],
  ], [
    ['Yo', 'pasaba', 'I used to pass'], ['Tú', 'pasabas', 'you used to pass'], ['Ella / Él / Usted', 'pasaba', 's/he used to pass'],
    ['Nosotras / Nosotros', 'pasábamos', 'we used to pass'], ['Ellas / Ellos / Ustedes', 'pasaban', 'they used to pass'],
  ]),
  simpleVerb('creer', 'to believe, to think', [
    ['Infinitive', 'creer', 'to believe'], ['Past participle', 'creído', 'believed'], ['Gerund', 'creyendo', 'believing'],
  ], [
    ['Yo', 'creo', 'I believe'], ['Tú', 'crees', 'you believe'], ['Ella / Él / Usted', 'cree', 's/he believes'],
    ['Nosotras / Nosotros', 'creemos', 'we believe'], ['Ellas / Ellos / Ustedes', 'creen', 'they believe'],
  ], [
    ['Yo', 'creí', 'I believed'], ['Tú', 'creíste', 'you believed'], ['Ella / Él / Usted', 'creyó', 's/he believed', true],
    ['Nosotras / Nosotros', 'creímos', 'we believed'], ['Ellas / Ellos / Ustedes', 'creyeron', 'they believed', true],
  ], [
    ['Yo', 'creía', 'I used to believe'], ['Tú', 'creías', 'you used to believe'], ['Ella / Él / Usted', 'creía', 's/he used to believe'],
    ['Nosotras / Nosotros', 'creíamos', 'we used to believe'], ['Ellas / Ellos / Ustedes', 'creían', 'they used to believe'],
  ]),
  simpleVerb('hablar', 'to speak, to talk', [
    ['Infinitive', 'hablar', 'to speak'], ['Past participle', 'hablado', 'spoken'], ['Gerund', 'hablando', 'speaking'],
  ], [
    ['Yo', 'hablo', 'I speak'], ['Tú', 'hablas', 'you speak'], ['Ella / Él / Usted', 'habla', 's/he speaks'],
    ['Nosotras / Nosotros', 'hablamos', 'we speak'], ['Ellas / Ellos / Ustedes', 'hablan', 'they speak'],
  ], [
    ['Yo', 'hablé', 'I spoke'], ['Tú', 'hablaste', 'you spoke'], ['Ella / Él / Usted', 'habló', 's/he spoke'],
    ['Nosotras / Nosotros', 'hablamos', 'we spoke'], ['Ellas / Ellos / Ustedes', 'hablaron', 'they spoke'],
  ], [
    ['Yo', 'hablaba', 'I used to speak'], ['Tú', 'hablabas', 'you used to speak'], ['Ella / Él / Usted', 'hablaba', 's/he used to speak'],
    ['Nosotras / Nosotros', 'hablábamos', 'we used to speak'], ['Ellas / Ellos / Ustedes', 'hablaban', 'they used to speak'],
  ]),
  simpleVerb('dejar', 'to leave, to let, to allow', [
    ['Infinitive', 'dejar', 'to leave'], ['Past participle', 'dejado', 'left'], ['Gerund', 'dejando', 'leaving'],
  ], [
    ['Yo', 'dejo', 'I leave'], ['Tú', 'dejas', 'you leave'], ['Ella / Él / Usted', 'deja', 's/he leaves'],
    ['Nosotras / Nosotros', 'dejamos', 'we leave'], ['Ellas / Ellos / Ustedes', 'dejan', 'they leave'],
  ], [
    ['Yo', 'dejé', 'I left'], ['Tú', 'dejaste', 'you left'], ['Ella / Él / Usted', 'dejó', 's/he left'],
    ['Nosotras / Nosotros', 'dejamos', 'we left'], ['Ellas / Ellos / Ustedes', 'dejaron', 'they left'],
  ], [
    ['Yo', 'dejaba', 'I used to leave'], ['Tú', 'dejabas', 'you used to leave'], ['Ella / Él / Usted', 'dejaba', 's/he used to leave'],
    ['Nosotras / Nosotros', 'dejábamos', 'we used to leave'], ['Ellas / Ellos / Ustedes', 'dejaban', 'they used to leave'],
  ]),
  simpleVerb('seguir', 'to follow, to continue', [
    ['Infinitive', 'seguir', 'to follow'], ['Past participle', 'seguido', 'followed'], ['Gerund', 'siguiendo', 'following'],
  ], [
    ['Yo', 'sigo', 'I follow', true], ['Tú', 'sigues', 'you follow', true], ['Ella / Él / Usted', 'sigue', 's/he follows', true],
    ['Nosotras / Nosotros', 'seguimos', 'we follow'], ['Ellas / Ellos / Ustedes', 'siguen', 'they follow', true],
  ], [
    ['Yo', 'seguí', 'I followed'], ['Tú', 'seguiste', 'you followed'], ['Ella / Él / Usted', 'siguió', 's/he followed', true],
    ['Nosotras / Nosotros', 'seguimos', 'we followed'], ['Ellas / Ellos / Ustedes', 'siguieron', 'they followed', true],
  ], [
    ['Yo', 'seguía', 'I used to follow'], ['Tú', 'seguías', 'you used to follow'], ['Ella / Él / Usted', 'seguía', 's/he used to follow'],
    ['Nosotras / Nosotros', 'seguíamos', 'we used to follow'], ['Ellas / Ellos / Ustedes', 'seguían', 'they used to follow'],
  ]),
  simpleVerb('pensar', 'to think, to believe', [
    ['Infinitive', 'pensar', 'to think'], ['Past participle', 'pensado', 'thought'], ['Gerund', 'pensando', 'thinking'],
  ], [
    ['Yo', 'pienso', 'I think', true], ['Tú', 'piensas', 'you think', true], ['Ella / Él / Usted', 'piensa', 's/he thinks', true],
    ['Nosotras / Nosotros', 'pensamos', 'we think'], ['Ellas / Ellos / Ustedes', 'piensan', 'they think', true],
  ], [
    ['Yo', 'pensé', 'I thought'], ['Tú', 'pensaste', 'you thought'], ['Ella / Él / Usted', 'pensó', 's/he thought'],
    ['Nosotras / Nosotros', 'pensamos', 'we thought'], ['Ellas / Ellos / Ustedes', 'pensaron', 'they thought'],
  ], [
    ['Yo', 'pensaba', 'I used to think'], ['Tú', 'pensabas', 'you used to think'], ['Ella / Él / Usted', 'pensaba', 's/he used to think'],
    ['Nosotras / Nosotros', 'pensábamos', 'we used to think'], ['Ellas / Ellos / Ustedes', 'pensaban', 'they used to think'],
  ]),
  simpleVerb('tomar', 'to drink, to take', [
    ['Infinitive', 'tomar', 'to drink, to take'], ['Past participle', 'tomado', 'drunk'], ['Gerund', 'tomando', 'drinking'],
  ], [
    ['Yo', 'tomo', 'I drink'], ['Tú', 'tomas', 'you drink'], ['Ella / Él / Usted', 'toma', 's/he drinks'],
    ['Nosotras / Nosotros', 'tomamos', 'we drink'], ['Ellas / Ellos / Ustedes', 'toman', 'they drink'],
  ], [
    ['Yo', 'tomé', 'I drank'], ['Tú', 'tomaste', 'you drank'], ['Ella / Él / Usted', 'tomó', 's/he drank'],
    ['Nosotras / Nosotros', 'tomamos', 'we drank'], ['Ellas / Ellos / Ustedes', 'tomaron', 'they drank'],
  ], [
    ['Yo', 'tomaba', 'I used to drink'], ['Tú', 'tomabas', 'you used to drink'], ['Ella / Él / Usted', 'tomaba', 's/he used to drink'],
    ['Nosotras / Nosotros', 'tomábamos', 'we used to drink'], ['Ellas / Ellos / Ustedes', 'tomaban', 'they used to drink'],
  ]),
  simpleVerb('tratar', 'to treat, to try', [
    ['Infinitive', 'tratar', 'to treat'], ['Past participle', 'tratado', 'treated'], ['Gerund', 'tratando', 'treating'],
  ], [
    ['Yo', 'trato', 'I treat'], ['Tú', 'tratas', 'you treat'], ['Ella / Él / Usted', 'trata', 's/he treats'],
    ['Nosotras / Nosotros', 'tratamos', 'we treat'], ['Ellas / Ellos / Ustedes', 'tratan', 'they treat'],
  ], [
    ['Yo', 'traté', 'I treated'], ['Tú', 'trataste', 'you treated'], ['Ella / Él / Usted', 'trató', 's/he treated'],
    ['Nosotras / Nosotros', 'tratamos', 'we treated'], ['Ellas / Ellos / Ustedes', 'trataron', 'they treated'],
  ], [
    ['Yo', 'trataba', 'I used to treat'], ['Tú', 'tratabas', 'you used to treat'], ['Ella / Él / Usted', 'trataba', 's/he used to treat'],
    ['Nosotras / Nosotros', 'tratábamos', 'we used to treat'], ['Ellas / Ellos / Ustedes', 'trataban', 'they used to treat'],
  ]),
  simpleVerb('mirar', 'to look, to watch', [
    ['Infinitive', 'mirar', 'to look, to watch'], ['Past participle', 'mirado', 'looked'], ['Gerund', 'mirando', 'looking'],
  ], [
    ['Yo', 'miro', 'I look'], ['Tú', 'miras', 'you look'], ['Ella / Él / Usted', 'mira', 's/he looks'],
    ['Nosotras / Nosotros', 'miramos', 'we look'], ['Ellas / Ellos / Ustedes', 'miran', 'they look'],
  ], [
    ['Yo', 'miré', 'I looked'], ['Tú', 'miraste', 'you looked'], ['Ella / Él / Usted', 'miró', 's/he looked'],
    ['Nosotras / Nosotros', 'miramos', 'we looked'], ['Ellas / Ellos / Ustedes', 'miraron', 'they looked'],
  ], [
    ['Yo', 'miraba', 'I used to look'], ['Tú', 'mirabas', 'you used to look'], ['Ella / Él / Usted', 'miraba', 's/he used to look'],
    ['Nosotras / Nosotros', 'mirábamos', 'we used to look'], ['Ellas / Ellos / Ustedes', 'miraban', 'they used to look'],
  ]),
  simpleVerb('contar', 'to count, to tell', [
    ['Infinitive', 'contar', 'to count, to tell'], ['Past participle', 'contado', 'counted'], ['Gerund', 'contando', 'counting'],
  ], [
    ['Yo', 'cuento', 'I count', true], ['Tú', 'cuentas', 'you count', true], ['Ella / Él / Usted', 'cuenta', 's/he counts', true],
    ['Nosotras / Nosotros', 'contamos', 'we count'], ['Ellas / Ellos / Ustedes', 'cuentan', 'they count', true],
  ], [
    ['Yo', 'conté', 'I counted'], ['Tú', 'contaste', 'you counted'], ['Ella / Él / Usted', 'contó', 's/he counted'],
    ['Nosotras / Nosotros', 'contamos', 'we counted'], ['Ellas / Ellos / Ustedes', 'contaron', 'they counted'],
  ], [
    ['Yo', 'contaba', 'I used to count'], ['Tú', 'contabas', 'you used to count'], ['Ella / Él / Usted', 'contaba', 's/he used to count'],
    ['Nosotras / Nosotros', 'contábamos', 'we used to count'], ['Ellas / Ellos / Ustedes', 'contaban', 'they used to count'],
  ]),
  simpleVerb('esperar', 'to wait, to hope', [
    ['Infinitive', 'esperar', 'to wait'], ['Past participle', 'esperado', 'waited'], ['Gerund', 'esperando', 'waiting'],
  ], [
    ['Yo', 'espero', 'I wait'], ['Tú', 'esperas', 'you wait'], ['Ella / Él / Usted', 'espera', 's/he waits'],
    ['Nosotras / Nosotros', 'esperamos', 'we wait'], ['Ellas / Ellos / Ustedes', 'esperan', 'they wait'],
  ], [
    ['Yo', 'esperé', 'I waited'], ['Tú', 'esperaste', 'you waited'], ['Ella / Él / Usted', 'esperó', 's/he waited'],
    ['Nosotras / Nosotros', 'esperamos', 'we waited'], ['Ellas / Ellos / Ustedes', 'esperaron', 'they waited'],
  ], [
    ['Yo', 'esperaba', 'I used to wait'], ['Tú', 'esperabas', 'you used to wait'], ['Ella / Él / Usted', 'esperaba', 's/he used to wait'],
    ['Nosotras / Nosotros', 'esperábamos', 'we used to wait'], ['Ellas / Ellos / Ustedes', 'esperaban', 'they used to wait'],
  ]),
  simpleVerb('buscar', 'to search for, to look for', [
    ['Infinitive', 'buscar', 'to search for'], ['Past participle', 'buscado', 'searched'], ['Gerund', 'buscando', 'searching'],
  ], [
    ['Yo', 'busco', 'I search'], ['Tú', 'buscas', 'you search'], ['Ella / Él / Usted', 'busca', 's/he searches'],
    ['Nosotras / Nosotros', 'buscamos', 'we search'], ['Ellas / Ellos / Ustedes', 'buscan', 'they search'],
  ], [
    ['Yo', 'busqué', 'I searched', true], ['Tú', 'buscaste', 'you searched'], ['Ella / Él / Usted', 'buscó', 's/he searched'],
    ['Nosotras / Nosotros', 'buscamos', 'we searched'], ['Ellas / Ellos / Ustedes', 'buscaron', 'they searched'],
  ], [
    ['Yo', 'buscaba', 'I used to search'], ['Tú', 'buscabas', 'you used to search'], ['Ella / Él / Usted', 'buscaba', 's/he used to search'],
    ['Nosotras / Nosotros', 'buscábamos', 'we used to search'], ['Ellas / Ellos / Ustedes', 'buscaban', 'they used to search'],
  ]),
  simpleVerb('existir', 'to exist', [
    ['Infinitive', 'existir', 'to exist'], ['Past participle', 'existido', 'existed'], ['Gerund', 'existiendo', 'existing'],
  ], [
    ['Yo', 'existo', 'I exist'], ['Tú', 'existes', 'you exist'], ['Ella / Él / Usted', 'existe', 's/he exists'],
    ['Nosotras / Nosotros', 'existimos', 'we exist'], ['Ellas / Ellos / Ustedes', 'existen', 'they exist'],
  ], [
    ['Yo', 'existí', 'I existed'], ['Tú', 'exististe', 'you existed'], ['Ella / Él / Usted', 'existió', 's/he existed'],
    ['Nosotras / Nosotros', 'existimos', 'we existed'], ['Ellas / Ellos / Ustedes', 'existieron', 'they existed'],
  ], [
    ['Yo', 'existía', 'I used to exist'], ['Tú', 'existías', 'you used to exist'], ['Ella / Él / Usted', 'existía', 's/he used to exist'],
    ['Nosotras / Nosotros', 'existíamos', 'we used to exist'], ['Ellas / Ellos / Ustedes', 'existían', 'they used to exist'],
  ]),
  simpleVerb('entrar', 'to enter', [
    ['Infinitive', 'entrar', 'to enter'], ['Past participle', 'entrado', 'entered'], ['Gerund', 'entrando', 'entering'],
  ], [
    ['Yo', 'entro', 'I enter'], ['Tú', 'entras', 'you enter'], ['Ella / Él / Usted', 'entra', 's/he enters'],
    ['Nosotras / Nosotros', 'entramos', 'we enter'], ['Ellas / Ellos / Ustedes', 'entran', 'they enter'],
  ], [
    ['Yo', 'entré', 'I entered'], ['Tú', 'entraste', 'you entered'], ['Ella / Él / Usted', 'entró', 's/he entered'],
    ['Nosotras / Nosotros', 'entramos', 'we entered'], ['Ellas / Ellos / Ustedes', 'entraron', 'they entered'],
  ], [
    ['Yo', 'entraba', 'I used to enter'], ['Tú', 'entrabas', 'you used to enter'], ['Ella / Él / Usted', 'entraba', 's/he used to enter'],
    ['Nosotras / Nosotros', 'entrábamos', 'we used to enter'], ['Ellas / Ellos / Ustedes', 'entraban', 'they used to enter'],
  ]),
  simpleVerb('trabajar', 'to work', [
    ['Infinitive', 'trabajar', 'to work'], ['Past participle', 'trabajado', 'worked'], ['Gerund', 'trabajando', 'working'],
  ], [
    ['Yo', 'trabajo', 'I work'], ['Tú', 'trabajas', 'you work'], ['Ella / Él / Usted', 'trabaja', 's/he works'],
    ['Nosotras / Nosotros', 'trabajamos', 'we work'], ['Ellas / Ellos / Ustedes', 'trabajan', 'they work'],
  ], [
    ['Yo', 'trabajé', 'I worked'], ['Tú', 'trabajaste', 'you worked'], ['Ella / Él / Usted', 'trabajó', 's/he worked'],
    ['Nosotras / Nosotros', 'trabajamos', 'we worked'], ['Ellas / Ellos / Ustedes', 'trabajaron', 'they worked'],
  ], [
    ['Yo', 'trabajaba', 'I used to work'], ['Tú', 'trabajabas', 'you used to work'], ['Ella / Él / Usted', 'trabajaba', 's/he used to work'],
    ['Nosotras / Nosotros', 'trabajábamos', 'we used to work'], ['Ellas / Ellos / Ustedes', 'trabajaban', 'they used to work'],
  ]),
  simpleVerb('escribir', 'to write', [
    ['Infinitive', 'escribir', 'to write'], ['Past participle', 'escrito', 'written'], ['Gerund', 'escribiendo', 'writing'],
  ], [
    ['Yo', 'escribo', 'I write'], ['Tú', 'escribes', 'you write'], ['Ella / Él / Usted', 'escribe', 's/he writes'],
    ['Nosotras / Nosotros', 'escribimos', 'we write'], ['Ellas / Ellos / Ustedes', 'escriben', 'they write'],
  ], [
    ['Yo', 'escribí', 'I wrote'], ['Tú', 'escribiste', 'you wrote'], ['Ella / Él / Usted', 'escribió', 's/he wrote'],
    ['Nosotras / Nosotros', 'escribimos', 'we wrote'], ['Ellas / Ellos / Ustedes', 'escribieron', 'they wrote'],
  ], [
    ['Yo', 'escribía', 'I used to write'], ['Tú', 'escribías', 'you used to write'], ['Ella / Él / Usted', 'escribía', 's/he used to write'],
    ['Nosotras / Nosotros', 'escribíamos', 'we used to write'], ['Ellas / Ellos / Ustedes', 'escribían', 'they used to write'],
  ]),
  simpleVerb('producir', 'to produce, to make', [
    ['Infinitive', 'producir', 'to produce'], ['Past participle', 'producido', 'produced'], ['Gerund', 'produciendo', 'producing'],
  ], [
    ['Yo', 'produzco', 'I produce', true], ['Tú', 'produces', 'you produce'], ['Ella / Él / Usted', 'produce', 's/he produces'],
    ['Nosotras / Nosotros', 'producimos', 'we produce'], ['Ellas / Ellos / Ustedes', 'producen', 'they produce'],
  ], [
    ['Yo', 'produje', 'I produced', true], ['Tú', 'produjiste', 'you produced', true], ['Ella / Él / Usted', 'produjo', 's/he produced', true],
    ['Nosotras / Nosotros', 'produjimos', 'we produced', true], ['Ellas / Ellos / Ustedes', 'produjeron', 'they produced', true],
  ], [
    ['Yo', 'producía', 'I used to produce'], ['Tú', 'producías', 'you used to produce'], ['Ella / Él / Usted', 'producía', 's/he used to produce'],
    ['Nosotras / Nosotros', 'producíamos', 'we used to produce'], ['Ellas / Ellos / Ustedes', 'producían', 'they used to produce'],
  ]),
  simpleVerb('ocurrir', 'to occur, to happen', [
    ['Infinitive', 'ocurrir', 'to occur'], ['Past participle', 'ocurrido', 'occurred'], ['Gerund', 'ocurriendo', 'occurring'],
  ], [
    ['Yo', 'ocurro', 'I occur'], ['Tú', 'ocurres', 'you occur'], ['Ella / Él / Usted', 'ocurre', 's/he occurs'],
    ['Nosotras / Nosotros', 'ocurrimos', 'we occur'], ['Ellas / Ellos / Ustedes', 'ocurren', 'they occur'],
  ], [
    ['Yo', 'ocurrí', 'I occurred'], ['Tú', 'ocurriste', 'you occurred'], ['Ella / Él / Usted', 'ocurrió', 's/he occurred'],
    ['Nosotras / Nosotros', 'ocurrimos', 'we occurred'], ['Ellas / Ellos / Ustedes', 'ocurrieron', 'they occurred'],
  ], [
    ['Yo', 'ocurría', 'I used to occur'], ['Tú', 'ocurrías', 'you used to occur'], ['Ella / Él / Usted', 'ocurría', 's/he used to occur'],
    ['Nosotras / Nosotros', 'ocurríamos', 'we used to occur'], ['Ellas / Ellos / Ustedes', 'ocurrían', 'they used to occur'],
  ]),
  simpleVerb('pedir', 'to ask for, to request, to order', [
    ['Infinitive', 'pedir', 'to ask for'], ['Past participle', 'pedido', 'asked for'], ['Gerund', 'pidiendo', 'asking for'],
  ], [
    ['Yo', 'pido', 'I ask for', true], ['Tú', 'pides', 'you ask for', true], ['Ella / Él / Usted', 'pide', 's/he asks for', true],
    ['Nosotras / Nosotros', 'pedimos', 'we ask for'], ['Ellas / Ellos / Ustedes', 'piden', 'they ask for', true],
  ], [
    ['Yo', 'pedí', 'I asked for'], ['Tú', 'pediste', 'you asked for'], ['Ella / Él / Usted', 'pidió', 's/he asked for', true],
    ['Nosotras / Nosotros', 'pedimos', 'we asked for'], ['Ellas / Ellos / Ustedes', 'pidieron', 'they asked for', true],
  ], [
    ['Yo', 'pedía', 'I used to ask for'], ['Tú', 'pedías', 'you used to ask for'], ['Ella / Él / Usted', 'pedía', 's/he used to ask for'],
    ['Nosotras / Nosotros', 'pedíamos', 'we used to ask for'], ['Ellas / Ellos / Ustedes', 'pedían', 'they used to ask for'],
  ]),
  simpleVerb('recibir', 'to receive', [
    ['Infinitive', 'recibir', 'to receive'], ['Past participle', 'recibido', 'received'], ['Gerund', 'recibiendo', 'receiving'],
  ], [
    ['Yo', 'recibo', 'I receive'], ['Tú', 'recibes', 'you receive'], ['Ella / Él / Usted', 'recibe', 's/he receives'],
    ['Nosotras / Nosotros', 'recibimos', 'we receive'], ['Ellas / Ellos / Ustedes', 'reciben', 'they receive'],
  ], [
    ['Yo', 'recibí', 'I received'], ['Tú', 'recibiste', 'you received'], ['Ella / Él / Usted', 'recibió', 's/he received'],
    ['Nosotras / Nosotros', 'recibimos', 'we received'], ['Ellas / Ellos / Ustedes', 'recibieron', 'they received'],
  ], [
    ['Yo', 'recibía', 'I used to receive'], ['Tú', 'recibías', 'you used to receive'], ['Ella / Él / Usted', 'recibía', 's/he used to receive'],
    ['Nosotras / Nosotros', 'recibíamos', 'we used to receive'], ['Ellas / Ellos / Ustedes', 'recibían', 'they used to receive'],
  ]),
  simpleVerb('recordar', 'to remember, to recall, to remind', [
    ['Infinitive', 'recordar', 'to remember'], ['Past participle', 'recordado', 'remembered'], ['Gerund', 'recordando', 'remembering'],
  ], [
    ['Yo', 'recuerdo', 'I remember', true], ['Tú', 'recuerdas', 'you remember', true], ['Ella / Él / Usted', 'recuerda', 's/he remembers', true],
    ['Nosotras / Nosotros', 'recordamos', 'we remember'], ['Ellas / Ellos / Ustedes', 'recuerdan', 'they remember', true],
  ], [
    ['Yo', 'recordé', 'I remembered'], ['Tú', 'recordaste', 'you remembered'], ['Ella / Él / Usted', 'recordó', 's/he remembered'],
    ['Nosotras / Nosotros', 'recordamos', 'we remembered'], ['Ellas / Ellos / Ustedes', 'recordaron', 'they remembered'],
  ], [
    ['Yo', 'recordaba', 'I used to remember'], ['Tú', 'recordabas', 'you used to remember'], ['Ella / Él / Usted', 'recordaba', 's/he used to remember'],
    ['Nosotras / Nosotros', 'recordábamos', 'we used to remember'], ['Ellas / Ellos / Ustedes', 'recordaban', 'they used to remember'],
  ]),
  simpleVerb('terminar', 'to end, to finish', [
    ['Infinitive', 'terminar', 'to end'], ['Past participle', 'terminado', 'ended'], ['Gerund', 'terminando', 'ending'],
  ], [
    ['Yo', 'termino', 'I end'], ['Tú', 'terminas', 'you end'], ['Ella / Él / Usted', 'termina', 's/he ends'],
    ['Nosotras / Nosotros', 'terminamos', 'we end'], ['Ellas / Ellos / Ustedes', 'terminan', 'they end'],
  ], [
    ['Yo', 'terminé', 'I ended'], ['Tú', 'terminaste', 'you ended'], ['Ella / Él / Usted', 'terminó', 's/he ended'],
    ['Nosotras / Nosotros', 'terminamos', 'we ended'], ['Ellas / Ellos / Ustedes', 'terminaron', 'they ended'],
  ], [
    ['Yo', 'terminaba', 'I used to end'], ['Tú', 'terminabas', 'you used to end'], ['Ella / Él / Usted', 'terminaba', 's/he used to end'],
    ['Nosotras / Nosotros', 'terminábamos', 'we used to end'], ['Ellas / Ellos / Ustedes', 'terminaban', 'they used to end'],
  ]),
  simpleVerb('permitir', 'to allow, to permit', [
    ['Infinitive', 'permitir', 'to allow'], ['Past participle', 'permitido', 'allowed'], ['Gerund', 'permitiendo', 'allowing'],
  ], [
    ['Yo', 'permito', 'I allow'], ['Tú', 'permites', 'you allow'], ['Ella / Él / Usted', 'permite', 's/he allows'],
    ['Nosotras / Nosotros', 'permitimos', 'we allow'], ['Ellas / Ellos / Ustedes', 'permiten', 'they allow'],
  ], [
    ['Yo', 'permití', 'I allowed'], ['Tú', 'permitiste', 'you allowed'], ['Ella / Él / Usted', 'permitió', 's/he allowed'],
    ['Nosotras / Nosotros', 'permitimos', 'we allowed'], ['Ellas / Ellos / Ustedes', 'permitieron', 'they allowed'],
  ], [
    ['Yo', 'permitía', 'I used to allow'], ['Tú', 'permitías', 'you used to allow'], ['Ella / Él / Usted', 'permitía', 's/he used to allow'],
    ['Nosotras / Nosotros', 'permitíamos', 'we used to allow'], ['Ellas / Ellos / Ustedes', 'permitían', 'they used to allow'],
  ]),
  simpleVerb('conseguir', 'to get, to obtain', [
    ['Infinitive', 'conseguir', 'to get'], ['Past participle', 'conseguido', 'gotten'], ['Gerund', 'consiguiendo', 'getting'],
  ], [
    ['Yo', 'consigo', 'I get', true], ['Tú', 'consigues', 'you get', true], ['Ella / Él / Usted', 'consigue', 's/he gets', true],
    ['Nosotras / Nosotros', 'conseguimos', 'we get'], ['Ellas / Ellos / Ustedes', 'consiguen', 'they get', true],
  ], [
    ['Yo', 'conseguí', 'I got'], ['Tú', 'conseguiste', 'you got'], ['Ella / Él / Usted', 'consiguió', 's/he got', true],
    ['Nosotras / Nosotros', 'conseguimos', 'we got'], ['Ellas / Ellos / Ustedes', 'consiguieron', 'they got', true],
  ], [
    ['Yo', 'conseguía', 'I used to get'], ['Tú', 'conseguías', 'you used to get'], ['Ella / Él / Usted', 'conseguía', 's/he used to get'],
    ['Nosotras / Nosotros', 'conseguíamos', 'we used to get'], ['Ellas / Ellos / Ustedes', 'conseguían', 'they used to get'],
  ]),
  simpleVerb('servir', 'to serve', [
    ['Infinitive', 'servir', 'to serve'], ['Past participle', 'servido', 'served'], ['Gerund', 'sirviendo', 'serving'],
  ], [
    ['Yo', 'sirvo', 'I serve', true], ['Tú', 'sirves', 'you serve', true], ['Ella / Él / Usted', 'sirve', 's/he serves', true],
    ['Nosotras / Nosotros', 'servimos', 'we serve'], ['Ellas / Ellos / Ustedes', 'sirven', 'they serve', true],
  ], [
    ['Yo', 'serví', 'I served'], ['Tú', 'serviste', 'you served'], ['Ella / Él / Usted', 'sirvió', 's/he served', true],
    ['Nosotras / Nosotros', 'servimos', 'we served'], ['Ellas / Ellos / Ustedes', 'sirvieron', 'they served', true],
  ], [
    ['Yo', 'servía', 'I used to serve'], ['Tú', 'servías', 'you used to serve'], ['Ella / Él / Usted', 'servía', 's/he used to serve'],
    ['Nosotras / Nosotros', 'servíamos', 'we used to serve'], ['Ellas / Ellos / Ustedes', 'servían', 'they used to serve'],
  ]),
  simpleVerb('sacar', 'to take, to take out, to get', [
    ['Infinitive', 'sacar', 'to take'], ['Past participle', 'sacado', 'taken'], ['Gerund', 'sacando', 'taking'],
  ], [
    ['Yo', 'saco', 'I take'], ['Tú', 'sacas', 'you take'], ['Ella / Él / Usted', 'saca', 's/he takes'],
    ['Nosotras / Nosotros', 'sacamos', 'we take'], ['Ellas / Ellos / Ustedes', 'sacan', 'they take'],
  ], [
    ['Yo', 'saqué', 'I took', true], ['Tú', 'sacaste', 'you took'], ['Ella / Él / Usted', 'sacó', 's/he took'],
    ['Nosotras / Nosotros', 'sacamos', 'we took'], ['Ellas / Ellos / Ustedes', 'sacaron', 'they took'],
  ], [
    ['Yo', 'sacaba', 'I used to take'], ['Tú', 'sacabas', 'you used to take'], ['Ella / Él / Usted', 'sacaba', 's/he used to take'],
    ['Nosotras / Nosotros', 'sacábamos', 'we used to take'], ['Ellas / Ellos / Ustedes', 'sacaban', 'they used to take'],
  ]),
  simpleVerb('necesitar', 'to need', [
    ['Infinitive', 'necesitar', 'to need'], ['Past participle', 'necesitado', 'needed'], ['Gerund', 'necesitando', 'needing'],
  ], [
    ['Yo', 'necesito', 'I need'], ['Tú', 'necesitas', 'you need'], ['Ella / Él / Usted', 'necesita', 's/he needs'],
    ['Nosotras / Nosotros', 'necesitamos', 'we need'], ['Ellas / Ellos / Ustedes', 'necesitan', 'they need'],
  ], [
    ['Yo', 'necesité', 'I needed'], ['Tú', 'necesitaste', 'you needed'], ['Ella / Él / Usted', 'necesitó', 's/he needed'],
    ['Nosotras / Nosotros', 'necesitamos', 'we needed'], ['Ellas / Ellos / Ustedes', 'necesitaron', 'they needed'],
  ], [
    ['Yo', 'necesitaba', 'I used to need'], ['Tú', 'necesitabas', 'you used to need'], ['Ella / Él / Usted', 'necesitaba', 's/he used to need'],
    ['Nosotras / Nosotros', 'necesitábamos', 'we used to need'], ['Ellas / Ellos / Ustedes', 'necesitaban', 'they used to need'],
  ]),
  simpleVerb('mantener', 'to maintain, to keep', [
    ['Infinitive', 'mantener', 'to maintain'], ['Past participle', 'mantenido', 'maintained'], ['Gerund', 'manteniendo', 'maintaining'],
  ], [
    ['Yo', 'mantengo', 'I maintain', true], ['Tú', 'mantienes', 'you maintain', true], ['Ella / Él / Usted', 'mantiene', 's/he maintains', true],
    ['Nosotras / Nosotros', 'mantenemos', 'we maintain'], ['Ellas / Ellos / Ustedes', 'mantienen', 'they maintain', true],
  ], [
    ['Yo', 'mantuve', 'I maintained', true], ['Tú', 'mantuviste', 'you maintained', true], ['Ella / Él / Usted', 'mantuvo', 's/he maintained', true],
    ['Nosotras / Nosotros', 'mantuvimos', 'we maintained', true], ['Ellas / Ellos / Ustedes', 'mantuvieron', 'they maintained', true],
  ], [
    ['Yo', 'mantenía', 'I used to maintain'], ['Tú', 'mantenías', 'you used to maintain'], ['Ella / Él / Usted', 'mantenía', 's/he used to maintain'],
    ['Nosotras / Nosotros', 'manteníamos', 'we used to maintain'], ['Ellas / Ellos / Ustedes', 'mantenían', 'they used to maintain'],
  ]),
  simpleVerb('resultar', 'to become, to turn out', [
    ['Infinitive', 'resultar', 'to become'], ['Past participle', 'resultado', 'become'], ['Gerund', 'resultando', 'becoming'],
  ], [
    ['Yo', 'resulto', 'I become'], ['Tú', 'resultas', 'you become'], ['Ella / Él / Usted', 'resulta', 's/he becomes'],
    ['Nosotras / Nosotros', 'resultamos', 'we become'], ['Ellas / Ellos / Ustedes', 'resultan', 'they become'],
  ], [
    ['Yo', 'resulté', 'I became'], ['Tú', 'resultaste', 'you became'], ['Ella / Él / Usted', 'resultó', 's/he became'],
    ['Nosotras / Nosotros', 'resultamos', 'we became'], ['Ellas / Ellos / Ustedes', 'resultaron', 'they became'],
  ], [
    ['Yo', 'resultaba', 'I used to become'], ['Tú', 'resultabas', 'you used to become'], ['Ella / Él / Usted', 'resultaba', 's/he used to become'],
    ['Nosotras / Nosotros', 'resultábamos', 'we used to become'], ['Ellas / Ellos / Ustedes', 'resultaban', 'they used to become'],
  ]),
  simpleVerb('leer', 'to read', [
    ['Infinitive', 'leer', 'to read'], ['Past participle', 'leído', 'read'], ['Gerund', 'leyendo', 'reading'],
  ], [
    ['Yo', 'leo', 'I read'], ['Tú', 'lees', 'you read'], ['Ella / Él / Usted', 'lee', 's/he reads'],
    ['Nosotras / Nosotros', 'leemos', 'we read'], ['Ellas / Ellos / Ustedes', 'leen', 'they read'],
  ], [
    ['Yo', 'leí', 'I read'], ['Tú', 'leíste', 'you read'], ['Ella / Él / Usted', 'leyó', 's/he read', true],
    ['Nosotras / Nosotros', 'leímos', 'we read'], ['Ellas / Ellos / Ustedes', 'leyeron', 'they read', true],
  ], [
    ['Yo', 'leía', 'I used to read'], ['Tú', 'leías', 'you used to read'], ['Ella / Él / Usted', 'leía', 's/he used to read'],
    ['Nosotras / Nosotros', 'leíamos', 'we used to read'], ['Ellas / Ellos / Ustedes', 'leían', 'they used to read'],
  ]),
  simpleVerb('caer', 'to fall', [
    ['Infinitive', 'caer', 'to fall'], ['Past participle', 'caído', 'fallen'], ['Gerund', 'cayendo', 'falling'],
  ], [
    ['Yo', 'caigo', 'I fall', true], ['Tú', 'caes', 'you fall'], ['Ella / Él / Usted', 'cae', 's/he falls'],
    ['Nosotras / Nosotros', 'caemos', 'we fall'], ['Ellas / Ellos / Ustedes', 'caen', 'they fall'],
  ], [
    ['Yo', 'caí', 'I fell'], ['Tú', 'caíste', 'you fell'], ['Ella / Él / Usted', 'cayó', 's/he fell', true],
    ['Nosotras / Nosotros', 'caímos', 'we fell'], ['Ellas / Ellos / Ustedes', 'cayeron', 'they fell', true],
  ], [
    ['Yo', 'caía', 'I used to fall'], ['Tú', 'caías', 'you used to fall'], ['Ella / Él / Usted', 'caía', 's/he used to fall'],
    ['Nosotras / Nosotros', 'caíamos', 'we used to fall'], ['Ellas / Ellos / Ustedes', 'caían', 'they used to fall'],
  ]),
  simpleVerb('cambiar', 'to change', [
    ['Infinitive', 'cambiar', 'to change'], ['Past participle', 'cambiado', 'changed'], ['Gerund', 'cambiando', 'changing'],
  ], [
    ['Yo', 'cambio', 'I change'], ['Tú', 'cambias', 'you change'], ['Ella / Él / Usted', 'cambia', 's/he changes'],
    ['Nosotras / Nosotros', 'cambiamos', 'we change'], ['Ellas / Ellos / Ustedes', 'cambian', 'they change'],
  ], [
    ['Yo', 'cambié', 'I changed'], ['Tú', 'cambiaste', 'you changed'], ['Ella / Él / Usted', 'cambió', 's/he changed'],
    ['Nosotras / Nosotros', 'cambiamos', 'we changed'], ['Ellas / Ellos / Ustedes', 'cambiaron', 'they changed'],
  ], [
    ['Yo', 'cambiaba', 'I used to change'], ['Tú', 'cambiabas', 'you used to change'], ['Ella / Él / Usted', 'cambiaba', 's/he used to change'],
    ['Nosotras / Nosotros', 'cambiábamos', 'we used to change'], ['Ellas / Ellos / Ustedes', 'cambiaban', 'they used to change'],
  ]),
  simpleVerb('presentar', 'to present, to introduce', [
    ['Infinitive', 'presentar', 'to present'], ['Past participle', 'presentado', 'presented'], ['Gerund', 'presentando', 'presenting'],
  ], [
    ['Yo', 'presento', 'I present'], ['Tú', 'presentas', 'you present'], ['Ella / Él / Usted', 'presenta', 's/he presents'],
    ['Nosotras / Nosotros', 'presentamos', 'we present'], ['Ellas / Ellos / Ustedes', 'presentan', 'they present'],
  ], [
    ['Yo', 'presenté', 'I presented'], ['Tú', 'presentaste', 'you presented'], ['Ella / Él / Usted', 'presentó', 's/he presented'],
    ['Nosotras / Nosotros', 'presentamos', 'we presented'], ['Ellas / Ellos / Ustedes', 'presentaron', 'they presented'],
  ], [
    ['Yo', 'presentaba', 'I used to present'], ['Tú', 'presentabas', 'you used to present'], ['Ella / Él / Usted', 'presentaba', 's/he used to present'],
    ['Nosotras / Nosotros', 'presentábamos', 'we used to present'], ['Ellas / Ellos / Ustedes', 'presentaban', 'they used to present'],
  ]),
  simpleVerb('crear', 'to create', [
    ['Infinitive', 'crear', 'to create'], ['Past participle', 'creado', 'created'], ['Gerund', 'creando', 'creating'],
  ], [
    ['Yo', 'creo', 'I create'], ['Tú', 'creas', 'you create'], ['Ella / Él / Usted', 'crea', 's/he creates'],
    ['Nosotras / Nosotros', 'creamos', 'we create'], ['Ellas / Ellos / Ustedes', 'crean', 'they create'],
  ], [
    ['Yo', 'creé', 'I created'], ['Tú', 'creaste', 'you created'], ['Ella / Él / Usted', 'creó', 's/he created'],
    ['Nosotras / Nosotros', 'creamos', 'we created'], ['Ellas / Ellos / Ustedes', 'crearon', 'they created'],
  ], [
    ['Yo', 'creaba', 'I used to create'], ['Tú', 'creabas', 'you used to create'], ['Ella / Él / Usted', 'creaba', 's/he used to create'],
    ['Nosotras / Nosotros', 'creábamos', 'we used to create'], ['Ellas / Ellos / Ustedes', 'creaban', 'they used to create'],
  ]),
  simpleVerb('abrir', 'to open', [
    ['Infinitive', 'abrir', 'to open'], ['Past participle', 'abierto', 'opened'], ['Gerund', 'abriendo', 'opening'],
  ], [
    ['Yo', 'abro', 'I open'], ['Tú', 'abres', 'you open'], ['Ella / Él / Usted', 'abre', 's/he opens'],
    ['Nosotras / Nosotros', 'abrimos', 'we open'], ['Ellas / Ellos / Ustedes', 'abren', 'they open'],
  ], [
    ['Yo', 'abrí', 'I opened'], ['Tú', 'abriste', 'you opened'], ['Ella / Él / Usted', 'abrió', 's/he opened'],
    ['Nosotras / Nosotros', 'abrimos', 'we opened'], ['Ellas / Ellos / Ustedes', 'abrieron', 'they opened'],
  ], [
    ['Yo', 'abría', 'I used to open'], ['Tú', 'abrías', 'you used to open'], ['Ella / Él / Usted', 'abría', 's/he used to open'],
    ['Nosotras / Nosotros', 'abríamos', 'we used to open'], ['Ellas / Ellos / Ustedes', 'abrían', 'they used to open'],
  ]),
  simpleVerb('considerar', 'to consider', [
    ['Infinitive', 'considerar', 'to consider'], ['Past participle', 'considerado', 'considered'], ['Gerund', 'considerando', 'considering'],
  ], [
    ['Yo', 'considero', 'I consider'], ['Tú', 'consideras', 'you consider'], ['Ella / Él / Usted', 'considera', 's/he considers'],
    ['Nosotras / Nosotros', 'consideramos', 'we consider'], ['Ellas / Ellos / Ustedes', 'consideran', 'they consider'],
  ], [
    ['Yo', 'consideré', 'I considered'], ['Tú', 'consideraste', 'you considered'], ['Ella / Él / Usted', 'consideró', 's/he considered'],
    ['Nosotras / Nosotros', 'consideramos', 'we considered'], ['Ellas / Ellos / Ustedes', 'consideraron', 'they considered'],
  ], [
    ['Yo', 'consideraba', 'I used to consider'], ['Tú', 'considerabas', 'you used to consider'], ['Ella / Él / Usted', 'consideraba', 's/he used to consider'],
    ['Nosotras / Nosotros', 'considerábamos', 'we used to consider'], ['Ellas / Ellos / Ustedes', 'consideraban', 'they used to consider'],
  ]),
  simpleVerb('oír', 'to hear, to listen to', [
    ['Infinitive', 'oír', 'to hear'], ['Past participle', 'oído', 'heard'], ['Gerund', 'oyendo', 'hearing'],
  ], [
    ['Yo', 'oigo', 'I hear', true], ['Tú', 'oyes', 'you hear', true], ['Ella / Él / Usted', 'oye', 's/he hears', true],
    ['Nosotras / Nosotros', 'oímos', 'we hear'], ['Ellas / Ellos / Ustedes', 'oyen', 'they hear', true],
  ], [
    ['Yo', 'oí', 'I heard'], ['Tú', 'oíste', 'you heard', true], ['Ella / Él / Usted', 'oyó', 's/he heard', true],
    ['Nosotras / Nosotros', 'oímos', 'we heard'], ['Ellas / Ellos / Ustedes', 'oyeron', 'they heard', true],
  ], [
    ['Yo', 'oía', 'I used to hear'], ['Tú', 'oías', 'you used to hear'], ['Ella / Él / Usted', 'oía', 's/he used to hear'],
    ['Nosotras / Nosotros', 'oíamos', 'we used to hear'], ['Ellas / Ellos / Ustedes', 'oían', 'they used to hear'],
  ]),
  simpleVerb('acabar', 'to finish, to end, to complete', [
    ['Infinitive', 'acabar', 'to finish'], ['Past participle', 'acabado', 'finished'], ['Gerund', 'acabando', 'finishing'],
  ], [
    ['Yo', 'acabo', 'I finish'], ['Tú', 'acabas', 'you finish'], ['Ella / Él / Usted', 'acaba', 's/he finishes'],
    ['Nosotras / Nosotros', 'acabamos', 'we finish'], ['Ellas / Ellos / Ustedes', 'acaban', 'they finish'],
  ], [
    ['Yo', 'acabé', 'I finished'], ['Tú', 'acabaste', 'you finished'], ['Ella / Él / Usted', 'acabó', 's/he finished'],
    ['Nosotras / Nosotros', 'acabamos', 'we finished'], ['Ellas / Ellos / Ustedes', 'acabaron', 'they finished'],
  ], [
    ['Yo', 'acababa', 'I used to finish'], ['Tú', 'acababas', 'you used to finish'], ['Ella / Él / Usted', 'acababa', 's/he used to finish'],
    ['Nosotras / Nosotros', 'acabábamos', 'we used to finish'], ['Ellas / Ellos / Ustedes', 'acababan', 'they used to finish'],
  ]),
  simpleVerb('convertir', 'to convert', [
    ['Infinitive', 'convertir', 'to convert'], ['Past participle', 'convertido', 'converted'], ['Gerund', 'convirtiendo', 'converting'],
  ], [
    ['Yo', 'convierto', 'I convert', true], ['Tú', 'conviertes', 'you convert', true], ['Ella / Él / Usted', 'convierte', 's/he converts', true],
    ['Nosotras / Nosotros', 'convertimos', 'we convert'], ['Ellas / Ellos / Ustedes', 'convierten', 'they convert', true],
  ], [
    ['Yo', 'convertí', 'I converted'], ['Tú', 'convertiste', 'you converted'], ['Ella / Él / Usted', 'convirtió', 's/he converted', true],
    ['Nosotras / Nosotros', 'convertimos', 'we converted'], ['Ellas / Ellos / Ustedes', 'convirtieron', 'they converted', true],
  ], [
    ['Yo', 'convertía', 'I used to convert'], ['Tú', 'convertías', 'you used to convert'], ['Ella / Él / Usted', 'convertía', 's/he used to convert'],
    ['Nosotras / Nosotros', 'convertíamos', 'we used to convert'], ['Ellas / Ellos / Ustedes', 'convertían', 'they used to convert'],
  ]),
  simpleVerb('ganar', 'to win, to gain, to earn', [
    ['Infinitive', 'ganar', 'to win'], ['Past participle', 'ganado', 'won'], ['Gerund', 'ganando', 'winning'],
  ], [
    ['Yo', 'gano', 'I win'], ['Tú', 'ganas', 'you win'], ['Ella / Él / Usted', 'gana', 's/he wins'],
    ['Nosotras / Nosotros', 'ganamos', 'we win'], ['Ellas / Ellos / Ustedes', 'ganan', 'they win'],
  ], [
    ['Yo', 'gané', 'I won'], ['Tú', 'ganaste', 'you won'], ['Ella / Él / Usted', 'ganó', 's/he won'],
    ['Nosotras / Nosotros', 'ganamos', 'we won'], ['Ellas / Ellos / Ustedes', 'ganaron', 'they won'],
  ], [
    ['Yo', 'ganaba', 'I used to win'], ['Tú', 'ganabas', 'you used to win'], ['Ella / Él / Usted', 'ganaba', 's/he used to win'],
    ['Nosotras / Nosotros', 'ganábamos', 'we used to win'], ['Ellas / Ellos / Ustedes', 'ganaban', 'they used to win'],
  ]),
  simpleVerb('formar', 'to form, to make', [
    ['Infinitive', 'formar', 'to form'], ['Past participle', 'formado', 'formed'], ['Gerund', 'formando', 'forming'],
  ], [
    ['Yo', 'formo', 'I form'], ['Tú', 'formas', 'you form'], ['Ella / Él / Usted', 'forma', 's/he forms'],
    ['Nosotras / Nosotros', 'formamos', 'we form'], ['Ellas / Ellos / Ustedes', 'forman', 'they form'],
  ], [
    ['Yo', 'formé', 'I formed'], ['Tú', 'formaste', 'you formed'], ['Ella / Él / Usted', 'formó', 's/he formed'],
    ['Nosotras / Nosotros', 'formamos', 'we formed'], ['Ellas / Ellos / Ustedes', 'formaron', 'they formed'],
  ], [
    ['Yo', 'formaba', 'I used to form'], ['Tú', 'formabas', 'you used to form'], ['Ella / Él / Usted', 'formaba', 's/he used to form'],
    ['Nosotras / Nosotros', 'formábamos', 'we used to form'], ['Ellas / Ellos / Ustedes', 'formaban', 'they used to form'],
  ]),
  simpleVerb('traer', 'to bring, to carry', [
    ['Infinitive', 'traer', 'to bring'], ['Past participle', 'traído', 'brought'], ['Gerund', 'trayendo', 'bringing'],
  ], [
    ['Yo', 'traigo', 'I bring', true], ['Tú', 'traes', 'you bring', true], ['Ella / Él / Usted', 'trae', 's/he brings', true],
    ['Nosotras / Nosotros', 'traemos', 'we bring'], ['Ellas / Ellos / Ustedes', 'traen', 'they bring', true],
  ], [
    ['Yo', 'traje', 'I brought', true], ['Tú', 'trajiste', 'you brought', true], ['Ella / Él / Usted', 'trajo', 's/he brought', true],
    ['Nosotras / Nosotros', 'trajimos', 'we brought', true], ['Ellas / Ellos / Ustedes', 'trajeron', 'they brought', true],
  ], [
    ['Yo', 'traía', 'I used to bring'], ['Tú', 'traías', 'you used to bring'], ['Ella / Él / Usted', 'traía', 's/he used to bring'],
    ['Nosotras / Nosotros', 'traíamos', 'we used to bring'], ['Ellas / Ellos / Ustedes', 'traían', 'they used to bring'],
  ]),
  simpleVerb('partir', 'to split, to depart', [
    ['Infinitive', 'partir', 'to split'], ['Past participle', 'partido', 'split'], ['Gerund', 'partiendo', 'splitting'],
  ], [
    ['Yo', 'parto', 'I split'], ['Tú', 'partes', 'you split'], ['Ella / Él / Usted', 'parte', 's/he splits'],
    ['Nosotras / Nosotros', 'partimos', 'we split'], ['Ellas / Ellos / Ustedes', 'parten', 'they split'],
  ], [
    ['Yo', 'partí', 'I split'], ['Tú', 'partiste', 'you split'], ['Ella / Él / Usted', 'partió', 's/he split'],
    ['Nosotras / Nosotros', 'partimos', 'we split'], ['Ellas / Ellos / Ustedes', 'partieron', 'they split'],
  ], [
    ['Yo', 'partía', 'I used to split'], ['Tú', 'partías', 'you used to split'], ['Ella / Él / Usted', 'partía', 's/he used to split'],
    ['Nosotras / Nosotros', 'partíamos', 'we used to split'], ['Ellas / Ellos / Ustedes', 'partían', 'they used to split'],
  ]),
  simpleVerb('morir', 'to die', [
    ['Infinitive', 'morir', 'to die'], ['Past participle', 'muerto', 'died'], ['Gerund', 'muriendo', 'dying'],
  ], [
    ['Yo', 'muero', 'I die', true], ['Tú', 'mueres', 'you die', true], ['Ella / Él / Usted', 'muere', 's/he dies', true],
    ['Nosotras / Nosotros', 'morimos', 'we die'], ['Ellas / Ellos / Ustedes', 'mueren', 'they die', true],
  ], [
    ['Yo', 'morí', 'I died'], ['Tú', 'moriste', 'you died'], ['Ella / Él / Usted', 'murió', 's/he died', true],
    ['Nosotras / Nosotros', 'morimos', 'we died'], ['Ellas / Ellos / Ustedes', 'murieron', 'they died', true],
  ], [
    ['Yo', 'moría', 'I used to die'], ['Tú', 'morías', 'you used to die'], ['Ella / Él / Usted', 'moría', 's/he used to die'],
    ['Nosotras / Nosotros', 'moríamos', 'we used to die'], ['Ellas / Ellos / Ustedes', 'morían', 'they used to die'],
  ]),
  simpleVerb('aceptar', 'to accept', [
    ['Infinitive', 'aceptar', 'to accept'], ['Past participle', 'aceptado', 'accepted'], ['Gerund', 'aceptando', 'accepting'],
  ], [
    ['Yo', 'acepto', 'I accept'], ['Tú', 'aceptas', 'you accept'], ['Ella / Él / Usted', 'acepta', 's/he accepts'],
    ['Nosotras / Nosotros', 'aceptamos', 'we accept'], ['Ellas / Ellos / Ustedes', 'aceptan', 'they accept'],
  ], [
    ['Yo', 'acepté', 'I accepted'], ['Tú', 'aceptaste', 'you accepted'], ['Ella / Él / Usted', 'aceptó', 's/he accepted'],
    ['Nosotras / Nosotros', 'aceptamos', 'we accepted'], ['Ellas / Ellos / Ustedes', 'aceptaron', 'they accepted'],
  ], [
    ['Yo', 'aceptaba', 'I used to accept'], ['Tú', 'aceptabas', 'you used to accept'], ['Ella / Él / Usted', 'aceptaba', 's/he used to accept'],
    ['Nosotras / Nosotros', 'aceptábamos', 'we used to accept'], ['Ellas / Ellos / Ustedes', 'aceptaban', 'they used to accept'],
  ]),
  simpleVerb('realizar', 'to perform, to carry out, to realize', [
    ['Infinitive', 'realizar', 'to perform'], ['Past participle', 'realizado', 'performed'], ['Gerund', 'realizando', 'performing'],
  ], [
    ['Yo', 'realizo', 'I perform'], ['Tú', 'realizas', 'you perform'], ['Ella / Él / Usted', 'realiza', 's/he performs'],
    ['Nosotras / Nosotros', 'realizamos', 'we perform'], ['Ellas / Ellos / Ustedes', 'realizan', 'they perform'],
  ], [
    ['Yo', 'realicé', 'I performed', true], ['Tú', 'realizaste', 'you performed'], ['Ella / Él / Usted', 'realizó', 's/he performed'],
    ['Nosotras / Nosotros', 'realizamos', 'we performed'], ['Ellas / Ellos / Ustedes', 'realizaron', 'they performed'],
  ], [
    ['Yo', 'realizaba', 'I used to perform'], ['Tú', 'realizabas', 'you used to perform'], ['Ella / Él / Usted', 'realizaba', 's/he used to perform'],
    ['Nosotras / Nosotros', 'realizábamos', 'we used to perform'], ['Ellas / Ellos / Ustedes', 'realizaban', 'they used to perform'],
  ]),
  simpleVerb('suponer', 'to suppose, to guess', [
    ['Infinitive', 'suponer', 'to suppose'], ['Past participle', 'supuesto', 'supposed'], ['Gerund', 'suponiendo', 'supposing'],
  ], [
    ['Yo', 'supongo', 'I suppose', true], ['Tú', 'supones', 'you suppose'], ['Ella / Él / Usted', 'supone', 's/he supposes'],
    ['Nosotras / Nosotros', 'suponemos', 'we suppose'], ['Ellas / Ellos / Ustedes', 'suponen', 'they suppose'],
  ], [
    ['Yo', 'supuse', 'I supposed', true], ['Tú', 'supusiste', 'you supposed'], ['Ella / Él / Usted', 'supuso', 's/he supposed'],
    ['Nosotras / Nosotros', 'supusimos', 'we supposed'], ['Ellas / Ellos / Ustedes', 'supusieron', 'they supposed'],
  ], [
    ['Yo', 'suponía', 'I used to suppose'], ['Tú', 'suponías', 'you used to suppose'], ['Ella / Él / Usted', 'suponía', 's/he used to suppose'],
    ['Nosotras / Nosotros', 'suponíamos', 'we used to suppose'], ['Ellas / Ellos / Ustedes', 'suponían', 'they used to suppose'],
  ]),
  simpleVerb('comprender', 'to comprehend, to understand', [
    ['Infinitive', 'comprender', 'to comprehend'], ['Past participle', 'comprendido', 'comprehended'], ['Gerund', 'comprendiendo', 'comprehending'],
  ], [
    ['Yo', 'comprendo', 'I comprehend'], ['Tú', 'comprendes', 'you comprehend'], ['Ella / Él / Usted', 'comprende', 's/he comprehends'],
    ['Nosotras / Nosotros', 'comprendemos', 'we comprehend'], ['Ellas / Ellos / Ustedes', 'comprenden', 'they comprehend'],
  ], [
    ['Yo', 'comprendí', 'I comprehended'], ['Tú', 'comprendiste', 'you comprehended'], ['Ella / Él / Usted', 'comprendió', 's/he comprehended'],
    ['Nosotras / Nosotros', 'comprendimos', 'we comprehended'], ['Ellas / Ellos / Ustedes', 'comprendieron', 'they comprehended'],
  ], [
    ['Yo', 'comprendía', 'I used to comprehend'], ['Tú', 'comprendías', 'you used to comprehend'], ['Ella / Él / Usted', 'comprendía', 's/he used to comprehend'],
    ['Nosotras / Nosotros', 'comprendíamos', 'we used to comprehend'], ['Ellas / Ellos / Ustedes', 'comprendían', 'they used to comprehend'],
  ]),
  simpleVerb('lograr', 'to achieve, to accomplish', [
    ['Infinitive', 'lograr', 'to achieve'], ['Past participle', 'logrado', 'achieved'], ['Gerund', 'logrando', 'achieving'],
  ], [
    ['Yo', 'logro', 'I achieve'], ['Tú', 'logras', 'you achieve'], ['Ella / Él / Usted', 'logra', 's/he achieves'],
    ['Nosotras / Nosotros', 'logramos', 'we achieve'], ['Ellas / Ellos / Ustedes', 'logran', 'they achieve'],
  ], [
    ['Yo', 'logré', 'I achieved'], ['Tú', 'lograste', 'you achieved'], ['Ella / Él / Usted', 'logró', 's/he achieved'],
    ['Nosotras / Nosotros', 'logramos', 'we achieved'], ['Ellas / Ellos / Ustedes', 'lograron', 'they achieved'],
  ], [
    ['Yo', 'lograba', 'I used to achieve'], ['Tú', 'lograbas', 'you used to achieve'], ['Ella / Él / Usted', 'lograba', 's/he used to achieve'],
    ['Nosotras / Nosotros', 'lográbamos', 'we used to achieve'], ['Ellas / Ellos / Ustedes', 'lograban', 'they used to achieve'],
  ]),
  simpleVerb('explicar', 'to explain', [
    ['Infinitive', 'explicar', 'to explain'], ['Past participle', 'explicado', 'explained'], ['Gerund', 'explicando', 'explaining'],
  ], [
    ['Yo', 'explico', 'I explain'], ['Tú', 'explicas', 'you explain'], ['Ella / Él / Usted', 'explica', 's/he explains'],
    ['Nosotras / Nosotros', 'explicamos', 'we explain'], ['Ellas / Ellos / Ustedes', 'explican', 'they explain'],
  ], [
    ['Yo', 'expliqué', 'I explained', true], ['Tú', 'explicaste', 'you explained'], ['Ella / Él / Usted', 'explicó', 's/he explained'],
    ['Nosotras / Nosotros', 'explicamos', 'we explained'], ['Ellas / Ellos / Ustedes', 'explicaron', 'they explained'],
  ], [
    ['Yo', 'explicaba', 'I used to explain'], ['Tú', 'explicabas', 'you used to explain'], ['Ella / Él / Usted', 'explicaba', 's/he used to explain'],
    ['Nosotras / Nosotros', 'explicábamos', 'we used to explain'], ['Ellas / Ellos / Ustedes', 'explicaban', 'they used to explain'],
  ]),
  simpleVerb('preguntar', 'to ask, to question', [
    ['Infinitive', 'preguntar', 'to ask'], ['Past participle', 'preguntado', 'asked'], ['Gerund', 'preguntando', 'asking'],
  ], [
    ['Yo', 'pregunto', 'I ask'], ['Tú', 'preguntas', 'you ask'], ['Ella / Él / Usted', 'pregunta', 's/he asks'],
    ['Nosotras / Nosotros', 'preguntamos', 'we ask'], ['Ellas / Ellos / Ustedes', 'preguntan', 'they ask'],
  ], [
    ['Yo', 'pregunté', 'I asked'], ['Tú', 'preguntaste', 'you asked'], ['Ella / Él / Usted', 'preguntó', 's/he asked'],
    ['Nosotras / Nosotros', 'preguntamos', 'we asked'], ['Ellas / Ellos / Ustedes', 'preguntaron', 'they asked'],
  ], [
    ['Yo', 'preguntaba', 'I used to ask'], ['Tú', 'preguntabas', 'you used to ask'], ['Ella / Él / Usted', 'preguntaba', 's/he used to ask'],
    ['Nosotras / Nosotros', 'preguntábamos', 'we used to ask'], ['Ellas / Ellos / Ustedes', 'preguntaban', 'they used to ask'],
  ]),
  simpleVerb('tocar', 'to play (an instrument), to touch', [
    ['Infinitive', 'tocar', 'to play, to touch'], ['Past participle', 'tocado', 'played'], ['Gerund', 'tocando', 'playing'],
  ], [
    ['Yo', 'toco', 'I play'], ['Tú', 'tocas', 'you play'], ['Ella / Él / Usted', 'toca', 's/he plays'],
    ['Nosotras / Nosotros', 'tocamos', 'we play'], ['Ellas / Ellos / Ustedes', 'tocan', 'they play'],
  ], [
    ['Yo', 'toqué', 'I played', true], ['Tú', 'tocaste', 'you played'], ['Ella / Él / Usted', 'tocó', 's/he played'],
    ['Nosotras / Nosotros', 'tocamos', 'we played'], ['Ellas / Ellos / Ustedes', 'tocaron', 'they played'],
  ], [
    ['Yo', 'tocaba', 'I used to play'], ['Tú', 'tocabas', 'you used to play'], ['Ella / Él / Usted', 'tocaba', 's/he used to play'],
    ['Nosotras / Nosotros', 'tocábamos', 'we used to play'], ['Ellas / Ellos / Ustedes', 'tocaban', 'they used to play'],
  ]),
  simpleVerb('reconocer', 'to recognize', [
    ['Infinitive', 'reconocer', 'to recognize'], ['Past participle', 'reconocido', 'recognized'], ['Gerund', 'reconociendo', 'recognizing'],
  ], [
    ['Yo', 'reconozco', 'I recognize', true], ['Tú', 'reconoces', 'you recognize'], ['Ella / Él / Usted', 'reconoce', 's/he recognizes'],
    ['Nosotras / Nosotros', 'reconocemos', 'we recognize'], ['Ellas / Ellos / Ustedes', 'reconocen', 'they recognize'],
  ], [
    ['Yo', 'reconocí', 'I recognized'], ['Tú', 'reconociste', 'you recognized'], ['Ella / Él / Usted', 'reconoció', 's/he recognized'],
    ['Nosotras / Nosotros', 'reconocimos', 'we recognized'], ['Ellas / Ellos / Ustedes', 'reconocieron', 'they recognized'],
  ], [
    ['Yo', 'reconocía', 'I used to recognize'], ['Tú', 'reconocías', 'you used to recognize'], ['Ella / Él / Usted', 'reconocía', 's/he used to recognize'],
    ['Nosotras / Nosotros', 'reconocíamos', 'we used to recognize'], ['Ellas / Ellos / Ustedes', 'reconocían', 'they used to recognize'],
  ]),
  simpleVerb('estudiar', 'to study', [
    ['Infinitive', 'estudiar', 'to study'], ['Past participle', 'estudiado', 'studied'], ['Gerund', 'estudiando', 'studying'],
  ], [
    ['Yo', 'estudio', 'I study'], ['Tú', 'estudias', 'you study'], ['Ella / Él / Usted', 'estudia', 's/he studies'],
    ['Nosotras / Nosotros', 'estudiamos', 'we study'], ['Ellas / Ellos / Ustedes', 'estudian', 'they study'],
  ], [
    ['Yo', 'estudié', 'I studied'], ['Tú', 'estudiaste', 'you studied'], ['Ella / Él / Usted', 'estudió', 's/he studied'],
    ['Nosotras / Nosotros', 'estudiamos', 'we studied'], ['Ellas / Ellos / Ustedes', 'estudiaron', 'they studied'],
  ], [
    ['Yo', 'estudiaba', 'I used to study'], ['Tú', 'estudiabas', 'you used to study'], ['Ella / Él / Usted', 'estudiaba', 's/he used to study'],
    ['Nosotras / Nosotros', 'estudiábamos', 'we used to study'], ['Ellas / Ellos / Ustedes', 'estudiaban', 'they used to study'],
  ]),
  simpleVerb('alcanzar', 'to reach, to attain, to achieve', [
    ['Infinitive', 'alcanzar', 'to reach'], ['Past participle', 'alcanzado', 'reached'], ['Gerund', 'alcanzando', 'reaching'],
  ], [
    ['Yo', 'alcanzo', 'I reach'], ['Tú', 'alcanzas', 'you reach'], ['Ella / Él / Usted', 'alcanza', 's/he reaches'],
    ['Nosotras / Nosotros', 'alcanzamos', 'we reach'], ['Ellas / Ellos / Ustedes', 'alcanzan', 'they reach'],
  ], [
    ['Yo', 'alcancé', 'I reached', true], ['Tú', 'alcanzaste', 'you reached'], ['Ella / Él / Usted', 'alcanzó', 's/he reached'],
    ['Nosotras / Nosotros', 'alcanzamos', 'we reached'], ['Ellas / Ellos / Ustedes', 'alcanzaron', 'they reached'],
  ], [
    ['Yo', 'alcanzaba', 'I used to reach'], ['Tú', 'alcanzabas', 'you used to reach'], ['Ella / Él / Usted', 'alcanzaba', 's/he used to reach'],
    ['Nosotras / Nosotros', 'alcanzábamos', 'we used to reach'], ['Ellas / Ellos / Ustedes', 'alcanzaban', 'they used to reach'],
  ]),
  simpleVerb('nacer', 'to be born', [
    ['Infinitive', 'nacer', 'to be born'], ['Past participle', 'nacido', 'been born'], ['Gerund', 'naciendo', 'being born'],
  ], [
    ['Yo', 'nazco', 'I am born', true], ['Tú', 'naces', 'you are born'], ['Ella / Él / Usted', 'nace', 's/he is born'],
    ['Nosotras / Nosotros', 'nacemos', 'we are born'], ['Ellas / Ellos / Ustedes', 'nacen', 'they are born'],
  ], [
    ['Yo', 'nací', 'I was born'], ['Tú', 'naciste', 'you were born'], ['Ella / Él / Usted', 'nació', 's/he was born'],
    ['Nosotras / Nosotros', 'nacimos', 'we were born'], ['Ellas / Ellos / Ustedes', 'nacieron', 'they were born'],
  ], [
    ['Yo', 'nacía', 'I used to be born'], ['Tú', 'nacías', 'you used to be born'], ['Ella / Él / Usted', 'nacía', 's/he used to be born'],
    ['Nosotras / Nosotros', 'nacíamos', 'we used to be born'], ['Ellas / Ellos / Ustedes', 'nacían', 'they used to be born'],
  ]),
  simpleVerb('dirigir', 'to direct, to lead, to manage', [
    ['Infinitive', 'dirigir', 'to direct'], ['Past participle', 'dirigido', 'directed'], ['Gerund', 'dirigiendo', 'directing'],
  ], [
    ['Yo', 'dirijo', 'I direct', true], ['Tú', 'diriges', 'you direct'], ['Ella / Él / Usted', 'dirige', 's/he directs'],
    ['Nosotras / Nosotros', 'dirigimos', 'we direct'], ['Ellas / Ellos / Ustedes', 'dirigen', 'they direct'],
  ], [
    ['Yo', 'dirigí', 'I directed'], ['Tú', 'dirigiste', 'you directed'], ['Ella / Él / Usted', 'dirigió', 's/he directed'],
    ['Nosotras / Nosotros', 'dirigimos', 'we directed'], ['Ellas / Ellos / Ustedes', 'dirigieron', 'they directed'],
  ], [
    ['Yo', 'dirigía', 'I used to direct'], ['Tú', 'dirigías', 'you used to direct'], ['Ella / Él / Usted', 'dirigía', 's/he used to direct'],
    ['Nosotras / Nosotros', 'dirigíamos', 'we used to direct'], ['Ellas / Ellos / Ustedes', 'dirigían', 'they used to direct'],
  ]),
  simpleVerb('correr', 'to run, to race', [
    ['Infinitive', 'correr', 'to run'], ['Past participle', 'corrido', 'run'], ['Gerund', 'corriendo', 'running'],
  ], [
    ['Yo', 'corro', 'I run'], ['Tú', 'corres', 'you run'], ['Ella / Él / Usted', 'corre', 's/he runs'],
    ['Nosotras / Nosotros', 'corremos', 'we run'], ['Ellas / Ellos / Ustedes', 'corren', 'they run'],
  ], [
    ['Yo', 'corrí', 'I ran'], ['Tú', 'corriste', 'you ran'], ['Ella / Él / Usted', 'corrió', 's/he ran'],
    ['Nosotras / Nosotros', 'corrimos', 'we ran'], ['Ellas / Ellos / Ustedes', 'corrieron', 'they ran'],
  ], [
    ['Yo', 'corría', 'I used to run'], ['Tú', 'corrías', 'you used to run'], ['Ella / Él / Usted', 'corría', 's/he used to run'],
    ['Nosotras / Nosotros', 'corríamos', 'we used to run'], ['Ellas / Ellos / Ustedes', 'corrían', 'they used to run'],
  ]),
  simpleVerb('utilizar', 'to use, to utilize', [
    ['Infinitive', 'utilizar', 'to use'], ['Past participle', 'utilizado', 'used'], ['Gerund', 'utilizando', 'using'],
  ], [
    ['Yo', 'utilizo', 'I use'], ['Tú', 'utilizas', 'you use'], ['Ella / Él / Usted', 'utiliza', 's/he uses'],
    ['Nosotras / Nosotros', 'utilizamos', 'we use'], ['Ellas / Ellos / Ustedes', 'utilizan', 'they use'],
  ], [
    ['Yo', 'utilicé', 'I used', true], ['Tú', 'utilizaste', 'you used'], ['Ella / Él / Usted', 'utilizó', 's/he used'],
    ['Nosotras / Nosotros', 'utilizamos', 'we used'], ['Ellas / Ellos / Ustedes', 'utilizaron', 'they used'],
  ], [
    ['Yo', 'utilizaba', 'I used to use'], ['Tú', 'utilizabas', 'you used to use'], ['Ella / Él / Usted', 'utilizaba', 's/he used to use'],
    ['Nosotras / Nosotros', 'utilizábamos', 'we used to use'], ['Ellas / Ellos / Ustedes', 'utilizaban', 'they used to use'],
  ]),
  simpleVerb('pagar', 'to pay (for)', [
    ['Infinitive', 'pagar', 'to pay'], ['Past participle', 'pagado', 'paid'], ['Gerund', 'pagando', 'paying'],
  ], [
    ['Yo', 'pago', 'I pay'], ['Tú', 'pagas', 'you pay'], ['Ella / Él / Usted', 'paga', 's/he pays'],
    ['Nosotras / Nosotros', 'pagamos', 'we pay'], ['Ellas / Ellos / Ustedes', 'pagan', 'they pay'],
  ], [
    ['Yo', 'pagué', 'I paid', true], ['Tú', 'pagaste', 'you paid'], ['Ella / Él / Usted', 'pagó', 's/he paid'],
    ['Nosotras / Nosotros', 'pagamos', 'we paid'], ['Ellas / Ellos / Ustedes', 'pagaron', 'they paid'],
  ], [
    ['Yo', 'pagaba', 'I used to pay'], ['Tú', 'pagabas', 'you used to pay'], ['Ella / Él / Usted', 'pagaba', 's/he used to pay'],
    ['Nosotras / Nosotros', 'pagábamos', 'we used to pay'], ['Ellas / Ellos / Ustedes', 'pagaban', 'they used to pay'],
  ]),
  simpleVerb('ayudar', 'to help, to assist', [
    ['Infinitive', 'ayudar', 'to help'], ['Past participle', 'ayudado', 'helped'], ['Gerund', 'ayudando', 'helping'],
  ], [
    ['Yo', 'ayudo', 'I help'], ['Tú', 'ayudas', 'you help'], ['Ella / Él / Usted', 'ayuda', 's/he helps'],
    ['Nosotras / Nosotros', 'ayudamos', 'we help'], ['Ellas / Ellos / Ustedes', 'ayudan', 'they help'],
  ], [
    ['Yo', 'ayudé', 'I helped'], ['Tú', 'ayudaste', 'you helped'], ['Ella / Él / Usted', 'ayudó', 's/he helped'],
    ['Nosotras / Nosotros', 'ayudamos', 'we helped'], ['Ellas / Ellos / Ustedes', 'ayudaron', 'they helped'],
  ], [
    ['Yo', 'ayudaba', 'I used to help'], ['Tú', 'ayudabas', 'you used to help'], ['Ella / Él / Usted', 'ayudaba', 's/he used to help'],
    ['Nosotras / Nosotros', 'ayudábamos', 'we used to help'], ['Ellas / Ellos / Ustedes', 'ayudaban', 'they used to help'],
  ]),
]

VERBS.push(...BULK_VERBS)

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
