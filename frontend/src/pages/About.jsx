import { assets } from "../assets/assets"
import NewsLetterBox from "../components/NewsLetterBox"
import Title from "../components/Title"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-[#FAFAFA]" >
          <p>Shopify was born from a passion for fashion and a commitment to quality. Our mission is to provide our customers with the latest trends and styles that reflect their individuality and style.</p>
          <p>Since our incentive began in 2021, we have been on a mission to provide our customers with the best possible shopping experience.</p>
          <b className="text-[#1D4ED8]">Our Mission</b>      
          <p>Our mission is to provide our customers with the latest trends and styles that reflect their individuality and style.</p>  
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-600 rounded-xl px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b className="text-[#1D4ED8]">Quality Assurance:</b>
        <p className="text-[#FAFAFA]">We meicin to provide our customers with the best possible shopping experience</p>
        </div>
        <div className="border border-gray-600 rounded-xl px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b className="text-[#1D4ED8]">Convience:</b>
        <p className="text-[#FAFAFA]">With out help of our website you can shop from the comfort of your home</p>
        </div>
        <div className="border border-gray-600 rounded-xl px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b className="text-[#1D4ED8]">Exceptional Customer Service</b>
        <p className="text-[#FAFAFA]">Our team is dedicated to providing exceptional customer service</p>
        </div>
      </div>

    <NewsLetterBox/>

    </div>
  )
}

export default About