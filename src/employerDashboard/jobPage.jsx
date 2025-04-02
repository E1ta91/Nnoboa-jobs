import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaBriefcase, FaClock, FaCalendarAlt } from 'react-icons/fa';
import { div } from 'framer-motion/client';

const JobPage = () => {
    // This would typically come from your API/backend
    const [job, setJob] = useState({
        title: "Senior Agricultural Engineer",
        company: "Green Fields Solutions",
        location: "Accra, Ghana",
        type: "Full-time",
        experienceLevel: "Senior Level",
        deadline: "2024-05-30",
        description: "We are seeking an experienced Agricultural Engineer to join our team. The ideal candidate will have extensive knowledge of agricultural systems and sustainable farming practices.",
        requirements: [
            "Bachelor's degree in Agricultural Engineering or related field",
            "Minimum of 5 years experience in agricultural systems",
            "Strong knowledge of irrigation systems and soil management",
            "Experience with sustainable farming practices",
            "Excellent problem-solving and analytical skills"
        ],
        responsibilities: [
            "Design and implement agricultural systems",
            "Oversee farm operations and equipment maintenance",
            "Develop sustainable farming solutions",
            "Collaborate with farmers and agricultural specialists",
            "Monitor and optimize crop production processes"
        ],
        skills: [
            "Agricultural Systems",
            "Irrigation Design",
            "Soil Management",
            "Sustainable Farming",
            "Project Management"
        ]
    });

    return (

        <div className='bg-gray-100'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto p-6 space-y-8  "
            >
                {/* Header Section */}
                <div className="bg-gradient-to-br from-white to-[#469b11] rounded-xl shadow-lg p-8 border border-green-100">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                        <p className="text-xl text-[#3a5629] font-medium">{job.company}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
                        >
                            <FaMapMarkerAlt className="w-6 h-6 text-[#3a5629]" />
                            <div>
                                <p className="text-sm text-gray-500">Location</p>
                                <p className="text-gray-700 font-medium">{job.location}</p>
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
                        >
                            <FaBriefcase className="w-6 h-6 text-[#3a5629]" />
                            <div>
                                <p className="text-sm text-gray-500">Job Type</p>
                                <p className="text-gray-700 font-medium">{job.type}</p>
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
                        >
                            <FaClock className="w-6 h-6 text-[#3a5629]" />
                            <div>
                                <p className="text-sm text-gray-500">Experience Level</p>
                                <p className="text-gray-700 font-medium">{job.experienceLevel}</p>
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
                        >
                            <FaCalendarAlt className="w-6 h-6 text-[#3a5629]" />
                            <div>
                                <p className="text-sm text-gray-500">Application Deadline</p>
                                <p className="text-gray-700 font-medium">{new Date(job.deadline).toLocaleDateString()}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Description Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                >
                    <h2 className="text-2xl font-bold text-[#3a5639] mb-6 pb-3 border-b border-gray-200">Job Description</h2>
                    <p className="text-gray-700 leading-relaxed">{job.description}</p>
                </motion.div>

                {/* Requirements Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                >
                    <h2 className="text-2xl font-bold text-[#3a5639] mb-6 pb-3 border-b border-gray-200">Requirements</h2>
                    <ul className="space-y-4">
                        {job.requirements.map((requirement, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-3 text-gray-700"
                            >
                                <span className="w-2 h-2 mt-2 rounded-full bg-[#3a5629]" />
                                <span>{requirement}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Responsibilities Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                >
                    <h2 className="text-2xl font-bold text-[#3a5639] mb-6 pb-3 border-b border-gray-200">Responsibilities</h2>
                    <ul className="space-y-4">
                        {job.responsibilities.map((responsibility, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-3 text-gray-700"
                            >
                                <span className="w-2 h-2 mt-2 rounded-full bg-[#3a5629]" />
                                <span>{responsibility}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                >
                    <h2 className="text-2xl font-bold text-[#3a5639] mb-6 pb-3 border-b border-gray-200">Required Skills</h2>
                    <div className="flex flex-wrap gap-3">
                        {job.skills.map((skill, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#3a5629] to-[#2a4019] text-white shadow-sm"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>

    );
};

export default JobPage;