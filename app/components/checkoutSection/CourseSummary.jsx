'use client';
import { useState } from 'react';

const CheckoutSummary = () => {
  const [items, setItems] = useState([
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
  ]);
  const handleRemove = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const getTotalPrice = () => items.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className="border-b  border-gray-200">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800">Order Summary</h2>
        </div>
        <div className={` mt-4 border bg-white shadow-md `}>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-around items-center mb-2"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <h3 className="text-gray-800 font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.instructor}</p>
                </div>
              </div>
              <p className="text-gray-800 font-semibold">
                Rs {item.price.toFixed(2)}
              </p>
              <button
                onClick={() => handleRemove(item.id)}
                className="font-bold  text-3xl text-red-600"
              >
                -
              </button>
            </div>
          ))}
          <div className="flex justify-around items-center mt-4">
            <h3 className="text-gray-800 font-semibold">Total:</h3>
            <p className="text-gray-800 font-semibold">
              Rs {getTotalPrice().toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSummary;
