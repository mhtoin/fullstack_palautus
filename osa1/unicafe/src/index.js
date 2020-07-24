import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({handleClick, label}) => {
  return (
    <button onClick={handleClick}>
      {label}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
    <td>{text}:</td> <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const avg = (good * 1 + neutral * 0 + bad * -1) / all
  const pos = (good / all * 100) + "%" 

  if (all === 0) {
    return (
      <div>
        No feedback given yet!
      </div>
    )
  }

  return (
    <table>
      <tbody>
      <StatisticLine text="Good" value={good}/>
      <StatisticLine text="Neutral" value={neutral}/>
      <StatisticLine text="Bad" value={bad}/>
      <StatisticLine text="All" value={all}/>
      <StatisticLine text="Average" value={avg}/>
      <StatisticLine text="Positive" value={pos}/>
    </tbody>
    </table>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allStats, setAll] = useState([])

  const handleGood = () => { 
    setGood(good + 1)
    setAll(allStats.concat('G'))
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(allStats.concat('N'))
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(allStats.concat('B'))
  }

  return (
    <div>
      <Header text="Give feedback" />
      <Button handleClick={handleGood} label='Good' />
      <Button handleClick={handleNeutral} label='Neutral' />
      <Button handleClick={handleBad} label='Bad' />
      <Header text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)