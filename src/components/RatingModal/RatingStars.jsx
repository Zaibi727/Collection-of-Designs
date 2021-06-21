import React from 'react';
import { render } from "react-dom";
import ReactStars from "react-rating-stars-component";
import { FiStar } from "react-icons/fi";
import styles from './ratingmodal.module.css';

const ratingChanged = (newRating) => {
    console.log(newRating);
  };

export default function RatingStars() {
    return (
        <div className={styles.RatingStars}>
    <ReactStars
    classNames={styles.star}
    count={5}
    onChange={ratingChanged}
    size={34}
    activeColor="#ffd700"
    char={<FiStar style={{marginRight: '20px'}}/>}
  />
        </div>
    )
}
