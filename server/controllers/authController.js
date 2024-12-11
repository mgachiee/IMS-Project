// Auth Controller
const User = require('../../models/user');

// Middleware to check if user is authenticated
module.exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/login');
};

exports.login = (req, res) => {
  const { success, login } = req.query;

  let message = '';
  if (success === 'false' && login === 'true') {
    message = 'Invalid username or password.';
  }

  res.render('login', { message });
}

exports.signupForm = (req, res) => {
  res.render('signup');
}

exports.signup = async (req, res) => {
  try {
    const {username, firstname, lastname, email, password} = req.body;
    const user = new User({username, firstname, lastname, email, password});
    await user.save(); // Save new user details to DB
    res.redirect('/auth/login');
  } catch (err) {
    res.status(500).send('Error Creating User');
  }
}

exports.logout = (req, res) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect('/auth/login');
  });
}