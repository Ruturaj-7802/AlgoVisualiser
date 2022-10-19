import React, { Component } from 'react';
import './style.css'
class RightBox extends Component {
  render() {
    return (
      <div className="rightBox">
 
        <div>Iterative Solver:
          <div className="brute-sol-button">
            <button onClick={() => this.props.bruteSolve()}>Solve!</button>
          </div>
        </div>
      </div >
    )
  }
}

export default RightBox;
