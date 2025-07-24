import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiLock, FiSettings, FiEdit, FiUpload, FiUsers, FiArrowLeft } = FiIcons;

const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple demo authentication
    if (credentials.username === 'admin' && credentials.password === 'navy2023') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials. Demo: admin/navy2023');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCredentials({ username: '', password: '' });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <SafeIcon icon={FiLock} className="h-16 w-16 text-gold-500 mx-auto mb-4" />
            <h1 className="text-2xl font-display font-bold text-navy-900">
              Admin Dashboard
            </h1>
            <p className="text-pearl-600">Secure access required</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-2">
                Username
              </label>
              <div className="relative">
                <SafeIcon icon={FiUser} className="absolute left-3 top-3 h-5 w-5 text-pearl-400" />
                <input
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-pearl-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="Enter username"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-900 mb-2">
                Password
              </label>
              <div className="relative">
                <SafeIcon icon={FiLock} className="absolute left-3 top-3 h-5 w-5 text-pearl-400" />
                <input
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-pearl-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gold-gradient text-navy-900 font-semibold py-3 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-pearl-500">
              Demo credentials: admin / navy2023
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pearl-50">
      {/* Header */}
      <div className="bg-navy-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <a href="/" className="text-gold-500 hover:text-gold-400 transition-colors">
                <SafeIcon icon={FiArrowLeft} className="h-6 w-6" />
              </a>
              <h1 className="text-xl font-display font-bold text-white">
                Admin Dashboard
              </h1>
            </div>
            <button
              onClick={handleLogout}
              className="bg-gold-500 text-navy-900 px-4 py-2 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Edit Timeline */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <SafeIcon icon={FiEdit} className="h-8 w-8 text-gold-500 mr-3" />
              <h2 className="text-xl font-semibold text-navy-900">Edit Timeline</h2>
            </div>
            <p className="text-pearl-600 mb-4">
              Add, edit, or remove timeline events and career milestones.
            </p>
            <button className="w-full bg-navy-700 text-white py-2 px-4 rounded-lg hover:bg-navy-800 transition-colors">
              Manage Timeline
            </button>
          </div>

          {/* Upload Media */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <SafeIcon icon={FiUpload} className="h-8 w-8 text-gold-500 mr-3" />
              <h2 className="text-xl font-semibold text-navy-900">Upload Media</h2>
            </div>
            <p className="text-pearl-600 mb-4">
              Add new photos, videos, and documents to the gallery.
            </p>
            <button className="w-full bg-navy-700 text-white py-2 px-4 rounded-lg hover:bg-navy-800 transition-colors">
              Upload Files
            </button>
          </div>

          {/* Manage Guestbook */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <SafeIcon icon={FiUsers} className="h-8 w-8 text-gold-500 mr-3" />
              <h2 className="text-xl font-semibold text-navy-900">Guestbook</h2>
            </div>
            <p className="text-pearl-600 mb-4">
              Review and approve guestbook messages from visitors.
            </p>
            <button className="w-full bg-navy-700 text-white py-2 px-4 rounded-lg hover:bg-navy-800 transition-colors">
              Review Messages
            </button>
          </div>

          {/* Site Settings */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <SafeIcon icon={FiSettings} className="h-8 w-8 text-gold-500 mr-3" />
              <h2 className="text-xl font-semibold text-navy-900">Site Settings</h2>
            </div>
            <p className="text-pearl-600 mb-4">
              Configure site-wide settings and preferences.
            </p>
            <button className="w-full bg-navy-700 text-white py-2 px-4 rounded-lg hover:bg-navy-800 transition-colors">
              Site Settings
            </button>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold text-navy-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-pearl-200">
              <span className="text-pearl-700">New guestbook message from Admiral Mitchell</span>
              <span className="text-sm text-pearl-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-pearl-200">
              <span className="text-pearl-700">Photo uploaded to gallery</span>
              <span className="text-sm text-pearl-500">1 day ago</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-pearl-700">Timeline event updated</span>
              <span className="text-sm text-pearl-500">3 days ago</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;