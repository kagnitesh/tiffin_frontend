import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div id="footer" className="bg-[#191919] text-white py-8 px-6">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row justify-between items-center md:items-start">
          <div className="flex items-center space-x-4">
            <img onClick={() => navigate("/")} role="button" src={'/logo-dark.png'} className="h-12" alt="Daily Dose Logo" />
          </div>
          <div className=" flex flex-col justify-center items-center gap-2">
            <div className="flex space-x-10">
              <Link to={"/privacy-policy"} className="hover:underline">
                Privacy Policy
              </Link>
              <Link to={"/refund-policy"} className="hover:underline">
                Refund Policy
              </Link>
              <Link to={"/terms-and-conditions"} className="hover:underline">
                Terms and conditions
              </Link>
            </div>
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
            <div className="text-center text-sm py-2 hidden md:block">
              <p className="tracking-wide text-slate-400">Copyright 2024-25. All rights reserved | Privacy Policy</p>
              <p className="mt-4 tracking-wide">Made with ❤️ by Zikasha</p>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-left gap-2">
            <div>Contact : +91 88497 13343</div>
            <div>Email : dailydosetiffin2022@gmail.com</div>
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



        <div className="text-center text-sm py-2 mt-8 md:hidden">
          <p className="tracking-wide text-slate-400">Copyright 2024-25. All rights reserved | Policy Privacy</p>
          <p className="mt-4 tracking-wide">Made with ❤️ by Zikasha</p>
        </div>
      </div>
    </div>
  );
}
