import React from 'react';
import Navbar from './components/Navbar/navbar';
import Form from './components/Form/form';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-container">
        <h1>Baby Riku</h1>
        <Form/ >
      </div>
    </div>
  );
}

export default App;
