import React from 'react'
import proptypes from 'prop-types';
export default function ApprochCard({image,title,des}) {
    
  return (
    <div class="grid-item flex flex-col items-start rounded-xl p-[18px] bg-white">
    <img
        class="w-full h-[150px] rounded-xl object-cover mb-[15px]"
        src={image}
        alt="v Blog"
    />
    <h3 class=" font-bold text-[18px] mb-[10px]">
        {title}
        <span class="arrow text-[#0080FF]">  ›</span>
    </h3>
    <p class="text-[14px] text-gray-500 leading-[1.4]">
        {des}
    </p>
    <button className=' mt-5 px-3 py-1 border-2 tracking-wider border-[#002e5c]  text-[12px] font-medium rounded-2xl bg-[#002e5c] text-white transition-colors duration-300 ease-in-out'>LEARN MORE..</button>
</div>
  )
}

ApprochCard.prototypes = {
    image:proptypes.string,
    title:proptypes.string,
    des:proptypes.string
}