import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiClock, FiMapPin, FiCheckCircle, FiXCircle } from 'react-icons/fi';

const UserDashboardApplied = () => {
  // Mock data for applied jobs
  const [appliedJobs] = useState([
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      location: "Accra, Ghana",
      appliedDate: "2024-03-15",
      status: "pending",
      type: "Full-time"
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Innovation Labs",
      location: "Kumasi, Ghana",
      appliedDate: "2024-03-10",
      status: "accepted",
      type: "Full-time"
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Creative Studios",
      location: "Remote",
      appliedDate: "2024-03-05",
      status: "rejected",
      type: "Contract"
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'accepted':
        return 'text-green-500 bg-green-50';
      case 'rejected':
        return 'text-red-500 bg-red-50';
      default:
        return 'text-yellow-500 bg-yellow-50';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'accepted':
        return <FiCheckCircle size={20} />;
      case 'rejected':
        return <FiXCircle size={20} />;
      default:
        return <FiClock size={20} />;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='space-y-2 max-w-4xl mx-auto'
    >
      <div className="flex justify-between items-center mb-6 w-[45vw] max-w-2xl mx-auto">
        <h1 style={{ fontFamily: 'Monserat' }} className='text-2xl text-[#2a5629]'>Applied Jobs</h1>
      </div>

      <div className="space-y-3">
        {appliedJobs.map((job) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow w-[90vw] md:w-[45vw] max-w-2xl mx-auto"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-x-0 md:space-x-7">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <FiBriefcase className="text-[#3A5629]" />
                  <h2 className="text-lg font-semibold text-gray-800">{job.title}</h2>
                </div>
                <p className="text-gray-600">{job.company}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <FiMapPin size={16} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiClock size={16} />
                    <span>{job.type}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end gap-2">
                <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${getStatusColor(job.status)}`}>
                  {getStatusIcon(job.status)}
                  <span className="capitalize">{job.status}</span>
                </div>
                <p className="text-sm text-gray-500">
                  Applied on {new Date(job.appliedDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {appliedJobs.length === 0 && (
        <div className="text-center py-12">
          <FiBriefcase size={48} className="mx-auto text-gray-400" />
          <p className="mt-4 text-gray-500">You haven't applied for any jobs yet.</p>
        </div>
      )}
    </motion.div>
  );
};

export default UserDashboardApplied;