import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Tractor, Clock, DollarSign, Check } from 'lucide-react';

const MachineryRental = () => {
  const rentals = [
    {
      id: 1,
      name: 'Mahindra 575 DI Tractor',
      image: '🚜',
      rate: 'LKR 2,500/hr',
      capacity: '45 HP',
      features: ['Diesel', '4WD', 'Power Steering', 'AC Cabin']
    },
    {
      id: 2,
      name: 'Kubota DC-68 Harvester',
      image: '🌾',
      rate: 'LKR 3,500/hr',
      capacity: '68 HP',
      features: ['Diesel', '4WD', 'Automatic', 'Grain Tank']
    },
    {
      id: 3,
      name: 'Honda FJ-500 Cultivator',
      image: '🌱',
      rate: 'LKR 1,500/hr',
      capacity: '15 HP',
      features: ['Petrol', 'Lightweight', 'Easy Operation']
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-purple-100 hover:text-white mb-4">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Services
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Machinery Rental</h1>
          <p className="text-purple-100 mt-2">Rent modern agricultural machinery at competitive rates</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rentals.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{item.image}</div>
              <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-1 text-gray-600">
                  <DollarSign className="w-4 h-4" />
                  <span>{item.rate}</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <Tractor className="w-4 h-4" />
                  <span>{item.capacity}</span>
                </div>
              </div>
              <div className="mt-4 space-y-1">
                {item.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm font-medium">
                Rent Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MachineryRental;