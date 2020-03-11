import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ];

  const Header = props => <h1>{props.course}</h1>;

  const Content = () => {
    return (
      <div>
        <Part name={parts[0].name} exercisesInPart={parts[0].exercises} />
        <Part name={parts[1].name} exercisesInPart={parts[1].exercises} />
        <Part name={parts[2].name} exercisesInPart={parts[2].exercises} />
      </div>
    );
  };

  const Part = props => (
    <p>
      {props.name} {props.exercisesInPart}
    </p>
  );

  const Total = props => {
    console.log(props.parts[0].exercises);
    return (
      <p>
        Number of exercises{" "}
        {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
