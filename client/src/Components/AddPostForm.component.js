import React, { useState } from 'react';
import { addPost } from '../Services/api-client.service';
import { cldUpload } from '../Services/cloudinary.service';
import petTypes from '../utils/petTypes.json';
import pawAnimation from '../assets/pawprint-animation.gif'

function AddPostForm ({ setPosts }) {

  const [state, setState] = useState({petType: 'Dog'});
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      const {petName, petType, description} = state;

      if (file) {
        setLoading(true);
        const { secure_url } = await cldUpload(file);
        const res = await addPost(petName, petType, description, secure_url);
        setPosts(prevState => [...prevState, res]);
        event.target.reset();
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }

  }

  function handleChange (event) {
    const {name, value} = event.target;
    setState(prevState => {return {...prevState, [name]: value}});
  }

  function handleUpload (event) {
    const file = event.target.files[0]
    setFile(file);
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
        <label htmlFor='fileUpload'>Image:</label>
        <input type="file" name='fileUpload' id="file_input" accept="image/png, image/jpeg" onChange={handleUpload}></input>
      </div>

      <button className='form-submit'>Submit</button>

      {loading ? 
        <div className='loading'>
          <img src={pawAnimation} />
          <p>Submitting...</p>
          <img src={pawAnimation} />
        </div>
      : null}
    </form>
  )
}

export default AddPostForm;