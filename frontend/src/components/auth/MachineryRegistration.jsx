import React from 'react';
import { Tractor, Calendar, Fuel, DollarSign, Package, Hash, ArrowLeft, Check } from 'lucide-react';

const MachineryRegistration = ({ formData, onChange, onBack, onSubmit }) => {
  const machineryTypes = [
    'Tractor', 'Harvester', 'Cultivator', 'Seeder', 
    'Water Pump', 'Sprayer', 'Plough', 'Rotavator',
    'Thresher', 'Winnower', 'Fertilizer Spreader', 'Trailer'
  ];

  const fuelTypes = ['Diesel', 'Petrol', 'Electric', 'Solar', 'Manual', 'CNG'];

  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h3 className="text-xl font-semibold text-gray-900">Machinery Registration</h3>
        <p className="text-gray-600 text-sm">Register your agricultural machinery details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="label-field flex items-center space-x-2">
            <Tractor size={18} className="text-gray-400" />
            <span>Machinery Type *</span>
          </label>
          <select
            name="machinery_type"
            value={formData.machinery_type}
            onChange={onChange}
            required
            className="input-field"
          >
            <option value="">Select Machinery Type</option>
            {machineryTypes.map(type => (
              <option key={type} value={type.toLowerCase()}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="label-field flex items-center space-x-2">
            <Package size={18} className="text-gray-400" />
            <span>Brand *</span>
          </label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={onChange}
            required
            className="input-field"
            placeholder="e.g., Mahindra, Kubota"
          />
        </div>

        <div>
          <label className="label-field flex items-center space-x-2">
            <Hash size={18} className="text-gray-400" />
            <span>Model *</span>
          </label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={onChange}
            required
            className="input-field"
            placeholder="e.g., 575 DI, DC-68"
          />
        </div>

        <div>
          <label className="label-field flex items-center space-x-2">
            <Hash size={18} className="text-gray-400" />
            <span>Registration Number *</span>
          </label>
          <input
            type="text"
            name="registration_number"
            value={formData.registration_number}
            onChange={onChange}
            required
            className="input-field"
            placeholder="e.g., LKA-2023-001"
          />
        </div>

        <div>
          <label className="label-field flex items-center space-x-2">
            <Calendar size={18} className="text-gray-400" />
            <span>Year Manufactured *</span>
          </label>
          <input
            type="number"
            name="year_manufactured"
            value={formData.year_manufactured}
            onChange={onChange}
            required
            className="input-field"
            placeholder="e.g., 2023"
            min="1990"
            max={new Date().getFullYear()}
          />
        </div>

        <div>
          <label className="label-field flex items-center space-x-2">
            <Fuel size={18} className="text-gray-400" />
            <span>Fuel Type *</span>
          </label>
          <select
            name="fuel_type"
            value={formData.fuel_type}
            onChange={onChange}
            required
            className="input-field"
          >
            <option value="">Select Fuel Type</option>
            {fuelTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="label-field flex items-center space-x-2">
            <Package size={18} className="text-gray-400" />
            <span>Capacity (HP/Liters)</span>
          </label>
          <input
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={onChange}
            className="input-field"
            placeholder="e.g., 45"
            step="0.5"
          />
        </div>

        <div>
          <label className="label-field flex items-center space-x-2">
            <DollarSign size={18} className="text-gray-400" />
            <span>Hourly Rate (LKR) *</span>
          </label>
          <input
            type="number"
            name="hourly_rate"
            value={formData.hourly_rate}
            onChange={onChange}
            required
            className="input-field"
            placeholder="e.g., 2500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="label-field flex items-center space-x-2">
            <DollarSign size={18} className="text-gray-400" />
            <span>Daily Rate (LKR) *</span>
          </label>
          <input
            type="number"
            name="daily_rate"
            value={formData.daily_rate}
            onChange={onChange}
            required
            className="input-field"
            placeholder="e.g., 15000"
          />
        </div>
      </div>

      <div className="flex justify-between items-center pt-4 border-t">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back to Personal Details</span>
        </button>
        <button
          type="submit"
          className="flex items-center space-x-2 btn-primary"
        >
          <Check size={18} />
          <span>Complete Registration</span>
        </button>
      </div>
    </div>
  );
};

export default MachineryRegistration;