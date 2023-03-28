const Post = require("../models/post.model");
const Rating = require("../models/rating.model");

async function getAllRatingsForAPost (req, res) {
  try {
    const { id } = req.params;
    const ratings = await Rating.find({postId: id});
    res.status(200).send(ratings);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

async function addRatingToAPost (req, res) {
  try {
    const { id } = req.params;
    const { name, email, comment, rating } = req.body;

    if (id && name && email && rating && rating >= 0 && rating <= 5) {
      await Rating.create({postId: id, name, email, comment, rating});
      const allRatings = await Rating.find({postId: id});

      const totalRating = allRatings.reduce((sum, item) => sum + item.rating, 0);
      const avg = (totalRating / allRatings.length).toFixed(2);

      const updatedPost = await Post.findByIdAndUpdate(id, {$set: {rating: avg, numOfRatings: allRatings.length}}, {new: true});
      res.status(200).send(updatedPost);
    } else {
      res.status(400).send('Invalid parameters.');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}



module.exports = { getAllRatingsForAPost, addRatingToAPost }