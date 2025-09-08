import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Smartphone, 
  Heart, 
  Shield, 
  ShoppingCart, 
  Blocks, 
  Phone, 
  Leaf, 
  Gamepad2,
  Car,
  GraduationCap,
  Home,
  Utensils,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: 'Industries | QuickRaise - Specialized Investment Opportunities',
  description: 'Explore investment opportunities across diverse industries. Connect with specialized investors in Fintech, Healthcare, Telecom, Cybersecurity, and more.',
  keywords: 'industries, investment opportunities, venture capital, startup funding, specialized investors',
};

export default function IndustriesPage() {
  const industries = [
    {
      icon: Smartphone,
      name: 'Fintech',
      slug: 'fintech',
      description: 'Digital banking, payments, and financial services revolution',
      color: 'bg-blue-500',
      stats: '$450M+ raised',
      highlights: ['Digital Payments', 'Blockchain', 'RegTech', 'InsurTech']
    },
    {
      icon: Heart,
      name: 'Healthcare',
      slug: 'healthcare',
      description: 'Medical devices, digital health, and biotechnology innovation',
      color: 'bg-red-500',
      stats: '$320M+ raised',
      highlights: ['Digital Health', 'MedTech', 'Biotech', 'Telemedicine']
    },
    {
      icon: Shield,
      name: 'Insurance',
      slug: 'insurance',
      description: 'InsurTech solutions transforming traditional insurance',
      color: 'bg-purple-500',
      stats: '$280M+ raised',
      highlights: ['InsurTech', 'Risk Assessment', 'Claims Processing', 'Digital Insurance']
    },
    {
      icon: Phone,
      name: 'Telecom',
      slug: 'telecom',
      description: '5G, IoT connectivity, and communication infrastructure',
      color: 'bg-indigo-500',
      stats: '$215M+ raised',
      highlights: ['5G Technology', 'IoT', 'Network Infrastructure', 'Edge Computing']
    },
    {
      icon: Shield,
      name: 'Cybersecurity',
      slug: 'cybersecurity',
      description: 'Data protection, identity management, and security solutions',
      color: 'bg-gray-700',
      stats: '$380M+ raised',
      highlights: ['Cloud Security', 'AI Security', 'Identity Management', 'Threat Detection']
    },
    {
      icon: ShoppingCart,
      name: 'E-commerce',
      slug: 'ecommerce',
      description: 'Online retail, marketplaces, and commerce platforms',
      color: 'bg-green-500',
      stats: '$520M+ raised',
      highlights: ['Marketplaces', 'Social Commerce', 'B2B Platforms', 'Logistics Tech']
    },
    {
      icon: Blocks,
      name: 'Blockchain',
      slug: 'blockchain',
      description: 'Cryptocurrency, DeFi, and distributed ledger technology',
      color: 'bg-orange-500',
      stats: '$290M+ raised',
      highlights: ['DeFi', 'NFTs', 'Web3', 'Smart Contracts']
    },
    {
      icon: Leaf,
      name: 'CleanTech',
      slug: 'cleantech',
      description: 'Renewable energy, sustainability, and green technology',
      color: 'bg-emerald-500',
      stats: '$350M+ raised',
      highlights: ['Solar Energy', 'Energy Storage', 'Carbon Capture', 'Green Hydrogen']
    },
    {
      icon: Gamepad2,
      name: 'Gaming',
      slug: 'gaming',
      description: 'Mobile games, esports, and interactive entertainment',
      color: 'bg-pink-500',
      stats: '$240M+ raised',
      highlights: ['Mobile Gaming', 'Esports', 'VR/AR', 'Game Development']
    },
    {
      icon: Car,
      name: 'Mobility',
      slug: 'mobility',
      description: 'Electric vehicles, autonomous driving, and transportation',
      color: 'bg-cyan-500',
      stats: '$410M+ raised',
      highlights: ['Electric Vehicles', 'Autonomous Driving', 'Micro-mobility', 'Logistics']
    },
    {
      icon: GraduationCap,
      name: 'EdTech',
      slug: 'edtech',
      description: 'Online learning, educational software, and training platforms',
      color: 'bg-yellow-500',
      stats: '$180M+ raised',
      highlights: ['Online Learning', 'Corporate Training', 'Language Learning', 'Skill Development']
    },
    {
      icon: Home,
      name: 'PropTech',
      slug: 'proptech',
      description: 'Real estate technology, smart buildings, and construction tech',
      color: 'bg-stone-500',
      stats: '$220M+ raised',
      highlights: ['Smart Buildings', 'Property Management', 'Construction Tech', 'Real Estate Platforms']
    },
    {
      icon: Utensils,
      name: 'FoodTech',
      slug: 'foodtech',
      description: 'Food delivery, agriculture tech, and alternative proteins',
      color: 'bg-amber-500',
      stats: '$160M+ raised',
      highlights: ['Food Delivery', 'AgTech', 'Alternative Proteins', 'Food Safety']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Investment Opportunities Across All Industries
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Connect with specialized investors and funding opportunities tailored to your industry. 
                Our expertise spans high-growth sectors with dedicated investor networks for each vertical.
              </p>
              <Button size="lg" className="px-8 py-4 text-lg">
                Find Your Industry
              </Button>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Link
                  key={index}
                  href={`/industries/${industry.slug}`}
                  className="group"
                >
                  <div className="bg-card border rounded-xl p-8 hover:shadow-lg transition-all duration-300 group-hover:scale-105 h-full">
                    {/* Icon and Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${industry.color} group-hover:scale-110 transition-transform`}>
                        <industry.icon className="h-6 w-6 text-white" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="text-sm font-medium text-primary mb-4">
                      {industry.stats}
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {industry.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <div className="bg-muted/50 rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Don't See Your Industry?
                </h3>
                <p className="text-muted-foreground mb-6">
                  We're constantly expanding our network and expertise. 
                  Let us know about your specific sector and we'll connect you with relevant opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8">
                    Contact Our Team
                  </Button>
                  <Button variant="outline" size="lg" className="px-8">
                    Request New Industry
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
