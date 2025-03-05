import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { MdLocalLaundryService } from "react-icons/md";
import { IoHeadsetOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-between items-center px-6 py-4 ${
        scrolled ? "bg-blue-900 shadow-lg" : "bg-[rgb(138,175,220)]"
      } text-white`}
    >
      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <a href="/" className="flex items-center gap-2 text-lg font-bold hover:text-gray-300 transition">
          <AiOutlineHome className="text-2xl" /> Home
        </a>
        <a href="/services" className="flex items-center gap-2 text-lg font-bold hover:text-gray-300 transition">
          <MdLocalLaundryService className="text-2xl" /> Service
        </a>
        <a href="/contact" className="flex items-center gap-2 text-lg font-bold hover:text-gray-300 transition">
          <IoHeadsetOutline className="text-2xl" /> Contact
        </a>
      </div>

      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img 
          src="/logo.svg" 
          alt="Laundry Logo" 
          className="h-20" 
        />
      </div>

      {/* Search Bar & Social Media */}
      <div className="flex items-center gap-6">
        {/* Search Box */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 pl-8 pr-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-3 text-xl">
          <a href="#" className="hover:text-gray-300 transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-gray-300 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-300 transition"><FaTiktok /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
