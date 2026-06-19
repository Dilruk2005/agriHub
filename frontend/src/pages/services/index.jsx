import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CalendarCheck, 
  MapPin, 
  Tractor, 
  Wrench, 
  GraduationCap, 
  Headphones,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'booking',
      icon: CalendarCheck,
      title: 'Machinery Booking',
      description: 'Book agricultural machinery online with our easy-to-use calendar system. Select your preferred date, time, and machinery type.',
      color: 'blue',
      features: ['Online booking', 'Calendar view', 'Time slot selection', 'Instant confirmation']
    },
    {
      id: 'hubs',
      icon: MapPin,
      title: 'Service Hub Locator',
      description: 'Find nearby service hubs across Sri Lanka. View hub locations, contact information, and available machinery.',
      color: 'green',
      features: ['Interactive map', 'Hub details', 'Contact info', 'Directions']
    },
    {
      id: 'rental',
      icon: Tractor,
      title: 'Machinery Rental',
      description: 'Rent modern agricultural machinery including tractors, harvesters, cultivators, and more at competitive rates.',
      color: 'purple',
      features: ['Wide selection', 'Competitive rates', 'Flexible duration', 'Quality assured']
    },
    {
      id: 'maintenance',
      icon: Wrench,
      title: 'Maintenance Service',
      description: 'Schedule maintenance and repair services for your agricultural machinery with our certified technicians.',
      color: 'orange',
      features: ['Certified technicians', 'Scheduled maintenance', 'Emergency repairs', 'Genuine parts']
    },
    {
      id: 'training',
      icon: GraduationCap,
      title: 'Training Programs',
      description: 'Learn modern farming techniques and machinery operation through our comprehensive training programs.',
      color: 'red',
      features: ['Expert instructors', 'Hands-on training', 'Certification', 'Modern techniques']
    },
    {
      id: 'support',
      icon: Headphones,
      title: 'Farmer Support',
      description: 'Get dedicated support for all your farming needs including complaints, queries, and guidance.',
      color: 'teal',
      features: ['24/7 support', 'Complaint handling', 'Expert guidance', 'Quick resolution']
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
      green: 'bg-green-50 text-green-600 hover:bg-green-100',
      purple: 'bg-purple-50 text-purple-600 hover:bg-purple-100',
      orange: 'bg-orange-50 text-orange-600 hover:bg-orange-100',
      red: 'bg-red-50 text-red-600 hover:bg-red-100',
      teal: 'bg-teal-50 text-teal-600 hover:bg-teal-100'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-primary-100">
              Comprehensive agricultural services designed to empower Sri Lankan farmers 
              and agricultural businesses.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${getColorClasses(service.color)} transition-colors`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 3 && (
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{service.features.length - 3} more
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-center text-primary-600 font-medium text-sm group-hover:text-primary-700">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white border-t border-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose AgriHub?</h2>
            <p className="text-gray-600 mt-2">We provide the best agricultural services in Sri Lanka</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="font-semibold text-gray-900">Trusted Platform</h3>
              <p className="text-sm text-gray-600">Government approved and verified</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚜</span>
              </div>
              <h3 className="font-semibold text-gray-900">Modern Machinery</h3>
              <p className="text-sm text-gray-600">Latest agricultural equipment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🌾</span>
              </div>
              <h3 className="font-semibold text-gray-900">Farmer First</h3>
              <p className="text-sm text-gray-600">Designed for farmers' needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🇱🇰</span>
              </div>
              <h3 className="font-semibold text-gray-900">Local Focus</h3>
              <p className="text-sm text-gray-600">Made for Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;