import type { VerbEntry } from './types'
import { simpleVerb } from './helpers'

export const BULK_VERBS_3: VerbEntry[] = [
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
    ]),]
