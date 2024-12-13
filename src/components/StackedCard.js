import React, { useState, useEffect } from "react";
import "./Data.css";
import "@fontsource/poppins";

const StackedCard = () => {
  const [currentCard, setCurrentCard] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((currentCard) =>
        currentCard === 3 ? 1 : currentCard + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-[#111F25]  h-full w-full">
      <div className="p-[8%] mx-auto  flex flex-col lg:flex-row ">
        {/* Left Section: Testimonials */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-white text-lg font-popping font-semibold uppercase mt-[vh]">
            Testim<span className="text-green-500">onials</span>
          </h3>
          <h1 className="text-white py-5 text-5xl font-popping  font-bold">
            What People Say
          </h1>
          <h1 className="text-green-500 text-5xl font-bold">About Us.</h1>

          <div className="space-x-5 mt-10 mb-10 flex">
            <button
              className={`w-3 h-3 rounded-full ${
                currentCard === 1 ? "bg-gray-200" : "bg-gray-700"
              } transition-all duration-500`}
            ></button>
            <button
              className={`w-3 h-3 rounded-full ${
                currentCard === 2 ? "bg-gray-200" : "bg-gray-700"
              } transition-all duration-500`}
            ></button>
            <button
              className={`w-3 h-3 rounded-full ${
                currentCard === 3 ? "bg-gray-200" : "bg-gray-700"
              } transition-all duration-500`}
            ></button>
          </div>
        </div>

        {/* Right Section: Additional Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="stacked-cards-container">
            {/* Card 1 */}
            <div
              className={`card card-${currentCard === 1 ? 1 : currentCard - 1}`}
            >
              <span className="rounded-full w-12 h-12 absolute -translate-y-7 -translate-x-7 xsm:-translate-x-4 xsm:-translate-y-6">
                <img
                  src="/d1.jpeg"
                  className="w-full h-full object-cover rounded-full xsm:w-6 xsm:h-6 md:w-12 md:h-12"
                  alt="Profile2"
                />
              </span>

              <div className="flex flex-col">
                <h3 className="mt-5 ml-5 text-lg sm:text-base md:text-lg lg:text-xl leading-normal font-poppins font-medium text-[#5E6282]">
                  “On the Windows talking painted pasture yet its express
                  parties use. Sure last upon he same as knew next. Of believed
                  or diverted no.”
                </h3>
                <p className="font-semibold  ml-5 text-[#5E6282] text-lg sm:text-base md:text-lg lg:text-xl ">
                  Dinesh Singh
                </p>
                <p className="ml-5 py-3 text-sm text-[#5E6282]">
                  Mumbai, India
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className={`card card-${currentCard === 3 ? 1 : currentCard + 1}`}
            >
              <span className="rounded-full w-12 h-12 absolute -translate-y-7 -translate-x-7 xsm:-translate-x-4 xsm:-translate-y-6">
                <img
                  src="/m1.jpeg"
                  className="w-full h-full object-cover rounded-full xsm:w-6 xsm:h-6 md:w-12 md:h-12"
                  alt="Profile3"
                />
              </span>

              <div className="flex flex-col">
                <h3 className="mt-5 ml-5 text-lg sm:text-base md:text-lg lg:text-xl leading-normal font-poppins font-medium text-[#5E6282]">
                  “On the Windows talking painted pasture yet its express
                  parties use. Sure last upon he same as knew next. Of believed
                  or diverted no.”
                </h3>
                <p className="font-semibold  ml-5 text-[#5E6282] text-lg sm:text-base md:text-lg lg:text-xl ">
                  Mayank Das
                </p>
                <p className="ml-5 py-3 text-sm text-[#5E6282]">Delhi, India</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className={`card card-${currentCard}`}>
              <span className="rounded-full w-12 h-12 absolute -translate-y-7 -translate-x-7 xsm:-translate-x-4 xsm:-translate-y-6">
                <img
                  src="/r1.jpeg"
                  className="w-full h-full object-cover rounded-full xsm:w-6 xsm:h-6 md:w-12 md:h-12"
                  alt="Profile1"
                />
              </span>

              <div className="flex flex-col">
                <h3 className="mt-5 ml-5 text-lg xs:text-xs md:text-lg lg:text-xl leading-normal font-poppins font-medium text-[#5E6282]">
                  “On the Windows talking painted pasture yet its express
                  parties use. Sure last upon he same as knew next. Of believed
                  or diverted no.”
                </h3>
                <p className="font-semibold  ml-5 text-[#5E6282] text-lg sm:text-base md:text-lg lg:text-xl">
                  Ramesh Sood
                </p>
                <p className="ml-5 py-3 text-sm text-[#5E6282]">Pune, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackedCard;
