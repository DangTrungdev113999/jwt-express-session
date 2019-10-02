const express = require("express");

const helper = require('./../helpers/check');
const todolistService = require("./../services/todolist");

const router = express.Router();

router.get("",helper.checkLogin, todolistService.index)

module.exports = router