import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(true);

    // Hide notification after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Join our newsletter!</h2>
          <p className="text-sm">Will be used in accordance with our Privacy Policy</p>
          <div className="flex mt-2">
            <input type="email" placeholder="Your email address" className="p-2 rounded-l-md text-black" />
            <button onClick={handleSubscribe} className="bg-red-600 text-white p-2 rounded-r-md hover:bg-red-700 transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Types Of Services</h2>
          <p className="text-sm">How our Laundry service works</p>
          <p className="text-sm">Services</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">General Enquiries</h2>
          <p className="text-sm">Contact Us</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold">Follow Us on Social Media!</h2>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-2xl hover:text-gray-300 transition"><FaFacebookF /></a>
            <a href="#" className="text-2xl hover:text-gray-300 transition"><FaInstagram /></a>
            <a href="#" className="text-2xl hover:text-gray-300 transition"><FaTiktok /></a>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <hr className="w-full border-t border-gray-400" />
      </div>
      <div className="container mx-auto mt-4">
        <p className="text-sm">© 2025 THE LAUNDRY STORE</p>
      </div>

      {/* Subscribe Success Notification */}
      {isSubscribed && (
        <motion.div
          className="fixed bottom-10 right-10 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          Thank You For Subscribing to Us!
        </motion.div>
      )}
    </footer>
  );
};

export default Footer;
