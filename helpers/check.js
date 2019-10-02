const path = require("path");
const fs = require("fs");

let checkTokenByJwt = (req, res, next) => {
  let token = req.headers.token;

  var cert = fs.readFileSync(path.join(__dirname, "../cert.pem")); // get public key
  jwt.verify(token, cert, { algorithms: ['RS256'] }, function (err, payload) {
    if (err) return next({err})
    return next();
  });
}

let checkLogin = (req, res, next) => {
  if (req.session.user) return next();
  return res.redirect("/login");
}

module.exports = {
  checkTokenByJwt,
  checkLogin
}