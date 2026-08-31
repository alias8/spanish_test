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
