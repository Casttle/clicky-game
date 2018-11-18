import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <p>
           This will be the clicky game page
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <img src="https://via.placeholder.com/150/0000FF/808080?TEXT=Pic-1" alt="placeholder">
              </img>
            </div>
            <div className="col text-center">
              <img src="https://via.placeholder.com/150/FF0000/FFFFFF?TEXT=Pic-2" alt="placeholder">
              </img>
            </div>
          </div>

        </div>


      </div>
      
    );
  }
}

export default App;
