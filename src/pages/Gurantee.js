import React, { useEffect, useRef, useState } from "react";
import { FaTshirt, FaWater, FaTags } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

const guarantees = [
  {
    id: 1,
    icon: <FaTshirt size={50} className="text-blue-900" />,
    title: "Trained Specialist",
    description:
      "Our employees undergo months of training and guidance by our experienced specialist of more than 20 years of experience.",
  },
  {
    id: 2,
    icon: <FaWater size={50} className="text-blue-900" />,
    title: "Highest Quality",
    description:
      "We use some of the highest quality equipment and supplies to ensure you get the best.",
  },
  {
    id: 3,
    icon: <MdAccessTimeFilled size={50} className="text-blue-900" />,
    title: "Quick Laundry",
    description:
      "Our laundry team is fully equipped with the latest equipment to ensure fast and timely laundry.",
  },
  {
    id: 4,
    icon: <FaTags size={50} className="text-blue-900" />,
    title: "Competitive Prices",
    description:
      "We provide our specialised Laundry & Dry-Cleaning services at competitive prices to ensure affordability for our customers.",
  },
];

const Guarantee = () => {
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
      className="py-16 bg-[url('/Guarantee.svg')] text-center bg-cover bg-center bg-no-repeat min-h-screen transition-opacity duration-1000"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
      }}
    >
      <h2 className="text-4xl font-bold text-center text-black mb-12 flex items-center justify-center">
        <span className="flex-1 border-t border-gray-400 mx-4"></span>
        OUR GUARANTEES
        <span className="flex-1 border-t border-gray-400 mx-4"></span>
      </h2>

      <div className="flex justify-center items-center gap-12 flex-wrap">
        {guarantees.map((item, index) => (
          <div
            key={item.id}
            className="w-80 min-h-[300px] p-6 bg-white rounded-xl shadow-md text-center border border-gray-30 flex flex-col justify-between transform transition-all duration-1000 ease-in-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : `translateY(${50 + index * 10}px)`,
            }}
          >
            <div className="mb-4 flex justify-center items-center w-20 h-20 bg-gray-300 rounded-full mx-auto">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-black">{item.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Guarantee;
