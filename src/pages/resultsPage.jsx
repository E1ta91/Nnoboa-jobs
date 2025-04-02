import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import j3 from '../assets/images/j3.jpg';
import { useState } from "react";
import r1 from '../assets/images/r1.svg'
import r2 from '../assets/images/r2.svg'
import r3 from '../assets/images/r3.svg'
import r4 from '../assets/images/r4.svg'
import r5 from '../assets/images/r5.svg'
import r6 from '../assets/images/r6.png'

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const searchLocation = queryParams.get("location") || "";
  const searchSector = queryParams.get("sector") || "";
  const searchKeyword = queryParams.get("keyword") || "";

  const [searchInput, setSearchInput] = useState("");
  const [locationInput, setLocationInput] = useState("");

  // Sample Data with Company Name, Job Type, and Company Logo
  const data = [
    {
      id: 1,
      name: "Farm Worker",
      location: "Accra",
      sector: "agriculture",
      companyName: "Green Farms Ltd",
      jobType: "Full-Time",
      companyLogo: [r1], // Placeholder logo URL
    },
    {
      id: 2,
      name: "Software Engineer",
      location: "Kumasi",
      sector: "technology",
      companyName: "Tech Innovators Inc",
      jobType: "Contract",
      companyLogo: [r2], // Placeholder logo URL
    },
    {
      id: 3,
      name: "Teacher",
      location: "Tamale",
      sector: "education",
      companyName: "Bright Future Academy",
      jobType: "Part-Time",
      companyLogo: [r3], // Placeholder logo URL
    },
    {
      id: 4,
      name: "Nurse",
      location: "Cape Coast",
      sector: "health",
      companyName: "HealthCare Plus",
      jobType: "Full-Time",
      companyLogo: [r4], // Placeholder logo URL
    },
    {
      id: 5,
      name: "Agricultural Specialist",
      location: "Accra",
      sector: "agriculture",
      companyName: "AgroTech Solutions",
      jobType: "Full-Time",
      companyLogo: [r5], // Placeholder logo URL
    },
  ];

  // Filter Data Based on Search Criteria
  const filteredResults = data.filter((item) => {
    return (
      (searchLocation === "" || item.location.toLowerCase().includes(searchLocation.toLowerCase())) &&
      (searchSector === "" || item.sector === searchSector) &&
      (searchKeyword === "" || item.name.toLowerCase().includes(searchKeyword.toLowerCase()))
    );
  });

  // Handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/results?keyword=${searchInput}&location=${locationInput}`);
  };

  // Handle "All" Button Click
  const handleShowAll = () => {
    setSearchInput("");
    setLocationInput("");
    navigate("/results");
  };

  return (
    <div className="home">
      <Navbar />

      {/* Background Image with Search Bar */}
      <div
        className="relative flex justify-center shrink-0 items-center w-full  text-center overflow-x-hidden"
        style={{
          backgroundImage: `url(${j3})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          height: '60vh'
        }}
      >
        {/* Overlay */}
        <div className="hero bg-black opacity-40 absolute inset-0 z-0"></div>

        {/* Search Bar */}
        <div className="relative z-10 bg-[#656A84]/70 w-[90vw] flex justify-center items-center  max-w-4xl mx-auto h-[17vh] mt-14 p-4 rounded-lg">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">

            {/* Inputs and Search Button Container */}
            <div className="flex w-full md:w-[55vw] bg-white h-14 rounded-lg shadow-lg ">

              {/* Job Title Input */}
              <input
                type="text"
                placeholder="Search by job title"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full px-3  recentbg  py-2  input border-none outline-none text-gray-800 rounded-l-lg"
              />

              {/* Location Input (No Border on Mobile) */}
              <input
                type="text"
                placeholder="Search by location..."
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                className="w-full px-3 py-2 recentbg input outline-none text-gray-800 md:border-l border-gray-300"
              />

              {/* Search Button */}
              <button
                type="submit"
                className="bg-[#3A5629]  px-4 py-2 text-white hover:bg-[#2a4120] transition duration-200 rounded-r-lg"
              >
                Search
              </button>
            </div>

            {/* "All Jobs" Button */}
            <button
              type="button"
              onClick={handleShowAll}
              className="bg-[#141621] whitespace-nowrap text-white px-4 py-2 hover:bg-gray-600 transition duration-200 rounded-md w-full md:w-auto"
            >
              All Jobs
            </button>

          </form>
        </div>

      </div>

      {/* Search Results */}
      <div className="container mx-auto px-4  py-8">


        {filteredResults.length > 0 ? (
          filteredResults.map((item) => (
            <Link to='/job-information' key={item.id} className="bg-[#ecedf3] border-l-[5px] border-[#eceef7]  hover:border-[#3a5629] recent  p-6 lg:mx-[10rem] md:mx-10 rounded-lg shadow-xl mb-4 flex justify-between items-center ">

              {/* Job Details */}
              <div className="flex flex-col space-y-2 ">
                <h3 style={{ fontFamily: 'monserat' }} className="text-xl text-[#3a5629] font-semibold input ">{item.name}</h3>
                <p className="text-gray-600 input">{item.companyName}</p>
                <p className="text-gray-600 input">{item.location} ({item.sector})</p>
                <p className="text-gray-600 input"> {item.jobType}</p>
              </div>

              {/* Company Logo */}
              <img
                src={item.companyLogo}
                alt={`${item.companyName} logo`}
                className="w-16 h-16 rounded-full object-cover"
              />

            </Link>
          ))
        ) : (
          <p className="text-gray-600">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;