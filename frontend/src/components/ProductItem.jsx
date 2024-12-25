import { useContext } from "react"
import { ShopContext } from "../context/ShopContext";
import {Link} from "react-router-dom";

const ProductItem = ({id,name,image,price}) => {
  
    const {currency} = useContext(ShopContext);
    return (
    <Link className="text-[#FAFAFA] cursor-pointer" to={`/product/${id}`}>
        <div className="overflow-hidden" >
            <img className="hover:scale-110 transition ease-in-out" src={image[0]} alt="" />
        </div>
        <div className="text-center">
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">{currency}{price}</p>
        </div>
        <div className="mt-2 flex justify-center">
        <button className="bg-[#1D4ED8] text-white px-5 py-2 text-sm circular hover:bg-[#3b82f6] transition">
              View Product
            </button>
            </div>
    </Link>
  )
}

export default ProductItem