import React from "react";

const EnquiryForm = () => {
    return (
        <div className="w-[1339px] h-[800px] mx-auto px-6 py-8 mb-20">
            {/* Section Title */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Enquiry now</h2>

            {/* Enquiry Form Container */}
            <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden flex w-full h-full">

                {/* Left Side - Image (1/3 of total width) */}
                <div className="w-[33.33%] h-full">
                    <img
                        src="https://cdn-cojlh.nitrocdn.com/jVUQwJiKyLiykEiACKjeFmROKyzxFIOk/assets/images/optimized/rev-d11242b/i0.wp.com/www.wsatlaw.com/wp-content/uploads/2023/12/d05b10d009a6c76ae4f264466397a40c.NYC-Construction-Worker.jpg"
                        alt="Construction Workers"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Side - Form (2/3 of total width) */}
                <div className="w-[66.66%] h-full flex items-center justify-center p-14">
                    <form className="w-[80%]">

                        {/* Floating Label Input Fields */}
                        {[
                            { id: "name", label: "Name*", type: "text" },
                            { id: "mobile", label: "Mobile Number*", type: "tel" },
                            { id: "email", label: "Email ID*", type: "email" },
                            { id: "location", label: "Site Location*", type: "text" },
                        ].map((field) => (
                            <div key={field.id} className="relative w-full mb-8">
                                <input
                                    type={field.type}
                                    id={field.id}
                                    placeholder=" " // Placeholder needed for floating label effect
                                    className="peer w-full p-5 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                />
                                <label
                                    htmlFor={field.id}
                                    className="absolute left-5 top-5 text-gray-600 text-lg transition-all duration-200 ease-in-out peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
                                >
                                    {field.label}
                                </label>
                            </div>
                        ))}

                        {/* Submit Button */}
                        <button className="w-full bg-blue-900 text-white py-5 rounded-md text-lg font-semibold hover:bg-blue-700">
                            Get a Quotes
                        </button>

                        {/* Small Note */}
                        <p className="text-gray-500 text-center mt-3 text-lg">We’ll get back to you</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EnquiryForm;
