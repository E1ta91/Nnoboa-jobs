import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa'; // Importing bin icon

const CVUpload = () => {
    const [cvName, setCvName] = useState(''); // Store the uploaded file name
    const [cvFile, setCvFile] = useState(null); // Store the file itself

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setCvName(file.name); // Save file name for preview
            setCvFile(file); // Save the file for any further processing
        }
    };

    const handleDelete = () => {
        setCvName(''); // Clear the file name
        setCvFile(null); // Clear the file
    };

    return (
        <div className="flex items-center my-0 mx-0 justify-center md:my-10 md:mx-36 lg:my-28 lg:mx-28">
            <div className="space-y-8">
                <h1 className="text-xl font-medium" style={{ fontFamily: 'monserat' }}>
                    Upload Your CV
                </h1>
                <p className="text-gray-500">Please upload your CV in PDF or Word format.</p>

                  {/* Submit Button */}
                  {cvName && (
                        <button
                            className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded"
                        >
                            CV Upload completed successfully! You can now proceed to the next step.
                        </button>
                    )}

                <div className="flex flex-col space-y-4 items-center">
                    {/* File Upload */}
                    <label
                        htmlFor="cvUpload"
                        className="flex items-center justify-center w-96 h-20 bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-blue-500"
                    >
                        {cvName ? (
                            <div className="flex items-center space-x-3">
                                <span className="text-green-600 font-medium">Uploaded: {cvName}</span>
                                <FaTrash
                                    onClick={handleDelete}
                                    className="text-red-500 cursor-pointer hover:text-red-700 transition"
                                    title="Delete"
                                />
                            </div>
                        ) : (
                            <span className="text-gray-500">
                                Drag and drop your file here or click to upload
                            </span>
                        )}
                        <input
                            type="file"
                            id="cvUpload"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </label>

                  
                </div>
            </div>
        </div>
    );
};

export default CVUpload;
