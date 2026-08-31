
export type ConjugationEntry = { id: string; stem: string; ending: string }
export type ConjugationRow = { pronoun: string; cells: ConjugationEntry[] }
export type ConjugationScreen = { kind: 'conjugation'; label: string; description: string; verbs: string[]; rows: ConjugationRow[] }
// Shared labels — every verb's data is positional against these instead of repeating the labels per-verb.
export const VERB_PRONOUNS = ['Yo', 'Tú', 'Ella / Él / Usted', 'Nosotras / Nosotros', 'Ellas / Ellos / Ustedes'] as const
export const INFINITIVE_ITEMS = ['Infinitive', 'Past participle', 'Gerund'] as const
export const TENSE_META = [
    { name: 'Indicative Present', spanishName: 'El Presente' },
    { name: 'Indicative Preterite', spanishName: 'El Pretérito Indefinido' },
    { name: 'Indicative Imperfect', spanishName: 'El Pretérito Imperfecto' },
] as const

export type VerbForm = { spanish: string; english: string; irregular?: boolean }
export type VerbTense = {
    description?: string
    example?: { spanish: string; english: string }
    forms: VerbForm[] // aligned with PRONOUNS by index
}
export type VerbInfoRow = { spanish: string; english: string }
export type VerbEntry = {
    infinitive: string
    translation: string
    summary?: string
    infinitiveForms: VerbInfoRow[] // aligned with INFINITIVE_ITEMS by index
    tenses: VerbTense[] // aligned with TENSE_META by index
}
export type VerbLookupScreen = { kind: 'verbs'; label: string }

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

export const VERBS: VerbEntry[] = [
    {
        infinitive: 'ser',
        translation: 'to be',
        summary: 'Ser is the Spanish verb "to be". It is generally used to portray permanent situations, for example: I am from Spain, he is a profesor, she is tall, this watch is my mother\'s etc. You\'ll find that this particular verb is one of the most versatile out there, but also hugely irregular, following almost no rules. Ser is not to be confused with Estar, also meaning "to be", but used for different situations.',
        infinitiveForms: [
            { spanish: 'ser', english: 'to be (permanent)' },
            { spanish: 'sido', english: 'been' },
            { spanish: 'siendo', english: 'being' },
        ],
        tenses: [
            {
                description: 'The Indicative Present of ser is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.',
                example: { spanish: 'soy estudiante', english: 'I am a student' },
                forms: [
                    { spanish: 'soy', english: 'I am', irregular: true },
                    { spanish: 'eres', english: 'you are', irregular: true },
                    { spanish: 'es', english: 's/he is', irregular: true },
                    { spanish: 'somos', english: 'we are', irregular: true },
                    { spanish: 'son', english: 'they are', irregular: true },
                ],
            },
            {
                description: 'The Indicative Preterite of ser is used to talk about actions completed in the past, at a specific point in time.',
                example: { spanish: 'fui estudiante', english: 'I was a student' },
                forms: [
                    { spanish: 'fui', english: 'I was', irregular: true },
                    { spanish: 'fuiste', english: 'you were', irregular: true },
                    { spanish: 'fue', english: 's/he was', irregular: true },
                    { spanish: 'fuimos', english: 'we were', irregular: true },
                    { spanish: 'fueron', english: 'they were', irregular: true },
                ],
            },
            {
                description: 'The Indicative Imperfect of ser is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
                example: { spanish: 'era estudiante', english: 'I used to be a student' },
                forms: [
                    { spanish: 'era', english: 'I used to be', irregular: true },
                    { spanish: 'eras', english: 'you used to be', irregular: true },
                    { spanish: 'era', english: 's/he used to be', irregular: true },
                    { spanish: 'éramos', english: 'we used to be', irregular: true },
                    { spanish: 'eran', english: 'they used to be', irregular: true },
                ],
            },
        ],
    },
    {
        infinitive: 'estar',
        translation: 'to be',
        summary: 'Estar is another Spanish verb which means "to be". In contrast to Ser, Estar is generally used to portray more temporary feelings or situations. For example: I am not at home, you are angry, she is at the concert, this cake is delicious, we are singing a song, this restaurant is very popular. This is an important and versatile verb that you will use in everyday life. Estar is also irregular in most cases, meaning you will need to learn the conjugations off by heart.',
        infinitiveForms: [
            { spanish: 'estar', english: 'to be (temporary)' },
            { spanish: 'estado', english: 'been' },
            { spanish: 'estando', english: 'being' },
        ],
        tenses: [
            {
                description: 'The Indicative Present of estar is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.',
                example: { spanish: 'estoy cansado', english: 'I am tired' },
                forms: [
                    { spanish: 'estoy', english: 'I am', irregular: true },
                    { spanish: 'estás', english: 'you are', irregular: true },
                    { spanish: 'está', english: 's/he is', irregular: true },
                    { spanish: 'estamos', english: 'we are' },
                    { spanish: 'están', english: 'they are', irregular: true },
                ],
            },
            {
                description: 'The Indicative Preterite of estar is used to talk about actions completed in the past, at a specific point in time.',
                example: { spanish: 'estuve cansado', english: 'I was tired' },
                forms: [
                    { spanish: 'estuve', english: 'I was', irregular: true },
                    { spanish: 'estuviste', english: 'you were', irregular: true },
                    { spanish: 'estuvo', english: 's/he was', irregular: true },
                    { spanish: 'estuvimos', english: 'we were', irregular: true },
                    { spanish: 'estuvieron', english: 'they were', irregular: true },
                ],
            },
            {
                description: 'The Indicative Imperfect of estar is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
                example: { spanish: 'estaba cansado', english: 'I used to be tired' },
                forms: [
                    { spanish: 'estaba', english: 'I used to be' },
                    { spanish: 'estabas', english: 'you used to be' },
                    { spanish: 'estaba', english: 's/he used to be' },
                    { spanish: 'estábamos', english: 'we used to be' },
                    { spanish: 'estaban', english: 'they used to be' },
                ],
            },
        ],
    },
    {
        infinitive: 'tener',
        translation: 'to have',
        summary: 'Tener is the Spanish verb "to have". It is an extremely useful verb and is largely irregular when conjugating. It is important to note that in Spanish, tener is used to portray a person\'s age; for example: "tengo 21 años". This literally translates to "I have 21 years". Another common use for Tener is to indicate an obligation, for example: "tengo que irme a casa" - "I have to go home". It is always followed by "que" to indicate this type of obligation or "must".',
        infinitiveForms: [
            { spanish: 'tener', english: 'to have' },
            { spanish: 'tenido', english: 'had' },
            { spanish: 'teniendo', english: 'having' },
        ],
        tenses: [
            {
                description: 'The Indicative Present of tener is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.',
                example: { spanish: 'tengo un gato gris', english: 'I have a grey cat' },
                forms: [
                    { spanish: 'tengo', english: 'I have', irregular: true },
                    { spanish: 'tienes', english: 'you have', irregular: true },
                    { spanish: 'tiene', english: 's/he has', irregular: true },
                    { spanish: 'tenemos', english: 'we have' },
                    { spanish: 'tienen', english: 'they have', irregular: true },
                ],
            },
            {
                description: 'The Indicative Preterite of tener is used to talk about actions completed in the past, at a specific point in time.',
                example: { spanish: 'tuve un gato gris', english: 'I had a grey cat' },
                forms: [
                    { spanish: 'tuve', english: 'I had', irregular: true },
                    { spanish: 'tuviste', english: 'you had', irregular: true },
                    { spanish: 'tuvo', english: 's/he had', irregular: true },
                    { spanish: 'tuvimos', english: 'we had', irregular: true },
                    { spanish: 'tuvieron', english: 'they had', irregular: true },
                ],
            },
            {
                description: 'The Indicative Imperfect of tener is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
                example: { spanish: 'tenía un gato gris', english: 'I used to have a grey cat' },
                forms: [
                    { spanish: 'tenía', english: 'I used to have' },
                    { spanish: 'tenías', english: 'you used to have' },
                    { spanish: 'tenía', english: 's/he used to have' },
                    { spanish: 'teníamos', english: 'we used to have' },
                    { spanish: 'tenían', english: 'they used to have' },
                ],
            },
        ],
    },
    {
        infinitive: 'ir',
        translation: 'to go',
        summary: 'Ir is the Spanish verb "to go", and is one of the most common irregular verbs in Spanish. It is used in various contexts like "I go to school", "you went to Mexico on holiday", "we are going to the concert on Saturday".',
        infinitiveForms: [
            { spanish: 'ir', english: 'to go' },
            { spanish: 'ido', english: 'gone' },
            { spanish: 'yendo', english: 'going' },
        ],
        tenses: [
            {
                description: 'The Indicative Present of ir is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.',
                example: { spanish: 'voy al supermercado todos los sábados', english: 'I go to the supermarket every Saturday' },
                forms: [
                    { spanish: 'voy', english: 'I go', irregular: true },
                    { spanish: 'vas', english: 'you go', irregular: true },
                    { spanish: 'va', english: 's/he goes', irregular: true },
                    { spanish: 'vamos', english: 'we go', irregular: true },
                    { spanish: 'van', english: 'they go', irregular: true },
                ],
            },
            {
                description: 'The Indicative Preterite of ir is used to talk about actions completed in the past, at a specific point in time.',
                example: { spanish: 'fui al supermercado todos los sábados', english: 'I went to the supermarket every Saturday' },
                forms: [
                    { spanish: 'fui', english: 'I went', irregular: true },
                    { spanish: 'fuiste', english: 'you went', irregular: true },
                    { spanish: 'fue', english: 's/he went', irregular: true },
                    { spanish: 'fuimos', english: 'we went', irregular: true },
                    { spanish: 'fueron', english: 'they went', irregular: true },
                ],
            },
            {
                description: 'The Indicative Imperfect of ir is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
                example: { spanish: 'iba al supermercado todos los sábados', english: 'I used to go to the supermarket every Saturday' },
                forms: [
                    { spanish: 'iba', english: 'I used to go', irregular: true },
                    { spanish: 'ibas', english: 'you used to go', irregular: true },
                    { spanish: 'iba', english: 's/he used to go', irregular: true },
                    { spanish: 'íbamos', english: 'we used to go', irregular: true },
                    { spanish: 'iban', english: 'they used to go', irregular: true },
                ],
            },
        ],
    },
    {
        infinitive: 'hacer',
        translation: 'to do, to make',
        summary: 'Hacer is the Spanish verb meaning "to do / to make". It is extremely versatile, and one common use is to express the weather or time. In this sense, it is different from English, whereby we would use "to be". For example: "hace frío" is how to say "it is cold", which directly translates to "it makes cold".',
        infinitiveForms: [
            { spanish: 'hacer', english: 'to do, to make' },
            { spanish: 'hecho', english: 'done' },
            { spanish: 'haciendo', english: 'doing' },
        ],
        tenses: [
            {
                description: 'The Indicative Present of hacer is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.',
                example: { spanish: 'hago los deberes después de cenar', english: 'I do my homework after dinner' },
                forms: [
                    { spanish: 'hago', english: 'I do', irregular: true },
                    { spanish: 'haces', english: 'you do', irregular: true },
                    { spanish: 'hace', english: 's/he does', irregular: true },
                    { spanish: 'hacemos', english: 'we do' },
                    { spanish: 'hacen', english: 'they do', irregular: true },
                ],
            },
            {
                description: 'The Indicative Preterite of hacer is used to talk about actions completed in the past, at a specific point in time.',
                example: { spanish: 'hice los deberes después de cenar', english: 'I did my homework after dinner' },
                forms: [
                    { spanish: 'hice', english: 'I did', irregular: true },
                    { spanish: 'hiciste', english: 'you did', irregular: true },
                    { spanish: 'hizo', english: 's/he did', irregular: true },
                    { spanish: 'hicimos', english: 'we did', irregular: true },
                    { spanish: 'hicieron', english: 'they did', irregular: true },
                ],
            },
            {
                description: 'The Indicative Imperfect of hacer is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
                example: { spanish: 'hacía los deberes después de cenar', english: 'I used to do my homework after dinner' },
                forms: [
                    { spanish: 'hacía', english: 'I used to do' },
                    { spanish: 'hacías', english: 'you used to do' },
                    { spanish: 'hacía', english: 's/he used to do' },
                    { spanish: 'hacíamos', english: 'we used to do' },
                    { spanish: 'hacían', english: 'they used to do' },
                ],
            },
        ],
    },
    {
        infinitive: 'haber',
        translation: 'to have (helper verb)',
        summary: 'Haber is the Spanish verb meaning "to have". It is a very unique verb in that it is used in compound tenses as an auxiliary, meaning that is comes before the main verb in the sentence and is used to set the main verbs\' tense or mood. For example: He estado (I have been), hemos comido (we have eaten). It is also very commonly used as an impersonal verb, to say "there is / there are". For example: Hay mucho chocolate en el armario. (There is a lot of chocolate in the press).',
        infinitiveForms: [
            { spanish: 'haber', english: 'to have (helper verb)' },
            { spanish: 'habido', english: 'had' },
            { spanish: 'habiendo', english: 'having' },
        ],
        tenses: [
            {
                description: 'As an auxiliary verb, haber in the indicative present is used to form the "indicative present perfect" tense.',
                example: { spanish: 'he escrito la carta', english: 'I have written the letter' },
                forms: [
                    { spanish: 'he', english: 'I have', irregular: true },
                    { spanish: 'has', english: 'you have', irregular: true },
                    { spanish: 'ha', english: 's/he has', irregular: true },
                    { spanish: 'hemos', english: 'we have', irregular: true },
                    { spanish: 'han', english: 'they have', irregular: true },
                ],
            },
            {
                description: 'Because haber is an auxiliary verb used to form compound conjugations, it is rarely used alone in this tense — except in the impersonal form, meaning "there was / there were".',
                example: { spanish: 'hubo una fiesta anoche', english: 'there was a party last night' },
                forms: [
                    { spanish: 'hube', english: 'I had', irregular: true },
                    { spanish: 'hubiste', english: 'you had', irregular: true },
                    { spanish: 'hubo', english: 's/he had', irregular: true },
                    { spanish: 'hubimos', english: 'we had', irregular: true },
                    { spanish: 'hubieron', english: 'they had', irregular: true },
                ],
            },
            {
                description: 'As an auxiliary verb, haber in the indicative imperfect is used to form the "indicative past perfect" tense.',
                example: { spanish: 'había escrito la carta', english: 'I had written the letter' },
                forms: [
                    { spanish: 'había', english: 'I had' },
                    { spanish: 'habías', english: 'you had' },
                    { spanish: 'había', english: 's/he had' },
                    { spanish: 'habíamos', english: 'we had' },
                    { spanish: 'habían', english: 'they had' },
                ],
            },
        ],
    },
    {
        infinitive: 'ver',
        translation: 'to see, to watch',
        summary: 'Ver is the Spanish verb "to see". It is mostly irregular, so endings must be learned by heart. Ver can be used for a number of reasons, the most basic "to see", for example: "Veo un coche". It can also be used to describe "watching" a movie or tv show, asking a person if they have "seen" a particular movie or object, or to notice something.',
        infinitiveForms: [
            { spanish: 'ver', english: 'to see, to watch' },
            { spanish: 'visto', english: 'seen' },
            { spanish: 'viendo', english: 'seeing' },
        ],
        tenses: [
            {
                description: 'The Indicative Present of ver is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.',
                example: { spanish: 'veo fantasmas', english: 'I see ghosts' },
                forms: [
                    { spanish: 'veo', english: 'I see', irregular: true },
                    { spanish: 'ves', english: 'you see', irregular: true },
                    { spanish: 've', english: 's/he sees', irregular: true },
                    { spanish: 'vemos', english: 'we see' },
                    { spanish: 'ven', english: 'they see', irregular: true },
                ],
            },
            {
                description: 'The Indicative Preterite of ver is used to talk about actions completed in the past, at a specific point in time.',
                example: { spanish: 'vi fantasmas', english: 'I saw ghosts' },
                forms: [
                    { spanish: 'vi', english: 'I saw', irregular: true },
                    { spanish: 'viste', english: 'you saw', irregular: true },
                    { spanish: 'vio', english: 's/he saw', irregular: true },
                    { spanish: 'vimos', english: 'we saw', irregular: true },
                    { spanish: 'vieron', english: 'they saw', irregular: true },
                ],
            },
            {
                description: 'The Indicative Imperfect of ver is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
                example: { spanish: 'veía fantasmas', english: 'I used to see ghosts' },
                forms: [
                    { spanish: 'veía', english: 'I used to see', irregular: true },
                    { spanish: 'veías', english: 'you used to see', irregular: true },
                    { spanish: 'veía', english: 's/he used to see', irregular: true },
                    { spanish: 'veíamos', english: 'we used to see', irregular: true },
                    { spanish: 'veían', english: 'they used to see', irregular: true },
                ],
            },
        ],
    },
    {
        infinitive: 'venir',
        translation: 'to come',
        summary: 'Venir is the Spanish verb meaning "to come". Similar verbs to venir include: llegar (to arrive).',
        infinitiveForms: [
            { spanish: 'venir', english: 'to come' },
            { spanish: 'venido', english: 'come' },
            { spanish: 'viniendo', english: 'coming' },
        ],
        tenses: [
            {
                description: 'The Indicative Present of venir is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.',
                example: { spanish: 'vengo a casa', english: 'I come home' },
                forms: [
                    { spanish: 'vengo', english: 'I come', irregular: true },
                    { spanish: 'vienes', english: 'you come', irregular: true },
                    { spanish: 'viene', english: 's/he comes', irregular: true },
                    { spanish: 'venimos', english: 'we come' },
                    { spanish: 'vienen', english: 'they come', irregular: true },
                ],
            },
            {
                description: 'The Indicative Preterite of venir is used to talk about actions completed in the past, at a specific point in time.',
                example: { spanish: 'vine a casa', english: 'I came home' },
                forms: [
                    { spanish: 'vine', english: 'I came', irregular: true },
                    { spanish: 'viniste', english: 'you came', irregular: true },
                    { spanish: 'vino', english: 's/he came', irregular: true },
                    { spanish: 'vinimos', english: 'we came', irregular: true },
                    { spanish: 'vinieron', english: 'they came', irregular: true },
                ],
            },
            {
                description: 'The Indicative Imperfect of venir is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
                example: { spanish: 'venía a casa', english: 'I used to come home' },
                forms: [
                    { spanish: 'venía', english: 'I used to come' },
                    { spanish: 'venías', english: 'you used to come' },
                    { spanish: 'venía', english: 's/he used to come' },
                    { spanish: 'veníamos', english: 'we used to come' },
                    { spanish: 'venían', english: 'they used to come' },
                ],
            },
        ],
    },
    {
        infinitive: 'vivir',
        translation: 'to live',
        summary: 'Vivir is the Spanish verb for "to live". It is a regular IR verb, and one of the most popular 100 Spanish verbs.',
        infinitiveForms: [
            { spanish: 'vivir', english: 'to live' },
            { spanish: 'vivido', english: 'lived' },
            { spanish: 'viviendo', english: 'living' },
        ],
        tenses: [
            {
                description: 'The Indicative Present of vivir is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.',
                example: { spanish: 'vivo cerca de mi hermana', english: 'I live close to my sister' },
                forms: [
                    { spanish: 'vivo', english: 'I live' },
                    { spanish: 'vives', english: 'you live' },
                    { spanish: 'vive', english: 's/he lives' },
                    { spanish: 'vivimos', english: 'we live' },
                    { spanish: 'viven', english: 'they live' },
                ],
            },
            {
                description: 'The Indicative Preterite of vivir is used to talk about actions completed in the past, at a specific point in time.',
                example: { spanish: 'viví cerca de mi hermana', english: 'I lived close to my sister' },
                forms: [
                    { spanish: 'viví', english: 'I lived' },
                    { spanish: 'viviste', english: 'you lived' },
                    { spanish: 'vivió', english: 's/he lived' },
                    { spanish: 'vivimos', english: 'we lived' },
                    { spanish: 'vivieron', english: 'they lived' },
                ],
            },
            {
                description: 'The Indicative Imperfect of vivir is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
                example: { spanish: 'vivía cerca de mi hermana', english: 'I used to live close to my sister' },
                forms: [
                    { spanish: 'vivía', english: 'I used to live' },
                    { spanish: 'vivías', english: 'you used to live' },
                    { spanish: 'vivía', english: 's/he used to live' },
                    { spanish: 'vivíamos', english: 'we used to live' },
                    { spanish: 'vivían', english: 'they used to live' },
                ],
            },
        ],
    },
    {
        infinitive: 'poder',
        translation: 'to be able to / can',
        summary: 'Poder is the Spanish verb meaning "to be able to / to can". This verb can be used to ask for permission, e.g. ¿Podría usar el baño?, or to express tolerance for something "No puedo más", meaning "I can\'t do any more". In its purist form, it is used to express capability to do something. For example: "Mi hermano puede nadar 1 kilómetro sin parar" - "My brother can swim 1km without stopping".',
        infinitiveForms: [
            { spanish: 'poder', english: 'to be able to / can' },
            { spanish: 'podido', english: 'been able to' },
            { spanish: 'pudiendo', english: 'being able to' },
        ],
        tenses: [
            {
                description: 'The Indicative Present of poder is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.',
                example: { spanish: 'puedo hablar español', english: 'I am able to speak Spanish' },
                forms: [
                    { spanish: 'puedo', english: 'I am able to', irregular: true },
                    { spanish: 'puedes', english: 'you are able to', irregular: true },
                    { spanish: 'puede', english: 's/he is able to', irregular: true },
                    { spanish: 'podemos', english: 'we are able to' },
                    { spanish: 'pueden', english: 'they are able to', irregular: true },
                ],
            },
            {
                description: 'The Indicative Preterite of poder is used to talk about actions completed in the past, at a specific point in time.',
                example: { spanish: 'pude hablar español', english: 'I was able to speak Spanish' },
                forms: [
                    { spanish: 'pude', english: 'I was able to', irregular: true },
                    { spanish: 'pudiste', english: 'you were able to', irregular: true },
                    { spanish: 'pudo', english: 's/he was able to', irregular: true },
                    { spanish: 'pudimos', english: 'we were able to', irregular: true },
                    { spanish: 'pudieron', english: 'they were able to', irregular: true },
                ],
            },
            {
                description: 'The Indicative Imperfect of poder is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
                example: { spanish: 'podía hablar español', english: 'I used to be able to speak Spanish' },
                forms: [
                    { spanish: 'podía', english: 'I used to be able to' },
                    { spanish: 'podías', english: 'you used to be able to' },
                    { spanish: 'podía', english: 's/he used to be able to' },
                    { spanish: 'podíamos', english: 'we used to be able to' },
                    { spanish: 'podían', english: 'they used to be able to' },
                ],
            },
        ],
    },
    {
        infinitive: 'saber',
        translation: 'to know (things)',
        summary: 'Saber is the Spanish verb meaning "to know" (things). It is mostly used to portray knowledge - for example: "I speak Spanish" and "I know all the capital cities in Europe". It can also be used to express taste; for example: "The cake tastes like chocolate and orange". Saber is not to be confused with Conocer, also meaning "to know" but used in different situations.',
        infinitiveForms: [
            { spanish: 'saber', english: 'to know (things)' },
            { spanish: 'sabido', english: 'known' },
            { spanish: 'sabiendo', english: 'knowing' },
        ],
        tenses: [
            {
                description: 'The Indicative Present of saber is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.',
                example: { spanish: 'sé español', english: 'I know Spanish' },
                forms: [
                    { spanish: 'sé', english: 'I know', irregular: true },
                    { spanish: 'sabes', english: 'you know' },
                    { spanish: 'sabe', english: 's/he knows' },
                    { spanish: 'sabemos', english: 'we know' },
                    { spanish: 'saben', english: 'they know' },
                ],
            },
            {
                description: 'The Indicative Preterite of saber is used to talk about actions completed in the past, at a specific point in time.',
                example: { spanish: 'supe español', english: 'I knew Spanish' },
                forms: [
                    { spanish: 'supe', english: 'I knew', irregular: true },
                    { spanish: 'supiste', english: 'you knew', irregular: true },
                    { spanish: 'supo', english: 's/he knew', irregular: true },
                    { spanish: 'supimos', english: 'we knew', irregular: true },
                    { spanish: 'supieron', english: 'they knew', irregular: true },
                ],
            },
            {
                description: 'The Indicative Imperfect of saber is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
                example: { spanish: 'sabía español', english: 'I used to know Spanish' },
                forms: [
                    { spanish: 'sabía', english: 'I used to know' },
                    { spanish: 'sabías', english: 'you used to know' },
                    { spanish: 'sabía', english: 's/he used to know' },
                    { spanish: 'sabíamos', english: 'we used to know' },
                    { spanish: 'sabían', english: 'they used to know' },
                ],
            },
        ],
    },
    {
        infinitive: 'decir',
        translation: 'to say, to tell',
        summary: 'Decir is the Spanish verb meaning "to say / to tell". For example: "What did you say?" or "I swear to tell the truth". In Spain, it is used when answering the phone - you will hear "¿Diga?" meaning "hello" or "¡Digame!", literally translating to "tell me". It can also be used to express rumours and opinions - "they say it\'s going to rain all next week" and "What do you say, will we go on holidays in June?"',
        infinitiveForms: [
            { spanish: 'decir', english: 'to say, to tell' },
            { spanish: 'dicho', english: 'said' },
            { spanish: 'diciendo', english: 'saying' },
        ],
        tenses: [
            {
                description: 'The Indicative Present of decir is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.',
                example: { spanish: 'digo hola al profesor', english: 'I say hello to the teacher' },
                forms: [
                    { spanish: 'digo', english: 'I say', irregular: true },
                    { spanish: 'dices', english: 'you say', irregular: true },
                    { spanish: 'dice', english: 's/he says', irregular: true },
                    { spanish: 'decimos', english: 'we say' },
                    { spanish: 'dicen', english: 'they say', irregular: true },
                ],
            },
            {
                description: 'The Indicative Preterite of decir is used to talk about actions completed in the past, at a specific point in time.',
                example: { spanish: 'dije hola al profesor', english: 'I said hello to the teacher' },
                forms: [
                    { spanish: 'dije', english: 'I said', irregular: true },
                    { spanish: 'dijiste', english: 'you said', irregular: true },
                    { spanish: 'dijo', english: 's/he said', irregular: true },
                    { spanish: 'dijimos', english: 'we said', irregular: true },
                    { spanish: 'dijeron', english: 'they said', irregular: true },
                ],
            },
            {
                description: 'The Indicative Imperfect of decir is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
                example: { spanish: 'decía hola al profesor', english: 'I used to say hello to the teacher' },
                forms: [
                    { spanish: 'decía', english: 'I used to say' },
                    { spanish: 'decías', english: 'you used to say' },
                    { spanish: 'decía', english: 's/he used to say' },
                    { spanish: 'decíamos', english: 'we used to say' },
                    { spanish: 'decían', english: 'they used to say' },
                ],
            },
        ],
    },
    {
        infinitive: 'dar',
        translation: 'to give',
        summary: 'Dar is the Spanish verb "to give". It is a very versatile verb, with many meanings and uses. For example: "Dame las llaves" - "Give me the keys", "dar las gracias" - "to give thanks", to express fear "Me da miedo" - "It scares me" as well as to perform an action "dar un paseo" - "to go for a walk".',
        infinitiveForms: [
            { spanish: 'dar', english: 'to give' },
            { spanish: 'dado', english: 'given' },
            { spanish: 'dando', english: 'giving' },
        ],
        tenses: [
            {
                description: 'The Indicative Present of dar is used to talk about situations, events or thoughts that are happening now or in the near future.',
                example: { spanish: 'doy regalos a mis hermanos', english: 'I give presents to my siblings' },
                forms: [
                    { spanish: 'doy', english: 'I give', irregular: true },
                    { spanish: 'das', english: 'you give', irregular: true },
                    { spanish: 'da', english: 's/he gives', irregular: true },
                    { spanish: 'damos', english: 'we give' },
                    { spanish: 'dan', english: 'they give', irregular: true },
                ],
            },
            {
                description: 'The Indicative Preterite of dar is used to talk about actions completed in the past, at a specific point in time.',
                example: { spanish: 'di regalos a mis hermanos', english: 'I gave presents to my siblings' },
                forms: [
                    { spanish: 'di', english: 'I gave', irregular: true },
                    { spanish: 'diste', english: 'you gave', irregular: true },
                    { spanish: 'dio', english: 's/he gave', irregular: true },
                    { spanish: 'dimos', english: 'we gave', irregular: true },
                    { spanish: 'dieron', english: 'they gave', irregular: true },
                ],
            },
            {
                description: 'The Indicative Imperfect of dar is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.',
                example: { spanish: 'daba regalos a mis hermanos', english: 'I used to give presents to my siblings' },
                forms: [
                    { spanish: 'daba', english: 'I used to give' },
                    { spanish: 'dabas', english: 'you used to give' },
                    { spanish: 'daba', english: 's/he used to give' },
                    { spanish: 'dábamos', english: 'we used to give' },
                    { spanish: 'daban', english: 'they used to give' },
                ],
            },
        ],
    },
]

type SimpleForm = [spanish: string, english: string, irregular?: boolean]

function buildTense(forms: SimpleForm[]): VerbTense {
    return {
        forms: forms.map(([spanish, english, irregular]) => (
            irregular ? { spanish, english, irregular: true } : { spanish, english }
        )),
    }
}

function simpleVerb(
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

const BULK_VERBS: VerbEntry[] = [
    simpleVerb('llegar', 'to arrive', [
        ['llegar', 'to arrive'], ['llegado', 'arrived'], ['llegando', 'arriving'],
    ], [
        ['llego', 'I arrive'], ['llegas', 'you arrive'], ['llega', 's/he arrives'],
        ['llegamos', 'we arrive'], ['llegan', 'they arrive'],
    ], [
        ['llegué', 'I arrived', true], ['llegaste', 'you arrived'], ['llegó', 's/he arrived'],
        ['llegamos', 'we arrived'], ['llegaron', 'they arrived'],
    ], [
        ['llegaba', 'I used to arrive'], ['llegabas', 'you used to arrive'], ['llegaba', 's/he used to arrive'],
        ['llegábamos', 'we used to arrive'], ['llegaban', 'they used to arrive'],
    ]),
    simpleVerb('llevar', 'to carry, to take, to wear', [
        ['llevar', 'to carry'], ['llevado', 'carried'], ['llevando', 'carrying'],
    ], [
        ['llevo', 'I carry'], ['llevas', 'you carry'], ['lleva', 's/he carries'],
        ['llevamos', 'we carry'], ['llevan', 'they carry'],
    ], [
        ['llevé', 'I carried'], ['llevaste', 'you carried'], ['llevó', 's/he carried'],
        ['llevamos', 'we carried'], ['llevaron', 'they carried'],
    ], [
        ['llevaba', 'I used to carry'], ['llevabas', 'you used to carry'], ['llevaba', 's/he used to carry'],
        ['llevábamos', 'we used to carry'], ['llevaban', 'they used to carry'],
    ]),
    simpleVerb('llamar', 'to call', [
        ['llamar', 'to call'], ['llamado', 'called'], ['llamando', 'calling'],
    ], [
        ['llamo', 'I call'], ['llamas', 'you call'], ['llama', 's/he calls'],
        ['llamamos', 'we call'], ['llaman', 'they call'],
    ], [
        ['llamé', 'I called'], ['llamaste', 'you called'], ['llamó', 's/he called'],
        ['llamamos', 'we called'], ['llamaron', 'they called'],
    ], [
        ['llamaba', 'I used to call'], ['llamabas', 'you used to call'], ['llamaba', 's/he used to call'],
        ['llamábamos', 'we used to call'], ['llamaban', 'they used to call'],
    ]),
    simpleVerb('ponerse', 'to put on', [
        ['ponerse', 'to put on'], ['puesto', 'put on'], ['poniendo', 'putting on'],
    ], [
        ['me pongo', 'I put on', true], ['te pones', 'you put on'], ['se pone', 's/he puts on'],
        ['nos ponemos', 'we put on'], ['se ponen', 'they put on'],
    ], [
        ['me puse', 'I put on', true], ['te pusiste', 'you put on'], ['se puso', 's/he put on'],
        ['nos pusimos', 'we put on'], ['se pusieron', 'they put on'],
    ], [
        ['me ponía', 'I used to put on'], ['te ponías', 'you used to put on'], ['se ponía', 's/he used to put on'],
        ['nos poníamos', 'we used to put on'], ['se ponían', 'they used to put on'],
    ]),
    simpleVerb('perder', 'to lose', [
        ['perder', 'to lose'], ['perdido', 'lost'], ['perdiendo', 'losing'],
    ], [
        ['pierdo', 'I lose', true], ['pierdes', 'you lose', true], ['pierde', 's/he loses', true],
        ['perdemos', 'we lose'], ['pierden', 'they lose', true],
    ], [
        ['perdí', 'I lost'], ['perdiste', 'you lost'], ['perdió', 's/he lost'],
        ['perdimos', 'we lost'], ['perdieron', 'they lost'],
    ], [
        ['perdía', 'I used to lose'], ['perdías', 'you used to lose'], ['perdía', 's/he used to lose'],
        ['perdíamos', 'we used to lose'], ['perdían', 'they used to lose'],
    ]),
    simpleVerb('probar', 'to try, to taste, to test', [
        ['probar', 'to try'], ['probado', 'tried'], ['probando', 'trying'],
    ], [
        ['pruebo', 'I try', true], ['pruebas', 'you try', true], ['prueba', 's/he tries', true],
        ['probamos', 'we try'], ['prueban', 'they try', true],
    ], [
        ['probé', 'I tried'], ['probaste', 'you tried'], ['probó', 's/he tried'],
        ['probamos', 'we tried'], ['probaron', 'they tried'],
    ], [
        ['probaba', 'I used to try'], ['probabas', 'you used to try'], ['probaba', 's/he used to try'],
        ['probábamos', 'we used to try'], ['probaban', 'they used to try'],
    ]),
    simpleVerb('conocer', 'to know (people, places)', [
        ['conocer', 'to know'], ['conocido', 'known'], ['conociendo', 'knowing'],
    ], [
        ['conozco', 'I know', true], ['conoces', 'you know'], ['conoce', 's/he knows'],
        ['conocemos', 'we know'], ['conocen', 'they know'],
    ], [
        ['conocí', 'I knew'], ['conociste', 'you knew'], ['conoció', 's/he knew'],
        ['conocimos', 'we knew'], ['conocieron', 'they knew'],
    ], [
        ['conocía', 'I used to know'], ['conocías', 'you used to know'], ['conocía', 's/he used to know'],
        ['conocíamos', 'we used to know'], ['conocían', 'they used to know'],
    ]),
    simpleVerb('sentirse', 'to feel', [
        ['sentirse', 'to feel'], ['sentido', 'felt'], ['sintiendo', 'feeling'],
    ], [
        ['me siento', 'I feel', true], ['te sientes', 'you feel', true], ['se siente', 's/he feels', true],
        ['nos sentimos', 'we feel'], ['se sienten', 'they feel', true],
    ], [
        ['me sentí', 'I felt', true], ['te sentiste', 'you felt', true], ['se sintió', 's/he felt', true],
        ['nos sentimos', 'we felt'], ['se sintieron', 'they felt', true],
    ], [
        ['me sentía', 'I used to feel'], ['te sentías', 'you used to feel'], ['se sentía', 's/he used to feel'],
        ['nos sentíamos', 'we used to feel'], ['se sentían', 'they used to feel'],
    ]),
    simpleVerb('sentarse', 'to sit (oneself)', [
        ['sentarse', 'to sit'], ['sentado', 'sat'], ['sentando', 'sitting'],
    ], [
        ['me siento', 'I sit', true], ['te sientas', 'you sit', true], ['se sienta', 's/he sits', true],
        ['nos sentamos', 'we sit'], ['se sientan', 'they sit', true],
    ], [
        ['me senté', 'I sat'], ['te sentaste', 'you sat'], ['se sentó', 's/he sat'],
        ['nos sentamos', 'we sat'], ['se sentaron', 'they sat'],
    ], [
        ['me sentaba', 'I used to sit'], ['te sentabas', 'you used to sit'], ['se sentaba', 's/he used to sit'],
        ['nos sentábamos', 'we used to sit'], ['se sentaban', 'they used to sit'],
    ]),
    simpleVerb('encantar', 'to love, to enchant', [
        ['encantar', 'to love, to enchant'], ['encantado', 'loved'], ['encantando', 'loving'],
    ], [
        ['me encanta / me encantan', 'I love'], ['te encanta / te encantan', 'you love'], ['le encanta / le encantan', 's/he loves'],
        ['nos encanta / nos encantan', 'we love'], ['les encanta / les encantan', 'they love'],
    ], [
        ['me encantó / me encantaron', 'I loved'], ['te encantó / te encantaron', 'you loved'], ['le encantó / le encantaron', 's/he loved'],
        ['nos encantó / nos encantaron', 'we loved'], ['les encantó / les encantaron', 'they loved'],
    ], [
        ['me encantaba / me encantaban', 'I used to love'], ['te encantaba / te encantaban', 'you used to love'], ['le encantaba / le encantaban', 's/he used to love'],
        ['nos encantaba / nos encantaban', 'we used to love'], ['les encantaba / les encantaban', 'they used to love'],
    ]),
    simpleVerb('gustar', 'to like, to be pleasing to', [
        ['gustar', 'to like'], ['gustado', 'liked'], ['gustando', 'liking'],
    ], [
        ['me gusta / me gustan', 'I like'], ['te gusta / te gustan', 'you like'], ['le gusta / le gustan', 's/he likes'],
        ['nos gusta / nos gustan', 'we like'], ['les gusta / les gustan', 'they like'],
    ], [
        ['me gustó / me gustaron', 'I liked'], ['te gustó / te gustaron', 'you liked'], ['le gustó / le gustaron', 's/he liked'],
        ['nos gustó / nos gustaron', 'we liked'], ['les gustó / les gustaron', 'they liked'],
    ], [
        ['me gustaba / me gustaban', 'I used to like'], ['te gustaba / te gustaban', 'you used to like'], ['le gustaba / le gustaban', 's/he used to like'],
        ['nos gustaba / nos gustaban', 'we used to like'], ['les gustaba / les gustaban', 'they used to like'],
    ]),
    simpleVerb('amar', 'to love', [
        ['amar', 'to love'], ['amado', 'loved'], ['amando', 'loving'],
    ], [
        ['amo', 'I love'], ['amas', 'you love'], ['ama', 's/he loves'],
        ['amamos', 'we love'], ['aman', 'they love'],
    ], [
        ['amé', 'I loved'], ['amaste', 'you loved'], ['amó', 's/he loved'],
        ['amamos', 'we loved'], ['amaron', 'they loved'],
    ], [
        ['amaba', 'I used to love'], ['amabas', 'you used to love'], ['amaba', 's/he used to love'],
        ['amábamos', 'we used to love'], ['amaban', 'they used to love'],
    ]),
    simpleVerb('acordarse', 'to remember', [
        ['acordarse', 'to remember'], ['acordado', 'remembered'], ['acordando', 'remembering'],
    ], [
        ['me acuerdo', 'I remember', true], ['te acuerdas', 'you remember', true], ['se acuerda', 's/he remembers', true],
        ['nos acordamos', 'we remember'], ['se acuerdan', 'they remember', true],
    ], [
        ['me acordé', 'I remembered'], ['te acordaste', 'you remembered'], ['se acordó', 's/he remembered'],
        ['nos acordamos', 'we remembered'], ['se acordaron', 'they remembered'],
    ], [
        ['me acordaba', 'I used to remember'], ['te acordabas', 'you used to remember'], ['se acordaba', 's/he used to remember'],
        ['nos acordábamos', 'we used to remember'], ['se acordaban', 'they used to remember'],
    ]),
    simpleVerb('acostarse', 'to go to bed, to lie down', [
        ['acostarse', 'to go to bed'], ['acostado', 'gone to bed'], ['acostando', 'going to bed'],
    ], [
        ['me acuesto', 'I go to bed', true], ['te acuestas', 'you go to bed', true], ['se acuesta', 's/he goes to bed', true],
        ['nos acostamos', 'we go to bed'], ['se acuestan', 'they go to bed', true],
    ], [
        ['me acosté', 'I went to bed'], ['te acostaste', 'you went to bed'], ['se acostó', 's/he went to bed'],
        ['nos acostamos', 'we went to bed'], ['se acostaron', 'they went to bed'],
    ], [
        ['me acostaba', 'I used to go to bed'], ['te acostabas', 'you used to go to bed'], ['se acostaba', 's/he used to go to bed'],
        ['nos acostábamos', 'we used to go to bed'], ['se acostaban', 'they used to go to bed'],
    ]),
    simpleVerb('volver', 'to return', [
        ['volver', 'to return'], ['vuelto', 'returned'], ['volviendo', 'returning'],
    ], [
        ['vuelvo', 'I return', true], ['vuelves', 'you return', true], ['vuelve', 's/he returns', true],
        ['volvemos', 'we return'], ['vuelven', 'they return', true],
    ], [
        ['volví', 'I returned'], ['volviste', 'you returned'], ['volvió', 's/he returned'],
        ['volvimos', 'we returned'], ['volvieron', 'they returned'],
    ], [
        ['volvía', 'I used to return'], ['volvías', 'you used to return'], ['volvía', 's/he used to return'],
        ['volvíamos', 'we used to return'], ['volvían', 'they used to return'],
    ]),
    simpleVerb('empezar', 'to start, to begin', [
        ['empezar', 'to start'], ['empezado', 'started'], ['empezando', 'starting'],
    ], [
        ['empiezo', 'I start', true], ['empiezas', 'you start', true], ['empieza', 's/he starts', true],
        ['empezamos', 'we start'], ['empiezan', 'they start', true],
    ], [
        ['empecé', 'I started', true], ['empezaste', 'you started'], ['empezó', 's/he started'],
        ['empezamos', 'we started'], ['empezaron', 'they started'],
    ], [
        ['empezaba', 'I used to start'], ['empezabas', 'you used to start'], ['empezaba', 's/he used to start'],
        ['empezábamos', 'we used to start'], ['empezaban', 'they used to start'],
    ]),
    simpleVerb('comenzar', 'to start, to commence', [
        ['comenzar', 'to start'], ['comenzado', 'started'], ['comenzando', 'starting'],
    ], [
        ['comienzo', 'I start', true], ['comienzas', 'you start', true], ['comienza', 's/he starts', true],
        ['comenzamos', 'we start'], ['comienzan', 'they start', true],
    ], [
        ['comencé', 'I started', true], ['comenzaste', 'you started'], ['comenzó', 's/he started'],
        ['comenzamos', 'we started'], ['comenzaron', 'they started'],
    ], [
        ['comenzaba', 'I used to start'], ['comenzabas', 'you used to start'], ['comenzaba', 's/he used to start'],
        ['comenzábamos', 'we used to start'], ['comenzaban', 'they used to start'],
    ]),
    simpleVerb('aprender', 'to learn', [
        ['aprender', 'to learn'], ['aprendido', 'learnt'], ['aprendiendo', 'learning'],
    ], [
        ['aprendo', 'I learn'], ['aprendes', 'you learn'], ['aprende', 's/he learns'],
        ['aprendemos', 'we learn'], ['aprenden', 'they learn'],
    ], [
        ['aprendí', 'I learnt'], ['aprendiste', 'you learnt'], ['aprendió', 's/he learnt'],
        ['aprendimos', 'we learnt'], ['aprendieron', 'they learnt'],
    ], [
        ['aprendía', 'I used to learn'], ['aprendías', 'you used to learn'], ['aprendía', 's/he used to learn'],
        ['aprendíamos', 'we used to learn'], ['aprendían', 'they used to learn'],
    ]),
    simpleVerb('enseñar', 'to teach, to show', [
        ['enseñar', 'to teach'], ['enseñado', 'taught'], ['enseñando', 'teaching'],
    ], [
        ['enseño', 'I teach'], ['enseñas', 'you teach'], ['enseña', 's/he teaches'],
        ['enseñamos', 'we teach'], ['enseñan', 'they teach'],
    ], [
        ['enseñé', 'I taught'], ['enseñaste', 'you taught'], ['enseñó', 's/he taught'],
        ['enseñamos', 'we taught'], ['enseñaron', 'they taught'],
    ], [
        ['enseñaba', 'I used to teach'], ['enseñabas', 'you used to teach'], ['enseñaba', 's/he used to teach'],
        ['enseñábamos', 'we used to teach'], ['enseñaban', 'they used to teach'],
    ]),
    simpleVerb('invitar', 'to invite', [
        ['invitar', 'to invite'], ['invitado', 'invited'], ['invitando', 'inviting'],
    ], [
        ['invito', 'I invite'], ['invitas', 'you invite'], ['invita', 's/he invites'],
        ['invitamos', 'we invite'], ['invitan', 'they invite'],
    ], [
        ['invité', 'I invited'], ['invitaste', 'you invited'], ['invitó', 's/he invited'],
        ['invitamos', 'we invited'], ['invitaron', 'they invited'],
    ], [
        ['invitaba', 'I used to invite'], ['invitabas', 'you used to invite'], ['invitaba', 's/he used to invite'],
        ['invitábamos', 'we used to invite'], ['invitaban', 'they used to invite'],
    ]),
    simpleVerb('salir', 'to leave, to go out', [
        ['salir', 'to leave, to go out'], ['salido', 'left'], ['saliendo', 'leaving'],
    ], [
        ['salgo', 'I leave', true], ['sales', 'you leave'], ['sale', 's/he leaves'],
        ['salimos', 'we leave'], ['salen', 'they leave'],
    ], [
        ['salí', 'I left'], ['saliste', 'you left'], ['salió', 's/he left'],
        ['salimos', 'we left'], ['salieron', 'they left'],
    ], [
        ['salía', 'I used to leave'], ['salías', 'you used to leave'], ['salía', 's/he used to leave'],
        ['salíamos', 'we used to leave'], ['salían', 'they used to leave'],
    ]),
    simpleVerb('quedarse', 'to stay', [
        ['quedarse', 'to stay'], ['quedado', 'stayed'], ['quedando', 'staying'],
    ], [
        ['me quedo', 'I stay'], ['te quedas', 'you stay'], ['se queda', 's/he stays'],
        ['nos quedamos', 'we stay'], ['se quedan', 'they stay'],
    ], [
        ['me quedé', 'I stayed'], ['te quedaste', 'you stayed'], ['se quedó', 's/he stayed'],
        ['nos quedamos', 'we stayed'], ['se quedaron', 'they stayed'],
    ], [
        ['me quedaba', 'I used to stay'], ['te quedabas', 'you used to stay'], ['se quedaba', 's/he used to stay'],
        ['nos quedábamos', 'we used to stay'], ['se quedaban', 'they used to stay'],
    ]),
    simpleVerb('quedar', 'to remain, to be left, to meet up', [
        ['quedar', 'to remain'], ['quedado', 'remained'], ['quedando', 'remaining'],
    ], [
        ['quedo', 'I remain'], ['quedas', 'you remain'], ['queda', 's/he remains'],
        ['quedamos', 'we remain'], ['quedan', 'they remain'],
    ], [
        ['quedé', 'I remained'], ['quedaste', 'you remained'], ['quedó', 's/he remained'],
        ['quedamos', 'we remained'], ['quedaron', 'they remained'],
    ], [
        ['quedaba', 'I used to remain'], ['quedabas', 'you used to remain'], ['quedaba', 's/he used to remain'],
        ['quedábamos', 'we used to remain'], ['quedaban', 'they used to remain'],
    ]),
    simpleVerb('enojarse', 'to get angry, to get annoyed', [
        ['enojarse', 'to get angry'], ['enojado', 'gotten angry'], ['enojando', 'getting angry'],
    ], [
        ['me enojo', 'I get angry'], ['te enojas', 'you get angry'], ['se enoja', 's/he gets angry'],
        ['nos enojamos', 'we get angry'], ['se enojan', 'they get angry'],
    ], [
        ['me enojé', 'I got angry'], ['te enojaste', 'you got angry'], ['se enojó', 's/he got angry'],
        ['nos enojamos', 'we got angry'], ['se enojaron', 'they got angry'],
    ], [
        ['me enojaba', 'I used to get angry'], ['te enojabas', 'you used to get angry'], ['se enojaba', 's/he used to get angry'],
        ['nos enojábamos', 'we used to get angry'], ['se enojaban', 'they used to get angry'],
    ]),
    simpleVerb('enfadarse', 'to get angry, to get annoyed', [
        ['enfadarse', 'to get angry'], ['enfadado', 'gotten angry'], ['enfadando', 'getting angry'],
    ], [
        ['me enfado', 'I get angry'], ['te enfadas', 'you get angry'], ['se enfada', 's/he gets angry'],
        ['nos enfadamos', 'we get angry'], ['se enfadan', 'they get angry'],
    ], [
        ['me enfadé', 'I got angry'], ['te enfadaste', 'you got angry'], ['se enfadó', 's/he got angry'],
        ['nos enfadamos', 'we got angry'], ['se enfadaron', 'they got angry'],
    ], [
        ['me enfadaba', 'I used to get angry'], ['te enfadabas', 'you used to get angry'], ['se enfadaba', 's/he used to get angry'],
        ['nos enfadábamos', 'we used to get angry'], ['se enfadaban', 'they used to get angry'],
    ]),
    simpleVerb('dormirse', 'to fall asleep', [
        ['dormirse', 'to fall asleep'], ['dormido', 'fallen asleep'], ['durmiendo', 'falling asleep'],
    ], [
        ['me duermo', 'I fall asleep', true], ['te duermes', 'you fall asleep', true], ['se duerme', 's/he falls asleep', true],
        ['nos dormimos', 'we fall asleep'], ['se duermen', 'they fall asleep', true],
    ], [
        ['me dormí', 'I fell asleep'], ['te dormiste', 'you fell asleep'], ['se durmió', 's/he fell asleep', true],
        ['nos dormimos', 'we fell asleep'], ['se durmieron', 'they fell asleep', true],
    ], [
        ['me dormía', 'I used to fall asleep'], ['te dormías', 'you used to fall asleep'], ['se dormía', 's/he used to fall asleep'],
        ['nos dormíamos', 'we used to fall asleep'], ['se dormían', 'they used to fall asleep'],
    ]),
    simpleVerb('levantarse', 'to get up, to stand up', [
        ['levantarse', 'to get up'], ['levantado', 'gotten up'], ['levantando', 'getting up'],
    ], [
        ['me levanto', 'I get up'], ['te levantas', 'you get up'], ['se levanta', 's/he gets up'],
        ['nos levantamos', 'we get up'], ['se levantan', 'they get up'],
    ], [
        ['me levanté', 'I got up'], ['te levantaste', 'you got up'], ['se levantó', 's/he got up'],
        ['nos levantamos', 'we got up'], ['se levantaron', 'they got up'],
    ], [
        ['me levantaba', 'I used to get up'], ['te levantabas', 'you used to get up'], ['se levantaba', 's/he used to get up'],
        ['nos levantábamos', 'we used to get up'], ['se levantaban', 'they used to get up'],
    ]),
    simpleVerb('ducharse', 'to shower (oneself)', [
        ['ducharse', 'to shower'], ['duchado', 'showered'], ['duchando', 'showering'],
    ], [
        ['me ducho', 'I shower'], ['te duchas', 'you shower'], ['se ducha', 's/he showers'],
        ['nos duchamos', 'we shower'], ['se duchan', 'they shower'],
    ], [
        ['me duché', 'I showered'], ['te duchaste', 'you showered'], ['se duchó', 's/he showered'],
        ['nos duchamos', 'we showered'], ['se ducharon', 'they showered'],
    ], [
        ['me duchaba', 'I used to shower'], ['te duchabas', 'you used to shower'], ['se duchaba', 's/he used to shower'],
        ['nos duchábamos', 'we used to shower'], ['se duchaban', 'they used to shower'],
    ]),
    simpleVerb('lavarse', 'to wash (oneself)', [
        ['lavarse', 'to wash'], ['lavado', 'washed'], ['lavando', 'washing'],
    ], [
        ['me lavo', 'I wash'], ['te lavas', 'you wash'], ['se lava', 's/he washes'],
        ['nos lavamos', 'we wash'], ['se lavan', 'they wash'],
    ], [
        ['me lavé', 'I washed'], ['te lavaste', 'you washed'], ['se lavó', 's/he washed'],
        ['nos lavamos', 'we washed'], ['se lavaron', 'they washed'],
    ], [
        ['me lavaba', 'I used to wash'], ['te lavabas', 'you used to wash'], ['se lavaba', 's/he used to wash'],
        ['nos lavábamos', 'we used to wash'], ['se lavaban', 'they used to wash'],
    ]),
    simpleVerb('olvidarse', 'to forget', [
        ['olvidarse', 'to forget'], ['olvidado', 'forgotten'], ['olvidando', 'forgetting'],
    ], [
        ['me olvido', 'I forget'], ['te olvidas', 'you forget'], ['se olvida', 's/he forgets'],
        ['nos olvidamos', 'we forget'], ['se olvidan', 'they forget'],
    ], [
        ['me olvidé', 'I forgot'], ['te olvidaste', 'you forgot'], ['se olvidó', 's/he forgot'],
        ['nos olvidamos', 'we forgot'], ['se olvidaron', 'they forgot'],
    ], [
        ['me olvidaba', 'I used to forget'], ['te olvidabas', 'you used to forget'], ['se olvidaba', 's/he used to forget'],
        ['nos olvidábamos', 'we used to forget'], ['se olvidaban', 'they used to forget'],
    ]),
    simpleVerb('despertarse', 'to wake up', [
        ['despertarse', 'to wake up'], ['despertado', 'woken'], ['despertando', 'waking'],
    ], [
        ['me despierto', 'I wake', true], ['te despiertas', 'you wake', true], ['se despierta', 's/he wakes', true],
        ['nos despertamos', 'we wake'], ['se despiertan', 'they wake', true],
    ], [
        ['me desperté', 'I woke'], ['te despertaste', 'you woke'], ['se despertó', 's/he woke'],
        ['nos despertamos', 'we woke'], ['se despertaron', 'they woke'],
    ], [
        ['me despertaba', 'I used to wake'], ['te despertabas', 'you used to wake'], ['se despertaba', 's/he used to wake'],
        ['nos despertábamos', 'we used to wake'], ['se despertaban', 'they used to wake'],
    ]),
    simpleVerb('preocuparse', 'to worry, to concern', [
        ['preocuparse', 'to worry'], ['preocupado', 'worried'], ['preocupando', 'worrying'],
    ], [
        ['me preocupo', 'I worry'], ['te preocupas', 'you worry'], ['se preocupa', 's/he worries'],
        ['nos preocupamos', 'we worry'], ['se preocupan', 'they worry'],
    ], [
        ['me preocupé', 'I worried'], ['te preocupaste', 'you worried'], ['se preocupó', 's/he worried'],
        ['nos preocupamos', 'we worried'], ['se preocuparon', 'they worried'],
    ], [
        ['me preocupaba', 'I used to worry'], ['te preocupabas', 'you used to worry'], ['se preocupaba', 's/he used to worry'],
        ['nos preocupábamos', 'we used to worry'], ['se preocupaban', 'they used to worry'],
    ]),
    simpleVerb('aburrirse', 'to get bored', [
        ['aburrirse', 'to get bored'], ['aburrido', 'gotten bored'], ['aburriendo', 'getting bored'],
    ], [
        ['me aburro', 'I get bored'], ['te aburres', 'you get bored'], ['se aburre', 's/he gets bored'],
        ['nos aburrimos', 'we get bored'], ['se aburren', 'they get bored'],
    ], [
        ['me aburrí', 'I got bored'], ['te aburriste', 'you got bored'], ['se aburrió', 's/he got bored'],
        ['nos aburrimos', 'we got bored'], ['se aburrieron', 'they got bored'],
    ], [
        ['me aburría', 'I used to get bored'], ['te aburrías', 'you used to get bored'], ['se aburría', 's/he used to get bored'],
        ['nos aburríamos', 'we used to get bored'], ['se aburrían', 'they used to get bored'],
    ]),
    simpleVerb('divertirse', 'to enjoy (oneself), to have fun', [
        ['divertirse', 'to enjoy oneself'], ['divertido', 'enjoyed'], ['divirtiendo', 'enjoying'],
    ], [
        ['me divierto', 'I enjoy', true], ['te diviertes', 'you enjoy', true], ['se divierte', 's/he enjoys', true],
        ['nos divertimos', 'we enjoy'], ['se divierten', 'they enjoy', true],
    ], [
        ['me divertí', 'I enjoyed'], ['te divertiste', 'you enjoyed'], ['se divirtió', 's/he enjoyed', true],
        ['nos divertimos', 'we enjoyed'], ['se divirtieron', 'they enjoyed', true],
    ], [
        ['me divertía', 'I used to enjoy'], ['te divertías', 'you used to enjoy'], ['se divertía', 's/he used to enjoy'],
        ['nos divertíamos', 'we used to enjoy'], ['se divertían', 'they used to enjoy'],
    ]),
    simpleVerb('cepillarse', 'to brush (oneself)', [
        ['cepillarse', 'to brush'], ['cepillado', 'brushed'], ['cepillando', 'brushing'],
    ], [
        ['me cepillo', 'I brush'], ['te cepillas', 'you brush'], ['se cepilla', 's/he brushes'],
        ['nos cepillamos', 'we brush'], ['se cepillan', 'they brush'],
    ], [
        ['me cepillé', 'I brushed'], ['te cepillaste', 'you brushed'], ['se cepilló', 's/he brushed'],
        ['nos cepillamos', 'we brushed'], ['se cepillaron', 'they brushed'],
    ], [
        ['me cepillaba', 'I used to brush'], ['te cepillabas', 'you used to brush'], ['se cepillaba', 's/he used to brush'],
        ['nos cepillábamos', 'we used to brush'], ['se cepillaban', 'they used to brush'],
    ]),
    simpleVerb('encontrarse', 'to find (oneself), to be located', [
        ['encontrarse', 'to find oneself'], ['encontrado', 'found'], ['encontrando', 'finding'],
    ], [
        ['me encuentro', 'I find', true], ['te encuentras', 'you find', true], ['se encuentra', 's/he finds', true],
        ['nos encontramos', 'we find'], ['se encuentran', 'they find', true],
    ], [
        ['me encontré', 'I found'], ['te encontraste', 'you found'], ['se encontró', 's/he found'],
        ['nos encontramos', 'we found'], ['se encontraron', 'they found'],
    ], [
        ['me encontraba', 'I used to find'], ['te encontrabas', 'you used to find'], ['se encontraba', 's/he used to find'],
        ['nos encontrábamos', 'we used to find'], ['se encontraban', 'they used to find'],
    ]),
    simpleVerb('cuidarse', 'to look after (oneself)', [
        ['cuidarse', 'to look after oneself'], ['cuidado', 'looked after'], ['cuidando', 'looking after'],
    ], [
        ['me cuido', 'I look after'], ['te cuidas', 'you look after'], ['se cuida', 's/he looks after'],
        ['nos cuidamos', 'we look after'], ['se cuidan', 'they look after'],
    ], [
        ['me cuidé', 'I looked after'], ['te cuidaste', 'you looked after'], ['se cuidó', 's/he looked after'],
        ['nos cuidamos', 'we looked after'], ['se cuidaron', 'they looked after'],
    ], [
        ['me cuidaba', 'I used to look after'], ['te cuidabas', 'you used to look after'], ['se cuidaba', 's/he used to look after'],
        ['nos cuidábamos', 'we used to look after'], ['se cuidaban', 'they used to look after'],
    ]),
    simpleVerb('casarse', 'to marry', [
        ['casarse', 'to marry'], ['casado', 'married'], ['casando', 'marrying'],
    ], [
        ['me caso', 'I marry'], ['te casas', 'you marry'], ['se casa', 's/he marries'],
        ['nos casamos', 'we marry'], ['se casan', 'they marry'],
    ], [
        ['me casé', 'I married'], ['te casaste', 'you married'], ['se casó', 's/he married'],
        ['nos casamos', 'we married'], ['se casaron', 'they married'],
    ], [
        ['me casaba', 'I used to marry'], ['te casabas', 'you used to marry'], ['se casaba', 's/he used to marry'],
        ['nos casábamos', 'we used to marry'], ['se casaban', 'they used to marry'],
    ]),
    simpleVerb('vestirse', 'to dress (oneself), to get dressed', [
        ['vestirse', 'to dress'], ['vestido', 'dressed'], ['vistiendo', 'dressing'],
    ], [
        ['me visto', 'I dress', true], ['te vistes', 'you dress', true], ['se viste', 's/he dresses', true],
        ['nos vestimos', 'we dress'], ['se visten', 'they dress', true],
    ], [
        ['me vestí', 'I dressed'], ['te vestiste', 'you dressed'], ['se vistió', 's/he dressed', true],
        ['nos vestimos', 'we dressed'], ['se vistieron', 'they dressed', true],
    ], [
        ['me vestía', 'I used to dress'], ['te vestías', 'you used to dress'], ['se vestía', 's/he used to dress'],
        ['nos vestíamos', 'we used to dress'], ['se vestían', 'they used to dress'],
    ]),
    simpleVerb('querer', 'to want, to love', [
        ['querer', 'to want, to love'], ['querido', 'wanted'], ['queriendo', 'wanting'],
    ], [
        ['quiero', 'I want', true], ['quieres', 'you want', true], ['quiere', 's/he wants', true],
        ['queremos', 'we want'], ['quieren', 'they want', true],
    ], [
        ['quise', 'I wanted', true], ['quisiste', 'you wanted', true], ['quiso', 's/he wanted', true],
        ['quisimos', 'we wanted', true], ['quisieron', 'they wanted', true],
    ], [
        ['quería', 'I used to want'], ['querías', 'you used to want'], ['quería', 's/he used to want'],
        ['queríamos', 'we used to want'], ['querían', 'they used to want'],
    ]),
    simpleVerb('entender', 'to understand', [
        ['entender', 'to understand'], ['entendido', 'understood'], ['entendiendo', 'understanding'],
    ], [
        ['entiendo', 'I understand', true], ['entiendes', 'you understand', true], ['entiende', 's/he understands', true],
        ['entendemos', 'we understand'], ['entienden', 'they understand', true],
    ], [
        ['entendí', 'I understood'], ['entendiste', 'you understood'], ['entendió', 's/he understood'],
        ['entendimos', 'we understood'], ['entendieron', 'they understood'],
    ], [
        ['entendía', 'I used to understand'], ['entendías', 'you used to understand'], ['entendía', 's/he used to understand'],
        ['entendíamos', 'we used to understand'], ['entendían', 'they used to understand'],
    ]),
    simpleVerb('jugar', 'to play', [
        ['jugar', 'to play'], ['jugado', 'played'], ['jugando', 'playing'],
    ], [
        ['juego', 'I play', true], ['juegas', 'you play', true], ['juega', 's/he plays', true],
        ['jugamos', 'we play'], ['juegan', 'they play', true],
    ], [
        ['jugué', 'I played', true], ['jugaste', 'you played'], ['jugó', 's/he played'],
        ['jugamos', 'we played'], ['jugaron', 'they played'],
    ], [
        ['jugaba', 'I used to play'], ['jugabas', 'you used to play'], ['jugaba', 's/he used to play'],
        ['jugábamos', 'we used to play'], ['jugaban', 'they used to play'],
    ]),
    simpleVerb('cerrar', 'to close, to shut, to lock', [
        ['cerrar', 'to close'], ['cerrado', 'closed'], ['cerrando', 'closing'],
    ], [
        ['cierro', 'I close', true], ['cierras', 'you close', true], ['cierra', 's/he closes', true],
        ['cerramos', 'we close'], ['cierran', 'they close', true],
    ], [
        ['cerré', 'I closed'], ['cerraste', 'you closed'], ['cerró', 's/he closed'],
        ['cerramos', 'we closed'], ['cerraron', 'they closed'],
    ], [
        ['cerraba', 'I used to close'], ['cerrabas', 'you used to close'], ['cerraba', 's/he used to close'],
        ['cerrábamos', 'we used to close'], ['cerraban', 'they used to close'],
    ]),
    simpleVerb('almorzar', 'to lunch, to eat lunch', [
        ['almorzar', 'to lunch'], ['almorzado', 'lunched'], ['almorzando', 'lunching'],
    ], [
        ['almuerzo', 'I lunch', true], ['almuerzas', 'you lunch', true], ['almuerza', 's/he lunches', true],
        ['almorzamos', 'we lunch'], ['almuerzan', 'they lunch', true],
    ], [
        ['almorcé', 'I lunched', true], ['almorzaste', 'you lunched'], ['almorzó', 's/he lunched'],
        ['almorzamos', 'we lunched'], ['almorzaron', 'they lunched'],
    ], [
        ['almorzaba', 'I used to lunch'], ['almorzabas', 'you used to lunch'], ['almorzaba', 's/he used to lunch'],
        ['almorzábamos', 'we used to lunch'], ['almorzaban', 'they used to lunch'],
    ]),
    simpleVerb('pasar', 'to pass, to happen, to spend (time)', [
        ['pasar', 'to pass'], ['pasado', 'passed'], ['pasando', 'passing'],
    ], [
        ['paso', 'I pass'], ['pasas', 'you pass'], ['pasa', 's/he passes'],
        ['pasamos', 'we pass'], ['pasan', 'they pass'],
    ], [
        ['pasé', 'I passed'], ['pasaste', 'you passed'], ['pasó', 's/he passed'],
        ['pasamos', 'we passed'], ['pasaron', 'they passed'],
    ], [
        ['pasaba', 'I used to pass'], ['pasabas', 'you used to pass'], ['pasaba', 's/he used to pass'],
        ['pasábamos', 'we used to pass'], ['pasaban', 'they used to pass'],
    ]),
    simpleVerb('creer', 'to believe, to think', [
        ['creer', 'to believe'], ['creído', 'believed'], ['creyendo', 'believing'],
    ], [
        ['creo', 'I believe'], ['crees', 'you believe'], ['cree', 's/he believes'],
        ['creemos', 'we believe'], ['creen', 'they believe'],
    ], [
        ['creí', 'I believed'], ['creíste', 'you believed'], ['creyó', 's/he believed', true],
        ['creímos', 'we believed'], ['creyeron', 'they believed', true],
    ], [
        ['creía', 'I used to believe'], ['creías', 'you used to believe'], ['creía', 's/he used to believe'],
        ['creíamos', 'we used to believe'], ['creían', 'they used to believe'],
    ]),
    simpleVerb('hablar', 'to speak, to talk', [
        ['hablar', 'to speak'], ['hablado', 'spoken'], ['hablando', 'speaking'],
    ], [
        ['hablo', 'I speak'], ['hablas', 'you speak'], ['habla', 's/he speaks'],
        ['hablamos', 'we speak'], ['hablan', 'they speak'],
    ], [
        ['hablé', 'I spoke'], ['hablaste', 'you spoke'], ['habló', 's/he spoke'],
        ['hablamos', 'we spoke'], ['hablaron', 'they spoke'],
    ], [
        ['hablaba', 'I used to speak'], ['hablabas', 'you used to speak'], ['hablaba', 's/he used to speak'],
        ['hablábamos', 'we used to speak'], ['hablaban', 'they used to speak'],
    ]),
    simpleVerb('dejar', 'to leave, to let, to allow', [
        ['dejar', 'to leave'], ['dejado', 'left'], ['dejando', 'leaving'],
    ], [
        ['dejo', 'I leave'], ['dejas', 'you leave'], ['deja', 's/he leaves'],
        ['dejamos', 'we leave'], ['dejan', 'they leave'],
    ], [
        ['dejé', 'I left'], ['dejaste', 'you left'], ['dejó', 's/he left'],
        ['dejamos', 'we left'], ['dejaron', 'they left'],
    ], [
        ['dejaba', 'I used to leave'], ['dejabas', 'you used to leave'], ['dejaba', 's/he used to leave'],
        ['dejábamos', 'we used to leave'], ['dejaban', 'they used to leave'],
    ]),
    simpleVerb('seguir', 'to follow, to continue', [
        ['seguir', 'to follow'], ['seguido', 'followed'], ['siguiendo', 'following'],
    ], [
        ['sigo', 'I follow', true], ['sigues', 'you follow', true], ['sigue', 's/he follows', true],
        ['seguimos', 'we follow'], ['siguen', 'they follow', true],
    ], [
        ['seguí', 'I followed'], ['seguiste', 'you followed'], ['siguió', 's/he followed', true],
        ['seguimos', 'we followed'], ['siguieron', 'they followed', true],
    ], [
        ['seguía', 'I used to follow'], ['seguías', 'you used to follow'], ['seguía', 's/he used to follow'],
        ['seguíamos', 'we used to follow'], ['seguían', 'they used to follow'],
    ]),
    simpleVerb('pensar', 'to think, to believe', [
        ['pensar', 'to think'], ['pensado', 'thought'], ['pensando', 'thinking'],
    ], [
        ['pienso', 'I think', true], ['piensas', 'you think', true], ['piensa', 's/he thinks', true],
        ['pensamos', 'we think'], ['piensan', 'they think', true],
    ], [
        ['pensé', 'I thought'], ['pensaste', 'you thought'], ['pensó', 's/he thought'],
        ['pensamos', 'we thought'], ['pensaron', 'they thought'],
    ], [
        ['pensaba', 'I used to think'], ['pensabas', 'you used to think'], ['pensaba', 's/he used to think'],
        ['pensábamos', 'we used to think'], ['pensaban', 'they used to think'],
    ]),
    simpleVerb('tomar', 'to drink, to take', [
        ['tomar', 'to drink, to take'], ['tomado', 'drunk'], ['tomando', 'drinking'],
    ], [
        ['tomo', 'I drink'], ['tomas', 'you drink'], ['toma', 's/he drinks'],
        ['tomamos', 'we drink'], ['toman', 'they drink'],
    ], [
        ['tomé', 'I drank'], ['tomaste', 'you drank'], ['tomó', 's/he drank'],
        ['tomamos', 'we drank'], ['tomaron', 'they drank'],
    ], [
        ['tomaba', 'I used to drink'], ['tomabas', 'you used to drink'], ['tomaba', 's/he used to drink'],
        ['tomábamos', 'we used to drink'], ['tomaban', 'they used to drink'],
    ]),
    simpleVerb('tratar', 'to treat, to try', [
        ['tratar', 'to treat'], ['tratado', 'treated'], ['tratando', 'treating'],
    ], [
        ['trato', 'I treat'], ['tratas', 'you treat'], ['trata', 's/he treats'],
        ['tratamos', 'we treat'], ['tratan', 'they treat'],
    ], [
        ['traté', 'I treated'], ['trataste', 'you treated'], ['trató', 's/he treated'],
        ['tratamos', 'we treated'], ['trataron', 'they treated'],
    ], [
        ['trataba', 'I used to treat'], ['tratabas', 'you used to treat'], ['trataba', 's/he used to treat'],
        ['tratábamos', 'we used to treat'], ['trataban', 'they used to treat'],
    ]),
    simpleVerb('mirar', 'to look, to watch', [
        ['mirar', 'to look, to watch'], ['mirado', 'looked'], ['mirando', 'looking'],
    ], [
        ['miro', 'I look'], ['miras', 'you look'], ['mira', 's/he looks'],
        ['miramos', 'we look'], ['miran', 'they look'],
    ], [
        ['miré', 'I looked'], ['miraste', 'you looked'], ['miró', 's/he looked'],
        ['miramos', 'we looked'], ['miraron', 'they looked'],
    ], [
        ['miraba', 'I used to look'], ['mirabas', 'you used to look'], ['miraba', 's/he used to look'],
        ['mirábamos', 'we used to look'], ['miraban', 'they used to look'],
    ]),
    simpleVerb('contar', 'to count, to tell', [
        ['contar', 'to count, to tell'], ['contado', 'counted'], ['contando', 'counting'],
    ], [
        ['cuento', 'I count', true], ['cuentas', 'you count', true], ['cuenta', 's/he counts', true],
        ['contamos', 'we count'], ['cuentan', 'they count', true],
    ], [
        ['conté', 'I counted'], ['contaste', 'you counted'], ['contó', 's/he counted'],
        ['contamos', 'we counted'], ['contaron', 'they counted'],
    ], [
        ['contaba', 'I used to count'], ['contabas', 'you used to count'], ['contaba', 's/he used to count'],
        ['contábamos', 'we used to count'], ['contaban', 'they used to count'],
    ]),
    simpleVerb('esperar', 'to wait, to hope', [
        ['esperar', 'to wait'], ['esperado', 'waited'], ['esperando', 'waiting'],
    ], [
        ['espero', 'I wait'], ['esperas', 'you wait'], ['espera', 's/he waits'],
        ['esperamos', 'we wait'], ['esperan', 'they wait'],
    ], [
        ['esperé', 'I waited'], ['esperaste', 'you waited'], ['esperó', 's/he waited'],
        ['esperamos', 'we waited'], ['esperaron', 'they waited'],
    ], [
        ['esperaba', 'I used to wait'], ['esperabas', 'you used to wait'], ['esperaba', 's/he used to wait'],
        ['esperábamos', 'we used to wait'], ['esperaban', 'they used to wait'],
    ]),
    simpleVerb('buscar', 'to search for, to look for', [
        ['buscar', 'to search for'], ['buscado', 'searched'], ['buscando', 'searching'],
    ], [
        ['busco', 'I search'], ['buscas', 'you search'], ['busca', 's/he searches'],
        ['buscamos', 'we search'], ['buscan', 'they search'],
    ], [
        ['busqué', 'I searched', true], ['buscaste', 'you searched'], ['buscó', 's/he searched'],
        ['buscamos', 'we searched'], ['buscaron', 'they searched'],
    ], [
        ['buscaba', 'I used to search'], ['buscabas', 'you used to search'], ['buscaba', 's/he used to search'],
        ['buscábamos', 'we used to search'], ['buscaban', 'they used to search'],
    ]),
    simpleVerb('existir', 'to exist', [
        ['existir', 'to exist'], ['existido', 'existed'], ['existiendo', 'existing'],
    ], [
        ['existo', 'I exist'], ['existes', 'you exist'], ['existe', 's/he exists'],
        ['existimos', 'we exist'], ['existen', 'they exist'],
    ], [
        ['existí', 'I existed'], ['exististe', 'you existed'], ['existió', 's/he existed'],
        ['existimos', 'we existed'], ['existieron', 'they existed'],
    ], [
        ['existía', 'I used to exist'], ['existías', 'you used to exist'], ['existía', 's/he used to exist'],
        ['existíamos', 'we used to exist'], ['existían', 'they used to exist'],
    ]),
    simpleVerb('entrar', 'to enter', [
        ['entrar', 'to enter'], ['entrado', 'entered'], ['entrando', 'entering'],
    ], [
        ['entro', 'I enter'], ['entras', 'you enter'], ['entra', 's/he enters'],
        ['entramos', 'we enter'], ['entran', 'they enter'],
    ], [
        ['entré', 'I entered'], ['entraste', 'you entered'], ['entró', 's/he entered'],
        ['entramos', 'we entered'], ['entraron', 'they entered'],
    ], [
        ['entraba', 'I used to enter'], ['entrabas', 'you used to enter'], ['entraba', 's/he used to enter'],
        ['entrábamos', 'we used to enter'], ['entraban', 'they used to enter'],
    ]),
    simpleVerb('trabajar', 'to work', [
        ['trabajar', 'to work'], ['trabajado', 'worked'], ['trabajando', 'working'],
    ], [
        ['trabajo', 'I work'], ['trabajas', 'you work'], ['trabaja', 's/he works'],
        ['trabajamos', 'we work'], ['trabajan', 'they work'],
    ], [
        ['trabajé', 'I worked'], ['trabajaste', 'you worked'], ['trabajó', 's/he worked'],
        ['trabajamos', 'we worked'], ['trabajaron', 'they worked'],
    ], [
        ['trabajaba', 'I used to work'], ['trabajabas', 'you used to work'], ['trabajaba', 's/he used to work'],
        ['trabajábamos', 'we used to work'], ['trabajaban', 'they used to work'],
    ]),
    simpleVerb('escribir', 'to write', [
        ['escribir', 'to write'], ['escrito', 'written'], ['escribiendo', 'writing'],
    ], [
        ['escribo', 'I write'], ['escribes', 'you write'], ['escribe', 's/he writes'],
        ['escribimos', 'we write'], ['escriben', 'they write'],
    ], [
        ['escribí', 'I wrote'], ['escribiste', 'you wrote'], ['escribió', 's/he wrote'],
        ['escribimos', 'we wrote'], ['escribieron', 'they wrote'],
    ], [
        ['escribía', 'I used to write'], ['escribías', 'you used to write'], ['escribía', 's/he used to write'],
        ['escribíamos', 'we used to write'], ['escribían', 'they used to write'],
    ]),
    simpleVerb('producir', 'to produce, to make', [
        ['producir', 'to produce'], ['producido', 'produced'], ['produciendo', 'producing'],
    ], [
        ['produzco', 'I produce', true], ['produces', 'you produce'], ['produce', 's/he produces'],
        ['producimos', 'we produce'], ['producen', 'they produce'],
    ], [
        ['produje', 'I produced', true], ['produjiste', 'you produced', true], ['produjo', 's/he produced', true],
        ['produjimos', 'we produced', true], ['produjeron', 'they produced', true],
    ], [
        ['producía', 'I used to produce'], ['producías', 'you used to produce'], ['producía', 's/he used to produce'],
        ['producíamos', 'we used to produce'], ['producían', 'they used to produce'],
    ]),
    simpleVerb('ocurrir', 'to occur, to happen', [
        ['ocurrir', 'to occur'], ['ocurrido', 'occurred'], ['ocurriendo', 'occurring'],
    ], [
        ['ocurro', 'I occur'], ['ocurres', 'you occur'], ['ocurre', 's/he occurs'],
        ['ocurrimos', 'we occur'], ['ocurren', 'they occur'],
    ], [
        ['ocurrí', 'I occurred'], ['ocurriste', 'you occurred'], ['ocurrió', 's/he occurred'],
        ['ocurrimos', 'we occurred'], ['ocurrieron', 'they occurred'],
    ], [
        ['ocurría', 'I used to occur'], ['ocurrías', 'you used to occur'], ['ocurría', 's/he used to occur'],
        ['ocurríamos', 'we used to occur'], ['ocurrían', 'they used to occur'],
    ]),
    simpleVerb('pedir', 'to ask for, to request, to order', [
        ['pedir', 'to ask for'], ['pedido', 'asked for'], ['pidiendo', 'asking for'],
    ], [
        ['pido', 'I ask for', true], ['pides', 'you ask for', true], ['pide', 's/he asks for', true],
        ['pedimos', 'we ask for'], ['piden', 'they ask for', true],
    ], [
        ['pedí', 'I asked for'], ['pediste', 'you asked for'], ['pidió', 's/he asked for', true],
        ['pedimos', 'we asked for'], ['pidieron', 'they asked for', true],
    ], [
        ['pedía', 'I used to ask for'], ['pedías', 'you used to ask for'], ['pedía', 's/he used to ask for'],
        ['pedíamos', 'we used to ask for'], ['pedían', 'they used to ask for'],
    ]),
    simpleVerb('recibir', 'to receive', [
        ['recibir', 'to receive'], ['recibido', 'received'], ['recibiendo', 'receiving'],
    ], [
        ['recibo', 'I receive'], ['recibes', 'you receive'], ['recibe', 's/he receives'],
        ['recibimos', 'we receive'], ['reciben', 'they receive'],
    ], [
        ['recibí', 'I received'], ['recibiste', 'you received'], ['recibió', 's/he received'],
        ['recibimos', 'we received'], ['recibieron', 'they received'],
    ], [
        ['recibía', 'I used to receive'], ['recibías', 'you used to receive'], ['recibía', 's/he used to receive'],
        ['recibíamos', 'we used to receive'], ['recibían', 'they used to receive'],
    ]),
    simpleVerb('recordar', 'to remember, to recall, to remind', [
        ['recordar', 'to remember'], ['recordado', 'remembered'], ['recordando', 'remembering'],
    ], [
        ['recuerdo', 'I remember', true], ['recuerdas', 'you remember', true], ['recuerda', 's/he remembers', true],
        ['recordamos', 'we remember'], ['recuerdan', 'they remember', true],
    ], [
        ['recordé', 'I remembered'], ['recordaste', 'you remembered'], ['recordó', 's/he remembered'],
        ['recordamos', 'we remembered'], ['recordaron', 'they remembered'],
    ], [
        ['recordaba', 'I used to remember'], ['recordabas', 'you used to remember'], ['recordaba', 's/he used to remember'],
        ['recordábamos', 'we used to remember'], ['recordaban', 'they used to remember'],
    ]),
    simpleVerb('terminar', 'to end, to finish', [
        ['terminar', 'to end'], ['terminado', 'ended'], ['terminando', 'ending'],
    ], [
        ['termino', 'I end'], ['terminas', 'you end'], ['termina', 's/he ends'],
        ['terminamos', 'we end'], ['terminan', 'they end'],
    ], [
        ['terminé', 'I ended'], ['terminaste', 'you ended'], ['terminó', 's/he ended'],
        ['terminamos', 'we ended'], ['terminaron', 'they ended'],
    ], [
        ['terminaba', 'I used to end'], ['terminabas', 'you used to end'], ['terminaba', 's/he used to end'],
        ['terminábamos', 'we used to end'], ['terminaban', 'they used to end'],
    ]),
    simpleVerb('permitir', 'to allow, to permit', [
        ['permitir', 'to allow'], ['permitido', 'allowed'], ['permitiendo', 'allowing'],
    ], [
        ['permito', 'I allow'], ['permites', 'you allow'], ['permite', 's/he allows'],
        ['permitimos', 'we allow'], ['permiten', 'they allow'],
    ], [
        ['permití', 'I allowed'], ['permitiste', 'you allowed'], ['permitió', 's/he allowed'],
        ['permitimos', 'we allowed'], ['permitieron', 'they allowed'],
    ], [
        ['permitía', 'I used to allow'], ['permitías', 'you used to allow'], ['permitía', 's/he used to allow'],
        ['permitíamos', 'we used to allow'], ['permitían', 'they used to allow'],
    ]),
    simpleVerb('conseguir', 'to get, to obtain', [
        ['conseguir', 'to get'], ['conseguido', 'gotten'], ['consiguiendo', 'getting'],
    ], [
        ['consigo', 'I get', true], ['consigues', 'you get', true], ['consigue', 's/he gets', true],
        ['conseguimos', 'we get'], ['consiguen', 'they get', true],
    ], [
        ['conseguí', 'I got'], ['conseguiste', 'you got'], ['consiguió', 's/he got', true],
        ['conseguimos', 'we got'], ['consiguieron', 'they got', true],
    ], [
        ['conseguía', 'I used to get'], ['conseguías', 'you used to get'], ['conseguía', 's/he used to get'],
        ['conseguíamos', 'we used to get'], ['conseguían', 'they used to get'],
    ]),
    simpleVerb('servir', 'to serve', [
        ['servir', 'to serve'], ['servido', 'served'], ['sirviendo', 'serving'],
    ], [
        ['sirvo', 'I serve', true], ['sirves', 'you serve', true], ['sirve', 's/he serves', true],
        ['servimos', 'we serve'], ['sirven', 'they serve', true],
    ], [
        ['serví', 'I served'], ['serviste', 'you served'], ['sirvió', 's/he served', true],
        ['servimos', 'we served'], ['sirvieron', 'they served', true],
    ], [
        ['servía', 'I used to serve'], ['servías', 'you used to serve'], ['servía', 's/he used to serve'],
        ['servíamos', 'we used to serve'], ['servían', 'they used to serve'],
    ]),
    simpleVerb('sacar', 'to take, to take out, to get', [
        ['sacar', 'to take'], ['sacado', 'taken'], ['sacando', 'taking'],
    ], [
        ['saco', 'I take'], ['sacas', 'you take'], ['saca', 's/he takes'],
        ['sacamos', 'we take'], ['sacan', 'they take'],
    ], [
        ['saqué', 'I took', true], ['sacaste', 'you took'], ['sacó', 's/he took'],
        ['sacamos', 'we took'], ['sacaron', 'they took'],
    ], [
        ['sacaba', 'I used to take'], ['sacabas', 'you used to take'], ['sacaba', 's/he used to take'],
        ['sacábamos', 'we used to take'], ['sacaban', 'they used to take'],
    ]),
    simpleVerb('necesitar', 'to need', [
        ['necesitar', 'to need'], ['necesitado', 'needed'], ['necesitando', 'needing'],
    ], [
        ['necesito', 'I need'], ['necesitas', 'you need'], ['necesita', 's/he needs'],
        ['necesitamos', 'we need'], ['necesitan', 'they need'],
    ], [
        ['necesité', 'I needed'], ['necesitaste', 'you needed'], ['necesitó', 's/he needed'],
        ['necesitamos', 'we needed'], ['necesitaron', 'they needed'],
    ], [
        ['necesitaba', 'I used to need'], ['necesitabas', 'you used to need'], ['necesitaba', 's/he used to need'],
        ['necesitábamos', 'we used to need'], ['necesitaban', 'they used to need'],
    ]),
    simpleVerb('mantener', 'to maintain, to keep', [
        ['mantener', 'to maintain'], ['mantenido', 'maintained'], ['manteniendo', 'maintaining'],
    ], [
        ['mantengo', 'I maintain', true], ['mantienes', 'you maintain', true], ['mantiene', 's/he maintains', true],
        ['mantenemos', 'we maintain'], ['mantienen', 'they maintain', true],
    ], [
        ['mantuve', 'I maintained', true], ['mantuviste', 'you maintained', true], ['mantuvo', 's/he maintained', true],
        ['mantuvimos', 'we maintained', true], ['mantuvieron', 'they maintained', true],
    ], [
        ['mantenía', 'I used to maintain'], ['mantenías', 'you used to maintain'], ['mantenía', 's/he used to maintain'],
        ['manteníamos', 'we used to maintain'], ['mantenían', 'they used to maintain'],
    ]),
    simpleVerb('resultar', 'to become, to turn out', [
        ['resultar', 'to become'], ['resultado', 'become'], ['resultando', 'becoming'],
    ], [
        ['resulto', 'I become'], ['resultas', 'you become'], ['resulta', 's/he becomes'],
        ['resultamos', 'we become'], ['resultan', 'they become'],
    ], [
        ['resulté', 'I became'], ['resultaste', 'you became'], ['resultó', 's/he became'],
        ['resultamos', 'we became'], ['resultaron', 'they became'],
    ], [
        ['resultaba', 'I used to become'], ['resultabas', 'you used to become'], ['resultaba', 's/he used to become'],
        ['resultábamos', 'we used to become'], ['resultaban', 'they used to become'],
    ]),
    simpleVerb('leer', 'to read', [
        ['leer', 'to read'], ['leído', 'read'], ['leyendo', 'reading'],
    ], [
        ['leo', 'I read'], ['lees', 'you read'], ['lee', 's/he reads'],
        ['leemos', 'we read'], ['leen', 'they read'],
    ], [
        ['leí', 'I read'], ['leíste', 'you read'], ['leyó', 's/he read', true],
        ['leímos', 'we read'], ['leyeron', 'they read', true],
    ], [
        ['leía', 'I used to read'], ['leías', 'you used to read'], ['leía', 's/he used to read'],
        ['leíamos', 'we used to read'], ['leían', 'they used to read'],
    ]),
    simpleVerb('caer', 'to fall', [
        ['caer', 'to fall'], ['caído', 'fallen'], ['cayendo', 'falling'],
    ], [
        ['caigo', 'I fall', true], ['caes', 'you fall'], ['cae', 's/he falls'],
        ['caemos', 'we fall'], ['caen', 'they fall'],
    ], [
        ['caí', 'I fell'], ['caíste', 'you fell'], ['cayó', 's/he fell', true],
        ['caímos', 'we fell'], ['cayeron', 'they fell', true],
    ], [
        ['caía', 'I used to fall'], ['caías', 'you used to fall'], ['caía', 's/he used to fall'],
        ['caíamos', 'we used to fall'], ['caían', 'they used to fall'],
    ]),
    simpleVerb('cambiar', 'to change', [
        ['cambiar', 'to change'], ['cambiado', 'changed'], ['cambiando', 'changing'],
    ], [
        ['cambio', 'I change'], ['cambias', 'you change'], ['cambia', 's/he changes'],
        ['cambiamos', 'we change'], ['cambian', 'they change'],
    ], [
        ['cambié', 'I changed'], ['cambiaste', 'you changed'], ['cambió', 's/he changed'],
        ['cambiamos', 'we changed'], ['cambiaron', 'they changed'],
    ], [
        ['cambiaba', 'I used to change'], ['cambiabas', 'you used to change'], ['cambiaba', 's/he used to change'],
        ['cambiábamos', 'we used to change'], ['cambiaban', 'they used to change'],
    ]),
    simpleVerb('presentar', 'to present, to introduce', [
        ['presentar', 'to present'], ['presentado', 'presented'], ['presentando', 'presenting'],
    ], [
        ['presento', 'I present'], ['presentas', 'you present'], ['presenta', 's/he presents'],
        ['presentamos', 'we present'], ['presentan', 'they present'],
    ], [
        ['presenté', 'I presented'], ['presentaste', 'you presented'], ['presentó', 's/he presented'],
        ['presentamos', 'we presented'], ['presentaron', 'they presented'],
    ], [
        ['presentaba', 'I used to present'], ['presentabas', 'you used to present'], ['presentaba', 's/he used to present'],
        ['presentábamos', 'we used to present'], ['presentaban', 'they used to present'],
    ]),
    simpleVerb('crear', 'to create', [
        ['crear', 'to create'], ['creado', 'created'], ['creando', 'creating'],
    ], [
        ['creo', 'I create'], ['creas', 'you create'], ['crea', 's/he creates'],
        ['creamos', 'we create'], ['crean', 'they create'],
    ], [
        ['creé', 'I created'], ['creaste', 'you created'], ['creó', 's/he created'],
        ['creamos', 'we created'], ['crearon', 'they created'],
    ], [
        ['creaba', 'I used to create'], ['creabas', 'you used to create'], ['creaba', 's/he used to create'],
        ['creábamos', 'we used to create'], ['creaban', 'they used to create'],
    ]),
    simpleVerb('abrir', 'to open', [
        ['abrir', 'to open'], ['abierto', 'opened'], ['abriendo', 'opening'],
    ], [
        ['abro', 'I open'], ['abres', 'you open'], ['abre', 's/he opens'],
        ['abrimos', 'we open'], ['abren', 'they open'],
    ], [
        ['abrí', 'I opened'], ['abriste', 'you opened'], ['abrió', 's/he opened'],
        ['abrimos', 'we opened'], ['abrieron', 'they opened'],
    ], [
        ['abría', 'I used to open'], ['abrías', 'you used to open'], ['abría', 's/he used to open'],
        ['abríamos', 'we used to open'], ['abrían', 'they used to open'],
    ]),
    simpleVerb('considerar', 'to consider', [
        ['considerar', 'to consider'], ['considerado', 'considered'], ['considerando', 'considering'],
    ], [
        ['considero', 'I consider'], ['consideras', 'you consider'], ['considera', 's/he considers'],
        ['consideramos', 'we consider'], ['consideran', 'they consider'],
    ], [
        ['consideré', 'I considered'], ['consideraste', 'you considered'], ['consideró', 's/he considered'],
        ['consideramos', 'we considered'], ['consideraron', 'they considered'],
    ], [
        ['consideraba', 'I used to consider'], ['considerabas', 'you used to consider'], ['consideraba', 's/he used to consider'],
        ['considerábamos', 'we used to consider'], ['consideraban', 'they used to consider'],
    ]),
    simpleVerb('oír', 'to hear, to listen to', [
        ['oír', 'to hear'], ['oído', 'heard'], ['oyendo', 'hearing'],
    ], [
        ['oigo', 'I hear', true], ['oyes', 'you hear', true], ['oye', 's/he hears', true],
        ['oímos', 'we hear'], ['oyen', 'they hear', true],
    ], [
        ['oí', 'I heard'], ['oíste', 'you heard', true], ['oyó', 's/he heard', true],
        ['oímos', 'we heard'], ['oyeron', 'they heard', true],
    ], [
        ['oía', 'I used to hear'], ['oías', 'you used to hear'], ['oía', 's/he used to hear'],
        ['oíamos', 'we used to hear'], ['oían', 'they used to hear'],
    ]),
    simpleVerb('acabar', 'to finish, to end, to complete', [
        ['acabar', 'to finish'], ['acabado', 'finished'], ['acabando', 'finishing'],
    ], [
        ['acabo', 'I finish'], ['acabas', 'you finish'], ['acaba', 's/he finishes'],
        ['acabamos', 'we finish'], ['acaban', 'they finish'],
    ], [
        ['acabé', 'I finished'], ['acabaste', 'you finished'], ['acabó', 's/he finished'],
        ['acabamos', 'we finished'], ['acabaron', 'they finished'],
    ], [
        ['acababa', 'I used to finish'], ['acababas', 'you used to finish'], ['acababa', 's/he used to finish'],
        ['acabábamos', 'we used to finish'], ['acababan', 'they used to finish'],
    ]),
    simpleVerb('convertir', 'to convert', [
        ['convertir', 'to convert'], ['convertido', 'converted'], ['convirtiendo', 'converting'],
    ], [
        ['convierto', 'I convert', true], ['conviertes', 'you convert', true], ['convierte', 's/he converts', true],
        ['convertimos', 'we convert'], ['convierten', 'they convert', true],
    ], [
        ['convertí', 'I converted'], ['convertiste', 'you converted'], ['convirtió', 's/he converted', true],
        ['convertimos', 'we converted'], ['convirtieron', 'they converted', true],
    ], [
        ['convertía', 'I used to convert'], ['convertías', 'you used to convert'], ['convertía', 's/he used to convert'],
        ['convertíamos', 'we used to convert'], ['convertían', 'they used to convert'],
    ]),
    simpleVerb('ganar', 'to win, to gain, to earn', [
        ['ganar', 'to win'], ['ganado', 'won'], ['ganando', 'winning'],
    ], [
        ['gano', 'I win'], ['ganas', 'you win'], ['gana', 's/he wins'],
        ['ganamos', 'we win'], ['ganan', 'they win'],
    ], [
        ['gané', 'I won'], ['ganaste', 'you won'], ['ganó', 's/he won'],
        ['ganamos', 'we won'], ['ganaron', 'they won'],
    ], [
        ['ganaba', 'I used to win'], ['ganabas', 'you used to win'], ['ganaba', 's/he used to win'],
        ['ganábamos', 'we used to win'], ['ganaban', 'they used to win'],
    ]),
    simpleVerb('formar', 'to form, to make', [
        ['formar', 'to form'], ['formado', 'formed'], ['formando', 'forming'],
    ], [
        ['formo', 'I form'], ['formas', 'you form'], ['forma', 's/he forms'],
        ['formamos', 'we form'], ['forman', 'they form'],
    ], [
        ['formé', 'I formed'], ['formaste', 'you formed'], ['formó', 's/he formed'],
        ['formamos', 'we formed'], ['formaron', 'they formed'],
    ], [
        ['formaba', 'I used to form'], ['formabas', 'you used to form'], ['formaba', 's/he used to form'],
        ['formábamos', 'we used to form'], ['formaban', 'they used to form'],
    ]),
    simpleVerb('traer', 'to bring, to carry', [
        ['traer', 'to bring'], ['traído', 'brought'], ['trayendo', 'bringing'],
    ], [
        ['traigo', 'I bring', true], ['traes', 'you bring', true], ['trae', 's/he brings', true],
        ['traemos', 'we bring'], ['traen', 'they bring', true],
    ], [
        ['traje', 'I brought', true], ['trajiste', 'you brought', true], ['trajo', 's/he brought', true],
        ['trajimos', 'we brought', true], ['trajeron', 'they brought', true],
    ], [
        ['traía', 'I used to bring'], ['traías', 'you used to bring'], ['traía', 's/he used to bring'],
        ['traíamos', 'we used to bring'], ['traían', 'they used to bring'],
    ]),
    simpleVerb('partir', 'to split, to depart', [
        ['partir', 'to split'], ['partido', 'split'], ['partiendo', 'splitting'],
    ], [
        ['parto', 'I split'], ['partes', 'you split'], ['parte', 's/he splits'],
        ['partimos', 'we split'], ['parten', 'they split'],
    ], [
        ['partí', 'I split'], ['partiste', 'you split'], ['partió', 's/he split'],
        ['partimos', 'we split'], ['partieron', 'they split'],
    ], [
        ['partía', 'I used to split'], ['partías', 'you used to split'], ['partía', 's/he used to split'],
        ['partíamos', 'we used to split'], ['partían', 'they used to split'],
    ]),
    simpleVerb('morir', 'to die', [
        ['morir', 'to die'], ['muerto', 'died'], ['muriendo', 'dying'],
    ], [
        ['muero', 'I die', true], ['mueres', 'you die', true], ['muere', 's/he dies', true],
        ['morimos', 'we die'], ['mueren', 'they die', true],
    ], [
        ['morí', 'I died'], ['moriste', 'you died'], ['murió', 's/he died', true],
        ['morimos', 'we died'], ['murieron', 'they died', true],
    ], [
        ['moría', 'I used to die'], ['morías', 'you used to die'], ['moría', 's/he used to die'],
        ['moríamos', 'we used to die'], ['morían', 'they used to die'],
    ]),
    simpleVerb('aceptar', 'to accept', [
        ['aceptar', 'to accept'], ['aceptado', 'accepted'], ['aceptando', 'accepting'],
    ], [
        ['acepto', 'I accept'], ['aceptas', 'you accept'], ['acepta', 's/he accepts'],
        ['aceptamos', 'we accept'], ['aceptan', 'they accept'],
    ], [
        ['acepté', 'I accepted'], ['aceptaste', 'you accepted'], ['aceptó', 's/he accepted'],
        ['aceptamos', 'we accepted'], ['aceptaron', 'they accepted'],
    ], [
        ['aceptaba', 'I used to accept'], ['aceptabas', 'you used to accept'], ['aceptaba', 's/he used to accept'],
        ['aceptábamos', 'we used to accept'], ['aceptaban', 'they used to accept'],
    ]),
    simpleVerb('realizar', 'to perform, to carry out, to realize', [
        ['realizar', 'to perform'], ['realizado', 'performed'], ['realizando', 'performing'],
    ], [
        ['realizo', 'I perform'], ['realizas', 'you perform'], ['realiza', 's/he performs'],
        ['realizamos', 'we perform'], ['realizan', 'they perform'],
    ], [
        ['realicé', 'I performed', true], ['realizaste', 'you performed'], ['realizó', 's/he performed'],
        ['realizamos', 'we performed'], ['realizaron', 'they performed'],
    ], [
        ['realizaba', 'I used to perform'], ['realizabas', 'you used to perform'], ['realizaba', 's/he used to perform'],
        ['realizábamos', 'we used to perform'], ['realizaban', 'they used to perform'],
    ]),
    simpleVerb('suponer', 'to suppose, to guess', [
        ['suponer', 'to suppose'], ['supuesto', 'supposed'], ['suponiendo', 'supposing'],
    ], [
        ['supongo', 'I suppose', true], ['supones', 'you suppose'], ['supone', 's/he supposes'],
        ['suponemos', 'we suppose'], ['suponen', 'they suppose'],
    ], [
        ['supuse', 'I supposed', true], ['supusiste', 'you supposed'], ['supuso', 's/he supposed'],
        ['supusimos', 'we supposed'], ['supusieron', 'they supposed'],
    ], [
        ['suponía', 'I used to suppose'], ['suponías', 'you used to suppose'], ['suponía', 's/he used to suppose'],
        ['suponíamos', 'we used to suppose'], ['suponían', 'they used to suppose'],
    ]),
    simpleVerb('comprender', 'to comprehend, to understand', [
        ['comprender', 'to comprehend'], ['comprendido', 'comprehended'], ['comprendiendo', 'comprehending'],
    ], [
        ['comprendo', 'I comprehend'], ['comprendes', 'you comprehend'], ['comprende', 's/he comprehends'],
        ['comprendemos', 'we comprehend'], ['comprenden', 'they comprehend'],
    ], [
        ['comprendí', 'I comprehended'], ['comprendiste', 'you comprehended'], ['comprendió', 's/he comprehended'],
        ['comprendimos', 'we comprehended'], ['comprendieron', 'they comprehended'],
    ], [
        ['comprendía', 'I used to comprehend'], ['comprendías', 'you used to comprehend'], ['comprendía', 's/he used to comprehend'],
        ['comprendíamos', 'we used to comprehend'], ['comprendían', 'they used to comprehend'],
    ]),
    simpleVerb('lograr', 'to achieve, to accomplish', [
        ['lograr', 'to achieve'], ['logrado', 'achieved'], ['logrando', 'achieving'],
    ], [
        ['logro', 'I achieve'], ['logras', 'you achieve'], ['logra', 's/he achieves'],
        ['logramos', 'we achieve'], ['logran', 'they achieve'],
    ], [
        ['logré', 'I achieved'], ['lograste', 'you achieved'], ['logró', 's/he achieved'],
        ['logramos', 'we achieved'], ['lograron', 'they achieved'],
    ], [
        ['lograba', 'I used to achieve'], ['lograbas', 'you used to achieve'], ['lograba', 's/he used to achieve'],
        ['lográbamos', 'we used to achieve'], ['lograban', 'they used to achieve'],
    ]),
    simpleVerb('explicar', 'to explain', [
        ['explicar', 'to explain'], ['explicado', 'explained'], ['explicando', 'explaining'],
    ], [
        ['explico', 'I explain'], ['explicas', 'you explain'], ['explica', 's/he explains'],
        ['explicamos', 'we explain'], ['explican', 'they explain'],
    ], [
        ['expliqué', 'I explained', true], ['explicaste', 'you explained'], ['explicó', 's/he explained'],
        ['explicamos', 'we explained'], ['explicaron', 'they explained'],
    ], [
        ['explicaba', 'I used to explain'], ['explicabas', 'you used to explain'], ['explicaba', 's/he used to explain'],
        ['explicábamos', 'we used to explain'], ['explicaban', 'they used to explain'],
    ]),
    simpleVerb('preguntar', 'to ask, to question', [
        ['preguntar', 'to ask'], ['preguntado', 'asked'], ['preguntando', 'asking'],
    ], [
        ['pregunto', 'I ask'], ['preguntas', 'you ask'], ['pregunta', 's/he asks'],
        ['preguntamos', 'we ask'], ['preguntan', 'they ask'],
    ], [
        ['pregunté', 'I asked'], ['preguntaste', 'you asked'], ['preguntó', 's/he asked'],
        ['preguntamos', 'we asked'], ['preguntaron', 'they asked'],
    ], [
        ['preguntaba', 'I used to ask'], ['preguntabas', 'you used to ask'], ['preguntaba', 's/he used to ask'],
        ['preguntábamos', 'we used to ask'], ['preguntaban', 'they used to ask'],
    ]),
    simpleVerb('tocar', 'to play (an instrument), to touch', [
        ['tocar', 'to play, to touch'], ['tocado', 'played'], ['tocando', 'playing'],
    ], [
        ['toco', 'I play'], ['tocas', 'you play'], ['toca', 's/he plays'],
        ['tocamos', 'we play'], ['tocan', 'they play'],
    ], [
        ['toqué', 'I played', true], ['tocaste', 'you played'], ['tocó', 's/he played'],
        ['tocamos', 'we played'], ['tocaron', 'they played'],
    ], [
        ['tocaba', 'I used to play'], ['tocabas', 'you used to play'], ['tocaba', 's/he used to play'],
        ['tocábamos', 'we used to play'], ['tocaban', 'they used to play'],
    ]),
    simpleVerb('reconocer', 'to recognize', [
        ['reconocer', 'to recognize'], ['reconocido', 'recognized'], ['reconociendo', 'recognizing'],
    ], [
        ['reconozco', 'I recognize', true], ['reconoces', 'you recognize'], ['reconoce', 's/he recognizes'],
        ['reconocemos', 'we recognize'], ['reconocen', 'they recognize'],
    ], [
        ['reconocí', 'I recognized'], ['reconociste', 'you recognized'], ['reconoció', 's/he recognized'],
        ['reconocimos', 'we recognized'], ['reconocieron', 'they recognized'],
    ], [
        ['reconocía', 'I used to recognize'], ['reconocías', 'you used to recognize'], ['reconocía', 's/he used to recognize'],
        ['reconocíamos', 'we used to recognize'], ['reconocían', 'they used to recognize'],
    ]),
    simpleVerb('estudiar', 'to study', [
        ['estudiar', 'to study'], ['estudiado', 'studied'], ['estudiando', 'studying'],
    ], [
        ['estudio', 'I study'], ['estudias', 'you study'], ['estudia', 's/he studies'],
        ['estudiamos', 'we study'], ['estudian', 'they study'],
    ], [
        ['estudié', 'I studied'], ['estudiaste', 'you studied'], ['estudió', 's/he studied'],
        ['estudiamos', 'we studied'], ['estudiaron', 'they studied'],
    ], [
        ['estudiaba', 'I used to study'], ['estudiabas', 'you used to study'], ['estudiaba', 's/he used to study'],
        ['estudiábamos', 'we used to study'], ['estudiaban', 'they used to study'],
    ]),
    simpleVerb('alcanzar', 'to reach, to attain, to achieve', [
        ['alcanzar', 'to reach'], ['alcanzado', 'reached'], ['alcanzando', 'reaching'],
    ], [
        ['alcanzo', 'I reach'], ['alcanzas', 'you reach'], ['alcanza', 's/he reaches'],
        ['alcanzamos', 'we reach'], ['alcanzan', 'they reach'],
    ], [
        ['alcancé', 'I reached', true], ['alcanzaste', 'you reached'], ['alcanzó', 's/he reached'],
        ['alcanzamos', 'we reached'], ['alcanzaron', 'they reached'],
    ], [
        ['alcanzaba', 'I used to reach'], ['alcanzabas', 'you used to reach'], ['alcanzaba', 's/he used to reach'],
        ['alcanzábamos', 'we used to reach'], ['alcanzaban', 'they used to reach'],
    ]),
    simpleVerb('nacer', 'to be born', [
        ['nacer', 'to be born'], ['nacido', 'been born'], ['naciendo', 'being born'],
    ], [
        ['nazco', 'I am born', true], ['naces', 'you are born'], ['nace', 's/he is born'],
        ['nacemos', 'we are born'], ['nacen', 'they are born'],
    ], [
        ['nací', 'I was born'], ['naciste', 'you were born'], ['nació', 's/he was born'],
        ['nacimos', 'we were born'], ['nacieron', 'they were born'],
    ], [
        ['nacía', 'I used to be born'], ['nacías', 'you used to be born'], ['nacía', 's/he used to be born'],
        ['nacíamos', 'we used to be born'], ['nacían', 'they used to be born'],
    ]),
    simpleVerb('dirigir', 'to direct, to lead, to manage', [
        ['dirigir', 'to direct'], ['dirigido', 'directed'], ['dirigiendo', 'directing'],
    ], [
        ['dirijo', 'I direct', true], ['diriges', 'you direct'], ['dirige', 's/he directs'],
        ['dirigimos', 'we direct'], ['dirigen', 'they direct'],
    ], [
        ['dirigí', 'I directed'], ['dirigiste', 'you directed'], ['dirigió', 's/he directed'],
        ['dirigimos', 'we directed'], ['dirigieron', 'they directed'],
    ], [
        ['dirigía', 'I used to direct'], ['dirigías', 'you used to direct'], ['dirigía', 's/he used to direct'],
        ['dirigíamos', 'we used to direct'], ['dirigían', 'they used to direct'],
    ]),
    simpleVerb('correr', 'to run, to race', [
        ['correr', 'to run'], ['corrido', 'run'], ['corriendo', 'running'],
    ], [
        ['corro', 'I run'], ['corres', 'you run'], ['corre', 's/he runs'],
        ['corremos', 'we run'], ['corren', 'they run'],
    ], [
        ['corrí', 'I ran'], ['corriste', 'you ran'], ['corrió', 's/he ran'],
        ['corrimos', 'we ran'], ['corrieron', 'they ran'],
    ], [
        ['corría', 'I used to run'], ['corrías', 'you used to run'], ['corría', 's/he used to run'],
        ['corríamos', 'we used to run'], ['corrían', 'they used to run'],
    ]),
    simpleVerb('utilizar', 'to use, to utilize', [
        ['utilizar', 'to use'], ['utilizado', 'used'], ['utilizando', 'using'],
    ], [
        ['utilizo', 'I use'], ['utilizas', 'you use'], ['utiliza', 's/he uses'],
        ['utilizamos', 'we use'], ['utilizan', 'they use'],
    ], [
        ['utilicé', 'I used', true], ['utilizaste', 'you used'], ['utilizó', 's/he used'],
        ['utilizamos', 'we used'], ['utilizaron', 'they used'],
    ], [
        ['utilizaba', 'I used to use'], ['utilizabas', 'you used to use'], ['utilizaba', 's/he used to use'],
        ['utilizábamos', 'we used to use'], ['utilizaban', 'they used to use'],
    ]),
    simpleVerb('pagar', 'to pay (for)', [
        ['pagar', 'to pay'], ['pagado', 'paid'], ['pagando', 'paying'],
    ], [
        ['pago', 'I pay'], ['pagas', 'you pay'], ['paga', 's/he pays'],
        ['pagamos', 'we pay'], ['pagan', 'they pay'],
    ], [
        ['pagué', 'I paid', true], ['pagaste', 'you paid'], ['pagó', 's/he paid'],
        ['pagamos', 'we paid'], ['pagaron', 'they paid'],
    ], [
        ['pagaba', 'I used to pay'], ['pagabas', 'you used to pay'], ['pagaba', 's/he used to pay'],
        ['pagábamos', 'we used to pay'], ['pagaban', 'they used to pay'],
    ]),
    simpleVerb('ayudar', 'to help, to assist', [
        ['ayudar', 'to help'], ['ayudado', 'helped'], ['ayudando', 'helping'],
    ], [
        ['ayudo', 'I help'], ['ayudas', 'you help'], ['ayuda', 's/he helps'],
        ['ayudamos', 'we help'], ['ayudan', 'they help'],
    ], [
        ['ayudé', 'I helped'], ['ayudaste', 'you helped'], ['ayudó', 's/he helped'],
        ['ayudamos', 'we helped'], ['ayudaron', 'they helped'],
    ], [
        ['ayudaba', 'I used to help'], ['ayudabas', 'you used to help'], ['ayudaba', 's/he used to help'],
        ['ayudábamos', 'we used to help'], ['ayudaban', 'they used to help'],
    ]),
]

VERBS.push(...BULK_VERBS)

// TODO: verbs still requested (conjugations only — present/preterite/imperfect,
// same simpleVerb() format as above) but not yet added:
// costar, dibujar, cocinar, montar, manejar, caminar, comer, comprar, disfrutar,
// pintar, limpiar, desayunar, cantar, coger, elegir, llover, nevar, usar, fumar,
// parar, responder, odiar, preferir, llenar, visitar, parecer, acompañar,
// conversar, apagar, encender, deber, doler, descansar, cuidar (non-reflexive —
// cuidarse is already added), enviar, aprobar, beber, mandar, rezar, planear,
// reservar, regresar, llorar, satisfacer, romper, pescar, reparar, asar, repetir,
// completar, decidir, preparar, reunir, gastar


