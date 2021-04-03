import React from 'react';
import Navbar from './components/Navbar/navbar';
import DailyCounter from './components/DailyCounter/DailyCounter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-container">
        <h1>Baby Riku</h1>
        <DailyCounter />
      </div>
    </div>
  );
}

export default App;
