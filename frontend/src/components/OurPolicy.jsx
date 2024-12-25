
import {FaShippingFast, FaShieldAlt, FaTags, FaCreditCard} from 'react-icons/fa';

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
        <div className="flex flex-col items-center">
        <FaShippingFast className="text-4xl mb-5 text-[#FAFAFA]" />
        <p className="font-semibold text-[#1D4ED8]">Express Delievery</p>
        <p className="text-gray-400">Enjoy fast shipping on all orders above .</p>
      </div>
      <div className="flex flex-col items-center">
        <FaShieldAlt className="text-4xl mb-5 text-[#FAFAFA]" />
        <p className="font-semibold text-[#1D4ED8]">Secure Payments</p>
        <p className="text-gray-400">Your transactions are safe and secure with us.</p>
      </div>
      
      <div className="flex flex-col items-center">
        <FaTags className="text-4xl mb-5 text-[#FAFAFA]" />
        <p className="font-semibold text-[#1D4ED8]">Best Price Guarantee</p>
        <p className="text-gray-400">We ensure the best price for every product.</p>
      </div>
      
      <div className="flex flex-col items-center">
        <FaCreditCard className="text-4xl mb-5 text-[#FAFAFA]" />
        <p className="font-semibold text-[#1D4ED8]">Multiple Payment Options</p>
        <p className="text-gray-400">Choose various secure payment methods.</p>
      </div>
        
    </div>
  )
}

export default OurPolicy