import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const Header = props => <h1>{props.course}</h1>;

  const Content = () => {
    return (
      <div>
        <Part part={part1} exercisesInPart={exercises1} />
        <Part part={part2} exercisesInPart={exercises2} />
        <Part part={part3} exercisesInPart={exercises3} />
      </div>
    );
  };

  const Part = props => (
    <p>
      {props.part} {props.exercisesInPart}
    </p>
  );

  const Total = props => <p>Number of exercises {props.totalNumber}</p>;

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total totalNumber={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
