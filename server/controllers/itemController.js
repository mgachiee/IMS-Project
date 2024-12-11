// Import Packages
const mongoose = require('mongoose');
const Item = require('../../models/item');
const User = require('../../models/user');
const inventoryDatabase = 'inventory-db';

// Prepare database connection
mongoose.connect(`mongodb://127.0.0.1:27017/${inventoryDatabase}`)
  .then(() => {
    console.log('Connection Open.');
  })
  .catch(err => {
    console.log('Error Occured.');
    console.log(err);
  })

// Status message for each operation
let message = ''

// Display all items
exports.items = async (req, res) => {
  const items = await Item.find({});
  const user = await User.findOne({username: req.user.username});
  const success = req.query.success === 'true' ? true : false;
  const login = req.query.login === 'true' ? true : false;
  message = login ? 'Welcome to the Inventory App!' : message;
  try {
    const objectItems = items.map(item => ({
      ...item.toObject(),
      price: item.price >= 1000 ? (item.price / 1000).toFixed(2).toString() + 'K' : item.price
    }))
    res.render('index', { items: objectItems, success, message: message, user });
  } catch (err) {
    console.log('Error fetching the items:', err);
    res.status(500).send('Internal Server Error');
  }
}

// View page of each item
exports.view = async (req, res) => {
  const { id } = req.params
  const item = await Item.findOne({_id: id});
  res.render('viewItem', {item});
}

// Add Item Form
exports.addItemForm = (req, res) => {
  res.render('addItem');
}

// Saving of New Item to the Database
exports.addItem = async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  message = 'Item created successfully';
  res.redirect('/items?success=true');
}

// Edit Item for Updates
exports.editItem = async (req, res) => {
  const { id } = req.params;
  const item = await Item.findById(id);
  res.render('editItem', {item});
}

// Update the changes of item
exports.udpateItem = async (req, res) => {
  const { id } = req.params;
  await Item.findByIdAndUpdate(id, {...req.body});
  message = 'Item updated successfully';
  res.redirect('/items?success=true');
}

// Deletion Confirmation
exports.deleteConfirmation = async (req, res) => {
  const { id } = req.params;
  const item = await Item.findById(id);
  res.render('deleteConfirmation', {item});
}

// Delete an Item
exports.deleteItem = async (req, res) => {
  const { id } = req.params;
  await Item.findByIdAndDelete(id);
  message = 'Item deleted successfully';
  res.redirect('/items?success=true');
}