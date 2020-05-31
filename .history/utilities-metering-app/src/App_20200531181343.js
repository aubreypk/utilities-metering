import React, { Component } from 'react'
import Dashboard from './components/Dashboard'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Dashboard />
      </div>
    )
  }
}

export default App;
