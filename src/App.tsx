import { useState, useRef, useMemo, useCallback, useLayoutEffect } from 'react'
import './App.css'
import { type NumberEntry, SCREENS } from './data'
import { FREQUENCY_RANK, VERBS } from './verbs'
import Card from './Card'
import ConjugationTable from './ConjugationTable'
import VerbLookup from './VerbLookup'
import { normalize } from './utils'

export default function App() {
  const [screenIndex, setScreenIndex] = useState(() => SCREENS.findIndex(s => s.kind === 'verbs'))
  const [revealedByScreen, setRevealedByScreen] = useState<Record<number, Set<string>>>(
    () => Object.fromEntries(SCREENS.map((_, index) => [index, new Set<string>()]))
  )
  const [input, setInput] = useState('')
  const [verbQuery, setVerbQuery] = useState('ser')
  const [resolvedVerb, setResolvedVerb] = useState<string | null>(null)
  const [verbSort, setVerbSort] = useState<'alpha' | 'frequency'>('frequency')
  const [appOffset, setAppOffset] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const verbNavRef = useRef<HTMLElement>(null)
  const screenNavRef = useRef<HTMLElement>(null)

  const screen = SCREENS[screenIndex]
  const sortedVerbs = useMemo(() => {
    const list = [...VERBS]
    if (verbSort === 'frequency') {
      list.sort((a, b) => (FREQUENCY_RANK.get(a.infinitive) ?? Infinity) - (FREQUENCY_RANK.get(b.infinitive) ?? Infinity))
    } else {
      list.sort((a, b) => a.infinitive.localeCompare(b.infinitive))
    }
    return list
  }, [verbSort])
  const numberScreenMap = useMemo(() => {
    if (screen.kind !== 'numbers') return null
    return new Map([...screen.col1, ...screen.col2].map(n => [normalize(n.spanish), n]))
  }, [screen])

  // The verb-nav and screen-nav sidebars are position:absolute (so they don't
  // affect .app's centering) but differ in width, which leaves .app off-center
  // between them. Measure both and nudge .app so its margin to each is equal.
  useLayoutEffect(() => {
    if (screen.kind !== 'verbs') {
      setAppOffset(0)
      return
    }
    function recompute() {
      const rightEl = screenNavRef.current
      const leftEl = verbNavRef.current
      if (!rightEl || !leftEl) return
      const leftEdge = leftEl.getBoundingClientRect().right
      const rightEdge = rightEl.getBoundingClientRect().left
      const desiredCenter = (leftEdge + rightEdge) / 2
      setAppOffset(desiredCenter - window.innerWidth / 2)
    }
    recompute()
    const observer = new ResizeObserver(recompute)
    if (verbNavRef.current) observer.observe(verbNavRef.current)
    if (screenNavRef.current) observer.observe(screenNavRef.current)
    window.addEventListener('resize', recompute)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', recompute)
    }
  }, [screen.kind, verbSort, sortedVerbs])

  const revealed = revealedByScreen[screenIndex]
  const totalCount = screen.kind === 'numbers'
    ? numberScreenMap!.size
    : screen.kind === 'conjugation'
    ? screen.rows.reduce((sum, row) => sum + row.cells.length, 0)
    : 0
  const complete = screen.kind !== 'verbs' && revealed.size === totalCount

  function switchScreen(index: number) {
    setScreenIndex(index)
    setInput('')
    setVerbQuery(SCREENS[index].kind === 'verbs' ? 'ser' : '')
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
      <div className="app" style={appOffset ? { transform: `translateX(${appOffset}px)` } : undefined}>
        <h1>{screen.kind === 'numbers' ? 'Spanish Numbers' : screen.label}</h1>
        {screen.kind !== 'verbs' && (
          <p className="subtitle">
            {screen.kind === 'numbers'
              ? 'Type each number in Spanish to reveal it'
              : screen.description}
          </p>
        )}

        {screen.kind === 'numbers' ? (
          <div className="columns">
            <div className="grid">{renderColumn(screen.col1)}</div>
            {screen.col2.length > 0 && <div className="grid">{renderColumn(screen.col2)}</div>}
          </div>
        ) : screen.kind === 'conjugation' ? (
          <ConjugationTable screen={screen} revealed={revealed} onReveal={handleReveal} />
        ) : (
          <VerbLookup query={verbQuery} onQueryChange={setVerbQuery} onResolvedChange={setResolvedVerb} />
        )}

        {screen.kind !== 'verbs' && (
          <>
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
          </>
        )}
      </div>

      {screen.kind === 'verbs' && (
        <nav className="verb-nav" ref={verbNavRef}>
          <button
            className="verb-sort-toggle"
            onClick={() => setVerbSort(prev => prev === 'alpha' ? 'frequency' : 'alpha')}
          >
            Sort: {verbSort === 'alpha' ? 'A–Z' : 'Frequency'}
          </button>
          {sortedVerbs.map(v => (
            <button
              key={v.infinitive}
              className={`nav-btn verb-nav-btn ${resolvedVerb !== null && normalize(resolvedVerb) === normalize(v.infinitive) ? 'active' : ''}`}
              onClick={() => setVerbQuery(v.infinitive)}
            >
              {v.infinitive[0].toUpperCase() + v.infinitive.slice(1)}
            </button>
          ))}
        </nav>
      )}

      <nav className="screen-nav" ref={screenNavRef}>
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
