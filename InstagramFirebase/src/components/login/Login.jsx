import React from 'react'
import './Login.css'
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
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
    
    const handleRegister = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const {username,email,password} = Object.fromEntries(formData);
        try {
            const res = await createUserWithEmailAndPassword(auth,email, password);
            
            await setDoc(doc(db,"users", res.user.uid),{
                username,
                email,
                id:res.user.uid,
                blocked: [],
            });

            await setDoc(doc(db,"userChats", res.user.uid),{
                chats: [],
            });
            toast.success("Account created successfully");
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }


    }
  return (
    <div className='login bg-gray-50 w-full h-full flex items-center justify-center gap-10 p-5'>
        <div className="item">
            <h2>Welcome back</h2>
            <form onSubmit={handleLogin} className='flex flex-col items-center justify-center gap-4'>
                <input className='p-5 border-none outline-none bg-gray-700 text-white rounded-sm' type="text" name="email" placeholder='Email' id="" />
                <input className='p-5 border-none outline-none bg-gray-700 text-white rounded-sm' type="password" name="password" placeholder='Password' id="" />
                <button>Sign In</button>
            </form>
        </div>
        <div className="separator h-[80%] w-[2px] bg-gray-400"></div>

        <div className="item">
            <h2>Create an account</h2>
            <form className='flex flex-col items-center justify-center gap-4' onSubmit={handleRegister}>
                <label htmlFor="profile_image" className=''>
                    <img className='h-12 w-12 rounded-md object-cover' src={avatar.url || '/manish_grg.jpg'} alt="" />
                    <span>Upload an image</span>
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