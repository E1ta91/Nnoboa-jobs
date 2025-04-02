import React from 'react';
import { useForm } from 'react-hook-form';

const CompanyProfile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Here you would typically send the data to your backend
    };

    return (
        <div className="w-full p-4 sm:p-6 md:p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#3a5629] mb-6">Company Profile</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className='space-y-6'>
                        {/* Company Name and Email */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="flex flex-col space-y-3">
                                <label className="text-[#3a5629] font-medium">Company Name</label>
                                <input
                                    type="text"
                                    id='name'
                                    placeholder='Company name'
                                    {...register("companyName", { required: "Company name is required" })}
                                    className="w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black text-gray-700 placeholder-gray-500"
                                />
                                {errors.companyName && (
                                    <p className="text-red-500 text-sm">{errors.companyName.message}</p>
                                )}
                            </div>

                            <div className="flex flex-col space-y-3">
                                <label className="text-[#3a5629] font-medium">Company Email</label>
                                <input
                                    type="text"
                                    id='email'
                                    placeholder='Email Address'
                                    {...register("Email Address", { required: "Email Address is required" })}
                                    className="w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black text-gray-700 placeholder-gray-500"
                                />
                                {errors.emailAddress && (
                                    <p className="text-red-500 text-sm">{errors.emailAddress.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Phone and Address */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="flex flex-col space-y-3">
                                <label className="text-[#3a5629] font-medium">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Enter your phone number"
                                    className="w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black text-gray-700 placeholder-gray-500"
                                    required
                                />
                            </div>

                            <div className="flex flex-col space-y-3">
                                <label className="text-[#3a5629] font-medium">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    placeholder="Enter your company's address"
                                    className="w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black text-gray-700 placeholder-gray-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Country and City */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="flex flex-col space-y-3">
                                <label className="text-[#3a5629] font-medium">Country</label>
                                <input
                                    type="text"
                                    id="country"
                                    placeholder="Enter your country"
                                    className="w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black text-gray-700 placeholder-gray-500"
                                    required
                                />
                            </div>

                            <div className="flex flex-col space-y-3">
                                <label className="text-[#3a5629] font-medium">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    placeholder="Enter your city"
                                    className="w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black text-gray-700 placeholder-gray-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Company Description */}
                        <div className="flex flex-col space-y-3">
                            <label className="text-[#3a5629] font-medium">Company Description</label>
                            <textarea
                                {...register("description", { required: "Description is required" })}
                                rows={4}
                                placeholder='Type here...'
                                className="w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black text-gray-700 placeholder-gray-500 focus:ring-1 focus:ring-[#3a5629]"
                            />
                            {errors.description && (
                                <p className="text-red-500 text-sm">{errors.description.message}</p>
                            )}
                        </div>

                        {/* Website */}
                        <div className="flex flex-col space-y-3">
                            <label className="text-[#3a5629] font-medium">Website</label>
                            <input
                                type="url"
                                {...register("website", {
                                    pattern: {
                                        value: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i,
                                        message: "Please enter a valid URL"
                                    }
                                })}
                                className="w-full px-4 py-3 outline-none bg-white rounded-sm shadow-xs shadow-black text-gray-700 placeholder-gray-500 focus:ring-1 focus:ring-[#3a5629]"
                                placeholder="Enter website URL"
                            />
                            {errors.website && (
                                <p className="text-red-500 text-sm">{errors.website.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-8 py-3 bg-[#3A5629] text-white rounded-sm hover:bg-opacity-90 transition duration-200"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CompanyProfile; 