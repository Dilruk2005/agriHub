import React from 'react';
import { User, MapPin, Phone, Mail, Lock, FileText, ArrowLeft, ArrowRight } from 'lucide-react';

const FarmerRegistration = ({ formData, onChange, onNext, onBack, userType }) => {
  const districts = [
    'Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Matale', 'Nuwara Eliya',
    'Galle', 'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar',
    'Vavuniya', 'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee',
    'Kurunegala', 'Puttalam', 'Anuradhapura', 'Polonnaruwa', 'Badulla',
    'Monaragala', 'Ratnapura', 'Kegalle'
  ];

  const crops = [
    'Rice', 'Tea', 'Rubber', 'Coconut', 'Vegetables', 'Fruits',
    'Maize', 'Soybean', 'Groundnut', 'Chili', 'Onion', 'Potato',
    'Other'
  ];

  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
        <p className="text-gray-600 text-sm">Fill in your personal and farming details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="label-field flex items-center space-x-2">
            <User size={18} className="text-gray-400" />
            <span>Full Name *</span>
          </label>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={onChange}
            required
            className="input-field"
            placeholder="e.g., Saman Perera"
          />
        </div>

        <div>
          <label className="label-field flex items-center space-x-2">
            <FileText size={18} className="text-gray-400" />
            <span>NIC Number *</span>
          </label>
          <input
            type="text"
            name="nic"
            value={formData.nic}
            onChange={onChange}
            required
            className="input-field"
            placeholder="e.g., 199012345678"
          />
          <p className="text-xs text-gray-500 mt-1">Enter 12 digits or 9 digits with V/X</p>
        </div>

        <div>
          <label className="label-field flex items-center space-x-2">
            <Phone size={18} className="text-gray-400" />
            <span>Phone Number *</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            required
            className="input-field"
            placeholder="e.g., 0771234567"
          />
        </div>

        <div>
          <label className="label-field flex items-center space-x-2">
            <Mail size={18} className="text-gray-400" />
            <span>Email Address *</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            required
            className="input-field"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="label-field flex items-center space-x-2">
            <Lock size={18} className="text-gray-400" />
            <span>Password *</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={onChange}
            required
            className="input-field"
            placeholder="Min 6 characters"
          />
        </div>

        <div className="md:col-span-2">
          <label className="label-field flex items-center space-x-2">
            <MapPin size={18} className="text-gray-400" />
            <span>Address *</span>
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={onChange}
            required
            className="input-field"
            placeholder="Your full address"
          />
        </div>

        <div>
          <label className="label-field flex items-center space-x-2">
            <MapPin size={18} className="text-gray-400" />
            <span>District *</span>
          </label>
          <select
            name="district"
            value={formData.district}
            onChange={onChange}
            required
            className="input-field"
          >
            <option value="">Select District</option>
            {districts.map(district => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="label-field">
            <span>Land Size (Hectares)</span>
          </label>
          <input
            type="number"
            name="land_size"
            value={formData.land_size}
            onChange={onChange}
            className="input-field"
            placeholder="e.g., 2.5"
            step="0.01"
          />
        </div>

        <div className="md:col-span-2">
          <label className="label-field">
            <span>Primary Crop</span>
          </label>
          <select
            name="primary_crop"
            value={formData.primary_crop}
            onChange={onChange}
            className="input-field"
          >
            <option value="">Select Primary Crop</option>
            {crops.map(crop => (
              <option key={crop} value={crop}>{crop}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-between items-center pt-4 border-t">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>
        <button
          type="button"
          onClick={onNext}
          className="flex items-center space-x-2 btn-primary"
        >
          <span>{userType === 'farmer' ? 'Complete Registration' : 'Next: Add Machinery'}</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default FarmerRegistration;