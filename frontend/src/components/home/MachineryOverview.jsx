import React from 'react';
import { Tractor, Sprout, Droplets, Trees } from 'lucide-react';

const MachineryOverview = () => {
  const machinery = [
    { icon: Tractor, name: 'Tractors', count: 45, available: 32 },
    { icon: Sprout, name: 'Harvesters', count: 28, available: 18 },
    { icon: Droplets, name: 'Water Pumps', count: 35, available: 25 },
    { icon: Trees, name: 'Cultivators', count: 22, available: 15 }
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Machinery Availability</h2>
        <p className="text-gray-600 mt-2">Available machinery across all service hubs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {machinery.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="card">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    {item.available} available / {item.count} total
                  </p>
                </div>
              </div>
              <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary-600 rounded-full h-2"
                  style={{ width: `${(item.available / item.count) * 100}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MachineryOverview;