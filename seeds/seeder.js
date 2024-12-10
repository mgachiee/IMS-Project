const mongoose = require('mongoose');
const Item = require('../models/item');
const inventoryDatabase = 'inventory-db'

mongoose.connect(`mongodb://127.0.0.1:27017/${inventoryDatabase}`)
  .then(() => {
    console.log('Connection Open.');
  })
  .catch(err => {
    console.log('Error Occured.');
    console.log(err);
  })

const seedDb = async() => {
  const itemSchema = new Item({
    name: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, default: 0 },
    price: { type: Number, required: true },
    description: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now }
  })
}

seedDb().then(() => {
  mongoose.connection.close();
})