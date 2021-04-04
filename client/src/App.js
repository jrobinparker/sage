import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/navbar';
import TodayContainer from './components/Today/TodayContainer/TodayContainer';
import History from './components/History/History';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
        <Switch>
          <Route exact path='/today'>
            <TodayContainer/ >
          </Route>
          <Route exact path='/history'>
            <History />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
