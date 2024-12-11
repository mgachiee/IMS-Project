// Import Packages
const mongoose = require('mongoose');
const Item = require('../../models/item');
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
  const success = req.query.success == 'true';
  try {
    const objectItems = items.map(item => ({
      ...item.toObject(),
      price: item.price >= 1000 ? (item.price / 1000).toString() + 'K' : item.price
    }))
    res.render('index', { items: objectItems, success, message: message });
  } catch (err) {
    console.log('Error fetching the items:', err);
    res.status(500).send('Internal Server Error');
  }
}

// View page of each item
exports.view = async (req, res) => {
  const { id } = req.params
  const item = await Item.findOne({_id: id});
  console.log(item);
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
  message = 'Item Added Successfully';
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
  message = 'Item Updated Successfully';
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
  message = 'Item Deleted Successfully';
  res.redirect('/items?success=true');
}