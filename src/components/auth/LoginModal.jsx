import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Button';

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Demo users for testing
  const demoUsers = [
    { email: 'user@bhromon.com', password: 'user123', name: 'রাকিব হাসান', role: 'user' },
    { email: 'farhana@email.com', password: 'user123', name: 'ফারহানা আহমেদ', role: 'user' },
    { email: 'admin@bhromon.com', password: 'admin123', name: 'শাহিদ খান', role: 'admin' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      if (isLogin) {
        // Login logic
        const user = demoUsers.find(
          u => u.email === formData.email && u.password === formData.password
        );

        if (user) {
          const { password, ...userWithoutPassword } = user;
          onLoginSuccess(userWithoutPassword);
          resetForm();
        } else {
          setError('ভুল ইমেইল বা পাসওয়ার্ড!');
        }
      } else {
        // Register logic
        if (formData.password !== formData.confirmPassword) {
          setError('পাসওয়ার্ড মিলছে না!');
          setLoading(false);
          return;
        }

        if (formData.password.length < 6) {
          setError('পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে');
          setLoading(false);
          return;
        }

        // Create new user (demo)
        const newUser = {
          email: formData.email,
          name: formData.name,
          role: 'user'
        };

        onLoginSuccess(newUser);
        resetForm();
      }
      setLoading(false);
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setError('');
    setLoading(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const fillDemoCredentials = (type) => {
    if (type === 'user') {
      setFormData({
        ...formData,
        email: 'user@bhromon.com',
        password: 'user123'
      });
    } else if (type === 'admin') {
      setFormData({
        ...formData,
        email: 'admin@bhromon.com',
        password: 'admin123'
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-8 text-white text-center">
                <button
                  onClick={handleClose}
                  className="absolute right-4 top-4 p-1 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
                
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">ভ্র</span>
                </div>
                
                <h2 className="text-2xl font-bold mb-2">
                  {isLogin ? 'স্বাগতম!' : 'নতুন অ্যাকাউন্ট'}
                </h2>
                <p className="text-blue-100">
                  {isLogin 
                    ? 'আপনার অ্যাকাউন্টে লগইন করুন' 
                    : 'রেজিস্টার করে ভ্রমণ শুরু করুন'}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6">
                {!isLogin && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      আপনার নাম
                    </label>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="আপনার নাম লিখুন"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ইমেইল ঠিকানা
                  </label>
                  <div className="relative">
                    <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    পাসওয়ার্ড
                  </label>
                  <div className="relative">
                    <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {!isLogin && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      পাসওয়ার্ড আবার দিন
                    </label>
                    <div className="relative">
                      <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <p className="text-red-600 text-sm">{error}</p>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  fullWidth
                  size="lg"
                  disabled={loading}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white mb-4"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      {isLogin ? 'লগইন হচ্ছে...' : 'রেজিস্টার হচ্ছে...'}
                    </div>
                  ) : (
                    isLogin ? 'লগইন করুন' : 'রেজিস্টার করুন'
                  )}
                </Button>

                {/* Demo Accounts */}
                <div className="mb-4">
                  <p className="text-center text-sm text-gray-500 mb-3">
                    ডেমো অ্যাকাউন্ট
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => fillDemoCredentials('user')}
                      className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-blue-600 font-bold">U</span>
                      </div>
                      <p className="text-xs font-medium">ব্যবহারকারী</p>
                      <p className="text-xs text-gray-500">user@bhromon.com</p>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => fillDemoCredentials('admin')}
                      className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-purple-600 font-bold">A</span>
                      </div>
                      <p className="text-xs font-medium">অ্যাডমিন</p>
                      <p className="text-xs text-gray-500">admin@bhromon.com</p>
                    </button>
                  </div>
                </div>

                {/* Toggle between Login/Register */}
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    {isLogin ? 'একাউন্ট নেই? ' : 'ইতিমধ্যে একাউন্ট আছে? '}
                    <button
                      type="button"
                      onClick={() => {
                        setIsLogin(!isLogin);
                        setError('');
                      }}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {isLogin ? 'রেজিস্টার করুন' : 'লগইন করুন'}
                    </button>
                  </p>
                </div>
              </form>

              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-xs text-center text-gray-500">
                  লগইন করে আপনি আমাদের 
                  <a href="/terms" className="text-blue-600 hover:underline mx-1">শর্তাবলী</a>
                  এবং 
                  <a href="/privacy" className="text-blue-600 hover:underline mx-1">গোপনীয়তা নীতি</a>
                  মেনে নিচ্ছেন।
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;