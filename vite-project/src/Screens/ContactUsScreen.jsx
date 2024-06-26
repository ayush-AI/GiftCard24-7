import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import MainLayout from "../components/Layouts/MainLayout";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your code to handle form submission
  };

  return (
    <MainLayout>
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="bg-white bg-opacity-10 rounded-lg p-4 md:p-8 max-w-lg w-full mx-4 backdrop-filter backdrop-blur-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-pink-500">Contact Us</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="block mb-2 text-white">Name:</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              required
              className="w-full bg-gray-800 text-white rounded-md py-2 px-3 mb-2"
            />
            <label className="block mb-2 text-white">Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="w-full bg-gray-800 text-white rounded-md py-2 px-3 mb-2"
            />
            <label className="block mb-2 text-white">Message:</label>
            <textarea
              value={message}
              onChange={handleMessageChange}
              rows="4"
              required
              className="w-full bg-gray-800 text-white rounded-md py-2 px-3 mb-4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send
            </button>
          </form>

          <div className="get-in-touch mt-8">
            <h3 className="text-xl mb-2 text-pink-500">Get In Touch</h3>
            <p className="text-white">If you have any questions, give us a call:</p>
            <a href="tel:+1234567890" className="phone-link flex items-center mt-2 text-white">
              <FaPhone className="phone-icon mr-2" />
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
