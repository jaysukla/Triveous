var jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, "hehe", function (err, decoded) {
    if (err) {
      res.send({ msg: "Login please  " });
    } else {
      next();
    }
  });
};

module.exports = { auth };
