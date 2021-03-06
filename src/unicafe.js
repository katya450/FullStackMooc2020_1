import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => {
  return text === "Positive:" ? (
    <tr>
      <td>{text} </td>
      <td>{value} %</td>
    </tr>
  ) : (
    <tr>
      <td>{text} </td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  if (good + bad + neutral === 0) {
    return <h1>No statistics yet</h1>;
  }

  return (
    <table>
      <thead>
        <h1>Statistics</h1>
      </thead>
      <tbody>
        <StatisticLine text="Good:" value={good} />
        <StatisticLine text="Neutral:" value={neutral} />
        <StatisticLine text="Bad:" value={bad} />
        <StatisticLine text="All:" value={good + bad + neutral} />
        <StatisticLine
          text="Average:"
          value={(good + bad * -1) / (good + bad + neutral)}
        />
        <StatisticLine
          text="Positive:"
          value={(good * 100) / (good + bad + neutral)}
        />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const giveFeedbackP = () => {
    setGood(good + 1);
  };

  const giveFeedbackN = newValue => {
    setNeutral(newValue);
  };

  const giveFeedbackB = newValue => {
    setBad(newValue);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={giveFeedbackP} text="good" />
      <Button handleClick={() => giveFeedbackN(neutral + 1)} text="neutral" />
      <Button handleClick={() => giveFeedbackB(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
