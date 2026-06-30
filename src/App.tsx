import { useState, useRef } from 'react'
import './App.css'

const NUMBERS: { value: number; spanish: string }[] = [
  { value: 1,  spanish: 'uno' },
  { value: 2,  spanish: 'dos' },
  { value: 3,  spanish: 'tres' },
  { value: 4,  spanish: 'cuatro' },
  { value: 5,  spanish: 'cinco' },
  { value: 6,  spanish: 'seis' },
  { value: 7,  spanish: 'siete' },
  { value: 8,  spanish: 'ocho' },
  { value: 9,  spanish: 'nueve' },
  { value: 10, spanish: 'diez' },
  { value: 11, spanish: 'once' },
  { value: 12, spanish: 'doce' },
  { value: 13, spanish: 'trece' },
  { value: 14, spanish: 'catorce' },
  { value: 15, spanish: 'quince' },
  { value: 16, spanish: 'dieciséis' },
  { value: 17, spanish: 'diecisiete' },
  { value: 18, spanish: 'dieciocho' },
  { value: 19, spanish: 'diecinueve' },
  { value: 20, spanish: 'veinte' },
]

const COL1 = NUMBERS.slice(0, 10)
const COL2 = NUMBERS.slice(10)

function normalize(s: string) {
  return s.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
}

export default function App() {
  const [revealed, setRevealed] = useState<Set<number>>(new Set())
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const complete = revealed.size === NUMBERS.length

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value)

    const match = NUMBERS.find(n => normalize(n.spanish) === normalize(e.target.value) && !revealed.has(n.value))
    if (match) {
      setRevealed(prev => new Set(prev).add(match.value))
      setInput('')
    }
  }

  function renderColumn(numbers: typeof NUMBERS) {
    return numbers.map(({ value, spanish }) => {
      const isRevealed = revealed.has(value)
      return (
        <div key={value} className={`card ${isRevealed ? 'revealed' : ''}`}>
          <span className="numeral">{value}</span>
          <span className="word">{isRevealed ? spanish : '?'}</span>
        </div>
      )
    })
  }

  return (
    <div className="app">
      <h1>Spanish Numbers</h1>
      <p className="subtitle">Type each number in Spanish to reveal it</p>

      <div className="columns">
        <div className="grid">{renderColumn(COL1)}</div>
        <div className="grid">{renderColumn(COL2)}</div>
      </div>

      {complete ? (
        <div className="complete">
          <span>¡Perfecto! You got all 20!</span>
          <button onClick={() => { setRevealed(new Set()); inputRef.current?.focus() }}>
            Play again
          </button>
        </div>
      ) : (
        <input
          ref={inputRef}
          className="answer-input"
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Type a Spanish number..."
          autoFocus
          autoComplete="off"
          spellCheck={false}
        />
      )}

      <p className="progress">{revealed.size} / {NUMBERS.length}</p>
    </div>
  )
}
