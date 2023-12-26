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
