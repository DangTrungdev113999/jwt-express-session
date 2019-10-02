const path = require("path");
const fs  = require("fs");
const jwt = require("jsonwebtoken");

let index =  (req, res) => {
  res.render("login/index")
}

let login = (req, res) => {
  let username = req.body.username;
  let pass = req.body.pass;
  if (username == "phieuyet@gmail.com" && pass === "123") {
    var privateKey = fs.readFileSync(path.join(__dirname, "../key.pem"));
    jwt.sign({ username, pass }, privateKey, { algorithm: 'RS256', expiresIn: 36000}, (err, token) => {
      req.session.user = {
        username, pass
      };
      res.status(200).send(token)
    });
  }
}

module.exports = {
  index,
  login
}