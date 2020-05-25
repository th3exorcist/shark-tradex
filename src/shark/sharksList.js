import React, { useContext, useEffect } from 'react';
import { SharkContext } from './SharkContext';
import { listSharks } from './listSharks';

const url = "https://pokeapi.co/api/v2/pokemon"; //  api of products

const SharksList = () => {
  const { sharks, capture, addSharks } = useContext(SharkContext);

  useEffect(() => {
    const fetchSharks = async () => {
      const response = await fetch(url);
      const data = await response.json();
      addSharks(data.results);
    };

    fetchSharks();
  }, [addSharks]);

  return (
    <div className="sharks-list">
      <h2>Sharks List</h2>

      <table>
        <tr>
          <th>Shark</th>
          <th>Capture</th>
        </tr>
        {listSharks({
          sharks,
          onClick: capture,
          buttonLabel: '+'
        })}
      </table>
    </div>
  )
}

export default SharksList;
