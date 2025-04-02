import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

const CertificateUpload = () => {
    const [uploadedCertificates, setUploadedCertificates] = useState([]);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files); // Convert FileList to Array
        setUploadedCertificates((prevCertificates) => [...prevCertificates, ...files]);
    };

    // Function to delete a specific certificate
    const handleDelete = (indexToDelete) => {
        setUploadedCertificates((prevCertificates) =>
            prevCertificates.filter((_, index) => index !== indexToDelete) // Remove by index
        );
    };

    return (
        <div className="flex items-center justify-center w-full mt-2 md:mx-36">
         
            <div className="space-y-8 flex flex-col items-center">
                <h1 className="text-xl font-medium" style={{ fontFamily: 'monserat' }}>
                    Upload Your Certificates
                </h1>
                <p className="text-gray-500 text-center">
                    Upload all your certificates in PDF, Word, or image formats.
                </p>

                   {/* Submit Button */}
                   {uploadedCertificates.length > 0 && (
                    <button className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                        Certificates Uploaded Successfully! Proceed to the next step.
                    </button>
                )}

                {/* File Upload */}
                <label
                    htmlFor="certificateUpload"
                    className="flex items-center justify-center w-96 h-20 bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-blue-500"
                >
                    <span className="text-gray-500 text-center">
                        Drag and drop files here or click to upload
                    </span>
                    <input
                        type="file"
                        id="certificateUpload"
                        accept=".pdf,.doc,.docx,.jpg,.png"
                        onChange={handleFileChange}
                        multiple
                        className="hidden"
                    />
                </label>

                {/* Uploaded Certificates List */}
                {uploadedCertificates.length > 0 && (
                    <div className="w-full bg-green-100 border border-green-400 rounded p-4 mt-4">
                        <p className="text-green-700 font-medium">Certificates Uploaded:</p>
                        <ul className="space-y-3">
                            {uploadedCertificates.map((certificate, index) => (
                                <li
                                    key={index}
                                    className="text-green-600 flex justify-between items-center"
                                >
                                    <span>{certificate.name}</span>
                                    <button
                                        onClick={() => handleDelete(index)} // Delete this specific certificate
                                        className="ml-4 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition"
                                    >
                                        <RiDeleteBin6Line/>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

             
            </div>
        </div>
    );
};

export default CertificateUpload;
