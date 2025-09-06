import { Search, Heart, DollarSign, Target, Database, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Startup Discovery',
      description: 'Identify high-potential startups across 20+ sectors using our proprietary screening methodology.',
      features: ['AI-powered scouting', 'Market analysis', 'Founder assessment'],
      color: 'bg-blue-500',
    },
    {
      icon: Heart,
      title: 'Investor Matching',
      description: 'Connect with the right investors who align with your industry focus and investment thesis.',
      features: ['Strategic alignment', 'Portfolio synergy', 'Geographic preferences'],
      color: 'bg-green-500',
    },
    {
      icon: DollarSign,
      title: 'Fundraising Support',
      description: 'End-to-end fundraising assistance from pitch deck creation to term sheet negotiation.',
      features: ['Pitch optimization', 'Due diligence prep', 'Legal coordination'],
      color: 'bg-orange-500',
    },
    {
      icon: Target,
      title: 'Strategic Advisory',
      description: 'Expert guidance on business strategy, market positioning, and growth acceleration.',
      features: ['Go-to-market strategy', 'Operational excellence', 'Scale planning'],
      color: 'bg-purple-500',
    },
    {
      icon: Database,
      title: 'Deal Flow Management',
      description: 'Comprehensive platform for managing investment pipeline and portfolio tracking.',
      features: ['Pipeline analytics', 'Performance metrics', 'Risk assessment'],
      color: 'bg-red-500',
    },
    {
      icon: Rocket,
      title: 'Growth Acceleration',
      description: 'Post-investment support to maximize portfolio company growth and market expansion.',
      features: ['Scaling strategies', 'Partnership facilitation', 'Exit planning'],
      color: 'bg-indigo-500',
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Comprehensive Investment Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From initial discovery to successful exits, we provide end-to-end support 
            for both startups and investors throughout the investment lifecycle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${service.color} mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Learn More
              </Button>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to accelerate your investment journey?
          </p>
          <Button size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
