import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Mail, MapPin, Phone, Calendar, Award, Languages, Briefcase, ArrowLeft, FileText, Download, X } from 'lucide-react';

const UserPage = () => {
    const navigate = useNavigate();
    const [showCVModal, setShowCVModal] = useState(false);

    // This would typically come from your backend
    const cvUrl = "/path/to/cv.pdf";

    const handleViewCV = () => {
        setShowCVModal(true);
    };

  return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with back button */}
                <button
                    onClick={() => navigate('/hire')}
                    className="flex items-center text-[#3a5629] hover:text-[#2a3f1e] font-medium mb-8 hover:translate-x-[-4px] transition-transform"
                >
                    <ArrowLeft className="w-5 h-5 mr-1" />
                    Back
                </button>

                {/* Main content */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Profile header */}
                    <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-[#ffffff] to-[#3a5629]">
                        <div className="flex items-center gap-6">
                            <img className="w-24 h-24 bg-gray-200 rounded-xl shadow-md"/>
                            <div>
                                <h1 className="text-3xl font-bold text-[#2C3E50]">John Mensah</h1>
                                <p className="text-xl text-[#16A34A] mt-1">Frontend Developer</p>
                                <div className="flex items-center mt-2 text-gray-500">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    Accra, Ghana
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Profile content */}
                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left column */}
                        <div className="space-y-8">
                            {/* Skills section */}
                            <div>
                                <h2 className="text-xl font-bold text-[#16A34A] mb-4 flex items-center">
                                    <span className="bg-[#16A34A]/10 p-2 rounded-lg mr-2">
                                        <Award className="w-5 h-5 text-[#16A34A]" />
                                    </span>
                                    Skills
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-4 py-2 bg-[#16A34A]/5 text-gray-900 rounded-lg text-sm font-medium hover:bg-[#16A34A]/10 transition-colors">React</span>
                                    <span className="px-4 py-2 bg-[#16A34A]/5 text-gray-900 rounded-lg text-sm font-medium hover:bg-[#16A34A]/10 transition-colors">Node.js</span>
                                    <span className="px-4 py-2 bg-[#16A34A]/5 text-gray-900 rounded-lg text-sm font-medium hover:bg-[#16A34A]/10 transition-colors">TypeScript</span>
                                    <span className="px-4 py-2 bg-[#16A34A]/5 text-gray-900 rounded-lg text-sm font-medium hover:bg-[#16A34A]/10 transition-colors">JavaScript</span>
                                    <span className="px-4 py-2 bg-[#16A34A]/5 text-gray-900 rounded-lg text-sm font-medium hover:bg-[#16A34A]/10 transition-colors">HTML/CSS</span>
                                </div>
                            </div>

                            {/* Experience section */}
                            <div>
                                <h2 className="text-xl font-bold text-[#16A34A] mb-4 flex items-center">
                                    <span className="bg-[#16A34A]/10 p-2 rounded-lg mr-2">
                                        <Briefcase className="w-5 h-5 text-[#16A34A]" />
                                    </span>
                                    Experience
                                </h2>
                                <div className="space-y-4 ">
                                    <div className="p-4 shadow rounded-lg bg-gray-100 hover:bg-gray-100 transition-colors">
                                        <h3 className="font-semibold text-lg text-[#2C3E50]">Senior Frontend Developer</h3>
                                        <p className="text-[#16A34A]">Tech Solutions Ltd</p>
                                        <p className="text-sm text-gray-500">2020 - Present</p>
                                    </div>
                                    <div className="p-4 shadow rounded-lg bg-gray-100 hover:bg-gray-100 transition-colors">
                                        <h3 className="font-semibold text-lg text-[#2C3E50]">Frontend Developer</h3>
                                        <p className="text-[#16A34A]">Web Innovations</p>
                                        <p className="text-sm text-gray-500">2018 - 2020</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right column */}
                        <div className="space-y-8">
                            {/* Contact Information */}
                            <div>
                                <h2 className="text-xl font-bold text-[#16A34A] mb-4 flex items-center">
                                    <span className="bg-[#16A34A]/10 p-2 rounded-lg mr-2">
                                        <Mail className="w-5 h-5 text-[#16A34A]" />
                                    </span>
                                    Contact
                                </h2>
                                <div className="space-y-3 p-4 rounded-lg bg-gray-100 shadow">
                                    <div className="flex items-center space-x-3 text-gray-600">
                                        <Mail className="w-5 h-5 text-[#16A34A]" />
                                        <span>john.mensah@example.com</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-gray-600">
                                        <Phone className="w-5 h-5 text-[#16A34A]" />
                                        <span>+233 20 123 4567</span>
                                    </div>
                                </div>
                            </div>

                            {/* Education
                            <div>
                                <h2 className="text-xl font-bold text-[#16A34A] mb-4 flex items-center">
                                    <span className="bg-[#16A34A]/10 p-2 rounded-lg mr-2">
                                        <Award className="w-5 h-5 text-[#16A34A]" />
                                    </span>
                                    Education
                                </h2>

                                <div className='space-y-3'>
                                <div className='space-y-4'>
                                    <div className="p-4 rounded-lg shadow bg-gray-100">
                                        <h3 className="font-semibold text-lg text-[#2C3E50]">BSc in Computer Science</h3>
                                        <p className="text-[#16A34A]">University of Ghana</p>
                                        <p className="text-sm text-gray-500">2014 - 2018</p>
                                    </div>
                                </div>

                                <div className='space-y-4'>
                                    <div className="p-4 rounded-lg shadow bg-gray-100">
                                        <h3 className="font-semibold text-lg text-[#2C3E50]">BSc in Computer Science</h3>
                                        <p className="text-[#16A34A]">University of Ghana</p>
                                        <p className="text-sm text-gray-500">2014 - 2018</p>
                                    </div>
                                </div>

                                </div>
                               
                            </div> */}

                            {/* CV Section */}
                            <div>
                                <h2 className="text-xl font-bold text-[#16A34A] mb-4 flex items-center">
                                    <span className="bg-[#16A34A]/10 p-2 rounded-lg mr-2">
                                        <FileText className="w-5 h-5 text-[#16A34A]" />
                                    </span>
                                    CV
                                </h2>
                                <div className="p-4 rounded-lg shadow bg-gray-100">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-semibold text-lg text-[#2C3E50]">John_Mensah_CV.pdf</h3>
                                            <p className="text-sm text-gray-500">Last updated: June 2023</p>
                                        </div>
                                        <button 
                                            onClick={handleViewCV}
                                            className="flex items-center gap-2 whitespace-nowrap bg-[#16A34A] text-white md:px-1 lg:mx-4 py-2 rounded-lg hover:bg-[#15803D] transition-colors"
                                        >
                                            <FileText className="w-4 h-4" />
                                            View CV
                                        </button>
                                    </div>
                                </div>
                            </div>

                           
                        </div>
                    </div>
                </div>
            </div>

            {/* CV Modal */}
            {showCVModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl w-full max-w-4xl h-[80vh] flex flex-col">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="text-xl font-semibold text-[#2C3E50]">John Mensah's CV</h2>
                            <button 
                                onClick={() => setShowCVModal(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-500" />
                            </button>
                        </div>
                        <div className="flex-1 p-4">
                            <iframe
                                src={cvUrl}
                                title="CV Preview"
                                className="w-full h-full rounded-lg border"
                            />
                        </div>
                        <div className="p-4 border-t flex justify-end gap-4">
                            <button
                                onClick={() => setShowCVModal(false)}
                                className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Close
                            </button>
                            <a
                                href={cvUrl}
                                download="John_Mensah_CV.pdf"
                                className="flex items-center gap-2 bg-[#16A34A] text-white px-4 py-2 rounded-lg hover:bg-[#15803D] transition-colors"
                            >
                                <Download className="w-4 h-4" />
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserPage;