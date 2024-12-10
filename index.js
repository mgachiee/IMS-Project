// Import packages
const express = require('express');
const methodOverride = require('method-override');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Transfer to database
const products = [
  {
    'id': uuidv4(),
    'productName': 'iPhone 16',
    'description': '128/12',
    'quantity': '20',
  },
  {
    'id': uuidv4(),
    'productName': 'iPhone 16 Pro',
    'description': '256/12',
    'quantity': '10',
  },
  {
    'id': uuidv4(),
    'productName': 'iPhone 16 Pro Max',
    'description': '528/16',
    'quantity': '20',
  }
];

app.get('/view/:id', (req, res) => {

})

app.get('/', (req, res) => {
  res.render('home', {products});
})

app.listen(3001, () => {
  console.log('Listening to port 3001!');
})