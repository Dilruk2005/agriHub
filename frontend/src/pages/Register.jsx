import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Tractor, UserPlus, ArrowLeft } from 'lucide-react';
import FarmerRegistration from '../components/auth/FarmerRegistration';
import MachineryRegistration from '../components/auth/MachineryRegistration';

const Register = () => {
  const [step, setStep] = useState(1); // 1: User Type, 2: Farmer Details, 3: Machinery Details
  const [userType, setUserType] = useState('farmer'); // farmer, machinery_owner, both
  const [formData, setFormData] = useState({
    // User Details
    email: '',
    password: '',
    full_name: '',
    phone: '',
    nic: '',
    
    // Farmer Details
    address: '',
    district: '',
    land_size: '',
    primary_crop: '',
    
    // Machinery Details
    machinery_type: '',
    brand: '',
    model: '',
    registration_number: '',
    year_manufactured: '',
    fuel_type: '',
    capacity: '',
    hourly_rate: '',
    daily_rate: ''
  });

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    setStep(2);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would submit to your backend API
    console.log('Registration Data:', formData);
    alert('Registration submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">Create Your Account</h2>
          <p className="text-gray-600 mt-2">Join Sri Lanka's Agricultural Machinery Hub</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center ${step >= 1 ? 'text-primary-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 1 ? 'bg-primary-600 text-white' : 'bg-gray-200'
              }`}>
                1
              </div>
              <span className="ml-2 text-sm font-medium">User Type</span>
            </div>
            <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-primary-600' : 'bg-gray-300'}`}></div>
            <div className={`flex items-center ${step >= 2 ? 'text-primary-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 2 ? 'bg-primary-600 text-white' : 'bg-gray-200'
              }`}>
                2
              </div>
              <span className="ml-2 text-sm font-medium">Details</span>
            </div>
            <div className={`w-12 h-0.5 ${step >= 3 ? 'bg-primary-600' : 'bg-gray-300'}`}></div>
            <div className={`flex items-center ${step >= 3 ? 'text-primary-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 3 ? 'bg-primary-600 text-white' : 'bg-gray-200'
              }`}>
                3
              </div>
              <span className="ml-2 text-sm font-medium">Machinery</span>
            </div>
          </div>
        </div>

        {/* Step 1: Select User Type */}
        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <button
              onClick={() => handleUserTypeSelect('farmer')}
              className="card hover:border-primary-500 hover:shadow-lg transition-all p-8 text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Farmer</h3>
              <p className="text-gray-600 text-sm mt-2">I want to rent machinery</p>
            </button>

            <button
              onClick={() => handleUserTypeSelect('machinery_owner')}
              className="card hover:border-primary-500 hover:shadow-lg transition-all p-8 text-center"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tractor className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Machinery Owner</h3>
              <p className="text-gray-600 text-sm mt-2">I want to list my machinery</p>
            </button>

            <button
              onClick={() => handleUserTypeSelect('both')}
              className="card hover:border-primary-500 hover:shadow-lg transition-all p-8 text-center"
            >
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="relative">
                  <User className="w-8 h-8 text-purple-600" />
                  <Tractor className="w-8 h-8 text-purple-600 absolute -bottom-2 -right-2" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Both</h3>
              <p className="text-gray-600 text-sm mt-2">I'm a farmer who owns machinery</p>
            </button>
          </div>
        )}

        {/* Step 2 & 3: Registration Form */}
        {(step === 2 || step === 3) && (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            {/* Step 2: User & Farmer Details */}
            {step === 2 && (
              <FarmerRegistration 
                formData={formData} 
                onChange={handleFormChange}
                onNext={() => {
                  if (userType === 'farmer') {
                    // If only farmer, submit directly
                    handleSubmit(new Event('submit'));
                  } else {
                    setStep(3);
                  }
                }}
                userType={userType}
              />
            )}

            {/* Step 3: Machinery Details */}
            {step === 3 && (
              <MachineryRegistration 
                formData={formData} 
                onChange={handleFormChange}
                onBack={() => setStep(2)}
                onSubmit={handleSubmit}
              />
            )}
          </form>
        )}

        {/* Login Link */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/auth/login" className="text-primary-600 hover:text-primary-700 font-semibold">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;