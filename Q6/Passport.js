// Install required dependencies: npm install passport passport-local

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Configure the local strategy for Passport.js
passport.use(
  new LocalStrategy(function (username, password, done) {
    // Here you would implement your logic to find and validate the user from your database
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (!user.verifyPassword(password)) {
        return done(null, false);
      }
      return done(null, user);
    });
  })
);

// Example route for user login
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  })
);

// Example route for user registration
app.post("/register", function (req, res) {
  // Here you would implement your logic to create a new user in your database
  // using the provided username and password from req.body
  User.create(
    { username: req.body.username, password: req.body.password },
    function (err, user) {
      if (err) {
        return res.status(500).send("Error creating user.");
      }
      res.redirect("/login");
    }
  );
});
