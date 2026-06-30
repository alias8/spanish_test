import { useState, useRef, useMemo, memo } from 'react'
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

const HUNDREDS: NumberEntry[] = [
  { value: 100, spanish: 'cien' },
  { value: 101, spanish: 'ciento uno' },
  { value: 102, spanish: 'ciento dos' },
  { value: 103, spanish: 'ciento tres' },
  { value: 104, spanish: 'ciento cuatro' },
  { value: 105, spanish: 'ciento cinco' },
  { value: 106, spanish: 'ciento seis' },
  { value: 107, spanish: 'ciento siete' },
  { value: 108, spanish: 'ciento ocho' },
  { value: 109, spanish: 'ciento nueve' },
  { value: 110, spanish: 'ciento diez' },
  { value: 111, spanish: 'ciento once' },
  { value: 112, spanish: 'ciento doce' },
  { value: 113, spanish: 'ciento trece' },
  { value: 114, spanish: 'ciento catorce' },
  { value: 115, spanish: 'ciento quince' },
  { value: 116, spanish: 'ciento dieciséis' },
  { value: 117, spanish: 'ciento diecisiete' },
  { value: 118, spanish: 'ciento dieciocho' },
  { value: 119, spanish: 'ciento diecinueve' },
  { value: 120, spanish: 'ciento veinte' },
  { value: 121, spanish: 'ciento veintiuno' },
  { value: 122, spanish: 'ciento veintidós' },
  { value: 123, spanish: 'ciento veintitrés' },
  { value: 124, spanish: 'ciento veinticuatro' },
  { value: 125, spanish: 'ciento veinticinco' },
  { value: 126, spanish: 'ciento veintiséis' },
  { value: 127, spanish: 'ciento veintisiete' },
  { value: 128, spanish: 'ciento veintiocho' },
  { value: 129, spanish: 'ciento veintinueve' },
  { value: 130, spanish: 'ciento treinta' },
  { value: 131, spanish: 'ciento treinta y uno' },
  { value: 132, spanish: 'ciento treinta y dos' },
  { value: 133, spanish: 'ciento treinta y tres' },
  { value: 134, spanish: 'ciento treinta y cuatro' },
  { value: 135, spanish: 'ciento treinta y cinco' },
  { value: 136, spanish: 'ciento treinta y seis' },
  { value: 137, spanish: 'ciento treinta y siete' },
  { value: 138, spanish: 'ciento treinta y ocho' },
  { value: 139, spanish: 'ciento treinta y nueve' },
  { value: 140, spanish: 'ciento cuarenta' },
]

const SCREENS = [
  { label: 'Screen 1', col1: ALL_NUMBERS.slice(0, 10),  col2: ALL_NUMBERS.slice(10, 20) },
  { label: 'Screen 2', col1: ALL_NUMBERS.slice(20, 30), col2: ALL_NUMBERS.slice(30, 40) },
  { label: 'Screen 3', col1: TENS,                      col2: [] as NumberEntry[] },
  { label: 'Screen 4', col1: HUNDREDS.slice(1, 11),     col2: HUNDREDS.slice(11, 21) },
  { label: 'Screen 5', col1: HUNDREDS.slice(21, 31),    col2: HUNDREDS.slice(31, 41) },
]

function normalize(s: string) {
  return s.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
}

const Card = memo(({ value, spanish, isRevealed }: {
  value: number
  spanish: string
  isRevealed: boolean
}) => (
  <div className={`card ${isRevealed ? 'revealed' : ''}`}>
    <span className="numeral">{value}</span>
    <span className="word">{isRevealed ? spanish : '?'}</span>
  </div>
))

export default function App() {
  const [screenIndex, setScreenIndex] = useState(0)
  const [revealedByScreen, setRevealedByScreen] = useState<Record<number, Set<number>>>(
    { 0: new Set(), 1: new Set(), 2: new Set(), 3: new Set(), 4: new Set() }
  )
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const screen = SCREENS[screenIndex]
  const screenMap = useMemo(
    () => new Map([...screen.col1, ...screen.col2].map(n => [normalize(n.spanish), n])),
    [screen]
  )
  const revealed = revealedByScreen[screenIndex]
  const complete = revealed.size === screenMap.size

  function switchScreen(index: number) {
    setScreenIndex(index)
    setInput('')
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value)
    const match = screenMap.get(normalize(e.target.value))
    if (match && revealed.has(match.value)) return
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
    return numbers.map(({ value, spanish }) => (
      <Card key={value} value={value} spanish={spanish} isRevealed={revealed.has(value)} />
    ))
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
              <span>¡Perfecto! You got all {screenMap.size}!</span>
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

        <p className="progress">{revealed.size} / {screenMap.size}</p>
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
