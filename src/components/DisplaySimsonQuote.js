// src/components/DisplaySimsonQuote.js
import React from 'react';
  
function DisplaySimsonQuote( {simsonQuote} ) {
  return (
    <div className="DisplaySimsonQuote">
      <img
        src={simsonQuote[0].image}
        alt={simsonQuote[0].character}
      />

      <h2>{simsonQuote[0].character}</h2>
      <p>{simsonQuote[0].quote}</p>
    </div>
  );
};
  
export default DisplaySimsonQuote;