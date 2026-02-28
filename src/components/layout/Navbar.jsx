import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  HomeIcon,
  BriefcaseIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  NewspaperIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileOpen(null);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Navigation links with icons
  const navLinks = [
    { 
      name: 'হোম', 
      path: '/',
      
    },
    { 
      name: 'প্যাকেজ', 
      path: '/packages',
      dropdown: [
        { name: 'সিঙ্গেল প্যাকেজ', path: '/packages?category=Single' },
        { name: 'ফ্যামিলি প্যাকেজ', path: '/packages?category=Family' },
        { name: 'কাপল প্যাকেজ', path: '/packages?category=Couple' },
        { name: 'অ্যাডভেঞ্চার', path: '/packages?category=Adventure' },
        { name: 'গ্রুপ প্যাকেজ', path: '/packages?category=Group' },
      ]
    },
    { 
      name: 'গন্তব্য', 
      path: '/destinations',
      dropdown: [
        { name: 'কক্সবাজার', path: '/destination/coxsbazar' },
        { name: 'সেন্টমার্টিন', path: '/destination/saintmartin' },
        { name: 'সাজেক ভ্যালি', path: '/destination/sajek' },
        { name: 'বান্দরবান', path: '/destination/bandarban' },
        { name: 'শ্রীমঙ্গল', path: '/destination/sreemangal' },
        { name: 'সুন্দরবন', path: '/destination/sundarban' },
      ]
    },
    { 
      name: 'কোম্পানি', 
      path: '/companies',
    },
    { 
      name: 'ব্লগ', 
      path: '/blog',
    },
  ];

  // Text color based on scroll and page
  const textColor = scrolled || !isHome ? 'text-gray-800' : 'text-white';
  const hoverColor = scrolled || !isHome ? 'hover:text-blue-600' : 'hover:text-blue-200';
  const bgColor = scrolled || !isHome 
    ? 'bg-white/90 backdrop-blur-xl shadow-lg' 
    : 'bg-transparent';

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        className={clsx(
          "fixed w-full z-40 transition-all duration-500 py-3",
          bgColor,
          isHome && !scrolled && "bg-gradient-to-b from-black/50 to-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className={clsx(
                  "w-10 h-10 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300",
                  scrolled || !isHome
                    ? "bg-gradient-to-r from-blue-600 to-blue-800"
                    : "bg-white/20 backdrop-blur-md border border-white/30"
                )}
              >
                <span className="text-white font-bold text-lg group-hover:scale-110 transition-transform">
                  ভ্র
                </span>
              </motion.div>
              <span
                className={clsx(
                  "text-xl sm:text-2xl font-extrabold tracking-wide transition-colors duration-300",
                  scrolled || !isHome ? "text-gray-900" : "text-white"
                )}
              >
                ভ্রমণ
                <span className={clsx(
                  "ml-1",
                  scrolled || !isHome ? "text-blue-600" : "text-yellow-400"
                )}>
                  .কম
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {/* Menu Item */}
                  <Link
                    to={link.path}
                    className={clsx(
                      "relative px-4 py-2 font-medium rounded-lg transition-all duration-300 flex items-center space-x-2",
                      textColor,
                      hoverColor,
                      location.pathname === link.path && (scrolled || !isHome ? "text-blue-600" : "text-yellow-400"),
                      "hover:bg-white/10"
                    )}
                  >
                    {link.icon && <link.icon className="w-4 h-4" />}
                    <span>{link.name}</span>
                    {link.dropdown && (
                      <ChevronDownIcon className={clsx(
                        "w-4 h-4 transition-transform duration-300",
                        activeDropdown === link.name && "rotate-180"
                      )} />
                    )}
                  </Link>

                  {/* Desktop Dropdown */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl overflow-hidden z-30 border border-gray-100"
                        >
                          <div className="py-1">
                            {link.dropdown.map((item, index) => (
                              <React.Fragment key={item.path}>
                                <Link
                                  to={item.path}
                                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {item.name}
                                </Link>
                                {index < link.dropdown.length - 1 && (
                                  <div className="border-t border-gray-100 mx-2" />
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={clsx(
                "lg:hidden p-2 rounded-lg transition-colors duration-300",
                scrolled || !isHome
                  ? "hover:bg-gray-100"
                  : "hover:bg-white/20"
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className={clsx(
                  "w-6 h-6",
                  scrolled || !isHome ? "text-gray-700" : "text-white"
                )} />
              ) : (
                <Bars3Icon className={clsx(
                  "w-6 h-6",
                  scrolled || !isHome ? "text-gray-700" : "text-white"
                )} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80]"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-screen w-[280px] sm:w-[320px] bg-white z-[100] shadow-2xl overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">ভ্র</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold">ভ্রমণ.কম</h2>
                      <p className="text-xs text-blue-100">আপনার ভ্রমণ সঙ্গী</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="p-4">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <div key={link.path} className="mb-2">
                      {link.dropdown ? (
                        <>
                          <button
                            onClick={() => setMobileOpen(mobileOpen === link.name ? null : link.name)}
                            className={clsx(
                              "w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200",
                              location.pathname === link.path || location.pathname.includes(link.path)
                                ? "bg-blue-50 text-blue-600"
                                : "hover:bg-gray-50 text-gray-700"
                            )}
                          >
                            <div className="flex items-center space-x-3">
                              {Icon && <Icon className="w-5 h-5" />}
                              <span className="font-medium">{link.name}</span>
                            </div>
                            <ChevronDownIcon
                              className={clsx(
                                "w-5 h-5 transition-transform duration-200",
                                mobileOpen === link.name && "rotate-180 text-blue-600"
                              )}
                            />
                          </button>

                          {/* Dropdown Items */}
                          <AnimatePresence>
                            {mobileOpen === link.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="ml-4 mt-2 space-y-1 border-l-2 border-blue-200 pl-3">
                                  {link.dropdown.map((item) => (
                                    <Link
                                      key={item.path}
                                      to={item.path}
                                      onClick={() => setIsOpen(false)}
                                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={clsx(
                            "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200",
                            location.pathname === link.path
                              ? "bg-blue-50 text-blue-600 font-medium"
                              : "text-gray-700 hover:bg-gray-50"
                          )}
                        >
                          {Icon && <Icon className="w-5 h-5" />}
                          <span>{link.name}</span>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="p-4 border-t mt-4">
                <p className="text-xs text-gray-500 text-center">
                  © 2026 ভ্রমণ.কম - সমস্ত অধিকার সংরক্ষিত
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;