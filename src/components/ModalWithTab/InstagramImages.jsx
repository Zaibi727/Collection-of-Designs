import React from 'react';
import Masonry from "react-responsive-masonry";

const images = [
    "./images/eight3.jpg",
    "./images/eight5.jpg",
    "./images/eight3.jpg",
    "./images/eight5.jpg",
    "./images/eight3.jpg",
    "./images/eight5.jpg",
    "./images/eight3.jpg",
    "./images/eight5.jpg",
    "./images/eight3.jpg",
]

function InstagramImages() {
    return (
        <div>
            <Masonry columnsCount={3} gutter="0px">
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{width: "100%", display: "block",}}
                    />
                ))}
            </Masonry>
        </div>
    )
}

export default InstagramImages;
