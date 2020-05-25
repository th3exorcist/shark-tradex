import React from 'react';

import { SharkProvider } from './shark/SharkContext';
import sharksList from './shark/sharksList';
import sharkTrade from './shark/sharkTrade';
import sharkForm from './shark/sharkForm';

const App = () => (
  <SharkProvider>
    <div className="main">
      <sharksList />
      <sharkTrade />
    </div>
    <div className='form-wrapper'>
      <sharkForm />
    </div>
  </SharkProvider>
);

export default App;
