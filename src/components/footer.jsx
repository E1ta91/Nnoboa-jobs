import React from "react";
import f2 from "../assets/images/f2.png";
import { Link } from "react-router-dom";
import { ImFacebook } from "react-icons/im";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#3a5629] footer w-full py-10 px-6 md:px-12 lg:px-16 mt-6 lg:mt-10">
    <div className="flex flex-col md:flex-row justify-between items-center lg:items-start md:items-start space-y-10 md:space-y-0">
      
      {/* Logo & Socials Section */}
      <div className="flex flex-col items-center md:items-start md:space-y-16">
        <div className="space-y-5">
          <img className="w-[140px] md:w-[120px] lg:w-[160px] rounded-lg shadow-2xl" src={f2} alt="logo" />
          <p className="text-lg md:text-base lg:text-lg text-white font-mono">Nnoboa © 2025</p>
        </div>
  
        {/* Social Media Links */}
        <div className="flex space-x-3">
          <Link className="h-9 w-9 md:h-8 md:w-8 lg:h-10 lg:w-10 flex justify-center items-center rounded-lg bg-[#eaece8]">
            <ImFacebook className="w-5 h-5 md:w-4 md:h-4 lg:w-6 lg:h-6 text-sky-700" />
          </Link>
          <Link className="h-9 w-9 md:h-8 md:w-8 lg:h-10 lg:w-10 flex justify-center items-center rounded-lg bg-[#eaece8]">
            <FaXTwitter className="w-5 h-5 md:w-4 md:h-4 lg:w-6 lg:h-6 x" />
          </Link>
          <Link className="h-9 w-9 md:h-8 md:w-8 lg:h-10 lg:w-10 flex justify-center items-center rounded-lg bg-[#eaece8]">
            <FaLinkedin className="w-6 h-6 md:w-5 md:h-5 lg:w-7 lg:h-7 text-sky-600" />
          </Link>
          <Link className="h-9 w-9 md:h-8 md:w-8 lg:h-10 lg:w-10 flex justify-center items-center rounded-lg bg-[#eaece8]">
            <FaWhatsapp className="w-6 h-6 md:w-5 md:h-5 lg:w-7 lg:h-7 text-[#517c37]" />
          </Link>
        </div>
      </div>
  
     {/* Contact Form Section */}
<div className="flex flex-col md:flex-row md:ml-24 items-center justify-center md:items-start space-y-6 md:space-y-0 md:space-x-10 lg:space-x-12 w-full md:w-3/4 lg:w-1/2">

{/* Contact Heading */}
<h1 className="text-2xl md:text-xl lg:text-2xl text-white whitespace-nowrap">
  Contact Us
</h1>

{/* Form */}
<form className="w-full max-w-xs md:max-w-xs lg:max-w-sm space-y-4">
  {/* Email Field */}
  <div className="w-full">
    <label htmlFor="email" className="block text-base font-medium text-white">
      Email Address
    </label>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Email Address"
      autoComplete="email"
      className="w-full rounded-sm inputbg input border border-[#585757] bg-white py-2 px-4 text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md"
    />
  </div>

  {/* Message Field */}
  <div className="w-full">
    <label htmlFor="message" className="block text-base font-medium text-white">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      rows="3"
      placeholder="Type here"
      className="w-full rounded-sm inputbg input border border-[#585757] bg-white py-2 px-4 text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md"
    ></textarea>
  </div>

  {/* Submit Button */}
  <button
    className="border border-[#BAD8B6] text-white text-base md:text-sm lg:text-lg w-32 md:w-36 lg:w-40 h-10 md:h-10 lg:h-12 font-semibold hover:bg-[#6B7280] rounded-lg"
    type="submit"
  >
    Submit
  </button>
</form>
</div>

      
    </div>
  </div>
  
  );
};

export default Footer;
