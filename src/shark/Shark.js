import React from 'react';

export const Shark = ({ shark, onClick, buttonLabel }) => (
    <tr key={shark.name}>
      <td><span>{shark.name}</span></td>
      <td><button onClick={onClick(shark)}>{buttonLabel}</button></td>
    </tr>
  );
  
  export default Shark;