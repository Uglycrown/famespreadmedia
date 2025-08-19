import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Client from './components/Client/Client';
import Service from './components/Service/Service';
import WeAreEverything from './components/WeAreEverything/WeAreEverything';
import Convert from './components/Convert/Convert';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Service />
      <Client />
      <WeAreEverything />
      <Convert />
    </div>
  );
}

export default App;