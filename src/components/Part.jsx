import React from 'react';

const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p> // Näytetään osan nimi ja harjoitusten määrä
  );
};

export default Part;

