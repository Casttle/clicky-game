import React from "react";
import "./style.css";


// for each image object create a new img-container
function ImageCard(props) {
    return (
        <div className="card">
            {props.images.map(item => (
                <div className="img-container">
                    <img src={item.img} alt="placeholder" id={item.id} clicked={item.clicked} />
                </div>
            ))}
        </div>
    );
}

export default ImageCard;
