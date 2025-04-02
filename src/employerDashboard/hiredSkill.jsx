import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaClock } from 'react-icons/fa';

const HiredSkill = () => {
    // Mock data - replace with actual data from your backend
    const [hiredSkills, setHiredSkills] = useState([
        {
            id: 1,
            professionalName: "John Doe",
            skill: "Full Stack Developer",
            status: "pending",
            date: "2024-03-15",
            avatar: "https://ui-avatars.com/api/?name=John+Doe&background=random",
            skills: ["React", "Node.js", "MongoDB"]
        },
        {
            id: 2,
            professionalName: "Jane Smith",
            skill: "UI/UX Designer",
            status: "accepted",
            date: "2024-03-14",
            avatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=random",
            skills: ["Figma", "Adobe XD", "User Research"]
        },
        {
            id: 3,
            professionalName: "Mike Johnson",
            skill: "DevOps Engineer",
            status: "rejected",
            date: "2024-03-13",
            avatar: "https://ui-avatars.com/api/?name=Mike+Johnson&background=random",
            skills: ["AWS", "Docker", "Kubernetes"]
        }
    ]);

    const [filter, setFilter] = useState('all');

    const getStatusIcon = (status) => {
        switch (status) {
            case 'accepted':
                return <FaCheckCircle className="text-green-500 text-lg" />;
            case 'rejected':
                return <FaTimesCircle className="text-red-500 text-lg" />;
            default:
                return <FaClock className="text-yellow-500 text-lg" />;
        }
    };

    const getStatusBadgeColor = (status) => {
        switch (status) {
            case 'accepted':
                return 'bg-green-100 text-green-800';
            case 'rejected':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-yellow-100 text-yellow-800';
        }
    };

    const filteredSkills = hiredSkills.filter(skill => {
        return filter === 'all' || skill.status === filter;
    });

  return (
        <div className="w-full p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-[#3a5629]">Hired Skills</h2>
                    <select
                        className="px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#3a5629]"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="all">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="accepted">Accepted</option>
                        <option value="rejected">Rejected</option>
                    </select>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:flex md:flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                    {filteredSkills.map((skill) => (
                        <div key={skill.id} className="bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="relative">
                                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg font-semibold text-gray-600">
                                                {skill.professionalName.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div className="absolute -bottom-0.5 -right-0.5">
                                                {getStatusIcon(skill.status)}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 text-base">{skill.professionalName}</h3>
                                            <p className="text-sm text-gray-600">{skill.skill}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {skill.status === 'accepted' && (
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-600">Hired Date:</span>
                                            <span className="text-sm text-gray-900">{skill.date}</span>
                                        </div>
                                    )}
                                    <div>
                                        <span className="text-sm text-gray-600 block mb-3">Skills:</span>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.skills.map((exp, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700"
                                                >
                                                    {exp}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-100">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeColor(skill.status)}`}>
                                        {skill.status.charAt(0).toUpperCase() + skill.status.slice(1)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredSkills.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-base">No hired skills found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HiredSkill;