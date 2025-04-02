import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSave } from 'react-icons/fi';

const Profile = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        email: '',
        phone: '',
        address: '',
        city: ''
    });

    const [isSaving, setIsSaving] = useState(false);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log('Form Data:', formData);
        setIsSaving(false);
        alert('Profile saved successfully!');
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-7 max-w-4xl mx-auto p-6"
        >
            <div className="flex justify-between items-center">
                <h1 style={{ fontFamily: 'Monserat' }} className="text-2xl text-[#2a5629]">
                    Profile
                </h1>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-6 md:space-y-6">
                    <div className="flex flex-col space-y-6 md:flex-col lg:flex-row lg:space-x-20 md:space-x-0">
                        <div className="space-y-2 flex flex-col">
                            <label htmlFor="fullName" className="text-[#3a5629] font-medium">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                placeholder="Enter your full name..."
                                className="md:w-80 w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="space-y-2 flex flex-col">
                            <label className="text-[#3a5629] font-medium">Date of Birth</label>
                            <input
                                type="date"
                                id="dateOfBirth"
                                className="md:w-80 w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black"
                                value={formData.dateOfBirth}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-6 md:flex-col lg:flex-row lg:space-x-20 md:space-x-0">
                        <div className="space-y-2 flex flex-col">
                            <label className="text-[#3a5629] font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="md:w-80 w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="space-y-2 flex flex-col">
                            <label className="text-[#3a5629] font-medium">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Enter your phone number"
                                className="md:w-80 w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-6 md:flex-col lg:flex-row lg:space-x-20 md:space-x-0">
                        <div className="space-y-2 flex flex-col">
                            <label className="text-[#3a5629] font-medium">Address</label>
                            <input
                                type="text"
                                id="address"
                                placeholder="Enter your address"
                                className="md:w-80 w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="space-y-2 flex flex-col">
                            <label className="text-[#3a5629] font-medium">City</label>
                            <input
                                type="text"
                                id="city"
                                placeholder="Enter your city"
                                className="md:w-80 w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black"
                                value={formData.city}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Save Button */}
                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSaving}
                    className={`w-28 sm:w-24 h-11 bg-[#3A5629] text-white rounded-sm hover:bg-gray-500 transition duration-200 flex items-center justify-center gap-2 ${
                        isSaving ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                >
                    {isSaving ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Saving...
                        </>
                    ) : (
                        <>
                            <FiSave size={18} />
                            Save
                        </>
                    )}
                </motion.button>
            </form>
        </motion.div>
    );
};

export default Profile;
