export function normalize(s: string) {
  return s.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
}

export function normalizeStrict(s: string) {
  return s.trim().toLowerCase()
}

// every index where query occurs in (already normalized) text; with wordStart, only occurrences
// that begin a word, so "ring" finds "ring" and "ringing" but not the end of "bring"
export function findMatchIndexes(text: string, query: string, wordStart = false) {
  const indexes: number[] = []
  if (!query) return indexes
  for (let idx = text.indexOf(query); idx !== -1; idx = text.indexOf(query, idx + query.length)) {
    if (!wordStart || idx === 0 || !/\p{L}/u.test(text[idx - 1])) indexes.push(idx)
  }
  return indexes
}

export function matchesWordStart(text: string, query: string) {
  return findMatchIndexes(text, query, true).length > 0
}
