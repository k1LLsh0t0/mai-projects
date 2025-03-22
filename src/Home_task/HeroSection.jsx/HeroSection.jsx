import React from 'react';
import BackgroundImage from '../../assets/BackgroundImage.png'; // Background image
import Image1 from '../../assets/image1.png'; // First overlay image
import Image2 from '../../assets/image2.png'; // Second overlay image

const HeroSection = () => {
    return (
        <div
            className="w-full max-w-[1440px] mx-auto h-[311px] relative bg-no-repeat bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            {/* First Overlay Image (Kept Same) */}
            <img
                src={Image1}
                alt="Overlay 1"
                className="absolute left-[10%] top-[50%] transform -translate-y-1/2 shadow-lg"
                style={{ width: "698.04px", height: "263px" }}
            />

            {/* Second Overlay Image (Increased by 20% but kept inside bounds) */}
            <img
                src={Image2}
                alt="Overlay 2"
                className="absolute left-[55%] top-[50%] transform -translate-y-1/2 shadow-lg"
                style={{ width: "363.6px", height: "auto", maxHeight: "311px" }}
            />
        </div>
    );
};

export default HeroSection;