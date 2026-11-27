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
  NewspaperIcon,
  UserIcon,
  UsersIcon,
  UserGroupIcon,
  HeartIcon,
  BoltIcon
} from '@heroicons/react/24/outline';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

// Designed brand mark — gradient tile, glossy top light, white ring,
// and a small plane badge. Used in the navbar.
const LogoMark = ({ className }) => (
  <div
    className={clsx(
      "relative shrink-0 flex items-center justify-center bg-gradient-to-br from-[#00C078] via-[#008F5A] to-[#006B46] shadow-lg shadow-emerald-900/30 ring-1 ring-white/40",
      className
    )}
  >
    <span className="absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/25 via-transparent to-black/10" />
    <span className="relative text-white font-bold text-lg leading-none">ভ্র</span>
    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-md ring-1 ring-emerald-100">
      <PaperAirplaneIcon className="w-3 h-3 text-[#008F5A]" />
    </span>
  </div>
);

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

  // Icons for the mobile drawer cards (desktop nav renders no icons)
  const mobileNavIcons = {
    'হোম': HomeIcon,
    'প্যাকেজ': BriefcaseIcon,
    'গন্তব্য': MapPinIcon,
    'কোম্পানি': BuildingOfficeIcon,
    'ব্লগ': NewspaperIcon,
  };

  // Icons for submenu pills — destinations fall back to MapPinIcon
  const submenuIcons = {
    'সিঙ্গেল প্যাকেজ': UserIcon,
    'ফ্যামিলি প্যাকেজ': UsersIcon,
    'কাপল প্যাকেজ': HeartIcon,
    'অ্যাডভেঞ্চার': BoltIcon,
    'গ্রুপ প্যাকেজ': UserGroupIcon,
  };

  // Active state for a top-level mobile item
  const isMobileActive = (link) =>
    link.name === 'গন্তব্য'
      ? location.pathname === link.path ||
        location.pathname.startsWith('/destination/')
      : location.pathname === link.path;

  // Text color based on scroll and page
  const textColor = scrolled || !isHome ? 'text-stone-800' : 'text-white';
  const hoverColor = scrolled || !isHome ? 'hover:text-emerald-600' : 'hover:text-emerald-200';
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
                className="shrink-0"
              >
                <LogoMark className="w-10 h-10 rounded-full" />
              </motion.div>
              <span
                className={clsx(
                  "text-xl sm:text-2xl font-extrabold tracking-wide transition-colors duration-300",
                  scrolled || !isHome ? "text-stone-900" : "text-white"
                )}
              >
                ভ্রমণ
                <span className={clsx(
                  scrolled || !isHome ? "text-emerald-600" : "text-amber-300"
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
                      location.pathname === link.path && (scrolled || !isHome ? "text-emerald-600" : "text-amber-300"),
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
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl overflow-hidden z-30 border border-stone-100"
                        >
                          <div className="py-1">
                            {link.dropdown.map((item, index) => (
                              <React.Fragment key={item.path}>
                                <Link
                                  to={item.path}
                                  className="block px-4 py-2.5 text-sm text-stone-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {item.name}
                                </Link>
                                {index < link.dropdown.length - 1 && (
                                  <div className="border-t border-stone-100 mx-2" />
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
                  ? "hover:bg-stone-100"
                  : "hover:bg-white/20"
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className={clsx(
                  "w-6 h-6",
                  scrolled || !isHome ? "text-stone-700" : "text-white"
                )} />
              ) : (
                <Bars3Icon className={clsx(
                  "w-6 h-6",
                  scrolled || !isHome ? "text-stone-700" : "text-white"
                )} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu — hanging dropdown below the header */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Transparent overlay below the header — tap outside to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-x-0 top-[64px] bottom-0 z-[80]"
            />

            {/* Dropdown panel */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ transformOrigin: "top right" }}
              className="fixed top-[72px] inset-x-4 sm:left-auto sm:right-4 sm:w-[340px] z-[100] rounded-[24px] bg-white shadow-2xl ring-1 ring-stone-100"
            >
              {/* Caret pointing up to the 3-dot button */}
              <span className="absolute -top-[7px] right-5 w-3.5 h-3.5 bg-white rotate-45 border-t border-l border-stone-100" />

                {/* Navigation Links */}
                <nav className="relative px-3 py-3 space-y-2">
                  {navLinks.map((link) => {
                    const Icon = mobileNavIcons[link.name];
                    const isActive = isMobileActive(link);
                    const isExpanded = mobileOpen === link.name;
                    const cardClass = clsx(
                      "relative flex items-center gap-3.5 w-full px-4 py-3 rounded-[20px] border transition-all duration-200 active:scale-[0.98]",
                      isActive
                        ? "bg-[#E8F8F0] border-[#BFE9D6] shadow-sm"
                        : "bg-white border-stone-100 shadow-sm hover:border-emerald-200 hover:bg-emerald-50/40"
                    );
                    const iconChipClass = clsx(
                      "w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-200",
                      isActive ? "bg-[#008F5A] text-white" : "bg-[#E8F8F0] text-[#008F5A]"
                    );
                    const labelClass = clsx(
                      "font-semibold text-[15px] transition-colors duration-200",
                      isActive ? "text-[#006B46]" : "text-[#242424]"
                    );
                    return (
                      <div key={link.path}>
                        {link.dropdown ? (
                          <>
                            <button
                              onClick={() => setMobileOpen(isExpanded ? null : link.name)}
                              aria-expanded={isExpanded}
                              className={cardClass}
                            >
                              {isActive && (
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-9 rounded-r-full bg-[#008F5A]" />
                              )}
                              <span className={iconChipClass}>
                                {Icon && <Icon className="w-5 h-5" />}
                              </span>
                              <span className={labelClass}>{link.name}</span>
                              <span
                                className={clsx(
                                  "ml-auto w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200",
                                  isExpanded ? "bg-[#008F5A] text-white" : "bg-stone-100 text-stone-500"
                                )}
                              >
                                <ChevronDownIcon
                                  className={clsx(
                                    "w-4 h-4 transition-transform duration-300",
                                    isExpanded && "rotate-180"
                                  )}
                                />
                              </span>
                            </button>

                            {/* Dropdown Items */}
                            <AnimatePresence initial={false}>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.25, ease: "easeInOut" }}
                                  className="overflow-hidden"
                                >
                                  <div className="ml-9 mt-2 mb-1 rounded-2xl bg-stone-50/80 p-2 grid grid-cols-2 gap-2">
                                    {link.dropdown.map((item) => {
                                      const subActive =
                                        location.pathname + location.search === item.path;
                                      const SubIcon = submenuIcons[item.name] || MapPinIcon;
                                      return (
                                        <Link
                                          key={item.path}
                                          to={item.path}
                                          onClick={() => setIsOpen(false)}
                                          className={clsx(
                                            "flex items-center gap-1.5 px-1.5 py-1.5 text-[11px] whitespace-nowrap rounded-xl border transition-all duration-200",
                                            subActive
                                              ? "bg-[#E8F8F0] border-[#BFE9D6] text-[#006B46] font-semibold"
                                              : "bg-white border-stone-100 text-stone-700 hover:border-emerald-200 hover:bg-[#E8F8F0]/50 hover:text-[#006B46]"
                                          )}
                                        >
                                          <span className={clsx(
                                            "w-5 h-5 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200",
                                            subActive ? "bg-[#008F5A] text-white" : "bg-[#E8F8F0] text-[#008F5A]"
                                          )}>
                                            <SubIcon className="w-3 h-3" />
                                          </span>
                                          <span className="truncate">{item.name}</span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={cardClass}
                          >
                            {isActive && (
                              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-9 rounded-r-full bg-[#008F5A]" />
                            )}
                            <span className={iconChipClass}>
                              {Icon && <Icon className="w-5 h-5" />}
                            </span>
                            <span className={labelClass}>{link.name}</span>
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;