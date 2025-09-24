const Header = (props) => {
  const { course } = props;
  return (
    <>
      <h3>{course}</h3>
    </>
  );
};
const Content = (props) => {
  const { part1, part2, part3 } = props;
  return (
    <>
      <p>{part1}</p>
      <p>{part2}</p>
      <p>{part3}</p>
    </>
  );
};
const Part = (props) => {
  const { part, exercises } = props;
  return (
    <>
      {part} {exercises}
    </>
  );
};
// const Total = (props) => {
//   const { exercises1, exercises2, exercises3 } = props;
//   return (
//     <>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </>
//   );
// };

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content
        part1={<Part part={part1.name} exercises={part1.exercises} />}
        part2={<Part part={part2.name} exercises={part2.exercises} />}
        part3={<Part part={part3.name} exercises={part3.exercises} />}
      />
    </div>
  );
};

export default App;
