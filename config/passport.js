// Import packages
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

// Start of user auth
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({username});
      if (!user) return done(null, false, { message: 'User not found' });

      const isMatch = await user.matchPassword(password);
      if (!isMatch) return done(null, false, { message: 'Incorrect Password' });

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

// Serialize and Deserialize the user
passport.serializeUser((user, done) => done(null, user._id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});