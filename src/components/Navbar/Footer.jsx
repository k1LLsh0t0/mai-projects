import React from "react";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"; // Import icons

const Footer = () => {
    return (
        <div className="w-full bg-gray-100 py-4 text-blue-900 text-sm">
            <div className="max-w-[1240px] mx-auto flex justify-between items-center px-6">

                {/* Left Section: Links */}
                <div className="flex gap-6">
                    <a href="#" className="hover:underline">Privacy policy</a>
                    <a href="#" className="hover:underline">Terms & conditions</a>
                    <a href="#" className="hover:underline">Contact us</a>
                </div>

                {/* Center Section: Copyright */}
                <div className="font-semibold text-blue-900">
                    All copyrights Reserved @MAI
                </div>

                {/* Right Section: Social Media Icons */}
                <div className="flex items-center gap-4">
                    <span>Social networks :</span>
                    <FaFacebookF className="cursor-pointer hover:text-blue-700" />
                    <FaTwitter className="cursor-pointer hover:text-blue-500" />
                    <FaGoogle className="cursor-pointer hover:text-red-600" />
                    <FaInstagram className="cursor-pointer hover:text-pink-500" />
                    <FaLinkedinIn className="cursor-pointer hover:text-blue-800" />
                    <FaWhatsapp className="cursor-pointer hover:text-green-600" />
                </div>

            </div>
        </div>
    );
};

export default Footer;
