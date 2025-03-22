import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="w-full bg-white shadow-md">
      {/* Navbar Wrapper with Fixed Dimensions */}
      <div className="w-full max-w-[1440px] mx-auto h-[190px] flex flex-col">

        {/* Upper Navbar (130px height) */}
        <div className="h-[130px] flex justify-between items-center px-8">
          {/* Left - Logo & Tagline (Click to Navigate Home) */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <img src={Logo} alt="MAI Logo" className="h-12" />
            <span className="text-gray-500 text-sm">We Build Homes</span>
          </div>

          {/* Right - Buttons & Icons */}
          <div className="flex items-center gap-6">
            {/*  Updated "Post a Project" Button to Navigate */}
            <button
              onClick={() => navigate("/post-project")} // Navigate to Post a Project
              className="bg-gray-100 text-black px-5 py-3 rounded-lg shadow-sm hover:bg-gray-200 transition"
            >
              Post a Project
            </button>
            <FaShoppingCart className="text-blue-900 text-2xl cursor-pointer" />
            <a href="#" className="text-blue-900 font-semibold hover:underline">Login</a>
            <a href="#" className="text-blue-900 font-semibold hover:underline">Sign Up</a>
          </div>
        </div>

        {/* Lower Navbar (60px height) */}
        <div className="h-[60px] bg-blue-100 flex justify-between items-center px-8">
          {/* Left - Website Name */}
          <div className="text-lg font-bold text-blue-900 uppercase">
            WWW.MYPROJECT.AI
          </div>

          {/* Right - Menu Items with Dividers */}
          <ul className="flex gap-6 text-blue-900 font-semibold">
            {["Home", "How it Works", "Project", "Blogs", "DIY Worktops"].map((item, index, array) => (
              <li key={item} className="flex items-center">
                <a
                  href="#"
                  className="hover:underline cursor-pointer"
                  onClick={() => {
                    if (item === "Home") navigate("/");
                    if (item === "Project") navigate("/all-projects"); // Navigate to AllProjects
                  }}
                >
                  {item}
                </a>
                {index !== array.length - 1 && <span className="mx-3 text-gray-400">|</span>}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
