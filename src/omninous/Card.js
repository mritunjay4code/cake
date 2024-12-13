import React from "react";

const Card = () => {
  const cards = [
    {
      title: "Macarons",
      description: "Lorem Ipsum is simply",
      image: "p1.jpg", // Replace with macaron image URL
    },
    {
      title: "Small Cakes",
      description: "Lorem Ipsum is simply",
      image: "p2.jpg", // Replace with small cake image URL
    },
    {
      title: "Occasion Cakes",
      description: "Lorem Ipsum is simply",
      image: "p3.jpg", // Replace with occasion cake image URL
    },
    {
      title: "Desserts",
      description: "Lorem Ipsum is simply",
      image: "p4.jpg", // Replace with dessert image URL
    },
  ];

  return (
    <div
      className="py-10 mt-[35rem]"
      style={{
        backgroundImage: "url('./bg.jpg')",
        backgroundSize: "cover", // Ensure image covers the whole area
        backgroundPosition: "center", // Center the background image
        minHeight: "100vh", // Ensures it covers full viewport height
      }}
    >
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-lg overflow-hidden group"
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-96 md:h-[75vh] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
            {/* Content */}
            <div className="absolute bottom-5 left-0 w-full text-center">
              <h3 className="text-white text-3xl font-bold mb-2">
                {card.title}
              </h3>
              <p className="text-white text-base mb-4">{card.description}</p>
              <button className="px-4 py-3 bg-teal-500 text-white text-lg rounded-lg hover:bg-teal-600 transition duration-300">
                More details →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        className="bg-white text-center my-20 px-6 relative"
        style={{
          backgroundImage: "url('./bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Centering the image */}
        <div className="flex justify-center items-center mb-6">
          <img className="max-w-full h-32" src="c1.jpg" alt="Party Image" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex justify-center items-center gap-4 mb-6">
            <h1 className="text-[22px] md:text-3xl font-semibold text-teal-600">
              It's a party and you're invited
            </h1>
          </div>
          <p className="text-gray-700 text-lg  md:text-3xl leading-8 mb-4 mx-5 md:mx-24">
            Join DexignZone{" "}
            <span className="font-bold border-b-2 border-dotted border-gray-500">
              Bakery™
            </span>{" "}
            to earn Gold level benefits like free Cakes and food, get
          </p>
          <p className="text-gray-700 text-lg md:text-3xl leading-8 mb-4 mx-5 md:mx-24">
            free refills, pay and order with your phone, and more.
          </p>
          <p className="text-gray-700 text-lg md:text-3xl mb-4 mx-5 md:mx-24">
            Exclusive deals on Cakes, delivered straight to your inbox, Join
            Now.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
