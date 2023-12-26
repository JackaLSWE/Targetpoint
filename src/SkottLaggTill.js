/*import React, { useState } from 'react';

const SkottLaggTill = ({ onSparaSerie }) => {
  const [skottSerie, setSkottSerie] = useState([]);
  const [skott, setSkott] = useState({ x: 0, y: 0 });

  const handleOnClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    setSkott({ x: offsetX, y: offsetY });
  };

  const handleLaggTillSkott = () => {
    setSkottSerie([...skottSerie, { x: skott.x, y: skott.y }]);
    setSkott({ x: 0, y: 0 }); // Återställer för nästa skott
  };

  const handleSparaSerie = () => {
    onSparaSerie(skottSerie.map(skott => ({ x: skott.x, y: skott.y })));
    setSkottSerie([]);
  };

  return (
    <div>
      <p>Klicka på måltavlan för att lägga till skott:</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="300"
        viewBox="0 0 300 300"
        onClick={handleOnClick}
        style={{ border: '1px solid black' }}
      >
        <circle cx="150" cy="150" r="120" fill="black" stroke="white" strokeWidth="1"  />
        <circle cx="150" cy="150" r="90" fill="black" stroke="white" strokeWidth="1"  />
        <circle cx="150" cy="150" r="60" fill="black" stroke="white" strokeWidth="1"  />
        <circle cx="150" cy="150" r="30" fill="black" stroke="white" strokeWidth="1"  />
        <circle cx="150" cy="150" r="10" fill="black" stroke="white" strokeWidth="1" />
        {skottSerie.map((skott, index) => (
          <circle
            key={index}
            cx={skott.x}
            cy={skott.y}
            r="5"
            fill="red"
          />
        ))}
      </svg>
      <br />
      <button onClick={handleLaggTillSkott}>Lägg till skott</button>
      <button onClick={handleSparaSerie}>Spara serie</button>
    </div>
  );
};

export default SkottLaggTill; */
// SkottLaggTill.js

import React, { useState } from 'react';

const SkottLaggTill = ({ onSparaSerie }) => {
  const [skottSerie, setSkottSerie] = useState([]);
  const [skott, setSkott] = useState({ x: 0, y: 0 });


  const calculateRing = (distance) => {
    const radiusValues = [10, 30, 60, 90, 120];
    for (let i = 0; i < radiusValues.length; i++) {
      if (distance <= radiusValues[i]) {
        return i;
      }
    }
    return radiusValues.length; // Returnera en siffra för träff utanför alla ringar
  };
  
  
  const handleOnClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    setSkott({ x: offsetX, y: offsetY });
  };

  const handleLaggTillSkott = () => {
    const distance = Math.sqrt((skott.x - 150) ** 2 + (skott.y - 150) ** 2);
    const ringNumber = calculateRing(distance);
    setSkottSerie([...skottSerie, { x: skott.x, y: skott.y, ring: ringNumber }]);
    setSkott({ x: 0, y: 0 }); // Återställer för nästa skott
  };

  const handleSparaSerie = () => {
    onSparaSerie([...skottSerie]); // Ingen omvandling behövs här
    setSkottSerie([]); //Array
  };

  return (
    <div>
      <p>Klicka på måltavlan för att lägga till skott:</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="300"
        viewBox="0 0 300 300"
        onClick={handleOnClick}
        style={{ border: '1px solid black' }}
      >
        <circle cx="150" cy="150" r="120" fill="black" stroke="white" strokeWidth="1"  />
        <circle cx="150" cy="150" r="90" fill="black" stroke="white" strokeWidth="1"  />
        <circle cx="150" cy="150" r="60" fill="black" stroke="white" strokeWidth="1"  />
        <circle cx="150" cy="150" r="30" fill="black" stroke="white" strokeWidth="1"  />
        <circle cx="150" cy="150" r="10" fill="black" stroke="white" strokeWidth="1" />
        {skottSerie.map((skott, index) => (
          <React.Fragment key={index}>
            <circle
              cx={skott.x}
              cy={skott.y}
              r="5"
              fill="red"
            />
            <text x={skott.x} y={skott.y} fontSize="10" fill="white" textAnchor="middle" alignmentBaseline="middle">
              {skott.ring}
            </text>
          </React.Fragment>
        ))}
      </svg>
      <br />
      <button onClick={handleLaggTillSkott}>Lägg till skott</button>
      <button onClick={handleSparaSerie}>Spara serie</button>
      <h2>Sparade serier:</h2>
      <ul>
        {skottSerie.map((skott, index) => (
          <li key={index}>
            Serie {index + 1}: ({skott.x}, {skott.y}) - Ring: {skott.ring}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkottLaggTill;





