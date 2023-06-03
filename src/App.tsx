import { useState } from 'react';
import OneDay from './lesson/oneday';
import './App.css';
import HPUDemo from './lesson/webgpu';
import TwoDay from './lesson/transformThreejs';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <OneDay /> */}
      <HPUDemo />
      {/* <TwoDay /> */}
    </div>
  );
}

export default App;
