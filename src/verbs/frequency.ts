// Approximate real-world Spanish usage frequency, most common first. Not exact —
// based on general corpus-frequency knowledge, good enough for a rough sort.
const FREQUENCY_ORDER = [
    'ser', 'estar', 'haber', 'tener', 'hacer', 'poder', 'decir', 'ir', 'ver', 'dar', 'poner',
    'saber', 'querer', 'llegar', 'pasar', 'deber', 'quedar', 'creer', 'hablar', 'llevar', 'dejar',
    'seguir', 'llamar', 'venir', 'pensar', 'salir', 'irse', 'volver', 'tomar', 'conocer', 'vivir', 'sentir', 'sentirse',
    'entender', 'buscar', 'encontrar', 'encontrarse', 'trabajar', 'escribir', 'empezar', 'continuar', 'esperar', 'perder', 'pedir', 'prestar', 'pedir prestado', 'recibir',
    'recordar', 'olvidar', 'terminar', 'permitir', 'conseguir', 'comenzar', 'servir', 'sacar', 'quitar', 'tirar', 'necesitar', 'requerir', 'exigir', 'jugar', 'cerrar',
    'contar', 'mirar', 'tratar', 'intentar', 'cambiar', 'leer', 'caer', 'traer', 'morir', 'entrar', 'subir', 'bajar', 'existir', 'durar',
    'mantener', 'resultar', 'presentar', 'ofrecer', 'mostrar', 'mover', 'levantar', 'crear', 'abrir', 'considerar', 'oír', 'escuchar', 'acabar', 'convertir', 'ganar',
    'formar', 'partir', 'aceptar', 'acordar', 'ceder', 'realizar', 'suponer', 'convenir', 'comprender', 'lograr', 'explicar', 'evitar', 'resolver', 'preguntar', 'tocar',
    'reconocer', 'estudiar', 'alcanzar', 'nacer', 'crecer', 'amanecer', 'anochecer', 'dirigir', 'correr', 'saltar', 'utilizar', 'pagar', 'vender', 'contratar', 'alquilar', 'ayudar', 'apoyar', 'perdonar', 'respetar', 'comer', 'dormir',
    'usar', 'recoger', 'soler', 'parecer', 'decidir', 'insistir', 'producir', 'diseñar', 'causar', 'ocurrir', 'probar', 'gustar', 'faltar', 'molestar', 'sentarse', 'ponerse', 'acercarse', 'amar',
    'encantar', 'sorprender', 'invitar', 'regalar', 'enseñar', 'aprender', 'practicar', 'quedarse', 'mudarse', 'acordarse', 'almorzar', 'acostarse', 'despertar', 'despertarse', 'levantarse',
    'subirse', 'bajarse', 'ducharse', 'lavar', 'lavarse', 'vestirse', 'cepillarse', 'casarse', 'cuidarse', 'divertirse', 'aburrir', 'aburrirse', 'cansar', 'enojarse', 'enfadarse', 'quejarse', 'criticar',
    'olvidarse', 'temer', 'preocupar', 'preocuparse', 'asustar', 'confundirse', 'dormirse', 'responder', 'cuidar', 'romper', 'dañar', 'arreglar', 'robar', 'esconder', 'gastar', 'depositar', 'preparar', 'parar', 'apurar', 'beber',
    'repetir', 'copiar', 'imprimir', 'apagar', 'descargar', 'encender', 'sonreír', 'llorar', 'lamentar', 'colgar', 'mandar', 'rezar', 'enviar', 'visitar', 'explorar', 'aprobar', 'regresar',
    'reservar', 'cantar', 'pintar', 'limpiar', 'cocinar', 'manejar', 'caminar', 'pasear', 'girar', 'comprar', 'dibujar', 'coleccionar', 'planear',
    'completar', 'reunir', 'repartir', 'satisfacer', 'montar', 'navegar', 'asar', 'pescar', 'reparar', 'amueblar', 'decorar', 'llenar', 'vaciar', 'acompañar', 'conversar',
    'disfrutar', 'desayunar', 'fumar', 'odiar', 'preferir', 'coger', 'agarrar', 'elegir', 'descansar', 'estresar', 'relajarse', 'pesar', 'pesarse', 'doler', 'costar',
    'llover', 'nevar', 'congelar', 'entrenar', 'nadar', 'esquiar', 'patinar', 'hacer snowboard', 'acampar',
] as const

export const FREQUENCY_RANK: ReadonlyMap<string, number> = new Map(FREQUENCY_ORDER.map((infinitive, rank) => [infinitive, rank]))
