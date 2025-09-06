"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Search, CheckCircle, DollarSign, Target, TrendingUp, Users, FileText, Database, Smartphone, Heart, Shield, ShoppingCart, Blocks, Phone, Leaf, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigationItems = [
    {
      name: 'STARTUPS',
      items: [
        {
          icon: <DollarSign className="w-5 h-5 text-green-600" />,
          title: 'Fundraising Assistance',
          description: 'Comprehensive support for your funding journey',
          link: '/startup-services/fundraising-assistance'
        },
        {
          icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
          title: 'Investment Discovery & Mapping',
          description: 'Strategic investor identification and analysis',
          link: '/startup-services/investment-discovery'
        },
        {
          icon: <Users className="w-5 h-5 text-purple-600" />,
          title: 'Investor Outreach',
          description: 'Professional outreach and relationship building',
          link: '/startup-services/investor-outreach'
        },
        {
          icon: <Database className="w-5 h-5 text-orange-600" />,
          title: 'Data Room Creation',
          description: 'Secure, professional data room setup',
          link: '/startup-services/data-room-creation'
        }
      ]
    },
    {
      name: 'INVESTORS',
      items: [
        {
          icon: <Search className="w-5 h-5 text-blue-600" />,
          title: 'Deal Sourcing',
          description: 'Access curated startup opportunities'
        },
        {
          icon: <CheckCircle className="w-5 h-5 text-green-600" />,
          title: 'Due Diligence',
          description: 'Comprehensive startup analysis & reports'
        },
        {
          icon: <Target className="w-5 h-5 text-orange-600" />,
          title: 'Portfolio Management',
          description: 'Track and manage your investments'
        },
        {
          icon: <DollarSign className="w-5 h-5 text-blue-500" />,
          title: 'Investment Analytics',
          description: 'Data-driven investment insights'
        }
      ]
    },
    {
      name: 'INDUSTRIES',
      items: [
        {
          icon: <Smartphone className="w-5 h-5 text-blue-600" />,
          title: 'Fintech',
          description: 'Digital banking, payments, and financial services',
          link: '/industries/fintech'
        },
        {
          icon: <Heart className="w-5 h-5 text-red-600" />,
          title: 'Healthcare',
          description: 'Medical devices, digital health, and biotechnology',
          link: '/industries/healthcare'
        },
        {
          icon: <Phone className="w-5 h-5 text-indigo-600" />,
          title: 'Telecom',
          description: '5G, IoT connectivity, and communication infrastructure',
          link: '/industries/telecom'
        },
        {
          icon: <ShoppingCart className="w-5 h-5 text-green-600" />,
          title: 'E-commerce',
          description: 'Online retail, marketplaces, and commerce platforms',
          link: '/industries/ecommerce'
        },
        {
          icon: <Blocks className="w-5 h-5 text-orange-600" />,
          title: 'Blockchain',
          description: 'Cryptocurrency, DeFi, and distributed ledger technology',
          link: '/industries/blockchain'
        },
        {
          icon: <Leaf className="w-5 h-5 text-emerald-600" />,
          title: 'CleanTech',
          description: 'Renewable energy, sustainability, and green technology',
          link: '/industries/cleantech'
        },
        {
          icon: <GraduationCap className="w-5 h-5 text-yellow-600" />,
          title: 'EdTech',
          description: 'Online learning, educational software, and training',
          link: '/industries/edtech'
        },
        {
          icon: <Shield className="w-5 h-5 text-purple-600" />,
          title: 'Biotech',
          description: 'Biotechnology, life sciences, and pharmaceutical innovation',
          link: '/industries/biotech'
        }
      ]
    },
    {
      name: 'COMPANY',
      items: [
        {
          icon: <Search className="w-5 h-5 text-blue-600" />,
          title: 'About Us',
          description: 'Learn about our mission and team'
        },
        {
          icon: <CheckCircle className="w-5 h-5 text-green-600" />,
          title: 'Our Story',
          description: 'How Qubit started and our journey'
        },
        {
          icon: <Target className="w-5 h-5 text-orange-600" />,
          title: 'Careers',
          description: 'Join our growing team'
        },
        {
          icon: <DollarSign className="w-5 h-5 text-blue-500" />,
          title: 'Contact',
          description: 'Get in touch with our team'
        }
      ]
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white shadow-lg relative  top-0 z-50" ref={dropdownRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-lg font-bold text-xl">
              Qubit
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
                >
                  {item.name}
                  <ChevronDown 
                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === index && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        Services
                      </h3>
                    </div>
                    {item.items.map((dropdownItem, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        href={dropdownItem.link || "#"}
                        className="flex items-start px-4 py-3 hover:bg-gray-50 transition-colors duration-150"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="flex-shrink-0 mr-3 mt-0.5">
                          {dropdownItem.icon}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {dropdownItem.title}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {dropdownItem.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
                >
                  {item.name}
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {/* Mobile Dropdown Content */}
                {activeDropdown === index && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.items.map((dropdownItem, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        href={dropdownItem.link || "#"}
                        className="flex items-start px-3 py-2 hover:bg-gray-50 rounded-md transition-colors duration-150"
                        onClick={() => {
                          setActiveDropdown(null);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <div className="flex-shrink-0 mr-3 mt-0.5">
                          {dropdownItem.icon}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {dropdownItem.title}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {dropdownItem.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;