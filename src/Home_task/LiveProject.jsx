import React, { useState } from 'react';
import { FaFilter } from "react-icons/fa";

const LiveProject = () => {
    // Project Data (All 7 Projects)
    const projectData = [
        { id: 1, title: "Interior Works", location: "England", image: "https://stmarysinteriors.com/wp-content/uploads/2023/01/FINAL-LIV-2-360x300.jpg" },
        { id: 2, title: "Stone Fixing", location: "England", image: "https://media.istockphoto.com/id/1388916756/photo/dust-while-grinding-close-up-of-worker-cutting-granite-plate-with-grinder.jpg?s=612x612&w=0&k=20&c=5MA3_MIA0rBDzaElDRzm7wi8Rs63_IYYgDn8ZAP6GHU=" },
        { id: 3, title: "Electricals Works", location: "England", image: "https://media.istockphoto.com/id/894471508/photo/electrician-working-in-a-residential-electrical-system.jpg?s=612x612&w=0&k=20&c=0AaXIkN3-bNXjvUOMGZP7EMxWRNAXdi09baAv-urStY=" },
        { id: 4, title: "Gardening Setup", location: "England", image: "https://media.istockphoto.com/id/1480977698/photo/drip-irrigation-system-building-inside-newly-developed-back-yard-garden.jpg?s=612x612&w=0&k=20&c=rXwmB9xunKWDVxRq8xvAOzkPP0np0f87Lc18LC5OObc=" },
        { id: 5, title: "Gardening Setup", location: "England", image: "https://media.istockphoto.com/id/1480977698/photo/drip-irrigation-system-building-inside-newly-developed-back-yard-garden.jpg?s=612x612&w=0&k=20&c=rXwmB9xunKWDVxRq8xvAOzkPP0np0f87Lc18LC5OObc=" },
        { id: 6, title: "Plumbing Services", location: "England", image: "https://media.istockphoto.com/id/1435449600/photo/plumber-explaining-to-a-client-the-problem-with-her-kitchen-sink.jpg?s=612x612&w=0&k=20&c=KFI8f97NOQBSAMgdO-hldVA39rESrD07N7OZU1LQ6s0=" },
        { id: 7, title: "Roof Repair", location: "England", image: "https://media.istockphoto.com/id/1310643662/photo/crew-installing-new-shingles-on-roof-on-a-rainy-day.jpg?s=612x612&w=0&k=20&c=7JOhn1PP1IGWireefIKnxQRn04QAsoxQrEutJmI8GU4=" },
    ];

    // State to track "View All" toggle
    const [showAll, setShowAll] = useState(false);

    return (
        <div className="w-full max-w-[1440px] mx-auto h-[505px] px-6 mt-10">
            {/* Title & Search Row */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                {/* Section Title */}
                <h2 className="text-2xl font-bold text-gray-800">LIVE PROJECT</h2>

                {/* Search Inputs */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                    <input
                        type="text"
                        placeholder="Search Your Live Project"
                        className="w-full sm:w-[250px] px-4 py-2 border rounded-lg outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Search for your location.."
                        className="w-full sm:w-[250px] px-4 py-2 border rounded-lg outline-none"
                    />
                    <button className="p-3 bg-gray-200 rounded-lg">
                        <FaFilter className="text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Project Cards (Scrollable) */}
            <div className="flex gap-6 overflow-x-auto scrollbar-hide h-[360px]">
                {(showAll ? projectData : projectData.slice(0, 5)).map((project) => (
                    <div key={project.id} className="w-[250px] h-[340px] bg-white shadow-lg rounded-xl overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-[180px] object-cover" />
                        <div className="p-4">
                            <div className="text-blue-600 text-sm font-medium flex items-center gap-1">
                                📍 {project.location}
                            </div>
                            <p className="text-gray-600 text-sm mt-1">Progress</p>
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All / View Less Button */}
            <div className="text-right mt-4">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="text-blue-600 font-semibold hover:underline"
                >
                    {showAll ? "View Less" : "View All"}
                </button>
            </div>
        </div>
    );
};

export default LiveProject;
