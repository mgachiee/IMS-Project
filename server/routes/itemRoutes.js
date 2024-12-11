// Import packages
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const { isAuthenticated } = require('../controllers/authController');

// router.get('/items', isAuthenticated, (req, res) => {
//   res.render('index', {sucess: true, message: 'Welcome to the Inventory App!'});
// })

// Router for Items
router.get('/items', isAuthenticated, itemController.items);
router.get('/items/add-item', itemController.addItemForm);
router.post('/items', itemController.addItem);
router.get('/items/:id', itemController.view);
router.get('/items/:id/edit-item', itemController.editItem);
router.put('/items/:id', itemController.udpateItem);
router.get('/items/:id/delete-item', itemController.deleteConfirmation);
router.delete('/items/:id', itemController.deleteItem);

module.exports = router;