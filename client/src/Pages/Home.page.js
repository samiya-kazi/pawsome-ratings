import React, { useEffect, useState } from 'react';
import AddPostForm from '../Components/AddPostForm.component';
import PageHeader from '../Components/PageHeader.component';
import PostList from '../Components/PostList.component';
import petTypes from '../utils/petTypes.json';
import { getAllPosts } from '../Services/api-client.service';

function HomePage () {

  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState();

  useEffect(() => {
    async function getPosts () {
      try {
        const posts = await getAllPosts();
        if (posts) {
          posts.sort((a, b) => b.numOfRatings - a.numOfRatings);
          setPosts(posts);
        };
      } catch (error) {
        console.log(error);        
      }
    }

    getPosts();
  }, []);


  function handleFilterChange (event) {
    const { value } = event.target;
    const filtered = posts.filter(post => post.petType === value);
    setFilteredPosts(filtered);
    setFilter(value);
  }


  function handleSortChange (event) {
    const { value } = event.target;
    const postsCopy = [...posts];
    const filterCopy = [...filteredPosts];

    if (value === 'ascending') {
      postsCopy.sort((a, b) => a.rating - b.rating);
      filterCopy.sort((a, b) => a.rating - b.rating);
    } else if (value === 'descending') {
      postsCopy.sort((a, b) => b.rating - a.rating);
      filterCopy.sort((a, b) => b.rating - a.rating);
    } else {
      postsCopy.sort((a, b) => b.numOfRatings - a.numOfRatings);
      filterCopy.sort((a, b) => b.numOfRatings - a.numOfRatings);
    }

    setPosts(postsCopy);
    setFilteredPosts(filterCopy);
  }

  return (
    <div className='container'>
      <PageHeader />
      <div className='content-container'>
        <div>

          <label className='filter-label' htmlFor='filter'>Filter:</label>
          <select className='filter' onChange={handleFilterChange}>
            <option value={'All'}>All</option>
            {petTypes.map(type => <option key={type} value={type} >{type}</option>)}
          </select>

          <label className='filter-label' htmlFor='filter'>Sort:</label>
          <select className='filter' onChange={handleSortChange} defaultValue={"none"}>
            <option value="none" disabled hidden>Select an Option</option>
            <option value={"ascending"}>Lowest rating → Highest rating</option>
            <option value={"descending"}>Highest rating → Lowest rating</option>
            <option value={"ratingCount"}>Most ratings</option>
          </select>

          <PostList posts={filter === 'All' ? posts : filteredPosts} />
        </div>
        <AddPostForm setPosts={setPosts} />
      </div>
    </div>
  )
}

export default HomePage;