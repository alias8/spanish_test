import { useState, useRef, useMemo } from 'react'
import './App.css'
import { type NumberEntry, SCREENS } from './data'
import Card from './Card'
import { normalize } from './utils'

export default function App() {
  const [screenIndex, setScreenIndex] = useState(0)
  const [revealedByScreen, setRevealedByScreen] = useState<Record<number, Set<number>>>(
    { 0: new Set(), 1: new Set(), 2: new Set(), 3: new Set(), 4: new Set(), 5: new Set(), 6: new Set(), 7: new Set(), 8: new Set() }
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
