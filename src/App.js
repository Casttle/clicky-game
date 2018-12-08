import React, { Component } from 'react';
import './App.css';
import ImageCard from "./components/imageCard";

const images = [
  {
    id: 1,
    img: "https://via.placeholder.com/150/0000FF/808080?TEXT=Pic1",
    clicked: "false"
  },
  {
    id: 2,
    img: "https://via.placeholder.com/150/FF0000/FFFFFF?TEXT=Pic2",
    clicked: "false"
  },
  {
    id: 3,
    img: "https://via.placeholder.com/150/800000/FFFFFF?TEXT=Pic3",
    clicked: "false"
  },
  {
    id: 4,
    img: "https://via.placeholder.com/150/000080/FFFFFF?TEXT=Pic4",
    clicked: "false"
  },
  {
    id: 5,
    img: "https://via.placeholder.com/150/000000/FFFFFF?TEXT=Pic5",
    clicked: "false"
  },
  {
    id: 6,
    img: "https://via.placeholder.com/150/008000/FFFFFF?TEXT=Pic6",
    clicked: "false"
  }
];


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
            <ImageCard images={images} />;
            </div>
            
          </div>

        </div>


      </div>
      
    );
  }
}

export default App;
