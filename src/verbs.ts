
export type ConjugationEntry = { id: string; stem: string; ending: string }
export type ConjugationRow = { pronoun: string; cells: ConjugationEntry[] }
export type ConjugationScreen = { kind: 'conjugation'; label: string; description: string; verbs: string[]; rows: ConjugationRow[] }
// Shared labels — every verb's data is positional against these instead of repeating the labels per-verb.
export const VERB_PRONOUNS = ['Yo', 'Tú', 'Él / Usted', 'Nosotros', 'Ellos / Ustedes'] as const
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

export const VERBS: VerbEntry[] = [
    simpleVerb('ser', 'to be', [
        ['ser', 'to be (permanent)'], ['sido', 'been'], ['siendo', 'being'],
    ], [
        ['soy', 'I am', true], ['eres', 'you are', true], ['es', 's/he is', true], ['somos', 'we are', true], ['son', 'they are', true],
    ], [
        ['fui', 'I was', true], ['fuiste', 'you were', true], ['fue', 's/he was', true], ['fuimos', 'we were', true], ['fueron', 'they were', true],
    ], [
        ['era', 'I used to be', true], ['eras', 'you used to be', true], ['era', 's/he used to be', true], ['éramos', 'we used to be', true], ['eran', 'they used to be', true],
    ]),
    simpleVerb('estar', 'to be', [
        ['estar', 'to be (temporary)'], ['estado', 'been'], ['estando', 'being'],
    ], [
        ['estoy', 'I am', true], ['estás', 'you are', true], ['está', 's/he is', true], ['estamos', 'we are'], ['están', 'they are', true],
    ], [
        ['estuve', 'I was', true], ['estuviste', 'you were', true], ['estuvo', 's/he was', true], ['estuvimos', 'we were', true], ['estuvieron', 'they were', true],
    ], [
        ['estaba', 'I used to be'], ['estabas', 'you used to be'], ['estaba', 's/he used to be'], ['estábamos', 'we used to be'], ['estaban', 'they used to be'],
    ]),
    simpleVerb('tener', 'to have', [
        ['tener', 'to have'], ['tenido', 'had'], ['teniendo', 'having'],
    ], [
        ['tengo', 'I have', true], ['tienes', 'you have', true], ['tiene', 's/he has', true], ['tenemos', 'we have'], ['tienen', 'they have', true],
    ], [
        ['tuve', 'I had', true], ['tuviste', 'you had', true], ['tuvo', 's/he had', true], ['tuvimos', 'we had', true], ['tuvieron', 'they had', true],
    ], [
        ['tenía', 'I used to have'], ['tenías', 'you used to have'], ['tenía', 's/he used to have'], ['teníamos', 'we used to have'], ['tenían', 'they used to have'],
    ]),
    simpleVerb('ir', 'to go', [
        ['ir', 'to go'], ['ido', 'gone'], ['yendo', 'going'],
    ], [
        ['voy', 'I go', true], ['vas', 'you go', true], ['va', 's/he goes', true], ['vamos', 'we go', true], ['van', 'they go', true],
    ], [
        ['fui', 'I went', true], ['fuiste', 'you went', true], ['fue', 's/he went', true], ['fuimos', 'we went', true], ['fueron', 'they went', true],
    ], [
        ['iba', 'I used to go', true], ['ibas', 'you used to go', true], ['iba', 's/he used to go', true], ['íbamos', 'we used to go', true], ['iban', 'they used to go', true],
    ]),
    simpleVerb('hacer', 'to do, to make', [
        ['hacer', 'to do, to make'], ['hecho', 'done'], ['haciendo', 'doing'],
    ], [
        ['hago', 'I do', true], ['haces', 'you do', true], ['hace', 's/he does', true], ['hacemos', 'we do'], ['hacen', 'they do', true],
    ], [
        ['hice', 'I did', true], ['hiciste', 'you did', true], ['hizo', 's/he did', true], ['hicimos', 'we did', true], ['hicieron', 'they did', true],
    ], [
        ['hacía', 'I used to do'], ['hacías', 'you used to do'], ['hacía', 's/he used to do'], ['hacíamos', 'we used to do'], ['hacían', 'they used to do'],
    ]),
    simpleVerb('haber', 'to have (helper verb)', [
        ['haber', 'to have (helper verb)'], ['habido', 'had'], ['habiendo', 'having'],
    ], [
        ['he', 'I have', true], ['has', 'you have', true], ['ha', 's/he has', true], ['hemos', 'we have', true], ['han', 'they have', true],
    ], [
        ['hube', 'I had', true], ['hubiste', 'you had', true], ['hubo', 's/he had', true], ['hubimos', 'we had', true], ['hubieron', 'they had', true],
    ], [
        ['había', 'I had'], ['habías', 'you had'], ['había', 's/he had'], ['habíamos', 'we had'], ['habían', 'they had'],
    ]),
    simpleVerb('ver', 'to see, to watch', [
        ['ver', 'to see, to watch'], ['visto', 'seen'], ['viendo', 'seeing'],
    ], [
        ['veo', 'I see', true], ['ves', 'you see', true], ['ve', 's/he sees', true], ['vemos', 'we see'], ['ven', 'they see', true],
    ], [
        ['vi', 'I saw', true], ['viste', 'you saw', true], ['vio', 's/he saw', true], ['vimos', 'we saw', true], ['vieron', 'they saw', true],
    ], [
        ['veía', 'I used to see', true], ['veías', 'you used to see', true], ['veía', 's/he used to see', true], ['veíamos', 'we used to see', true], ['veían', 'they used to see', true],
    ]),
    simpleVerb('venir', 'to come', [
        ['venir', 'to come'], ['venido', 'come'], ['viniendo', 'coming'],
    ], [
        ['vengo', 'I come', true], ['vienes', 'you come', true], ['viene', 's/he comes', true], ['venimos', 'we come'], ['vienen', 'they come', true],
    ], [
        ['vine', 'I came', true], ['viniste', 'you came', true], ['vino', 's/he came', true], ['vinimos', 'we came', true], ['vinieron', 'they came', true],
    ], [
        ['venía', 'I used to come'], ['venías', 'you used to come'], ['venía', 's/he used to come'], ['veníamos', 'we used to come'], ['venían', 'they used to come'],
    ]),
    simpleVerb('vivir', 'to live', [
        ['vivir', 'to live'], ['vivido', 'lived'], ['viviendo', 'living'],
    ], [
        ['vivo', 'I live'], ['vives', 'you live'], ['vive', 's/he lives'], ['vivimos', 'we live'], ['viven', 'they live'],
    ], [
        ['viví', 'I lived'], ['viviste', 'you lived'], ['vivió', 's/he lived'], ['vivimos', 'we lived'], ['vivieron', 'they lived'],
    ], [
        ['vivía', 'I used to live'], ['vivías', 'you used to live'], ['vivía', 's/he used to live'], ['vivíamos', 'we used to live'], ['vivían', 'they used to live'],
    ]),
    simpleVerb('poder', 'to be able to / can', [
        ['poder', 'to be able to / can'], ['podido', 'been able to'], ['pudiendo', 'being able to'],
    ], [
        ['puedo', 'I am able to', true], ['puedes', 'you are able to', true], ['puede', 's/he is able to', true], ['podemos', 'we are able to'], ['pueden', 'they are able to', true],
    ], [
        ['pude', 'I was able to', true], ['pudiste', 'you were able to', true], ['pudo', 's/he was able to', true], ['pudimos', 'we were able to', true], ['pudieron', 'they were able to', true],
    ], [
        ['podía', 'I used to be able to'], ['podías', 'you used to be able to'], ['podía', 's/he used to be able to'], ['podíamos', 'we used to be able to'], ['podían', 'they used to be able to'],
    ]),
    simpleVerb('saber', 'to know (things)', [
        ['saber', 'to know (things)'], ['sabido', 'known'], ['sabiendo', 'knowing'],
    ], [
        ['sé', 'I know', true], ['sabes', 'you know'], ['sabe', 's/he knows'], ['sabemos', 'we know'], ['saben', 'they know'],
    ], [
        ['supe', 'I knew', true], ['supiste', 'you knew', true], ['supo', 's/he knew', true], ['supimos', 'we knew', true], ['supieron', 'they knew', true],
    ], [
        ['sabía', 'I used to know'], ['sabías', 'you used to know'], ['sabía', 's/he used to know'], ['sabíamos', 'we used to know'], ['sabían', 'they used to know'],
    ]),
    simpleVerb('decir', 'to say, to tell', [
        ['decir', 'to say, to tell'], ['dicho', 'said'], ['diciendo', 'saying'],
    ], [
        ['digo', 'I say', true], ['dices', 'you say', true], ['dice', 's/he says', true], ['decimos', 'we say'], ['dicen', 'they say', true],
    ], [
        ['dije', 'I said', true], ['dijiste', 'you said', true], ['dijo', 's/he said', true], ['dijimos', 'we said', true], ['dijeron', 'they said', true],
    ], [
        ['decía', 'I used to say'], ['decías', 'you used to say'], ['decía', 's/he used to say'], ['decíamos', 'we used to say'], ['decían', 'they used to say'],
    ]),
    simpleVerb('dar', 'to give', [
        ['dar', 'to give'], ['dado', 'given'], ['dando', 'giving'],
    ], [
        ['doy', 'I give', true], ['das', 'you give', true], ['da', 's/he gives', true], ['damos', 'we give'], ['dan', 'they give', true],
    ], [
        ['di', 'I gave', true], ['diste', 'you gave', true], ['dio', 's/he gave', true], ['dimos', 'we gave', true], ['dieron', 'they gave', true],
    ], [
        ['daba', 'I used to give'], ['dabas', 'you used to give'], ['daba', 's/he used to give'], ['dábamos', 'we used to give'], ['daban', 'they used to give'],
    ]),]

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
    simpleVerb('costar', 'to cost', [
        ['costar', 'to cost'], ['costado', 'cost'], ['costando', 'costing'],
    ], [
        ['cuesto', 'I cost', true], ['cuestas', 'you cost', true], ['cuesta', 's/he costs', true],
        ['costamos', 'we cost'], ['cuestan', 'they cost', true],
    ], [
        ['costé', 'I cost'], ['costaste', 'you cost'], ['costó', 's/he cost'],
        ['costamos', 'we cost'], ['costaron', 'they cost'],
    ], [
        ['costaba', 'I used to cost'], ['costabas', 'you used to cost'], ['costaba', 's/he used to cost'],
        ['costábamos', 'we used to cost'], ['costaban', 'they used to cost'],
    ]),
    simpleVerb('dibujar', 'to draw', [
        ['dibujar', 'to draw'], ['dibujado', 'drawn'], ['dibujando', 'drawing'],
    ], [
        ['dibujo', 'I draw'], ['dibujas', 'you draw'], ['dibuja', 's/he draws'],
        ['dibujamos', 'we draw'], ['dibujan', 'they draw'],
    ], [
        ['dibujé', 'I drew'], ['dibujaste', 'you drew'], ['dibujó', 's/he drew'],
        ['dibujamos', 'we drew'], ['dibujaron', 'they drew'],
    ], [
        ['dibujaba', 'I used to draw'], ['dibujabas', 'you used to draw'], ['dibujaba', 's/he used to draw'],
        ['dibujábamos', 'we used to draw'], ['dibujaban', 'they used to draw'],
    ]),
    simpleVerb('cocinar', 'to cook', [
        ['cocinar', 'to cook'], ['cocinado', 'cooked'], ['cocinando', 'cooking'],
    ], [
        ['cocino', 'I cook'], ['cocinas', 'you cook'], ['cocina', 's/he cooks'],
        ['cocinamos', 'we cook'], ['cocinan', 'they cook'],
    ], [
        ['cociné', 'I cooked'], ['cocinaste', 'you cooked'], ['cocinó', 's/he cooked'],
        ['cocinamos', 'we cooked'], ['cocinaron', 'they cooked'],
    ], [
        ['cocinaba', 'I used to cook'], ['cocinabas', 'you used to cook'], ['cocinaba', 's/he used to cook'],
        ['cocinábamos', 'we used to cook'], ['cocinaban', 'they used to cook'],
    ]),
    simpleVerb('montar', 'to ride, to mount, to assemble', [
        ['montar', 'to ride'], ['montado', 'ridden'], ['montando', 'riding'],
    ], [
        ['monto', 'I ride'], ['montas', 'you ride'], ['monta', 's/he rides'],
        ['montamos', 'we ride'], ['montan', 'they ride'],
    ], [
        ['monté', 'I rode'], ['montaste', 'you rode'], ['montó', 's/he rode'],
        ['montamos', 'we rode'], ['montaron', 'they rode'],
    ], [
        ['montaba', 'I used to ride'], ['montabas', 'you used to ride'], ['montaba', 's/he used to ride'],
        ['montábamos', 'we used to ride'], ['montaban', 'they used to ride'],
    ]),
    simpleVerb('manejar', 'to drive, to manage', [
        ['manejar', 'to drive'], ['manejado', 'driven'], ['manejando', 'driving'],
    ], [
        ['manejo', 'I drive'], ['manejas', 'you drive'], ['maneja', 's/he drives'],
        ['manejamos', 'we drive'], ['manejan', 'they drive'],
    ], [
        ['manejé', 'I drove'], ['manejaste', 'you drove'], ['manejó', 's/he drove'],
        ['manejamos', 'we drove'], ['manejaron', 'they drove'],
    ], [
        ['manejaba', 'I used to drive'], ['manejabas', 'you used to drive'], ['manejaba', 's/he used to drive'],
        ['manejábamos', 'we used to drive'], ['manejaban', 'they used to drive'],
    ]),
    simpleVerb('caminar', 'to walk', [
        ['caminar', 'to walk'], ['caminado', 'walked'], ['caminando', 'walking'],
    ], [
        ['camino', 'I walk'], ['caminas', 'you walk'], ['camina', 's/he walks'],
        ['caminamos', 'we walk'], ['caminan', 'they walk'],
    ], [
        ['caminé', 'I walked'], ['caminaste', 'you walked'], ['caminó', 's/he walked'],
        ['caminamos', 'we walked'], ['caminaron', 'they walked'],
    ], [
        ['caminaba', 'I used to walk'], ['caminabas', 'you used to walk'], ['caminaba', 's/he used to walk'],
        ['caminábamos', 'we used to walk'], ['caminaban', 'they used to walk'],
    ]),
    simpleVerb('comer', 'to eat', [
        ['comer', 'to eat'], ['comido', 'eaten'], ['comiendo', 'eating'],
    ], [
        ['como', 'I eat'], ['comes', 'you eat'], ['come', 's/he eats'],
        ['comemos', 'we eat'], ['comen', 'they eat'],
    ], [
        ['comí', 'I ate'], ['comiste', 'you ate'], ['comió', 's/he ate'],
        ['comimos', 'we ate'], ['comieron', 'they ate'],
    ], [
        ['comía', 'I used to eat'], ['comías', 'you used to eat'], ['comía', 's/he used to eat'],
        ['comíamos', 'we used to eat'], ['comían', 'they used to eat'],
    ]),
    simpleVerb('comprar', 'to buy', [
        ['comprar', 'to buy'], ['comprado', 'bought'], ['comprando', 'buying'],
    ], [
        ['compro', 'I buy'], ['compras', 'you buy'], ['compra', 's/he buys'],
        ['compramos', 'we buy'], ['compran', 'they buy'],
    ], [
        ['compré', 'I bought'], ['compraste', 'you bought'], ['compró', 's/he bought'],
        ['compramos', 'we bought'], ['compraron', 'they bought'],
    ], [
        ['compraba', 'I used to buy'], ['comprabas', 'you used to buy'], ['compraba', 's/he used to buy'],
        ['comprábamos', 'we used to buy'], ['compraban', 'they used to buy'],
    ]),
    simpleVerb('disfrutar', 'to enjoy', [
        ['disfrutar', 'to enjoy'], ['disfrutado', 'enjoyed'], ['disfrutando', 'enjoying'],
    ], [
        ['disfruto', 'I enjoy'], ['disfrutas', 'you enjoy'], ['disfruta', 's/he enjoys'],
        ['disfrutamos', 'we enjoy'], ['disfrutan', 'they enjoy'],
    ], [
        ['disfruté', 'I enjoyed'], ['disfrutaste', 'you enjoyed'], ['disfrutó', 's/he enjoyed'],
        ['disfrutamos', 'we enjoyed'], ['disfrutaron', 'they enjoyed'],
    ], [
        ['disfrutaba', 'I used to enjoy'], ['disfrutabas', 'you used to enjoy'], ['disfrutaba', 's/he used to enjoy'],
        ['disfrutábamos', 'we used to enjoy'], ['disfrutaban', 'they used to enjoy'],
    ]),
    simpleVerb('pintar', 'to paint', [
        ['pintar', 'to paint'], ['pintado', 'painted'], ['pintando', 'painting'],
    ], [
        ['pinto', 'I paint'], ['pintas', 'you paint'], ['pinta', 's/he paints'],
        ['pintamos', 'we paint'], ['pintan', 'they paint'],
    ], [
        ['pinté', 'I painted'], ['pintaste', 'you painted'], ['pintó', 's/he painted'],
        ['pintamos', 'we painted'], ['pintaron', 'they painted'],
    ], [
        ['pintaba', 'I used to paint'], ['pintabas', 'you used to paint'], ['pintaba', 's/he used to paint'],
        ['pintábamos', 'we used to paint'], ['pintaban', 'they used to paint'],
    ]),
    simpleVerb('limpiar', 'to clean', [
        ['limpiar', 'to clean'], ['limpiado', 'cleaned'], ['limpiando', 'cleaning'],
    ], [
        ['limpio', 'I clean'], ['limpias', 'you clean'], ['limpia', 's/he cleans'],
        ['limpiamos', 'we clean'], ['limpian', 'they clean'],
    ], [
        ['limpié', 'I cleaned'], ['limpiaste', 'you cleaned'], ['limpió', 's/he cleaned'],
        ['limpiamos', 'we cleaned'], ['limpiaron', 'they cleaned'],
    ], [
        ['limpiaba', 'I used to clean'], ['limpiabas', 'you used to clean'], ['limpiaba', 's/he used to clean'],
        ['limpiábamos', 'we used to clean'], ['limpiaban', 'they used to clean'],
    ]),
    simpleVerb('desayunar', 'to have breakfast', [
        ['desayunar', 'to have breakfast'], ['desayunado', 'had breakfast'], ['desayunando', 'having breakfast'],
    ], [
        ['desayuno', 'I have breakfast'], ['desayunas', 'you have breakfast'], ['desayuna', 's/he has breakfast'],
        ['desayunamos', 'we have breakfast'], ['desayunan', 'they have breakfast'],
    ], [
        ['desayuné', 'I had breakfast'], ['desayunaste', 'you had breakfast'], ['desayunó', 's/he had breakfast'],
        ['desayunamos', 'we had breakfast'], ['desayunaron', 'they had breakfast'],
    ], [
        ['desayunaba', 'I used to have breakfast'], ['desayunabas', 'you used to have breakfast'], ['desayunaba', 's/he used to have breakfast'],
        ['desayunábamos', 'we used to have breakfast'], ['desayunaban', 'they used to have breakfast'],
    ]),
    simpleVerb('cantar', 'to sing', [
        ['cantar', 'to sing'], ['cantado', 'sung'], ['cantando', 'singing'],
    ], [
        ['canto', 'I sing'], ['cantas', 'you sing'], ['canta', 's/he sings'],
        ['cantamos', 'we sing'], ['cantan', 'they sing'],
    ], [
        ['canté', 'I sang'], ['cantaste', 'you sang'], ['cantó', 's/he sang'],
        ['cantamos', 'we sang'], ['cantaron', 'they sang'],
    ], [
        ['cantaba', 'I used to sing'], ['cantabas', 'you used to sing'], ['cantaba', 's/he used to sing'],
        ['cantábamos', 'we used to sing'], ['cantaban', 'they used to sing'],
    ]),
    simpleVerb('coger', 'to take, to catch, to grab', [
        ['coger', 'to take'], ['cogido', 'taken'], ['cogiendo', 'taking'],
    ], [
        ['cojo', 'I take', true], ['coges', 'you take'], ['coge', 's/he takes'],
        ['cogemos', 'we take'], ['cogen', 'they take'],
    ], [
        ['cogí', 'I took'], ['cogiste', 'you took'], ['cogió', 's/he took'],
        ['cogimos', 'we took'], ['cogieron', 'they took'],
    ], [
        ['cogía', 'I used to take'], ['cogías', 'you used to take'], ['cogía', 's/he used to take'],
        ['cogíamos', 'we used to take'], ['cogían', 'they used to take'],
    ]),
    simpleVerb('elegir', 'to choose, to elect', [
        ['elegir', 'to choose'], ['elegido', 'chosen'], ['eligiendo', 'choosing'],
    ], [
        ['elijo', 'I choose', true], ['eliges', 'you choose', true], ['elige', 's/he chooses', true],
        ['elegimos', 'we choose'], ['eligen', 'they choose', true],
    ], [
        ['elegí', 'I chose'], ['elegiste', 'you chose'], ['eligió', 's/he chose', true],
        ['elegimos', 'we chose'], ['eligieron', 'they chose', true],
    ], [
        ['elegía', 'I used to choose'], ['elegías', 'you used to choose'], ['elegía', 's/he used to choose'],
        ['elegíamos', 'we used to choose'], ['elegían', 'they used to choose'],
    ]),
    simpleVerb('llover', 'to rain', [
        ['llover', 'to rain'], ['llovido', 'rained'], ['lloviendo', 'raining'],
    ], [
        ['lluevo', 'I rain', true], ['llueves', 'you rain', true], ['llueve', 's/he rains', true],
        ['llovemos', 'we rain'], ['llueven', 'they rain', true],
    ], [
        ['lloví', 'I rained'], ['lloviste', 'you rained'], ['llovió', 's/he rained'],
        ['llovimos', 'we rained'], ['llovieron', 'they rained'],
    ], [
        ['llovía', 'I used to rain'], ['llovías', 'you used to rain'], ['llovía', 's/he used to rain'],
        ['llovíamos', 'we used to rain'], ['llovían', 'they used to rain'],
    ]),
    simpleVerb('nevar', 'to snow', [
        ['nevar', 'to snow'], ['nevado', 'snowed'], ['nevando', 'snowing'],
    ], [
        ['nievo', 'I snow', true], ['nievas', 'you snow', true], ['nieva', 's/he snows', true],
        ['nevamos', 'we snow'], ['nievan', 'they snow', true],
    ], [
        ['nevé', 'I snowed'], ['nevaste', 'you snowed'], ['nevó', 's/he snowed'],
        ['nevamos', 'we snowed'], ['nevaron', 'they snowed'],
    ], [
        ['nevaba', 'I used to snow'], ['nevabas', 'you used to snow'], ['nevaba', 's/he used to snow'],
        ['nevábamos', 'we used to snow'], ['nevaban', 'they used to snow'],
    ]),
    simpleVerb('usar', 'to use', [
        ['usar', 'to use'], ['usado', 'used'], ['usando', 'using'],
    ], [
        ['uso', 'I use'], ['usas', 'you use'], ['usa', 's/he uses'],
        ['usamos', 'we use'], ['usan', 'they use'],
    ], [
        ['usé', 'I used'], ['usaste', 'you used'], ['usó', 's/he used'],
        ['usamos', 'we used'], ['usaron', 'they used'],
    ], [
        ['usaba', 'I used to use'], ['usabas', 'you used to use'], ['usaba', 's/he used to use'],
        ['usábamos', 'we used to use'], ['usaban', 'they used to use'],
    ]),
    simpleVerb('fumar', 'to smoke', [
        ['fumar', 'to smoke'], ['fumado', 'smoked'], ['fumando', 'smoking'],
    ], [
        ['fumo', 'I smoke'], ['fumas', 'you smoke'], ['fuma', 's/he smokes'],
        ['fumamos', 'we smoke'], ['fuman', 'they smoke'],
    ], [
        ['fumé', 'I smoked'], ['fumaste', 'you smoked'], ['fumó', 's/he smoked'],
        ['fumamos', 'we smoked'], ['fumaron', 'they smoked'],
    ], [
        ['fumaba', 'I used to smoke'], ['fumabas', 'you used to smoke'], ['fumaba', 's/he used to smoke'],
        ['fumábamos', 'we used to smoke'], ['fumaban', 'they used to smoke'],
    ]),
    simpleVerb('parar', 'to stop', [
        ['parar', 'to stop'], ['parado', 'stopped'], ['parando', 'stopping'],
    ], [
        ['paro', 'I stop'], ['paras', 'you stop'], ['para', 's/he stops'],
        ['paramos', 'we stop'], ['paran', 'they stop'],
    ], [
        ['paré', 'I stopped'], ['paraste', 'you stopped'], ['paró', 's/he stopped'],
        ['paramos', 'we stopped'], ['pararon', 'they stopped'],
    ], [
        ['paraba', 'I used to stop'], ['parabas', 'you used to stop'], ['paraba', 's/he used to stop'],
        ['parábamos', 'we used to stop'], ['paraban', 'they used to stop'],
    ]),
    simpleVerb('responder', 'to answer, to respond', [
        ['responder', 'to answer'], ['respondido', 'answered'], ['respondiendo', 'answering'],
    ], [
        ['respondo', 'I answer'], ['respondes', 'you answer'], ['responde', 's/he answers'],
        ['respondemos', 'we answer'], ['responden', 'they answer'],
    ], [
        ['respondí', 'I answered'], ['respondiste', 'you answered'], ['respondió', 's/he answered'],
        ['respondimos', 'we answered'], ['respondieron', 'they answered'],
    ], [
        ['respondía', 'I used to answer'], ['respondías', 'you used to answer'], ['respondía', 's/he used to answer'],
        ['respondíamos', 'we used to answer'], ['respondían', 'they used to answer'],
    ]),
    simpleVerb('odiar', 'to hate', [
        ['odiar', 'to hate'], ['odiado', 'hated'], ['odiando', 'hating'],
    ], [
        ['odio', 'I hate'], ['odias', 'you hate'], ['odia', 's/he hates'],
        ['odiamos', 'we hate'], ['odian', 'they hate'],
    ], [
        ['odié', 'I hated'], ['odiaste', 'you hated'], ['odió', 's/he hated'],
        ['odiamos', 'we hated'], ['odiaron', 'they hated'],
    ], [
        ['odiaba', 'I used to hate'], ['odiabas', 'you used to hate'], ['odiaba', 's/he used to hate'],
        ['odiábamos', 'we used to hate'], ['odiaban', 'they used to hate'],
    ]),
    simpleVerb('preferir', 'to prefer', [
        ['preferir', 'to prefer'], ['preferido', 'preferred'], ['prefiriendo', 'preferring'],
    ], [
        ['prefiero', 'I prefer', true], ['prefieres', 'you prefer', true], ['prefiere', 's/he prefers', true],
        ['preferimos', 'we prefer'], ['prefieren', 'they prefer', true],
    ], [
        ['preferí', 'I preferred'], ['preferiste', 'you preferred'], ['prefirió', 's/he preferred', true],
        ['preferimos', 'we preferred'], ['prefirieron', 'they preferred', true],
    ], [
        ['prefería', 'I used to prefer'], ['preferías', 'you used to prefer'], ['prefería', 's/he used to prefer'],
        ['preferíamos', 'we used to prefer'], ['preferían', 'they used to prefer'],
    ]),
    simpleVerb('llenar', 'to fill', [
        ['llenar', 'to fill'], ['llenado', 'filled'], ['llenando', 'filling'],
    ], [
        ['lleno', 'I fill'], ['llenas', 'you fill'], ['llena', 's/he fills'],
        ['llenamos', 'we fill'], ['llenan', 'they fill'],
    ], [
        ['llené', 'I filled'], ['llenaste', 'you filled'], ['llenó', 's/he filled'],
        ['llenamos', 'we filled'], ['llenaron', 'they filled'],
    ], [
        ['llenaba', 'I used to fill'], ['llenabas', 'you used to fill'], ['llenaba', 's/he used to fill'],
        ['llenábamos', 'we used to fill'], ['llenaban', 'they used to fill'],
    ]),
    simpleVerb('visitar', 'to visit', [
        ['visitar', 'to visit'], ['visitado', 'visited'], ['visitando', 'visiting'],
    ], [
        ['visito', 'I visit'], ['visitas', 'you visit'], ['visita', 's/he visits'],
        ['visitamos', 'we visit'], ['visitan', 'they visit'],
    ], [
        ['visité', 'I visited'], ['visitaste', 'you visited'], ['visitó', 's/he visited'],
        ['visitamos', 'we visited'], ['visitaron', 'they visited'],
    ], [
        ['visitaba', 'I used to visit'], ['visitabas', 'you used to visit'], ['visitaba', 's/he used to visit'],
        ['visitábamos', 'we used to visit'], ['visitaban', 'they used to visit'],
    ]),
    simpleVerb('parecer', 'to seem, to appear', [
        ['parecer', 'to seem'], ['parecido', 'seemed'], ['pareciendo', 'seeming'],
    ], [
        ['parezco', 'I seem', true], ['pareces', 'you seem'], ['parece', 's/he seems'],
        ['parecemos', 'we seem'], ['parecen', 'they seem'],
    ], [
        ['parecí', 'I seemed'], ['pareciste', 'you seemed'], ['pareció', 's/he seemed'],
        ['parecimos', 'we seemed'], ['parecieron', 'they seemed'],
    ], [
        ['parecía', 'I used to seem'], ['parecías', 'you used to seem'], ['parecía', 's/he used to seem'],
        ['parecíamos', 'we used to seem'], ['parecían', 'they used to seem'],
    ]),
    simpleVerb('acompañar', 'to accompany', [
        ['acompañar', 'to accompany'], ['acompañado', 'accompanied'], ['acompañando', 'accompanying'],
    ], [
        ['acompaño', 'I accompany'], ['acompañas', 'you accompany'], ['acompaña', 's/he accompanies'],
        ['acompañamos', 'we accompany'], ['acompañan', 'they accompany'],
    ], [
        ['acompañé', 'I accompanied'], ['acompañaste', 'you accompanied'], ['acompañó', 's/he accompanied'],
        ['acompañamos', 'we accompanied'], ['acompañaron', 'they accompanied'],
    ], [
        ['acompañaba', 'I used to accompany'], ['acompañabas', 'you used to accompany'], ['acompañaba', 's/he used to accompany'],
        ['acompañábamos', 'we used to accompany'], ['acompañaban', 'they used to accompany'],
    ]),
    simpleVerb('conversar', 'to converse, to chat', [
        ['conversar', 'to converse'], ['conversado', 'conversed'], ['conversando', 'conversing'],
    ], [
        ['converso', 'I converse'], ['conversas', 'you converse'], ['conversa', 's/he converses'],
        ['conversamos', 'we converse'], ['conversan', 'they converse'],
    ], [
        ['conversé', 'I conversed'], ['conversaste', 'you conversed'], ['conversó', 's/he conversed'],
        ['conversamos', 'we conversed'], ['conversaron', 'they conversed'],
    ], [
        ['conversaba', 'I used to converse'], ['conversabas', 'you used to converse'], ['conversaba', 's/he used to converse'],
        ['conversábamos', 'we used to converse'], ['conversaban', 'they used to converse'],
    ]),
    simpleVerb('apagar', 'to turn off, to extinguish', [
        ['apagar', 'to turn off'], ['apagado', 'turned off'], ['apagando', 'turning off'],
    ], [
        ['apago', 'I turn off'], ['apagas', 'you turn off'], ['apaga', 's/he turns off'],
        ['apagamos', 'we turn off'], ['apagan', 'they turn off'],
    ], [
        ['apagué', 'I turned off', true], ['apagaste', 'you turned off'], ['apagó', 's/he turned off'],
        ['apagamos', 'we turned off'], ['apagaron', 'they turned off'],
    ], [
        ['apagaba', 'I used to turn off'], ['apagabas', 'you used to turn off'], ['apagaba', 's/he used to turn off'],
        ['apagábamos', 'we used to turn off'], ['apagaban', 'they used to turn off'],
    ]),
    simpleVerb('encender', 'to turn on, to light', [
        ['encender', 'to turn on'], ['encendido', 'turned on'], ['encendiendo', 'turning on'],
    ], [
        ['enciendo', 'I turn on', true], ['enciendes', 'you turn on', true], ['enciende', 's/he turns on', true],
        ['encendemos', 'we turn on'], ['encienden', 'they turn on', true],
    ], [
        ['encendí', 'I turned on'], ['encendiste', 'you turned on'], ['encendió', 's/he turned on'],
        ['encendimos', 'we turned on'], ['encendieron', 'they turned on'],
    ], [
        ['encendía', 'I used to turn on'], ['encendías', 'you used to turn on'], ['encendía', 's/he used to turn on'],
        ['encendíamos', 'we used to turn on'], ['encendían', 'they used to turn on'],
    ]),
    simpleVerb('deber', 'should, to owe, must', [
        ['deber', 'should, must'], ['debido', 'owed'], ['debiendo', 'owing'],
    ], [
        ['debo', 'I should'], ['debes', 'you should'], ['debe', 's/he should'],
        ['debemos', 'we should'], ['deben', 'they should'],
    ], [
        ['debí', 'I should have'], ['debiste', 'you should have'], ['debió', 's/he should have'],
        ['debimos', 'we should have'], ['debieron', 'they should have'],
    ], [
        ['debía', 'I was supposed to'], ['debías', 'you were supposed to'], ['debía', 's/he was supposed to'],
        ['debíamos', 'we were supposed to'], ['debían', 'they were supposed to'],
    ]),
    simpleVerb('doler', 'to hurt, to ache', [
        ['doler', 'to hurt'], ['dolido', 'hurt'], ['doliendo', 'hurting'],
    ], [
        ['me duele / me duelen', 'it hurts me'], ['te duele / te duelen', 'it hurts you'], ['le duele / le duelen', 's/he feels pain'],
        ['nos duele / nos duelen', 'it hurts us'], ['les duele / les duelen', 'it hurts them'],
    ], [
        ['me dolió / me dolieron', 'it hurt me'], ['te dolió / te dolieron', 'it hurt you'], ['le dolió / le dolieron', 's/he felt pain'],
        ['nos dolió / nos dolieron', 'it hurt us'], ['les dolió / les dolieron', 'it hurt them'],
    ], [
        ['me dolía / me dolían', 'it used to hurt me'], ['te dolía / te dolían', 'it used to hurt you'], ['le dolía / le dolían', 's/he used to feel pain'],
        ['nos dolía / nos dolían', 'it used to hurt us'], ['les dolía / les dolían', 'it used to hurt them'],
    ]),
    simpleVerb('descansar', 'to rest', [
        ['descansar', 'to rest'], ['descansado', 'rested'], ['descansando', 'resting'],
    ], [
        ['descanso', 'I rest'], ['descansas', 'you rest'], ['descansa', 's/he rests'],
        ['descansamos', 'we rest'], ['descansan', 'they rest'],
    ], [
        ['descansé', 'I rested'], ['descansaste', 'you rested'], ['descansó', 's/he rested'],
        ['descansamos', 'we rested'], ['descansaron', 'they rested'],
    ], [
        ['descansaba', 'I used to rest'], ['descansabas', 'you used to rest'], ['descansaba', 's/he used to rest'],
        ['descansábamos', 'we used to rest'], ['descansaban', 'they used to rest'],
    ]),
    simpleVerb('cuidar', 'to take care of, to look after', [
        ['cuidar', 'to take care of'], ['cuidado', 'taken care of'], ['cuidando', 'taking care of'],
    ], [
        ['cuido', 'I take care of'], ['cuidas', 'you take care of'], ['cuida', 's/he takes care of'],
        ['cuidamos', 'we take care of'], ['cuidan', 'they take care of'],
    ], [
        ['cuidé', 'I took care of'], ['cuidaste', 'you took care of'], ['cuidó', 's/he took care of'],
        ['cuidamos', 'we took care of'], ['cuidaron', 'they took care of'],
    ], [
        ['cuidaba', 'I used to take care of'], ['cuidabas', 'you used to take care of'], ['cuidaba', 's/he used to take care of'],
        ['cuidábamos', 'we used to take care of'], ['cuidaban', 'they used to take care of'],
    ]),
    simpleVerb('enviar', 'to send', [
        ['enviar', 'to send'], ['enviado', 'sent'], ['enviando', 'sending'],
    ], [
        ['envío', 'I send', true], ['envías', 'you send', true], ['envía', 's/he sends', true],
        ['enviamos', 'we send'], ['envían', 'they send', true],
    ], [
        ['envié', 'I sent'], ['enviaste', 'you sent'], ['envió', 's/he sent'],
        ['enviamos', 'we sent'], ['enviaron', 'they sent'],
    ], [
        ['enviaba', 'I used to send'], ['enviabas', 'you used to send'], ['enviaba', 's/he used to send'],
        ['enviábamos', 'we used to send'], ['enviaban', 'they used to send'],
    ]),
    simpleVerb('aprobar', 'to pass (an exam), to approve', [
        ['aprobar', 'to pass'], ['aprobado', 'passed'], ['aprobando', 'passing'],
    ], [
        ['apruebo', 'I pass', true], ['apruebas', 'you pass', true], ['aprueba', 's/he passes', true],
        ['aprobamos', 'we pass'], ['aprueban', 'they pass', true],
    ], [
        ['aprobé', 'I passed'], ['aprobaste', 'you passed'], ['aprobó', 's/he passed'],
        ['aprobamos', 'we passed'], ['aprobaron', 'they passed'],
    ], [
        ['aprobaba', 'I used to pass'], ['aprobabas', 'you used to pass'], ['aprobaba', 's/he used to pass'],
        ['aprobábamos', 'we used to pass'], ['aprobaban', 'they used to pass'],
    ]),
    simpleVerb('beber', 'to drink', [
        ['beber', 'to drink'], ['bebido', 'drunk'], ['bebiendo', 'drinking'],
    ], [
        ['bebo', 'I drink'], ['bebes', 'you drink'], ['bebe', 's/he drinks'],
        ['bebemos', 'we drink'], ['beben', 'they drink'],
    ], [
        ['bebí', 'I drank'], ['bebiste', 'you drank'], ['bebió', 's/he drank'],
        ['bebimos', 'we drank'], ['bebieron', 'they drank'],
    ], [
        ['bebía', 'I used to drink'], ['bebías', 'you used to drink'], ['bebía', 's/he used to drink'],
        ['bebíamos', 'we used to drink'], ['bebían', 'they used to drink'],
    ]),
    simpleVerb('mandar', 'to send, to order', [
        ['mandar', 'to send'], ['mandado', 'sent'], ['mandando', 'sending'],
    ], [
        ['mando', 'I send'], ['mandas', 'you send'], ['manda', 's/he sends'],
        ['mandamos', 'we send'], ['mandan', 'they send'],
    ], [
        ['mandé', 'I sent'], ['mandaste', 'you sent'], ['mandó', 's/he sent'],
        ['mandamos', 'we sent'], ['mandaron', 'they sent'],
    ], [
        ['mandaba', 'I used to send'], ['mandabas', 'you used to send'], ['mandaba', 's/he used to send'],
        ['mandábamos', 'we used to send'], ['mandaban', 'they used to send'],
    ]),
    simpleVerb('rezar', 'to pray', [
        ['rezar', 'to pray'], ['rezado', 'prayed'], ['rezando', 'praying'],
    ], [
        ['rezo', 'I pray'], ['rezas', 'you pray'], ['reza', 's/he prays'],
        ['rezamos', 'we pray'], ['rezan', 'they pray'],
    ], [
        ['recé', 'I prayed', true], ['rezaste', 'you prayed'], ['rezó', 's/he prayed'],
        ['rezamos', 'we prayed'], ['rezaron', 'they prayed'],
    ], [
        ['rezaba', 'I used to pray'], ['rezabas', 'you used to pray'], ['rezaba', 's/he used to pray'],
        ['rezábamos', 'we used to pray'], ['rezaban', 'they used to pray'],
    ]),
    simpleVerb('planear', 'to plan', [
        ['planear', 'to plan'], ['planeado', 'planned'], ['planeando', 'planning'],
    ], [
        ['planeo', 'I plan'], ['planeas', 'you plan'], ['planea', 's/he plans'],
        ['planeamos', 'we plan'], ['planean', 'they plan'],
    ], [
        ['planeé', 'I planned'], ['planeaste', 'you planned'], ['planeó', 's/he planned'],
        ['planeamos', 'we planned'], ['planearon', 'they planned'],
    ], [
        ['planeaba', 'I used to plan'], ['planeabas', 'you used to plan'], ['planeaba', 's/he used to plan'],
        ['planeábamos', 'we used to plan'], ['planeaban', 'they used to plan'],
    ]),
    simpleVerb('reservar', 'to reserve, to book', [
        ['reservar', 'to reserve'], ['reservado', 'reserved'], ['reservando', 'reserving'],
    ], [
        ['reservo', 'I reserve'], ['reservas', 'you reserve'], ['reserva', 's/he reserves'],
        ['reservamos', 'we reserve'], ['reservan', 'they reserve'],
    ], [
        ['reservé', 'I reserved'], ['reservaste', 'you reserved'], ['reservó', 's/he reserved'],
        ['reservamos', 'we reserved'], ['reservaron', 'they reserved'],
    ], [
        ['reservaba', 'I used to reserve'], ['reservabas', 'you used to reserve'], ['reservaba', 's/he used to reserve'],
        ['reservábamos', 'we used to reserve'], ['reservaban', 'they used to reserve'],
    ]),
    simpleVerb('regresar', 'to return, to go back', [
        ['regresar', 'to return'], ['regresado', 'returned'], ['regresando', 'returning'],
    ], [
        ['regreso', 'I return'], ['regresas', 'you return'], ['regresa', 's/he returns'],
        ['regresamos', 'we return'], ['regresan', 'they return'],
    ], [
        ['regresé', 'I returned'], ['regresaste', 'you returned'], ['regresó', 's/he returned'],
        ['regresamos', 'we returned'], ['regresaron', 'they returned'],
    ], [
        ['regresaba', 'I used to return'], ['regresabas', 'you used to return'], ['regresaba', 's/he used to return'],
        ['regresábamos', 'we used to return'], ['regresaban', 'they used to return'],
    ]),
    simpleVerb('llorar', 'to cry', [
        ['llorar', 'to cry'], ['llorado', 'cried'], ['llorando', 'crying'],
    ], [
        ['lloro', 'I cry'], ['lloras', 'you cry'], ['llora', 's/he cries'],
        ['lloramos', 'we cry'], ['lloran', 'they cry'],
    ], [
        ['lloré', 'I cried'], ['lloraste', 'you cried'], ['lloró', 's/he cried'],
        ['lloramos', 'we cried'], ['lloraron', 'they cried'],
    ], [
        ['lloraba', 'I used to cry'], ['llorabas', 'you used to cry'], ['lloraba', 's/he used to cry'],
        ['llorábamos', 'we used to cry'], ['lloraban', 'they used to cry'],
    ]),
    simpleVerb('satisfacer', 'to satisfy', [
        ['satisfacer', 'to satisfy'], ['satisfecho', 'satisfied'], ['satisfaciendo', 'satisfying'],
    ], [
        ['satisfago', 'I satisfy', true], ['satisfaces', 'you satisfy', true], ['satisface', 's/he satisfies', true],
        ['satisfacemos', 'we satisfy'], ['satisfacen', 'they satisfy', true],
    ], [
        ['satisfice', 'I satisfied', true], ['satisficiste', 'you satisfied', true], ['satisfizo', 's/he satisfied', true],
        ['satisficimos', 'we satisfied', true], ['satisficieron', 'they satisfied', true],
    ], [
        ['satisfacía', 'I used to satisfy'], ['satisfacías', 'you used to satisfy'], ['satisfacía', 's/he used to satisfy'],
        ['satisfacíamos', 'we used to satisfy'], ['satisfacían', 'they used to satisfy'],
    ]),
    simpleVerb('romper', 'to break', [
        ['romper', 'to break'], ['roto', 'broken'], ['rompiendo', 'breaking'],
    ], [
        ['rompo', 'I break'], ['rompes', 'you break'], ['rompe', 's/he breaks'],
        ['rompemos', 'we break'], ['rompen', 'they break'],
    ], [
        ['rompí', 'I broke'], ['rompiste', 'you broke'], ['rompió', 's/he broke'],
        ['rompimos', 'we broke'], ['rompieron', 'they broke'],
    ], [
        ['rompía', 'I used to break'], ['rompías', 'you used to break'], ['rompía', 's/he used to break'],
        ['rompíamos', 'we used to break'], ['rompían', 'they used to break'],
    ]),
    simpleVerb('pescar', 'to fish', [
        ['pescar', 'to fish'], ['pescado', 'fished'], ['pescando', 'fishing'],
    ], [
        ['pesco', 'I fish'], ['pescas', 'you fish'], ['pesca', 's/he fishes'],
        ['pescamos', 'we fish'], ['pescan', 'they fish'],
    ], [
        ['pesqué', 'I fished', true], ['pescaste', 'you fished'], ['pescó', 's/he fished'],
        ['pescamos', 'we fished'], ['pescaron', 'they fished'],
    ], [
        ['pescaba', 'I used to fish'], ['pescabas', 'you used to fish'], ['pescaba', 's/he used to fish'],
        ['pescábamos', 'we used to fish'], ['pescaban', 'they used to fish'],
    ]),
    simpleVerb('reparar', 'to repair', [
        ['reparar', 'to repair'], ['reparado', 'repaired'], ['reparando', 'repairing'],
    ], [
        ['reparo', 'I repair'], ['reparas', 'you repair'], ['repara', 's/he repairs'],
        ['reparamos', 'we repair'], ['reparan', 'they repair'],
    ], [
        ['reparé', 'I repaired'], ['reparaste', 'you repaired'], ['reparó', 's/he repaired'],
        ['reparamos', 'we repaired'], ['repararon', 'they repaired'],
    ], [
        ['reparaba', 'I used to repair'], ['reparabas', 'you used to repair'], ['reparaba', 's/he used to repair'],
        ['reparábamos', 'we used to repair'], ['reparaban', 'they used to repair'],
    ]),
    simpleVerb('asar', 'to roast, to grill', [
        ['asar', 'to roast'], ['asado', 'roasted'], ['asando', 'roasting'],
    ], [
        ['aso', 'I roast'], ['asas', 'you roast'], ['asa', 's/he roasts'],
        ['asamos', 'we roast'], ['asan', 'they roast'],
    ], [
        ['asé', 'I roasted'], ['asaste', 'you roasted'], ['asó', 's/he roasted'],
        ['asamos', 'we roasted'], ['asaron', 'they roasted'],
    ], [
        ['asaba', 'I used to roast'], ['asabas', 'you used to roast'], ['asaba', 's/he used to roast'],
        ['asábamos', 'we used to roast'], ['asaban', 'they used to roast'],
    ]),
    simpleVerb('repetir', 'to repeat', [
        ['repetir', 'to repeat'], ['repetido', 'repeated'], ['repitiendo', 'repeating'],
    ], [
        ['repito', 'I repeat', true], ['repites', 'you repeat', true], ['repite', 's/he repeats', true],
        ['repetimos', 'we repeat'], ['repiten', 'they repeat', true],
    ], [
        ['repetí', 'I repeated'], ['repetiste', 'you repeated'], ['repitió', 's/he repeated', true],
        ['repetimos', 'we repeated'], ['repitieron', 'they repeated', true],
    ], [
        ['repetía', 'I used to repeat'], ['repetías', 'you used to repeat'], ['repetía', 's/he used to repeat'],
        ['repetíamos', 'we used to repeat'], ['repetían', 'they used to repeat'],
    ]),
    simpleVerb('completar', 'to complete', [
        ['completar', 'to complete'], ['completado', 'completed'], ['completando', 'completing'],
    ], [
        ['completo', 'I complete'], ['completas', 'you complete'], ['completa', 's/he completes'],
        ['completamos', 'we complete'], ['completan', 'they complete'],
    ], [
        ['completé', 'I completed'], ['completaste', 'you completed'], ['completó', 's/he completed'],
        ['completamos', 'we completed'], ['completaron', 'they completed'],
    ], [
        ['completaba', 'I used to complete'], ['completabas', 'you used to complete'], ['completaba', 's/he used to complete'],
        ['completábamos', 'we used to complete'], ['completaban', 'they used to complete'],
    ]),
    simpleVerb('decidir', 'to decide', [
        ['decidir', 'to decide'], ['decidido', 'decided'], ['decidiendo', 'deciding'],
    ], [
        ['decido', 'I decide'], ['decides', 'you decide'], ['decide', 's/he decides'],
        ['decidimos', 'we decide'], ['deciden', 'they decide'],
    ], [
        ['decidí', 'I decided'], ['decidiste', 'you decided'], ['decidió', 's/he decided'],
        ['decidimos', 'we decided'], ['decidieron', 'they decided'],
    ], [
        ['decidía', 'I used to decide'], ['decidías', 'you used to decide'], ['decidía', 's/he used to decide'],
        ['decidíamos', 'we used to decide'], ['decidían', 'they used to decide'],
    ]),
    simpleVerb('preparar', 'to prepare', [
        ['preparar', 'to prepare'], ['preparado', 'prepared'], ['preparando', 'preparing'],
    ], [
        ['preparo', 'I prepare'], ['preparas', 'you prepare'], ['prepara', 's/he prepares'],
        ['preparamos', 'we prepare'], ['preparan', 'they prepare'],
    ], [
        ['preparé', 'I prepared'], ['preparaste', 'you prepared'], ['preparó', 's/he prepared'],
        ['preparamos', 'we prepared'], ['prepararon', 'they prepared'],
    ], [
        ['preparaba', 'I used to prepare'], ['preparabas', 'you used to prepare'], ['preparaba', 's/he used to prepare'],
        ['preparábamos', 'we used to prepare'], ['preparaban', 'they used to prepare'],
    ]),
    simpleVerb('reunir', 'to gather, to meet, to reunite', [
        ['reunir', 'to gather'], ['reunido', 'gathered'], ['reuniendo', 'gathering'],
    ], [
        ['reúno', 'I gather', true], ['reúnes', 'you gather', true], ['reúne', 's/he gathers', true],
        ['reunimos', 'we gather'], ['reúnen', 'they gather', true],
    ], [
        ['reuní', 'I gathered'], ['reuniste', 'you gathered'], ['reunió', 's/he gathered'],
        ['reunimos', 'we gathered'], ['reunieron', 'they gathered'],
    ], [
        ['reunía', 'I used to gather'], ['reunías', 'you used to gather'], ['reunía', 's/he used to gather'],
        ['reuníamos', 'we used to gather'], ['reunían', 'they used to gather'],
    ]),
    simpleVerb('gastar', 'to spend', [
        ['gastar', 'to spend'], ['gastado', 'spent'], ['gastando', 'spending'],
    ], [
        ['gasto', 'I spend'], ['gastas', 'you spend'], ['gasta', 's/he spends'],
        ['gastamos', 'we spend'], ['gastan', 'they spend'],
    ], [
        ['gasté', 'I spent'], ['gastaste', 'you spent'], ['gastó', 's/he spent'],
        ['gastamos', 'we spent'], ['gastaron', 'they spent'],
    ], [
        ['gastaba', 'I used to spend'], ['gastabas', 'you used to spend'], ['gastaba', 's/he used to spend'],
        ['gastábamos', 'we used to spend'], ['gastaban', 'they used to spend'],
    ]),
]

VERBS.push(...BULK_VERBS)

// Original summaries and tense descriptions (not copied from any external source),
// merged onto matching entries above by infinitive. Only a subset of verbs have
// these — the rest stay conjugation-only.
type TenseDetail = { description: string; example: { spanish: string; english: string } }
type VerbDetail = { summary: string; present: TenseDetail; preterite: TenseDetail; imperfect: TenseDetail }

const VERB_DETAILS: Record<string, VerbDetail> = {
    querer: {
        summary: 'Querer is one of the most versatile verbs in Spanish, covering both "to want" and "to love". It shows up constantly in everyday speech — for making requests, expressing desires, and telling someone you care about them (te quiero). Like poder, it is e→ie stem-changing in the present, and has an irregular preterite stem (quis-).',
        present: { description: 'Used for wants, desires, and requests happening now.', example: { spanish: 'quiero un café', english: 'I want a coffee' } },
        preterite: { description: 'Used for a specific moment of wanting — or, in the negative, refusing to do something.', example: { spanish: 'no quiso venir', english: "s/he refused to come" } },
        imperfect: { description: 'Used for an ongoing want or desire in the past.', example: { spanish: 'quería ser médico', english: 'I wanted to be a doctor' } },
    },
    llegar: {
        summary: 'Llegar means "to arrive" or "to get to" a place, and is one of the most common verbs for talking about movement and punctuality. It is regular apart from a spelling change in the yo preterite form (llegué), needed to keep the hard "g" sound before an "e".',
        present: { description: 'Used to talk about arriving somewhere, now or in the near future.', example: { spanish: 'llego a las ocho', english: 'I arrive at eight' } },
        preterite: { description: 'Used for a completed arrival at a specific point in the past.', example: { spanish: 'llegué tarde', english: 'I arrived late' } },
        imperfect: { description: 'Used for habitual or ongoing arrivals in the past.', example: { spanish: 'llegaba siempre temprano', english: 'I always used to arrive early' } },
    },
    pasar: {
        summary: 'Pasar is a flexible verb covering "to pass", "to happen", and "to spend time". You will hear it in questions like "¿Qué pasa?" (What\'s going on?) as well as in sentences about time passing or moving through a place.',
        present: { description: 'Used for things happening now, or for passing by or through somewhere.', example: { spanish: 'paso por tu casa', english: "I pass by your house" } },
        preterite: { description: 'Used for something that happened or was completed at a specific time.', example: { spanish: '¿qué pasó?', english: 'what happened?' } },
        imperfect: { description: 'Used for things that used to happen, or were ongoing, in the past.', example: { spanish: 'pasaba mucho tiempo allí', english: 'I used to spend a lot of time there' } },
    },
    deber: {
        summary: 'Deber expresses obligation ("should" or "must") when followed by an infinitive, and means "to owe" when used with a noun. It is a fully regular -er verb, and one of the most common ways to give advice or say what is expected.',
        present: { description: 'Used to say what someone should, or is supposed to, do.', example: { spanish: 'debo estudiar', english: 'I should study' } },
        preterite: { description: 'Used for an obligation tied to a specific, completed moment.', example: { spanish: 'debí llamarte', english: 'I should have called you' } },
        imperfect: { description: 'Used for an ongoing or general sense of obligation in the past.', example: { spanish: 'debía trabajar los sábados', english: 'I was supposed to work on Saturdays' } },
    },
    quedar: {
        summary: 'Quedar covers several everyday situations: what is left over (no queda pan), arranging to meet someone (quedamos a las siete), and how clothes fit or suit someone (te queda bien). It is fully regular.',
        present: { description: 'Used for what remains, or for arranging to meet up with someone.', example: { spanish: 'quedo con mis amigos', english: "I'm meeting up with my friends" } },
        preterite: { description: 'Used for something that was left over, or a meeting that took place.', example: { spanish: 'quedamos en el parque', english: 'we met up at the park' } },
        imperfect: { description: 'Used for what used to be left over, or how things used to fit or suit.', example: { spanish: 'me quedaba grande', english: 'it used to be too big for me' } },
    },
    creer: {
        summary: 'Creer means "to believe" or "to think" something is true, and is a key verb for giving an opinion (creo que...). It is regular except that the "i" in its endings becomes "y" in certain third-person forms (creyó, creyeron), to avoid three vowels in a row.',
        present: { description: 'Used to state a belief or an opinion.', example: { spanish: 'creo que sí', english: 'I think so' } },
        preterite: { description: 'Used for the moment someone came to believe or realize something.', example: { spanish: 'no le creyó', english: "s/he didn't believe him/her" } },
        imperfect: { description: 'Used for a belief someone held over a period of time.', example: { spanish: 'creía en fantasmas', english: 'I used to believe in ghosts' } },
    },
    hablar: {
        summary: 'Hablar, "to speak" or "to talk", is one of the first verbs Spanish learners meet, and a completely regular -ar verb. It covers both speaking a language and having a conversation with someone.',
        present: { description: 'Used for speaking a language, or talking, right now.', example: { spanish: 'hablo español', english: 'I speak Spanish' } },
        preterite: { description: 'Used for a conversation or instance of speaking that is finished.', example: { spanish: 'hablé con ella ayer', english: 'I spoke with her yesterday' } },
        imperfect: { description: 'Used for how someone used to speak or talk regularly.', example: { spanish: 'hablábamos todos los días', english: 'we used to talk every day' } },
    },
    llevar: {
        summary: 'Llevar means "to carry" or "to take" something somewhere, and also "to wear" clothes. Paired with a time expression, it is the standard way to say how long you have been doing something (llevo dos años aquí).',
        present: { description: 'Used for carrying, wearing, or taking something right now.', example: { spanish: 'llevo una chaqueta', english: "I'm wearing a jacket" } },
        preterite: { description: 'Used for a completed act of carrying or taking something somewhere.', example: { spanish: 'llevé el paquete', english: 'I took the package' } },
        imperfect: { description: 'Used for what someone used to wear or carry regularly.', example: { spanish: 'llevaba gafas', english: 'I used to wear glasses' } },
    },
    dejar: {
        summary: 'Dejar covers "to leave (something) behind", "to let" or "allow", and — followed by "de" — "to stop" doing something (dejar de fumar). It is a regular -ar verb with a wide range of everyday uses.',
        present: { description: 'Used for leaving something somewhere, or letting someone do something.', example: { spanish: 'dejo las llaves aquí', english: 'I leave the keys here' } },
        preterite: { description: 'Used for something left behind, or permitted, at a specific moment.', example: { spanish: 'me dejó entrar', english: "s/he let me in" } },
        imperfect: { description: 'Used for what someone used to leave behind or allow.', example: { spanish: 'me dejaba jugar afuera', english: "s/he used to let me play outside" } },
    },
    seguir: {
        summary: 'Seguir means both "to follow" someone or something and "to continue" doing something, when paired with a gerund (seguir trabajando). It is an e→i stem-changing -ir verb, with a spelling change (gu→g) before o and a.',
        present: { description: 'Used for following someone or something, or for continuing an action.', example: { spanish: 'sigo trabajando', english: 'I keep working' } },
        preterite: { description: 'Used for a completed instance of following or continuing.', example: { spanish: 'siguió el camino', english: 's/he followed the path' } },
        imperfect: { description: 'Used for something someone used to follow, or kept doing, in the past.', example: { spanish: 'seguía sus consejos', english: "I used to follow his/her advice" } },
    },
    llamar: {
        summary: 'Llamar means "to call", whether on the phone or to get someone\'s attention. In its reflexive form, llamarse, it is how you say what your name is (me llamo Juan).',
        present: { description: 'Used for calling someone right now, or in general.', example: { spanish: 'te llamo esta noche', english: "I'll call you tonight" } },
        preterite: { description: 'Used for a specific, completed phone call or call for attention.', example: { spanish: 'la llamé ayer', english: 'I called her yesterday' } },
        imperfect: { description: 'Used for how someone used to call or address someone or something.', example: { spanish: 'lo llamaban el profesor', english: 'they used to call him the professor' } },
    },
    pensar: {
        summary: 'Pensar means "to think" — for the act of thinking, and for stating an opinion (pienso que...). Followed by "en", it means "to think about" someone or something; followed directly by an infinitive, it means "to plan to" do something. It is e→ie stem-changing.',
        present: { description: 'Used for thinking, having an opinion, or planning to do something.', example: { spanish: 'pienso viajar', english: 'I plan to travel' } },
        preterite: { description: 'Used for a specific, completed thought.', example: { spanish: 'lo pensé bien', english: 'I thought it through' } },
        imperfect: { description: 'Used for what someone used to think or believe.', example: { spanish: 'pensaba que era fácil', english: 'I used to think it was easy' } },
    },
    salir: {
        summary: 'Salir means "to leave" or "to go out" — whether leaving a place, or going out socially (salir con amigos also means "to date" someone). It has an irregular yo form (salgo) but is otherwise regular.',
        present: { description: 'Used for leaving a place, or going out, right now or in general.', example: { spanish: 'salgo a las nueve', english: 'I leave at nine' } },
        preterite: { description: 'Used for a completed departure or night out.', example: { spanish: 'salió temprano', english: 's/he left early' } },
        imperfect: { description: 'Used for when someone used to go out or leave regularly.', example: { spanish: 'salíamos los viernes', english: 'we used to go out on Fridays' } },
    },
    volver: {
        summary: 'Volver means "to return" or "to go/come back", and in its reflexive form volverse can also mean "to become" (volverse loco, to go crazy). It is o→ue stem-changing, and its past participle is irregular: vuelto.',
        present: { description: 'Used for returning somewhere, now or in the near future.', example: { spanish: 'vuelvo a casa', english: "I'm going home" } },
        preterite: { description: 'Used for a completed return in the past.', example: { spanish: 'volvió tarde', english: 's/he came back late' } },
        imperfect: { description: 'Used for returning somewhere regularly in the past.', example: { spanish: 'volvíamos cada verano', english: 'we used to come back every summer' } },
    },
    tomar: {
        summary: 'Tomar is a common everyday verb meaning "to take" (tomar un taxi) and, especially in Latin America, "to drink" (tomar agua). It is fully regular.',
        present: { description: 'Used for taking or drinking something now or habitually.', example: { spanish: 'tomo café por la mañana', english: 'I drink coffee in the morning' } },
        preterite: { description: 'Used for a completed act of taking or drinking something.', example: { spanish: 'tomé el autobús', english: 'I took the bus' } },
        imperfect: { description: 'Used for what someone used to take or drink regularly.', example: { spanish: 'tomaba té todas las tardes', english: 'I used to drink tea every afternoon' } },
    },
    conocer: {
        summary: 'Conocer means "to know" or "to be familiar with" a person, place, or thing — different from saber, which is for facts and skills. In the preterite it shifts meaning slightly, to "to meet" someone for the first time. It has an irregular yo form (conozco).',
        present: { description: 'Used for being familiar with someone or somewhere.', example: { spanish: 'conozco a tu hermano', english: 'I know your brother' } },
        preterite: { description: 'Used for the moment of meeting someone for the first time.', example: { spanish: 'la conocí en Madrid', english: 'I met her in Madrid' } },
        imperfect: { description: 'Used for having known or been familiar with someone or something over time in the past.', example: { spanish: 'lo conocía bien', english: 'I used to know him well' } },
    },
    sentirse: {
        summary: 'Sentirse means "to feel" a certain way, physically or emotionally (me siento bien). It is e→ie stem-changing in the present, with an extra e→i shift in the third-person preterite (se sintió).',
        present: { description: 'Used to describe how someone feels right now.', example: { spanish: 'me siento cansado', english: 'I feel tired' } },
        preterite: { description: 'Used for a specific moment of feeling a certain way.', example: { spanish: 'se sintió mal', english: 's/he felt sick' } },
        imperfect: { description: 'Used for how someone used to feel over a period of time.', example: { spanish: 'me sentía solo', english: 'I used to feel lonely' } },
    },
    entender: {
        summary: 'Entender means "to understand", whether a language, a situation, or a person. It is e→ie stem-changing, so the stressed forms shift from "entend-" to "entiend-" in the present tense.',
        present: { description: 'Used for understanding something right now.', example: { spanish: 'no entiendo', english: "I don't understand" } },
        preterite: { description: 'Used for the moment something became clear.', example: { spanish: 'por fin lo entendí', english: 'I finally understood it' } },
        imperfect: { description: 'Used for an ongoing level of understanding in the past.', example: { spanish: 'no entendía nada', english: "I didn't use to understand anything" } },
    },
    buscar: {
        summary: 'Buscar means "to search for" or "to look for" something or someone — note that, unlike English, it takes no preposition. It has a spelling change in the yo preterite (busqué) to keep the hard "c" sound.',
        present: { description: 'Used for searching or looking for something right now.', example: { spanish: 'busco mis llaves', english: "I'm looking for my keys" } },
        preterite: { description: 'Used for a completed search.', example: { spanish: 'busqué por todas partes', english: 'I looked everywhere' } },
        imperfect: { description: 'Used for something someone used to search for regularly.', example: { spanish: 'buscaba trabajo', english: 'I used to be looking for a job' } },
    },
    encontrarse: {
        summary: 'Encontrarse can mean "to be located" (el museo se encuentra cerca), "to feel" a certain way, or "to run into" someone. It is o→ue stem-changing.',
        present: { description: 'Used for where something is located, or how someone feels.', example: { spanish: 'me encuentro bien', english: "I'm feeling well" } },
        preterite: { description: 'Used for a moment of running into someone, or finding oneself somewhere.', example: { spanish: 'nos encontramos en la calle', english: 'we ran into each other on the street' } },
        imperfect: { description: 'Used for where something used to be, or how someone used to feel.', example: { spanish: 'se encontraba triste', english: 's/he used to feel sad' } },
    },
    trabajar: {
        summary: 'Trabajar means "to work", whether at a job or in the sense of putting in effort. It is a fully regular -ar verb.',
        present: { description: 'Used for working now or on a regular basis.', example: { spanish: 'trabajo en una oficina', english: 'I work in an office' } },
        preterite: { description: 'Used for a completed period of work.', example: { spanish: 'trabajé todo el día', english: 'I worked all day' } },
        imperfect: { description: 'Used for where or how someone used to work.', example: { spanish: 'trabajaba de noche', english: 'I used to work nights' } },
    },
    escribir: {
        summary: 'Escribir means "to write", covering everything from writing letters to texting. Its past participle is irregular: escrito.',
        present: { description: 'Used for writing something now or in general.', example: { spanish: 'escribo una carta', english: "I'm writing a letter" } },
        preterite: { description: 'Used for something completed in writing.', example: { spanish: 'le escribí ayer', english: 'I wrote to him/her yesterday' } },
        imperfect: { description: 'Used for what someone used to write regularly.', example: { spanish: 'escribía poesía', english: 'I used to write poetry' } },
    },
    empezar: {
        summary: 'Empezar means "to start" or "to begin", often paired with "a" and an infinitive (empezar a trabajar). It is e→ie stem-changing, with a spelling change (z→c) in the yo preterite (empecé).',
        present: { description: 'Used for starting something now or habitually.', example: { spanish: 'empiezo a las nueve', english: 'I start at nine' } },
        preterite: { description: 'Used for the moment something began.', example: { spanish: 'empecé el proyecto', english: 'I started the project' } },
        imperfect: { description: 'Used for how or when something used to begin.', example: { spanish: 'empezaba temprano', english: 'it used to start early' } },
    },
    esperar: {
        summary: 'Esperar covers "to wait" (esperar el autobús), "to hope" (espero que sí), and "to expect". It is a fully regular -ar verb.',
        present: { description: 'Used for waiting, hoping, or expecting something now.', example: { spanish: 'espero el autobús', english: "I'm waiting for the bus" } },
        preterite: { description: 'Used for a completed wait.', example: { spanish: 'esperé una hora', english: 'I waited an hour' } },
        imperfect: { description: 'Used for waiting or hoping over a period of time in the past.', example: { spanish: 'esperaba una respuesta', english: 'I was waiting for a reply' } },
    },
    perder: {
        summary: 'Perder means "to lose", whether losing an object, a game, or track of time (perder el tiempo, to waste time). It is e→ie stem-changing.',
        present: { description: 'Used for losing something right now or regularly.', example: { spanish: 'pierdo las llaves siempre', english: 'I always lose my keys' } },
        preterite: { description: 'Used for a specific instance of losing something.', example: { spanish: 'perdí el partido', english: 'I lost the game' } },
        imperfect: { description: 'Used for something someone used to lose regularly.', example: { spanish: 'perdía la paciencia', english: 'I used to lose my patience' } },
    },
    pedir: {
        summary: 'Pedir means "to ask for", "to request", or "to order" (in a restaurant) — note it takes no preposition, unlike English "ask for". It is e→i stem-changing.',
        present: { description: 'Used for asking for or ordering something now.', example: { spanish: 'pido ayuda', english: "I'm asking for help" } },
        preterite: { description: 'Used for a completed request.', example: { spanish: 'pidió la cuenta', english: 's/he asked for the bill' } },
        imperfect: { description: 'Used for what someone used to ask for or order regularly.', example: { spanish: 'pedía pizza los viernes', english: 'I used to order pizza on Fridays' } },
    },
    recibir: {
        summary: 'Recibir means "to receive", whether a gift, a message, or a guest (recibir visitas). It is a fully regular -ir verb.',
        present: { description: 'Used for receiving something now or regularly.', example: { spanish: 'recibo muchos correos', english: 'I receive a lot of emails' } },
        preterite: { description: 'Used for a completed act of receiving something.', example: { spanish: 'recibí tu mensaje', english: 'I received your message' } },
        imperfect: { description: 'Used for what someone used to receive regularly.', example: { spanish: 'recibía cartas cada semana', english: 'I used to receive letters every week' } },
    },
    recordar: {
        summary: 'Recordar means "to remember" and, when followed by a person, "to remind" (le recuerdo a su madre — s/he reminds me of his/her mother). It is o→ue stem-changing.',
        present: { description: 'Used for remembering something right now.', example: { spanish: 'no recuerdo su nombre', english: "I don't remember his/her name" } },
        preterite: { description: 'Used for the moment something was remembered.', example: { spanish: 'de repente lo recordé', english: 'suddenly I remembered it' } },
        imperfect: { description: 'Used for something someone used to remember or recall.', example: { spanish: 'recordaba su voz', english: 'I used to remember his/her voice' } },
    },
    terminar: {
        summary: 'Terminar means "to end" or "to finish", whether finishing a task (terminar de + infinitive) or something simply ending on its own. It is fully regular.',
        present: { description: 'Used for finishing something now or in general.', example: { spanish: 'termino a las cinco', english: 'I finish at five' } },
        preterite: { description: 'Used for something that finished at a specific point.', example: { spanish: 'terminé el examen', english: 'I finished the exam' } },
        imperfect: { description: 'Used for when something used to end or finish.', example: { spanish: 'terminaba tarde', english: 'it used to end late' } },
    },
    permitir: {
        summary: 'Permitir means "to allow" or "to permit", often used impersonally (se permite fumar) or with an indirect object (me permite pasar). It is fully regular.',
        present: { description: 'Used for allowing something right now or as a rule.', example: { spanish: 'no permito eso', english: "I don't allow that" } },
        preterite: { description: 'Used for a specific act of allowing something.', example: { spanish: 'me permitió entrar', english: 's/he allowed me to enter' } },
        imperfect: { description: 'Used for what used to be allowed.', example: { spanish: 'nos permitía salir tarde', english: 's/he used to let us leave late' } },
    },
    conseguir: {
        summary: 'Conseguir means "to get" or "to obtain" something, and, followed by an infinitive, "to manage to" do something (conseguí terminar). It is e→i stem-changing, with a spelling change (gu→g) before o and a.',
        present: { description: 'Used for getting or managing to do something now.', example: { spanish: 'consigo lo que quiero', english: 'I get what I want' } },
        preterite: { description: 'Used for successfully obtaining or managing something.', example: { spanish: 'lo conseguí', english: 'I managed it' } },
        imperfect: { description: 'Used for what someone used to get or manage regularly.', example: { spanish: 'conseguía buenas notas', english: 'I used to get good grades' } },
    },
    comenzar: {
        summary: 'Comenzar is a close synonym of empezar, meaning "to start" or "to begin". It is e→ie stem-changing, with a spelling change (z→c) in the yo preterite (comencé).',
        present: { description: 'Used for starting something now or habitually.', example: { spanish: 'comienzo el trabajo', english: 'I start work' } },
        preterite: { description: 'Used for the moment something began.', example: { spanish: 'comenzó a llover', english: 'it started to rain' } },
        imperfect: { description: 'Used for how or when something used to begin.', example: { spanish: 'comenzaba a las ocho', english: 'it used to start at eight' } },
    },
    servir: {
        summary: 'Servir means "to serve", whether serving food or drinks, or being useful for something (servir para algo). It is e→i stem-changing.',
        present: { description: 'Used for serving something, or being useful, right now.', example: { spanish: 'sirvo la cena', english: 'I serve dinner' } },
        preterite: { description: 'Used for a completed act of serving.', example: { spanish: 'sirvió el vino', english: 's/he served the wine' } },
        imperfect: { description: 'Used for what someone used to serve regularly.', example: { spanish: 'servía en un restaurante', english: 'I used to work as a server at a restaurant' } },
    },
    sacar: {
        summary: 'Sacar means "to take out" (sacar la basura) or "to get" (sacar una foto, sacar buenas notas). It has a spelling change in the yo preterite (saqué) to keep the hard "c" sound.',
        present: { description: 'Used for taking something out, or getting something, now.', example: { spanish: 'saco fotos', english: 'I take photos' } },
        preterite: { description: 'Used for a completed act of taking out or getting something.', example: { spanish: 'saqué la basura', english: 'I took out the trash' } },
        imperfect: { description: 'Used for what someone used to take out or get regularly.', example: { spanish: 'sacaba buenas notas', english: 'I used to get good grades' } },
    },
    necesitar: {
        summary: 'Necesitar means "to need", followed by a noun or an infinitive (necesito dormir). It is a fully regular -ar verb.',
        present: { description: 'Used for needing something right now.', example: { spanish: 'necesito ayuda', english: 'I need help' } },
        preterite: { description: 'Used for a specific moment something was needed.', example: { spanish: 'necesité tu ayuda', english: 'I needed your help' } },
        imperfect: { description: 'Used for an ongoing need in the past.', example: { spanish: 'necesitaba dinero', english: 'I needed money' } },
    },
    jugar: {
        summary: 'Jugar means "to play", whether a sport or a game — followed by "a" before the specific activity (jugar al fútbol). It is the only u→ue stem-changing verb in Spanish, with a spelling change (g→gu) in the yo preterite (jugué).',
        present: { description: 'Used for playing something now or regularly.', example: { spanish: 'juego al tenis', english: 'I play tennis' } },
        preterite: { description: 'Used for a completed instance of playing.', example: { spanish: 'jugué con mis amigos', english: 'I played with my friends' } },
        imperfect: { description: 'Used for what someone used to play regularly.', example: { spanish: 'jugaba al fútbol de niño', english: 'I used to play football as a kid' } },
    },
    cerrar: {
        summary: 'Cerrar means "to close", "to shut", or "to lock". It is e→ie stem-changing.',
        present: { description: 'Used for closing something right now or on a schedule.', example: { spanish: 'cierro la puerta', english: 'I close the door' } },
        preterite: { description: 'Used for a completed act of closing something.', example: { spanish: 'cerró la tienda', english: 's/he closed the shop' } },
        imperfect: { description: 'Used for when something used to close.', example: { spanish: 'cerraba a las diez', english: 'it used to close at ten' } },
    },
    contar: {
        summary: 'Contar means both "to count" (contar dinero) and "to tell" a story (contar un cuento). It is o→ue stem-changing.',
        present: { description: 'Used for counting or telling something right now.', example: { spanish: 'te cuento un secreto', english: "I'll tell you a secret" } },
        preterite: { description: 'Used for a completed count, or a story that was told.', example: { spanish: 'me contó todo', english: 's/he told me everything' } },
        imperfect: { description: 'Used for what someone used to count or tell regularly.', example: { spanish: 'contaba historias increíbles', english: 's/he used to tell incredible stories' } },
    },
    mirar: {
        summary: 'Mirar means "to look at" or "to watch" — used for deliberately directing your attention somewhere, unlike ver ("to see"), which is more passive. It is fully regular.',
        present: { description: 'Used for looking at or watching something now.', example: { spanish: 'miro la tele', english: "I'm watching TV" } },
        preterite: { description: 'Used for a completed act of looking or watching.', example: { spanish: 'miré por la ventana', english: 'I looked out the window' } },
        imperfect: { description: 'Used for what someone used to watch or look at regularly.', example: { spanish: 'miraba dibujos animados', english: 'I used to watch cartoons' } },
    },
    tratar: {
        summary: 'Tratar means "to treat" someone or something a certain way, and, followed by "de", "to try to" do something (trato de ayudar) or "to be about" (¿de qué trata la película?). It is fully regular.',
        present: { description: 'Used for treating someone or something, or trying to do something, now.', example: { spanish: 'trato de entender', english: "I'm trying to understand" } },
        preterite: { description: 'Used for a completed attempt, or an act of treating someone a certain way.', example: { spanish: 'lo trató mal', english: 's/he treated him badly' } },
        imperfect: { description: 'Used for how someone used to be treated, or what something used to be about.', example: { spanish: 'trataba de un crimen', english: 'it used to be about a crime' } },
    },
    cambiar: {
        summary: 'Cambiar means "to change", whether changing an object, a plan, or oneself (cambiar de opinión, to change one\'s mind). It is fully regular.',
        present: { description: 'Used for changing something right now or in general.', example: { spanish: 'cambio de trabajo', english: "I'm changing jobs" } },
        preterite: { description: 'Used for a completed change.', example: { spanish: 'cambié de idea', english: 'I changed my mind' } },
        imperfect: { description: 'Used for something that used to change regularly, or was changing.', example: { spanish: 'cambiaba de humor', english: 'his/her mood used to change' } },
    },
    leer: {
        summary: 'Leer means "to read". It is regular except that the "i" in its endings becomes "y" in certain third-person forms (leyó, leyeron), to avoid three vowels in a row.',
        present: { description: 'Used for reading something now or regularly.', example: { spanish: 'leo el periódico', english: 'I read the newspaper' } },
        preterite: { description: 'Used for something that was read and finished.', example: { spanish: 'leyó el libro', english: 's/he read the book' } },
        imperfect: { description: 'Used for what someone used to read regularly.', example: { spanish: 'leía antes de dormir', english: 'I used to read before sleeping' } },
    },
    caer: {
        summary: 'Caer means "to fall", and in its reflexive form caerse is used for accidentally falling down or dropping something (se me cayó el vaso). It has an irregular yo form (caigo).',
        present: { description: 'Used for falling right now or in general.', example: { spanish: 'la lluvia cae', english: 'the rain is falling' } },
        preterite: { description: 'Used for a specific fall.', example: { spanish: 'se cayó en la calle', english: 's/he fell on the street' } },
        imperfect: { description: 'Used for something that used to fall regularly.', example: { spanish: 'las hojas caían', english: 'the leaves used to fall' } },
    },
    traer: {
        summary: 'Traer means "to bring" something, as opposed to llevar, which means "to take" something away. It has an irregular yo form (traigo) and an irregular preterite stem (traj-).',
        present: { description: 'Used for bringing something now or in general.', example: { spanish: 'traigo el postre', english: "I'm bringing dessert" } },
        preterite: { description: 'Used for something that was brought at a specific time.', example: { spanish: 'trajo vino', english: 's/he brought wine' } },
        imperfect: { description: 'Used for what someone used to bring regularly.', example: { spanish: 'traía flores', english: 's/he used to bring flowers' } },
    },
    morir: {
        summary: 'Morir means "to die", and in its reflexive form morirse is used more informally, including for exaggeration (me muero de hambre, I\'m starving). It is o→ue stem-changing, with an irregular past participle: muerto.',
        present: { description: 'Used for dying, literally or figuratively, right now.', example: { spanish: 'me muero de risa', english: "I'm dying laughing" } },
        preterite: { description: 'Used for the moment someone or something died.', example: { spanish: 'murió en 1980', english: 's/he died in 1980' } },
        imperfect: { description: 'Used for a state close to death, or dying, that was ongoing.', example: { spanish: 'se moría de miedo', english: 's/he was dying of fear' } },
    },
    entrar: {
        summary: 'Entrar means "to enter" or "to go/come in", usually paired with "en" or "a" plus a place (entrar en la casa). It is fully regular.',
        present: { description: 'Used for entering somewhere right now.', example: { spanish: 'entro a la reunión', english: "I'm going into the meeting" } },
        preterite: { description: 'Used for a completed entrance.', example: { spanish: 'entró sin llamar', english: 's/he came in without knocking' } },
        imperfect: { description: 'Used for how or when someone used to enter.', example: { spanish: 'entrábamos por la parte de atrás', english: 'we used to come in through the back' } },
    },
    existir: {
        summary: 'Existir means "to exist" or "to be real" — used for talking about whether something exists at all, rather than describing it (which would be ser or estar). It is fully regular.',
        present: { description: 'Used for saying something exists right now.', example: { spanish: 'existe una solución', english: 'there is a solution' } },
        preterite: { description: 'Used for something that existed and is no longer around.', example: { spanish: 'esa costumbre existió', english: 'that custom used to exist' } },
        imperfect: { description: 'Used for something that used to exist.', example: { spanish: 'no existía internet', english: "the internet didn't used to exist" } },
    },
    mantener: {
        summary: 'Mantener means "to maintain" or "to keep" something a certain way, and also "to support" financially (mantener a la familia). It conjugates just like tener, with an irregular yo form and an e→ie stem change.',
        present: { description: 'Used for maintaining or keeping something right now.', example: { spanish: 'mantengo la calma', english: 'I stay calm' } },
        preterite: { description: 'Used for something that was kept or maintained at a specific time.', example: { spanish: 'mantuvo su promesa', english: 's/he kept his/her promise' } },
        imperfect: { description: 'Used for something someone used to maintain or support.', example: { spanish: 'mantenía a su familia', english: 's/he used to support his/her family' } },
    },
    resultar: {
        summary: 'Resultar means "to turn out" or "to result" — often used to describe how a situation ends up (resultó ser mentira, it turned out to be a lie). It is fully regular.',
        present: { description: 'Used for how something turns out or results.', example: { spanish: 'resulta difícil', english: 'it turns out to be difficult' } },
        preterite: { description: 'Used for how something turned out at a specific point.', example: { spanish: 'resultó ser cierto', english: 'it turned out to be true' } },
        imperfect: { description: 'Used for how something used to turn out or result.', example: { spanish: 'siempre resultaba en un desastre', english: 'it always used to turn into a disaster' } },
    },
    presentar: {
        summary: 'Presentar means "to present" (presentar un proyecto) and "to introduce" one person to another (te presento a mi hermano). It is fully regular.',
        present: { description: 'Used for presenting or introducing something or someone now.', example: { spanish: 'te presento a mi amigo', english: 'let me introduce you to my friend' } },
        preterite: { description: 'Used for a completed presentation or introduction.', example: { spanish: 'presentó su proyecto', english: 's/he presented his/her project' } },
        imperfect: { description: 'Used for what someone used to present regularly.', example: { spanish: 'presentaba las noticias', english: 's/he used to present the news' } },
    },
    crear: {
        summary: 'Crear means "to create" or "to make" something new, from art to companies to problems (crear un problema). It is fully regular.',
        present: { description: 'Used for creating something now or in general.', example: { spanish: 'creo contenido', english: 'I create content' } },
        preterite: { description: 'Used for something that was created at a specific time.', example: { spanish: 'creó una empresa', english: 's/he created a company' } },
        imperfect: { description: 'Used for what someone used to create regularly.', example: { spanish: 'creaba obras de arte', english: 's/he used to create works of art' } },
    },
    abrir: {
        summary: 'Abrir means "to open", whether a door, a business, or an opportunity. Its past participle is irregular: abierto.',
        present: { description: 'Used for opening something right now or on a schedule.', example: { spanish: 'abro la ventana', english: 'I open the window' } },
        preterite: { description: 'Used for a completed act of opening something.', example: { spanish: 'abrió la puerta', english: 's/he opened the door' } },
        imperfect: { description: 'Used for when something used to open.', example: { spanish: 'abría a las nueve', english: 'it used to open at nine' } },
    },
    considerar: {
        summary: 'Considerar means "to consider" or "to think about" something, often used to give or ask for an opinion (¿qué consideras?). It is fully regular.',
        present: { description: 'Used for considering something right now.', example: { spanish: 'considero que es justo', english: 'I consider it fair' } },
        preterite: { description: 'Used for a specific moment something was considered.', example: { spanish: 'lo consideré cuidadosamente', english: 'I considered it carefully' } },
        imperfect: { description: 'Used for an opinion someone used to hold.', example: { spanish: 'lo consideraba un amigo', english: 'I used to consider him a friend' } },
    },
    oír: {
        summary: 'Oír means "to hear" — perceiving a sound, as opposed to escuchar, the more deliberate "to listen". It is irregular throughout the present tense (oigo, oyes, oye...).',
        present: { description: 'Used for hearing something right now.', example: { spanish: 'no te oigo bien', english: "I can't hear you well" } },
        preterite: { description: 'Used for a specific instance of hearing something.', example: { spanish: 'oí un ruido', english: 'I heard a noise' } },
        imperfect: { description: 'Used for something someone used to hear regularly.', example: { spanish: 'se oía música', english: 'music could be heard' } },
    },
    acabar: {
        summary: 'Acabar means "to finish" or "to end", and, followed by "de" plus an infinitive, "to have just" done something (acabo de llegar, I just arrived). It is fully regular.',
        present: { description: 'Used for finishing something, or for something that just happened.', example: { spanish: 'acabo de comer', english: 'I just ate' } },
        preterite: { description: 'Used for something that was completed.', example: { spanish: 'acabó el trabajo', english: 's/he finished the work' } },
        imperfect: { description: 'Used for how or when something used to end.', example: { spanish: 'la clase acababa a las tres', english: 'class used to end at three' } },
    },
    convertir: {
        summary: 'Convertir means "to convert" or "to turn" something into something else, often used reflexively (convertirse en, to become). It is e→ie stem-changing, with an extra e→i shift in the third-person preterite.',
        present: { description: 'Used for converting or turning something into something else now.', example: { spanish: 'se convierte en agua', english: 'it turns into water' } },
        preterite: { description: 'Used for a completed transformation.', example: { spanish: 'se convirtió en actor', english: 'he became an actor' } },
        imperfect: { description: 'Used for something that used to turn into something else.', example: { spanish: 'se convertía en hielo', english: 'it used to turn into ice' } },
    },
    ganar: {
        summary: 'Ganar means "to win" a game or competition, and "to earn" money (ganar dinero). It is fully regular.',
        present: { description: 'Used for winning or earning something now.', example: { spanish: 'gano bien', english: 'I earn well' } },
        preterite: { description: 'Used for a completed win or earning.', example: { spanish: 'ganó el partido', english: 's/he won the game' } },
        imperfect: { description: 'Used for what someone used to win or earn regularly.', example: { spanish: 'ganaba poco', english: 'I used to earn little' } },
    },
    formar: {
        summary: 'Formar means "to form" or "to make up" something (formar parte de, to be part of), and also "to train" someone. It is fully regular.',
        present: { description: 'Used for forming or making up something right now.', example: { spanish: 'formo parte del equipo', english: "I'm part of the team" } },
        preterite: { description: 'Used for something that was formed at a specific time.', example: { spanish: 'se formó el grupo', english: 'the group was formed' } },
        imperfect: { description: 'Used for what used to form or make up something.', example: { spanish: 'formaba parte del club', english: 'I used to be part of the club' } },
    },
    partir: {
        summary: 'Partir means "to split" or "to cut" something into pieces, and, more formally, "to depart" from somewhere. It is fully regular.',
        present: { description: 'Used for splitting something, or departing, right now.', example: { spanish: 'parto mañana', english: 'I depart tomorrow' } },
        preterite: { description: 'Used for a completed departure or split.', example: { spanish: 'partió el pan', english: 's/he split the bread' } },
        imperfect: { description: 'Used for a departure or split that used to happen regularly.', example: { spanish: 'partíamos temprano', english: 'we used to depart early' } },
    },
    aceptar: {
        summary: 'Aceptar means "to accept" an offer, an invitation, or a situation. It is fully regular.',
        present: { description: 'Used for accepting something right now.', example: { spanish: 'acepto la oferta', english: 'I accept the offer' } },
        preterite: { description: 'Used for a completed act of accepting something.', example: { spanish: 'aceptó la invitación', english: 's/he accepted the invitation' } },
        imperfect: { description: 'Used for what someone used to accept regularly.', example: { spanish: 'aceptaba cualquier trabajo', english: 'I used to accept any job' } },
    },
    realizar: {
        summary: "Realizar means \"to carry out\" or \"to accomplish\" something — note it's a false friend, and doesn't mean \"to realize\" mentally (that's darse cuenta). It has a spelling change in the yo preterite (realicé).",
        present: { description: 'Used for carrying out or accomplishing something now.', example: { spanish: 'realizo mis sueños', english: "I'm making my dreams come true" } },
        preterite: { description: 'Used for something that was accomplished.', example: { spanish: 'realizó el proyecto', english: 's/he carried out the project' } },
        imperfect: { description: 'Used for what someone used to carry out regularly.', example: { spanish: 'realizaba tareas difíciles', english: 's/he used to carry out difficult tasks' } },
    },
    suponer: {
        summary: 'Suponer means "to suppose" or "to assume" something is true. It conjugates like poner, with an irregular yo form and an irregular preterite stem.',
        present: { description: 'Used for supposing or assuming something right now.', example: { spanish: 'supongo que sí', english: 'I suppose so' } },
        preterite: { description: 'Used for a specific assumption that was made.', example: { spanish: 'lo supuse', english: 'I assumed it' } },
        imperfect: { description: 'Used for something someone used to assume.', example: { spanish: 'suponía que vendría', english: 'I assumed s/he would come' } },
    },
    comprender: {
        summary: 'Comprender is a slightly more formal synonym of entender, meaning "to understand" or "to comprehend". It is fully regular.',
        present: { description: 'Used for understanding something right now.', example: { spanish: 'comprendo la situación', english: 'I understand the situation' } },
        preterite: { description: 'Used for the moment something was understood.', example: { spanish: 'no lo comprendí', english: "I didn't understand it" } },
        imperfect: { description: 'Used for an ongoing level of understanding in the past.', example: { spanish: 'no comprendía nada', english: "I didn't use to understand anything" } },
    },
    lograr: {
        summary: 'Lograr means "to achieve" or "to accomplish" something, and, followed by an infinitive, "to manage to" do something (logré terminar, I managed to finish). It is fully regular.',
        present: { description: 'Used for achieving or managing to do something now.', example: { spanish: 'logro mis metas', english: 'I achieve my goals' } },
        preterite: { description: 'Used for something that was successfully achieved.', example: { spanish: 'logró el puesto', english: 's/he got the position' } },
        imperfect: { description: 'Used for what someone used to achieve or manage regularly.', example: { spanish: 'lograba buenos resultados', english: 'I used to achieve good results' } },
    },
    explicar: {
        summary: 'Explicar means "to explain" something to someone. It has a spelling change in the yo preterite (expliqué) to keep the hard "c" sound.',
        present: { description: 'Used for explaining something right now.', example: { spanish: 'te explico la regla', english: "I'll explain the rule to you" } },
        preterite: { description: 'Used for a completed explanation.', example: { spanish: 'me lo explicó', english: 's/he explained it to me' } },
        imperfect: { description: 'Used for what someone used to explain regularly.', example: { spanish: 'explicaba las lecciones', english: 's/he used to explain the lessons' } },
    },
    preguntar: {
        summary: 'Preguntar means "to ask" a question, as opposed to pedir, which means "to ask for" something. It is fully regular.',
        present: { description: 'Used for asking something right now.', example: { spanish: 'pregunto por curiosidad', english: 'I ask out of curiosity' } },
        preterite: { description: 'Used for a specific question that was asked.', example: { spanish: 'me preguntó la hora', english: 's/he asked me the time' } },
        imperfect: { description: 'Used for what someone used to ask regularly.', example: { spanish: 'siempre preguntaba lo mismo', english: 's/he always used to ask the same thing' } },
    },
    tocar: {
        summary: 'Tocar means "to touch" something, and also "to play" a musical instrument (tocar la guitarra). It has a spelling change in the yo preterite (toqué) to keep the hard "c" sound.',
        present: { description: 'Used for touching or playing something now.', example: { spanish: 'toco el piano', english: 'I play the piano' } },
        preterite: { description: 'Used for a completed act of touching or playing.', example: { spanish: 'tocó la campana', english: 's/he rang the bell' } },
        imperfect: { description: 'Used for what someone used to play or touch regularly.', example: { spanish: 'tocaba en una banda', english: 'I used to play in a band' } },
    },
    reconocer: {
        summary: 'Reconocer means "to recognize" someone or something, and also "to admit" (reconozco que me equivoqué, I admit I was wrong). It has an irregular yo form (reconozco).',
        present: { description: 'Used for recognizing or admitting something right now.', example: { spanish: 'no te reconozco', english: "I don't recognize you" } },
        preterite: { description: 'Used for the moment something was recognized.', example: { spanish: 'lo reconoció enseguida', english: 's/he recognized him right away' } },
        imperfect: { description: 'Used for something someone used to recognize.', example: { spanish: 'apenas lo reconocía', english: 'I could barely recognize him' } },
    },
    estudiar: {
        summary: 'Estudiar means "to study", whether a subject in school or examining something carefully. It is fully regular.',
        present: { description: 'Used for studying something now or in general.', example: { spanish: 'estudio medicina', english: "I'm studying medicine" } },
        preterite: { description: 'Used for a completed period of studying.', example: { spanish: 'estudié toda la noche', english: 'I studied all night' } },
        imperfect: { description: 'Used for what someone used to study.', example: { spanish: 'estudiaba derecho', english: 'I used to study law' } },
    },
    alcanzar: {
        summary: 'Alcanzar means "to reach" a place or a goal, and also "to catch up to" someone. It has a spelling change in the yo preterite (alcancé) to keep the hard "c" sound.',
        present: { description: "Used for reaching something now, or being enough (no alcanza, it's not enough).", example: { spanish: 'alcanzo el estante', english: 'I reach the shelf' } },
        preterite: { description: 'Used for something that was reached or attained.', example: { spanish: 'alcanzó su meta', english: 's/he reached his/her goal' } },
        imperfect: { description: 'Used for something someone used to reach or attain regularly.', example: { spanish: 'no alcanzaba el dinero', english: 'the money used to not be enough' } },
    },
    nacer: {
        summary: 'Nacer means "to be born", used for people, animals, and even ideas (nació una idea). It has an irregular yo form (nazco).',
        present: { description: 'Used for something being born right now, literally or figuratively.', example: { spanish: 'nace una estrella', english: 'a star is born' } },
        preterite: { description: 'Used for the moment someone or something was born.', example: { spanish: 'nací en 1990', english: 'I was born in 1990' } },
        imperfect: { description: 'Used for describing the circumstances around a birth.', example: { spanish: 'cuando nacía el sol', english: 'as the sun was rising' } },
    },
    dirigir: {
        summary: 'Dirigir means "to direct" or "to lead" — a team, a company, a film. It has an irregular yo form (dirijo), with a spelling change (g→j) to keep the soft sound.',
        present: { description: 'Used for directing or leading something right now.', example: { spanish: 'dirijo un equipo', english: 'I manage a team' } },
        preterite: { description: 'Used for something that was directed or led at a specific time.', example: { spanish: 'dirigió la película', english: 's/he directed the film' } },
        imperfect: { description: 'Used for what someone used to direct or lead.', example: { spanish: 'dirigía la empresa', english: 's/he used to run the company' } },
    },
    correr: {
        summary: 'Correr means "to run", whether for exercise or in a hurry. It is fully regular.',
        present: { description: 'Used for running right now or as a habit.', example: { spanish: 'corro todas las mañanas', english: 'I run every morning' } },
        preterite: { description: 'Used for a completed run.', example: { spanish: 'corrió una maratón', english: 's/he ran a marathon' } },
        imperfect: { description: 'Used for how or when someone used to run.', example: { spanish: 'corría rápido de joven', english: 'I used to run fast when I was young' } },
    },
    ser: {
        summary: 'Ser is the Spanish verb "to be". It is generally used to portray permanent situations, for example: I am from Spain, he is a profesor, she is tall, this watch is my mother\'s etc. You\'ll find that this particular verb is one of the most versatile out there, but also hugely irregular, following almost no rules. Ser is not to be confused with Estar, also meaning "to be", but used for different situations.',
        present: { description: 'The Indicative Present of ser is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.', example: { spanish: 'soy estudiante', english: 'I am a student' } },
        preterite: { description: 'The Indicative Preterite of ser is used to talk about actions completed in the past, at a specific point in time.', example: { spanish: 'fui estudiante', english: 'I was a student' } },
        imperfect: { description: 'The Indicative Imperfect of ser is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.', example: { spanish: 'era estudiante', english: 'I used to be a student' } },
    },
    estar: {
        summary: 'Estar is another Spanish verb which means "to be". In contrast to Ser, Estar is generally used to portray more temporary feelings or situations. For example: I am not at home, you are angry, she is at the concert, this cake is delicious, we are singing a song, this restaurant is very popular. This is an important and versatile verb that you will use in everyday life. Estar is also irregular in most cases, meaning you will need to learn the conjugations off by heart.',
        present: { description: 'The Indicative Present of estar is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.', example: { spanish: 'estoy cansado', english: 'I am tired' } },
        preterite: { description: 'The Indicative Preterite of estar is used to talk about actions completed in the past, at a specific point in time.', example: { spanish: 'estuve cansado', english: 'I was tired' } },
        imperfect: { description: 'The Indicative Imperfect of estar is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.', example: { spanish: 'estaba cansado', english: 'I used to be tired' } },
    },
    tener: {
        summary: 'Tener is the Spanish verb "to have". It is an extremely useful verb and is largely irregular when conjugating. It is important to note that in Spanish, tener is used to portray a person\'s age; for example: "tengo 21 años". This literally translates to "I have 21 years". Another common use for Tener is to indicate an obligation, for example: "tengo que irme a casa" - "I have to go home". It is always followed by "que" to indicate this type of obligation or "must".',
        present: { description: 'The Indicative Present of tener is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.', example: { spanish: 'tengo un gato gris', english: 'I have a grey cat' } },
        preterite: { description: 'The Indicative Preterite of tener is used to talk about actions completed in the past, at a specific point in time.', example: { spanish: 'tuve un gato gris', english: 'I had a grey cat' } },
        imperfect: { description: 'The Indicative Imperfect of tener is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.', example: { spanish: 'tenía un gato gris', english: 'I used to have a grey cat' } },
    },
    ir: {
        summary: 'Ir is the Spanish verb "to go", and is one of the most common irregular verbs in Spanish. It is used in various contexts like "I go to school", "you went to Mexico on holiday", "we are going to the concert on Saturday".',
        present: { description: 'The Indicative Present of ir is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.', example: { spanish: 'voy al supermercado todos los sábados', english: 'I go to the supermarket every Saturday' } },
        preterite: { description: 'The Indicative Preterite of ir is used to talk about actions completed in the past, at a specific point in time.', example: { spanish: 'fui al supermercado todos los sábados', english: 'I went to the supermarket every Saturday' } },
        imperfect: { description: 'The Indicative Imperfect of ir is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.', example: { spanish: 'iba al supermercado todos los sábados', english: 'I used to go to the supermarket every Saturday' } },
    },
    hacer: {
        summary: 'Hacer is the Spanish verb meaning "to do / to make". It is extremely versatile, and one common use is to express the weather or time. In this sense, it is different from English, whereby we would use "to be". For example: "hace frío" is how to say "it is cold", which directly translates to "it makes cold".',
        present: { description: 'The Indicative Present of hacer is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.', example: { spanish: 'hago los deberes después de cenar', english: 'I do my homework after dinner' } },
        preterite: { description: 'The Indicative Preterite of hacer is used to talk about actions completed in the past, at a specific point in time.', example: { spanish: 'hice los deberes después de cenar', english: 'I did my homework after dinner' } },
        imperfect: { description: 'The Indicative Imperfect of hacer is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.', example: { spanish: 'hacía los deberes después de cenar', english: 'I used to do my homework after dinner' } },
    },
    haber: {
        summary: 'Haber is the Spanish verb meaning "to have". It is a very unique verb in that it is used in compound tenses as an auxiliary, meaning that is comes before the main verb in the sentence and is used to set the main verbs\' tense or mood. For example: He estado (I have been), hemos comido (we have eaten). It is also very commonly used as an impersonal verb, to say "there is / there are". For example: Hay mucho chocolate en el armario. (There is a lot of chocolate in the press).',
        present: { description: 'As an auxiliary verb, haber in the indicative present is used to form the "indicative present perfect" tense.', example: { spanish: 'he escrito la carta', english: 'I have written the letter' } },
        preterite: { description: 'Because haber is an auxiliary verb used to form compound conjugations, it is rarely used alone in this tense — except in the impersonal form, meaning "there was / there were".', example: { spanish: 'hubo una fiesta anoche', english: 'there was a party last night' } },
        imperfect: { description: 'As an auxiliary verb, haber in the indicative imperfect is used to form the "indicative past perfect" tense.', example: { spanish: 'había escrito la carta', english: 'I had written the letter' } },
    },
    ver: {
        summary: 'Ver is the Spanish verb "to see". It is mostly irregular, so endings must be learned by heart. Ver can be used for a number of reasons, the most basic "to see", for example: "Veo un coche". It can also be used to describe "watching" a movie or tv show, asking a person if they have "seen" a particular movie or object, or to notice something.',
        present: { description: 'The Indicative Present of ver is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.', example: { spanish: 'veo fantasmas', english: 'I see ghosts' } },
        preterite: { description: 'The Indicative Preterite of ver is used to talk about actions completed in the past, at a specific point in time.', example: { spanish: 'vi fantasmas', english: 'I saw ghosts' } },
        imperfect: { description: 'The Indicative Imperfect of ver is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.', example: { spanish: 'veía fantasmas', english: 'I used to see ghosts' } },
    },
    venir: {
        summary: 'Venir is the Spanish verb meaning "to come". Similar verbs to venir include: llegar (to arrive).',
        present: { description: 'The Indicative Present of venir is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.', example: { spanish: 'vengo a casa', english: 'I come home' } },
        preterite: { description: 'The Indicative Preterite of venir is used to talk about actions completed in the past, at a specific point in time.', example: { spanish: 'vine a casa', english: 'I came home' } },
        imperfect: { description: 'The Indicative Imperfect of venir is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.', example: { spanish: 'venía a casa', english: 'I used to come home' } },
    },
    vivir: {
        summary: 'Vivir is the Spanish verb for "to live". It is a regular IR verb, and one of the most popular 100 Spanish verbs.',
        present: { description: 'The Indicative Present of vivir is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.', example: { spanish: 'vivo cerca de mi hermana', english: 'I live close to my sister' } },
        preterite: { description: 'The Indicative Preterite of vivir is used to talk about actions completed in the past, at a specific point in time.', example: { spanish: 'viví cerca de mi hermana', english: 'I lived close to my sister' } },
        imperfect: { description: 'The Indicative Imperfect of vivir is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.', example: { spanish: 'vivía cerca de mi hermana', english: 'I used to live close to my sister' } },
    },
    poder: {
        summary: 'Poder is the Spanish verb meaning "to be able to / to can". This verb can be used to ask for permission, e.g. ¿Podría usar el baño?, or to express tolerance for something "No puedo más", meaning "I can\'t do any more". In its purist form, it is used to express capability to do something. For example: "Mi hermano puede nadar 1 kilómetro sin parar" - "My brother can swim 1km without stopping".',
        present: { description: 'The Indicative Present of poder is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.', example: { spanish: 'puedo hablar español', english: 'I am able to speak Spanish' } },
        preterite: { description: 'The Indicative Preterite of poder is used to talk about actions completed in the past, at a specific point in time.', example: { spanish: 'pude hablar español', english: 'I was able to speak Spanish' } },
        imperfect: { description: 'The Indicative Imperfect of poder is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.', example: { spanish: 'podía hablar español', english: 'I used to be able to speak Spanish' } },
    },
    saber: {
        summary: 'Saber is the Spanish verb meaning "to know" (things). It is mostly used to portray knowledge - for example: "I speak Spanish" and "I know all the capital cities in Europe". It can also be used to express taste; for example: "The cake tastes like chocolate and orange". Saber is not to be confused with Conocer, also meaning "to know" but used in different situations.',
        present: { description: 'The Indicative Present of saber is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.', example: { spanish: 'sé español', english: 'I know Spanish' } },
        preterite: { description: 'The Indicative Preterite of saber is used to talk about actions completed in the past, at a specific point in time.', example: { spanish: 'supe español', english: 'I knew Spanish' } },
        imperfect: { description: 'The Indicative Imperfect of saber is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.', example: { spanish: 'sabía español', english: 'I used to know Spanish' } },
    },
    decir: {
        summary: 'Decir is the Spanish verb meaning "to say / to tell". For example: "What did you say?" or "I swear to tell the truth". In Spain, it is used when answering the phone - you will hear "¿Diga?" meaning "hello" or "¡Digame!", literally translating to "tell me". It can also be used to express rumours and opinions - "they say it\'s going to rain all next week" and "What do you say, will we go on holidays in June?"',
        present: { description: 'The Indicative Present of decir is used to talk about situations, events or thoughts that are happening now or in the near future. It is also used to talk about facts and truths.', example: { spanish: 'digo hola al profesor', english: 'I say hello to the teacher' } },
        preterite: { description: 'The Indicative Preterite of decir is used to talk about actions completed in the past, at a specific point in time.', example: { spanish: 'dije hola al profesor', english: 'I said hello to the teacher' } },
        imperfect: { description: 'The Indicative Imperfect of decir is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.', example: { spanish: 'decía hola al profesor', english: 'I used to say hello to the teacher' } },
    },
    dar: {
        summary: 'Dar is the Spanish verb "to give". It is a very versatile verb, with many meanings and uses. For example: "Dame las llaves" - "Give me the keys", "dar las gracias" - "to give thanks", to express fear "Me da miedo" - "It scares me" as well as to perform an action "dar un paseo" - "to go for a walk".',
        present: { description: 'The Indicative Present of dar is used to talk about situations, events or thoughts that are happening now or in the near future.', example: { spanish: 'doy regalos a mis hermanos', english: 'I give presents to my siblings' } },
        preterite: { description: 'The Indicative Preterite of dar is used to talk about actions completed in the past, at a specific point in time.', example: { spanish: 'di regalos a mis hermanos', english: 'I gave presents to my siblings' } },
        imperfect: { description: 'The Indicative Imperfect of dar is used to describe regular and repeated actions that happened in the past and descriptions of things you used to do.', example: { spanish: 'daba regalos a mis hermanos', english: 'I used to give presents to my siblings' } },
    },
}

for (const verb of VERBS) {
    const details = VERB_DETAILS[verb.infinitive]
    if (!details) continue
    verb.summary = details.summary
    const [present, preterite, imperfect] = verb.tenses
    Object.assign(present, details.present)
    Object.assign(preterite, details.preterite)
    Object.assign(imperfect, details.imperfect)
}

// Approximate real-world Spanish usage frequency, most common first. Not exact —
// based on general corpus-frequency knowledge, good enough for a rough sort.
const FREQUENCY_ORDER = [
    'ser', 'estar', 'haber', 'tener', 'hacer', 'poder', 'decir', 'ir', 'ver', 'dar',
    'saber', 'querer', 'llegar', 'pasar', 'deber', 'quedar', 'creer', 'hablar', 'llevar', 'dejar',
    'seguir', 'llamar', 'venir', 'pensar', 'salir', 'volver', 'tomar', 'conocer', 'vivir', 'sentirse',
    'entender', 'buscar', 'encontrarse', 'trabajar', 'escribir', 'empezar', 'esperar', 'perder', 'pedir', 'recibir',
    'recordar', 'terminar', 'permitir', 'conseguir', 'comenzar', 'servir', 'sacar', 'necesitar', 'jugar', 'cerrar',
    'contar', 'mirar', 'tratar', 'cambiar', 'leer', 'caer', 'traer', 'morir', 'entrar', 'existir',
    'mantener', 'resultar', 'presentar', 'crear', 'abrir', 'considerar', 'oír', 'acabar', 'convertir', 'ganar',
    'formar', 'partir', 'aceptar', 'realizar', 'suponer', 'comprender', 'lograr', 'explicar', 'preguntar', 'tocar',
    'reconocer', 'estudiar', 'alcanzar', 'nacer', 'dirigir', 'correr', 'utilizar', 'pagar', 'ayudar', 'comer',
    'usar', 'parecer', 'decidir', 'producir', 'ocurrir', 'probar', 'gustar', 'sentarse', 'ponerse', 'amar',
    'encantar', 'invitar', 'enseñar', 'aprender', 'quedarse', 'acordarse', 'almorzar', 'acostarse', 'despertarse', 'levantarse',
    'ducharse', 'lavarse', 'vestirse', 'cepillarse', 'casarse', 'cuidarse', 'divertirse', 'aburrirse', 'enojarse', 'enfadarse',
    'olvidarse', 'preocuparse', 'dormirse', 'responder', 'cuidar', 'romper', 'gastar', 'preparar', 'parar', 'beber',
    'repetir', 'apagar', 'encender', 'llorar', 'mandar', 'rezar', 'enviar', 'visitar', 'aprobar', 'regresar',
    'reservar', 'cantar', 'pintar', 'limpiar', 'cocinar', 'manejar', 'caminar', 'comprar', 'dibujar', 'planear',
    'completar', 'reunir', 'satisfacer', 'montar', 'asar', 'pescar', 'reparar', 'llenar', 'acompañar', 'conversar',
    'disfrutar', 'desayunar', 'fumar', 'odiar', 'preferir', 'coger', 'elegir', 'descansar', 'doler', 'costar',
    'llover', 'nevar',
] as const

export const FREQUENCY_RANK: ReadonlyMap<string, number> = new Map(FREQUENCY_ORDER.map((infinitive, rank) => [infinitive, rank]))


