import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';

const IdentificationCard = () => {
    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);

    const handleFrontImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFrontImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleBackImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBackImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="w-full p-4 sm:p-6 md:p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#3a5629] mb-6">Identification Card</h2>
                
                <div className="space-y-8">
                    {/* Instructions */}
                    <div className="bg-blue-50 p-4 rounded-md">
                        <p className="text-sm text-blue-800">
                            Please upload clear images of the front and back of your identification card. 
                            Accepted formats: JPG, PNG (Max size: 5MB)
                        </p>
                    </div>

                    {/* Front Image Upload */}
                    <div className="space-y-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Front of ID Card
                        </label>
                        <div className="relative">
                            <div className={`w-full h-64 border-2 border-dashed rounded-lg flex flex-col items-center justify-center 
                                ${frontImage ? 'border-gray-300' : 'border-[#3a5629] hover:border-[#2a3f1e]'}`}>
                                {frontImage ? (
                                    <div className="relative w-full h-full">
                                        <img
                                            src={frontImage}
                                            alt="Front ID"
                                            className="w-full h-full object-contain rounded-lg"
                                        />
                                        <button
                                            onClick={() => setFrontImage(null)}
                                            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <FaCamera className="mx-auto h-12 w-12 text-gray-400" />
                                        <p className="mt-2 text-sm text-gray-600">Click to upload front image</p>
                                    </div>
                                )}
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFrontImageChange}
                                className={`absolute inset-0 w-full h-full opacity-0 cursor-pointer
                                    ${frontImage ? 'hidden' : ''}`}
                            />
                        </div>
                    </div>

                    {/* Back Image Upload */}
                    <div className="space-y-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Back of ID Card
                        </label>
                        <div className="relative">
                            <div className={`w-full h-64 border-2 border-dashed rounded-lg flex flex-col items-center justify-center 
                                ${backImage ? 'border-gray-300' : 'border-[#3a5629] hover:border-[#2a3f1e]'}`}>
                                {backImage ? (
                                    <div className="relative w-full h-full">
                                        <img
                                            src={backImage}
                                            alt="Back ID"
                                            className="w-full h-full object-contain rounded-lg"
                                        />
                                        <button
                                            onClick={() => setBackImage(null)}
                                            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <FaCamera className="mx-auto h-12 w-12 text-gray-400" />
                                        <p className="mt-2 text-sm text-gray-600">Click to upload back image</p>
                                    </div>
                                )}
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleBackImageChange}
                                className={`absolute inset-0 w-full h-full opacity-0 cursor-pointer
                                    ${backImage ? 'hidden' : ''}`}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="button"
                            className={`w-full sm:w-auto px-8 py-3 text-white rounded-sm transition duration-200
                                ${(!frontImage || !backImage) 
                                    ? 'bg-gray-400 cursor-not-allowed' 
                                    : 'bg-[#3A5629] hover:bg-opacity-90'}`}
                            disabled={!frontImage || !backImage}
                        >
                            Submit ID Card
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IdentificationCard; 