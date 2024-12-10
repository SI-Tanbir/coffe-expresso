
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import auth from './configFirebase';

const SignUP = () => {

    const handleSignup =(e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const pass=e.target.password.value;
        console.log(email,pass);
        fetch('https://coffie-api.vercel.app/signup',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                email: email,
                password:pass
            })
            
        }
        )


        // createUserWithEmailAndPassword(auth, email, pass)
        // .then((userCredential) => {
        //     // Signed up 
        //     const user = userCredential.user;
        //     console.log(user)
            
        //     // ...
        //   })
        //   .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     console.log(errorMessage)
        //     // ..
        //   });


    }
    
  return (
    <div>

<div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
    <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
            Sign up here
        </h1>
        <form onSubmit={handleSignup} className="space-y-4">
            <div>
                <label className="label">
                    <span className="text-base label-text">Email</span>
                </label>
                <input name='email' type="text" placeholder="Email Address" className="w-full input input-bordered" />
            </div>
            <div>
                <label className="label">
                    <span className="text-base label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder="Enter Password" className="w-full input input-bordered" />
            </div>
            <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
            <div>
                <button className="btn btn-block btn-neutral">signup</button>
            </div>
        </form>


    </div>
</div>

    </div>
  )
}

export default SignUP