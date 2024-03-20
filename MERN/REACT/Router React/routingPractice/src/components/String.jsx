import React from 'react';

const String = ({ match }) => {
  const { string } = match.params;
  return <h1>{string}</h1>;
};

export default String;

