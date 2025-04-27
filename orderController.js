const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');
const Product = require('../models/productModel');

// Create a new order
router.post('/', async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: 'Error creating order' });
    }
});

// Get all orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('products');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching orders' });
    }
});

// Get an order by ID
router.get('/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('products');
    if (!order) {
        return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching order' });
    }
});

// Update an order
router.put('/:id', async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: 'Error updating order' });
    }
});
// Delete an order
router.delete('/:id', async (req, res) => {
    try {
        await Order.findByIdAndRemove(req.params.id);
        res.json({ message: 'Order deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting order' });
    }
});
module.exports = router;
