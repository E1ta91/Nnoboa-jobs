import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const PostJob = () => {
    const { register,  formState: { errors } } = useForm();
    const navigate = useNavigate()
   

    return (
        <div className="w-full p-4 sm:p-6 md:p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#3a5629] mb-6">Post a New Job</h2>
                
                <form className="space-y-6">
                    <div className='space-y-6'>
                        {/* Job Title and Type */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="flex flex-col space-y-3">
                                <label className="text-[#3a5629] font-medium">Job Title</label>
                                <input
                                    type="text"
                                    id= 'title'
                                    placeholder="Enter job title"
                                    {...register("jobTitle", { required: "Job title is required" })}
                                    className="w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black text-gray-700 placeholder-gray-500"
                                />
                                {errors.jobTitle && (
                                    <p className="text-red-500 text-sm">{errors.jobTitle.message}</p>
                                )}
                            </div>

                            <div className="flex flex-col space-y-3">
                                <label className="text-[#3a5629] font-medium">Job Type</label>
                                <select
                                id='type'
                                    {...register("jobType", { required: "Job type is required" })}
                                    className="w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black text-gray-700"
                                >
                                    <option value="">Select job type</option>
                                    <option value="full-time">Full-time</option>
                                    <option value="part-time">Part-time</option>
                                    <option value="contract">Contract</option>
                                    <option value="internship">Internship</option>
                                </select>
                                {errors.jobType && (
                                    <p className="text-red-500 text-sm">{errors.jobType.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Location and Experience Level */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="flex flex-col space-y-3">
                                <label className="text-[#3a5629] font-medium">Location</label>
                                <input
                                    type="text"
                                    id='location'
                                    placeholder="Enter job location"
                                    {...register("location", { required: "Location is required" })}
                                    className="w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black text-gray-700 placeholder-gray-500"
                                />
                                {errors.location && (
                                    <p className="text-red-500 text-sm">{errors.location.message}</p>
                                )}
                            </div>

                            <div className="flex flex-col space-y-3">
                                <label className="text-[#3a5629] font-medium">Experience Level</label>
                                <select
                                id='experienceLevel'
                                    {...register("experienceLevel", { required: "Experience level is required" })}
                                    className="w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black text-gray-700"
                                >
                                    <option value="">Select experience level</option>
                                    <option value="entry">Entry Level</option>
                                    <option value="mid">Mid Level</option>
                                    <option value="senior">Senior Level</option>
                                    <option value="executive">Executive Level</option>
                                </select>
                                {errors.experienceLevel && (
                                    <p className="text-red-500 text-sm">{errors.experienceLevel.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Job Description */}
                        <div className="flex flex-col space-y-3">
                            <label className="text-[#3a5629] font-medium">Job Description</label>
                            <textarea
                            id='description'
                                {...register("description", { required: "Description is required" })}
                                rows={4}
                                placeholder="Enter job description"
                                className="w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black text-gray-700 placeholder-gray-500 focus:ring-1 focus:ring-[#3a5629]"
                            />
                            {errors.description && (
                                <p className="text-red-500 text-sm">{errors.description.message}</p>
                            )}
                        </div>

                        {/* Requirements */}
                        <div className="flex flex-col space-y-3">
                            <label className="text-[#3a5629] font-medium">Requirements</label>
                            <textarea
                            id='requirements'
                                {...register("requirements", { required: "Requirements are required" })}
                                rows={4}
                                placeholder="Enter each requirement on a new line&#10;Example:&#10;Bachelor's degree in relevant field&#10;5+ years of experience"
                                className="w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black text-gray-700 placeholder-gray-500 focus:ring-1 focus:ring-[#3a5629]"
                            />
                            {errors.requirements && (
                                <p className="text-red-500 text-sm">{errors.requirements.message}</p>
                            )}
                        </div>

                        {/* Responsibilities */}
                        <div className="flex flex-col space-y-3">
                            <label className="text-[#3a5629] font-medium">Responsibilities</label>
                            <textarea
                            id='responsibilities'
                                {...register("responsibilities", { required: "Responsibilities are required" })}
                                rows={4}
                                placeholder="Enter each responsibility on a new line&#10;Example:&#10;Lead team projects&#10;Develop and maintain systems"
                                className="w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black text-gray-700 placeholder-gray-500 focus:ring-1 focus:ring-[#3a5629]"
                            />
                            {errors.responsibilities && (
                                <p className="text-red-500 text-sm">{errors.responsibilities.message}</p>
                            )}
                        </div>

                        {/* Required Skills and Deadline */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="flex flex-col space-y-3">
                                <label className="text-[#3a5629] font-medium">Required Skills</label>
                                <input
                                    type="text"
                                    id='skills'
                                    placeholder="Enter skills separated by commas (e.g. JavaScript, React, Node.js)"
                                    {...register("skills", { required: "Skills are required" })}
                                    className="w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black text-gray-700 placeholder-gray-500"
                                />
                                <p className="text-sm text-gray-500">Separate skills with commas</p>
                                {errors.skills && (
                                    <p className="text-red-500 text-sm">{errors.skills.message}</p>
                                )}
                            </div>

                            <div className="flex flex-col space-y-3">
                                <label className="text-[#3a5629] font-medium">Application Deadline</label>
                                <input
                                    type="date"
                                    id:deadline
                                    {...register("deadline", { required: "Deadline is required" })}
                                    className="w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black text-gray-700"
                                />
                                {errors.deadline && (
                                    <p className="text-red-500 text-sm">{errors.deadline.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                onClick={()=> navigate('/jobs')}
                                type="submit"
                                className="w-full sm:w-auto px-8 py-3 bg-[#3A5629] text-white rounded-sm hover:bg-opacity-90 transition duration-200"
                            >
                                Post Job
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostJob; 