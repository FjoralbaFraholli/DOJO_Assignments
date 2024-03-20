import React from 'react';
import { useParams } from 'react-router-dom';

const Style = () => {
  const { word, color, background } = useParams();

  const style = {
    color: color || 'black',
    backgroundColor: background || 'white',
    padding: '10px',
  };

  return <h1 style={style}>{word}</h1>;
};

export default Style;
