import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
)

const Statistics = ({ good, neutral, bad}) => (
    <div>
        <h1>Statistics</h1>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
    </div>
)

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    
    const giveFeedbackP = () => {
        setGood(good + 1)
    }

    const giveFeedbackN = (newValue) => {
        setNeutral(newValue)
    }
    const giveFeedbackB = (newValue) => {
        setBad(newValue)
    }
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => giveFeedbackP()} text='good'/>
      <Button handleClick={() => giveFeedbackN(neutral + 1)} text='neutral'/>
      <Button handleClick={() => giveFeedbackB(bad + 1)} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)