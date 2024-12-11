// Importing required modules
const mongoose = require('mongoose');
const Item = require('../models/item');
const inventoryDatabase = 'inventory-db';

// Connect to the database
mongoose.connect(`mongodb://127.0.0.1:27017/${inventoryDatabase}`)
  .then(() => {
    console.log('Connection Open.');
  })
  .catch(err => {
    console.log('Error Occured.');
    console.log(err);
  })


// Add dump data to the database
const seedDb = async() => {
  const items = [
    {
      "name": "Laptop",
      "category": "Electronics",
      "quantity": 15,
      "price": 33000,
      "description": "High performance laptop suitable for gaming and work."
    },
    {
      "name": "Smartphone",
      "category": "Electronics",
      "quantity": 50,
      "price": 15999,
      "description": "Latest model smartphone with advanced features."
    },
    {
      "name": "Desk Chair",
      "category": "Furniture",
      "quantity": 40,
      "price": 4500,
      "description": "Ergonomic desk chair with adjustable height."
    },
    {
      "name": "Notebook",
      "category": "Stationery",
      "quantity": 200,
      "price": 50,
      "description": "College-ruled spiral notebook with 100 pages."
    },
    {
      "name": "Printer",
      "category": "Electronics",
      "quantity": 25,
      "price": 8500,
      "description": "Wireless multifunction printer with scanning and copying."
    },
    {
      "name": "Office Desk",
      "category": "Furniture",
      "quantity": 10,
      "price": 15500,
      "description": "Spacious office desk with drawers and keyboard tray."
    },
    {
      "name": "Monitor",
      "category": "Electronics",
      "quantity": 30,
      "price": 25000,
      "description": "27-inch 4K Ultra HD monitor with vibrant display."
    },
    {
      "name": "Mouse",
      "category": "Electronics",
      "quantity": 100,
      "price": 1599,
      "description": "Wireless optical mouse with ergonomic design."
    },
    {
      "name": "Keyboard",
      "category": "Electronics",
      "quantity": 80,
      "price": 3999,
      "description": "Mechanical keyboard with RGB backlighting."
    },
    {
      "name": "Book",
      "category": "Stationery",
      "quantity": 150,
      "price": 825,
      "description": "Hardcover book on software development principles."
    },
    {
      "name": "Pen",
      "category": "Stationery",
      "quantity": 500,
      "price": 55,
      "description": "Smooth-writing ballpoint pen with blue ink."
    },
    {
      "name": "Coffee Maker",
      "category": "Appliances",
      "quantity": 20,
      "price": 4400,
      "description": "Programmable coffee maker with 12-cup capacity."
    },
    {
      "name": "Headphones",
      "category": "Electronics",
      "quantity": 60,
      "price": 550,
      "description": "Noise-cancelling over-ear headphones with Bluetooth."
    },
    {
      "name": "Water Bottle",
      "category": "Accessories",
      "quantity": 150,
      "price": 550,
      "description": "Stainless steel water bottle with 1-liter capacity."
    },
    {
      "name": "Backpack",
      "category": "Accessories",
      "quantity": 40,
      "price": 2750,
      "description": "Durable backpack with multiple compartments."
    },
    {
      "name": "Tablet",
      "category": "Electronics",
      "quantity": 35,
      "price": 16500,
      "description": "10-inch tablet with high-resolution display."
    },
    {
      "name": "Lamp",
      "category": "Furniture",
      "quantity": 25,
      "price": 2200,
      "description": "LED desk lamp with adjustable brightness."
    },
    {
      "name": "Speaker",
      "category": "Electronics",
      "quantity": 50,
      "price": 3850,
      "description": "Portable Bluetooth speaker with high-quality sound."
    },
    {
      "name": "Whiteboard",
      "category": "Stationery",
      "quantity": 15,
      "price": 1400,
      "description": "Magnetic whiteboard with dry erase surface."
    },
    {
      "name": "Flash Drive",
      "category": "Electronics",
      "quantity": 100,
      "price": 900,
      "description": "32GB USB flash drive with fast data transfer."
    }
  ];

  // Insert the data into the database
  try {
    await Item.insertMany(items);
  } catch (err) {
    console.log('An error occured seeding the database.');
    console.log(err);
  }
}

// Call the seedDb function and close the connection
seedDb().then(() => {
  mongoose.connection.close();
})