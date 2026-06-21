import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  GraduationCap, 
  Clock, 
  Users, 
  Award, 
  Calendar, 
  Check, 
  ArrowRight,
  BookOpen,
  Target,
  Star
} from 'lucide-react';

const Training = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [registered, setRegistered] = useState(false);

  const courses = [
    {
      id: 1,
      title: 'Modern Farming Techniques',
      duration: '2 Days',
      price: 'Free',
      seats: 25,
      description: 'Learn modern farming techniques including precision agriculture, crop management, and sustainable practices.',
      topics: ['Precision Agriculture', 'Crop Management', 'Sustainable Farming', 'Soil Health'],
      date: '2024-02-15',
      time: '9:00 AM - 5:00 PM',
      level: 'Beginner',
      instructor: 'Dr. Saman Perera'
    },
    {
      id: 2,
      title: 'Tractor Operation & Safety',
      duration: '3 Days',
      price: 'LKR 5,000',
      seats: 15,
      description: 'Comprehensive training on tractor operation, maintenance, and safety procedures.',
      topics: ['Tractor Controls', 'Safety Procedures', 'Maintenance', 'Field Operations'],
      date: '2024-02-22',
      time: '8:00 AM - 4:00 PM',
      level: 'Intermediate',
      instructor: 'Mr. Kamal Silva'
    },
    {
      id: 3,
      title: 'Harvester Operation',
      duration: '2 Days',
      price: 'LKR 4,000',
      seats: 12,
      description: 'Learn to operate modern harvesters efficiently and safely.',
      topics: ['Harvester Controls', 'Efficiency Tips', 'Maintenance', 'Safety Guidelines'],
      date: '2024-03-01',
      time: '8:00 AM - 4:00 PM',
      level: 'Intermediate',
      instructor: 'Mr. Nimal Fernando'
    },
    {
      id: 4,
      title: 'Agricultural Machinery Maintenance',
      duration: '3 Days',
      price: 'LKR 6,000',
      seats: 20,
      description: 'Learn preventive maintenance and basic repairs for agricultural machinery.',
      topics: ['Preventive Maintenance', 'Basic Repairs', 'Troubleshooting', 'Parts Replacement'],
      date: '2024-03-08',
      time: '9:00 AM - 5:00 PM',
      level: 'Advanced',
      instructor: 'Dr. Anura Bandara'
    }
  ];

  const handleRegister = (courseId) => {
    setSelectedCourse(courseId);
    setRegistered(true);
    setTimeout(() => setRegistered(false), 3000);
  };

  const getLevelColor = (level) => {
    const colors = {
      'Beginner': 'bg-green-100 text-green-700',
      'Intermediate': 'bg-yellow-100 text-yellow-700',
      'Advanced': 'bg-red-100 text-red-700'
    };
    return colors[level] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-red-100 hover:text-white mb-4">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Services
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Training Programs</h1>
          <p className="text-red-100 mt-2">Learn modern farming techniques from expert instructors</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course List */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className={`bg-white rounded-xl shadow-sm border p-6 transition-all ${
                    selectedCourse === course.id ? 'border-red-500 shadow-md' : 'border-gray-100'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(course.level)}`}>
                          {course.level}
                        </span>
                        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                          {course.price}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{course.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.seats} seats left</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{course.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GraduationCap className="w-4 h-4" />
                      <span>{course.instructor}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {course.topics.map((topic) => (
                      <span key={topic} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>

                  {registered && selectedCourse === course.id ? (
                    <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3 flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-green-700 font-medium">Registration successful! Check your email.</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleRegister(course.id)}
                      className="mt-4 flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm font-medium"
                    >
                      <span>Register Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-semibold text-gray-900">Why Train With Us?</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Expert Instructors</p>
                    <p className="text-sm text-gray-600">Learn from experienced professionals</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Hands-on Training</p>
                    <p className="text-sm text-gray-600">Practical experience with real machinery</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Certification</p>
                    <p className="text-sm text-gray-600">Earn recognized certificates</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Modern Techniques</p>
                    <p className="text-sm text-gray-600">Learn latest farming methods</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <p className="text-sm text-red-700">
                  <span className="font-semibold">Limited seats available!</span> Register early to secure your spot.
                </p>
              </div>

              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Star className="w-4 h-4 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Student Reviews</p>
                    <p className="text-sm text-gray-600">⭐ 4.8/5 from 200+ students</p>
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

export default Training;