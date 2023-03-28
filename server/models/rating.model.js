const { model, Schema } = require('mongoose');

const ratingSchema = new Schema({
  postId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  comment: {
    type: String
  },
  rating: {
    type: Number,
    required: true
  }
})


const Rating = model('rating', ratingSchema);

module.exports = Rating;