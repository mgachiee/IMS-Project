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
      "name": "Laptop",
      "category": "Electronics",
      "quantity": 15,
      "price": 900,
      "description": "High performance laptop suitable for gaming and work."
    },
    {
      "name": "Smartphone",
      "category": "Electronics",
      "quantity": 50,
      "price": 600,
      "description": "Latest model smartphone with advanced features."
    },
    {
      "name": "Desk Chair",
      "category": "Furniture",
      "quantity": 40,
      "price": 120,
      "description": "Ergonomic desk chair with adjustable height."
    },
    {
      "name": "Notebook",
      "category": "Stationery",
      "quantity": 200,
      "price": 3,
      "description": "College-ruled spiral notebook with 100 pages."
    },
    {
      "name": "Printer",
      "category": "Electronics",
      "quantity": 25,
      "price": 150,
      "description": "Wireless multifunction printer with scanning and copying."
    },
    {
      "name": "Office Desk",
      "category": "Furniture",
      "quantity": 10,
      "price": 300,
      "description": "Spacious office desk with drawers and keyboard tray."
    },
    {
      "name": "Monitor",
      "category": "Electronics",
      "quantity": 30,
      "price": 250,
      "description": "27-inch 4K Ultra HD monitor with vibrant display."
    },
    {
      "name": "Mouse",
      "category": "Electronics",
      "quantity": 100,
      "price": 20,
      "description": "Wireless optical mouse with ergonomic design."
    },
    {
      "name": "Keyboard",
      "category": "Electronics",
      "quantity": 80,
      "price": 30,
      "description": "Mechanical keyboard with RGB backlighting."
    },
    {
      "name": "Book",
      "category": "Stationery",
      "quantity": 150,
      "price": 15,
      "description": "Hardcover book on software development principles."
    },
    {
      "name": "Pen",
      "category": "Stationery",
      "quantity": 500,
      "price": 1,
      "description": "Smooth-writing ballpoint pen with blue ink."
    },
    {
      "name": "Coffee Maker",
      "category": "Appliances",
      "quantity": 20,
      "price": 80,
      "description": "Programmable coffee maker with 12-cup capacity."
    },
    {
      "name": "Headphones",
      "category": "Electronics",
      "quantity": 60,
      "price": 100,
      "description": "Noise-cancelling over-ear headphones with Bluetooth."
    },
    {
      "name": "Water Bottle",
      "category": "Accessories",
      "quantity": 150,
      "price": 10,
      "description": "Stainless steel water bottle with 1-liter capacity."
    },
    {
      "name": "Backpack",
      "category": "Accessories",
      "quantity": 40,
      "price": 50,
      "description": "Durable backpack with multiple compartments."
    },
    {
      "name": "Tablet",
      "category": "Electronics",
      "quantity": 35,
      "price": 300,
      "description": "10-inch tablet with high-resolution display."
    },
    {
      "name": "Lamp",
      "category": "Furniture",
      "quantity": 25,
      "price": 40,
      "description": "LED desk lamp with adjustable brightness."
    },
    {
      "name": "Speaker",
      "category": "Electronics",
      "quantity": 50,
      "price": 70,
      "description": "Portable Bluetooth speaker with high-quality sound."
    },
    {
      "name": "Whiteboard",
      "category": "Stationery",
      "quantity": 15,
      "price": 25,
      "description": "Magnetic whiteboard with dry erase surface."
    },
    {
      "name": "Flash Drive",
      "category": "Electronics",
      "quantity": 100,
      "price": 15,
      "description": "32GB USB flash drive with fast data transfer."
    }
  ];  

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