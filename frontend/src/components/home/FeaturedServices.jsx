import React from 'react';
import { Calendar, MapPin, Bell, Shield } from 'lucide-react';

const FeaturedServices = () => {
  const services = [
    {
      icon: Calendar,
      title: 'Easy Booking',
      description: 'Book machinery online with our simple calendar interface'
    },
    {
      icon: MapPin,
      title: 'GIS Tracking',
      description: 'Track machinery and service hub locations on interactive maps'
    },
    {
      icon: Bell,
      title: 'Real-time Alerts',
      description: 'Get instant notifications for bookings and approvals'
    },
    {
      icon: Shield,
      title: 'Verified Partners',
      description: 'All machinery and operators are verified and trusted'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Featured Services</h2>
        <p className="text-gray-600 mt-2">Everything you need for modern farming</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="card text-center">
              <div className="w-14 h-14 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-secondary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedServices;