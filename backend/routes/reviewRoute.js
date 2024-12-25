import express from 'express';
import { createReview, getAllReviews, getReviewById, deleteReview, updateReview } from '../controllers/reviewController.js';
import authUser from '../middleware/auth.js';

const router = express.Router();

// Create a review
router.post('/create', authUser, createReview); // 'authenticate' ensures the user is logged in

// Get all reviews
router.get('/', getAllReviews);

// Get review by ID
router.get('/:id', getReviewById);

// Update review
router.put('/:id', authUser, updateReview);

// Delete review
router.delete('/:id', authUser, deleteReview);

export default router;
