import React from 'react'

const Chat = () => {
  return (
    <div className='flex-2 border-l-2 border-r-2 border-[#dddddd35] h-100'>
      <div className="top p-8 flex items-center justify-between border-b border-b-[#dddddd35]">
        <div className="user flex items-center gap-8">
          <img src="/manish_grg.jpg" className='h-10 rounded-full object-cover' alt="" />
          <div className="text flex flex-col gap-2">
            <span className='font-semibold'>Manish Gurung</span>
            <p className='text font-light'>Hello</p>
          </div>
        </div>
        <div className="icons gap-8 flex">
          <i class="ri-phone-fill"></i>
          <i class="ri-vidicon-fill"></i>
          <i class="ri-information">i</i> 
        </div>
      </div>
      <div className="center">

      </div>
      <div className="bottom p-8 flex items-center gap-5 justify-between border-t border-t-[#dddddd35]"> 
        <div className="icons flex gap-8">
          <i class="ri-attachment-2 cursor-pointer"></i>
          <i class="ri-camera-fill cursor-pointer"/>
          <i class="ri-mic-fill cursor-pointer"/>
        </div>
        <input type="text" className='flex-1 border-transparent border-none outline-none bg-gray-200 text-gray-600 p-8 rounded-md ' placeholder='Type a message...'/>
        <div className="emoji">
          <i class="ri-emotion-happy-fill text-xl"></i>
        </div>
        <button type="submit" className='bg-[#5183fe] text-gray-50 px-2 py-3 border-none rounded-md cursor-pointer'>Send</button>
      </div>
    </div>
  )
}

export default Chat