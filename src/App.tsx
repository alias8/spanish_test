import { useState, useRef } from 'react'
import './App.css'

type NumberEntry = { value: number; spanish: string }

const ALL_NUMBERS: NumberEntry[] = [
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
  { value: 21, spanish: 'veintiuno' },
  { value: 22, spanish: 'veintidós' },
  { value: 23, spanish: 'veintitrés' },
  { value: 24, spanish: 'veinticuatro' },
  { value: 25, spanish: 'veinticinco' },
  { value: 26, spanish: 'veintiséis' },
  { value: 27, spanish: 'veintisiete' },
  { value: 28, spanish: 'veintiocho' },
  { value: 29, spanish: 'veintinueve' },
  { value: 30, spanish: 'treinta' },
  { value: 31, spanish: 'treinta y uno' },
  { value: 32, spanish: 'treinta y dos' },
  { value: 33, spanish: 'treinta y tres' },
  { value: 34, spanish: 'treinta y cuatro' },
  { value: 35, spanish: 'treinta y cinco' },
  { value: 36, spanish: 'treinta y seis' },
  { value: 37, spanish: 'treinta y siete' },
  { value: 38, spanish: 'treinta y ocho' },
  { value: 39, spanish: 'treinta y nueve' },
  { value: 40, spanish: 'cuarenta' },
]

const TENS: NumberEntry[] = [
  { value: 10,  spanish: 'diez' },
  { value: 20,  spanish: 'veinte' },
  { value: 30,  spanish: 'treinta' },
  { value: 40,  spanish: 'cuarenta' },
  { value: 50,  spanish: 'cincuenta' },
  { value: 60,  spanish: 'sesenta' },
  { value: 70,  spanish: 'setenta' },
  { value: 80,  spanish: 'ochenta' },
  { value: 90,  spanish: 'noventa' },
  { value: 100, spanish: 'cien' },
]

const SCREENS = [
  { label: 'Screen 1', col1: ALL_NUMBERS.slice(0, 10),  col2: ALL_NUMBERS.slice(10, 20) },
  { label: 'Screen 2', col1: ALL_NUMBERS.slice(20, 30), col2: ALL_NUMBERS.slice(30, 40) },
  { label: 'Screen 3', col1: TENS,                      col2: [] as NumberEntry[] },
]

function normalize(s: string) {
  return s.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
}

export default function App() {
  const [screenIndex, setScreenIndex] = useState(0)
  const [revealedByScreen, setRevealedByScreen] = useState<Record<number, Set<number>>>(
    { 0: new Set(), 1: new Set(), 2: new Set() }
  )
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const screen = SCREENS[screenIndex]
  const screenNumbers = [...screen.col1, ...screen.col2]
  const revealed = revealedByScreen[screenIndex]
  const complete = revealed.size === screenNumbers.length

  function switchScreen(index: number) {
    setScreenIndex(index)
    setInput('')
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value)
    const match = screenNumbers.find(n => normalize(n.spanish) === normalize(e.target.value) && !revealed.has(n.value))
    if (match) {
      setRevealedByScreen(prev => ({
        ...prev,
        [screenIndex]: new Set(prev[screenIndex]).add(match.value),
      }))
      setInput('')
    }
  }

  function reset() {
    setRevealedByScreen(prev => ({ ...prev, [screenIndex]: new Set() }))
    setInput('')
    inputRef.current?.focus()
  }

  function renderColumn(numbers: NumberEntry[]) {
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
    <div className="layout">
      <div className="app">
        <h1>Spanish Numbers</h1>
        <p className="subtitle">Type each number in Spanish to reveal it</p>

        <div className="columns">
          <div className="grid">{renderColumn(screen.col1)}</div>
          {screen.col2.length > 0 && <div className="grid">{renderColumn(screen.col2)}</div>}
        </div>

        <div className="bottom-area">
          {complete ? (
            <div className="complete">
              <span>¡Perfecto! You got all {screenNumbers.length}!</span>
              <button onClick={reset}>Play again</button>
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
        </div>

        <p className="progress">{revealed.size} / {screenNumbers.length}</p>
      </div>

      <nav className="screen-nav">
        {SCREENS.map((s, i) => (
          <button
            key={s.label}
            className={`nav-btn ${i === screenIndex ? 'active' : ''}`}
            onClick={() => switchScreen(i)}
          >
            {s.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
