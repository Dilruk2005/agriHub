import React from 'react';
import { Users, Tractor, CalendarCheck, Building2 } from 'lucide-react';

const Statistics = () => {
  const stats = [
    { icon: Users, value: '2,500+', label: 'Registered Farmers' },
    { icon: Tractor, value: '150+', label: 'Machinery Available' },
    { icon: CalendarCheck, value: '1,200+', label: 'Bookings Completed' },
    { icon: Building2, value: '25+', label: 'Service Hubs' }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="card text-center">
              <Icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Statistics;