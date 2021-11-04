const express = require("express");
const router = express.Router();
const { getUsers, login, register } = require("../controllers/UserController");

router.get("/get-users", getUsers);

router.post("/register", register);

router.post("/login", login);

module.exports = router;