import React from 'react';
import RatingCard from './RatingCard.component';

function RatingsList ({ ratings }) {
  return (
    <div className='ratings-list'>
      {ratings.map(rating => <RatingCard key={rating._id} rating={rating} />)}
    </div>
  )
}

export default RatingsList;