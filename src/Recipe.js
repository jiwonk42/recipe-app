import React from 'react';

const Recipe = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.calories}</p>
      <img src={props.image} alt=""/>

    </div>
  );
};

export default Recipe;
