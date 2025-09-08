'use client'
import React from 'react';
import { Users, Target, Briefcase, TrendingUp, Award, MapPin } from 'lucide-react';
import Image from 'next/image';
const AboutUs = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            About <span className="text-blue-600">Investpro</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At Investpro, we connect ambitious founders with the right investors, mentors, and partners. 
            Our platform makes fundraising simpler, faster, and transparent—empowering startups to scale 
            and giving investors access to curated opportunities.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center">
            <Target className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              To democratize access to capital and accelerate the journey of visionary entrepreneurs worldwide.
            </p>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">For Startups</h3>
              <p className="text-gray-600 leading-relaxed">
                Pitch readiness, valuations, and access to global investors to accelerate your growth journey.
              </p>
            </div>
            
            <div className="bg-white border-2 border-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">For Investors</h3>
              <p className="text-gray-600 leading-relaxed">
                Verified, high-growth deal flow and transparent engagement with promising ventures.
              </p>
            </div>
            
            <div className="bg-white border-2 border-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">For Partners</h3>
              <p className="text-gray-600 leading-relaxed">
                A collaborative ecosystem to drive innovation and create meaningful connections.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Leadership</h2>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Placeholder */}
              <div className="order-2 lg:order-1">
                
                    <Image src="/shubham.jpeg" alt="Shubham Sharma" width={400} height={500} />
                  
              </div>
              
              {/* Content */}
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Shubham Sharma</h3>
                <p className="text-lg text-blue-600 font-semibold mb-6">Founder & CEO</p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  An Investment Banker with 8+ years of experience in Private Equity, Venture Capital, 
                  Fundraising, and Strategic Advisory—focused on startups and high-growth ventures 
                  across Consumer, Industrial, and Technology sectors.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-8">
                  At Unanimity Capital, a boutique investment banking firm, Shubham has led end-to-end 
                  mandates including sourcing, evaluating, structuring, and negotiating transactions 
                  for startups from Pre-Series A to Series B. His expertise spans growth capital 
                  syndication, M&A advisory, and enabling strategic partnerships that unlock long-term value.
                </p>
              </div>
            </div>
            
            {/* What He Does */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-blue-100">
                <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  What He Does
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Raises institutional & strategic capital for early-growth startups</li>
                  <li>• Advises founders on fundraising strategy, positioning, and investor alignment</li>
                  <li>• Structures and syndicates equity & convertible deals with aligned investors</li>
                  <li>• Facilitates partnerships across the startup-investor ecosystem</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-blue-100">
                <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Key Sectors
                </h4>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Digital & Technology</li>
                  <li>• Consumer Brands & D2C</li>
                  <li>• Emerging Industrial Tech</li>
                </ul>
                
                <h4 className="text-lg font-bold text-blue-900 mb-4">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {['Fundraising', 'Investment Syndication', 'Capital Structuring', 'Deal Negotiation', 'Investor Relations', 'Strategic Partnerships', 'Early-Stage Advisory'].map((specialty, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Message */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-6 text-center">
              <p className="text-lg">
                💬 Always happy to connect with founders, investors, and ecosystem partners looking to build something meaningful.
              </p>
            </div>
          </div>
        </div>
        
        {/* Company Image Placeholder */}
        
      </div>
    </div>
  );
};

export default AboutUs;