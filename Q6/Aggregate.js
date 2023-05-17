const User = require("./models/User");
const Order = require("./models/Order");

Order.aggregate([
  {
    $lookup: {
      from: "users", // Collection name for User model
      localField: "userId",
      foreignField: "_id",
      as: "user",
    },
  },
])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });
