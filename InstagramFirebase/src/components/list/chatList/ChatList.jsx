import React, { useState } from 'react'

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className='chatList mt-5 flex-1 overflow-scroll'>
        <div className="search flex items-center gap-5 p-5">
            <div className="searchBar flex-1 bg-gray-100 flex items-center gap-5 rounded-md">
                <i class="ri-search-line"></i>
                <input type="text" placeholder='Search' className='border-none bg-transparent flex-1'/>
            </div>
            {/* <p>{`${addMode?'Hi':'Flase'}`}</p> */}
            <h1 class={`cursor-pointer hover:bg-gray-100 p-5 mt-10 ${addMode?'ri-subtract-line':'ri-add-circle-fill'}`} onClick={()=>setAddMode(!addMode)}></h1>
        </div>
        <div className="item flex items-center gap-8 p-20 cursor-pointer border-b border-[#dddddd35]">
          <img src="./manish_grg.jpg" className='h-15 rounded-full object-cover' alt="" />
          <div className="text flex flex-col gap-2">
            <span className='font-semibold'>Manish Gurung</span>
            <p className='text font-light'>Hello</p>
          </div>
        </div>
    </div>
  )
}

export default ChatList