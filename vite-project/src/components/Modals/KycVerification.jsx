import React, { useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import ModalLayout from "../Layouts/ModalLayout";
import { X } from "lucide-react";
import axios from 'axios';

const KycVerification = ({ closeKycModal }) => {
  const [formData, setFormData] = useState({
    userName: "",
    dob: "",
    idProofType: "",
    idProofImage: null,
    email: "",
    otp: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      idProofImage: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append('userName', formData.userName);
      formData.append('dob', formData.dob);
      formData.append('idProofType', formData.idProofType);
      formData.append('idProofImage', formData.idProofImage);
      formData.append('email', formData.email);
      
      const response = await axios.post('http://localhost:5000/api/users/kyc-verification', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      console.log('Response:', response.data);
      alert('KYC verification successful');
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred while verifying KYC');
    }
  };

  return (
    <>
      <ModalLayout>
        <div className="p-4 md:p-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold mb-4">KYC Verification</h2>
            <button
              onClick={closeKycModal}
              className="w-8 h-8 bg-red-500 flex justify-center items-center rounded-full"
            >
              <X className="text-white" />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
          <div className="mb-4">
              <label htmlFor="userName" className="block text-gray-700 font-semibold mb-2">User Name:</label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block text-gray-700 font-semibold mb-2">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="idProofType" className="block text-gray-700 font-semibold mb-2">ID Proof Type:</label>
              <select
                id="idProofType"
                name="idProofType"
                value={formData.idProofType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              >
                <option value="">Select ID Proof Type</option>
                <option value="passport">Passport</option>
                <option value="driverLicense">Driver License</option>
                <option value="aadharCard">Aadhar Card</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="idProofImage" className="block text-gray-700 font-semibold mb-2">Upload ID Proof:</label>
              <input
                type="file"
                id="idProofImage"
                name="idProofImage"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </ModalLayout>
    </>
  );
};

export default KycVerification;
