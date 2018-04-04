import React, { Component } from 'react';
import HomeSwitch from './Views/Home.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";


class App extends Component {
  render() {
    return (
        <div className="App">
         <Router>
            <HomeSwitch/>
         </Router>
        </div>
      
    );
  }
}

export default App;
