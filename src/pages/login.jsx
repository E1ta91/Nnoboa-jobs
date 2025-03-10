import React, { useState } from 'react';
import l1 from '../assets/images/l1.jpeg';
import l2 from '../assets/images/l2.jpg';
import { motion } from "framer-motion";
import { IoLockOpen } from "react-icons/io5";
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';



const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ reValidateMode: "onBlur", mode: "all" });
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  return (

    <div >
      {/* larger screens */}
      <div className="relative items-center justify-center h-screen hidden md:flex">
        {/* Form */}
        <motion.form
          className="absolute flex flex-col bg-white xl:w-[50vw] xl:h-[60vh] space-y-6 lg:w-[65vw] md:w-[75vw] shadow-2xl shadow-black p-6 rounded-lg z-0" // Form stays behind the image
          onSubmit={handleSubmit(onSubmit)}
          initial={{ x: "100%" }}
          animate={{ x: "-10%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >

          <h1 className='text-xl text-[#3A5629] font-medium'>Log in with us</h1>
          <div className="flex flex-col space-y-3">
            {/* Email Input */}
            <div className='flex flex-col space-y-2'>
              <label htmlFor='email' className='font-medium'>Email Address</label>
              <input
                type="text"
                name="email"
                placeholder="Email address"
                autoComplete='email'
                className='lg:w-80 md:w-72 xl:w-[21rem] px-4 py-3 outline-none rounded-sm shadow-xs shadow-black z-20' // Added z-20
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>

            {/* Password Input */}
            <div className='space-y-2 flex flex-col relative'>
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name='password'
                autoComplete='current-password'
                placeholder='Password'
                className='lg:w-80 md:w-72 xl:w-[21rem] px-4 py-3 outline-none rounded-sm shadow-xs shadow-black z-20' // Added z-20
                {...register("password", { required: "Password is required", minLength: { value: 8, message: 'Password must be at least 8 characters' } })}
              />
              <span
                className="absolute xl:left-[18.5rem] lg:left-[17.5rem] md:left-[15.5rem] flex justify-center items-center px-3 mt-12 cursor-pointer z-20" // Added z-20
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-slate-500 w-5" />
              </span>
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>

            {/* Login Button and Forgot Password */}
            <div className='flex lg:space-x-24 md:space-x-14 xl:space-x-28'>
              <button
                type="submit"
                className="w-20 h-11 bg-[#3A5629] text-white rounded-sm hover:bg-gray-500 transition duration-200"
              >
                Login
              </button>
              <div className='flex items-center space-x-1'>
                <span className='text-[#3a5629] pb-0.5'><IoLockOpen /></span>
                <span style={{ fontFamily: 'Rubik' }} className='text-[16px] text-[#3a5629]'>Forgot Password?</span>
              </div>
            </div>
          </div>

        </motion.form>

        {/* Background Image */}
        <div className="absolute w-full h-screen z-10 pointer-events-none"> {/* Added pointer-events-none */}
          <div className="w-full h-full clip-path-custom">
            <img src={l1} alt="Slanted Image" className="w-full h-full object-cover pointer-events-none" /> {/* Added pointer-events-none */}
            <div className="absolute inset-0 bg-black/5 clip-path-custom pointer-events-none"></div> {/* Added pointer-events-none */}
          </div>
        </div>
      </div>

      {/* mobile screens */}
      <div className="md:hidden relative w-full flex flex-col items-center">
        {/* Background Image  */}
        <img src={l2} alt="Background" className="w-full  mt-56 h-[66vh] object-cover" />

        Form on top of the image
        <div className="absolute top-[14rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[90vw] h-[66vh] p-6 space-y-6 shadow-2xl shadow-black rounded-lg">

          <form className="flex flex-col space-y-7">
            <h1 className="text-xl text-[#3A5629] font-medium">Log in with us</h1>

            <div className="flex flex-col space-y-2">
              <label className="font-medium">Email Address</label>
              <input
                type="text"
                id="email"
                autoComplete='email'
                placeholder="Email address"
                className="w-full px-4 py-2 border-2 border-[#3A5629] text-gray-600 rounded-lg outline-none"
              />
            </div>

            <div className='space-y-2 flex flex-col relative'>
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id='password'
                autoComplete='password'
                placeholder='Password'
                className='w-full px-4 py-2 border-2 border-[#3A5629] text-gray-600 rounded-lg outline-none'
                {...register("password", { required: "Password is required", minLength: { value: 8, message: 'Password must be at least 8 characters' } })}
              />
              <span className="absolute  right-0 flex justify-center items-center px-3 mt-12  cursor-pointer" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-slate-500 w-5" />
              </span>
              {errors.password && (<p className="text-red-500 ">{errors.password.message}</p>)}
            </div>

            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="w-20 h-11 bg-[#3A5629] text-white rounded-sm hover:bg-gray-500 transition duration-200"
              >
                Login
              </button>

              <div className="flex items-center space-x-1">
                <span className="text-[#3a5629] pb-0.5">
                  <IoLockOpen />
                </span>
                <span className="text-[16px] text-[#3a5629]" style={{ fontFamily: 'rubik' }}>
                  Forgot Password?
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>



    </div>



  );
}

export default Login;
