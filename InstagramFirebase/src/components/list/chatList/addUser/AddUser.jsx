import React from 'react'

const AddUser = () => {
  return (
    <div className='w-max h-max p-5 bg-gray-200 rounded-md absolute top-0 left-0 right-0 bottom-0 m-auto '>
        <form action="" className='flex gap-4 mb-5'>
            <input className='px-3 py-2 rounded-md border-none outline-none bg-gray-50' type="text" name="username" placeholder='Username' id="username" />
            <button className='px-3 py-2 rounded-md bg-blue-400 text-white border-none cursor-pointer'>Search</button>
        </form>
        <div className="user flex items-center justify-between">
            <div className="detail flex items-center gap-4">
                <img className='w-12 h-12 rounded-full object-cover' src="/manish_grg.jpg" alt="" />
                <span>Manish Gurung</span>
            </div>
            <button className='py-1 px-2 rounded-md bg-blue-400 text-white border-none cursor-pointer'>Add User</button>
        </div>
    </div>
  )
}

export default AddUser