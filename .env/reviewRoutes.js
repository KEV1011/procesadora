const express = require('express');
const { getReviews, addReview } = require('../controllers/reviewController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getReviews);
router.post('/', protect, addReview);

module.exports = router;