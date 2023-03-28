import React, { useState } from 'react';
import { addRating } from '../Services/api-client.service';
import StarRating from './StarRating.component';

function PostDetails({ post, id, setPost, setRatings }) {

  const [state, setState] = useState({});

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
            <StarRating item={post} />
            <p className='rating-number'>{post.rating} ({post.numOfRatings})</p>
          </div>
        </div>
      </div>

      <hr></hr>

      <form className='rating-form' onSubmit={handleSubmit}>
        {!post.numOfRatings ? 
          <p>This little guy doesn't have any ratings 😞 Be the first to rate them!</p> 
        : null}


        <h3>Leave a rating!</h3>
        <div className='form-field'>
          <label htmlFor='name'>Name:</label>
          <input name="name" required onChange={handleChange} />
        </div>

        <div className='form-field'>
          <label htmlFor='comment'>Comment (Optional):</label>
          <textarea name="comment" required onChange={handleChange}></textarea>
        </div>

        <div className='form-field rating-field'>
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
        </div>

        <button className='form-submit'>Submit Rating</button>

      </form>

    </div>
  )
}

export default PostDetails;