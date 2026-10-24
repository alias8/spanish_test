// Approximate real-world Spanish usage frequency, most common first. Not exact —
// based on general corpus-frequency knowledge, good enough for a rough sort.
const FREQUENCY_ORDER = [
    'ser', 'estar', 'haber', 'tener', 'hacer', 'poder', 'decir', 'ir', 'ver', 'dar',
    'saber', 'querer', 'llegar', 'pasar', 'deber', 'quedar', 'creer', 'hablar', 'llevar', 'dejar',
    'seguir', 'llamar', 'venir', 'pensar', 'salir', 'volver', 'tomar', 'conocer', 'vivir', 'sentirse',
    'entender', 'buscar', 'encontrarse', 'trabajar', 'escribir', 'empezar', 'continuar', 'esperar', 'perder', 'pedir', 'prestar', 'pedir prestado', 'recibir',
    'recordar', 'terminar', 'permitir', 'conseguir', 'comenzar', 'servir', 'sacar', 'necesitar', 'requerir', 'jugar', 'cerrar',
    'contar', 'mirar', 'tratar', 'cambiar', 'leer', 'caer', 'traer', 'morir', 'entrar', 'existir', 'durar',
    'mantener', 'resultar', 'presentar', 'mostrar', 'crear', 'abrir', 'considerar', 'oír', 'acabar', 'convertir', 'ganar',
    'formar', 'partir', 'aceptar', 'ceder', 'realizar', 'suponer', 'convenir', 'comprender', 'lograr', 'explicar', 'evitar', 'resolver', 'preguntar', 'tocar',
    'reconocer', 'estudiar', 'alcanzar', 'nacer', 'crecer', 'dirigir', 'correr', 'utilizar', 'pagar', 'vender', 'contratar', 'ayudar', 'respetar', 'comer',
    'usar', 'soler', 'parecer', 'decidir', 'producir', 'causar', 'ocurrir', 'probar', 'gustar', 'sentarse', 'ponerse', 'acercarse', 'amar',
    'encantar', 'invitar', 'enseñar', 'aprender', 'practicar', 'quedarse', 'mudarse', 'acordarse', 'almorzar', 'acostarse', 'despertarse', 'levantarse',
    'subirse', 'bajarse', 'ducharse', 'lavarse', 'vestirse', 'cepillarse', 'casarse', 'cuidarse', 'divertirse', 'aburrirse', 'enojarse', 'enfadarse',
    'olvidarse', 'preocuparse', 'dormirse', 'responder', 'cuidar', 'romper', 'arreglar', 'robar', 'esconder', 'gastar', 'depositar', 'preparar', 'parar', 'beber',
    'repetir', 'copiar', 'apagar', 'descargar', 'encender', 'llorar', 'colgar', 'mandar', 'rezar', 'enviar', 'visitar', 'explorar', 'aprobar', 'regresar',
    'reservar', 'cantar', 'pintar', 'limpiar', 'cocinar', 'manejar', 'caminar', 'girar', 'comprar', 'dibujar', 'coleccionar', 'planear',
    'completar', 'reunir', 'repartir', 'satisfacer', 'montar', 'navegar', 'asar', 'pescar', 'reparar', 'amueblar', 'decorar', 'llenar', 'vaciar', 'acompañar', 'conversar',
    'disfrutar', 'desayunar', 'fumar', 'odiar', 'preferir', 'coger', 'elegir', 'descansar', 'estresar', 'relajarse', 'pesarse', 'doler', 'costar',
    'llover', 'nevar', 'nadar', 'esquiar', 'patinar', 'hacer snowboard', 'acampar',
] as const

export const FREQUENCY_RANK: ReadonlyMap<string, number> = new Map(FREQUENCY_ORDER.map((infinitive, rank) => [infinitive, rank]))
