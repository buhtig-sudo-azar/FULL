const Header = (props) => {
  const { course } = props;
  return (
    <>
      <h3>{course}</h3>
    </>
  );
};
const Content = (props) => {
  const { parts } = props;
  return (
    <>
      {parts.map((i, indx) => (
        <div key={i.name}>
          <Part part={i.name} exercises={i.exercises} />
        </div>
      ))}
    </>
  );
};
const Part = (props) => {
  const { part, exercises } = props;
  return (
    <>
      <p>
        {part} {exercises}
      </p>
    </>
  );
};
const Total = (props) => {
  const { total } = props;
  return (
    <>
      <p>Number of exercises {total.reduce((a,v)=> a + v.exercises,0)}</p>
    
    </>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  );
};

export default App;
