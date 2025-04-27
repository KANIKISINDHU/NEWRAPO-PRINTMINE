const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/signup', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({ ...req.body, password: hashedPassword });
        await user.save();
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Error creating user' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isValidPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
        expiresIn: '1h',
    });
    res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Error logging in' });
    }
});

module.exports = router;
