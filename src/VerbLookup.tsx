import { Fragment, useMemo, useState, type ReactNode } from 'react'
import { INFINITIVE_ITEMS, VERB_PRONOUNS, TENSE_META, VERBS, type VerbEntry } from './verbs'
import { normalize } from './utils'

type MatchReason = 'conjugated' | 'translation' | 'partial'

// why a given verb showed up for a query — mirrors the branches in the matches useMemo below.
// only an exact hit on a conjugated/inflected form gets called out specifically as that; any
// other substring hit (in the infinitive, a conjugated form, or the translation) is just a
// "partial match", except a translation hit, which is worth naming since it's easy to miss
function getMatchReason(verb: VerbEntry, q: string): MatchReason | null {
  if (normalize(verb.infinitive) === q) return null // exact infinitive match, nothing to explain
  // infinitiveForms[0] is the bare infinitive itself — only participle/gerund (the rest) count as "conjugated"
  const isExactConjugatedForm =
    verb.infinitiveForms.slice(1).some(f => normalize(f.spanish) === q) ||
    verb.tenses.some(t => t.forms.some(f => normalize(f.spanish) === q))
  if (isExactConjugatedForm) return 'conjugated'
  if (normalize(verb.translation).includes(q)) return 'translation'
  return 'partial'
}

export default function VerbLookup({ query, onQueryChange }: {
  query: string
  onQueryChange: (query: string) => void
}) {
  const [selected, setSelected] = useState<string | null>(null)
  const [prevQuery, setPrevQuery] = useState(query)

  if (query !== prevQuery) {
    setPrevQuery(query)
    setSelected(null)
  }

  const matches = useMemo(() => {
    const q = normalize(query)
    if (!q) return []
    const exact = VERBS.find(v => normalize(v.infinitive) === q) // checks if perfect match for spanish infinitive
    if (exact) return [exact]
    // checks if perfect match for spanish conjugations
    const conjugated = VERBS.find(v =>
      v.infinitiveForms.some(f => normalize(f.spanish) === q) ||
      v.tenses.some(t => t.forms.some(f => normalize(f.spanish) === q))
    )
    if (conjugated) return [conjugated]
    // check for partial match on spanish infinitive or english translation
    const direct = VERBS.filter(v => normalize(v.infinitive).includes(q) || normalize(v.translation).includes(q))
    // for longer queries, also catch partial matches within conjugated forms (e.g. "estu" -> "estuvo" -> estar),
    // gated by length so short queries like "en" don't match almost every verb via some conjugated form
    if (q.length < 4) return direct
    const viaForm = VERBS.filter(v =>
      v.infinitiveForms.some(f => normalize(f.spanish).includes(q)) ||
      v.tenses.some(t => t.forms.some(f => normalize(f.spanish).includes(q)))
    )
    return [...new Map([...direct, ...viaForm].map(v => [v.infinitive, v])).values()]
  }, [query])

  const match = matches.length === 1 ? matches[0] : matches.find(v => v.infinitive === selected) ?? null
  const matchReason = match !== null ? getMatchReason(match, normalize(query)) : null
  const highlight = matchReason !== null ? normalize(query) : undefined

  function renderResults() {
    if (!query) return null
    if (matches.length === 0) return <p className="verb-hint">No verb found for "{query}" yet.</p>
    if (match) return <VerbDetail verb={match} matchedFrom={matchReason !== null ? query : undefined} matchReason={matchReason ?? undefined} highlight={highlight} />

    return (
      <div className="verb-picker">
        <p className="verb-hint">Multiple matches — pick one:</p>
        {matches.map(v => (
          <button key={v.infinitive} className="verb-picker-btn" onClick={() => setSelected(v.infinitive)}>
            {v.infinitive} <span className="english">— {v.translation}</span>
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="verb-lookup">
      <input
        className="verb-search"
        type="text"
        value={query}
        onChange={e => onQueryChange(e.target.value)}
        placeholder="Search a verb, e.g. &quot;ser&quot; or &quot;to be&quot;..."
        autoFocus
        autoComplete="off"
        spellCheck={false}
      />

      <div className="verb-results">
        {renderResults()}
      </div>
    </div>
  )
}

function highlightMatches(text: string, query: string | undefined) {
  if (!query) return text
  const normText = normalize(text)
  const parts: ReactNode[] = []
  let i = 0
  let idx = normText.indexOf(query, i)
  if (idx === -1) return text
  let key = 0
  while (idx !== -1) {
    if (idx > i) parts.push(<Fragment key={key++}>{text.slice(i, idx)}</Fragment>)
    parts.push(<mark className="search-highlight" key={key++}>{text.slice(idx, idx + query.length)}</mark>)
    i = idx + query.length
    idx = normText.indexOf(query, i)
  }
  if (i < text.length) parts.push(<Fragment key={key++}>{text.slice(i)}</Fragment>)
  return parts
}

function VerbDetail({ verb, matchedFrom, matchReason, highlight }: {
  verb: VerbEntry
  matchedFrom?: string
  matchReason?: MatchReason
  highlight?: string
}) {
  const label = verb.infinitive[0].toUpperCase() + verb.infinitive.slice(1)

  return (
    <div className="verb-detail">
      <div className="verb-box">
        {matchedFrom && matchReason && (
          <p className="verb-hint">
            {matchReason === 'conjugated' && <>"{matchedFrom}" is a conjugated form of <strong>{verb.infinitive}</strong>.</>}
            {matchReason === 'translation' && <>"{matchedFrom}" matches the English translation of <strong>{verb.infinitive}</strong>.</>}
            {matchReason === 'partial' && <>"{matchedFrom}" is a partial match for <strong>{verb.infinitive}</strong>.</>}
          </p>
        )}
        {verb.summary && <p className="verb-summary">{verb.summary}</p>}
        <table className="verb-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Spanish</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            {verb.infinitiveForms.map((row, i) => (
              <tr key={INFINITIVE_ITEMS[i]}>
                <td>{INFINITIVE_ITEMS[i]}</td>
                <td>{highlightMatches(row.spanish, highlight)}</td>
                <td className="english">{highlightMatches(row.english, highlight)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {verb.tenses.map((tense, i) => {
        const meta = TENSE_META[i]
        return (
          <div className="verb-box" key={meta.name}>
            <h3>{label} in the {meta.name}</h3>
            {tense.description && (
              <p className="verb-summary">
                {tense.description}
                {tense.example && (
                  <> For example, "<em>{tense.example.spanish}</em>", meaning "<em>{tense.example.english}</em>".</>
                )}
                {' '}In Spanish, known as "{meta.spanishName}".
              </p>
            )}
            <table className="verb-table">
              <thead>
                <tr>
                  <th>Pronoun</th>
                  <th>Spanish</th>
                  <th>English</th>
                </tr>
              </thead>
              <tbody>
                {tense.forms.map((form, j) => (
                  <tr key={VERB_PRONOUNS[j]}>
                    <td>{VERB_PRONOUNS[j]}</td>
                    <td>
                      {highlightMatches(form.spanish, highlight)}
                      {form.irregular && <span className="irregular-dot" />}
                    </td>
                    <td className="english">{highlightMatches(form.english, highlight)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {tense.forms.some(f => f.irregular) && (
              <p className="verb-footnote">
                The red dot (<span className="irregular-dot" />) above denotes an irregular conjugation.
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
