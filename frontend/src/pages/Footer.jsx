import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LogoDark from "../assets/images/Logo-dark.png";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#191919] text-white py-8 px-10">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row justify-between items-center md:items-start">
          <div className="flex items-center space-x-4">
            {/* <FaFacebookF className="w-8 h-8 text-green-500"/> Adjust icon size and color */}
            {/* <img src="/DailyDoseLogo2.png" alt="" /> */}
            <img onClick={() => navigate("/")} role="button" src={LogoDark} className="h-12" alt="Daily Dose Logo" />
            {/* <span className="font-bold text-lg">Daily Dose</span> */}
          </div>
          <div className=" flex flex-col justify-center items-center gap-8">
            <div className="flex space-x-10">
              <Link to={"/"} className="hover:underline">
                Home
              </Link>
              <Link to={"/about-us"} className="hover:underline">
                About Us
              </Link>
              <Link to={"/menu"} className="hover:underline">
                Menu
              </Link>
            </div>
            <div className="space-x-2 flex items-center">
              <FaFacebookF className="w-6 h-6" /> {/* Facebook icon */}
              <FaTwitter className="w-6 h-6" /> {/* Twitter icon */}
              <FaInstagram className="w-6 h-6" /> {/* Instagram icon */}
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center gap-8">
            <div>Contact: +1 (213) 776 24 10</div>
            {/* <div className="flex items-center space-x-2 bg-gray-800 p-2 rounded-md">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none text-white focus:outline-none"
              />
              <button>
                <FaSearch className="w-6 h-6" /> 
              </button>
            </div> */}
          </div>
        </div>



        <div className="text-center text-sm py-2 mt-8 text-slate-300">
          <span className="tracking-wide">Copyright 2024-25. All rights reserved | Policy Privacy</span>
        </div>
      </div>
    </div>
  );
}