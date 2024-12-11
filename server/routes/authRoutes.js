// Import packages
const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');
const router = express.Router();

// Login and Signup Routes Form
router.get('/login', authController.login);
router.get('/signup/form', authController.signupForm);

// Signup Route
router.post('/signup', authController.signup);

// Login Route
router.post('/login', passport.authenticate('local', {
  successRedirect: '/items?success=true&login=true',
  failureRedirect: '/auth/login?success=false&login=true',
  failureFlash: false,
}));

// Logout Route
router.get('/logout', authController.logout);

module.exports = router;