import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
    { path: '/news', label: 'News' },
    { path: '/faq', label: 'FAQ' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🌾</span>
            </div>
            <span className="text-xl font-bold text-primary-700 hidden sm:block">
              AgriHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-600 hover:text-primary-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side - Login/Register Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              to="/auth/login"
              className="text-gray-600 hover:text-primary-600 font-medium"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
            >
              Register
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-600"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-2 text-gray-600 hover:text-primary-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Login/Register Links */}
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
              <Link
                to="/auth/login"
                className="block w-full text-center px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="block w-full text-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;