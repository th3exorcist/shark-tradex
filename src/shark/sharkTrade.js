import React, { useContext } from 'react';
import { sharkContext } from './sharkContext';
import { listShark } from './listSharks';

const sharkTrade = () => {
  const { capturedSharks, release } = useContext(sharkContext);

  return (
    <div className="sharktrade">
      <h2>sharkTrade</h2>

      <table>
        <tr>
          <th>Shark</th>
          <th>Release</th>
        </tr>
        {listSharks({
          sharks: capturedSharks,
          onClick: release,
          buttonLabel: '-'
        })}
      </table>
    </div>
  )
}

export default sharkTrade;
