import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

import Footer from './Components/Footer';
import Error from './Components/Error';


class About extends Component {
  render() {
    return (
      <div>
    
        <Error/>
        <Footer/>
      </div>
    );
  }
}

export default About;
