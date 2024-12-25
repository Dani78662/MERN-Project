import { assets } from "../assets/assets"
const Footer = () => {
  return (
    <div className="bg-[#000000] px-4 sm:px-10 w-full">
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm py-5'>
            <div>
                <img src={assets.logo} className='mb-5 w-32 ' alt="" />
                <p className='w-full md:w-2/3 text-[#FAFAFA]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex sit harum laborum earum aliquam amet esse praesentium beatae unde reprehenderit fuga, cumque sed architecto expedita ipsam quis, error aliquid.
                </p>
            </div>
            <div className="text-[#1D4ED8]">
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-[#FAFAFA]">
                <li>Home</li>
                <li>About</li>
                <li>Delievery</li>
                <li>Privacy Policy</li></ul>
            </div>
            <div className="text-[#1D4ED8]">
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-[#FAFAFA]">
                    <li>123456789</li>
                    <li>dani@gmail.com</li></ul>
            </div>
        </div>
        <div>
                <hr className="border-none h-[1.5px] bg-[#1D4ED8]"/>
                <p className="py-5 text-sm text-center text-[#FAFAFA]"> Copyright © 2023. All Rights Reserved</p>
            </div>
    </div>
  )
}

export default Footer