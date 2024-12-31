import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  
  // Review state
  const [reviews, setReviews] = useState([]); // Reviews for the product  
  const [rating, setRating] = useState(0);  // Rating from 1 to 5
  const [comment, setComment] = useState(''); // Review comment
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false); // Success flag for submission

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    const topElement = document.getElementById('product-details');
    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth' });
    }
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || {};
    const productReviews = savedReviews[productId] || [];
    setReviews(productReviews);
  }, [productId]);

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  // Handle review rating click
  const handleRatingClick = (starRating) => {
    setRating(starRating);
  };

  // Handle review form submission
  const handleSubmitReview = (e) => {
    e.preventDefault();

    if (!comment || rating === 0) {
      alert("Please provide a rating and a comment.");
      return;
    }

 // Save the review to local storage
 const savedReviews = JSON.parse(localStorage.getItem('reviews')) || {};
 const productReviews = savedReviews[productId] || [];
 const newReview = { rating, comment, date: new Date().toLocaleDateString() };
 productReviews.push(newReview);
 savedReviews[productId] = productReviews;
 localStorage.setItem('reviews', JSON.stringify(savedReviews));

    // Simulate review submission (you can replace it with actual API call)
    setTimeout(() => {
      setIsReviewSubmitted(true);
      setComment('');
      setRating(0); // Reset rating
    }, 1000);
  };

  return productData ? (
    <div id="product-details" className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 text-[#FAFAFA]">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img onClick={() => setImage(item)} src={item} key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" alt="" />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className='w-3 5' />
            <img src={assets.star_icon} alt="" className='w-3 5' />
            <img src={assets.star_icon} alt="" className='w-3 5' />
            <img src={assets.star_icon} alt="" className='w-3 5' />
            <img src={assets.star_dull_icon} alt="" className='w-3 5' />
            <p className='pl-2'>({reviews.length})</p>
         </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <button onClick={() => addToCart(productData._id)} className="bg-[#1D4ED8] text-white my-8 px-8 py-3 text-sm active:bg-[#3b82f6]">ADD TO CART</button>
        </div>
      </div>

      {/* Review Section */}
      <div className="mt-20">
        <div className="flex">
          <p className="border px-5 py-3 text-sm">Reviews ({reviews.length})</p>
        </div>

        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
           {/* Display Reviews */}
           {reviews.map((review, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold">Rating: {review.rating}/5</p>
              <p>{review.comment}</p>
              <p className="text-xs text-gray-400">Reviewed on: {review.date}</p>
            </div>
          ))}
          {/* Review Form */}
        <h3 className="text-lg font-bold mb-4 text-[#FAFAFA]">Submit a Review</h3>
        <form onSubmit={handleSubmitReview}>
          {/* Rating */}
          <div className="flex mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                onClick={() => handleRatingClick(star)}
                className={`w-6 h-6 cursor-pointer ${star <= rating ? 'text-yellow-400' : 'text-gray-400'}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>

          {/* Review Comment */}
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            placeholder="Write your review here..."
            className="bg-inherit w-full p-2 border border-gray-300 rounded mb-4"
          ></textarea>

          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">
            Submit Review
          </button>
        </form>
        </div>
     

      

        {isReviewSubmitted && (
          <p className="text-green-500 mt-4">Your review has been submitted successfully!</p>
        )}
       </div>

      {/* Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className="opacity-0"></div>;
};

export default Product;
