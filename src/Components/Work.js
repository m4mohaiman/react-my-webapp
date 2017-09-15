import React, { Component } from 'react';
import './style.css';

class Work extends Component {
    render() {
      return (
        <div className="works-of-mine">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="good-at-context">
                        <h2>My Works</h2>
                        <p>Here are the some of my key works</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 my-work-box text-center">
                    <img src={require('./media/my-work-box-1.png')}/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam autem illo, laboriosam aliquam laborum ab consequuntur culpa sint repudiandae officiis expedita eius deserunt.</p>
                </div>

                <div className="col-md-4 my-work-box text-center">
                     <img src={require('./media/my-work-box-2.png')}/>   
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam autem illo, laboriosam aliquam laborum ab consequuntur culpa sint repudiandae officiis expedita eius deserunt.</p>
                </div>

                <div className="col-md-4 my-work-box text-center">
                    <img src={require('./media/my-work-box-3.png')}/>   
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam autem illo, laboriosam aliquam laborum ab consequuntur culpa sint repudiandae officiis expedita eius deserunt.</p>
                </div>

                <div className="col-md-4 my-work-box text-center">
                  <img src={require('./media/my-work-box-4.png')}/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam autem illo, laboriosam aliquam laborum ab consequuntur culpa sint repudiandae officiis expedita eius deserunt.</p>
                </div>

                <div className="col-md-4 my-work-box text-center">
                    <img src={require('./media/my-work-box-5.png')}/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam autem illo, laboriosam aliquam laborum ab consequuntur culpa sint repudiandae officiis expedita eius deserunt.</p>
                </div>

                <div className="col-md-4 my-work-box text-center">
                     <img src={require('./media/my-work-box-6.png')}/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam autem illo, laboriosam aliquam laborum ab consequuntur culpa sint repudiandae officiis expedita eius deserunt.</p>
                </div>

            </div>
        </div>
    </div>
      );
    }
  }

  export default Work;