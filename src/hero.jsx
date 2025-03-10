import React, { useState } from 'react'
import slide2 from './assets/images/slide2.jpg'
import { useNavigate } from 'react-router-dom';
import { MapPin, Search } from 'lucide-react';

const Hero = () => {
  const [location, setLocation] = useState("");
  const [sector, setSector] = useState("");
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    const queryParams = new URLSearchParams({
      location,
      sector,
      keyword,
    }).toString();

    navigate(`/results?${queryParams}`);
  };
  return (

    <div className="  relative flex justify-center  items-center w-full h-[100vh] text-center overflow-x-hidden "
      style={{
        backgroundImage: `url(${slide2})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: '100vh',

      }}><div className=" hero bg-gradient-to-r from-[#ffffff] to-transparent absolute inset-0 z-0"></div>

      <div className='flex flex-col md:flex lg:flex xl:flex gap-3 absolute xl:botttom-[2rem] md:bottom-[4rem] md:left-[0.5rem] lg:bottom-[8rem] lg:left-[1rem] mx-[6.9rem] pt-32  z-10'>

        <p  className='border border-none text-sm lg:text-sm xl:text-[15px] rounded-sm pt-2 w-72 h-8 text-white bg-[#3A5829]'>Find your place in the future of farming </p>

        <div>

          <h1 style={{fontFamily: 'rubik'}}  className='xl:text-[45px] hero md:text-[40px] text-[25px] lg:text-[45px] text-left font-sans'>Join Ghana's Thriving</h1>

          <h1 className='text-left'>
            <span style={{fontFamily: 'rubik'}}  className="text-[#3A5829] xl:text-[45px] md:text-[40px] text-[25px] lg:text-[45px] ">Agricultural Labour</span>
            <span style={{fontFamily: 'rubik'}}  className="text-black hero xl:text-[45px] md:text-[40px] text-[25px] lg:text-[45px] "> Market</span>
          </h1>


        </div>

        <div className="bg-white  shadow-xl shadow-[#242323] rounded-md w-full h-[48vh] lg:w-[90vw] lg:h-[15vh] xl:w-[80vw] xl:h-[15vh] md:w-[80vw] md:h-[30vh] ">

          <div className="flex flex-col lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 md:space-y-10 space-y-6 md:space-x-10 mx-10 my-6 ">

            <div className="relative ">
              <input
                type="text"
                id='text'
                placeholder="Job title,Keywords"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className=" p-2 border-b-2 border-[#3a5829] w-60 lg:w-56 xl:w-66"
              />
              <Search className="absolute left-[14rem] lg:left-[13rem] top-3.5 xl:left-[15rem] text-[#3A5829] w-4 h-4 " />
            </div>


            <div className="relative">
              <input
                type="text"
                placeholder="City, district or place"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className=" p-2 border-b-2 border-[#3a5829] xl:w-66 w-60 lg:w-56 lg:ml-8"
              />
              <MapPin className="absolute left-[14rem] top-3.5  text-[#3A5829] w-4 h-4 xl:left-[17rem] " />
            </div>

            <select
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="border-b-2 border-[#3a5829] w-60 lg:w-44 lg:ml-16 xl:w-48"
            >
              <option value="">Select Sector</option>
              <option value="crop production">Crop Production</option>
              <option value="livestock production">LiveStock Production</option>
              <option value="agribusiness">Agribusiness</option>
              <option value="finance">Finance</option>
              <option value="agriculture">Agriculture</option>
            </select>

            <button
              onClick={handleSearch}
              className="bg-[#3A5829] md:w-[12rem] md:h-[2.6rem] md:-mt-4 lg:-mt-0 lg:w-[10rem] lg:ml-12 xl:-mt-0 text-white px-4 py-1 rounded hover:bg-[#9FA2A4]"
            >
              Find Work
            </button>
          </div>
        </div>


      </div>



    </div>
  )
}

export default Hero