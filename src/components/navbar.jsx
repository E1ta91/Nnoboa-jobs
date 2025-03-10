import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { LockIcon, UserRound, Menu } from 'lucide-react';
import { IoMdArrowDropdown } from 'react-icons/io';
import DarkModeToggle from './darkModeToggle';

const Navbar = () => {
  const [isOpenFindWork, setIsOpenFindWork] = useState(false);
  const [isOpenEmployer, setIsOpenEmployer] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate()
  return (
    <div>
      {/* Larger screens */}
      <div className=' navbar  lg:flex hidden bg-white w-[100vw] h-[12vh] fixed z-20 justify-center items-center'>

        <div className='flex justify-center items-center lg:space-x-[14rem] xl:space-x-[25rem]'>
          <div className='flex space-x-8'>
            <img className='w-[180px] h-[38.8px]' src={logo} alt='logo' />
            <ul className='mt-3'>
              <li className='relative group' onMouseEnter={() => setIsOpenFindWork(true)} onMouseLeave={() => setIsOpenFindWork(false)}>
                <button className='uppercase group-hover:bg-[#365126] group-hover:text-white dark:group-hover:text-amber-300 w-28 h-9 rounded-md font-semibold'>Find Work</button>
                {isOpenFindWork && (
                  <ul className='absolute left-0 w-40 bg-white text-gray-800 shadow-lg'>
                    <li><NavLink to='' className='block px-4 py-2 hover:bg-gray-100'>Browse jobs</NavLink></li>
                  </ul>
                )}
              </li>
            </ul>
            <ul className='mt-3'>
              <li className='relative group' onMouseEnter={() => setIsOpenEmployer(true)} onMouseLeave={() => setIsOpenEmployer(false)}>
                <button className='uppercase group-hover:bg-[#365126] group-hover:text-white w-28 h-9 rounded-md font-semibold'>Employer </button>
                {isOpenEmployer && (
                  <ul className='absolute left-0 w-40 bg-white text-gray-800 shadow-lg'>
                    <li><NavLink to='' className='block px-4 py-2 hover:bg-gray-100'>Post Job</NavLink></li>
                    <li><NavLink to='' className='block px-4 py-2 hover:bg-gray-100'>Hire a Skill</NavLink></li>
                    <li><NavLink to='' className='block px-4 py-2 hover:bg-gray-100'>Agric-Consult</NavLink></li>
                  </ul>
                )}
              </li>
            </ul>
          </div>

          <div className='flex space-x-9 mt-5'>
            <DarkModeToggle />
            <Link to='signup' className='font-semibold flex items-center text-[18px] hover:text-[#365126]'><UserRound className='mr-2 mt-0.5 w-4 h-4' />Sign Up</Link>
            <Link to='login' className='font-semibold flex items-center text-[18px] hover:text-[#365126]'><LockIcon className='mr-2 mt-0.5 w-4 h-4' />Log In</Link>
          </div>
        </div>
      </div>

      {/* Mobile screens */}
      <div className='lg:hidden nav flex navbar bg-white dark:bg-black w-[100vw] h-[12vh] fixed z-20 justify-between items-center px-3'>
        <img className='w-[150px] h-[34px]' src={logo} alt='logo' />
        <div className='flex space-x-3'>
          <DarkModeToggle/>
        <button  onClick={() => setIsMobileOpen(!isMobileOpen)}>  <Menu className='w-8 h-8' />  </button>
        </div>
       
      </div>
      {isMobileOpen && (
        <div className='lg:hidden navbar fixed top-0 space-y-8 left-0 w-[60vw] h-full bg-white dark:bg-black z-30 p-5 shadow-md'>

          <img className='w-[150px] h-[32.33px]' src={logo} alt="" />

          <div>
            <ul>

              <li className=' border-b border-green-700 w-full'>
                <button onClick={() => setIsOpenFindWork(!isOpenFindWork)} className='font-semibold flex items-center gap-2 uppercase w-full text-left py-2'>Find Work< IoMdArrowDropdown className='w-4 h-4 text-black button' /> </button>
                {isOpenFindWork && (
                  <ul className=''>
                    <li><NavLink to='' className='block px-4 py-2 hover:bg-gray-100'>Browse jobs</NavLink></li>
                  </ul>
                )}
              </li>

              <li className=' border-b border-green-700 w-full'>
                <button onClick={() => setIsOpenEmployer(!isOpenEmployer)} className='uppercase flex items-center gap-2 w-full font-semibold text-left py-2'>Employer <IoMdArrowDropdown className='w-4 h-4 text-black button' /></button>

                {isOpenEmployer && (
                  <ul className=''>
                    <li><NavLink to='' className='block px-4 py-2 hover:bg-gray-100'>Post Job</NavLink></li>
                    <li><NavLink to='' className='block px-4 py-2 hover:bg-gray-100'>Hire a Skill</NavLink></li>
                    <li><NavLink to='' className='block px-4 py-2 hover:bg-gray-100'>Agric-Consult</NavLink></li>
                  </ul>
                )}
              </li>
            </ul>
            <div className='mt-4 flex flex-col space-y-4'>
              <button onClick={() => navigate('/signup')} className='font-semibold border-b border-green-700 flex items-center text-[18px] hover:text-[#365126]'><UserRound className='mr-2 w-4 h-4' />Sign Up</button>

              <button onClick={() => navigate('/login')} className='font-semibold flex items-center text-[18px] hover:text-[#365126]'><LockIcon className='mr-2 w-4 h-4' />Log In</button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default Navbar;
