import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Tractor, 
  ChevronLeft, 
  Check, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';

const MachineryBooking = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedMachine, setSelectedMachine] = useState('');

  const machines = [
    { id: 1, name: 'Tractor - Mahindra 575 DI', rate: 'LKR 2,500/hr', available: true },
    { id: 2, name: 'Harvester - Kubota DC-68', rate: 'LKR 3,500/hr', available: true },
    { id: 3, name: 'Cultivator - Honda FJ-500', rate: 'LKR 1,500/hr', available: false },
    { id: 4, name: 'Water Pump - Honda WB-30', rate: 'LKR 1,200/hr', available: true },
  ];

  const timeSlots = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'];

  const features = [
    'Easy online booking',
    'Choose your date and time',
    'Select from available machinery',
    'Instant confirmation',
    'Track your booking status',
    'Modify or cancel bookings'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-blue-100 hover:text-white mb-4">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Services
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Machinery Booking Service</h1>
          <p className="text-blue-100 mt-2">Book agricultural machinery online with ease</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Steps */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`flex items-center space-x-2 ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                      1
                    </div>
                    <span className="text-sm font-medium">Select Date</span>
                  </div>
                  <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                  <div className={`flex items-center space-x-2 ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                      2
                    </div>
                    <span className="text-sm font-medium">Choose Time</span>
                  </div>
                  <div className={`w-12 h-0.5 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                  <div className={`flex items-center space-x-2 ${step >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                      3
                    </div>
                    <span className="text-sm font-medium">Select Machine</span>
                  </div>
                </div>
              </div>

              {/* Step 1: Select Date */}
              {step === 1 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Booking Date</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['2024-01-20', '2024-01-21', '2024-01-22', '2024-01-23', '2024-01-24', '2024-01-25'].map((date) => (
                      <button
                        key={date}
                        onClick={() => {
                          setSelectedDate(date);
                          setStep(2);
                        }}
                        className={`p-4 border-2 rounded-lg text-center transition-all ${
                          selectedDate === date 
                            ? 'border-blue-600 bg-blue-50' 
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="text-sm font-medium text-gray-900">
                          {new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          {new Date(date).getDate()}
                        </div>
                        <div className="text-xs text-gray-500">
                          {new Date(date).toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Select Time */}
              {step === 2 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Time Slot</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => {
                          setSelectedTime(time);
                          setStep(3);
                        }}
                        className={`p-3 border-2 rounded-lg text-center transition-all ${
                          selectedTime === time 
                            ? 'border-blue-600 bg-blue-50' 
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <Clock className="w-4 h-4 mx-auto mb-1 text-gray-400" />
                        <span className="text-sm font-medium text-gray-900">{time}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Select Machine */}
              {step === 3 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Machinery</h3>
                  <div className="space-y-3">
                    {machines.map((machine) => (
                      <button
                        key={machine.id}
                        onClick={() => setSelectedMachine(machine.id)}
                        className={`w-full p-4 border-2 rounded-lg text-left transition-all flex items-center justify-between ${
                          selectedMachine === machine.id 
                            ? 'border-blue-600 bg-blue-50' 
                            : machine.available ? 'border-gray-200 hover:border-blue-300' : 'border-gray-200 opacity-50 cursor-not-allowed'
                        }`}
                        disabled={!machine.available}
                      >
                        <div className="flex items-center space-x-3">
                          <Tractor className="w-5 h-5 text-gray-600" />
                          <div>
                            <div className="font-medium text-gray-900">{machine.name}</div>
                            <div className="text-sm text-gray-500">{machine.rate}</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {machine.available ? (
                            <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">Available</span>
                          ) : (
                            <span className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full">Booked</span>
                          )}
                          {selectedMachine === machine.id && (
                            <Check className="w-5 h-5 text-blue-600 ml-2" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-6 pt-6 border-t">
                <button
                  onClick={() => {
                    if (step > 1) {
                      setStep(step - 1);
                      if (step === 3) setSelectedMachine('');
                      if (step === 2) setSelectedTime('');
                    }
                  }}
                  className="text-gray-600 hover:text-gray-800 px-4 py-2"
                >
                  Back
                </button>
                {step === 3 && (
                  <button
                    onClick={() => alert('Booking submitted! Please check your email for confirmation.')}
                    disabled={!selectedMachine}
                    className={`flex items-center space-x-2 px-6 py-2 rounded-lg font-medium ${
                      selectedMachine 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <span>Confirm Booking</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Booking Summary */}
            {(selectedDate || selectedTime || selectedMachine) && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Booking Summary</h3>
                <div className="space-y-2 text-sm">
                  {selectedDate && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium">{selectedDate}</span>
                    </div>
                  )}
                  {selectedTime && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                  )}
                  {selectedMachine && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Machine:</span>
                      <span className="font-medium">{machines.find(m => m.id === selectedMachine)?.name}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Service Features</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-blue-700">
                      <span className="font-semibold">Need help?</span> Call us at +94 112 345 678 or email support@agrihub.lk
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineryBooking;