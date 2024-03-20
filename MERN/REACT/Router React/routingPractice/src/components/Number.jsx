import React from 'react';

const Number = ({ match }) => {
  const { number } = match.params;
  return <h1>{isNaN(+number) ? 'Invalid Number' : number}</h1>;
};

export default Number;
