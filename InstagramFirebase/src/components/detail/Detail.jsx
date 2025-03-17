import React from 'react'
import '../../App.css'
const Detail = () => {
  return (
    <div className='flex-1 p-2'>
      <div className="user flex flex-col  justify-center items-center gap-3 border-b border-b-[#c5c4c435]">
        <img src="/manish_grg.jpg" className='rounded-full w-20 object-cover' alt="" />
        <div className="texts flex flex-col gap- justify-center items-center">
          <h2 className=''>Manish Gurung</h2>
          <p className='text-sm'>Lorem, ipsum.</p>
        </div>
      </div>
      <div className="info py-1 flex flex-col gap-2.5">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <i class="ri-arrow-down-s-line"></i>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy</span>
            <i class="ri-arrow-down-s-line"></i>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
          </div>
          <div className="photos flex gap-3 flex-col mt-1"> 
            <div className="photoItem">
              <div className="photoDetail">
                <img src="/manish_grg.jpg" alt="" />
                <span>photo_2024</span>
              </div>
              <i className='ri-download-fill'></i>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="/manish_grg.jpg" alt="" />
                <span>photo_2024</span>
              </div>
              <i className='ri-download-fill'></i>
            </div>
            {/* <img src="" alt="" /> */}
          </div>
        </div>
        <div className="option mt-2">
          <div className="title">
            <span>Shared files</span>
          </div>
          <button className='bg-red-400 hover:bg-red-500 text-white border-none w-full rounded-sm px-2 py-1 mt-4 cursor-pointer'>Block user</button>
          <button className='bg-gray-400 hover:bg-gray-500 text-white border-none w-full rounded-sm px-2 py-1 mt-4 cursor-pointer'>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Detail