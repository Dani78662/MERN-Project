
const NewsLetterBox = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }
  return (
    <div className="text-center">
        <p className="text-2xl font-medium text-[#FAFAFA]">Subscribe Now</p>
        <p className="text-gray-400 mt-3">Subscribe to our newsletter and get 10% off your first purchase</p>
        <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 mx-auto gap-3 flex items-center my-6 border pl-3 ">
            <input type="email" placeholder="Enter your email" className="w-full sm:flex-1 outline-none bg-transparent" required/>
            <button className="bg-[#1D4ED8] text-white px-10 py-4 text-xs hover:bg-[#3b82f6] transition" type="submit">Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetterBox