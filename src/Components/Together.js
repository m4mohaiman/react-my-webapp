import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Together extends Component {
    render() {
      return (
        <div className="work-together">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="context-black">
                        <h3>Want to work together?</h3>
                        <p>I'm currently accepting new projects and would love to hear about
                            <br/> yours. Please take a few minutes to tell me about it.</p>
                        <Link to="/Contact" className="btn cos-button" >GET STARTED</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
      );
    }
  }

  export default Together;