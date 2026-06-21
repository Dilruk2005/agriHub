import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  Headphones, 
  Mail, 
  Phone, 
  MessageCircle, 
  Send, 
  Clock, 
  CheckCircle,
  AlertCircle,
  HelpCircle,
  User,
  MapPin
} from 'lucide-react';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
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
    console.log('Support Request:', formData);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        priority: 'medium'
      });
    }, 3000);
  };

  const faqs = [
    {
      question: 'How do I book a machine?',
      answer: 'Login to your account, browse available machinery, select your preferred date and time, and submit a booking request.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept bank transfers, mobile payments (e.g., mCash, eZ Cash), and cash payments at service hubs.'
    },
    {
      question: 'How do I cancel a booking?',
      answer: 'Go to your bookings, select the booking you want to cancel, and click the cancel button. Cancellation fees may apply.'
    },
    {
      question: 'What happens if machinery breaks down?',
      answer: 'Contact our support team immediately. We will arrange a replacement or repair service at no extra cost.'
    },
    {
      question: 'How do I register as a farmer?',
      answer: 'Click on the Register button, fill in your details including NIC, address, and create a password.'
    },
    {
      question: 'Are the machinery operators trained?',
      answer: 'Yes, all our machinery operators are certified professionals with years of experience.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-teal-100 hover:text-white mb-4">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Services
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Farmer Support</h1>
          <p className="text-teal-100 mt-2">We're here to help you with any questions or concerns</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Support Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Submit a Support Request</h3>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Request Submitted!</h4>
                  <p className="text-gray-600 mt-2">We will respond to your query within 24 hours.</p>
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
                      <label className="label-field">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label-field">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="0771234567"
                    />
                  </div>

                  <div>
                    <label className="label-field">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Brief subject"
                    />
                  </div>

                  <div>
                    <label className="label-field">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="input-field"
                      placeholder="Describe your issue in detail"
                    ></textarea>
                  </div>

                  <div>
                    <label className="label-field">Priority Level</label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="low">Low - General inquiry</option>
                      <option value="medium">Medium - Need assistance</option>
                      <option value="high">High - Urgent issue</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
                    <Send className="w-4 h-4" />
                    <span>Submit Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Contact */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <Headphones className="w-5 h-5 text-teal-600" />
                <span>Quick Contact</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-teal-50 rounded-lg">
                  <Phone className="w-5 h-5 text-teal-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Hotline</p>
                    <p className="text-sm text-gray-600">+94 112 345 678</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-teal-50 rounded-lg">
                  <Mail className="w-5 h-5 text-teal-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">support@agrihub.lk</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-teal-50 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-teal-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">WhatsApp</p>
                    <p className="text-sm text-gray-600">+94 77 123 4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <Clock className="w-5 h-5 text-teal-600" />
                <span>Business Hours</span>
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-red-600">Closed</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600 mt-2 pt-2 border-t">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Response within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-2 text-green-600 mb-3">
                <CheckCircle className="w-5 h-5" />
                <h3 className="text-lg font-semibold text-gray-900">Response Time</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>Low Priority</span>
                  <span>24-48 hours</span>
                </li>
                <li className="flex justify-between">
                  <span>Medium Priority</span>
                  <span>12-24 hours</span>
                </li>
                <li className="flex justify-between">
                  <span>High Priority</span>
                  <span className="text-red-600 font-medium">4-6 hours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8 flex items-center justify-center space-x-2">
            <HelpCircle className="w-6 h-6 text-teal-600" />
            <span>Frequently Asked Questions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-start space-x-2">
                  <span className="text-teal-600">Q:</span>
                  <span>{faq.question}</span>
                </h4>
                <p className="text-sm text-gray-600 ml-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;