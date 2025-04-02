import React, { useState } from 'react';
import CompanyProfile from './companyProfile';
import PostJob from './postJob';
import { useNavigate } from 'react-router-dom';
import { UserRound, Building2, Briefcase, LogOut } from 'lucide-react';
import { FaCamera } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import HiredSkill from './hiredSkill';

const EmployerDashboard = () => {
    const [activeComponent, setActiveComponent] = useState('CompanyProfile');
    const [imagePreview, setImagePreview] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                localStorage.setItem('employerProfileImage', reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Load saved image on component mount
    React.useEffect(() => {
        const savedImage = localStorage.getItem('employerProfileImage');
        if (savedImage) {
            setImagePreview(savedImage);
        }
    }, []);

    const renderComponent = () => {
        switch (activeComponent) {
            case 'CompanyProfile':
                return <CompanyProfile />;
            case 'PostJob':
                return <PostJob />;
            case 'HiredSkill':
                return <HiredSkill />;
            default:
                return <CompanyProfile />;
        }
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row md:space-x-20 bg-gray-50">

                <div className="w-full md:w-auto mx-auto md:mx-8 mt-12">

                    <div className="bg-white rounded-lg w-[90%] md:w-72 shadow-2xl space-y-6 mx-auto">

                        <div className='flex flex-col justify-center items-center text-center'>

                            {/* {Profilepicture} */}
                            <div className="relative space-y-2 mt-5">

                                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-gray-300">
                                    {imagePreview ? (
                                        <img
                                            src={imagePreview}
                                            alt="Company Profile"
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

                            <h1 style={{ fontFamily: 'Rubik' }} className="text-[1.2rem] md:text-[1.5rem]">Nnoboa HR LTD</h1>
                            <p className="text-sm md:text-base">Employer</p>

                        </div>

                        <div className="space-y-0">
                            <div
                                onClick={() => setActiveComponent('CompanyProfile')}
                                style={{ fontFamily: 'lato' }}
                                className={`w-full h-14 border-b border-gray-300 cursor-pointer ${activeComponent === 'CompanyProfile' ? 'bg-gray-100 text-[#3a5629] hover:border-[#3a5629] border-l-2' : ''}`}
                            >
                                <div className="flex space-x-1.5 mx-6 text-center">
                                    <Building2 className="w-6 h-6 mt-3.5" />
                                    <h1 style={{ fontFamily: 'lato' }} className="text-[1rem] mt-3.5">Company Profile</h1>
                                </div>
                            </div>

                            <div
                                onClick={() => navigate('/hire')}
                                style={{ fontFamily: 'lato' }}
                                className={`w-full h-14 border-b border-gray-300 cursor-pointer ${activeComponent === 'HireSkill' ? 'bg-gray-100 text-[#3a5629] hover:border-[#3a5629] border-l-2' : ''}`}
                            >
                                <div className="flex space-x-1.5 mx-6 text-center">
                                    <UserRound className="w-6 h-6 mt-3.5" />
                                    <h1 style={{ fontFamily: 'lato' }} className="text-[1rem] mt-3.5">Hire Skill</h1>
                                </div>
                            </div>

                            <div
                                onClick={() => setActiveComponent('PostJob')}
                                style={{ fontFamily: 'lato' }}
                                className={`w-full h-14 border-b border-gray-300 cursor-pointer ${activeComponent === 'PostJob' ? 'bg-gray-100 text-[#3a5629] hover:border-[#3a5629] border-l-2' : ''}`}
                            >
                                <div className="flex space-x-1.5 mx-6 text-center">
                                    <Briefcase className="w-6 h-6 mt-3.5" />
                                    <h1 style={{ fontFamily: 'lato' }} className="text-[1rem] mt-3.5">Post Job</h1>
                                </div>
                            </div>

                            <div
                                onClick={() => setActiveComponent('HiredSkill')}
                                style={{ fontFamily: 'lato' }}
                                className={`w-full h-14 border-b border-gray-300 cursor-pointer ${activeComponent === 'HiredSkill' ? 'bg-gray-100 text-[#3a5629] hover:border-[#3a5629] border-l-2' : ''}`}
                            >
                                <div className="flex space-x-1.5 mx-6 text-center">
                                    <UserRound className="w-6 h-6 mt-3.5" />
                                    <h1 style={{ fontFamily: 'lato' }} className="text-[1rem] mt-3.5">Hired Skill</h1>
                                </div>
                            </div>

                            <div onClick={() => navigate('/')} style={{ fontFamily: 'lato' }} className="w-full h-14 border-b border-gray-300 cursor-pointer">
                                <div className="flex space-x-1.5 mx-6 text-center">
                                    <AiOutlineLogout className="w-6 h-6 mt-3.5" />
                                    <h1 style={{ fontFamily: 'lato' }} className="text-[1rem] mt-3.5">Logout</h1>
                                </div>
                            </div>

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

export default EmployerDashboard;