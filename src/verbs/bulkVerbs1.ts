import type { VerbEntry } from './types'
import { simpleVerb } from './helpers'

export const BULK_VERBS_1: VerbEntry[] = [
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
    ]),
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
    ]),]
