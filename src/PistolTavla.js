// I PistolTavla.js

import React, { useState } from 'react';
import SkottLaggTill from './SkottLaggTill';

const PistolTavla = () => {
  const [skottSerier, setSkottSerier] = useState([]);

  const handleSparaSerie = (serie) => {
    setSkottSerier([...skottSerier, serie]);
  };

  return (
    <div>
      <h1>Pistol Måltavla</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="300"
        viewBox="0 0 300 300"
        style={{ border: '1px solid black', backgroundColor: 'lightgray' }}
      >
        {/* Ritar upp måltavlan */}
        <circle cx="150" cy="150" r="120" fill="red" />
        <circle cx="150" cy="150" r="90" fill="yellow" />
        <circle cx="150" cy="150" r="60" fill="green" />
        <circle cx="150" cy="150" r="30" fill="blue" />
        <circle cx="150" cy="150" r="10" fill="purple" />
        {/* Lägg till fler cirklar eller markeringar för att representera din måltavla */}
      </svg>
      <SkottLaggTill onSparaSerie={handleSparaSerie} />
      <h2>Sparade serier:</h2>
      <ul>
        {skottSerier.map((serie, index) => (
          <li key={index}>
            Serie {index + 1}: {serie.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PistolTavla;
