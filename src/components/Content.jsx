import React from 'react';
import Part from './Part'; // Tuodaan Part-komponentti

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />  {/* Renderöidään osat Part-komponentilla */}
      ))}
    </div>
  );
};

export default Content;
