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
  Utensils
} from 'lucide-react';
import Link from 'next/link';

export const Industries = () => {
  const industries = [
    {
      icon: Smartphone,
      name: 'Fintech',
      slug: 'fintech',
      description: 'Digital banking, payments, and financial services',
      color: 'bg-blue-500',
      stats: '250+ investments'
    },
    {
      icon: Heart,
      name: 'Healthcare',
      slug: 'healthcare',
      description: 'Medical devices, digital health, and biotechnology',
      color: 'bg-red-500',
      stats: '180+ investments'
    },
    {
      icon: Shield,
      name: 'Cybersecurity',
      slug: 'cybersecurity',
      description: 'Data protection, identity management, and security',
      color: 'bg-purple-500',
      stats: '120+ investments'
    },
    {
      icon: ShoppingCart,
      name: 'E-commerce',
      slug: 'ecommerce',
      description: 'Online retail, marketplaces, and commerce platforms',
      color: 'bg-green-500',
      stats: '200+ investments'
    },
    {
      icon: Blocks,
      name: 'Blockchain',
      slug: 'blockchain',
      description: 'Cryptocurrency, DeFi, and distributed ledger tech',
      color: 'bg-orange-500',
      stats: '90+ investments'
    },
    {
      icon: Phone,
      name: 'Telecom',
      slug: 'telecom',
      description: '5G, IoT connectivity, and communication infrastructure',
      color: 'bg-indigo-500',
      stats: '75+ investments'
    },
    {
      icon: Leaf,
      name: 'CleanTech',
      slug: 'cleantech',
      description: 'Renewable energy, sustainability, and green technology',
      color: 'bg-emerald-500',
      stats: '110+ investments'
    },
    {
      icon: Gamepad2,
      name: 'Gaming',
      slug: 'gaming',
      description: 'Mobile games, esports, and interactive entertainment',
      color: 'bg-pink-500',
      stats: '85+ investments'
    },
    {
      icon: Car,
      name: 'Mobility',
      slug: 'mobility',
      description: 'Electric vehicles, autonomous driving, and transportation',
      color: 'bg-cyan-500',
      stats: '95+ investments'
    },
    {
      icon: GraduationCap,
      name: 'EdTech',
      slug: 'edtech',
      description: 'Online learning, educational software, and training',
      color: 'bg-yellow-500',
      stats: '130+ investments'
    },
    {
      icon: Home,
      name: 'PropTech',
      slug: 'proptech',
      description: 'Real estate technology, smart buildings, and construction',
      color: 'bg-stone-500',
      stats: '70+ investments'
    },
    {
      icon: Utensils,
      name: 'FoodTech',
      slug: 'foodtech',
      description: 'Food delivery, agriculture tech, and alternative proteins',
      color: 'bg-amber-500',
      stats: '60+ investments'
    }
  ];

  return (
    <section id="industries" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground">
            Our expertise spans across high-growth sectors, connecting specialized investors 
            with innovative startups in their target markets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Link
              key={index}
              href={`/industries/${industry.slug}`}
              className="group"
            >
              <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-105 cursor-pointer h-full">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${industry.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <industry.icon className="h-6 w-6 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {industry.description}
                </p>
                
                {/* Stats */}
                <div className="text-xs font-medium text-primary">
                  {industry.stats}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're constantly expanding our network and expertise. 
              Let us know about your specific sector and we'll connect you with relevant opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Contact Our Team
              </button>
              <Link
                href="/industries"
                className="px-6 py-2 border border-input rounded-lg hover:bg-accent transition-colors text-center"
              >
                Explore All Sectors
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
