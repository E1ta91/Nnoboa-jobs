import React from 'react'
import K from '../constants'

import { FaEnvelope, FaBriefcase, FaClock, FaUser } from 'react-icons/fa';

const ConsultProfile = () => {
  return (

    <div className='bg-gray-100 ' >
      <div className='space-y-6 pt-6 '>

        <h1 style={{ fontFamily: 'monserat' }} className='text-3xl text-center'>Connect with Our Experts</h1>



        {/* // ... in your component */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
          {K.CONSULT.map((consult, index) => (
            <div key={index} className='group'>
              <div className='border border-gray-100 w-full h-full rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden'>
                <div className='p-5'>
                  
                  <div className='flex items-center mb-4'>
                    <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#2a7a27] via-[#2a5629] to-[#1e421d] flex items-center justify-center text-white font-bold text-xl mr-3'>
                      <FaUser className="text-xl" />
                    </div>
                    <div>
                      <h3 className='font-semibold text-lg text-gray-800'>{consult.name}</h3>
                      <p className='text-sm text-gray-500'>{consult.title}</p>
                    </div>
                  </div>

                  <div className='space-y-3 text-sm'>
                    <div className='flex items-center'>
                      <FaEnvelope className='w-4 h-4 text-[#2a7a27] mr-2' />
                      <a href={`mailto:${consult.email}`} className='text-[#2a7a27] hover:underline'>{consult.email}</a>
                    </div>

                    <div className='flex items-center'>
                      <FaBriefcase className='w-4 h-4 text-[#2a5629] mr-2' />
                      <span className='text-gray-600'>{consult.industry}</span>
                    </div>

                    <div className='flex items-center'>
                      <FaClock className='w-4 h-4 text-[#1e421d] mr-2' />
                      <span className='text-gray-600'>{consult.years} years experience</span>
                    </div>
                  </div>

                  <button className='mt-5 w-full py-2.5 bg-gradient-to-r from-[#2a7a27] via-[#2a5629] to-[#1e421d] text-white rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center font-medium'>
                    <FaEnvelope className="mr-2" />
                    Contact Consultant
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>

  )
}

export default ConsultProfile