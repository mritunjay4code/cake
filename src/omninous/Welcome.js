"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Define the responsive breakpoints for the carousel
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1, // Show 1 item on desktop screens
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1, // Show 1 item on tablet screens
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1, // Show 1 item on mobile screens
  },
};

const Page2 = () => (
  <div
    className="w-full h-screen text-center text-white flex flex-col justify-center items-center"
    style={{
      backgroundImage: "url('/s1.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <h2 className="text-[40px] font-bold">Cakes & Bakery</h2>
    <h1 className="text-[72px] md:text-[92px] font-bold mt-4">
      Welcome To Bakery
    </h1>
    <p className="text-[24px] md:text-[40px] mt-4">
      The Best Cakes In New York
    </p>
    <div className="flex gap-4 mt-8">
      <button className="bg-teal-500 text-white px-6 py-3 rounded-md text-lg hover:bg-teal-600">
        About Us
      </button>
      <button className="bg-white text-teal-500 px-6 py-3 rounded-md text-lg hover:bg-gray-200">
        Subscribe Now
      </button>
    </div>
  </div>
);

const Page1 = () => (
  <div
    className="w-full h-screen text-center text-white flex flex-col justify-center items-center"
    style={{
      backgroundImage: "url('/s2.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <h2 className="text-lg font-bold">Cakes & Bakery</h2>
    <h1 className="text-[72px] md:text-[92px] font-bold mt-4">
      Occasion Cakes
    </h1>
    <p className="text-[24px] md:text-[40px] mt-4">The Best Coffee In China</p>
    <div className="flex gap-4 mt-8">
      <button className="bg-teal-500 text-white px-6 py-3 rounded-md text-lg hover:bg-teal-600">
        About Us
      </button>
      <button className="bg-white text-teal-500 px-6 py-3 rounded-md text-lg hover:bg-gray-200">
        Subscribe Now
      </button>
    </div>
  </div>
);

const Welcome = () => {
  return (
    <div className="welcome-container w-full h-screen absolute">
      <Carousel
        responsive={responsive}
        autoPlay={true} // Enable autoplay
        autoPlaySpeed={3000} // Set the autoplay interval
        infinite={true} // Loop infinitely
        arrows={true} // Enable navigation arrows
        showDots={true} // Show navigation dots
        centerMode={false} // Disable center mode to show one image at a time
        containerClass="carousel-container" // Custom container class
        itemClass="carousel-item" // Custom item class
        renderDotsOutside={true} // Render dots outside the carousel
      >
        <div>
          <Page1 />
        </div>
        <div>
          <Page2 />
        </div>
      </Carousel>
    </div>
  );
};

export default Welcome;
