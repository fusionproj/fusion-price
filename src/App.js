// Import React and Component
import React, { Component } from 'react';
// Import CSS from App.css
import './App.css';
// Import the Today component to be used below
import Today from './today/today'
// Import the History component to be used below
import History from './history/history'

class App extends Component {
  render() {
    return (
      <div className="">
          <div className="topheader">
              <header className="container">
                  <nav className="navbar">
                      <div className="navbar-brand">
                          <span className="navbar-item">Fusion Push Coins</span>
                      </div>
                      <div className="navbar-end">
                          <a className="navbar-item" href="https://pusher.com" target="_blank" rel="noopener noreferrer">Fusion</a>
                      </div>
                  </nav>
              </header>
          </div>
          <section className="results--section">
              <div className="container">
                  <h1>Fusion is a realtime price information about<br></br> BTC, ETH and LTC.</h1>
              </div>
              <div className="results--section__inner">
                  <Today />
                  <History />
              </div>
          </section>
      </div>
    );
  }
}

export default App;