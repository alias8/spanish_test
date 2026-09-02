import type { VerbEntry } from './types'
import { simpleVerb } from './helpers'

export const BULK_VERBS_2: VerbEntry[] = [
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
    simpleVerb('durar', 'to last', [
        ['durar', 'to last'], ['durado', 'lasted'], ['durando', 'lasting'],
    ], [
        ['duro', 'I last'], ['duras', 'you last'], ['dura', 's/he lasts'],
        ['duramos', 'we last'], ['duran', 'they last'],
    ], [
        ['duré', 'I lasted'], ['duraste', 'you lasted'], ['duró', 's/he lasted'],
        ['duramos', 'we lasted'], ['duraron', 'they lasted'],
    ], [
        ['duraba', 'I used to last'], ['durabas', 'you used to last'], ['duraba', 's/he used to last'],
        ['durábamos', 'we used to last'], ['duraban', 'they used to last'],
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
    ]),]
