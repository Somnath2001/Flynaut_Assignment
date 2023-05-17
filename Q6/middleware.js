// Install required dependencies: npm install jsonwebtoken

const jwt = require("jsonwebtoken");

// Middleware function to verify token
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Example usage of the middleware
app.get("/protected", authenticateToken, (req, res) => {
  // The token is valid, continue with the request
  res.json({ message: "Protected data" });
});
