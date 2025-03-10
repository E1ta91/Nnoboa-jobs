import React, { useState } from 'react'
import s4 from '../assets/images/s4.jpg'
import logo from '../assets/images/logo.png'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const ESignup = () => {
     const { register, formState: { errors } } = useForm({ reValidateMode: "onBlur", mode: "all" });
    
      const [showPassword, setShowPassword] = useState(false);
      const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    
      const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
      };
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
               Your Farm, Your Team – Connect with Reliable Agri-Talent.
               </h1>
   
               {/* Form */}
               <form className='space-y-5'>
                 {/* Full Name Input */}
                 <div className='space-y-2 flex flex-col'>
                   <label htmlFor="name" className='text-[#3a5629] font-medium'>Company Name</label>
                   <input
                     type="text"
                     id='name'
                     placeholder='Company name...'
                     autoComplete='name'
                     className='w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black'
                     {...register("fullName", { required: "Full name is required" })}
                   />
                   {errors.fullName && <p className='text-red-500'>{errors.fullName.message}</p>}
                 </div>
   
                 {/* Email Input */}
                 <div className='space-y-2 flex flex-col'>
                   <label htmlFor="email" className='text-[#3a5629] font-medium'> Company Email Address</label>
                   <input
                     type="email"
                     id='email'
                     placeholder='Company email address'
                     autoComplete='email'
                     className='w-full px-4 py-3 outline-none rounded-sm shadow-xs shadow-black'
                     {...register("email", { required: "Email is required" })}
                   />
                   {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                 </div>
   
                 {/* Password Input */}
                 <div className='space-y-2 flex flex-col relative'>
                   <label htmlFor="password" className='text-[#3a5629] font-medium'>Password</label>
                   <input
                     type={showPassword ? "text" : "password"}
                     id='password'
                     placeholder='Password'
                     autoComplete='new-password'
                     className='w-full px-4 py-3 outline-none rounded-sm shadow-xs shadow-black'
                     {...register("password", { required: "Password is required", minLength: { value: 8, message: 'Password must be at least 8 characters' } })}
                   />
                   <span
                     className="absolute right-0 flex justify-center items-center px-3 mt-12 cursor-pointer"
                     onClick={togglePasswordVisibility}
                   >
                     <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-slate-500 w-5" />
                   </span>
                   {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                 </div>
   
                 {/* Confirm Password Input */}
                 <div className='space-y-2 flex flex-col relative'>
                   <label htmlFor="confirmPassword" className='text-[#3a5629] font-medium'>Confirm Password</label>
                   <input
                     type={showConfirmPassword ? "text" : "password"}
                     id='confirmPassword'
                     placeholder='Confirm Password'
                     autoComplete='new-password'
                     className='w-full px-4 py-3 outline-none rounded-sm shadow-xs shadow-black'
                     {...register("confirmPassword", { required: "Confirm Password is required", minLength: { value: 8, message: 'Password must be at least 8 characters' } })}
                   />
                   <span
                     className="absolute right-0 flex justify-center items-center px-3 mt-12 cursor-pointer"
                     onClick={toggleConfirmPasswordVisibility}
                   >
                     <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} className="text-slate-500 w-5" />
                   </span>
                   {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
                 </div>
   
                 {/* Submit Button */}
                 <button
                   type='submit'
                   className="w-28 sm:w-24 h-11 bg-[#3A5629] text-white rounded-sm hover:bg-gray-500 transition duration-200"
                 >
                   Sign Up
                 </button>
               </form>
   
               
             </div>
           </div>
   
           {/* Right Section (Image) - Hidden on mobile, visible on tablet and desktop */}
           <div className='hidden md:block w-full md:w-4/6 fixed top-0 right-0 h-screen'>
             <img src={s4} className='w-full h-full object-cover' alt="Background" />
             <div className='absolute inset-0 bg-black opacity-50'></div>
           </div>
         </div>
       </div>
  )
}

export default ESignup