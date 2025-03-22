import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";

const allProjects = [
    {
        id: 1,
        title: "Kitchen Worktop",
        projectId: "MAI2023",
        price: "Fixed",
        budget: "England",
        expiryDate: "2024-08-12",
        proposals: 23,
        status: "Active",
        description:
            "Durable, heat-resistant, and available in various colors and patterns. Engineered using high-quality materials, non-porous, and low maintenance.",
        image: "https://www.impalastone.com/wp-content/uploads/2023/09/Splashback-2-2048x1537.jpeg",
    },
    {
        id: 2,
        title: "Kitchen Worktop",
        projectId: "MAI2023",
        price: "Fixed",
        budget: "England",
        expiryDate: "2024-08-12",
        proposals: 23,
        status: "Active",
        description:
            "Durable, heat-resistant, and available in various colors and patterns. Engineered using high-quality materials, non-porous, and low maintenance.",
        image: "https://www.impalastone.com/wp-content/uploads/2023/09/Splashback-2-2048x1537.jpeg",
    },
    {
        id: 3,
        title: "Kitchen Worktop",
        projectId: "MAI2023",
        price: "Fixed",
        budget: "England",
        expiryDate: "2024-08-12",
        proposals: 23,
        status: "Active",
        description:
            "Durable, heat-resistant, and available in various colors and patterns. Engineered using high-quality materials, non-porous, and low maintenance.",
        image: "https://www.impalastone.com/wp-content/uploads/2023/09/Splashback-2-2048x1537.jpeg",
    },
    {
        id: 4,
        title: "Kitchen Worktop",
        projectId: "MAI2023",
        price: "Fixed",
        budget: "England",
        expiryDate: "2024-08-12",
        proposals: 23,
        status: "Active",
        description:
            "Durable, heat-resistant, and available in various colors and patterns. Engineered using high-quality materials, non-porous, and low maintenance.",
        image: "https://www.impalastone.com/wp-content/uploads/2023/09/Splashback-2-2048x1537.jpeg",
    },
];

const AllProjects = () => {
    const [search, setSearch] = useState("");

    return (
        <div className="w-[1440px] flex justify-center items-center flex-col mx-auto">
            {/* Hero Section */}
            <div className="relative w-full h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('/assets/hero-image.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center px-8">
                    <h2 className="text-white text-2xl text-center font-semibold max-w-[800px]">
                        Post your projects with specifications and details explaining the depth of the project, materials needed, time limit to be taken, and budget.
                    </h2>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="max-w-[1243px] mx-auto px-6 mt-6 flex justify-between items-center">
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-[400px] p-3 border border-gray-300 rounded-md focus:outline-none"
                />
                <button className="bg-gray-100 px-5 py-3 rounded-md shadow-sm hover:bg-gray-200">
                    Sort By ⌄
                </button>
            </div>

            {/* Project List */}
            <div className="max-w-[1243px] mx-auto px-6 mt-6 flex flex-col gap-6">
                {allProjects
                    .filter((project) =>
                        project.title.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((project) => (
                        <div key={project.id} className="w-[1243px] h-[445px] bg-white shadow-lg rounded-lg overflow-hidden flex border border-gray-300">
                            {/* Left: Project Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-[40%] h-full object-cover"
                            />

                            {/* Right: Project Details */}
                            <div className="w-[60%] p-6 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                                    <p className="text-gray-600 text-sm mt-2">
                                        <b>Project ID:</b> {project.projectId} | <b>Price:</b> {project.price} | <b>Budget:</b> {project.budget}
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        <b>Expiry Date:</b> {project.expiryDate} | <b>Proposals:</b> {project.proposals}
                                    </p>
                                    <p className="text-green-600 text-sm font-bold mt-2">Project Status: {project.status}</p>
                                    <p className="text-gray-600 mt-4">{project.description}</p>
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-4">
                                    <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                                        View
                                    </button>
                                    <button className="bg-gray-100 px-6 py-2 rounded-md hover:bg-gray-200">
                                        Send a Proposal
                                    </button>
                                    <button className="bg-yellow-400 px-6 py-2 rounded-md hover:bg-yellow-500">
                                        Apply Internship
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center my-6 gap-3">
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200">4</button>
            </div>
        </div>
    );
};

export default AllProjects;



