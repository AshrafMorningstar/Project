/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/


import './App.css';
import DoubleRangeSlider from './components/DoubleRangeSlider';

function App() {
  return (
    <div className="range">
      <DoubleRangeSlider min={1000} max={50000}/>
    </div>
  );
}

export default App;
