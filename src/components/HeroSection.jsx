import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-[800px] lg:h-screen flex items-center overflow-x-hidden shadow-2xl">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/z.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content Overlay */}
      <div className="relative z-10 text-white text-center mx-auto">
        {/* Headline */}
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 hero-text-gradient">
          The Ultimate Haven for Your Feline Friends!
        </h1>

        {/* Subheadline */}
        <p className="text-lg lg:text-xl mb-8">
          Discover premium cat foods and accessories tailored for your pet's
          happiness.
        </p>

        {/* CTA Button */}
        <a
          href="#products"
          className="bg-[#007257] text-white hover:bg-white hover:text-[#296456] px-6 py-3 rounded"
        >
          Explore Our Collection
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
