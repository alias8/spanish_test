// Approximate real-world Spanish usage frequency, most common first. Not exact —
// based on general corpus-frequency knowledge, good enough for a rough sort.
const FREQUENCY_ORDER = [
    'ser', 'estar', 'haber', 'tener', 'hacer', 'poder', 'decir', 'ir', 'ver', 'dar',
    'saber', 'querer', 'llegar', 'pasar', 'deber', 'quedar', 'creer', 'hablar', 'llevar', 'dejar',
    'seguir', 'llamar', 'venir', 'pensar', 'salir', 'volver', 'tomar', 'conocer', 'vivir', 'sentirse',
    'entender', 'buscar', 'encontrarse', 'trabajar', 'escribir', 'empezar', 'esperar', 'perder', 'pedir', 'recibir',
    'recordar', 'terminar', 'permitir', 'conseguir', 'comenzar', 'servir', 'sacar', 'necesitar', 'jugar', 'cerrar',
    'contar', 'mirar', 'tratar', 'cambiar', 'leer', 'caer', 'traer', 'morir', 'entrar', 'existir', 'durar',
    'mantener', 'resultar', 'presentar', 'crear', 'abrir', 'considerar', 'oír', 'acabar', 'convertir', 'ganar',
    'formar', 'partir', 'aceptar', 'realizar', 'suponer', 'comprender', 'lograr', 'explicar', 'resolver', 'preguntar', 'tocar',
    'reconocer', 'estudiar', 'alcanzar', 'nacer', 'dirigir', 'correr', 'utilizar', 'pagar', 'ayudar', 'comer',
    'usar', 'parecer', 'decidir', 'producir', 'ocurrir', 'probar', 'gustar', 'sentarse', 'ponerse', 'amar',
    'encantar', 'invitar', 'enseñar', 'aprender', 'practicar', 'quedarse', 'acordarse', 'almorzar', 'acostarse', 'despertarse', 'levantarse',
    'ducharse', 'lavarse', 'vestirse', 'cepillarse', 'casarse', 'cuidarse', 'divertirse', 'aburrirse', 'enojarse', 'enfadarse',
    'olvidarse', 'preocuparse', 'dormirse', 'responder', 'cuidar', 'romper', 'gastar', 'preparar', 'parar', 'beber',
    'repetir', 'apagar', 'encender', 'llorar', 'mandar', 'rezar', 'enviar', 'visitar', 'aprobar', 'regresar',
    'reservar', 'cantar', 'pintar', 'limpiar', 'cocinar', 'manejar', 'caminar', 'comprar', 'dibujar', 'planear',
    'completar', 'reunir', 'satisfacer', 'montar', 'asar', 'pescar', 'reparar', 'llenar', 'acompañar', 'conversar',
    'disfrutar', 'desayunar', 'fumar', 'odiar', 'preferir', 'coger', 'elegir', 'descansar', 'relajarse', 'doler', 'costar',
    'llover', 'nevar',
] as const

export const FREQUENCY_RANK: ReadonlyMap<string, number> = new Map(FREQUENCY_ORDER.map((infinitive, rank) => [infinitive, rank]))
