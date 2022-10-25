import React from 'react'
import NavBar from './NavBar'
import BeerPage from './BeerPage'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <BeerPage />
    </div>
  );
}

export default App;
