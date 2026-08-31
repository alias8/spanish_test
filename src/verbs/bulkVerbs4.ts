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
    ]),]
