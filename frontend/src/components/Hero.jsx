
import { assets } from '../assets/assets'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';



const Hero = () => {
  
    const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Array of hero images (you can add more images here)
  const heroImages = [
    {
        id : '6765778599f9fd046e5b20d8',
        image: assets.hero_img,
        name: "JBL Live 660NC",
        description: "Wireless Over-Ear NC Headphones",
        price: "$190",
      },
      {
        id : '676577d199f9fd046e5b20da',
        image: assets.hero_img2,
        name: "boAt Airdopes 131",
        description: "Wireless In-Ear Earbuds",
        price: "$140",
      },
      {
        id : '676576e299f9fd046e5b20d4',
        image: assets.hero_img3,
        name: "boAt Rockerz 255",
        description: "In-Ear Wireless Neckbands.",
        price: "$110",
      }, // Third image (add more if needed)
  ];

  const navigate = useNavigate();

  // Automatically change the image every 3 seconds (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3000ms = 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleShopNowClick = () => {
    const productId = heroImages[activeImageIndex].id;
    navigate(`/product/${productId}`); // Navigate to the product page
  };


    return (  
    <div className="flex flex-col sm:flex-row py-10">
        {/* Hero Left Side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
            <div className="text-[#FAFAFA]">
                <div className="flex items-center gap-2">
                <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">{heroImages[activeImageIndex].name}
                </h1>  
                </div>
                <p className="mt-3 text-lg">{heroImages[activeImageIndex].description}</p>
          <p className="mt-4 text-xl font-semibold">{heroImages[activeImageIndex].price}</p>
          <div className="flex justify-center sm:justify-start mt-6">
            <button  onClick={handleShopNowClick} className="bg-[#1D4ED8] text-white px-8 py-3 text-sm rounded hover:bg-[#3b82f6]">
              SHOP NOW
            </button>
          </div>
            </div>
        </div>

  {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-y-1/2 flex space-x-2 ">
          {heroImages.map((_, index) => (
            <div
              key={index}
              onClick={() => setActiveImageIndex(index)}
              className={`w-3 h-3 rounded-full bg-[#1D4ED8] cursor-pointer ${
                activeImageIndex === index ? 'bg-opacity-100' : 'bg-opacity-5'}`}></div>
          ))}
        </div>

        {/* Hero Right Side (Image Slider) */}
      <div className="relative w-full sm:w-1/2">
        {/* Slider Image */}
        <img
          className="w-full h-full object-cover"
          src={heroImages[activeImageIndex].image}
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default Hero