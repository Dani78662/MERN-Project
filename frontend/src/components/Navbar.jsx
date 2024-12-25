import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { FaSearch,FaUserCircle,FaShoppingCart,FaBars } from 'react-icons/fa'

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const {setShowSearch,getCartCount,navigate, token, setToken, setCartItems} = useContext(ShopContext);

    const logout = () => {
      navigate('/login');
      localStorage.removeItem('token');
      setToken("");
      setCartItems({});
  }

  return (
    <div className=' flex items-center justify-between py-5 font-medium bg-[#000000] px-4 sm:px-10 w-full'>
        <Link to="/"><img src={assets.logo} className='w-16' alt="" /></Link>



        <ul className='hidden sm:flex gap-5 text-sm text-[#FAFAFA]'>
            <NavLink className='flex flex-col items-center gap-1' to="/">
            <p>HOME</p>
            <hr  className='w-2/4 border-none h-[1.5px] bg-[#1D4ED8] hidden'/> 
            </NavLink>
            <NavLink className='flex flex-col items-center gap-1' to="/collection">
            <p>COLLECTION</p>
            <hr  className='w-2/4 border-none h-[1.5px] bg-[#1D4ED8] hidden'/> 
            </NavLink>
            <NavLink className='flex flex-col items-center gap-1' to="/about">
            <p>ABOUT</p>
            <hr  className='w-2/4 border-none h-[1.5px] bg-[#1D4ED8] hidden'/> 
            </NavLink>
            <NavLink className='flex flex-col items-center gap-1' to="/contact">
            <p>CONTACT</p>
            <hr  className='w-2/4 border-none h-[1.5px] bg-[#1D4ED8] hidden'/> 
            </NavLink>
        </ul>

        <div className='flex items-center gap-6 text-[#FAFAFA]'>
        <FaSearch 
        onClick={() => setShowSearch(true)} 
        className='w-5 h-5 cursor-pointer' 
    />
            {/* <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" /> */}

            <div className='group relative'>
                
                {/* <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" /> */}
                <FaUserCircle onClick={()=> token ? null : navigate('/login')} className='w-5 h-5 cursor-pointer' />
                {/** Dropdown */}

                {token &&<div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-[#000000] text-white rounded'>
                        <p className='cursor-pointer hover:text-[#1D4ED8] '>My Profile</p>
                        <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-[#1D4ED8]'>Orders</p>
                        <p onClick={logout} className='cursor-pointer hover:text-[#1D4ED8]'>Log Out</p>
                    </div>
                </div>}
            </div>
            <Link to="/cart" className='relative'>
            {/* <img src={assets.cart_icon} className='w-5 min-w-5 ' alt="" /> */}
            <FaShoppingCart className='w-5 h-5' />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            <FaBars
    onClick={() => setVisible(true)}
    className='w-5 h-5 cursor-pointer sm:hidden'
/>
            {/* <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" /> */}
        </div>
        {/* Sidebar menu for small screen */}
        <div
  className={`fixed top-0 right-0 bottom-0 h-screen bg-[#000000] transition-all z-50 overflow-hidden ${
    visible ? 'w-full' : 'w-0'
  }`}
>
  <div className="flex flex-col text-[#FAFAFA] h-full overflow-y-auto">
    <div
      onClick={() => setVisible(false)}
      className="flex items-center gap-4 p-3 cursor-pointer"
    >
      <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
      <p>Back</p>
    </div>
    <NavLink
      onClick={() => setVisible(false)}
      className="py-2 pl-6"
      to="/"
    >
      HOME
    </NavLink>
    <NavLink
      onClick={() => setVisible(false)}
      className="py-2 pl-6 "
      to="/collection"
    >
      COLLECTION
    </NavLink>
    <NavLink
      onClick={() => setVisible(false)}
      className="py-2 pl-6 "
      to="/about"
    >
      ABOUT
    </NavLink>
    <NavLink
      onClick={() => setVisible(false)}
      className="py-2 pl-6 "
      to="/contact"
    >
      CONTACT
    </NavLink>
  </div>
</div>
    </div>
  )
}

export default Navbar