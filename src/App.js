import React from 'react';
import Palette from './Palette';
import beginningColours from './beginningColours';

function App() {
  return (
    <div>
      <Palette {...beginningColours[6]} />
    </div>
  );
}

export default App;
