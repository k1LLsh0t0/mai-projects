import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectsSection = () => {
    const navigate = useNavigate();

    const projects = [
        { id: 1, title: "Home Renovation", budget: "£ 100", image: "/images/project1.jpg" },
        { id: 2, title: "Living Room", budget: "£ 100", image: "/images/project2.jpg" },
        { id: 3, title: "Living Room Gardening", budget: "£ 100", image: "/images/project3.jpg" },
        { id: 4, title: "Home Exterior", budget: "£ 100", image: "/images/project4.jpg" },
    ];

    return (
        <div className="w-full max-w-[1344px] mx-auto px-6 mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">PROJECTS</h2>

            <div className="flex gap-6 overflow-x-auto scrollbar-hide">
                {projects.map((project) => (
                    <div key={project.id} className="w-[300px] bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-[180px] object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-blue-600 font-semibold">Budget: {project.budget}</span>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">View</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Redirect */}
            <div className="text-right mt-4">
                <button
                    onClick={() => navigate("/all-projects")}
                    className="text-blue-600 font-semibold hover:underline"
                >
                    View All
                </button>
            </div>
        </div>
    );
};

export default ProjectsSection;


