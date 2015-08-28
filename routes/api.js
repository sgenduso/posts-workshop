var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/posts-workshop');
var Post = db.get('posts');

/* GET home page. */
router.get('/api/posts', function(req, res, next) {
  Post.find({}).then(function (posts) {
    console.log(posts);
    res.json(posts);
  });
});

module.exports = router;
