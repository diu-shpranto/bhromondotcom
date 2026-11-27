import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import LoginModal from '../components/auth/LoginModal';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // This will now work properly
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleLoginSuccess = (userData) => {
    login(userData);
    setIsModalOpen(false);
    
    // Redirect based on role
    if (userData.role === 'admin') {
      navigate('/admin/dashboard');
    } else {
      navigate('/');
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 to-emerald-800">
      <LoginModal
        isOpen={isModalOpen}
        onClose={handleClose}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
};

export default LoginPage;