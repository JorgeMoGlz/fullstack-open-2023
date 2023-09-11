import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

export const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [score, setScore] = useState(0)

  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good+1
    setGood(updatedGood)

    setTotal(updatedGood+neutral+bad)
    setScore(score+1)
  }
  
  const handleNeutralClick = () => {
    const updatedNeutral = neutral+1
    setNeutral(updatedNeutral)

    setTotal(good+updatedNeutral+bad)
  }
  
  const handleBadClick = () => {
    const updatedBad = bad+1
    setBad(updatedBad)

    setTotal(good+neutral+updatedBad)
    setScore(score-1)
  }

  return (
    <div>
      <h3>give feedback</h3>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />

      <h3>statistics</h3>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {total}</p>
      

      <p>average: {(!score/total) ? '0' : (score/total).toFixed(3)}</p>
      <p>positive: {(!good/total*100) ? '0' : (good/total*100).toFixed(3)} %</p>

    </div>
  )
}