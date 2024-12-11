// Import packages
const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const itemRoutes = require('./server/routes/itemRoutes');
const authRoutes = require('./server/routes/authRoutes');

// Prepare and setup the app
const app = express();
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Start of user auth
const session = require('express-session');
const passport = require('passport');
const MongoStorage = require('connect-mongo');
const flash = require('connect-flash');
require('./config/passport');

app.use(session({
  secret: 'mySecretKey1234',
  resave: false,
  saveUninitialized: false,
  store: MongoStorage.create({ mongoUrl: 'mongodb://127.0.0.1:27017/inventory-db' })
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/', itemRoutes);
app.use('/auth', authRoutes);


app.listen(3000, () => {
  console.log('Listening to port 3000!');
})