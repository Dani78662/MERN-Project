import { NavLink } from 'react-router-dom'
import { AiOutlinePlus } from "react-icons/ai";
import { FiPackage, FiCheckCircle } from 'react-icons/fi'; 


const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2 bg-[#0A0A0A] text-[#FAFAFA]'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
            <NavLink className='flex items-center gap-3 border border-[#1D4ED8] border-r-0 px-3 py-2 rounded-l' to={'/add'}>
                {/* <img className='w-5 h-5' src={assets.add_icon} alt="" /> */}
                <AiOutlinePlus 
  className="w-5 h-5 cursor-pointer " 
  title="Add item"
/>
                <p className='hidden md:block'>Add Items</p>
            </NavLink>
            <NavLink className='flex items-center gap-3 border border-[#1D4ED8] border-r-0 px-3 py-2 rounded-l' to={'/list'}>
            <FiPackage className="w-5 h-5 cursor-pointer" />

                {/* <img className='w-5 h-5' src={assets.order_icon} alt="" /> */}
                <p className='hidden md:block'>List Items</p>
            </NavLink>
            <NavLink className='flex items-center gap-3 border border-[#1D4ED8] border-r-0 px-3 py-2 rounded-l' to={'/orders'}>
            <FiCheckCircle className="w-5 h-5   " /> 
                {/* <img className='w-5 h-5' src={assets.order_icon} alt="" /> */}
                <p className='hidden md:block'>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar