import { assets } from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between bg-[#1D4ED8]'>
        <img className='w-[max(5%,40px)]' src={assets.logo} alt="" />
        <button onClick={()=>setToken('')} className='bg-[#FAFAFA] text-[#1D4ED8] px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-[#3b82f6] hover:text-[#FAFAFA] transition'>Logout</button>
    </div>
  )
}

export default Navbar;