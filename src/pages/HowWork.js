import React, { useEffect, useRef, useState } from "react";

const services = [
  {
    id: 1,
    image: "/Bring.svg",
    title: "You Make An Order",
    description: "All you have to do is bring the items you want Laundered/Dry Cleaned to the store.",
  },
  {
    id: 2,
    image: "/Wash.svg",
    title: "We Sort and Wash",
    description: "We will sort your laundry and have it cleaned by our Laundry & Dry Cleaning Specialists.",
  },
  {
    id: 3,
    image: "/sendSMS.svg",
    title: "SMS NOTIFICATION",
    description: "We will send an SMS notification after the laundry is finished, you come to pay and pick up the clothes.",
  },
];

const HowWork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`py-16 bg-gray-200 transition-opacity duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-4xl font-bold text-center text-black mb-12 flex items-center justify-center">
        <span className="flex-1 border-t border-gray-400 mx-4"></span>
        HOW OUR LAUNDRY SERVICE WORKS
        <span className="flex-1 border-t border-gray-400 mx-4"></span>
      </h2>

      <div className="flex justify-center items-stretch gap-20">
        {services.map((service) => (
          <div
            key={service.id}
            className="w-80 p-6 bg-white rounded-xl shadow-md text-center border border-gray-30 flex flex-col justify-between transform transition-all duration-1000 ease-in-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(50px)",
            }}
          >
            <img src={service.image} alt={service.title} className="w-80 mx-auto mb-4" />
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-black">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWork;
