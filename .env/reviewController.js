const Review = require('../models/Review');

const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate('user', 'username');
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const addReview = async (req, res) => {
    const { text } = req.body;
    try {
        const review = new Review({ user: req.user.id, text });
        await review.save();
        res.status(201).json(review);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { getReviews, addReview };