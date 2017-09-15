import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Components/style.css';
import App from './App';
import About from './About';
import Contact from './Contact';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
    
  } from 'react-router-dom';
  

ReactDOM.render(
  <Router>
  <div>
  <div className="header">
  <div className="container-fluid">
      <div className="row">
          <div className="col-md-12">
              <nav className="navbar navbar-default">
                  <div className="container-fluid">
                   
                      <div className="navbar-header">
                          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                              <span className="sr-only">Toggle navigation</span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                          </button>
                          <a className="navbar-brand base-color" href="#"><b className="">Mohaiman</b></a>
                      </div>

                      
                      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                          <ul className="nav navbar-nav navbar-right">
                              <li><NavLink to="/">Home</NavLink></li>
                              <li><NavLink to="/About">About</NavLink></li>
                              <li><NavLink to="/Contact">Contact</NavLink></li>
                            
                          </ul>
                      </div>
                    
                  </div>
            
              </nav>
          </div>
      </div>
  </div>
</div>


    <Route exact path="/" component={App}/>
    <Route path="/About" component={About}/>
    <Route path="/Contact" component={Contact}/>

  </div>
</Router>,
document.getElementById('root'),
);
registerServiceWorker();

// <App />, document.getElementById('root'),