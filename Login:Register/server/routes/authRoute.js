const express = require('express');
const authController = require('../controllers/authcontroller');

const router = express.Router(); // Call the Router function

// Use the signup method from authController for the /register route
router.post('/register', authController.signup);

// Use the login method from authController for the /login route
router.post('/login', authController.login);

module.exports = router;
