import React, { useEffect, useState } from 'react';
import emptyStar from '../assets/emptyStar.svg';
import filledStar from '../assets/filledStar.svg';
import { addRating } from '../Services/api-client.service';

function PostDetails({ post, id, setPost, setRatings }) {

  const starsArr = Array(5).fill(emptyStar);
  const [stars, setStars] = useState(starsArr);
  const [state, setState] = useState({});

  useEffect(() => {

    const arr = [...starsArr];

    for (let i = 0; i < Math.floor(post.rating); i++) {
      arr[i] = filledStar
    }

    setStars(arr);
  }, [post])


  function handleChange(event) {
    const { name, value } = event.target;
    setState(prevState => { return { ...prevState, [name]: value } });
  }

  async function handleSubmit (event) {
    event.preventDefault();

    const { name, comment, rating } = state;
    if (name && rating) {
      const updatedPost = await addRating(id, name, rating, comment);
      setPost(updatedPost);

      const newRating = {_id: Date.now(), name, comment, rating};
      setRatings(prevState => [...prevState, newRating]);
      
      event.target.reset();
    } 
  }

  return (
    <div className='details-container'>
      <div className='details'>
        <div className='image'>
          <img className="pet-img" src={post.imgUrl}></img>
        </div>
        <div className='info'>
          <h2>{post.petName}</h2>
          <p>Type: {post.petType}</p>
          <p>Description: {post.description}</p>
          <div className='rating'>
            <div>
              <span>{stars.map((star, index) => <img key={post._id + index} src={star} />)}</span>
            </div>
            <p className='rating-number'>{post.rating} ({post.numOfRatings})</p>
          </div>
        </div>
      </div>

      <hr></hr>

      <form className='rating-form' onSubmit={handleSubmit}>
        <h3>Leave a rating!</h3>
        <div className='form-field'>
          <label htmlFor='name'>Name:</label>
          <input name="name" required onChange={handleChange} />
        </div>

        <div className='form-field'>
          <label htmlFor='comment'>Comment (Optional):</label>
          <textarea name="comment" required onChange={handleChange}></textarea>
        </div>

        <div className="rate">
          <input type="radio" id="star5" name="rating" value="5" onChange={handleChange}/>
          <label htmlFor="star5" title="text">5 stars</label>
          <input type="radio" id="star4" name="rating" value="4" onChange={handleChange}/>
          <label htmlFor="star4" title="text">4 stars</label>
          <input type="radio" id="star3" name="rating" value="3" onChange={handleChange}/>
          <label htmlFor="star3" title="text">3 stars</label>
          <input type="radio" id="star2" name="rating" value="2" onChange={handleChange}/>
          <label htmlFor="star2" title="text">2 stars</label>
          <input type="radio" id="star1" name="rating" value="1" onChange={handleChange}/>
          <label htmlFor="star1" title="text">1 star</label>
        </div>

        <button className='form-submit'>Submit Rating</button>

      </form>

    </div>
  )
}

export default PostDetails;