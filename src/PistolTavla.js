// I PistolTavla.js


import React, { useState } from 'react';
import SkottLaggTill from './SkottLaggTill';

const PistolTavla = () => {
  const [skottSerier, setSkottSerier] = useState([]);
  const [openSerieIndex, setOpenSerieIndex] = useState(null);

  const handleSparaSerie = (serie) => {
    setSkottSerier([...skottSerier, serie]);
  };

  const handleToggleSerie = (index) => {
    setOpenSerieIndex(openSerieIndex === index ? null : index);
  };

  return (
    <div>
      <h1>Pistol Måltavla</h1>
      <SkottLaggTill onSparaSerie={handleSparaSerie} />
      <h2>Sparade serier:</h2>
      {skottSerier.map((serie, index) => (
        <div key={index}>
          <h3 onClick={() => handleToggleSerie(index)}>
            Serie {index + 1} {openSerieIndex === index ? '-' : '+'}
          </h3>
          {openSerieIndex === index && serie.map(({ x, y, ring }, shotIndex) => {
            const horizontalPosition = x < 150 ? 'vänster' : 'höger';
            const verticalPosition = y < 150 ? 'högt' : 'lågt';
            return (
              <p key={shotIndex}>
                Skott {shotIndex + 1}: ring {ring}, position: {horizontalPosition}, {verticalPosition}
              </p>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default PistolTavla;
