const baseURL = process.env.REACT_APP_SERVER_BASE_URL;

export const getAllPosts = async () => {
  try {
    const res = await fetch(baseURL + '/post');
    return res.json();
  } catch (error) {
    console.log(error);
  }
}


export const getPostById = async (id) => {
  try {
    const res = await fetch(baseURL + '/post/' + id);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}


export const addPost = async (petName, petType, description, imgUrl) => {
  try {

    const body = {petName, petType, description, imgUrl};

    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json'
      }
    }

    const res = await fetch(baseURL + '/post', options);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}


export const addRating = async (postId, name, rating, comment) => {
  try {

    const body = {name, rating, comment};

    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json'
      }
    }

    const res = await fetch(baseURL + '/rating/' + postId, options);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}