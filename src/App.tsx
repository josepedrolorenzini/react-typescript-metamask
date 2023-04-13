import React from 'react';
import logo from './logo.svg';
import './App.css';
import Metamask from './Metamask';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Metamask />
      </header>
    </div>
  );
}

export default App;
