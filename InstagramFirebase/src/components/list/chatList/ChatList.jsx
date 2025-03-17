import React, { useState } from 'react'

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className='chatList flex-1 overflow-scroll'>
        <div className="search flex items-center gap-5 p-2">
            <div className="searchBar flex-1 mt-2 bg-gray-100 flex items-center gap-5 rounded-md px-1 py-[2px]">
                <i class="ri-search-line"></i>
                <input type="text" placeholder='Search' className='border-none bg-transparent flex-1'/>
            </div>
            {/* <p>{`${addMode?'Hi':'Flase'}`}</p> */}
            <h1 class={`cursor-pointer hover:bg-gray-100 ${addMode?'ri-subtract-line':'ri-add-circle-fill'}`} onClick={()=>setAddMode(!addMode)}></h1>
        </div>
        <div className="item flex items-center gap-3 px-2 py-1 mb-1 cursor-pointer border-b border-[#c5c4c435]">
          <img src="./manish_grg.jpg" className='h-12 rounded-full object-cover' alt="" />
          <div className="text flex flex-col gap-1">
            <span className='font- text-sm'>Manish Gurung</span>
            <p className='text font-normal leading-1 text-[12px]'>Hello</p>
          </div>
        </div>
        <div className="item flex items-center gap-3 px-2 py-1 mb-2 cursor-pointer border-b border-[#c5c4c435]">
          <img src="./manish_grg.jpg" className='h-12 rounded-full object-cover' alt="" />
          <div className="text flex flex-col gap-1">
            <span className='font-medium'>Manish Gurung</span>
            <p className='text font-normal leading-1 text-[12px]'>Hello</p>
          </div>
        </div>
        <div className="item flex items-center gap-3 px-2 py-1 mb-2 cursor-pointer border-b border-[#c5c4c435]">
          <img src="./manish_grg.jpg" className='h-12 rounded-full object-cover' alt="" />
          <div className="text flex flex-col gap-1">
            <span className='font-medium'>Manish Gurung</span>
            <p className='leading-1 text-[12px]'>Hello</p>
          </div>
        </div>
    </div>
  )
}

export default ChatList