import React from "react";

const ProfileSection = () => {
    // Sample profile data with image URLs
    const profiles = [
        { id: 1, name: "Jery Macson", role: "Intern", image: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 2, name: "Jery Macson", role: "Intern", image: "https://randomuser.me/api/portraits/women/2.jpg" },
        { id: 3, name: "Jery Macson", role: "Intern", image: "https://randomuser.me/api/portraits/men/3.jpg" },
        { id: 4, name: "Jery Macson", role: "Intern", image: "https://randomuser.me/api/portraits/women/4.jpg" },
        { id: 5, name: "Jery Macson", role: "Intern", image: "https://randomuser.me/api/portraits/men/5.jpg" },
    ];

    return (
        <div className="w-[1344px] h-[373.36px] mx-auto
        px-6 flex justify-center items-end">

            <div className="flex justify-center gap-6 overflow-x-auto scrollbar-hide h-full">
                {profiles.map((profile) => (
                    <div
                        key={profile.id}
                        className="w-[230px] h-[340px] bg-blue-900 rounded-xl text-white flex flex-col items-center shadow-lg overflow-hidden relative"
                    >
                        {/* Profile Image */}
                        <div className="absolute top-[10px] w-[140px] h-[140px] rounded-full overflow-hidden border-4 border-white bg-white">
                            <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
                        </div>

                        {/* Profile Details */}
                        <div className="mt-50 w-full bg-white text-center text-gray-800 p-4">
                            <p className="text-lg font-semibold">{profile.name}</p>
                            <p className="text-sm text-gray-600">{profile.role}</p>
                        </div>

                        {/* View Profile Button */}
                        <div className="w-full bg-blue-900 py-2 text-center font-bold cursor-pointer">
                            View Profile
                        </div>
                    </div>
                ))}
            </div>
        </div>
       
    );
};

export default ProfileSection;
