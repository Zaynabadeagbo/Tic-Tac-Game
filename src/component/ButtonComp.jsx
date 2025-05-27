import React from 'react'

const ButtonComp = ({text, bg, shadow}) => {
  return (
   <button className={`p-[10px] border-none flex items-center justify-center text-[#1a2a33] font-bold text-sm cursor-pointer rounded-[10px]`} 
   style={
    {
      backgroundColor: bg,
      boxShadow: shadow,
    }
   }
   >
    {text}
 
   </button>
  )
}

export default ButtonComp