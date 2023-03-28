import React from 'react';
import StarRating from './StarRating.component';

function RatingCard ({ rating }) {
  return (
    <div className='rating-card'>
      <div className='header'>
        <b className='user-name'>{rating.name}</b>
        <StarRating item={rating}/>
      </div>
      <p>{rating.comment ? rating.comment : null}</p>
    </div>
  )
}

export default RatingCard;