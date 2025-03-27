import Course from './components/Course.jsx';

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { id: 1, name: "Fundamentals of React", exercises: 10 },
      { id: 2, name: "Using props to pass data", exercises: 7 },
      { id: 3, name: "State of component", exercises: 14 },
      { id: 4, name: "Redux", exercises: 11 }
    ]
  };

const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <Course course={course} />
      <p><strong>Total of {totalExercises} exercises</strong></p>
    </div>
  );
};

export default App;


