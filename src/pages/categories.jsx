import React, { useEffect, useState } from 'react'
import K from '../constants';
import { div } from 'framer-motion/client';
import { MoveLeft, MoveRight } from 'lucide-react';


const Categories = () => {
  const [count1800, setCount1800] = useState(0);
  const [count4500, setCount4500] = useState(0);
  const [count1500, setCount1500] = useState(0);

  useEffect(() => {
    if (count1800 < 1800) {
      const interval1800 = setInterval(() => {
        setCount1800(prevCount => prevCount + 4);
      }, 10); // 1-second interval for 5
      return () => clearInterval(interval1800);
    }
  }, [count1800]);

  useEffect(() => {
    if (count4500 < 4500) {
      const interval4500 = setInterval(() => {
        setCount4500(prevCount => prevCount + 10);
      }, 10); // 1-second interval for 10
      return () => clearInterval(interval4500);
    }
  }, [count4500]);

  useEffect(() => {
    if (count1500 < 1500) {
      const interval1500 = setInterval(() => {
        setCount1500(prevCount => prevCount + 4);
      }, 10); // 1-second interval for 20
      return () => clearInterval(interval1500);
    }
  }, [count1500]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1); // Default to 1 card for mobile

  // Total number of cards
  const totalCards = K.CATEGORIES.length;

  // Function to handle next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalCards - cardsToShow + 1));
  };

  // Function to handle previous button click
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalCards - cardsToShow : prevIndex - 1
    );
  };

  // Adjust number of cards to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1); // 1 card on mobile screens
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2); // 2 cards on tablet screens
      } else if (window.innerWidth < 1280) {
        setCardsToShow(3); // 3 cards on laptop screens
      } else {
        setCardsToShow(4); // 4 cards on desktop screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial value
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className='md:mt-20 mt-12 space-y-12'>

      <div className=' lg:flex space-y-3 mx-4 md:mx-5 md:flex xl:mx-20 xl:space-x-[29rem] lg:space-x-[20rem] md:space-x-[7rem]  md:mr-0 ml-[3.2rem] ' >

        <div className='flex flex-col text-left'>
          <span style={{ fontFamily: 'rubik' }} className='xl:text-[2rem] lg:text-[2rem] text-[1.6rem]  md:text-[1.9rem] font-medium'>Popular Categories</span>
          <span className='xl:text-[1.13rem] lg:[1.13rem]  md:text-[1rem]'>20+ Categories work wating for you</span>
        </div>

        <div className='flex space-x-10'>
          <div className='flex flex-col'>
            <span style={{ fontFamily: 'rubik' }} className='xl:text-[2rem] text-[1.3rem] lg:text-[2rem] md:text-[1.8rem] font-medium' > {count1800}</span>
            <span className='xl:text-[1.13rem] lg:[1.13rem] text-[0.9rem] md:text-[1rem] '>Jobs Posted</span>
          </div>

          <div className='flex flex-col'>
            <span style={{ fontFamily: 'rubik' }} className='xl:text-[2rem] text-[1.3rem] lg:text-[2rem] md:text-[1.8rem] font-medium'> {count4500}</span>
            <span className='xl:text-[1.13rem] lg:[1.13rem] text-[0.9rem] md:text-[1rem] '>Tasks Posted</span>
          </div>

          <div className='flex flex-col'>
            <span style={{ fontFamily: 'rubik' }} className='xl:text-[2rem] text-[1.3rem] lg:text-[2rem] md:text-[1.8rem] font-medium' >{count1500}</span>
            <span className='xl:text-[1.13rem] lg:[1.13rem] text-[0.9rem] md:text-[1rem] '>Internships</span>
          </div>

        </div>

      </div>


      <div className="relative">

        {/* Cards Container */}
        <div className="flex justify-center items-center space-x-5 overflow-hidden">
          {K.CATEGORIES.slice(currentIndex, currentIndex + cardsToShow).map(
            (categories, index) => (
              
              <div key={index} className="w-64  md:w-72 h-[37vh] md:h-[39vh] xl:h-[35vh] lg:h-[38vh] flex-shrink-0" >

                <div className="flex bg-[#3a5629]  w-full h-full flex-col rounded-2xl transform transition-transform hover:scale-90 shadow shadow-black justify-center items-center space-y-5 lg:pt-2 md:pt-5 pt-4">
                  <div className="text-4xl md:text-6xl text-white">{categories.icon}</div>
                  <div className="flex flex-col space-y-2 text-center text-white">
                    <span style={{ fontFamily: "lato" }} className="text-base md:text-[18px]">
                      {categories.postion}
                    </span>
                    <span style={{ fontFamily: "lato" }} className="text-sm md:text-[16px]">
                      {categories.open}
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Arrow Buttons */}
        <div className="flex justify-center items-center space-x-4 mt-6 md:hidden">
          {/* Left Arrow Button (Mobile Only) */}
          {currentIndex > 0 && (
            <button
              onClick={handlePrevious}
              className="bg-[#3a5629] p-2 rounded-full shadow-lg z-10"
            >
              <MoveLeft className="w-6 h-6 text-white" />
            </button>
          )}

          {/* Right Arrow Button (Mobile Only) */}
          {currentIndex < totalCards - cardsToShow && (
            <button
              onClick={handleNext}
              className="bg-[#3a5629] p-2 rounded-full shadow-lg z-10"
            >
              <MoveRight className="w-6 h-6 text-white" />
            </button>
          )}
        </div>

        {/* Left Arrow Button (Tablet and Larger Screens) */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrevious}
            className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#3a5629] p-2 rounded-full shadow-lg z-10"
          >
            <MoveLeft className="w-6 h-6 text-white" />
          </button>
        )}

        {/* Right Arrow Button (Tablet and Larger Screens) */}
        {currentIndex < totalCards - cardsToShow && (
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#3a5629] p-2 rounded-full shadow-lg z-10"
          >
            <MoveRight className="w-6 h-6 text-white" />
          </button>
        )}

      </div>

    </div>
  )
}

export default Categories