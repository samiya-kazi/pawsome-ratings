const router = require('express').Router();
const postController = require('./controllers/post.controller');
const ratingController = require('./controllers/rating.controller');

router.get('/post', postController.getAllPosts);
router.get('/post/:id', postController.getPostById);
router.post('/post', postController.addPost);
router.get('/rating/:id', ratingController.getAllRatingsForAPost);
router.post('/rating/:id', ratingController.addRatingToAPost)

module.exports = router;