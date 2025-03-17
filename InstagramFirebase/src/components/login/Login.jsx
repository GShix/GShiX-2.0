import React from 'react'
import './Login.css'
import { toast } from 'react-toastify';
const Login = () => {
    const [avatar, setAvatar] = React.useState({
        file:null,
        url:''
    });

    const handleAvatar = (e) => {
        if(e.target.files[0]){

            setAvatar({
                file:e.target.files[0],
                url:URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        toast.warn("Hello");
    }
    const handleRegister = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const {username,email,password} = Object.fromEntries(formData);

    }
  return (
    <div className='login bg-gray-50 w-full h-full flex items-center justify-center gap-10 p-5'>
        <div className="item">
            <h2>Welcome back,</h2>
            <form onSubmit={handleLogin} className='flex flex-col items-center justify-center gap-5'>
                <input className='p-5 border-none outline-none bg-gray-700 text-white rounded-sm' type="text" name="email" placeholder='Email' id="" />
                <input className='p-5 border-none outline-none bg-gray-700 text-white rounded-sm' type="password" name="password" placeholder='Password' id="" />
                <button>Sign In</button>
            </form>
        </div>
        <div className="separator h-[80%] w-[2px] bg-gray-400"></div>

        <div className="item">
            <h2>Create an account,</h2>
            <form className='flex flex-col items-center justify-center gap-5' onSubmit={handleRegister}>
                <label htmlFor="profile_image" className='w-full flex flex-col items-center cursor-pointer underline justify-self-start'>
                    <img className='h-20 w-20 rounded-md object-cover' src={avatar.url || '/manish_grg.jpg'} alt="" />
                    Upload an image
                </label>
                <input type="file" className='hidden' name="profile_image" id="profile_image"onChange={handleAvatar} />

                <input type="text" className='' name="username" placeholder='Username' id="" />
                <input type="email" className='' name="email" placeholder='Email' id="" />
                <input type="password" className='' name="password" placeholder='Password' id="" />

                <button type='submit' className=''>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default Login