import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUpload, FiSave, FiFile, FiTrash2, FiEye } from 'react-icons/fi';

const UserDashboardCV = () => {
  const [cvFile, setCvFile] = useState(null);
  const [cvName, setCvName] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [cvUrl, setCvUrl] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCvFile(file);
      setCvName(file.name);
      // Create URL for preview
      const url = URL.createObjectURL(file);
      setCvUrl(url);
    }
  };

  const handleRemoveCV = () => {
    setCvFile(null);
    setCvName('');
    if (cvUrl) {
      URL.revokeObjectURL(cvUrl);
      setCvUrl(null);
    }
  };

  const handleViewCV = () => {
    if (cvUrl) {
      window.open(cvUrl, '_blank');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cvFile) return;

    setIsSaving(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('CV Saved:', cvFile);
    setIsSaving(false);
    alert('CV saved successfully!');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='space-y-7 max-w-4xl mx-auto p-6'
    >
      <div className="flex justify-between items-center">
        <h1 style={{ fontFamily: 'Monserat' }} className='text-2xl text-[#2a5629]'>CV</h1>
      </div>

      <form className='space-y-6' onSubmit={handleSubmit}>
        {/* CV Upload Section */}
        <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#3A5629] transition-colors md:w-[40rem] w-full">
          {cvFile ? (
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 bg-gray-100 rounded-full">
                <FiFile size={40} className="text-[#3A5629]" />
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 truncate max-w-xs">{cvName}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {(cvFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={handleViewCV}
                  className="p-2 text-[#3A5629] hover:bg-gray-100 rounded-full transition-colors"
                  title="View CV"
                >
                  <FiEye size={20} />
                </button>
                <button
                  type="button"
                  onClick={handleRemoveCV}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                  title="Remove CV"
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="p-3 bg-gray-100 rounded-full mx-auto w-fit">
                <FiUpload size={40} className="text-[#3A5629]" />
              </div>
              <p className="mt-3 text-gray-600">Drag and drop your CV here, or</p>
              <label
                htmlFor="cv-upload"
                className="mt-2 inline-block px-6 py-2 bg-[#3A5629] text-white rounded-sm hover:bg-[#2a4120] transition-colors cursor-pointer"
              >
                Browse Files
              </label>
              <p className="mt-2 text-sm text-gray-500">PDF, DOC, DOCX (Max 5MB)</p>
              <input
                type="file"
                id="cv-upload"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
          )}
        </div>

        {/* Save Button */}
        <div className="flex justify-start md:w-[40rem] w-full">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSaving || !cvFile}
            className={`w-28 sm:w-24 h-11 bg-[#3A5629] text-white rounded-sm hover:bg-gray-500 transition duration-200 flex items-center justify-center gap-2 ${
              (isSaving || !cvFile) ? 'opacity-75 cursor-not-allowed' : ''
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

export default UserDashboardCV;