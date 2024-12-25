
const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className="text-[#FAFAFA]">{text1} <span className="text-[#1D4ED8] font-medium">{text2}</span> </p>
        <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#FAFAFA]"></p>
    </div>
  )
}

export default Title