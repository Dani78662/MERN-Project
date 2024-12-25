import Review from "../models/reviewsModel.js";

// controllers/reviewController.js
export const getAllReviews = async (req, res) => {
    try {
      const reviews = await Review.find(); // Example: Fetch all reviews
      res.status(200).json(reviews);
    } catch (err) {
      res.status(500).json({ message: "Error fetching reviews" });
    }
  };
  
  export const createReview = async (req, res) => {
    try {
      const { productId, rating, comment } = req.body;
      const newReview = new Review({ productId, rating, comment });
      await newReview.save();
      res.status(201).json(newReview);
    } catch (err) {
      res.status(500).json({ message: "Error creating review" });
    }
  };
  
  export const getReviewById = async (req, res) => {
    try {
      const review = await Review.findById(req.params.id);
      if (!review) return res.status(404).json({ message: "Review not found" });
      res.status(200).json(review);
    } catch (err) {
      res.status(500).json({ message: "Error fetching review" });
    }
  };
  
  export const deleteReview = async (req, res) => {
    try {
      const review = await Review.findByIdAndDelete(req.params.id);
      if (!review) return res.status(404).json({ message: "Review not found" });
      res.status(200).json({ message: "Review deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: "Error deleting review" });
    }
  };
  
  export const updateReview = async (req, res) => {
    try {
      const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedReview) return res.status(404).json({ message: "Review not found" });
      res.status(200).json(updatedReview);
    } catch (err) {
      res.status(500).json({ message: "Error updating review" });
    }
  };
  export default { getAllReviews, createReview, getReviewById, deleteReview, updateReview };
  