import React from 'react';
import Masonry from "react-responsive-masonry";

const images = [
    "./images/eight-1.jpg",
    "./images/eight4.jpg",
    "./images/eight3.jpg",
    "./images/eight5.jpg",
    "./images/eight2.jpg",
    "./images/eight6.jpg",
    "./images/eight7.jpg",
    "./images/eight5.jpg",
    "./images/eight3.jpg",
]

function PortfolioImages() {
    return (
        <div>
            <Masonry columnsCount={2} gutter="7px">
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{width: "100%", display: "block", borderRadius: '10px'}}
                    />
                ))}
            </Masonry>
        </div>
    )
}

export default PortfolioImages;