import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const footerSections = [
    {
      title: 'Startup Services',
      links: [
        { name: 'Fundraising Assistance', href: '/startup-services/fundraising-assistance' },
        { name: 'Investment Discovery', href: '/startup-services/investment-discovery' },
        { name: 'Investor Outreach', href: '/startup-services/investor-outreach' },
        { name: 'Data Room Creation', href: '/startup-services/data-room-creation' },
      ],
    },
    {
      title: 'Investor Services',
      links: [
        { name: 'Startup Scouting', href: '/investor-services/startup-scouting' },
        { name: 'Startup Matchmaking', href: '/investor-services/startup-matchmaking' },
        { name: 'Fundraising Assistance', href: '/investor-services/fundraising-assistance' },
        { name: 'Strategic Acquisition', href: '/investor-services/strategic-acquisition' },
      ],
    },
    {
      title: 'Industries',
      links: [
        { name: 'Fintech', href: '/industries/fintech' },
        { name: 'Healthcare', href: '/industries/healthcare' },
        { name: 'Telecom', href: '/industries/telecom' },
        { name: 'E-commerce', href: '/industries/ecommerce' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'All Industries', href: '/industries' },
        { name: 'Contact', href: '#contact' },
        { name: 'Privacy Policy', href: '#privacy' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">I</span>
                </div>
                <span className="text-xl font-bold text-foreground">QuickRaise</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Connecting innovative startups with strategic investors to fuel growth and drive market transformation.
              </p>
              
              {/* Contact info */}
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 mr-2" />
                  shubham@quickraise.in
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  +91 9462302922
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  Flat No.101, Plot no. 49, Prithviraj Nagar, Maharani Farm, Durgapura Jaipur-302018
                </div>
              </div>
            </div>

            {/* Footer sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="border-t py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold text-foreground mb-2">Stay Updated</h3>
              <p className="text-sm text-muted-foreground">
                Get the latest investment insights and startup opportunities.
              </p>
            </div>
            <div className="flex w-full md:w-auto space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-3 py-2 border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 QuickRaise. All rights reserved.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;