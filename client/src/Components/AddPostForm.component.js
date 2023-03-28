import React, { useState } from 'react';
import { addPost } from '../Services/api-client.service';
import petTypes from '../utils/petTypes.json';

function AddPostForm ({ setPosts }) {

  const [state, setState] = useState({petType: 'Dog'});

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const {petName, petType, description, imgUrl} = state;
      const res = await addPost(petName, petType, description, imgUrl);
      setPosts(prevState => [...prevState, res]);
      event.target.reset();
    } catch (error) {
      console.log(error);
    }

  }

  function handleChange (event) {
    const {name, value} = event.target;
    setState(prevState => {return {...prevState, [name]: value}});
  }

  return (
    <form onSubmit={handleSubmit}>

      <h2>Add a Post</h2>

      <div className='form-field'>
        <label htmlFor='petName'>Pet Name:</label>
        <input name="petName" required onChange={handleChange}/>
      </div>

      <div className='form-field'>
        <label htmlFor='petType'>Pet Type:</label>
        <select name="petType" onChange={handleChange}>
          {petTypes.map(type => <option key={type} value={type}>{type}</option>)}
        </select>
      </div>

      <div className='form-field'>
        <label htmlFor='description'>Description:</label>
        <textarea name="description" required onChange={handleChange}></textarea>
      </div>

      <div className='form-field'>
        <label htmlFor='imgUrl'>Image URL:</label>
        <input name="imgUrl" type="url" required onChange={handleChange}/>
      </div>

      <button className='form-submit'>Submit</button>
    </form>
  )
}

export default AddPostForm;