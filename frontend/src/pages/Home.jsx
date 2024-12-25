
import { TopProduct } from "../components/TopProduct"
import Hero from "../components/Hero"
import FeaturedProduct from "../components/FeaturedProduct"
import NewsLetterBox from "../components/NewsLetterBox"
import OurPolicy from "../components/OurPolicy"
const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedProduct/>
      <TopProduct/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home