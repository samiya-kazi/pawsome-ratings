const Post = require("../models/post.model");

async function getAllPosts (req, res) {
  try {
    const posts = await Post.find({});
    res.status(200).send(posts);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

async function getPostById (req, res) {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (post) res.status(200).send(post);
    else res.status(400).send('Invalid post ID.');
    
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}


async function addPost (req, res) {
  try {
    const { petName, petType, imgUrl, description } = req.body;

    if (petName && petType && imgUrl && description) {
      const newPost = await Post.create({ petName, petType, imgUrl, description });
      res.status(201).send(newPost);
    } else {
      res.status(400).send('Invalid parameters.');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}


module.exports = { getAllPosts, getPostById, addPost }