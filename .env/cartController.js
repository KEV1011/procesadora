const Cart = require('../models/Cart'); // Assume you have a Cart model
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const getCart = async (req, res) => {
    try {
        const cart = await Cart.find({ user: req.user.id });
        res.json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const addToCart = async (req, res) => {
    const { productId } = req.body;
    try {
        const cart = new Cart({ user: req.user.id, product: productId });
        await cart.save();
        res.status(201).json(cart);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const removeFromCart = async (req, res) => {
    const { productId } = req.params;
    try {
        await Cart.findOneAndDelete({ user: req.user.id, product: productId });
        res.status(204).json({ message: 'Producto eliminado del carrito' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const checkout = async (req, res) => {
    const { amount, token } = req.body;
    try {
        const charge = await stripe.charges.create({
            amount,
            currency: 'usd',
            source: token.id,
            description: 'Pago de carrito de compras'
        });
        res.status(201).json({ message: 'Pago procesado exitosamente', charge });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getCart, addToCart, removeFromCart, checkout };