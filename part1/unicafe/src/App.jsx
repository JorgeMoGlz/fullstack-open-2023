import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({text, stat}) => {
  return (
    <p>{text} {stat}</p>
  )
} 

const Statistics = ({good, neutral, bad, total, score}) => {
  
  return (
    <div>
      <h3>Statistics</h3>
      
      <StatisticLine text="good" stat={good}/>
      <StatisticLine text="neutral" stat={neutral}/>
      <StatisticLine text="bad" stat={bad}/>
      <StatisticLine text="total" stat={total}/>

      {
        (total===0 
          ? <p>No feedback given</p> 
          : (
          <>
            <StatisticLine text="average" stat={(score/total).toFixed(3)} />
            <StatisticLine text="positive" stat={`${(good/total*100).toFixed(3)}%`} /> 
          </>
          )
        )
      }

    </div>

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

      <Statistics 
        good={good} 
        neutral={neutral}
        bad={bad}
        total={total}
        score={score} />

    </div>
  )
}