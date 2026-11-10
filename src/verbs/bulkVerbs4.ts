import type { VerbEntry } from './types'
import { simpleVerb } from './helpers'

export const BULK_VERBS_4: VerbEntry[] = [
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
    simpleVerb('esquiar', 'to ski', [
        ['esquiar', 'to ski'], ['esquiado', 'skied'], ['esquiando', 'skiing'],
    ], [
        ['esquío', 'I ski', true], ['esquías', 'you ski', true], ['esquía', 's/he skis', true],
        ['esquiamos', 'we ski'], ['esquían', 'they ski', true],
    ], [
        ['esquié', 'I skied'], ['esquiaste', 'you skied'], ['esquió', 's/he skied'],
        ['esquiamos', 'we skied'], ['esquiaron', 'they skied'],
    ], [
        ['esquiaba', 'I used to ski'], ['esquiabas', 'you used to ski'], ['esquiaba', 's/he used to ski'],
        ['esquiábamos', 'we used to ski'], ['esquiaban', 'they used to ski'],
    ]),
    simpleVerb('hacer snowboard', 'to snowboard', [
        ['hacer snowboard', 'to snowboard'], ['hecho snowboard', 'snowboarded'], ['haciendo snowboard', 'snowboarding'],
    ], [
        ['hago snowboard', 'I snowboard', true], ['haces snowboard', 'you snowboard', true], ['hace snowboard', 's/he snowboards', true],
        ['hacemos snowboard', 'we snowboard'], ['hacen snowboard', 'they snowboard', true],
    ], [
        ['hice snowboard', 'I snowboarded', true], ['hiciste snowboard', 'you snowboarded', true], ['hizo snowboard', 's/he snowboarded', true],
        ['hicimos snowboard', 'we snowboarded', true], ['hicieron snowboard', 'they snowboarded', true],
    ], [
        ['hacía snowboard', 'I used to snowboard'], ['hacías snowboard', 'you used to snowboard'], ['hacía snowboard', 's/he used to snowboard'],
        ['hacíamos snowboard', 'we used to snowboard'], ['hacían snowboard', 'they used to snowboard'],
    ]),
    simpleVerb('acampar', 'to camp', [
        ['acampar', 'to camp'], ['acampado', 'camped'], ['acampando', 'camping'],
    ], [
        ['acampo', 'I camp'], ['acampas', 'you camp'], ['acampa', 's/he camps'],
        ['acampamos', 'we camp'], ['acampan', 'they camp'],
    ], [
        ['acampé', 'I camped'], ['acampaste', 'you camped'], ['acampó', 's/he camped'],
        ['acampamos', 'we camped'], ['acamparon', 'they camped'],
    ], [
        ['acampaba', 'I used to camp'], ['acampabas', 'you used to camp'], ['acampaba', 's/he used to camp'],
        ['acampábamos', 'we used to camp'], ['acampaban', 'they used to camp'],
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
    simpleVerb('explorar', 'to explore', [
        ['explorar', 'to explore'], ['explorado', 'explored'], ['explorando', 'exploring'],
    ], [
        ['exploro', 'I explore'], ['exploras', 'you explore'], ['explora', 's/he explores'],
        ['exploramos', 'we explore'], ['exploran', 'they explore'],
    ], [
        ['exploré', 'I explored'], ['exploraste', 'you explored'], ['exploró', 's/he explored'],
        ['exploramos', 'we explored'], ['exploraron', 'they explored'],
    ], [
        ['exploraba', 'I used to explore'], ['explorabas', 'you used to explore'], ['exploraba', 's/he used to explore'],
        ['explorábamos', 'we used to explore'], ['exploraban', 'they used to explore'],
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
    simpleVerb('relajarse', 'to relax, to calm down', [
        ['relajarse', 'to relax'], ['relajado', 'relaxed'], ['relajando', 'relaxing'],
    ], [
        ['me relajo', 'I relax'], ['te relajas', 'you relax'], ['se relaja', 's/he relaxes'],
        ['nos relajamos', 'we relax'], ['se relajan', 'they relax'],
    ], [
        ['me relajé', 'I relaxed'], ['te relajaste', 'you relaxed'], ['se relajó', 's/he relaxed'],
        ['nos relajamos', 'we relaxed'], ['se relajaron', 'they relaxed'],
    ], [
        ['me relajaba', 'I used to relax'], ['te relajabas', 'you used to relax'], ['se relajaba', 's/he used to relax'],
        ['nos relajábamos', 'we used to relax'], ['se relajaban', 'they used to relax'],
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
    simpleVerb('practicar', 'to practice', [
        ['practicar', 'to practice'], ['practicado', 'practiced'], ['practicando', 'practicing'],
    ], [
        ['practico', 'I practice'], ['practicas', 'you practice'], ['practica', 's/he practices'],
        ['practicamos', 'we practice'], ['practican', 'they practice'],
    ], [
        ['practiqué', 'I practiced', true], ['practicaste', 'you practiced'], ['practicó', 's/he practiced'],
        ['practicamos', 'we practiced'], ['practicaron', 'they practiced'],
    ], [
        ['practicaba', 'I used to practice'], ['practicabas', 'you used to practice'], ['practicaba', 's/he used to practice'],
        ['practicábamos', 'we used to practice'], ['practicaban', 'they used to practice'],
    ]),
    simpleVerb('robar', 'to steal, to rob', [
        ['robar', 'to steal'], ['robado', 'stolen'], ['robando', 'stealing'],
    ], [
        ['robo', 'I steal'], ['robas', 'you steal'], ['roba', 's/he steals'],
        ['robamos', 'we steal'], ['roban', 'they steal'],
    ], [
        ['robé', 'I stole'], ['robaste', 'you stole'], ['robó', 's/he stole'],
        ['robamos', 'we stole'], ['robaron', 'they stole'],
    ], [
        ['robaba', 'I used to steal'], ['robabas', 'you used to steal'], ['robaba', 's/he used to steal'],
        ['robábamos', 'we used to steal'], ['robaban', 'they used to steal'],
    ]),
    simpleVerb('crecer', 'to grow, to grow up', [
        ['crecer', 'to grow'], ['crecido', 'grown'], ['creciendo', 'growing'],
    ], [
        ['crezco', 'I grow', true], ['creces', 'you grow'], ['crece', 's/he grows'],
        ['crecemos', 'we grow'], ['crecen', 'they grow'],
    ], [
        ['crecí', 'I grew'], ['creciste', 'you grew'], ['creció', 's/he grew'],
        ['crecimos', 'we grew'], ['crecieron', 'they grew'],
    ], [
        ['crecía', 'I used to grow'], ['crecías', 'you used to grow'], ['crecía', 's/he used to grow'],
        ['crecíamos', 'we used to grow'], ['crecían', 'they used to grow'],
    ]),
    simpleVerb('causar', 'to cause', [
        ['causar', 'to cause'], ['causado', 'caused'], ['causando', 'causing'],
    ], [
        ['causo', 'I cause'], ['causas', 'you cause'], ['causa', 's/he causes'],
        ['causamos', 'we cause'], ['causan', 'they cause'],
    ], [
        ['causé', 'I caused'], ['causaste', 'you caused'], ['causó', 's/he caused'],
        ['causamos', 'we caused'], ['causaron', 'they caused'],
    ], [
        ['causaba', 'I used to cause'], ['causabas', 'you used to cause'], ['causaba', 's/he used to cause'],
        ['causábamos', 'we used to cause'], ['causaban', 'they used to cause'],
    ]),
    simpleVerb('descargar', 'to download, to unload', [
        ['descargar', 'to download'], ['descargado', 'downloaded'], ['descargando', 'downloading'],
    ], [
        ['descargo', 'I download'], ['descargas', 'you download'], ['descarga', 's/he downloads'],
        ['descargamos', 'we download'], ['descargan', 'they download'],
    ], [
        ['descargué', 'I downloaded', true], ['descargaste', 'you downloaded'], ['descargó', 's/he downloaded'],
        ['descargamos', 'we downloaded'], ['descargaron', 'they downloaded'],
    ], [
        ['descargaba', 'I used to download'], ['descargabas', 'you used to download'], ['descargaba', 's/he used to download'],
        ['descargábamos', 'we used to download'], ['descargaban', 'they used to download'],
    ]),
    simpleVerb('copiar', 'to copy', [
        ['copiar', 'to copy'], ['copiado', 'copied'], ['copiando', 'copying'],
    ], [
        ['copio', 'I copy'], ['copias', 'you copy'], ['copia', 's/he copies'],
        ['copiamos', 'we copy'], ['copian', 'they copy'],
    ], [
        ['copié', 'I copied'], ['copiaste', 'you copied'], ['copió', 's/he copied'],
        ['copiamos', 'we copied'], ['copiaron', 'they copied'],
    ], [
        ['copiaba', 'I used to copy'], ['copiabas', 'you used to copy'], ['copiaba', 's/he used to copy'],
        ['copiábamos', 'we used to copy'], ['copiaban', 'they used to copy'],
    ]),
    simpleVerb('soler', 'to tend to (do), to usually (do)', [
        ['soler', 'to tend to'], ['solido', 'tended to'], ['soliendo', 'tending to'],
    ], [
        ['suelo', 'I usually', true], ['sueles', 'you usually', true], ['suele', 's/he usually', true],
        ['solemos', 'we usually'], ['suelen', 'they usually', true],
    ], [
        ['solí', 'I tended to'], ['soliste', 'you tended to'], ['solió', 's/he tended to'],
        ['solimos', 'we tended to'], ['solieron', 'they tended to'],
    ], [
        ['solía', 'I used to'], ['solías', 'you used to'], ['solía', 's/he used to'],
        ['solíamos', 'we used to'], ['solían', 'they used to'],
    ]),
    simpleVerb('mudarse', 'to move (house), to relocate', [
        ['mudarse', 'to move'], ['mudado', 'moved'], ['mudando', 'moving'],
    ], [
        ['me mudo', 'I move'], ['te mudas', 'you move'], ['se muda', 's/he moves'],
        ['nos mudamos', 'we move'], ['se mudan', 'they move'],
    ], [
        ['me mudé', 'I moved'], ['te mudaste', 'you moved'], ['se mudó', 's/he moved'],
        ['nos mudamos', 'we moved'], ['se mudaron', 'they moved'],
    ], [
        ['me mudaba', 'I used to move'], ['te mudabas', 'you used to move'], ['se mudaba', 's/he used to move'],
        ['nos mudábamos', 'we used to move'], ['se mudaban', 'they used to move'],
    ]),
    simpleVerb('colgar', 'to hang, to hang up', [
        ['colgar', 'to hang'], ['colgado', 'hung'], ['colgando', 'hanging'],
    ], [
        ['cuelgo', 'I hang', true], ['cuelgas', 'you hang', true], ['cuelga', 's/he hangs', true],
        ['colgamos', 'we hang'], ['cuelgan', 'they hang', true],
    ], [
        ['colgué', 'I hung', true], ['colgaste', 'you hung'], ['colgó', 's/he hung'],
        ['colgamos', 'we hung'], ['colgaron', 'they hung'],
    ], [
        ['colgaba', 'I used to hang'], ['colgabas', 'you used to hang'], ['colgaba', 's/he used to hang'],
        ['colgábamos', 'we used to hang'], ['colgaban', 'they used to hang'],
    ]),
    simpleVerb('amueblar', 'to furnish', [
        ['amueblar', 'to furnish'], ['amueblado', 'furnished'], ['amueblando', 'furnishing'],
    ], [
        ['amueblo', 'I furnish'], ['amueblas', 'you furnish'], ['amuebla', 's/he furnishes'],
        ['amueblamos', 'we furnish'], ['amueblan', 'they furnish'],
    ], [
        ['amueblé', 'I furnished'], ['amueblaste', 'you furnished'], ['amuebló', 's/he furnished'],
        ['amueblamos', 'we furnished'], ['amueblaron', 'they furnished'],
    ], [
        ['amueblaba', 'I used to furnish'], ['amueblabas', 'you used to furnish'], ['amueblaba', 's/he used to furnish'],
        ['amueblábamos', 'we used to furnish'], ['amueblaban', 'they used to furnish'],
    ]),
    simpleVerb('mostrar', 'to show', [
        ['mostrar', 'to show'], ['mostrado', 'shown'], ['mostrando', 'showing'],
    ], [
        ['muestro', 'I show', true], ['muestras', 'you show', true], ['muestra', 's/he shows', true],
        ['mostramos', 'we show'], ['muestran', 'they show', true],
    ], [
        ['mostré', 'I showed'], ['mostraste', 'you showed'], ['mostró', 's/he showed'],
        ['mostramos', 'we showed'], ['mostraron', 'they showed'],
    ], [
        ['mostraba', 'I used to show'], ['mostrabas', 'you used to show'], ['mostraba', 's/he used to show'],
        ['mostrábamos', 'we used to show'], ['mostraban', 'they used to show'],
    ]),
    simpleVerb('contratar', 'to hire, to contract', [
        ['contratar', 'to hire'], ['contratado', 'hired'], ['contratando', 'hiring'],
    ], [
        ['contrato', 'I hire'], ['contratas', 'you hire'], ['contrata', 's/he hires'],
        ['contratamos', 'we hire'], ['contratan', 'they hire'],
    ], [
        ['contraté', 'I hired'], ['contrataste', 'you hired'], ['contrató', 's/he hired'],
        ['contratamos', 'we hired'], ['contrataron', 'they hired'],
    ], [
        ['contrataba', 'I used to hire'], ['contratabas', 'you used to hire'], ['contrataba', 's/he used to hire'],
        ['contratábamos', 'we used to hire'], ['contrataban', 'they used to hire'],
    ]),
    simpleVerb('vender', 'to sell', [
        ['vender', 'to sell'], ['vendido', 'sold'], ['vendiendo', 'selling'],
    ], [
        ['vendo', 'I sell'], ['vendes', 'you sell'], ['vende', 's/he sells'],
        ['vendemos', 'we sell'], ['venden', 'they sell'],
    ], [
        ['vendí', 'I sold'], ['vendiste', 'you sold'], ['vendió', 's/he sold'],
        ['vendimos', 'we sold'], ['vendieron', 'they sold'],
    ], [
        ['vendía', 'I used to sell'], ['vendías', 'you used to sell'], ['vendía', 's/he used to sell'],
        ['vendíamos', 'we used to sell'], ['vendían', 'they used to sell'],
    ]),
    simpleVerb('decorar', 'to decorate', [
        ['decorar', 'to decorate'], ['decorado', 'decorated'], ['decorando', 'decorating'],
    ], [
        ['decoro', 'I decorate'], ['decoras', 'you decorate'], ['decora', 's/he decorates'],
        ['decoramos', 'we decorate'], ['decoran', 'they decorate'],
    ], [
        ['decoré', 'I decorated'], ['decoraste', 'you decorated'], ['decoró', 's/he decorated'],
        ['decoramos', 'we decorated'], ['decoraron', 'they decorated'],
    ], [
        ['decoraba', 'I used to decorate'], ['decorabas', 'you used to decorate'], ['decoraba', 's/he used to decorate'],
        ['decorábamos', 'we used to decorate'], ['decoraban', 'they used to decorate'],
    ]),
    simpleVerb('estresar', 'to stress (out)', [
        ['estresar', 'to stress'], ['estresado', 'stressed'], ['estresando', 'stressing'],
    ], [
        ['estreso', 'I stress'], ['estresas', 'you stress'], ['estresa', 's/he stresses'],
        ['estresamos', 'we stress'], ['estresan', 'they stress'],
    ], [
        ['estresé', 'I stressed'], ['estresaste', 'you stressed'], ['estresó', 's/he stressed'],
        ['estresamos', 'we stressed'], ['estresaron', 'they stressed'],
    ], [
        ['estresaba', 'I used to stress'], ['estresabas', 'you used to stress'], ['estresaba', 's/he used to stress'],
        ['estresábamos', 'we used to stress'], ['estresaban', 'they used to stress'],
    ]),
    simpleVerb('vaciar', 'to empty', [
        ['vaciar', 'to empty'], ['vaciado', 'emptied'], ['vaciando', 'emptying'],
    ], [
        ['vacío', 'I empty', true], ['vacías', 'you empty', true], ['vacía', 's/he empties', true],
        ['vaciamos', 'we empty'], ['vacían', 'they empty', true],
    ], [
        ['vacié', 'I emptied'], ['vaciaste', 'you emptied'], ['vació', 's/he emptied'],
        ['vaciamos', 'we emptied'], ['vaciaron', 'they emptied'],
    ], [
        ['vaciaba', 'I used to empty'], ['vaciabas', 'you used to empty'], ['vaciaba', 's/he used to empty'],
        ['vaciábamos', 'we used to empty'], ['vaciaban', 'they used to empty'],
    ]),
    simpleVerb('repartir', 'to distribute, to hand out', [
        ['repartir', 'to distribute'], ['repartido', 'distributed'], ['repartiendo', 'distributing'],
    ], [
        ['reparto', 'I distribute'], ['repartes', 'you distribute'], ['reparte', 's/he distributes'],
        ['repartimos', 'we distribute'], ['reparten', 'they distribute'],
    ], [
        ['repartí', 'I distributed'], ['repartiste', 'you distributed'], ['repartió', 's/he distributed'],
        ['repartimos', 'we distributed'], ['repartieron', 'they distributed'],
    ], [
        ['repartía', 'I used to distribute'], ['repartías', 'you used to distribute'], ['repartía', 's/he used to distribute'],
        ['repartíamos', 'we used to distribute'], ['repartían', 'they used to distribute'],
    ]),
    simpleVerb('requerir', 'to require', [
        ['requerir', 'to require'], ['requerido', 'required'], ['requiriendo', 'requiring'],
    ], [
        ['requiero', 'I require', true], ['requieres', 'you require', true], ['requiere', 's/he requires', true],
        ['requerimos', 'we require'], ['requieren', 'they require', true],
    ], [
        ['requerí', 'I required'], ['requeriste', 'you required'], ['requirió', 's/he required', true],
        ['requerimos', 'we required'], ['requirieron', 'they required', true],
    ], [
        ['requería', 'I used to require'], ['requerías', 'you used to require'], ['requería', 's/he used to require'],
        ['requeríamos', 'we used to require'], ['requerían', 'they used to require'],
    ]),
    simpleVerb('ceder', 'to yield, to give in, to assign, to transfer', [
        ['ceder', 'to yield'], ['cedido', 'yielded'], ['cediendo', 'yielding'],
    ], [
        ['cedo', 'I yield'], ['cedes', 'you yield'], ['cede', 's/he yields'],
        ['cedemos', 'we yield'], ['ceden', 'they yield'],
    ], [
        ['cedí', 'I yielded'], ['cediste', 'you yielded'], ['cedió', 's/he yielded'],
        ['cedimos', 'we yielded'], ['cedieron', 'they yielded'],
    ], [
        ['cedía', 'I used to yield'], ['cedías', 'you used to yield'], ['cedía', 's/he used to yield'],
        ['cedíamos', 'we used to yield'], ['cedían', 'they used to yield'],
    ]),
    simpleVerb('pesarse', 'to weigh (oneself)', [
        ['pesarse', 'to weigh oneself'], ['pesado', 'weighed'], ['pesando', 'weighing'],
    ], [
        ['me peso', 'I weigh myself'], ['te pesas', 'you weigh yourself'], ['se pesa', 's/he weighs her/himself'],
        ['nos pesamos', 'we weigh ourselves'], ['se pesan', 'they weigh themselves'],
    ], [
        ['me pesé', 'I weighed myself'], ['te pesaste', 'you weighed yourself'], ['se pesó', 's/he weighed her/himself'],
        ['nos pesamos', 'we weighed ourselves'], ['se pesaron', 'they weighed themselves'],
    ], [
        ['me pesaba', 'I used to weigh myself'], ['te pesabas', 'you used to weigh yourself'], ['se pesaba', 's/he used to weigh her/himself'],
        ['nos pesábamos', 'we used to weigh ourselves'], ['se pesaban', 'they used to weigh themselves'],
    ]),
    simpleVerb('respetar', 'to respect', [
        ['respetar', 'to respect'], ['respetado', 'respected'], ['respetando', 'respecting'],
    ], [
        ['respeto', 'I respect'], ['respetas', 'you respect'], ['respeta', 's/he respects'],
        ['respetamos', 'we respect'], ['respetan', 'they respect'],
    ], [
        ['respeté', 'I respected'], ['respetaste', 'you respected'], ['respetó', 's/he respected'],
        ['respetamos', 'we respected'], ['respetaron', 'they respected'],
    ], [
        ['respetaba', 'I used to respect'], ['respetabas', 'you used to respect'], ['respetaba', 's/he used to respect'],
        ['respetábamos', 'we used to respect'], ['respetaban', 'they used to respect'],
    ]),
    simpleVerb('arreglar', 'to fix, to mend, to arrange, to repair', [
        ['arreglar', 'to fix'], ['arreglado', 'fixed'], ['arreglando', 'fixing'],
    ], [
        ['arreglo', 'I fix'], ['arreglas', 'you fix'], ['arregla', 's/he fixes'],
        ['arreglamos', 'we fix'], ['arreglan', 'they fix'],
    ], [
        ['arreglé', 'I fixed'], ['arreglaste', 'you fixed'], ['arregló', 's/he fixed'],
        ['arreglamos', 'we fixed'], ['arreglaron', 'they fixed'],
    ], [
        ['arreglaba', 'I used to fix'], ['arreglabas', 'you used to fix'], ['arreglaba', 's/he used to fix'],
        ['arreglábamos', 'we used to fix'], ['arreglaban', 'they used to fix'],
    ]),
    simpleVerb('acercarse', 'to approach, to come closer, to get closer', [
        ['acercarse', 'to approach'], ['acercado', 'approached'], ['acercando', 'approaching'],
    ], [
        ['me acerco', 'I approach'], ['te acercas', 'you approach'], ['se acerca', 's/he approaches'],
        ['nos acercamos', 'we approach'], ['se acercan', 'they approach'],
    ], [
        ['me acerqué', 'I approached', true], ['te acercaste', 'you approached'], ['se acercó', 's/he approached'],
        ['nos acercamos', 'we approached'], ['se acercaron', 'they approached'],
    ], [
        ['me acercaba', 'I used to approach'], ['te acercabas', 'you used to approach'], ['se acercaba', 's/he used to approach'],
        ['nos acercábamos', 'we used to approach'], ['se acercaban', 'they used to approach'],
    ]),
    simpleVerb('esconder', 'to hide', [
        ['esconder', 'to hide'], ['escondido', 'hidden'], ['escondiendo', 'hiding'],
    ], [
        ['escondo', 'I hide'], ['escondes', 'you hide'], ['esconde', 's/he hides'],
        ['escondemos', 'we hide'], ['esconden', 'they hide'],
    ], [
        ['escondí', 'I hid'], ['escondiste', 'you hid'], ['escondió', 's/he hid'],
        ['escondimos', 'we hid'], ['escondieron', 'they hid'],
    ], [
        ['escondía', 'I used to hide'], ['escondías', 'you used to hide'], ['escondía', 's/he used to hide'],
        ['escondíamos', 'we used to hide'], ['escondían', 'they used to hide'],
    ]),
    simpleVerb('convenir', 'to suit, to be advisable, to be in one\'s interest, to agree', [
        ['convenir', 'to suit'], ['convenido', 'agreed'], ['conviniendo', 'suiting'],
    ], [
        ['convengo', 'I suit', true], ['convienes', 'you suit', true], ['conviene', 'it suits', true],
        ['convenimos', 'we agree'], ['convienen', 'they suit', true],
    ], [
        ['convine', 'I agreed', true], ['conviniste', 'you agreed', true], ['convino', 'it suited', true],
        ['convinimos', 'we agreed', true], ['convinieron', 'they agreed', true],
    ], [
        ['convenía', 'I used to suit'], ['convenías', 'you used to suit'], ['convenía', 'it used to suit'],
        ['conveníamos', 'we used to agree'], ['convenían', 'they used to suit'],
    ]),
    simpleVerb('depositar', 'to deposit', [
        ['depositar', 'to deposit'], ['depositado', 'deposited'], ['depositando', 'depositing'],
    ], [
        ['deposito', 'I deposit'], ['depositas', 'you deposit'], ['deposita', 's/he deposits'],
        ['depositamos', 'we deposit'], ['depositan', 'they deposit'],
    ], [
        ['deposité', 'I deposited'], ['depositaste', 'you deposited'], ['depositó', 's/he deposited'],
        ['depositamos', 'we deposited'], ['depositaron', 'they deposited'],
    ], [
        ['depositaba', 'I used to deposit'], ['depositabas', 'you used to deposit'], ['depositaba', 's/he used to deposit'],
        ['depositábamos', 'we used to deposit'], ['depositaban', 'they used to deposit'],
    ]),
    simpleVerb('patinar', 'to skate', [
        ['patinar', 'to skate'], ['patinado', 'skated'], ['patinando', 'skating'],
    ], [
        ['patino', 'I skate'], ['patinas', 'you skate'], ['patina', 's/he skates'],
        ['patinamos', 'we skate'], ['patinan', 'they skate'],
    ], [
        ['patiné', 'I skated'], ['patinaste', 'you skated'], ['patinó', 's/he skated'],
        ['patinamos', 'we skated'], ['patinaron', 'they skated'],
    ], [
        ['patinaba', 'I used to skate'], ['patinabas', 'you used to skate'], ['patinaba', 's/he used to skate'],
        ['patinábamos', 'we used to skate'], ['patinaban', 'they used to skate'],
    ]),
    simpleVerb('nadar', 'to swim', [
        ['nadar', 'to swim'], ['nadado', 'swum'], ['nadando', 'swimming'],
    ], [
        ['nado', 'I swim'], ['nadas', 'you swim'], ['nada', 's/he swims'],
        ['nadamos', 'we swim'], ['nadan', 'they swim'],
    ], [
        ['nadé', 'I swam'], ['nadaste', 'you swam'], ['nadó', 's/he swam'],
        ['nadamos', 'we swam'], ['nadaron', 'they swam'],
    ], [
        ['nadaba', 'I used to swim'], ['nadabas', 'you used to swim'], ['nadaba', 's/he used to swim'],
        ['nadábamos', 'we used to swim'], ['nadaban', 'they used to swim'],
    ]),
    simpleVerb('intentar', 'to try, to attempt', [
        ['intentar', 'to try'], ['intentado', 'tried'], ['intentando', 'trying'],
    ], [
        ['intento', 'I try'], ['intentas', 'you try'], ['intenta', 's/he tries'],
        ['intentamos', 'we try'], ['intentan', 'they try'],
    ], [
        ['intenté', 'I tried'], ['intentaste', 'you tried'], ['intentó', 's/he tried'],
        ['intentamos', 'we tried'], ['intentaron', 'they tried'],
    ], [
        ['intentaba', 'I used to try'], ['intentabas', 'you used to try'], ['intentaba', 's/he used to try'],
        ['intentábamos', 'we used to try'], ['intentaban', 'they used to try'],
    ]),
    simpleVerb('entrenar', 'to train, to work out', [
        ['entrenar', 'to train'], ['entrenado', 'trained'], ['entrenando', 'training'],
    ], [
        ['entreno', 'I train'], ['entrenas', 'you train'], ['entrena', 's/he trains'],
        ['entrenamos', 'we train'], ['entrenan', 'they train'],
    ], [
        ['entrené', 'I trained'], ['entrenaste', 'you trained'], ['entrenó', 's/he trained'],
        ['entrenamos', 'we trained'], ['entrenaron', 'they trained'],
    ], [
        ['entrenaba', 'I used to train'], ['entrenabas', 'you used to train'], ['entrenaba', 's/he used to train'],
        ['entrenábamos', 'we used to train'], ['entrenaban', 'they used to train'],
    ]),
    simpleVerb('congelar', 'to freeze', [
        ['congelar', 'to freeze'], ['congelado', 'frozen'], ['congelando', 'freezing'],
    ], [
        ['congelo', 'I freeze'], ['congelas', 'you freeze'], ['congela', 's/he freezes'],
        ['congelamos', 'we freeze'], ['congelan', 'they freeze'],
    ], [
        ['congelé', 'I froze'], ['congelaste', 'you froze'], ['congeló', 's/he froze'],
        ['congelamos', 'we froze'], ['congelaron', 'they froze'],
    ], [
        ['congelaba', 'I used to freeze'], ['congelabas', 'you used to freeze'], ['congelaba', 's/he used to freeze'],
        ['congelábamos', 'we used to freeze'], ['congelaban', 'they used to freeze'],
    ]),
    simpleVerb('confundirse', 'to get confused, to mix things up', [
        ['confundirse', 'to get confused'], ['confundido', 'confused'], ['confundiendo', 'confusing'],
    ], [
        ['me confundo', 'I get confused'], ['te confundes', 'you get confused'], ['se confunde', 's/he gets confused'],
        ['nos confundimos', 'we get confused'], ['se confunden', 'they get confused'],
    ], [
        ['me confundí', 'I got confused'], ['te confundiste', 'you got confused'], ['se confundió', 's/he got confused'],
        ['nos confundimos', 'we got confused'], ['se confundieron', 'they got confused'],
    ], [
        ['me confundía', 'I used to get confused'], ['te confundías', 'you used to get confused'], ['se confundía', 's/he used to get confused'],
        ['nos confundíamos', 'we used to get confused'], ['se confundían', 'they used to get confused'],
    ]),
    simpleVerb('apurar', 'to hurry, to finish, to rush', [
        ['apurar', 'to hurry'], ['apurado', 'hurried'], ['apurando', 'hurrying'],
    ], [
        ['apuro', 'I hurry'], ['apuras', 'you hurry'], ['apura', 's/he hurries'],
        ['apuramos', 'we hurry'], ['apuran', 'they hurry'],
    ], [
        ['apuré', 'I hurried'], ['apuraste', 'you hurried'], ['apuró', 's/he hurried'],
        ['apuramos', 'we hurried'], ['apuraron', 'they hurried'],
    ], [
        ['apuraba', 'I used to hurry'], ['apurabas', 'you used to hurry'], ['apuraba', 's/he used to hurry'],
        ['apurábamos', 'we used to hurry'], ['apuraban', 'they used to hurry'],
    ]),
    simpleVerb('dañar', 'to damage', [
        ['dañar', 'to damage'], ['dañado', 'damaged'], ['dañando', 'damaging'],
    ], [
        ['daño', 'I damage'], ['dañas', 'you damage'], ['daña', 's/he damages'],
        ['dañamos', 'we damage'], ['dañan', 'they damage'],
    ], [
        ['dañé', 'I damaged'], ['dañaste', 'you damaged'], ['dañó', 's/he damaged'],
        ['dañamos', 'we damaged'], ['dañaron', 'they damaged'],
    ], [
        ['dañaba', 'I used to damage'], ['dañabas', 'you used to damage'], ['dañaba', 's/he used to damage'],
        ['dañábamos', 'we used to damage'], ['dañaban', 'they used to damage'],
    ]),
    simpleVerb('sonreír', 'to smile', [
        ['sonreír', 'to smile'], ['sonreído', 'smiled'], ['sonriendo', 'smiling'],
    ], [
        ['sonrío', 'I smile', true], ['sonríes', 'you smile', true], ['sonríe', 's/he smiles', true],
        ['sonreímos', 'we smile'], ['sonríen', 'they smile', true],
    ], [
        ['sonreí', 'I smiled'], ['sonreíste', 'you smiled'], ['sonrió', 's/he smiled', true],
        ['sonreímos', 'we smiled'], ['sonrieron', 'they smiled', true],
    ], [
        ['sonreía', 'I used to smile'], ['sonreías', 'you used to smile'], ['sonreía', 's/he used to smile'],
        ['sonreíamos', 'we used to smile'], ['sonreían', 'they used to smile'],
    ]),
    simpleVerb('quitar', 'to take away, to remove, to take from', [
        ['quitar', 'to remove'], ['quitado', 'removed'], ['quitando', 'removing'],
    ], [
        ['quito', 'I remove'], ['quitas', 'you remove'], ['quita', 's/he removes'],
        ['quitamos', 'we remove'], ['quitan', 'they remove'],
    ], [
        ['quité', 'I removed'], ['quitaste', 'you removed'], ['quitó', 's/he removed'],
        ['quitamos', 'we removed'], ['quitaron', 'they removed'],
    ], [
        ['quitaba', 'I used to remove'], ['quitabas', 'you used to remove'], ['quitaba', 's/he used to remove'],
        ['quitábamos', 'we used to remove'], ['quitaban', 'they used to remove'],
    ]),
    simpleVerb('tirar', 'to throw, to throw away, to drop, to shoot, to pull', [
        ['tirar', 'to throw'], ['tirado', 'thrown'], ['tirando', 'throwing'],
    ], [
        ['tiro', 'I throw'], ['tiras', 'you throw'], ['tira', 's/he throws'],
        ['tiramos', 'we throw'], ['tiran', 'they throw'],
    ], [
        ['tiré', 'I threw'], ['tiraste', 'you threw'], ['tiró', 's/he threw'],
        ['tiramos', 'we threw'], ['tiraron', 'they threw'],
    ], [
        ['tiraba', 'I used to throw'], ['tirabas', 'you used to throw'], ['tiraba', 's/he used to throw'],
        ['tirábamos', 'we used to throw'], ['tiraban', 'they used to throw'],
    ]),
    simpleVerb('alquilar', 'to rent, to hire', [
        ['alquilar', 'to rent'], ['alquilado', 'rented'], ['alquilando', 'renting'],
    ], [
        ['alquilo', 'I rent'], ['alquilas', 'you rent'], ['alquila', 's/he rents'],
        ['alquilamos', 'we rent'], ['alquilan', 'they rent'],
    ], [
        ['alquilé', 'I rented'], ['alquilaste', 'you rented'], ['alquiló', 's/he rented'],
        ['alquilamos', 'we rented'], ['alquilaron', 'they rented'],
    ], [
        ['alquilaba', 'I used to rent'], ['alquilabas', 'you used to rent'], ['alquilaba', 's/he used to rent'],
        ['alquilábamos', 'we used to rent'], ['alquilaban', 'they used to rent'],
    ]),
    simpleVerb('diseñar', 'to design', [
        ['diseñar', 'to design'], ['diseñado', 'designed'], ['diseñando', 'designing'],
    ], [
        ['diseño', 'I design'], ['diseñas', 'you design'], ['diseña', 's/he designs'],
        ['diseñamos', 'we design'], ['diseñan', 'they design'],
    ], [
        ['diseñé', 'I designed'], ['diseñaste', 'you designed'], ['diseñó', 's/he designed'],
        ['diseñamos', 'we designed'], ['diseñaron', 'they designed'],
    ], [
        ['diseñaba', 'I used to design'], ['diseñabas', 'you used to design'], ['diseñaba', 's/he used to design'],
        ['diseñábamos', 'we used to design'], ['diseñaban', 'they used to design'],
    ]),
    simpleVerb('recoger', 'to collect, to pick up, to gather', [
        ['recoger', 'to collect'], ['recogido', 'collected'], ['recogiendo', 'collecting'],
    ], [
        ['recojo', 'I collect', true], ['recoges', 'you collect'], ['recoge', 's/he collects'],
        ['recogemos', 'we collect'], ['recogen', 'they collect'],
    ], [
        ['recogí', 'I collected'], ['recogiste', 'you collected'], ['recogió', 's/he collected'],
        ['recogimos', 'we collected'], ['recogieron', 'they collected'],
    ], [
        ['recogía', 'I used to collect'], ['recogías', 'you used to collect'], ['recogía', 's/he used to collect'],
        ['recogíamos', 'we used to collect'], ['recogían', 'they used to collect'],
    ]),
    simpleVerb('molestar', 'to bother, to disturb, to annoy', [
        ['molestar', 'to bother'], ['molestado', 'bothered'], ['molestando', 'bothering'],
    ], [
        ['molesto', 'I bother'], ['molestas', 'you bother'], ['molesta', 's/he bothers'],
        ['molestamos', 'we bother'], ['molestan', 'they bother'],
    ], [
        ['molesté', 'I bothered'], ['molestaste', 'you bothered'], ['molestó', 's/he bothered'],
        ['molestamos', 'we bothered'], ['molestaron', 'they bothered'],
    ], [
        ['molestaba', 'I used to bother'], ['molestabas', 'you used to bother'], ['molestaba', 's/he used to bother'],
        ['molestábamos', 'we used to bother'], ['molestaban', 'they used to bother'],
    ]),
    simpleVerb('mover', 'to move (something)', [
        ['mover', 'to move'], ['movido', 'moved'], ['moviendo', 'moving'],
    ], [
        ['muevo', 'I move', true], ['mueves', 'you move', true], ['mueve', 's/he moves', true],
        ['movemos', 'we move'], ['mueven', 'they move', true],
    ], [
        ['moví', 'I moved'], ['moviste', 'you moved'], ['movió', 's/he moved'],
        ['movimos', 'we moved'], ['movieron', 'they moved'],
    ], [
        ['movía', 'I used to move'], ['movías', 'you used to move'], ['movía', 's/he used to move'],
        ['movíamos', 'we used to move'], ['movían', 'they used to move'],
    ]),
    simpleVerb('insistir', 'to insist', [
        ['insistir', 'to insist'], ['insistido', 'insisted'], ['insistiendo', 'insisting'],
    ], [
        ['insisto', 'I insist'], ['insistes', 'you insist'], ['insiste', 's/he insists'],
        ['insistimos', 'we insist'], ['insisten', 'they insist'],
    ], [
        ['insistí', 'I insisted'], ['insististe', 'you insisted'], ['insistió', 's/he insisted'],
        ['insistimos', 'we insisted'], ['insistieron', 'they insisted'],
    ], [
        ['insistía', 'I used to insist'], ['insistías', 'you used to insist'], ['insistía', 's/he used to insist'],
        ['insistíamos', 'we used to insist'], ['insistían', 'they used to insist'],
    ]),
    simpleVerb('lamentar', 'to regret, to lament', [
        ['lamentar', 'to regret'], ['lamentado', 'regretted'], ['lamentando', 'regretting'],
    ], [
        ['lamento', 'I regret'], ['lamentas', 'you regret'], ['lamenta', 's/he regrets'],
        ['lamentamos', 'we regret'], ['lamentan', 'they regret'],
    ], [
        ['lamenté', 'I regretted'], ['lamentaste', 'you regretted'], ['lamentó', 's/he regretted'],
        ['lamentamos', 'we regretted'], ['lamentaron', 'they regretted'],
    ], [
        ['lamentaba', 'I used to regret'], ['lamentabas', 'you used to regret'], ['lamentaba', 's/he used to regret'],
        ['lamentábamos', 'we used to regret'], ['lamentaban', 'they used to regret'],
    ]),
    simpleVerb('perdonar', 'to forgive, to pardon, to excuse', [
        ['perdonar', 'to forgive'], ['perdonado', 'forgiven'], ['perdonando', 'forgiving'],
    ], [
        ['perdono', 'I forgive'], ['perdonas', 'you forgive'], ['perdona', 's/he forgives'],
        ['perdonamos', 'we forgive'], ['perdonan', 'they forgive'],
    ], [
        ['perdoné', 'I forgave'], ['perdonaste', 'you forgave'], ['perdonó', 's/he forgave'],
        ['perdonamos', 'we forgave'], ['perdonaron', 'they forgave'],
    ], [
        ['perdonaba', 'I used to forgive'], ['perdonabas', 'you used to forgive'], ['perdonaba', 's/he used to forgive'],
        ['perdonábamos', 'we used to forgive'], ['perdonaban', 'they used to forgive'],
    ]),
    simpleVerb('quejarse', 'to complain, to moan', [
        ['quejarse', 'to complain'], ['quejado', 'complained'], ['quejando', 'complaining'],
    ], [
        ['me quejo', 'I complain'], ['te quejas', 'you complain'], ['se queja', 's/he complains'],
        ['nos quejamos', 'we complain'], ['se quejan', 'they complain'],
    ], [
        ['me quejé', 'I complained'], ['te quejaste', 'you complained'], ['se quejó', 's/he complained'],
        ['nos quejamos', 'we complained'], ['se quejaron', 'they complained'],
    ], [
        ['me quejaba', 'I used to complain'], ['te quejabas', 'you used to complain'], ['se quejaba', 's/he used to complain'],
        ['nos quejábamos', 'we used to complain'], ['se quejaban', 'they used to complain'],
    ]),
    simpleVerb('imprimir', 'to print', [
        ['imprimir', 'to print'], ['impreso', 'printed'], ['imprimiendo', 'printing'],
    ], [
        ['imprimo', 'I print'], ['imprimes', 'you print'], ['imprime', 's/he prints'],
        ['imprimimos', 'we print'], ['imprimen', 'they print'],
    ], [
        ['imprimí', 'I printed'], ['imprimiste', 'you printed'], ['imprimió', 's/he printed'],
        ['imprimimos', 'we printed'], ['imprimieron', 'they printed'],
    ], [
        ['imprimía', 'I used to print'], ['imprimías', 'you used to print'], ['imprimía', 's/he used to print'],
        ['imprimíamos', 'we used to print'], ['imprimían', 'they used to print'],
    ]),
    simpleVerb('faltar', 'to lack, to be missing, to be lacking, to fall short (of)', [
        ['faltar', 'to lack'], ['faltado', 'lacked'], ['faltando', 'lacking'],
    ], [
        ['falto', 'I am missing'], ['faltas', 'you are missing'], ['falta', 's/he is missing'],
        ['faltamos', 'we are missing'], ['faltan', 'they are missing'],
    ], [
        ['falté', 'I was missing'], ['faltaste', 'you were missing'], ['faltó', 's/he was missing'],
        ['faltamos', 'we were missing'], ['faltaron', 'they were missing'],
    ], [
        ['faltaba', 'I used to be missing'], ['faltabas', 'you used to be missing'], ['faltaba', 's/he used to be missing'],
        ['faltábamos', 'we used to be missing'], ['faltaban', 'they used to be missing'],
    ]),
    simpleVerb('saltar', 'to jump, to leap', [
        ['saltar', 'to jump'], ['saltado', 'jumped'], ['saltando', 'jumping'],
    ], [
        ['salto', 'I jump'], ['saltas', 'you jump'], ['salta', 's/he jumps'],
        ['saltamos', 'we jump'], ['saltan', 'they jump'],
    ], [
        ['salté', 'I jumped'], ['saltaste', 'you jumped'], ['saltó', 's/he jumped'],
        ['saltamos', 'we jumped'], ['saltaron', 'they jumped'],
    ], [
        ['saltaba', 'I used to jump'], ['saltabas', 'you used to jump'], ['saltaba', 's/he used to jump'],
        ['saltábamos', 'we used to jump'], ['saltaban', 'they used to jump'],
    ]),
    simpleVerb('escuchar', 'to listen to', [
        ['escuchar', 'to listen to'], ['escuchado', 'listened to'], ['escuchando', 'listening to'],
    ], [
        ['escucho', 'I listen to'], ['escuchas', 'you listen to'], ['escucha', 's/he listens to'],
        ['escuchamos', 'we listen to'], ['escuchan', 'they listen to'],
    ], [
        ['escuché', 'I listened to'], ['escuchaste', 'you listened to'], ['escuchó', 's/he listened to'],
        ['escuchamos', 'we listened to'], ['escucharon', 'they listened to'],
    ], [
        ['escuchaba', 'I used to listen to'], ['escuchabas', 'you used to listen to'], ['escuchaba', 's/he used to listen to'],
        ['escuchábamos', 'we used to listen to'], ['escuchaban', 'they used to listen to'],
    ]),
    simpleVerb('cansar', 'to tire', [
        ['cansar', 'to tire'], ['cansado', 'tired'], ['cansando', 'tiring'],
    ], [
        ['canso', 'I tire'], ['cansas', 'you tire'], ['cansa', 's/he tires'],
        ['cansamos', 'we tire'], ['cansan', 'they tire'],
    ], [
        ['cansé', 'I tired'], ['cansaste', 'you tired'], ['cansó', 's/he tired'],
        ['cansamos', 'we tired'], ['cansaron', 'they tired'],
    ], [
        ['cansaba', 'I used to tire'], ['cansabas', 'you used to tire'], ['cansaba', 's/he used to tire'],
        ['cansábamos', 'we used to tire'], ['cansaban', 'they used to tire'],
    ]),
    simpleVerb('irse', 'to leave, to go away', [
        ['irse', 'to leave'], ['ido', 'left'], ['yendo', 'leaving'],
    ], [
        ['me voy', 'I leave', true], ['te vas', 'you leave', true], ['se va', 's/he leaves', true],
        ['nos vamos', 'we leave', true], ['se van', 'they leave', true],
    ], [
        ['me fui', 'I left', true], ['te fuiste', 'you left', true], ['se fue', 's/he left', true],
        ['nos fuimos', 'we left', true], ['se fueron', 'they left', true],
    ], [
        ['me iba', 'I used to leave', true], ['te ibas', 'you used to leave', true], ['se iba', 's/he used to leave', true],
        ['nos íbamos', 'we used to leave', true], ['se iban', 'they used to leave', true],
    ]),
    simpleVerb('regalar', 'to give away, to present, to give a present', [
        ['regalar', 'to give as a present'], ['regalado', 'given as a present'], ['regalando', 'giving as a present'],
    ], [
        ['regalo', 'I give as a present'], ['regalas', 'you give as a present'], ['regala', 's/he gives as a present'],
        ['regalamos', 'we give as a present'], ['regalan', 'they give as a present'],
    ], [
        ['regalé', 'I gave as a present'], ['regalaste', 'you gave as a present'], ['regaló', 's/he gave as a present'],
        ['regalamos', 'we gave as a present'], ['regalaron', 'they gave as a present'],
    ], [
        ['regalaba', 'I used to give as a present'], ['regalabas', 'you used to give as a present'], ['regalaba', 's/he used to give as a present'],
        ['regalábamos', 'we used to give as a present'], ['regalaban', 'they used to give as a present'],
    ]),
    simpleVerb('encontrar', 'to find', [
        ['encontrar', 'to find'], ['encontrado', 'found'], ['encontrando', 'finding'],
    ], [
        ['encuentro', 'I find', true], ['encuentras', 'you find', true], ['encuentra', 's/he finds', true],
        ['encontramos', 'we find'], ['encuentran', 'they find', true],
    ], [
        ['encontré', 'I found'], ['encontraste', 'you found'], ['encontró', 's/he found'],
        ['encontramos', 'we found'], ['encontraron', 'they found'],
    ], [
        ['encontraba', 'I used to find'], ['encontrabas', 'you used to find'], ['encontraba', 's/he used to find'],
        ['encontrábamos', 'we used to find'], ['encontraban', 'they used to find'],
    ]),
    simpleVerb('poner', 'to put, to place', [
        ['poner', 'to put'], ['puesto', 'put'], ['poniendo', 'putting'],
    ], [
        ['pongo', 'I put', true], ['pones', 'you put'], ['pone', 's/he puts'],
        ['ponemos', 'we put'], ['ponen', 'they put'],
    ], [
        ['puse', 'I put', true], ['pusiste', 'you put', true], ['puso', 's/he put', true],
        ['pusimos', 'we put', true], ['pusieron', 'they put', true],
    ], [
        ['ponía', 'I used to put'], ['ponías', 'you used to put'], ['ponía', 's/he used to put'],
        ['poníamos', 'we used to put'], ['ponían', 'they used to put'],
    ]),
    simpleVerb('sentir', 'to feel, to sense, to be sorry', [
        ['sentir', 'to feel'], ['sentido', 'felt'], ['sintiendo', 'feeling'],
    ], [
        ['siento', 'I feel', true], ['sientes', 'you feel', true], ['siente', 's/he feels', true],
        ['sentimos', 'we feel'], ['sienten', 'they feel', true],
    ], [
        ['sentí', 'I felt'], ['sentiste', 'you felt'], ['sintió', 's/he felt', true],
        ['sentimos', 'we felt'], ['sintieron', 'they felt', true],
    ], [
        ['sentía', 'I used to feel'], ['sentías', 'you used to feel'], ['sentía', 's/he used to feel'],
        ['sentíamos', 'we used to feel'], ['sentían', 'they used to feel'],
    ]),
    simpleVerb('dormir', 'to sleep', [
        ['dormir', 'to sleep'], ['dormido', 'slept'], ['durmiendo', 'sleeping'],
    ], [
        ['duermo', 'I sleep', true], ['duermes', 'you sleep', true], ['duerme', 's/he sleeps', true],
        ['dormimos', 'we sleep'], ['duermen', 'they sleep', true],
    ], [
        ['dormí', 'I slept'], ['dormiste', 'you slept'], ['durmió', 's/he slept', true],
        ['dormimos', 'we slept'], ['durmieron', 'they slept', true],
    ], [
        ['dormía', 'I used to sleep'], ['dormías', 'you used to sleep'], ['dormía', 's/he used to sleep'],
        ['dormíamos', 'we used to sleep'], ['dormían', 'they used to sleep'],
    ]),
    simpleVerb('subir', 'to go up, to climb, to raise, to take up', [
        ['subir', 'to go up'], ['subido', 'gone up'], ['subiendo', 'going up'],
    ], [
        ['subo', 'I go up'], ['subes', 'you go up'], ['sube', 's/he goes up'],
        ['subimos', 'we go up'], ['suben', 'they go up'],
    ], [
        ['subí', 'I went up'], ['subiste', 'you went up'], ['subió', 's/he went up'],
        ['subimos', 'we went up'], ['subieron', 'they went up'],
    ], [
        ['subía', 'I used to go up'], ['subías', 'you used to go up'], ['subía', 's/he used to go up'],
        ['subíamos', 'we used to go up'], ['subían', 'they used to go up'],
    ]),
    simpleVerb('bajar', 'to go down, to lower, to take down', [
        ['bajar', 'to go down'], ['bajado', 'gone down'], ['bajando', 'going down'],
    ], [
        ['bajo', 'I go down'], ['bajas', 'you go down'], ['baja', 's/he goes down'],
        ['bajamos', 'we go down'], ['bajan', 'they go down'],
    ], [
        ['bajé', 'I went down'], ['bajaste', 'you went down'], ['bajó', 's/he went down'],
        ['bajamos', 'we went down'], ['bajaron', 'they went down'],
    ], [
        ['bajaba', 'I used to go down'], ['bajabas', 'you used to go down'], ['bajaba', 's/he used to go down'],
        ['bajábamos', 'we used to go down'], ['bajaban', 'they used to go down'],
    ]),
    simpleVerb('olvidar', 'to forget', [
        ['olvidar', 'to forget'], ['olvidado', 'forgotten'], ['olvidando', 'forgetting'],
    ], [
        ['olvido', 'I forget'], ['olvidas', 'you forget'], ['olvida', 's/he forgets'],
        ['olvidamos', 'we forget'], ['olvidan', 'they forget'],
    ], [
        ['olvidé', 'I forgot'], ['olvidaste', 'you forgot'], ['olvidó', 's/he forgot'],
        ['olvidamos', 'we forgot'], ['olvidaron', 'they forgot'],
    ], [
        ['olvidaba', 'I used to forget'], ['olvidabas', 'you used to forget'], ['olvidaba', 's/he used to forget'],
        ['olvidábamos', 'we used to forget'], ['olvidaban', 'they used to forget'],
    ]),
    simpleVerb('levantar', 'to lift, to raise', [
        ['levantar', 'to lift'], ['levantado', 'lifted'], ['levantando', 'lifting'],
    ], [
        ['levanto', 'I lift'], ['levantas', 'you lift'], ['levanta', 's/he lifts'],
        ['levantamos', 'we lift'], ['levantan', 'they lift'],
    ], [
        ['levanté', 'I lifted'], ['levantaste', 'you lifted'], ['levantó', 's/he lifted'],
        ['levantamos', 'we lifted'], ['levantaron', 'they lifted'],
    ], [
        ['levantaba', 'I used to lift'], ['levantabas', 'you used to lift'], ['levantaba', 's/he used to lift'],
        ['levantábamos', 'we used to lift'], ['levantaban', 'they used to lift'],
    ]),
    simpleVerb('despertar', 'to wake (someone) up', [
        ['despertar', 'to wake'], ['despertado', 'woken'], ['despertando', 'waking'],
    ], [
        ['despierto', 'I wake', true], ['despiertas', 'you wake', true], ['despierta', 's/he wakes', true],
        ['despertamos', 'we wake'], ['despiertan', 'they wake', true],
    ], [
        ['desperté', 'I woke'], ['despertaste', 'you woke'], ['despertó', 's/he woke'],
        ['despertamos', 'we woke'], ['despertaron', 'they woke'],
    ], [
        ['despertaba', 'I used to wake'], ['despertabas', 'you used to wake'], ['despertaba', 's/he used to wake'],
        ['despertábamos', 'we used to wake'], ['despertaban', 'they used to wake'],
    ]),
    simpleVerb('acordar', 'to agree, to decide on', [
        ['acordar', 'to agree'], ['acordado', 'agreed'], ['acordando', 'agreeing'],
    ], [
        ['acuerdo', 'I agree', true], ['acuerdas', 'you agree', true], ['acuerda', 's/he agrees', true],
        ['acordamos', 'we agree'], ['acuerdan', 'they agree', true],
    ], [
        ['acordé', 'I agreed'], ['acordaste', 'you agreed'], ['acordó', 's/he agreed'],
        ['acordamos', 'we agreed'], ['acordaron', 'they agreed'],
    ], [
        ['acordaba', 'I used to agree'], ['acordabas', 'you used to agree'], ['acordaba', 's/he used to agree'],
        ['acordábamos', 'we used to agree'], ['acordaban', 'they used to agree'],
    ]),
    simpleVerb('preocupar', 'to worry (someone), to concern', [
        ['preocupar', 'to worry'], ['preocupado', 'worried'], ['preocupando', 'worrying'],
    ], [
        ['preocupo', 'I worry'], ['preocupas', 'you worry'], ['preocupa', 's/he worries'],
        ['preocupamos', 'we worry'], ['preocupan', 'they worry'],
    ], [
        ['preocupé', 'I worried'], ['preocupaste', 'you worried'], ['preocupó', 's/he worried'],
        ['preocupamos', 'we worried'], ['preocuparon', 'they worried'],
    ], [
        ['preocupaba', 'I used to worry'], ['preocupabas', 'you used to worry'], ['preocupaba', 's/he used to worry'],
        ['preocupábamos', 'we used to worry'], ['preocupaban', 'they used to worry'],
    ]),
    simpleVerb('aburrir', 'to bore', [
        ['aburrir', 'to bore'], ['aburrido', 'bored'], ['aburriendo', 'boring'],
    ], [
        ['aburro', 'I bore'], ['aburres', 'you bore'], ['aburre', 's/he bores'],
        ['aburrimos', 'we bore'], ['aburren', 'they bore'],
    ], [
        ['aburrí', 'I bored'], ['aburriste', 'you bored'], ['aburrió', 's/he bored'],
        ['aburrimos', 'we bored'], ['aburrieron', 'they bored'],
    ], [
        ['aburría', 'I used to bore'], ['aburrías', 'you used to bore'], ['aburría', 's/he used to bore'],
        ['aburríamos', 'we used to bore'], ['aburrían', 'they used to bore'],
    ]),
    simpleVerb('lavar', 'to wash', [
        ['lavar', 'to wash'], ['lavado', 'washed'], ['lavando', 'washing'],
    ], [
        ['lavo', 'I wash'], ['lavas', 'you wash'], ['lava', 's/he washes'],
        ['lavamos', 'we wash'], ['lavan', 'they wash'],
    ], [
        ['lavé', 'I washed'], ['lavaste', 'you washed'], ['lavó', 's/he washed'],
        ['lavamos', 'we washed'], ['lavaron', 'they washed'],
    ], [
        ['lavaba', 'I used to wash'], ['lavabas', 'you used to wash'], ['lavaba', 's/he used to wash'],
        ['lavábamos', 'we used to wash'], ['lavaban', 'they used to wash'],
    ]),
    simpleVerb('pesar', 'to weigh', [
        ['pesar', 'to weigh'], ['pesado', 'weighed'], ['pesando', 'weighing'],
    ], [
        ['peso', 'I weigh'], ['pesas', 'you weigh'], ['pesa', 's/he weighs'],
        ['pesamos', 'we weigh'], ['pesan', 'they weigh'],
    ], [
        ['pesé', 'I weighed'], ['pesaste', 'you weighed'], ['pesó', 's/he weighed'],
        ['pesamos', 'we weighed'], ['pesaron', 'they weighed'],
    ], [
        ['pesaba', 'I used to weigh'], ['pesabas', 'you used to weigh'], ['pesaba', 's/he used to weigh'],
        ['pesábamos', 'we used to weigh'], ['pesaban', 'they used to weigh'],
    ]),
    simpleVerb('agarrar', 'to grab, to catch', [
        ['agarrar', 'to grab'], ['agarrado', 'grabbed'], ['agarrando', 'grabbing'],
    ], [
        ['agarro', 'I grab'], ['agarras', 'you grab'], ['agarra', 's/he grabs'],
        ['agarramos', 'we grab'], ['agarran', 'they grab'],
    ], [
        ['agarré', 'I grabbed'], ['agarraste', 'you grabbed'], ['agarró', 's/he grabbed'],
        ['agarramos', 'we grabbed'], ['agarraron', 'they grabbed'],
    ], [
        ['agarraba', 'I used to grab'], ['agarrabas', 'you used to grab'], ['agarraba', 's/he used to grab'],
        ['agarrábamos', 'we used to grab'], ['agarraban', 'they used to grab'],
    ]),
    simpleVerb('sorprender', 'to surprise', [
        ['sorprender', 'to surprise'], ['sorprendido', 'surprised'], ['sorprendiendo', 'surprising'],
    ], [
        ['sorprendo', 'I surprise'], ['sorprendes', 'you surprise'], ['sorprende', 's/he surprises'],
        ['sorprendemos', 'we surprise'], ['sorprenden', 'they surprise'],
    ], [
        ['sorprendí', 'I surprised'], ['sorprendiste', 'you surprised'], ['sorprendió', 's/he surprised'],
        ['sorprendimos', 'we surprised'], ['sorprendieron', 'they surprised'],
    ], [
        ['sorprendía', 'I used to surprise'], ['sorprendías', 'you used to surprise'], ['sorprendía', 's/he used to surprise'],
        ['sorprendíamos', 'we used to surprise'], ['sorprendían', 'they used to surprise'],
    ]),
    simpleVerb('amanecer', 'to dawn, to get light, to wake up', [
        ['amanecer', 'to dawn'], ['amanecido', 'dawned'], ['amaneciendo', 'dawning'],
    ], [
        ['amanezco', 'I wake up', true], ['amaneces', 'you wake up'], ['amanece', 'it dawns, s/he wakes up'],
        ['amanecemos', 'we wake up'], ['amanecen', 'they wake up'],
    ], [
        ['amanecí', 'I woke up'], ['amaneciste', 'you woke up'], ['amaneció', 'it dawned, s/he woke up'],
        ['amanecimos', 'we woke up'], ['amanecieron', 'they woke up'],
    ], [
        ['amanecía', 'I used to wake up'], ['amanecías', 'you used to wake up'], ['amanecía', 'it used to dawn, s/he used to wake up'],
        ['amanecíamos', 'we used to wake up'], ['amanecían', 'they used to wake up'],
    ]),
    simpleVerb('anochecer', 'to get dark, to become night', [
        ['anochecer', 'to get dark'], ['anochecido', 'gotten dark'], ['anocheciendo', 'getting dark'],
    ], [
        ['anochezco', 'I end the day', true], ['anocheces', 'you end the day'], ['anochece', 'it gets dark, s/he ends the day'],
        ['anochecemos', 'we end the day'], ['anochecen', 'they end the day'],
    ], [
        ['anochecí', 'I ended the day'], ['anocheciste', 'you ended the day'], ['anocheció', 'it got dark, s/he ended the day'],
        ['anochecimos', 'we ended the day'], ['anochecieron', 'they ended the day'],
    ], [
        ['anochecía', 'I used to end the day'], ['anochecías', 'you used to end the day'], ['anochecía', 'it used to get dark, s/he used to end the day'],
        ['anochecíamos', 'we used to end the day'], ['anochecían', 'they used to end the day'],
    ]),
    simpleVerb('exigir', 'to require, to demand', [
        ['exigir', 'to demand'], ['exigido', 'demanded'], ['exigiendo', 'demanding'],
    ], [
        ['exijo', 'I demand', true], ['exiges', 'you demand'], ['exige', 's/he demands'],
        ['exigimos', 'we demand'], ['exigen', 'they demand'],
    ], [
        ['exigí', 'I demanded'], ['exigiste', 'you demanded'], ['exigió', 's/he demanded'],
        ['exigimos', 'we demanded'], ['exigieron', 'they demanded'],
    ], [
        ['exigía', 'I used to demand'], ['exigías', 'you used to demand'], ['exigía', 's/he used to demand'],
        ['exigíamos', 'we used to demand'], ['exigían', 'they used to demand'],
    ]),
    simpleVerb('criticar', 'to criticise', [
        ['criticar', 'to criticise'], ['criticado', 'criticised'], ['criticando', 'criticising'],
    ], [
        ['critico', 'I criticise'], ['criticas', 'you criticise'], ['critica', 's/he criticises'],
        ['criticamos', 'we criticise'], ['critican', 'they criticise'],
    ], [
        ['critiqué', 'I criticised', true], ['criticaste', 'you criticised'], ['criticó', 's/he criticised'],
        ['criticamos', 'we criticised'], ['criticaron', 'they criticised'],
    ], [
        ['criticaba', 'I used to criticise'], ['criticabas', 'you used to criticise'], ['criticaba', 's/he used to criticise'],
        ['criticábamos', 'we used to criticise'], ['criticaban', 'they used to criticise'],
    ]),
    simpleVerb('apoyar', 'to support', [
        ['apoyar', 'to support'], ['apoyado', 'supported'], ['apoyando', 'supporting'],
    ], [
        ['apoyo', 'I support'], ['apoyas', 'you support'], ['apoya', 's/he supports'],
        ['apoyamos', 'we support'], ['apoyan', 'they support'],
    ], [
        ['apoyé', 'I supported'], ['apoyaste', 'you supported'], ['apoyó', 's/he supported'],
        ['apoyamos', 'we supported'], ['apoyaron', 'they supported'],
    ], [
        ['apoyaba', 'I used to support'], ['apoyabas', 'you used to support'], ['apoyaba', 's/he used to support'],
        ['apoyábamos', 'we used to support'], ['apoyaban', 'they used to support'],
    ]),
    simpleVerb('ofrecer', 'to offer, to provide (a service)', [
        ['ofrecer', 'to offer'], ['ofrecido', 'offered'], ['ofreciendo', 'offering'],
    ], [
        ['ofrezco', 'I offer', true], ['ofreces', 'you offer'], ['ofrece', 's/he offers'],
        ['ofrecemos', 'we offer'], ['ofrecen', 'they offer'],
    ], [
        ['ofrecí', 'I offered'], ['ofreciste', 'you offered'], ['ofreció', 's/he offered'],
        ['ofrecimos', 'we offered'], ['ofrecieron', 'they offered'],
    ], [
        ['ofrecía', 'I used to offer'], ['ofrecías', 'you used to offer'], ['ofrecía', 's/he used to offer'],
        ['ofrecíamos', 'we used to offer'], ['ofrecían', 'they used to offer'],
    ]),
    simpleVerb('asustar', 'to frighten, to scare', [
        ['asustar', 'to scare'], ['asustado', 'scared'], ['asustando', 'scaring'],
    ], [
        ['asusto', 'I scare'], ['asustas', 'you scare'], ['asusta', 's/he scares'],
        ['asustamos', 'we scare'], ['asustan', 'they scare'],
    ], [
        ['asusté', 'I scared'], ['asustaste', 'you scared'], ['asustó', 's/he scared'],
        ['asustamos', 'we scared'], ['asustaron', 'they scared'],
    ], [
        ['asustaba', 'I used to scare'], ['asustabas', 'you used to scare'], ['asustaba', 's/he used to scare'],
        ['asustábamos', 'we used to scare'], ['asustaban', 'they used to scare'],
    ]),
    simpleVerb('temer', 'to fear, to be afraid of', [
        ['temer', 'to fear'], ['temido', 'feared'], ['temiendo', 'fearing'],
    ], [
        ['temo', 'I fear'], ['temes', 'you fear'], ['teme', 's/he fears'],
        ['tememos', 'we fear'], ['temen', 'they fear'],
    ], [
        ['temí', 'I feared'], ['temiste', 'you feared'], ['temió', 's/he feared'],
        ['temimos', 'we feared'], ['temieron', 'they feared'],
    ], [
        ['temía', 'I used to fear'], ['temías', 'you used to fear'], ['temía', 's/he used to fear'],
        ['temíamos', 'we used to fear'], ['temían', 'they used to fear'],
    ]),
    simpleVerb('pasear', 'to go for a walk, to stroll, to walk (a dog)', [
        ['pasear', 'to go for a walk'], ['paseado', 'walked'], ['paseando', 'walking'],
    ], [
        ['paseo', 'I go for a walk'], ['paseas', 'you go for a walk'], ['pasea', 's/he goes for a walk'],
        ['paseamos', 'we go for a walk'], ['pasean', 'they go for a walk'],
    ], [
        ['paseé', 'I went for a walk'], ['paseaste', 'you went for a walk'], ['paseó', 's/he went for a walk'],
        ['paseamos', 'we went for a walk'], ['pasearon', 'they went for a walk'],
    ], [
        ['paseaba', 'I used to go for walks'], ['paseabas', 'you used to go for walks'], ['paseaba', 's/he used to go for walks'],
        ['paseábamos', 'we used to go for walks'], ['paseaban', 'they used to go for walks'],
    ]),
    simpleVerb('guiar', 'to guide, to lead, to steer', [
        ['guiar', 'to guide'], ['guiado', 'guided'], ['guiando', 'guiding'],
    ], [
        ['guío', 'I guide', true], ['guías', 'you guide', true], ['guía', 's/he guides', true],
        ['guiamos', 'we guide'], ['guían', 'they guide', true],
    ], [
        ['guie', 'I guided', true], ['guiaste', 'you guided'], ['guio', 's/he guided', true],
        ['guiamos', 'we guided'], ['guiaron', 'they guided'],
    ], [
        ['guiaba', 'I used to guide'], ['guiabas', 'you used to guide'], ['guiaba', 's/he used to guide'],
        ['guiábamos', 'we used to guide'], ['guiaban', 'they used to guide'],
    ]),
    simpleVerb('lastimar', 'to hurt, to injure', [
        ['lastimar', 'to hurt'], ['lastimado', 'hurt'], ['lastimando', 'hurting'],
    ], [
        ['lastimo', 'I hurt'], ['lastimas', 'you hurt'], ['lastima', 's/he hurts'],
        ['lastimamos', 'we hurt'], ['lastiman', 'they hurt'],
    ], [
        ['lastimé', 'I hurt'], ['lastimaste', 'you hurt'], ['lastimó', 's/he hurt'],
        ['lastimamos', 'we hurt'], ['lastimaron', 'they hurt'],
    ], [
        ['lastimaba', 'I used to hurt'], ['lastimabas', 'you used to hurt'], ['lastimaba', 's/he used to hurt'],
        ['lastimábamos', 'we used to hurt'], ['lastimaban', 'they used to hurt'],
    ]),
    simpleVerb('lastimarse', 'to hurt yourself, to get hurt', [
        ['lastimarse', 'to hurt yourself'], ['lastimado', 'hurt'], ['lastimando', 'hurting'],
    ], [
        ['me lastimo', 'I hurt myself'], ['te lastimas', 'you hurt yourself'], ['se lastima', 's/he hurts herself/himself'],
        ['nos lastimamos', 'we hurt ourselves'], ['se lastiman', 'they hurt themselves'],
    ], [
        ['me lastimé', 'I hurt myself'], ['te lastimaste', 'you hurt yourself'], ['se lastimó', 's/he hurt herself/himself'],
        ['nos lastimamos', 'we hurt ourselves'], ['se lastimaron', 'they hurt themselves'],
    ], [
        ['me lastimaba', 'I used to hurt myself'], ['te lastimabas', 'you used to hurt yourself'], ['se lastimaba', 's/he used to hurt herself/himself'],
        ['nos lastimábamos', 'we used to hurt ourselves'], ['se lastimaban', 'they used to hurt themselves'],
    ]),]
