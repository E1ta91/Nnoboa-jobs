import React, { useState } from "react";
import { Link } from "react-router-dom";
import K from "../constants";
import A1 from "../assets/images/A1.png"
import A2 from "../assets/images/A2.png"

const RecentJobs = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <div className="mt-14 lg:mx-8 md:mx-5 mx-4 xl:mx-20">
            <h1 className="xl:text-[2rem] lg:text-[2rem] text-[1.6rem] md:text-[1.9rem] font-medium" style={{ fontFamily: "Rubik" }}>
                Recent Jobs
            </h1>

            <div className="flex justify-between">
                <h3 className="text-[18px]" style={{ fontFamily: "Rubik" }}>
                    20+ Recently Added Jobs
                </h3>
                <Link to="results" style={{ fontFamily: "robot" }} className="border border-none text-[14.5px] text-center rounded-sm w-32 h-7 pt-1 text-white bg-[#3A5829]">
                    Browse All Jobs
                </Link>
            </div>

            <div className="pt-9 flex flex-col space-y-10 lg:flex-row  lg:space-x-20">

                {/* Job Cards Section */}
                <div className="space-y-10">
                    {K.RECENT.map((recent, index) => {
                        const isSelected = selectedIndex === index;

                        return (
                            <div key={index} className="bg-[#ecedf3] recent xl:h-[30vh] w-full min-h-[50vh] xl:w-[60vw] lg:h-[35vh] lg:w-[80vw] md:w-full md:min-h-[28vh] rounded-md shadow-lg border-l-[6px] border-[#eceef7] hover:border-[#3a5629] cards">
                                <div className="space-y-8 mx-3 lg:mx-10 md:mx-10 pt-8">
                                    <div className="flex justify-between items-center">
                                        <div className="lg:flex-row md:flex lg:space-x-8 md:space-x-8 space-y-2 w-full">
                                            <img className="w-16 h-16" src={recent.img} alt="image" />

                                            <div className="space-y-2">
                                                <h1 style={{ fontFamily: "Rubik" }} className="text-[21px] cards">
                                                    {recent.title}
                                                </h1>

                                                <div className="md:space-x-3 space-x-5 lg:space-x-3 flex">
                                                    <div className="lg:flex lg:space-x-1 md:flex md:space-x-1 flex">
                                                        <span className="flex w-4 h-4 text-[#3a5629] cards">{recent.icon1}</span>
                                                        <span style={{ fontFamily: "lato" }} className="flex text-[15px] cards text-[#3a5629]">
                                                            {recent.location}
                                                        </span>
                                                    </div>

                                                    <div className="flex space-x-1">
                                                        <span className="flex w-4 h-4 text-[#3a5629] cards">{recent.icon2}</span>
                                                        <span style={{ fontFamily: "lato" }} className="flex text-[15px] cards text-[#3a5629]">
                                                            {recent.type}
                                                        </span>
                                                    </div>

                                                    <div className="flex space-x-1">
                                                        <span className="flex w-4 h-4 text-[#3a5629] cards">{recent.icon3}</span>
                                                        <span style={{ fontFamily: "lato" }} className="flex text-[15px] cards text-[#3a5629]">
                                                            {recent.time}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Selectable Icon */}
                                        <div className="cards">
                                            <p onClick={() => setSelectedIndex(isSelected ? null : index)} className={`border lg:mb-8 md:mb-8 mb-28 lg:w-8 lg:h-8 md:w-8 md:h-8 w-11 h-9 rounded-full cursor-pointer transition-all ${isSelected ? "bg-[#3a5629] text-white" : "bg-white"} flex items-center justify-center`}>
                                                <span className="w-5 h-5 flex items-center mt-1 justify-center">{recent.icon}</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="md:flex-row lg:flex-row flex flex-col lg:space-x-[30rem] md:space-x-[24rem] space-y-[1rem]">
                                        <h2 style={{ fontFamily: "robot" }} className="text-[17px] text-[#3a5629] border w-24 text-center outline-none border-none h-7 rounded-md bg-slate-200">
                                            {recent.type2}
                                        </h2>
                                        <p style={{ fontFamily: "Rubik" }} className="text-[22px] cards">
                                            {recent.price}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className='lg:space-y-10 lg:flex-col md:flex-row md:space-x-16 flex flex-col space-y-10 '>
                    <img className="w-[300px] rounded-md shadow" src={A2} alt="img" />
                    <img className="w-[300px] rounded-md shadow" src={A1} alt="img" />

                </div>

            </div>
            
        </div>
    );
};

export default RecentJobs;



