import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { 
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserIcon,
  Cog6ToothIcon,
  ClockIcon,
  HeartIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Button from './Button';

const LoginButton = ({ scrolled, isHome }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This will come from your auth state

  // Mock user data - replace with real auth data
  const user = {
    name: 'রহিম মিয়া',
    email: 'rahim@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  };

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Login clicked');
    // For demo, toggle login state
    // setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logout clicked');
    setIsOpen(false);
    // setIsLoggedIn(false);
  };

  // If logged in, show profile dropdown
  if (isLoggedIn) {
    return (
      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <img
            src={user.avatar}
            alt={user.name}
            className="w-9 h-9 rounded-full border-2 border-white shadow-lg object-cover"
          />
          <span className={clsx(
            "hidden md:inline font-medium",
            scrolled || !isHome ? "text-stone-700" : "text-white"
          )}>
            {user.name}
          </span>
          <ChevronDownIcon className={clsx(
            "w-4 h-4 transition-transform duration-300",
            isOpen && "rotate-180",
            scrolled || !isHome ? "text-stone-700" : "text-white"
          )} />
        </motion.button>

        {/* Profile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-64 bg-white rounded-2xl ring-1 ring-stone-100 shadow-xl overflow-hidden z-50"
            >
              {/* User Info */}
              <div className="p-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-emerald-100">{user.email}</p>
              </div>

              {/* Menu Items */}
              <div className="py-2">
                <Link
                  to="/profile"
                  className="flex items-center space-x-3 px-4 py-3 text-stone-700 hover:bg-emerald-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <UserIcon className="w-5 h-5 text-stone-500" />
                  <span>প্রোফাইল</span>
                </Link>

                <Link
                  to="/bookings"
                  className="flex items-center space-x-3 px-4 py-3 text-stone-700 hover:bg-emerald-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <ClockIcon className="w-5 h-5 text-stone-500" />
                  <span>আমার বুকিং</span>
                </Link>

                <Link
                  to="/wishlist"
                  className="flex items-center space-x-3 px-4 py-3 text-stone-700 hover:bg-emerald-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <HeartIcon className="w-5 h-5 text-stone-500" />
                  <span>পছন্দের তালিকা</span>
                </Link>

                <Link
                  to="/settings"
                  className="flex items-center space-x-3 px-4 py-3 text-stone-700 hover:bg-emerald-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Cog6ToothIcon className="w-5 h-5 text-stone-500" />
                  <span>সেটিংস</span>
                </Link>

                <hr className="my-2" />

                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                >
                  <ArrowRightOnRectangleIcon className="w-5 h-5" />
                  <span>লগআউট</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // If not logged in, show login/signup buttons
  return (
    <div className="flex items-center space-x-3">
      {/* Login Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="sm"
          onClick={handleLogin}
          icon={UserCircleIcon}
          className={clsx(
            "px-5 transition-all duration-300 border font-medium",
            scrolled || !isHome
              ? "bg-emerald-600 text-white border-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30"
              : "bg-white/20 text-white border-white/30 backdrop-blur-md hover:bg-white hover:text-emerald-600"
          )}
        >
          লগইন
        </Button>
      </motion.div>

      {/* Sign Up Button - Visible on larger screens */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block"
      >
        <Button
          size="sm"
          variant="outline"
          onClick={handleLogin}
          className={clsx(
            "px-5 transition-all duration-300",
            scrolled || !isHome
              ? "border-stone-300 text-stone-700 hover:bg-stone-100"
              : "border-white text-white hover:bg-white/20"
          )}
        >
          সাইন আপ
        </Button>
      </motion.div>
    </div>
  );
};

export default LoginButton;