import React from "react";

const Card = () => {
  const cards = [
    {
      title: "Macarons",
      description: "Lorem Ipsum is simply",
      image: "p1.jpg",
    },
    {
      title: "Small Cakes",
      description: "Lorem Ipsum is simply",
      image: "p2.jpg",
    },
    {
      title: "Occasion Cakes",
      description: "Lorem Ipsum is simply",
      image: "p3.jpg",
    },
    {
      title: "Desserts",
      description: "Lorem Ipsum is simply",
      image: "p4.jpg",
    },
  ];

  return (
    <div
      className="py-10 -mt-40 sm:-mt-16 md:-mt-40 bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('./a1.jpg')" }}
    >
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-lg overflow-hidden group transform transition-transform duration-500 hover:rotate-3 hover:scale-105"
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-96 md-h[70vh] xl:h-[75vh] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
            {/* Content */}
            <div className="absolute bottom-5 left-0 w-full text-center">
              <h3 className="text-white text-2xl font-bold mb-2">
                {card.title}
              </h3>
              <p className="text-white text-sm font-poppins mb-4">
                {card.description}
              </p>
              <button className="px-4 py-3 bg-[#44b5b2] text-white text-lg rounded-lg font-poppins hover:bg-teal-600 transition duration-300">
                More details →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        className="bg-white text-center my-12 md:my-20 px-6 relative  bg-cover  sm:bg-contain md:bg-cover"
        style={{
          backgroundImage: "url('./bg.jpg')",
        }}
      >
        {/* Centering the image */}
        <div className="flex justify-center items-center mb-6">
          <img className="max-w-full h-32" src="c1.jpg" alt="Party Image" />
        </div>

        <div className="relative z-10">
          <div className="flex justify-center items-center gap-4 mb-6">
            <h1 className="text-[22px] md:text-3xl font-semibold  text-teal-600">
              It's a party and you're invited
            </h1>
          </div>
          <p className="text-gray-700 text-xl font-poppins  md:text-2xl leading-8 my-10 mx-2 md:mx-24">
            Join DexignZone{" "}
            <span className="font-bold border-b-2 border-dotted border-gray-500">
              Bakery™
            </span>{" "}
            to earn Gold level benefits like free Cakes and food, get free
            refills, pay and order with your phone, and more.
          </p>

          <p className="text-gray-700 text-xl font-poppins md:text-xl leading-8 mb-4 mx-2 md:mx-24">
            Exclusive deals on Cakes, delivered straight to your inbox, Join
            Now.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
