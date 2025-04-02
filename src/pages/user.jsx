import React, { useState } from 'react';
import Profile from '../subPages/profile';
import CertificateUpload from '../subPages/certificateUpload';
import Interview from '../subPages/interview';
import CVUpload from '../subPages/cvupload';
import IdentificationCard from '../subPages/identificationCard';
import { Link, useNavigate } from 'react-router-dom';

const User = () => {
    const [activeComponent, setActiveComponent] = useState('Profile');
    const navigate = useNavigate();

    const handleOnboardingComplete = () => {
        // Save onboarding completion status
        localStorage.setItem('onboardingComplete', 'true');
        // Navigate to user dashboard
        navigate('/userDashboard');
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case 'Profile':
                return <Profile />;
            case 'CVUpload':
                return <CVUpload />;
            case 'CertificateUpload':
                return <CertificateUpload />;
            case 'Interview':
                return <Interview />;
            case 'IdentificationCard':
                return <IdentificationCard />;
            default:
                return <Profile />;
        }
    };

    return (
        <div className="flex flex-col mt-10 lg:flex-row lg:space-x-16 space-y-8 md:space-y-14 px-6">
            {/* Left Sidebar for Navigation Cards */}
            <div className="space-y-6 md:space-y-8 md:px-6">
                <h1
                    style={{ fontFamily: 'monserat' }}
                    className="text-lg md:text-2xl text-center md:text-left"
                >
                    Take the first step—apply today!
                </h1>

                <div className="w-full flex flex-col md:flex-row md:flex-wrap md:gap-4 lg:flex-col space-y-6 md:space-y-0 lg:space-y-6">
                    {/* Profile Card */}
                    <div
                        onClick={() => setActiveComponent('Profile')}
                        className={`border-2 w-full md:w-48 h-10 rounded-lg border-[#3a5629] shadow transform transition-transform hover:scale-105 shadow-black cursor-pointer ${
                            activeComponent === 'Profile' ? 'bg-gray-300' : ''
                        }`}
                    >
                        <h1
                            style={{ fontFamily: 'monserat' }}
                            className="text-lg md:text-xl text-center pt-1"
                        >
                            Profile
                        </h1>
                    </div>

                    {/* CV Upload Card */}
                    <div
                        onClick={() => setActiveComponent('CVUpload')}
                        className={`border-2 w-full md:w-48 h-10 rounded-lg border-[#3a5629] shadow transform transition-transform hover:scale-105 shadow-black cursor-pointer ${
                            activeComponent === 'CVUpload' ? 'bg-gray-300' : ''
                        }`}
                    >
                        <h1
                            style={{ fontFamily: 'monserat' }}
                            className="text-lg md:text-xl whitespace-nowrap text-center pt-1"
                        >
                            CV Upload
                        </h1>
                    </div>

                    {/* Certificate Upload Card */}
                    <div
                        onClick={() => setActiveComponent('CertificateUpload')}
                        className={`border-2 w-full md:w-48 h-10 rounded-lg border-[#3a5629] shadow transform transition-transform hover:scale-105 shadow-black cursor-pointer ${
                            activeComponent === 'CertificateUpload' ? 'bg-gray-300' : ''
                        }`}
                    >
                        <h1
                            style={{ fontFamily: 'monserat' }}
                            className="text-lg md:text-xl whitespace-nowrap text-center pt-1"
                        >
                            Certificate Upload
                        </h1>
                    </div>

                    {/* Identification Card */}
                    <div
                        onClick={() => setActiveComponent('IdentificationCard')}
                        className={`border-2 w-full md:w-48 h-10 rounded-lg border-[#3a5629] shadow transform transition-transform hover:scale-105 shadow-black cursor-pointer ${
                            activeComponent === 'IdentificationCard' ? 'bg-gray-300' : ''
                        }`}
                    >
                        <h1
                            style={{ fontFamily: 'monserat' }}
                            className="text-lg md:text-xl whitespace-nowrap text-center pt-1"
                        >
                            ID Card Upload
                        </h1>
                    </div>

                    {/* Interview Card */}
                    <div
                        onClick={() => setActiveComponent('Interview')}
                        className={`border-2 w-full md:w-48 h-10 rounded-lg border-[#3a5629] shadow transform transition-transform hover:scale-105 shadow-black cursor-pointer ${
                            activeComponent === 'Interview' ? 'bg-gray-300' : ''
                        }`}
                    >
                        <h1
                            style={{ fontFamily: 'monserat' }}
                            className="text-lg md:text-xl text-center pt-1"
                        >
                            Interview
                        </h1>
                    </div>

                    {/* Submit Button */}
                    <div
                        onClick={handleOnboardingComplete}
                        className="border-2 w-full md:w-48 h-10 rounded-lg border-[#3a5629] shadow transform transition-transform hover:scale-105 shadow-black cursor-pointer"
                    >
                        <h1
                            style={{ fontFamily: 'monserat' }}
                            className="text-lg md:text-xl text-center pt-1"
                        >
                            Submit
                        </h1>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="w-full lg:w-3/5 mt-4 flex items-center h-full">
                {renderComponent()}
            </div>
        </div>
    );
};

export default User;
