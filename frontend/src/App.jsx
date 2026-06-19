import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'leaflet/dist/leaflet.css';

// Layouts
import MainLayout from './components/layout/MainLayout';

// Main Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import FAQ from './pages/FAQ';
import Register from './pages/Register';

// Services Pages
import Services from './pages/services/index';
import MachineryBooking from './pages/services/MachineryBooking';
import HubLocator from './pages/services/HubLocator';
import MachineryRental from './pages/services/MachineryRental';
import MaintenanceService from './pages/services/MaintenanceService';
import Training from './pages/services/Training';
import Support from './pages/services/Support';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Main Routes with Header and Footer */}
          <Route path="/" element={<MainLayout />}>
            {/* Home and Information Pages */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="news" element={<News />} />
            <Route path="faq" element={<FAQ />} />
            
            {/* Services Pages */}
            <Route path="services" element={<Services />} />
            <Route path="services/booking" element={<MachineryBooking />} />
            <Route path="services/hubs" element={<HubLocator />} />
            <Route path="services/rental" element={<MachineryRental />} />
            <Route path="services/maintenance" element={<MaintenanceService />} />
            <Route path="services/training" element={<Training />} />
            <Route path="services/support" element={<Support />} />
          </Route>
          
          {/* Auth Routes - No Header/Footer */}
          <Route path="/auth/register" element={<Register />} />
        </Routes>
        
        {/* Toast Notifications */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </Router>
  );
}

export default App;