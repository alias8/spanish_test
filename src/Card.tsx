import { memo } from 'react'

const Card = memo(({ value, spanish, isRevealed, onReveal }: {
  value: number
  spanish: string
  isRevealed: boolean
  onReveal: (value: number) => void
}) => (
  <div className={`card ${isRevealed ? 'revealed' : ''}`}>
    <span className="numeral">{value}</span>
    <span className="word">{isRevealed ? spanish : '?'}</span>
    {!isRevealed && (
      <button className="reveal-btn" onClick={() => onReveal(value)}>hint</button>
    )}
  </div>
))

export default Card
