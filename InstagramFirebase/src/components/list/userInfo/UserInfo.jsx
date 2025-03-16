import React from 'react'

const UserInfo = () => {
  return (
    <div className='userInfo p-2 flex items-center justify-between border-b border-[#c5c4c435]'>
        <div className="user flex items-center gap-4">
            {/* <img src="" alt="" /> */}
            <i class="ri-user-fill text-3xl w-10 h-10 object-cover rounded-full bg-gray-200 flex items-center justify-center"></i>
            <h1 className=''>Dambar</h1>
        </div>
        <div className="icons flex gap-3">
            {/* <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" /> */}
            <i class="ri-more-fill h-5 w-5 cursor-pointer"></i>
            <i class="ri-video-fill h-5 w-5 cursor-pointer"></i>
            <i class="ri-pencil-fill h-5 w-5 cursor-pointer"></i>
        </div>
    </div>
  )
}

export default UserInfo