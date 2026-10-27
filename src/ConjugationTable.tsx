import { memo, useRef, useState } from 'react'
import type { ConjugationScreen } from './verbs'
import { normalizeStrict } from './utils'

const ALLOWED_CHAR = /^[a-záéíóúüñ]$/i

const ConjCell = memo(({ id, stem, ending, isRevealed, onReveal, registerRef, onComplete }: {
  id: string
  stem: string
  ending: string
  isRevealed: boolean
  onReveal: (id: string) => void
  registerRef: (el: HTMLInputElement | null) => void
  onComplete: () => void
}) => {
  const [value, setValue] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
    if (normalizeStrict(e.target.value) === normalizeStrict(ending)) {
      onReveal(id)
      onComplete()
    }
  }

  // Only letters (incl. Spanish accented ones) can be typed, so stray punctuation/digit/space keys are ignored
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key.length === 1 && !e.metaKey && !e.ctrlKey && !ALLOWED_CHAR.test(e.key)) {
      e.preventDefault()
    }
  }

  return (
    <span className={`conj-cell ${isRevealed ? 'revealed' : ''}`}>
      <span className="stem">{stem}</span>
      {isRevealed ? (
        <span className="ending">{ending}</span>
      ) : (
        <input
          ref={registerRef}
          className="ending-input"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          size={Math.max(ending.length, 2)}
          autoComplete="off"
          spellCheck={false}
        />
      )}
    </span>
  )
})

export default function ConjugationTable({ screen, revealed, onReveal }: {
  screen: ConjugationScreen
  revealed: Set<string>
  onReveal: (id: string) => void
}) {
  const inputRefs = useRef(new Map<string, HTMLInputElement>())

  return (
    <table className="conj-table">
      <thead>
        <tr>
          <th></th>
          {screen.verbs.map(verb => <th key={verb} className="verb-heading">{verb}</th>)}
        </tr>
      </thead>
      <tbody>
        {screen.rows.map((row, rowIndex) => (
          <tr key={row.pronoun}>
            <td className="pronoun">{row.pronoun}</td>
            {row.cells.map((cell, columnIndex) => {
              const nextId = screen.rows[rowIndex + 1]?.cells[columnIndex]?.id
                ?? screen.rows[0]?.cells[columnIndex + 1]?.id
              return (
                <td key={cell.id}>
                  <ConjCell
                    id={cell.id}
                    stem={cell.stem}
                    ending={cell.ending}
                    isRevealed={revealed.has(cell.id)}
                    onReveal={onReveal}
                    registerRef={el => {
                      if (el) inputRefs.current.set(cell.id, el)
                      else inputRefs.current.delete(cell.id)
                    }}
                    onComplete={() => {
                      if (nextId) inputRefs.current.get(nextId)?.focus()
                    }}
                  />
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
