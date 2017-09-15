import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';


class ShortBio extends Component {
    render() {
      return (
        <div className="short-bio">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 text-center">
                    <div className="context-black">
                        <p>I build websites. I specialize in front-end development (HTML5, CSS3, Javascript) but many times I get my hands dirty with some backend (nodeJS, MongoDB). And I love WordPress. If you want to work with me or just say "hey Mohaiman, what's up?" for no reason what so ever, send me an email.</p>
                    </div>
                    <Link to="/About" className="btn cos-button">Know More</Link>
                </div>
            </div>
        </div>
    </div>
      );
    }
  }

  export default ShortBio;