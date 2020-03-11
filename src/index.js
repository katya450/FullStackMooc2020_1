import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }

  const Header = props => <h1>{props.course}</h1>;

  const Content = () => {
    return (
      <div>
        <Part part={part1.name} exercisesInPart={part1.exercises} />
        <Part part={part2.name} exercisesInPart={part2.exercises} />
        <Part part={part3.name} exercisesInPart={part3.exercises} />
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
      <Total totalNumber={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
