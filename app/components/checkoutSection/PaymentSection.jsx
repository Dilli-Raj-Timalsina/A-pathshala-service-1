'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BounceSpinners from '../spinners/BounceSpinners';
import axios from 'axios';
// import { useCart } from '../contexts/cart';

const CheckoutForm = () => {
  const getTotalPrice = 50000;
  const router = useRouter();
  const items = [
    {
      id: 1,
      title: 'Course 1',
      instructor: 'Instructor 1',
      image: '/a.png',
      price: 500,
    },
    {
      id: 2,
      title: 'Course 2',
      instructor: 'Instructor 2',
      image: '/a.png',
      price: 500,
    },
  ];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    esewaId: '',
    couponCode: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement eSewa payment integration and handle form submission

    const amount = 1000; // Replace with the actual payment amount
    const successUrl = 'http://localhost:3000/account-profile/purchase/success'; // Replace with your actual success URL
    const failureUrl = 'http://localhost:3000/account-profile/purchase/failure'; // Replace with your actual failure URL

    const paymentUrl = `https://uat.esewa.com.np/epay/main?amt=${amount}&pid=${'Esewa_Task_4'}&scd=EPAYTEST&su=${successUrl}&fu=${failureUrl}`;

    router.push(paymentUrl);
    setIsSubmitting(false);
  };

  return (
    <section className="mt-4">
      <div className="container mx-auto">
        <h2 className="text-lg font-bold text-gray-800">Payment Details</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-800 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-800 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-600 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? <BounceSpinners /> : 'Submit Payment'}
            </button>
          </div>
          {errorMessage && (
            <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
              <p>{errorMessage}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default CheckoutForm;
