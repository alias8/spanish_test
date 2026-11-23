import { Fragment, useEffect, useMemo, type ReactNode } from 'react'
import { ENGLISH_INFINITIVE_ITEMS, ENGLISH_VERBS, type EnglishForm, type EnglishVerb } from './englishVerbs'
import { normalize } from './utils'

// English counterpart of VerbLookup, for comparison: the same six panels (infinitive forms plus
// five tenses), built for the 20 most common English verbs.

function renderEnglish({ english, irregular }: EnglishForm) {
  if (!irregular) return english
  const parts: ReactNode[] = []
  let i = 0
  for (const [start, end] of irregular) {
    if (start > i) parts.push(<Fragment key={i}>{english.slice(i, start)}</Fragment>)
    parts.push(<span className="irregular-letters" key={start}>{english.slice(start, end)}</span>)
    i = end
  }
  if (i < english.length) parts.push(<Fragment key={i}>{english.slice(i)}</Fragment>)
  return parts
}

function IrregularFootnote() {
  return (
    <p className="verb-footnote">
      Letters in <span className="irregular-letters">red</span> break the regular pattern (add -s, -ed, -ing).
    </p>
  )
}

export default function EnglishVerbLookup({ query, onQueryChange, onResolvedChange }: {
  query: string
  onQueryChange: (query: string) => void
  onResolvedChange?: (base: string | null) => void
}) {
  // an empty box shows be rather than nothing
  const q = normalize(query.replace(/^to /i, '')) || 'be'

  const matches = useMemo(() => {
    const exact = ENGLISH_VERBS.find(v => v.base === q)
    if (exact) return [exact]
    const allWords = (v: EnglishVerb) => [
      ...v.infinitiveForms.map(f => f.english),
      ...v.tenses.flatMap(t => t.forms.map(f => f.english)),
    ].flatMap(s => normalize(s).replace(/[!']/g, ' ').split(/\s+/))
    const byForm = ENGLISH_VERBS.filter(v => allWords(v).includes(q))
    if (byForm.length > 0) return byForm
    // partial match on the base form, or the Spanish equivalent (so "hacer" finds do and make)
    return ENGLISH_VERBS.filter(v => v.base.startsWith(q) || normalize(v.spanish).split(', ').some(s => s.startsWith(q)))
  }, [q])

  const match = matches.length === 1 ? matches[0] : null

  useEffect(() => {
    onResolvedChange?.(match?.base ?? null)
  }, [match, onResolvedChange])

  return (
    <div className="verb-lookup">
      <input
        className="verb-search"
        type="text"
        value={query}
        onChange={e => onQueryChange(e.target.value.replace(/[^\p{L} ]/gu, ''))}
        placeholder='Search an English verb, e.g. "go" or "went"...'
        autoFocus
        autoComplete="off"
        spellCheck={false}
      />

      <div className="verb-results">
        {matches.length === 0 ? (
          <p className="verb-hint">No English verb found for "{query}". Only the top 20 are included.</p>
        ) : match ? (
          <EnglishVerbDetail verb={match} />
        ) : (
          <div className="verb-picker">
            <p className="verb-hint">Multiple matches — pick one:</p>
            {matches.map(v => (
              <button key={v.base} className="verb-picker-btn" onClick={() => onQueryChange(v.base)}>
                to {v.base} <span className="english">— {v.spanish}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function EnglishVerbDetail({ verb }: { verb: EnglishVerb }) {
  const label = verb.base[0].toUpperCase() + verb.base.slice(1)

  return (
    <div className="verb-detail">
      <div className="verb-box">
        <p className="verb-summary">{verb.summary} In Spanish: <em>{verb.spanish}</em>.</p>
        <table className="verb-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            {verb.infinitiveForms.map((row, i) => (
              <tr key={ENGLISH_INFINITIVE_ITEMS[i]}>
                <td>{ENGLISH_INFINITIVE_ITEMS[i]}</td>
                <td>{renderEnglish(row)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {verb.infinitiveForms.some(f => f.irregular) && <IrregularFootnote />}
      </div>

      {verb.tenses.map(tense => (
        <div className="verb-box" key={tense.name}>
          <h3>{label} in the {tense.name}</h3>
          <p className="verb-summary">{tense.description}</p>
          <table className="verb-table">
            <thead>
              <tr>
                <th>Pronoun</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              {tense.forms.map((form, j) => (
                <tr key={tense.pronouns[j]}>
                  <td>{tense.pronouns[j]}</td>
                  <td>{renderEnglish(form)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {tense.forms.some(f => f.irregular) && <IrregularFootnote />}
        </div>
      ))}
    </div>
  )
}
