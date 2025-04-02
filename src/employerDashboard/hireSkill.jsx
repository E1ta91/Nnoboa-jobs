import React from 'react';
import { Link } from 'react-router-dom';

const HireSkill = () => {
    const professionals = [
        {
            id: 1,
            name: "John Mensah",
            title: "Frontend Developer",
            skill1: 'React',
            skill2: 'Nodejs',
            skill3: 'TypeScript',
            experience: '5 years experience',
            location: 'Accra',
            button: 'Contact',
            path: '/user'
        },
        {
            id: 2,
            name: "Sarah Addo",
            title: "UI/UX Designer",
            skill1: 'React',
            skill2: 'Nodejs',
            skill3: 'TypeScript',
            experience: '5 years experience',
            location: 'Accra',
            button: 'Contact',
            path: '/user'
        },
        {
            id: 3,
            name: "Kwame Owusu",
            title: "Backend Developer",
            skill1: 'React',
            skill2: 'Nodejs',
            skill3: 'TypeScript',
            experience: '5 years experience',
            location: 'Accra',
             button: 'Contact',
            path: '/user'
        },
        {
            id: 4,
            name: "Ama Serwaa",
            title: "Mobile Developer",
            skill1: 'React',
            skill2: 'Nodejs',
            skill3: 'TypeScript',
            experience: '5 years experience',
            location: 'Accra',
            button: 'Contact',
            path: '/user'
        },
        {
            id: 5,
            name: "David Asante",
            title: "DevOps Engineer",
            skill1: 'React',
            skill2: 'Nodejs',
            skill3: 'TypeScript',
            experience: '5 years experience',
            location: 'Accra',
            button: 'Contact',
            path: '/user'
        },
        {
            id: 6,
            name: "Grace Mensah",
            title: "Full Stack Developer",
            skill1: 'React',
            skill2: 'Nodejs',
            skill3: 'TypeScript',
            experience: '5 years experience',
            location: 'Accra',
             button: 'Contact',
            path: '/user'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-semibold text-[#3a5629]">Hire Skilled Professionals</h1>
                </div>

                {/* Results Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Professional Cards */}
                    {professionals.map((professional) => (
                        <div key={professional.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-center mb-4">

                                    <img className="w-12 h-12 bg-gray-200 rounded-lg"/>

                                    <div className="ml-4">
                                        <Link to={professional.path} className="text-lg font-semibold">{professional.name}</Link>
                                        <p className="text-gray-600">{professional.title}</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">{professional.skill1}</span>
                                        <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">{professional.skill2}</span>
                                        <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">{professional.skill3}</span>
                                    </div>
                                    <p className="text-gray-600">{professional.experience}</p>
                                    <p className="text-gray-600">{professional.location}</p>
                                </div>
                                <button className="mt-4 w-full md:w-48 bg-[#3a5629] text-white py-2 px-4 rounded-md hover:bg-[#2a3f1e] transition-colors">
                                   {professional.button}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HireSkill; 