import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ]
  };

  const Header = props => <h1>{props.course.name}</h1>;

  const Content = props => {
    console.log(props);
    return (
      <div>
        <Part
          name={props.parts[0].name}
          exercisesInPart={props.parts[0].exercises}
        />
        <Part
          name={props.parts[1].name}
          exercisesInPart={props.parts[1].exercises}
        />
        <Part
          name={props.parts[2].name}
          exercisesInPart={props.parts[2].exercises}
        />
      </div>
    );
  };

  const Part = props => (
    <p>
      {props.name} {props.exercisesInPart}
    </p>
  );

  const Total = props => {
    return (
      <p>
        Number of exercises{" "}
        {props.parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises}
      </p>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
