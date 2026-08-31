import type { VerbEntry } from './types'
import { simpleVerb } from './helpers'

export const CORE_VERBS: VerbEntry[] = [
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
]
