import React from 'react';
import Shark from './Shark';

export const listSharks = ({ sharks, onClick, buttonLabel }) =>
  sharks.map((shark) => (
    <Shark
      shark={shark}
      onClick={onClick}
      buttonLabel={buttonLabel}
    />
  ));