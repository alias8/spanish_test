import { memo } from 'react'

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

export default Card
