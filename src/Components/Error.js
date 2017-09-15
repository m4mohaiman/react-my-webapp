import React, { Component } from 'react';
import './style.css';


class Error extends Component {
    render() {
      return (
        <div className="error-area">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="context">
                        <p className="error">ERROR 404</p>
                        <p className="error-small">Woops I am still Working on this page.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
      );
    }
  }

  export default Error;