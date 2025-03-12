import React from 'react';
import Header from './Header'; // Tuodaan Header-komponentti
import Content from './Content'; // Tuodaan Content-komponentti

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />   {/* Kurssin nimen renderöinti */}
      <Content parts={course.parts} />   {/* Kurssin osien renderöinti */}
    </div>
  );
};

export default Course;
