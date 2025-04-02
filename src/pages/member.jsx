import React from 'react';


const Member = () => {
    return (
        <div className="mt-14 relative w-full"> 
            {/* Title Section */}
            <div className="flex flex-col  justify-center items-center text-center space-y-3">
                <h1 style={{ fontFamily: 'rubik' }} className="text-[32px] font-medium">
                    Membership Plans
                </h1>
                <p style={{ fontFamily: 'monserat' }} className="text-[16px] member text-[#494949] lg:mx-30 xl:mx-10 md:mx-0 mx-1">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                    Ipsum <br /> has been the industry's standard dummy.
                </p>
            </div>

            {/* Card Container */}
            <div className=" relative z-10 flex flex-col justify-center md:mx-8  items-center mt-12 lg:flex-row md:flex-row">
                {/* Basic Plan */}
                <div className="flex flex-col inputbg justify-center md:shrink-8 items-center text-center space-y-4 z-10 bg-white w-80 h-[22rem] shadow-2xl">
                    <h2 style={{ fontFamily: 'rubik' }} className="text-[24px] input text-gray-900">
                        Basic
                    </h2>
                    <p style={{ fontFamily: 'monserat' }} className="text-[22px] text-[#a0a0a0] border w-28 border-none rounded-xl h-12 pt-1.5 bg-[#F2F2F2]">
                        Free
                    </p>
                    <p style={{ fontFamily: 'lato' }} className=" mx-6 text-[16px] text-[#6f6f6f]">
                        Lorem ipsum dolor sit amet adipiscing  elit sed do eiusmod tempors labore et  dolore magna siad enim aliqua
                    </p>
                    <button style={{ fontFamily: 'roboto' }} className="text-[16px] text-white bg-[#3a5629] w-32 h-10 rounded-full">
                        Sign Up
                    </button>
                </div>

                {/* Professional Plan */}
                <div className="flex flex-col justify-center md:shrink-8 items-center text-center space-y-4 z-20 bg-[#3a5629] w-80 h-[25rem] shadow-2xl">
                    <h2 style={{ fontFamily: 'rubik' }} className="text-[24px] input text-white">
                        Professional
                    </h2>
                    <div className="border w-44 pt-2 border-none rounded-xl h-12 bg-[#375427]">
                        <span style={{ fontFamily: 'monserat' }} className="text-[22px] text-white">
                            $29
                        </span>
                        <span style={{ fontFamily: 'monserat' }} className="text-white text-[13px]">
                            / Per Installation
                        </span>
                    </div>
                    <p style={{ fontFamily: 'lato' }} className=" mx-6 text-[16px] text-white">
                        Lorem ipsum dolor sit amet adipiscing  elit sed do eiusmod tempors labore et  dolore magna siad enim aliqua
                    </p>
                    <button style={{ fontFamily: 'roboto' }} className="text-[16px] text-[#3a5629] bg-white w-32 h-10 rounded-full">
                        Sign Up
                    </button>
                </div>

                {/* Extended Plan */}
                <div className="flex flex-col inputbg justify-center  items-center md:shrink-8 text-center space-y-4 z-10 bg-white w-80 h-[22rem] shadow-2xl">
                    <h2 style={{ fontFamily: 'rubik' }} className="text-[24px] input text-gray-900">
                        Extended
                    </h2>
                    <div className="border w-44 pt-2 border-none rounded-xl h-12 bg-[#F2F2F2]">
                        <span style={{ fontFamily: 'monserat' }} className="text-[22px] text-[#6f6f6f]">
                            $29
                        </span>
                        <span style={{ fontFamily: 'monserat' }} className="text-[#6f6f6f] text-[13px]">
                            / Per Installation
                        </span>
                    </div>
                    <p style={{ fontFamily: 'lato' }} className=" mx-6 text-[16px] text-[#6f6f6f]">
                        Lorem ipsum dolor sit amet adipiscing  elit sed do eiusmod tempors labore et  dolore magna siad enim aliqua
                    </p>
                    <button style={{ fontFamily: 'roboto' }} className="text-[16px] text-white bg-[#3a5629] w-32 h-10 rounded-full">
                        Sign Up
                    </button>
                </div>

                
            </div>

           
        </div>
    );
};

export default Member;
