import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validatePhoneNumber = (number) => {
    const phoneRegex = /(0[3|5|7|8|9])+([0-9]{8})\b/g; // Only digits, length between 10-15
    return phoneRegex.test(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    if (!validatePhoneNumber(phone)) {
      setPhoneError("Please enter a valid phone number.");
      return;
    }

    setPhoneError(""); // Clear error if valid
    setIsSent(true);

    // Hide notification after 3 seconds
    setTimeout(() => {
      setIsSent(false);
    }, 3000);
  };

  return (
    <motion.section
      className="py-16 px-6 bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* Contact Form */}
        <motion.div
          className="w-full md:w-1/2 bg-white p-6 shadow-lg rounded-lg border border-gray-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">SEND US AN EMAIL</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-600">Your Name</label>
              <input type="text" className="w-full p-2 border rounded-md focus:outline-blue-500" required />
            </div>
            <div>
              <label className="block text-gray-600">Phone Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`w-full p-2 border rounded-md focus:outline-blue-500 ${
                  phoneError ? "border-red-500" : ""
                }`}
                required
              />
              {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
            </div>
            <div>
              <label className="block text-gray-600">Your Message</label>
              <textarea className="w-full p-2 border rounded-md focus:outline-blue-500 h-24" required></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="w-full md:w-1/2 bg-white p-6 shadow-lg rounded-lg border border-gray-300"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">CONTACT US</h2>
          <p className="flex items-center gap-3 text-gray-700">
            <FaPhone className="text-blue-600" /> <strong>Phone:</strong> +84979934306
          </p>
          <p className="flex items-center gap-3 text-gray-700 mt-2">
            <FaEnvelope className="text-blue-600" /> <strong>Email:</strong> sangnnm.sec@gmail.com
          </p>
          <p className="flex items-center gap-3 text-gray-700 mt-2">
            <FaMapMarkerAlt className="text-blue-600" />
            <strong>Address:</strong> 8 Ton That Thuyet, Cau Giay, Ha Noi
          </p>
        </motion.div>
      </div>

      {/* Google Map */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <iframe
          className="w-full h-[300px] rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.101824171603!2d105.77926447690574!3d21.02861138778061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd0c66f05%3A0xea31563511af2e54!2zOCBUw7RuIFRo4bqldCBUaHV54bq_dCwgTeG7uSDEkMOsbmgsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1741112137290!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      {/* Success Notification */}
      {isSent && (
        <motion.div
          className="fixed bottom-10 right-10 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
         Send Success.. We Will Contact Soon!
        </motion.div>
      )}
    </motion.section>
  );
};

export default Contact;
