import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Average = ({ good, bad, allClicks }) => (
    <p>Average: {(good + bad * -1) / allClicks}</p>
);

const Statistics = ({ good, neutral, bad, allClicks }) => {
  if (allClicks === 0) {
    return <p>No statistics yet</p>;
  }

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {allClicks}</p>
      <Average good={good} bad={bad} allClicks={allClicks} />
      <p>Positive: {(good * 100) / allClicks} % </p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAllClicks] = useState(0);

  const giveFeedbackP = () => {
    setGood(good + 1);
    setAllClicks(allClicks + 1);
  };

  const giveFeedbackN = newValue => {
    setNeutral(newValue);
    setAllClicks(allClicks + 1);
  };
  
  const giveFeedbackB = newValue => {
    setBad(newValue);
    setAllClicks(allClicks + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={giveFeedbackP} text="good" />
      <Button handleClick={() => giveFeedbackN(neutral + 1)} text="neutral" />
      <Button handleClick={() => giveFeedbackB(bad + 1)} text="bad" />
      <h1>Statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        allClicks={allClicks}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
