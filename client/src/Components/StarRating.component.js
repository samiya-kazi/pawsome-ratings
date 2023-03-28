import React, { useEffect, useState } from 'react';
import emptyStar from '../assets/emptyStar.svg';
import filledStar from '../assets/filledStar.svg';

function StarRating ({ item }) {

  const starsArr = Array(5).fill(emptyStar);
  const [stars, setStars] = useState(starsArr);

  useEffect(() => {

    const arr = [...starsArr];

    for (let i = 0; i < Math.floor(item.rating); i++) {
      arr[i] = filledStar
    }

    setStars(arr);
  }, [item])


  return (
    <div>
      <span>{stars.map((star, index) => <img key={item._id + index} src={star}/>)}</span>
    </div>
  )
}

export default StarRating;