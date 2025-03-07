import React, { useEffect, useRef, useState } from "react";

const services = [
  {
    id: 1,
    image: "/piece.svg",
    title: "Pieces Wise Invoice",
    description: "We will charge you for your laundry on a per item basis.",
    price: "0.5$/piece",
  },
  {
    id: 2,
    image: "/weight.svg",
    title: "Weight Wise Invoice",
    description: "We will charge you for your laundry by weight.",
    price: "2$/kg",
  },
  {
    id: 3,
    image: "/month.svg",
    title: "Package Wise Invoice",
    description:
      "Monthly laundry package with fixed amount of clothes.",
    price: "100$/1 month",
  },
];

const Services = () => {
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
      className={`py-16 bg-white transition-opacity duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-4xl font-bold text-center text-black mb-12 flex items-center justify-center">
        <span className="flex-1 border-t border-gray-400 mx-4"></span>
        LAUNDRY SERVICE PACKAGES
        <span className="flex-1 border-t border-gray-400 mx-4"></span>
      </h2>

      <div className="flex justify-center items-stretch gap-20">
        {services.map((service) => (
          <div
            key={service.id}
            className="w-80 p-6 bg-white rounded-xl shadow-md text-center border border-gray-300 flex flex-col justify-between transform transition-all duration-1000 ease-in-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(50px)",
            }}
          >
            <img src={service.image} alt={service.title} className="w-60 mx-auto mb-4" />
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-black">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <p className="text-3xl font-semibold text-blue-900 mt-4">{service.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
