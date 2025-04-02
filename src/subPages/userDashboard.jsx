import { IdCard, UserRound } from "lucide-react";
import React, { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { FaCamera } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { Link } from "react-router-dom";
import UserDashboardProfile from "../userDashboard/userDashboardProfile";
import UserDashboardCV from "../userDashboard/userDashboardCV";
import UserDashboardApplied from "../userDashboard/userDashboardApplied";
import UserDashboardExperience from "../userDashboard/userDashboardExperience";


const UserDashboard = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Sets preview URL
      };
      reader.readAsDataURL(file); // Converts file to Base64
    }
  };

  const [activeComponent, setActiveComponent] = useState('Profile');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Profile': return <UserDashboardProfile />
      case 'CV' : return <UserDashboardCV/>
      case 'Experience' : return <UserDashboardExperience/>
      case 'Applied' : return <UserDashboardApplied/>
    }
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row md:space-x-20">
        <div className="w-full md:w-auto mx-auto md:mx-8 mt-12">
          <div className="bg-white rounded-lg w-[90%] md:w-72 shadow-2xl space-y-6 mx-auto">
            <div className='flex flex-col justify-center items-center text-center'>
              <div className="relative space-y-2 mt-5">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-gray-300">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Profile Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500">
                      Add Photo
                    </div>
                  )}
                </div>
                <label
                  htmlFor="profilePicture"
                  className="absolute bottom-2 left-24 transform -translate-x-1/2 md:left-24 md:transform-none bg-[#3a5629] p-2 rounded-full cursor-pointer"
                >
                  <FaCamera className="text-white" />
                  <input
                    type="file"
                    id="profilePicture"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                </label>
              </div>
              <h1 style={{ fontFamily: 'Rubik' }} className="text-[1.2rem] md:text-[1.5rem]">George Bush</h1>
              <p className="text-sm md:text-base">Agronomist</p>
            </div>

            <div className="space-y-0">
              <div onClick={() => setActiveComponent('Profile')} style={{ fontFamily: 'lato' }} className={`w-full h-14 border-b border-gray-300 cursor-pointer ${activeComponent === 'Profile' ? 'bg-gray-100 text-[#3a5629] hover:border-[#3a5629] border-l-2' : ''}`}>
                <div className="flex space-x-1.5 mx-6 text-center">
                  <UserRound className="w-6 h-6 mt-3.5" />
                  <h1 style={{ fontFamily: 'lato' }} className="text-[1rem] mt-3.5">Profile</h1>
                </div>
              </div>

              <div onClick={() => setActiveComponent('CV')} style={{ fontFamily: 'lato' }} className={`w-full h-14 border-b border-gray-300 cursor-pointer ${activeComponent === 'CV' ? 'bg-gray-100 text-[#3a5629] hover:border-[#3a5629] border-l-2' : ''}`}>
                <div className="flex space-x-1.5 mx-6 text-center">
                  <IdCard className="w-6 h-6 mt-3.5" />
                  <h1 style={{ fontFamily: 'lato' }} className="text-[1rem] mt-3.5">CV</h1>
                </div>
              </div>

              <div onClick={() => setActiveComponent('Experience')} style={{ fontFamily: 'lato' }} className={`w-full h-14 border-b border-gray-300 cursor-pointer ${activeComponent === 'Experience' ? 'bg-gray-100 text-[#3a5629] hover:border-[#3a5629] border-l-2' : ''}`}>
                <div className="flex space-x-1.5 mx-6 text-center">
                  <IdCard className="w-6 h-6 mt-3.5" />
                  <h1 style={{ fontFamily: 'lato' }} className="text-[1rem] mt-3.5">Experience</h1>
                </div>
              </div>

              <Link
                to="/jobs"
                onClick={() => setActiveComponent('JobListings')}
                style={{ fontFamily: 'lato' }}
                className={`block w-full h-14 border-b border-gray-300 cursor-pointer ${activeComponent === 'JobListings' ? 'bg-gray-100 text-[#3a5629] hover:border-[#3a5629] border-l-2' : ''}`}
              >
                <div className="flex space-x-1.5 mx-6 text-center">
                  <UserRound className="w-6 h-6 mt-3.5" />
                  <h1 style={{ fontFamily: 'lato' }} className="text-[1rem] mt-3.5">Job Listings</h1>
                </div>
              </Link>

              <div onClick={() => setActiveComponent('Applied')} style={{ fontFamily: 'lato' }} className={`w-full h-14 border-b border-gray-300 cursor-pointer ${activeComponent === 'Applied' ? 'bg-gray-100 text-[#3a5629] hover:border-[#3a5629] border-l-2' : ''}`}>
                <div className="flex space-x-1.5 mx-6 text-center">
                  <FaBriefcase className="w-6 h-6 mt-3.5" />
                  <h1 style={{ fontFamily: 'lato' }} className="text-[1rem] mt-3.5">Applied Jobs</h1>
                </div>
              </div>

              <Link
                to="/" onClick={() => setActiveComponent('logout')} style={{ fontFamily: 'lato' }} className={`block w-full h-14 border-b border-gray-300 cursor-pointer ${activeComponent === 'logout' ? 'bg-gray-100 text-[#3a5629] hover:border-[#3a5629] border-l-2' : ''}`}
              >
                <div className="flex space-x-1.5 mx-6 text-center">
                  <AiOutlineLogout className="w-6 h-6 mt-3.5" />
                  <h1 style={{ fontFamily: 'lato' }} className="text-[1rem] mt-3.5">Logout</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/5 mt-7 md:mt-10 px-4 md:px-0">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
