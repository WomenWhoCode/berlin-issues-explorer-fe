import React, { Component } from 'react';
import logo from './wwc-logo.png';
import './App.css';
import IssuesContainer from 'components/IssuesContainer/IssuesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="app-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="app-title">Berlin Issues Explorer</h1>
          <p className="app-intro">
            Discover issues for beginner friendly open source projects hosted on github.com
          </p>
        </header>
        <IssuesContainer />
      </div>
    );
  }
}

export default App;
