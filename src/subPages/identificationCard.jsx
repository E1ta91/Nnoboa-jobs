import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUpload, FiSave, FiTrash2 } from 'react-icons/fi';

const IdentificationCard = () => {
    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);
    const [frontImageName, setFrontImageName] = useState('');
    const [backImageName, setBackImageName] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [frontImageUrl, setFrontImageUrl] = useState(null);
    const [backImageUrl, setBackImageUrl] = useState(null);

    const handleFrontImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFrontImage(file);
            setFrontImageName(file.name);
            const url = URL.createObjectURL(file);
            setFrontImageUrl(url);
        }
    };

    const handleBackImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setBackImage(file);
            setBackImageName(file.name);
            const url = URL.createObjectURL(file);
            setBackImageUrl(url);
        }
    };

    const handleRemoveImage = (side) => {
        if (side === 'front') {
            setFrontImage(null);
            setFrontImageName('');
            if (frontImageUrl) {
                URL.revokeObjectURL(frontImageUrl);
                setFrontImageUrl(null);
            }
        } else {
            setBackImage(null);
            setBackImageName('');
            if (backImageUrl) {
                URL.revokeObjectURL(backImageUrl);
                setBackImageUrl(null);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!frontImage || !backImage) {
            alert('Please upload both front and back images of your ID card');
            return;
        }

        setIsSaving(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log('ID Card Images Saved:', { frontImage, backImage });
        setIsSaving(false);
        alert('ID card images saved successfully!');
    };

    const renderImageUpload = (side, image, imageName, imageUrl, handleUpload) => (
        <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#3A5629] transition-colors w-full">
            {image ? (
                <div className="flex flex-col items-center space-y-3 w-full">
                    <div className="w-full h-48 relative rounded-lg overflow-hidden">
                        <img 
                            src={imageUrl} 
                            alt={`${side} of ID`} 
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-600 truncate max-w-xs">{imageName}</p>
                    </div>
                    <button
                        type="button"
                        onClick={() => handleRemoveImage(side)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                        title={`Remove ${side} of ID`}
                    >
                        <FiTrash2 size={20} />
                    </button>
                </div>
            ) : (
                <div className="text-center">
                    <div className="p-3 bg-gray-100 rounded-full mx-auto w-fit">
                        <FiUpload size={40} className="text-[#3A5629]" />
                    </div>
                    <p className="mt-3 text-gray-600">Upload {side} of your ID card</p>
                    <label
                        htmlFor={`${side}-upload`}
                        className="mt-2 inline-block px-6 py-2 bg-[#3A5629] text-white rounded-sm hover:bg-[#2a4120] transition-colors cursor-pointer"
                    >
                        Browse Files
                    </label>
                    <p className="mt-2 text-sm text-gray-500">JPG, PNG (Max 5MB)</p>
                    <input
                        type="file"
                        id={`${side}-upload`}
                        accept="image/*"
                        onChange={handleUpload}
                        className="hidden"
                    />
                </div>
            )}
        </div>
    );

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='space-y-7 max-w-4xl mx-auto p-6'
        >
            <div className="flex justify-between items-center">
                <h1 style={{ fontFamily: 'Monserat' }} className='text-2xl text-[#2a5629]'>ID Card Upload</h1>
            </div>

            <form className='space-y-6' onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Front of ID Card */}
                    {renderImageUpload('front', frontImage, frontImageName, frontImageUrl, handleFrontImageUpload)}

                    {/* Back of ID Card */}
                    {renderImageUpload('back', backImage, backImageName, backImageUrl, handleBackImageUpload)}
                </div>

                {/* Save Button */}
                <div className="flex justify-start">
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={isSaving || !frontImage || !backImage}
                        className={`w-28 sm:w-24 h-11 bg-[#3A5629] text-white rounded-sm hover:bg-gray-500 transition duration-200 flex items-center justify-center gap-2 ${
                            (isSaving || !frontImage || !backImage) ? 'opacity-75 cursor-not-allowed' : ''
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
                </div>
            </form>
        </motion.div>
    );
};

export default IdentificationCard; 