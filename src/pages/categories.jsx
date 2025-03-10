import React, { useEffect, useState } from 'react'

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
  return (
    <div className='mt-20'>
       <div className='flex justify-between mx-32' >

        <div className='flex flex-col'>
            <span style={{fontFamily: 'rubik'}} className='text-[2rem] font-medium'>Popular Categories</span>
            <span  className='text-[1.13rem]'>20+ Categories work wating for you</span>
        </div>

      <div className='flex space-x-10'>
        <div className='flex flex-col'>
            <span style={{fontFamily: 'rubik'}} className='text-[2rem] font-medium' > {count1800}</span>
            <span   className='text-[1.13rem]'>Jobs Posted</span>
        </div>

        <div className='flex flex-col'>
        <span style={{fontFamily: 'rubik'}} className='text-[2rem] font-medium'> {count4500}</span>
        <span   className='text-[1.13rem]'>Tasks Posted</span>
        </div>

        <div className='flex flex-col'>
        <span style={{fontFamily: 'rubik'}} className='text-[2rem] font-medium' >{count1500}</span>
        <span   className='text-[1.13rem]'>Internships</span>
        </div>

      </div>
       </div>


       <div></div> 
    </div>
  )
}

export default Categories