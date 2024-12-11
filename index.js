// Import packages
const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const itemRoutes = require('./server/routes/itemRoutes');

// Prepare and setup the app
const app = express();
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/', itemRoutes);

app.listen(3000, () => {
  console.log('Listening to port 3000!');
})