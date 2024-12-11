const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for each item
const itemSchema = Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, default: 0 },
  price: { type: Number, required: true },
  description: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', itemSchema);