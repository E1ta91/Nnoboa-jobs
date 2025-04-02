import React, { useState } from 'react'
import C1 from '../assets/images/C1.jpg'
import logo from '../assets/images/logo.png'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

const ConsultSignUp = () => {
  const { register, formState: { errors } } = useForm({ reValidateMode: "onBlur", mode: "all" });
  const navigate = useNavigate()

  return (
    <div>
      <div className='flex flex-col md:flex-row'>
        {/* Left Section (Form) - Scrollable with Hidden Scrollbar */}
        <div className='bg-white w-full md:w-2/6 h-screen overflow-y-auto space-y-6 p-6 md:p-7 hide-scrollbar'>
          {/* Logo */}
          <img className='w-[150px]' src={logo} alt="Logo" />

          {/* Form Content */}
          <div className='space-y-5'>
            <h1 style={{ fontFamily: 'moon' }} className='text-2xl sm:text-3xl font-medium text-center md:text-left'>
            Your Expertise, Their Success. Start Consulting Today.
            </h1>

            {/* Form */}
            <form className='space-y-5' >
              {/* Full Name Input */}
              <div className='space-y-2 flex flex-col'>
                <label  className='text-[#3a5629] font-medium'>Full Name</label>
                <input
                  type="text"
                  id='name'
                  placeholder='Full Name...'
                  autoComplete='name'
                  className='w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black'
                  {...register("fullName", { required: "Full name is required" })}
                />
                {errors.fullName && <p className='text-red-500'>{errors.fullName.message}</p>}
              </div>

              {/* Email Input */}
              <div className='space-y-2 flex flex-col'>
                <label  className='text-[#3a5629] font-medium'>  Email Address</label>
                <input
                  type="email"
                  id='email'
                  placeholder='Email address'
                  autoComplete='email'
                  className='w-full px-4 py-3 outline-none rounded-sm shadow-xs shadow-black'
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
              </div>

              <div className='space-y-2 flex flex-col'>
                <label className='text-[#3a5629] font-medium'> Professional Title</label>
                <input
                  type="text"
                  id='Title'
                  placeholder='Enter Your Professional Title'
                  autoComplete='title'
                  className='w-full px-4 py-3 outline-none rounded-sm shadow-xs shadow-black'
                  
                />
                
              </div>

              <div className='space-y-2 flex flex-col'>
                <label className='text-[#3a5629] font-medium'> Years Of Experience</label>
                <input
                  type="text"
                  id='experience'
                  placeholder='Enter your years of experience'
                  autoComplete='experience'
                  className='w-full px-4 py-3 outline-none rounded-sm shadow-xs shadow-black'
                  
                />
                
              </div>

              <div className='space-y-2 flex flex-col'>
                <label  className='text-[#3a5629] font-medium'> Industry/Specialization</label>
                <input
                  type="text"
                  id='industry'
                  placeholder='Industry/Specialization'
                  autoComplete='industry'
                  className='w-full px-4 py-3 outline-none rounded-sm shadow-xs shadow-black'
                  
                />
                
              </div>

             

              {/* Submit Button */}
              <button
              onClick={() => navigate('/consultprofile')}
                className="w-28 sm:w-24 h-11 bg-[#3A5629] text-white rounded-sm hover:bg-gray-500 transition duration-200"
              >
                Submit
              </button>
            </form>

          </div>
        </div>

        {/* Right Section (Image) - Hidden on mobile, visible on tablet and desktop */}
        <div className='hidden md:block w-full md:w-4/6 fixed top-0 right-0 h-screen'>
          <img src={C1} className='w-full h-full object-cover' alt="Background" />
          <div className='absolute inset-0 bg-black opacity-50'></div>
        </div>
      </div>
    </div>
  )
}

export default ConsultSignUp