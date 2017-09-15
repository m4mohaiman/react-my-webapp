import React, { Component } from 'react';
import './style.css';

class Hero extends Component {
    render() {
      return (
        <div className="hero-area">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="context">
                        <h2>MOHAMMAD A MOHAIMAN</h2>
                        <p>FRONT END WEB DEVELOPER</p>
                        <p><i className="fa fa-map-marker"></i> Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
      );
    }
  }

  export default Hero;