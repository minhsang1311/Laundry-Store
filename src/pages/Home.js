import React from "react";
import { motion } from "framer-motion";
import { FiMessageSquare, FiClock } from "react-icons/fi";
import { PiShirtFoldedBold } from "react-icons/pi";

const Home = () => {
  return (
    <section className="Home">
      <div className="min-h-screen bg-[url('/home.svg')] bg-cover bg-center bg-no-repeat flex items-center px-16">
        <div className="flex items-center min-h-screen px-16">
          <motion.section
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h2
              className="text-3xl font-semibold text-blue-900"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              WELCOME TO
            </motion.h2>
            <motion.h1
              className="text-7xl font-black text-blue-900 mb-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              The Laundry Store
            </motion.h1>
            <motion.p
              className="text-4xl font-bold text-blue-900 mt-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Sparkling Clean, Every Time.
            </motion.p>

            <motion.section
              className="text-center mt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <h3 className="text-4xl text-white font-bold uppercase">
                Premium Laundry Service Just for You
              </h3>
              <div className="place-content-around flex mt-10 space-x-4">
                {[
                  { icon: <FiMessageSquare size={120} />, text: "SEND NOTIFICATION SMS" },
                  { icon: <PiShirtFoldedBold size={120} />, text: "COMPETITIVE PRICES" },
                  { icon: <FiClock size={120} />, text: "24H FAST SERVICE" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-blue-900"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 + index * 0.2 }}
                  >
                    {item.icon}
                    <p className="text-white font-medium text-xl">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </motion.section>
        </div>
      </div>
    </section>
  );
};

export default Home;
