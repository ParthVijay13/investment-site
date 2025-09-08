'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const industries = [
    { name: 'Fintech', href: '/industries/fintech' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Insurance', href: '/industries/insurance' },
    { name: 'Telecom', href: '/industries/telecom' },
    { name: 'Cybersecurity', href: '/industries/cybersecurity' },
    { name: 'E-commerce', href: '/industries/ecommerce' },
    { name: 'Blockchain', href: '/industries/blockchain' },
    { name: 'CleanTech', href: '/industries/cleantech' },
    { name: 'Gaming', href: '/industries/gaming' },
    { name: 'Mobility', href: '/industries/mobility' },
    { name: 'EdTech', href: '/industries/edtech' },
    { name: 'PropTech', href: '/industries/proptech' },
    { name: 'FoodTech', href: '/industries/foodtech' },
  ];

  const investorServices = [
    { name: 'Startup Scouting', href: '/investor-services/startup-scouting' },
    { name: 'Startup Matchmaking', href: '/investor-services/startup-matchmaking' },
    { name: 'Fundraising Assistance', href: '/investor-services/fundraising-assistance' },
    { name: 'Strategic Acquisition', href: '/investor-services/strategic-acquisition' },
  ];

  const startupServices = [
    { name: 'Fundraising Assistance', href: '/startup-services/fundraising-assistance' },
    { name: 'Investment Discovery & Mapping', href: '/startup-services/investment-discovery' },
    { name: 'Investor Outreach', href: '/startup-services/investor-outreach' },
    { name: 'Data Room Creation', href: '/startup-services/data-room-creation' },
  ];

  const navigationItems = [
    { name: 'Startups', href: '#startups', hasDropdown: true },
    { name: 'Investors', href: '#investors', hasDropdown: true },
    { name: 'Industries', href: '#industries', hasDropdown: true },
    { name: 'About', href: '/about' },
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

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" ref={dropdownRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">Q</span>
              </div>
              <span className="text-xl font-bold text-foreground">QuickRaise</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 cursor-pointer">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      {item.name}
                      <ChevronDown 
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {/* Dropdown */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-background border rounded-lg shadow-lg py-2 z-50">
                        {item.name === 'Startups' && startupServices.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {service.name}
                          </Link>
                        ))}
                        {item.name === 'Industries' && industries.map((industry) => (
                          <Link
                            key={industry.name}
                            href={industry.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {industry.name}
                          </Link>
                        ))}
                        {item.name === 'Investors' && investorServices.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            {/* <Button>Book a Session</Button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                        <ChevronDown 
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-6 space-y-1">
                          {item.name === 'Startups' && startupServices.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {service.name}
                            </Link>
                          ))}
                          {item.name === 'Industries' && industries.map((industry) => (
                            <Link
                              key={industry.name}
                              href={industry.href}
                              className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {industry.name}
                            </Link>
                          ))}
                          {item.name === 'Investors' && investorServices.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-3 py-2">
                {/* <Button className="w-full">Book a Session</Button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;