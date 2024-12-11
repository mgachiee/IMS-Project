const mongoose = require('mongoose');
const Item = require('../models/item');
const inventoryDatabase = 'inventory-db';

mongoose.connect(`mongodb://127.0.0.1:27017/${inventoryDatabase}`)
  .then(() => {
    console.log('Connection Open.');
  })
  .catch(err => {
    console.log('Error Occured.');
    console.log(err);
  })

const seedDb = async() => {
  const items = [
    {
      name: 'Fender ST',
      category: 'Electric Guitar',
      quantity: 10,
      price: 30000,
      description: 'American Fender'
    },
    {
      name: 'Fender TL',
      category: 'Electric Guitar',
      quantity: 15,
      price: 25000,
      description: 'Japan Fender'
    },
    {
      name: 'Fender Custom-made ST',
      category: 'Electric Guitar',
      quantity: 5,
      price: 80000,
      description: 'Japan Fender'
    }
  ]

  try {
    await Item.insertMany(items);
  } catch (err) {
    console.log('An error occured seeding the database.');
    console.log(err);
  }
}

seedDb().then(() => {
  mongoose.connection.close();
})