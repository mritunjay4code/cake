import React from "react";

const Pag1 = () => {
  const offers = [
    {
      id: 1,
      title: "Pancakes",
      description: "Lorem Ipsum is dummy",
      icon: "🍪",
    },
    { id: 2, title: "Muffin", description: "Lorem Ipsum is dummy", icon: "🧁" },
    {
      id: 3,
      title: "Pumpkin Cakes",
      description: "Lorem Ipsum is dummy",
      icon: "🎃",
    },
    {
      id: 4,
      title: "Pumpkin Cupcakes",
      description: "Lorem Ipsum is dummy",
      icon: "🧁",
    },
    {
      id: 5,
      title: "Cake Services",
      description: "Lorem Ipsum is dummy",
      icon: "🎂",
    },
    {
      id: 6,
      title: "Birthday Cake",
      description: "Lorem Ipsum is dummy",
      icon: "🎂",
    },
  ];

  return (
    <div
      className="bg-gray-900 text-white py-12 px-6"
      style={{
        backgroundImage: "url('./m1.jpg')",
        backgroundSize: "cover", // Ensure image covers the whole area
        backgroundPosition: "center", // Center the background image
        minHeight: "100vh", // Ensures it covers full viewport height
      }}
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">What Do We Offer For You?</h2>
        <p className="text-gray-400 text-xl ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p className="text-gray-400 mb-16 text-xl">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}

        <div className="flex justify-center">
          <img
            src="h.jpg" // Replace with your image URL
            alt="Delicious Pancakes"
            className="rounded-lg shadow-lg max-w-full h-96"
          />
        </div>
        {/* Text and Offerings Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {offers.map((offer) => (
              <div key={offer.id} className="flex items-center">
                <div className="text-3xl text-yellow-400 mr-4 ">
                  <span className="h-96">{offer.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{offer.title}</h3>
                  <p className="text-gray-400 text-sm">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pag1;
