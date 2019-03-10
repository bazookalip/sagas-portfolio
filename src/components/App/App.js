import React, { Component } from 'react';
import './App.css';
import Admin from '../Admin/Admin'
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home'


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div>
          <div className="holder">
       
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/Admin" component={Admin} />
        </div>

      </Router>
    );
  }
}

export default App;
