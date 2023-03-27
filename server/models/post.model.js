const { model, Schema } = require('mongoose');

const postSchema = new Schema({
  petName: {
    type: String,
    required: true
  },
  petType: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  }
})


const Post = model('post', postSchema);

module.exports = Post;