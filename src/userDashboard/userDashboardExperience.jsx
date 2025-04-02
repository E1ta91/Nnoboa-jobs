import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSave, FaCheck, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const UserDashboardExperience = () => {
    const navigate = useNavigate();
    const [experiences, setExperiences] = useState([]);
    const [currentExperience, setCurrentExperience] = useState({
        jobTitle: '',
        company: '',
        startDate: '',
        endDate: ''
    });
    const [editIndex, setEditIndex] = useState(null);
    const [showForm, setShowForm] = useState(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentExperience(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        if (currentExperience.jobTitle && currentExperience.company && currentExperience.startDate) {
            if (editIndex !== null) {
                // Update existing experience
                const updatedExperiences = [...experiences];
                updatedExperiences[editIndex] = currentExperience;
                setExperiences(updatedExperiences);
                setEditIndex(null);
            } else {
                // Add new experience
                setExperiences(prev => [...prev, currentExperience]);
            }
            
            setCurrentExperience({
                jobTitle: '',
                company: '',
                startDate: '',
                endDate: ''
            });
            setShowForm(false);
        }
    };

    const handleEdit = (index) => {
        setCurrentExperience(experiences[index]);
        setEditIndex(index);
        setShowForm(true);
    };

    const handleDelete = (index) => {
        setExperiences(experiences.filter((_, i) => i !== index));
    };

    const handleDone = () => {
        // Here you would typically make an API call to save all user data
        // For now, we'll just navigate to the user page
        // You can add the actual API integration later
        navigate('/user');
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'Present';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl mx-auto p-6 space-y-8"
        >
            <div className="flex flex-col space-y-5 justify-between items-center lg:flex-row md:flex-col md:space-y-5">

                <h2 className="text-2xl font-semibold whitespace-nowrap text-[#2a5629]">Work Experience</h2>

                <div className="flex gap-4 ">
                    {!showForm && (
                        <button
                            onClick={() => setShowForm(true)}
                            className="flex items-center gap-2 bg-[#3a5629] text-white px-6 py-2 rounded-lg hover:bg-[#2a3f1e] transition-colors"
                        >
                            <FaPlus className="w-4 h-4" />
                            Add Experience
                        </button>
                    )}
                    <button
                        onClick={handleDone}
                        className="flex items-center gap-2 bg-[#2a5629] text-white px-6 py-2 rounded-lg hover:bg-[#1a3f1e] transition-colors"
                    >
                        <FaCheck className="w-4 h-4" />
                        Done
                    </button>
                </div>
            </div>

            {/* Experience Form */}
            {showForm && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-6 rounded-lg shadow-md space-y-4"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Job Title
                            </label>
                            <input
                                type="text"
                                name="jobTitle"
                                value={currentExperience.jobTitle}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#3a5629] focus:border-transparent"
                                placeholder="Enter job title"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Company
                            </label>
                            <input
                                type="text"
                                name="company"
                                value={currentExperience.company}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#3a5629] focus:border-transparent"
                                placeholder="Enter company name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Start Date
                            </label>
                            <input
                                type="date"
                                name="startDate"
                                value={currentExperience.startDate}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#3a5629] focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                End Date
                            </label>
                            <input
                                type="date"
                                name="endDate"
                                value={currentExperience.endDate}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#3a5629] focus:border-transparent"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end gap-4">
                        <button
                            onClick={() => {
                                setShowForm(false);
                                setCurrentExperience({
                                    jobTitle: '',
                                    company: '',
                                    startDate: '',
                                    endDate: ''
                                });
                                setEditIndex(null);
                            }}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="flex items-center gap-2 bg-[#3a5629] text-white px-6 py-2 rounded-lg hover:bg-[#2a3f1e] transition-colors"
                        >
                            <FaSave className="w-4 h-4" />
                            {editIndex !== null ? 'Update Experience' : 'Save Experience'}
                        </button>
                    </div>
                </motion.div>
            )}

            {/* Experience Preview */}
            <div className="space-y-4">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">{exp.jobTitle}</h3>
                                <p className="text-[#3a5629] font-medium">{exp.company}</p>
                                <p className="text-sm text-gray-500">
                                    {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleEdit(index)}
                                    className="p-2 text-gray-500 hover:text-[#3a5629] transition-colors"
                                >
                                    <FaEdit className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                                >
                                    <FaTrash className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default UserDashboardExperience;