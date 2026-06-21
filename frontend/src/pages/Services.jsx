import React from 'react';
import { Tractor, CalendarCheck, MapPin, Bell, Users, Building2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Tractor,
      title: 'Machinery Rental',
      description: 'Rent modern agricultural machinery for your farming needs.'
    },
    {
      icon: CalendarCheck,
      title: 'Booking System',
      description: 'Easy online booking with calendar and time slot selection.'
    },
    {
      icon: MapPin,
      title: 'GIS Mapping',
      description: 'Track machinery locations and service hubs on interactive maps.'
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Real-time alerts for bookings, approvals, and maintenance.'
    },
    {
      icon: Users,
      title: 'Farmer Support',
      description: 'Dedicated support for farmers including complaints and feedback.'
    },
    {
      icon: Building2,
      title: 'Hub Management',
      description: 'Comprehensive service hub management and performance tracking.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive agricultural services designed to empower Sri Lankan farmers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-primary-600" />
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

export default Services;