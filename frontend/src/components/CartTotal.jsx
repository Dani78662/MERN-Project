import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title";

const CartTotal = () => {

    const {currency,deliveryFee,getCartAmount} = useContext(ShopContext);


  return (
    <div className="w-full ">
        <div className="text-2xl">
            <Title text1={'PAYMENT'} text2={'TOTALS'}/>
        </div>

        <div className="flex flex-col gap-2 mt-2 text-sm text-[#FAFAFA]">
            <div className="flex justify-between">
            <p>SubTotal</p>
            <p>{currency}{getCartAmount()}.00</p>
            </div>
            <hr />
            <div className="flex justify-between">
             <p>Shipping Fee</p>
             <p>{currency} {deliveryFee}.00</p>
            </div>
            <hr />
            <div className="flex justify-between">
            <b className="text-[#1D4ED8]">Total</b>
            <b>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + deliveryFee}.00</b>
            </div>
        </div>
        
    </div>
  )
}

export default CartTotal