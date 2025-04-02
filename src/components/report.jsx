import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaMapMarkerAlt, FaPhone, FaEnvelope, FaUser } from 'react-icons/fa';

const Report = () => {
 

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <FaExclamationTriangle className="w-16 h-16 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Report Child Labor or Abuse</h1>
          <p className="text-lg text-gray-600">
            Your report can help protect children and prevent exploitation. All information will be kept confidential.
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Emergency Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-4 bg-[#3A5829]/5 rounded-lg">
              <FaPhone className="w-6 h-6 text-[#3A5829]" />
              <div>
                <p className="text-sm text-gray-600">Emergency Hotline</p>
                <p className="font-semibold text-gray-900">+233 24 529 6936</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-[#3A5829]/5 rounded-lg">
              <FaEnvelope className="w-6 h-6 text-[#3A5829]" />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-semibold text-gray-900">uriakari@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-[#3A5829]/5 rounded-lg">
              <FaMapMarkerAlt className="w-6 h-6 text-[#3A5829]" />
              <div>
                <p className="text-sm text-gray-600">Office Location</p>
                <p className="font-semibold text-gray-900">Accra, Ghana</p>
              </div>
            </div>
          </div>
        </div>

        {/* Report Form */}
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3A5829] focus:border-[#3A5829]"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3A5829] focus:border-[#3A5829]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Contact and Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3A5829] focus:border-[#3A5829]"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location of Incident
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="location"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3A5829] focus:border-[#3A5829]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Incident Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type of Incident
              </label>
              <select
                name="incidentType"
                className="block w-full pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3A5829] focus:border-[#3A5829]"
                required
              >
                <option value="">Select incident type</option>
                <option value="child_labor">Child Labor</option>
                <option value="physical_abuse">Physical Abuse</option>
                <option value="emotional_abuse">Emotional Abuse</option>
                <option value="sexual_abuse">Sexual Abuse</option>
                <option value="neglect">Neglect</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Incident
              </label>
              <input
                type="date"
                name="date"
                className="block w-full pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3A5829] focus:border-[#3A5829]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Detailed Description
              </label>
              <textarea
                name="description"
                rows="4"
                className="block w-full pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3A5829] focus:border-[#3A5829]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Evidence (Optional)
              </label>
              <input
                type="file"
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-[#3A5829]/5 file:text-[#3A5829]
                  hover:file:bg-[#3A5829]/10"
                accept="image/*,.pdf"
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-[#3A5829] text-white font-semibold rounded-md hover:bg-[#2a4120] focus:outline-none focus:ring-2 focus:ring-[#3A5829] focus:ring-offset-2 transition-colors"
              >
                Submit Report
              </button>
            </div>
          </div>
        </motion.form>

        {/* Confidentiality Notice */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-sm text-gray-600"
        >
          <p>
            Your report will be handled with the utmost confidentiality. We take all reports seriously and will take appropriate action to protect children.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Report;