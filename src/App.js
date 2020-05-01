import React from 'react';
import './App.css';
import TaqueriaContainer from './TaqueriaContainer'

function App() {
  console.log(process.env)
  return (
    <div className="App">
      <TaqueriaContainer />
    </div>
  );
}

export default App;
