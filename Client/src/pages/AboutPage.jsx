import React from 'react';
import Payments from '../Components/Payment';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-400 via-white to-white p-5">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-4">About Us</h1>
        <p className="text-center mb-4">This platform allows you to exchange skills with others.</p>
        <h2 className="text-xl font-semibold text-center mb-2">Support Us</h2>
        <p className="text-center mb-6">If you'd like to support us, please consider making a donation.</p>
        <div className="flex justify-center">
          <Payments /> {/* Integrate the payment component here */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
