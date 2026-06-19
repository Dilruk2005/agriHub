import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Wrench, Calendar, Clock, User, Check, Phone, Mail, MapPin } from 'lucide-react';

const MaintenanceService = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    machineType: '',
    brand: '',
    model: '',
    issue: '',
    date: '',
    time: '',
    priority: 'medium'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the data to your backend
    console.log('Maintenance Request:', formData);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        machineType: '',
        brand: '',
        model: '',
        issue: '',
        date: '',
        time: '',
        priority: 'medium'
      });
    }, 3000);
  };

  const machineTypes = [
    'Tractor', 'Harvester', 'Cultivator', 'Seeder', 
    'Water Pump', 'Sprayer', 'Plough', 'Rotavator',
    'Thresher', 'Other'
  ];

  const priorities = [
    { value: 'low', label: 'Low - Routine maintenance' },
    { value: 'medium', label: 'Medium - Needs attention' },
    { value: 'high', label: 'High - Urgent repair needed' }
  ];

  const services = [
    {
      icon: Wrench,
      title: 'Routine Maintenance',
      description: 'Regular servicing to keep your machinery in top condition',
      price: 'From LKR 5,000'
    },
    {
      icon: Clock,
      title: 'Emergency Repairs',
      description: 'Quick response for urgent breakdowns',
      price: 'From LKR 8,000'
    },
    {
      icon: User,
      title: 'Expert Technicians',
      description: 'Certified professionals with years of experience',
      price: 'Included'
    },
    {
      icon: Check,
      title: 'Genuine Parts',
      description: 'Original manufacturer parts for quality assurance',
      price: 'Included'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-orange-100 hover:text-white mb-4">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Services
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Maintenance Service</h1>
          <p className="text-orange-100 mt-2">Professional maintenance and repair for your agricultural machinery</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Service Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm p-4 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">{service.title}</h4>
                <p className="text-xs text-gray-600 mt-1">{service.description}</p>
                <p className="text-xs text-orange-600 font-medium mt-1">{service.price}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Request Maintenance Service</h3>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Request Submitted!</h4>
                  <p className="text-gray-600 mt-2">Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="label-field">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="label-field">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="0771234567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label-field">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="label-field">Machine Type *</label>
                      <select
                        name="machineType"
                        value={formData.machineType}
                        onChange={handleChange}
                        required
                        className="input-field"
                      >
                        <option value="">Select type</option>
                        {machineTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label-field">Brand</label>
                      <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="e.g., Mahindra"
                      />
                    </div>
                    <div>
                      <label className="label-field">Model</label>
                      <input
                        type="text"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="e.g., 575 DI"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label-field">Issue Description *</label>
                    <textarea
                      name="issue"
                      value={formData.issue}
                      onChange={handleChange}
                      required
                      rows="3"
                      className="input-field"
                      placeholder="Describe the problem in detail"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="label-field">Preferred Date</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="label-field">Preferred Time</label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="label-field">Priority Level</label>
                      <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        className="input-field"
                      >
                        {priorities.map(p => (
                          <option key={p.value} value={p.value}>{p.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
                    <Wrench className="w-4 h-4" />
                    <span>Submit Maintenance Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                  <Phone className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Hotline</p>
                    <p className="text-sm text-gray-600">+94 112 345 678</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                  <Mail className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">service@agrihub.lk</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Service Centers</p>
                    <p className="text-sm text-gray-600">Colombo, Kandy, Galle</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-red-600">Closed</span>
                </div>
                <div className="mt-3 pt-3 border-t">
                  <p className="text-xs text-gray-500">Emergency service available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceService;