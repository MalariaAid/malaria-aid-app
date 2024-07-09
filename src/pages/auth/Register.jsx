
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  
  const [signinInput, setSigninInput] = useState({
    email: "",
    password: "",
    confirm_password: "",
    acceptConditions: false,
  });

  const handleChangeInput = (event) => {
    const {name, value, type, checked} = event.target;
    setSigninInput((prevState) => ({...prevState, [name]: type === "checkbox" ? checked : value }));
  }

  return (
    <>
      <div className="" style={{ 
        height: "100%", 
        width: "100%",
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingInline: "10px",
        paddingTop: "30px",
        paddingBottom: "30px",
        backgroundImage: `url('./images/mosquito-bg.png')`
        }}>
          <div className="w-full h-full lg:w-[615px] flex flex-col gap-3 mx-auto bg-white rounded-md  py-[55px] px-5 lg:px-[93px]">
              <h2 className='text-center text-4xl font-bold text-black/90'>Register</h2>
              <p className='text-center text-gray-600 text-xl font-normal '>Hey there, lets get you started</p>
            <form className='w-full h-full flex flex-col gap-3 p-5' >
              
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="email">Email Address:</label>
                <input onChange={handleChangeInput} value={signinInput.email} autoComplete='off' name='email' id='email' type="text" placeholder='Enter email address' className='w-full p-3 bg-[#e7efea] rounded-lg ' />
              </div>
              
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="password">Password:</label>
                <input onChange={handleChangeInput} value={signinInput.password} autoComplete='off' name='password' id='password' type="password" placeholder='Enter password' className='w-full p-3 bg-[#e7efea] rounded-lg' />
              </div>

              <div className="w-full flex flex-col gap-2">
                <label htmlFor="confirm_password">Confirm Password:</label>
                <input onChange={handleChangeInput} value={signinInput.confirm_password} autoComplete='off' name='confirm_password' id='confirm_password' type="password" placeholder='Confirm password' className='w-full p-3 bg-[#e7efea] rounded-lg' />
              </div>
             
              <div className="flex items-center justify-between">
                <label htmlFor="remember">
                  <input onChange={handleChangeInput} checked={signinInput.remember} className='mr-1' type="checkbox" name="remember" id="remember" />
                    I accept the <Link className='text-[#308b4c]'>terms</Link> and <Link className='text-[#308b4c]'>conditions</Link>
                </label>
              </div>
              <div className="flex flex-col gap-4 my-5">
                <button type='button' className='bg-[#0f6429] hover:bg-[#308b4c] w-full duration-300 p-3 px-6 rounded-md text-white '>Register</button>
                <button type='button' className='border border-[#0f6429] w-full flex items-center justify-center gap-2 duration-300 p-2 px-6 rounded-md text-black/80 '>
                  <div className="">
                    <img src="./images/google-logo.png" alt="google-logo" className='h-[25px] w-[25px]' />
                  </div>
                  <span className='text-[20px] text-[#308b4c] font-medium '>Continue with Google</span>
                </button>

              </div>
                <span className="flex items-center justify-center gap-1 py-5">
                    Already have an account? <Link to={"/sign-in"} className='text-[#308b4c]'> Log In</Link>
                </span>
            </form>
          </div>
      </div>
    </>
  )
}

export default Register