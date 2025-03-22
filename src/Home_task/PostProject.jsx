import React, { useState } from "react";
import { FaCalendarAlt, FaUpload, FaSearch } from "react-icons/fa";

const PostProject = () => {
    const [selectedBudget, setSelectedBudget] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");

    // ✅ Sample categories & subcategories
    const categories = {
        "Home Renovation": ["Kitchen Remodeling", "Bathroom Renovation", "Painting"],
        "Construction": ["Residential Building", "Commercial Construction", "Roofing"],
        "Electrical Works": ["Wiring & Installation", "Solar Panels", "Lighting Setup"],
    };

    return (
        <div className="max-w-[1440px] mx-auto px-8 py-8 flex items-start gap-10">
            {/* ✅ Left Side - Image Section */}
            <div className="w-[570px] h-[768px]">
                <img
                    src="/post.png"  // ✅ Image stored in public folder
                    alt="Post a Project"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* ✅ Right Side - Form Section */}
            <div className="w-[572px] bg-gray-100 p-8 rounded-lg shadow-lg">
                {/* ✅ Note Section */}
                <div className="bg-blue-100 p-5 rounded-lg text-blue-900 mb-6">
                    <h3 className="font-semibold">Note</h3>
                    <ul className="text-sm text-gray-700 list-disc pl-5 mt-2">
                        <li>Precision is key! Clear descriptions get better proposals.</li>
                        <li>Upload relevant files (pictures, documents, etc) for clarity.</li>
                    </ul>
                </div>

                {/* ✅ Form Title */}
                <h2 className="text-2xl font-semibold text-blue-900 text-center mb-6">
                    Post a Project
                </h2>

                {/* ✅ Form */}
                <form className="flex flex-col gap-6">
                    {/* Category Selection (Fix Applied) */}
                    <div>
                        <label className="block text-gray-700 text-sm font-medium">Category*</label>
                        <select
                            className="w-full p-3 border border-gray-300 mt-2 rounded-md focus:ring-blue-500"
                            value={selectedCategory}
                            onChange={(e) => {
                                setSelectedCategory(e.target.value);
                                setSelectedSubCategory(""); // ✅ Reset sub-category when category changes
                            }}
                        >
                            <option value="">Select Category</option>
                            {Object.keys(categories).map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Sub-Category Selection (Fixed) */}
                    <div>
                        <label className="block text-gray-700 text-sm font-medium">Sub-Category*</label>
                        <select
                            className="w-full p-3 border border-gray-300 mt-2 rounded-md focus:ring-blue-500"
                            value={selectedSubCategory}
                            onChange={(e) => setSelectedSubCategory(e.target.value)}
                            disabled={!selectedCategory}  // ✅ Enable only when category is selected
                        >
                            <option value="">Select Sub-Category</option>
                            {selectedCategory &&
                                categories[selectedCategory].map((sub) => (
                                    <option key={sub} value={sub}>
                                        {sub}
                                    </option>
                                ))}
                        </select>
                    </div>

                    {/* Budget Type */}
                    <div>
                        <label className="block text-gray-700 text-sm font-medium">Budget Type*</label>
                        <div className="flex gap-4 mt-2">
                            {["Fixed", "Range", "No Idea"].map((budget) => (
                                <button
                                    key={budget}
                                    type="button"
                                    onClick={() => setSelectedBudget(budget)}
                                    className={`px-6 py-2 text-sm rounded-md w-1/3 ${selectedBudget === budget
                                            ? "bg-blue-900 text-white"
                                            : "bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white"
                                        }`}
                                >
                                    {budget}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Project Details */}
                    <div>
                        <label className="block text-gray-700 text-sm font-medium">Project Title*</label>
                        <input
                            type="text"
                            placeholder="Type your Project title"
                            className="w-full p-3 border border-gray-300 mt-2 rounded-md focus:ring-blue-500"
                        />

                        <label className="block text-gray-700 text-sm font-medium mt-4">Project Description*</label>
                        <textarea
                            placeholder="Type here..."
                            className="w-full p-3 border border-gray-300 mt-2 rounded-md focus:ring-blue-500 h-24"
                        ></textarea>
                    </div>

                    {/* Upload File Section */}
                    <div>
                        <label className="block text-gray-700 text-sm font-medium">Upload Sample</label>
                        <div className="flex items-center p-4 border border-gray-300 rounded-md mt-2 bg-blue-50 cursor-pointer">
                            <FaUpload className="text-blue-500 mr-2" />
                            <span className="text-blue-500">Drag here or <span className="font-semibold">Browse</span></span>
                        </div>
                    </div>

                    {/* Project Duration */}
                    <div>
                        <label className="block text-gray-700 text-sm font-medium">Project Duration Days*</label>
                        <div className="flex gap-4 mt-2">
                            <div className="w-1/2">
                                <label className="text-xs text-gray-600">Start date</label>
                                <input type="date" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500" />
                            </div>
                            <div className="w-1/2">
                                <label className="text-xs text-gray-600">Expiry date</label>
                                <input type="date" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500" />
                            </div>
                        </div>
                    </div>

                    {/* Terms & Conditions */}
                    <div className="mt-4 flex items-center">
                        <input type="checkbox" className="w-5 h-5 mr-2" />
                        <label className="text-sm text-gray-600">
                            I Agree to the <a href="#" className="text-blue-500">Terms & Conditions</a>
                        </label>
                    </div>

                    {/* Submit & Cancel Buttons */}
                    <div className="flex gap-4 mt-6">
                        <button className="w-1/2 bg-green-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-green-600">
                            Post a Project
                        </button>
                        <button className="w-1/2 bg-red-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-red-600">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostProject;
