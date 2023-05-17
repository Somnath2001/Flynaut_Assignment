const User = require("./models/User");
const Post = require("./models/Post");

Post.find()
  .populate("author") // Assuming 'author' is the field referencing the User model
  .exec(function (err, posts) {
    if (err) {
      console.log(err);
    } else {
      console.log(posts);
    }
  });
