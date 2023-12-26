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

import React, { useState, useEffect } from 'react';

const SkottLaggTill = ({ onSparaSerie }) => {
  const [skottSerie, setSkottSerie] = useState([]);
  const [skott, setSkott] = useState({ x: 0, y: 0 });


  const calculateRing = (distance) => {
    const radiusValues = [10, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200];
    for (let i = 0; i < radiusValues.length; i++) {
      if (distance <= radiusValues[i]) {
        return i;
      }
    }
    return radiusValues.length; // Returnera en siffra för träff utanför alla ringar
  };
  

  
  const handleOnClick = (event) => {
    //const { offsetX, offsetY } = event.nativeEvent;
    const svg = event.target.ownerSVGElement;
  const point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  const { x, y } = point.matrixTransform(svg.getScreenCTM().inverse());

    const distance = Math.sqrt((x - 150) ** 2 + (y - 150) ** 2);
    const ringNumber = calculateRing(distance);
    let score = 0;

    switch (ringNumber) {
      case 0:
        score = 10;
        break;
      case 1:
        score = 10;
        break;
      case 2:
        score = 9;
        break;
      case 3: 
        score = 8;
        break;
      case 4:
        score = 7;
        break;
      case 5: 
        score = 6;
        break;
      case 6:
        score = 5;
        break;
      case 7:
        score = 4;
        break;
      case 8:
        score = 3;
        break;
      case 9:
        score = 2;
        break;
      case 10:
        score = 1;
        break;
      default: 
      score = 0;
    }

    setSkottSerie(prevSkottSerie =>[...skottSerie, { x: x, y: y, ring: score }]);
    setSkott({ x: 0, y: 0 }); // Återställer för nästa skott
  };

//function that calculate and sums the score of the series
  const sumScore = () => {
    let sum = 0;
    skottSerie.forEach((skott) => {
      sum += skott.ring;
    });
    return sum;
  };

//function that shows a crosshair over the middlepoint of all the shots
  const crosshair = () => {
    let sumX = 0;
    let sumY = 0;
    skottSerie.forEach((skott) => {
      sumX += skott.x;
      sumY += skott.y;
    });
    return { x: sumX / skottSerie.length, y: sumY / skottSerie.length };
  }

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
        viewBox="0 -50 300 400"
        onClick={handleOnClick}
        style={{ border: '1px solid black' }}
      >
        <circle cx="150" cy="150" r="200" fill="white" stroke="black" strokeWidth="1"  />
        <circle cx="150" cy="150" r="180" fill="white" stroke="black" strokeWidth="1"  />
        <circle cx="150" cy="150" r="160" fill="white" stroke="black" strokeWidth="1"  />
        <circle cx="150" cy="150" r="140" fill="white" stroke="black" strokeWidth="1"  />
        <circle cx="150" cy="150" r="120" fill="white" stroke="black" strokeWidth="1"  />
        <circle cx="150" cy="150" r="100" fill="white" stroke="black" strokeWidth="1"  />
        <circle cx="150" cy="150" r="80" fill="black" stroke="white" strokeWidth="1"  />
        <circle cx="150" cy="150" r="60" fill="black" stroke="white" strokeWidth="1"  />
        <circle cx="150" cy="150" r="40" fill="black" stroke="white" strokeWidth="1"  />
        <circle cx="150" cy="150" r="20" fill="black" stroke="white" strokeWidth="1"  />
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
      
      <button onClick={handleSparaSerie}>Spara serie</button>
      <h2>Sparade serier:</h2>
      <ul>
        {skottSerie.map((skott, index) => (
          <><li key={index}>
            Skott {index + 1}: ({skott.x}, {skott.y}) - Ring: {skott.ring}
         </li></>
        ))}
      </ul>
      <p>Total: {sumScore()}</p>
    </div>
  );
};

export default SkottLaggTill;





