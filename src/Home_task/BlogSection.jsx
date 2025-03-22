import React from "react";

const blogs = [
    {
        id: 1,
        title: "Safe measures can refer to a wide range of precautions",
        image: "https://www.cdc.gov/radiation-health/media/images/904056424.jpg",
    },
    {
        id: 2,
        title: "Safe measures can refer to a wide range of precautions",
        image: "https://www.hanzomonmuseum.jp/en/uploads/Safety%20Guideline%20for%20Visitors.jpg",
    },
    {
        id: 3,
        title: "Safe measures can refer to a wide range of precautions",
        image: "https://www.cdc.gov/radiation-health/media/images/904056424.jpg",
    },
    {
        id: 4,
        title: "Safe measures can refer to a wide range of precautions",
        image: "https://www.hanzomonmuseum.jp/en/uploads/Safety%20Guideline%20for%20Visitors.jpg",
    },
    {
        id: 5,
        title: "Safe measures can refer to a wide range of precautions",
        image: "https://www.cdc.gov/radiation-health/media/images/904056424.jpg",
    },
];

const BlogSection = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-6 py-8">
            {/* Title */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Blog</h2>
                <a href="/blogs" className="text-black font-semibold hover:underline">
                    View All
                </a>
            </div>

            {/* Blog Cards */}
            <div className="flex gap-6 overflow-x-auto scrollbar-hide">
                {blogs.map((blog) => (
                    <div key={blog.id} className="w-[250px] bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={blog.image} alt={blog.title} className="w-full h-[150px] object-cover" />
                        <div className="p-4 text-center">
                            <p className="text-gray-700 text-sm">{blog.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogSection;


