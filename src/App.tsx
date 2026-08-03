import { useState, useRef, useMemo, useCallback } from 'react'
import './App.css'
import { type NumberEntry, SCREENS } from './data'
import Card from './Card'
import ConjugationTable from './ConjugationTable'
import { normalize } from './utils'

export default function App() {
  const [screenIndex, setScreenIndex] = useState(0)
  const [revealedByScreen, setRevealedByScreen] = useState<Record<number, Set<string>>>(
    () => Object.fromEntries(SCREENS.map((_, index) => [index, new Set<string>()]))
  )
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const screen = SCREENS[screenIndex]
  const numberScreenMap = useMemo(() => {
    if (screen.kind !== 'numbers') return null
    return new Map([...screen.col1, ...screen.col2].map(n => [normalize(n.spanish), n]))
  }, [screen])

  const revealed = revealedByScreen[screenIndex]
  const totalCount = screen.kind === 'numbers'
    ? numberScreenMap!.size
    : screen.rows.reduce((sum, row) => sum + row.cells.length, 0)
  const complete = revealed.size === totalCount

  function switchScreen(index: number) {
    setScreenIndex(index)
    setInput('')
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value)
    const match = numberScreenMap?.get(normalize(e.target.value))
    if (match && revealed.has(String(match.value))) return
    if (match) {
      setRevealedByScreen(prev => ({
        ...prev,
        [screenIndex]: new Set(prev[screenIndex]).add(String(match.value)),
      }))
      setInput('')
    }
  }

  function reset() {
    setRevealedByScreen(prev => ({ ...prev, [screenIndex]: new Set() }))
    setInput('')
    inputRef.current?.focus()
  }

  const handleReveal = useCallback((id: string) => {
    setRevealedByScreen(prev => ({
      ...prev,
      [screenIndex]: new Set(prev[screenIndex]).add(id),
    }))
  }, [screenIndex])

  function renderColumn(numbers: NumberEntry[]) {
    return numbers.map(({ value, spanish }) => (
      <Card
        key={value}
        value={value}
        spanish={spanish}
        isRevealed={revealed.has(String(value))}
        onReveal={v => handleReveal(String(v))}
      />
    ))
  }

  return (
    <div className="layout">
      <div className="app">
        <h1>{screen.kind === 'numbers' ? 'Spanish Numbers' : screen.label}</h1>
        <p className="subtitle">
          {screen.kind === 'numbers'
            ? 'Type each number in Spanish to reveal it'
            : screen.description}
        </p>

        {screen.kind === 'numbers' ? (
          <div className="columns">
            <div className="grid">{renderColumn(screen.col1)}</div>
            {screen.col2.length > 0 && <div className="grid">{renderColumn(screen.col2)}</div>}
          </div>
        ) : (
          <ConjugationTable screen={screen} revealed={revealed} onReveal={handleReveal} />
        )}

        <div className="bottom-area">
          {complete ? (
            <div className="complete">
              <span>¡Perfecto! You got all {totalCount}!</span>
              <button onClick={reset}>Play again</button>
            </div>
          ) : screen.kind === 'numbers' ? (
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
          ) : null}
        </div>

        <p className="progress">{revealed.size} / {totalCount}</p>
      </div>

      <nav className="screen-nav">
        {SCREENS.map((s, index) => (
          <button
            key={s.label}
            className={`nav-btn ${index === screenIndex ? 'active' : ''}`}
            onClick={() => switchScreen(index)}
          >
            {s.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
