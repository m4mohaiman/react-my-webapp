import React, { Component } from 'react';
import './style.css';

class Footer extends Component {
    render() {
      return (
        <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="footer-logo">
                         <img src={require('./media/logo-footer.png')}/>  
                      
                    </div>
                    <div className="footer-context">
                        <p>&copy; Craft and Develop and All Right Reserved by Mohaiman 2017</p>
                    </div>
                    <div className="footer-social-links">
                        <ul>
                            <li><a className="facebook" href=""><i className="fa fa-facebook"></i></a></li>
                            <li><a className="github" href=""><i className="fa fa-github"></i></a></li>
                            <li><a className="linkedin" href=""><i className="fa fa-linkedin"></i></a></li>
                            <li><a className="google-plus" href=""><i className="fa fa-google-plus"></i></a></li>
                            <li><a className="twitter" href=""><i className="fa fa-twitter"></i></a></li>
                            <li><a className="youtube" href=""><i className="fa fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
      );
    }
  }

  export default Footer;