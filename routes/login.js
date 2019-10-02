const express = require("express");

const loginService = require("./../services/login");

const router = express.Router();

router.get("/", loginService.index);

router.post("/", loginService.login)

module.exports = router;