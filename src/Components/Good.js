import React, { Component } from 'react';
import './style.css';

class Good extends Component {
    render() {
      return (
        <div className="good-at">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="good-at-context">
                        <h2>My Expertise</h2>
                        <p>I've got chops in all phases of the design process.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 text-center goot-at-box">
                <img src={require('./media/brainstorm.png')}/>

                    <h3>Ideas</h3>
                    <p>I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start.</p>
                </div>

                <div className="col-md-4 text-center goot-at-box">
                <img src={require('./media/coding.png')}/>
               
                    <h3>UX/UI</h3>
                    <p>I sketch and wireframe interfaces focusing on content structure, intuitive UI patterns and simple interactions. I'm a minimalist who truly believes that less is more.</p>
                </div>

                <div className="col-md-4 text-center goot-at-box">
                    <img src={require('./media/monitor.png')}/>
                    <h3>Code</h3>
                    <p>I design in the browser with HTML(5), CSS(3) and a touch of JavaScript. I love coding things from scratch, but I can work with front-end frameworks and like React JS, Angular JS and Ionic</p>
                </div>

            </div>
            </div>
            </div>
 
      );
    }
  }

  export default Good;