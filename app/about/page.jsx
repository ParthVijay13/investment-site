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
            About <span className="text-blue-600">QuickRaise (Brand of Shubham S & Associates)</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            QuickRaise is the flagship brand of Shubham S & Associates, a proprietorship firm led by Shubham Sharma.
            Through this initiative, Shubham S & Associates is committed to making fundraising simple, transparent,
            and impactful for startups, while providing investors with access to verified, high-potential opportunities.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center">
            <Target className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              At Shubham S & Associates, our mission is to democratize access to capital and empower visionary entrepreneurs to grow their businesses with confidence. QuickRaise embodies this mission by bridging the gap between founders, investors, and strategic partners.

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
                End-to-end fundraising support including pitch readiness, valuations, and investor connections.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Advisory from the experts at Shubham S & Associates to help position your business effectively.
              </p>
            </div>

            <div className="bg-white border-2 border-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">For Investors</h3>
              <p className="text-gray-600 leading-relaxed">
                Deal flow curated and verified by Shubham S & Associates, ensuring transparency and credibility.

                Opportunities to connect with growth-stage startups backed by sound strategic advisory.
              </p>
            </div>

            <div className="bg-white border-2 border-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">For Partners</h3>
              <p className="text-gray-600 leading-relaxed">
                A collaborative ecosystem built by QuickRaise and Shubham S & Associates to foster innovation and mutual growth.
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
                  Shubham Sharma is the Proprietor of Shubham S & Associates and Founder of QuickRaise. With 8+ years of experience in Private Equity, Venture Capital, Fundraising, and Strategic Advisory, he has worked extensively with startups across Consumer, Industrial, and Technology sectors.

                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Through Shubham S & Associates, he has successfully led mandates for early-growth ventures — from Pre-Series A to Series B — covering sourcing, valuations, structuring, and negotiations. His vision is to position QuickRaise as India’s most trusted platform for startup fundraising.

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
            <section
              aria-labelledby="core-focus-areas"
              className="mx-auto mt-10 max-w-5xl px-4"
            >
              <div className="text-center">
                {/* <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                  Our Expertise
                </p> */}
                <h2
                  id="core-focus-areas"
                  className="mt-1 text-3xl font-extrabold leading-tight bg-gradient-to-r from-blue-900 to-indigo-600 bg-clip-text text-transparent"
                >
                  Core Focus Areas
                </h2>
              </div>

              {/* grid of feature cards */}
              <ul
                role="list"
                className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              >
                <li className="group rounded-xl border border-blue-100 bg-white/70 p-4 shadow-sm ring-1 ring-blue-50 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600/10">
                      {/* check icon */}
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-blue-700">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.39 7.39a1 1 0 01-1.414 0l-3.21-3.21a1 1 0 111.414-1.415l2.503 2.504 6.683-6.683a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-blue-900">
                        Institutional &amp; Strategic Capital Raising
                      </h3>
                      <p className="text-sm text-slate-600">
                        End-to-end support across mandates and outreach.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="group rounded-xl border border-blue-100 bg-white/70 p-4 shadow-sm ring-1 ring-blue-50 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600/10">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-blue-700">
                        <path d="M4 3h12v2H4zM4 7h12v2H4zM4 11h7v2H4zM4 15h7v2H4z" />
                      </svg>
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-blue-900">
                        Advisory through Shubham S &amp; Associates
                      </h3>
                      <p className="text-sm text-slate-600">
                        Fundraising strategy and investor alignment.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="group rounded-xl border border-blue-100 bg-white/70 p-4 shadow-sm ring-1 ring-blue-50 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600/10">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-blue-700">
                        <path d="M3 7h18v2H3zm0 4h12v2H3zm0 4h8v2H3z" />
                      </svg>
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-blue-900">
                        Equity &amp; Convertible Deal Structuring
                      </h3>
                      <p className="text-sm text-slate-600">
                        Clear terms across equity, notes, and convertibles.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="group rounded-xl border border-blue-100 bg-white/70 p-4 shadow-sm ring-1 ring-blue-50 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600/10">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-blue-700">
                        <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm1 5h-2v5l4 2 .9-1.8-2.9-1.2V8z" />
                      </svg>
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-blue-900">
                        Investor Relations &amp; Strategic Partnerships
                      </h3>
                      <p className="text-sm text-slate-600">
                        Proactive updates and relationship building.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>

              {/* subtle callout bar that keeps your blue tone */}
              
            </section>
            {/* Contact Message */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-6 text-center">
              <p className="text-lg">
                QuickRaise — the flagship brand of Shubham S & Associates (Proprietorship Firm of Shubham Sharma) — is dedicated to connecting ambitious startups with the right investors and building a transparent fundraising ecosystem.
              </p>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default AboutUs;