import React from "react";

const Pag1 = () => {
  const offers = [
    {
      id: 1,
      title: "Pancakes",
      description: "Lorem Ipsum is dummy",
      icon: "l11.png",
    },
    {
      id: 2,
      title: "Muffin",
      description: "Lorem Ipsum is dummy",
      icon: "l1.png",
    },
    {
      id: 3,
      title: "Pumpkin Cakes",
      description: "Lorem Ipsum is dummy",
      icon: "l3.png",
    },
    {
      id: 4,
      title: "Pumpkin Cupcakes",
      description: "Lorem Ipsum is dummy",
      icon: "l4.png",
    },
    {
      id: 5,
      title: "Cake Services",
      description: "Lorem Ipsum is dummy",
      icon: "l4.png",
    },
    {
      id: 6,
      title: "Birthday Cake",
      description: "Lorem Ipsum is dummy",
      icon: "l5.png",
    },
  ];

  return (
    <div className="welcome-container w-full h-screen relative overflow-y">
      <div
        className="bg-gray-1000 h-1 sm:h-2 w-full absolute left-0 top-0 z-10"
        style={{
          backgroundImage: "url('zigzag.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: 1, // Adjust transparency
        }}
      ></div>

      <div
        className="bg-gray-900 text-white py-12 px-6"
        style={{
          backgroundImage: "url('./m1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            What Do We Offer For You?
          </h2>
          <p className="text-gray-400 text-sm sm:text-xl font-poppins mb-20 md:mx-28">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Main Content Section */}
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="h.jpg" // Replace with your image URL
              alt="Delicious Pancakes"
              className="rounded-lg shadow-lg sm:w-[30rem] lg:w-[32rem] "
            />
          </div>

          {/* Offerings Section */}
          <div>
            <div className="grid grid-cols-1 my-16 sm:grid-cols-2 gap-6 xl:gap-16">
              {offers.map((offer) => (
                <div key={offer.id} className="flex items-center">
                  {/* Icon */}
                  <div className=" text-yellow-400 mr-4">
                    <img
                      src={offer.icon} // Correctly use the image source
                      alt={offer.title} // Meaningful alt text for accessibility
                      className="w-16 h-16 object-contain" // Adjust size as needed
                    />
                  </div>
                  {/* Text */}
                  <div>
                    <h3 className="text-[18px] md:text-[23px] font-semibold">
                      {offer.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base lg:text-lg font-poppins">
                      {offer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pag1;
