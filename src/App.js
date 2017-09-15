import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import Hero from './Components/Hero';
import ShortBio from './Components/ShortBio';
import Good from './Components/Good';
import Work from './Components/Work';
import Together from './Components/Together';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Hero/>
        <ShortBio/>
        <Good/>
        <Work/>
        <Together/>
        <Footer/>
      </div>
    );
  }
}

export default App;
