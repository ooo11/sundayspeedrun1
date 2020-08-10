const jwt = require("jsonwebtoken");

function checkTokenSetUser(req, res, next) {
  const authHeader = req.get("Authorization");
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    if (token) {
      // use jwt lib to decode
      jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
        if (error) {
          console.log(error);
        }
        req.user = user;
        next();
      });
    } else {
      next();
    }
  } else {
    next();
  }
}

function isLoggedIn(req, res, next) {
  if (req.user) {
    next();
  } else {
    unAuthorized(res, next);
  }
}

function unAuthorized(res, next) {
  const error = new Error("🚫 Un-Authorized 🚫");
  res.status(401);
  next(error);
}

module.exports = {
  checkTokenSetUser,
  isLoggedIn,
  unAuthorized,
};
