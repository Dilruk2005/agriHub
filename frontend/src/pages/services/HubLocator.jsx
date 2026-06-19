import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, MapPin, Phone, Mail, Star } from 'lucide-react';

const HubLocator = () => {
  const hubs = [
    { 
      id: 1, 
      name: 'Colombo Agricultural Hub', 
      district: 'Colombo', 
      rating: 4.8,
      contact: '+94 112 345 678',
      address: '123 Main Street, Colombo',
      available: ['Tractors', 'Harvesters', 'Cultivators']
    },
    { 
      id: 2, 
      name: 'Kandy Service Hub', 
      district: 'Kandy', 
      rating: 4.6,
      contact: '+94 812 345 678',
      address: '456 Kandy Road, Kandy',
      available: ['Tractors', 'Water Pumps', 'Sprayers']
    },
    { 
      id: 3, 
      name: 'Galle Machinery Hub', 
      district: 'Galle', 
      rating: 4.7,
      contact: '+94 912 345 678',
      address: '789 Beach Road, Galle',
      available: ['Harvesters', 'Cultivators', 'Seeders']
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-green-100 hover:text-white mb-4">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Services
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Service Hub Locator</h1>
          <p className="text-green-100 mt-2">Find agricultural service hubs near you</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubs.map((hub) => (
            <div key={hub.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{hub.name}</h3>
                  <p className="text-sm text-gray-500">{hub.district}</p>
                </div>
                <div className="flex items-center space-x-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium text-gray-900">{hub.rating}</span>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{hub.address}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{hub.contact}</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {hub.available.map((item) => (
                  <span key={item} className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">
                    {item}
                  </span>
                ))}
              </div>

              <button className="mt-4 w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HubLocator;