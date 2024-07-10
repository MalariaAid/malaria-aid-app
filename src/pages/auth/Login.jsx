import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [signinInput, setSigninInput] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChangeInput = (event) => {
    const {name, value, type, checked} = event.target;
    setSigninInput((prevState) => ({...prevState, [name]: type === "checkbox" ? checked : value }));
  }

  return (
    <>
      <div className="h-full w-full" style={{ 
        height: "100dvh", 
        width: "100%",
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingInline: "10px",
        backgroundImage: `url('./images/mosquito-bg.png')` 
        }}>
          <div className="w-full lg:w-[615px] flex flex-col gap-3 mx-auto bg-white rounded-md py-[55px] lg:px-[93px]">
              <h2 className='text-center text-4xl font-bold text-black/90'>Log In</h2>
              <p className='text-center text-gray-600 text-xl font-normal '>Sign into your account to continue</p>
            <form className='w-full flex flex-col gap-3 p-5' >
              
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="email">Email Address:</label>
                <input onChange={handleChangeInput} value={signinInput.email} autoComplete='off' name='email' id='email' type="text" placeholder='Enter email address' className='w-full p-3 bg-[#e7efea] rounded-lg ' />
              </div>
              
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="password">Password:</label>
                <input onChange={handleChangeInput} value={signinInput.password}  autoComplete='off' name='password' id='password' type="password" placeholder='Enter password' className='w-full p-3 bg-[#e7efea] rounded-lg' />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="remember">
                  <input onChange={handleChangeInput} checked={signinInput.remember} className='mr-1' type="checkbox" name="remember" id="remember" />Remember me
                </label>
                <Link to={"/forgot-password"}>Forgot Password?</Link>
              </div>

              <button type='button' className='my-5 bg-[#0f6429] hover:bg-[#308b4c] w-full duration-300 p-3 px-6 rounded-md text-white '>Login</button>
                <span className="flex items-center justify-center gap-1">
                  Don{"'"}t have an account? <Link to={"/register"} className='text-[#308b4c]'>Sign Up</Link>
                </span>
            </form>
          </div>
      </div>
    </>
  )
}

export default Login