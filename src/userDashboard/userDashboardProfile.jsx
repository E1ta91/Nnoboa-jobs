import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {  FiSave } from 'react-icons/fi';

const UserDashboardProfile = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    title: '',
    languages: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    experience: '',
    skills: ''
  });


  const [isSaving, setIsSaving] = useState(false);
  const [formProgress, setFormProgress] = useState(0);

  // Calculate form completion progress
  useEffect(() => {
    const filledFields = Object.values(formData).filter(value => value !== '').length;
    const totalFields = Object.keys(formData).length;
    setFormProgress((filledFields / totalFields) * 100);
  }, [formData]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

 

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
  
    
    console.log('Form Data Saved:', formData);
    setIsSaving(false);
    alert('Profile saved successfully!');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='space-y-7 max-w-4xl mx-auto p-6'
    >
      <div className="flex justify-between items-center">
        <h1 style={{ fontFamily: 'Monserat' }} className='text-2xl text-[#2a5629]'>Profile</h1>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Profile Completion</span>
          <span className="text-sm font-medium text-[#3A5629]">{Math.round(formProgress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${formProgress}%` }}
            className="bg-[#3A5629] h-2.5 rounded-full transition-all duration-300"
          />
        </div>
      </div>

      <form className='space-y-6' onSubmit={handleSubmit}>
       
        <div className="flex flex-col space-y-6 md:flex-col lg:flex-row lg:space-x-20 md:space-x-0">
          <div className="space-y-2 flex flex-col">
            <label htmlFor="name" className="text-[#3a5629] font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name..."
              autoComplete="name"
              className="md:w-80 w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2 flex flex-col">
            <label className="text-[#3a5629] font-medium">Age</label>
            <input
              type="text"
              id="age"
              placeholder='Age'
              className="md:w-80 w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black"
              required
              value={formData.age}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-6 md:flex-col lg:flex-row lg:space-x-20 md:space-x-0">
          <div className="space-y-2 flex flex-col">
            <label htmlFor="title" className="text-[#3a5629] font-medium">
              Professional Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter your professional title..."
              autoComplete="title"
              className="md:w-80 w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black"
              required
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2 flex flex-col">
            <label className="text-[#3a5629] font-medium">Languages</label>
            <input
              type="text"
              id="languages"
              placeholder='Type the languages you speak'
              className="md:w-80 w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black"
              required
              value={formData.languages}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-6 md:flex-col lg:flex-row lg:space-x-20 md:space-x-0">
          <div className="space-y-2 flex flex-col">
            <label className="text-[#3a5629] font-medium">Experience</label>
            <input
              type="text"
              id="experience"
              placeholder="Enter your years of experience"
              className="md:w-80 w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black"
              required
              value={formData.experience}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2 flex flex-col">
            <label className="text-[#3a5629] font-medium">Skills</label>
            <input
              type="text"
              id="skills"
              placeholder="Enter your skills (comma separated)"
              className="md:w-80 w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black"
              required
              value={formData.skills}
              onChange={handleInputChange}
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
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2 flex flex-col">
            <label className="text-[#3a5629] font-medium">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="md:w-80 w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black"
              required
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-6 md:flex-col lg:flex-row lg:space-x-20 md:space-x-0">
          <div className="space-y-2 flex flex-col">
            <label className="text-[#3a5629] font-medium">Street Address</label>
            <input
              type="text"
              id="streetAddress"
              placeholder="Enter your address"
              className="md:w-80 w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black"
              required
              value={formData.streetAddress}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2 flex flex-col">
            <label className="text-[#3a5629] font-medium">City</label>
            <input
              type="text"
              id="city"
              placeholder="Enter your city"
              className="md:w-80 w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black"
              required
              value={formData.city}
              onChange={handleInputChange}
            />
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

export default UserDashboardProfile;