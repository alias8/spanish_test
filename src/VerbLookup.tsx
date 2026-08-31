import { useMemo, useState } from 'react'
import type { VerbEntry } from './verbs'
import { normalize } from './utils'

export default function VerbLookup({ verbs, query, onQueryChange }: {
  verbs: VerbEntry[]
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
    const exact = verbs.find(v => normalize(v.infinitive) === q)
    if (exact) return [exact]
    return verbs.filter(v => normalize(v.infinitive).includes(q) || normalize(v.translation).includes(q))
  }, [verbs, query])

  const match = matches.length === 1 ? matches[0] : matches.find(v => v.infinitive === selected) ?? null

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
        {!query ? null : matches.length === 0 ? (
          <p className="verb-hint">No verb found for "{query}" yet.</p>
        ) : match ? (
          <VerbDetail verb={match} />
        ) : (
          <div className="verb-picker">
            <p className="verb-hint">Multiple matches — pick one:</p>
            {matches.map(v => (
              <button key={v.infinitive} className="verb-picker-btn" onClick={() => setSelected(v.infinitive)}>
                {v.infinitive} <span className="english">— {v.translation}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function VerbDetail({ verb }: { verb: VerbEntry }) {
  const label = verb.infinitive[0].toUpperCase() + verb.infinitive.slice(1)

  return (
    <div className="verb-detail">
      <div className="verb-box">
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
            {verb.infinitiveForms.map(row => (
              <tr key={row.item}>
                <td>{row.item}</td>
                <td>{row.spanish}</td>
                <td className="english">{row.english}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {verb.tenses.map(tense => (
        <div className="verb-box" key={tense.name}>
          <h3>{label} in the {tense.name}</h3>
          {tense.description && (
            <p className="verb-summary">
              {tense.description}
              {tense.example && (
                <> For example, "<em>{tense.example.spanish}</em>", meaning "<em>{tense.example.english}</em>".</>
              )}
              {' '}In Spanish, known as "{tense.spanishName}".
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
              {tense.forms.map(form => (
                <tr key={form.pronoun}>
                  <td>{form.pronoun}</td>
                  <td>
                    {form.spanish}
                    {form.irregular && <span className="irregular-dot" />}
                  </td>
                  <td className="english">{form.english}</td>
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
      ))}
    </div>
  )
}
