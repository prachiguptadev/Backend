const express = require("express");
const router = express.Router();

// controller import

const { createTodo } = require("../controllers/createTodo");

// API routes

router.post("/createTodo", createTodo);


module.exports = router;
