import { useState, useRef } from 'react'
import './App.css'

const NUMBERS: { value: number; spanish: string }[] = [
  { value: 10, spanish: 'diez' },
  { value: 9,  spanish: 'nueve' },
  { value: 8,  spanish: 'ocho' },
  { value: 7,  spanish: 'siete' },
  { value: 6,  spanish: 'seis' },
  { value: 5,  spanish: 'cinco' },
  { value: 4,  spanish: 'cuatro' },
  { value: 3,  spanish: 'tres' },
  { value: 2,  spanish: 'dos' },
  { value: 1,  spanish: 'uno' },
]

export default function App() {
  const [revealed, setRevealed] = useState<Set<number>>(new Set())
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const complete = revealed.size === NUMBERS.length

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value.trim().toLowerCase()
    setInput(e.target.value)

    const match = NUMBERS.find(n => n.spanish === val && !revealed.has(n.value))
    if (match) {
      setRevealed(prev => new Set(prev).add(match.value))
      setInput('')
    }
  }

  return (
    <div className="app">
      <h1>Spanish Numbers</h1>
      <p className="subtitle">Type each number in Spanish to reveal it</p>

      <div className="grid">
        {NUMBERS.map(({ value, spanish }) => {
          const isRevealed = revealed.has(value)
          return (
            <div key={value} className={`card ${isRevealed ? 'revealed' : ''}`}>
              <span className="numeral">{value}</span>
              <span className="word">{isRevealed ? spanish : '?'}</span>
            </div>
          )
        })}
      </div>

      {complete ? (
        <div className="complete">
          <span>¡Perfecto! You got all 10!</span>
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
