import { Sprout, TrendingUp, Building2, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InvestorMatching = () => {
  const stages = [
    {
      icon: Sprout,
      stage: 'Pre-Seed',
      range: '$50K - $500K',
      description: 'Early-stage startups with innovative ideas and initial product development',
      features: [
        'Proof of concept validation',
        'Market research & analysis',
        'Team building support',
        'Initial traction metrics'
      ],
      color: 'bg-green-500',
      investors: '150+ Angel Investors'
    },
    {
      icon: TrendingUp,
      stage: 'Seed',
      range: '$500K - $3M',
      description: 'Companies with validated products seeking to scale operations and user base',
      features: [
        'Product-market fit validation',
        'Revenue model optimization',
        'Go-to-market strategy',
        'Team expansion planning'
      ],
      color: 'bg-blue-500',
      investors: '200+ Seed Funds'
    },
    {
      icon: Building2,
      stage: 'Series A',
      range: '$3M - $15M',
      description: 'Growing companies ready to scale with proven business models and traction',
      features: [
        'Revenue growth acceleration',
        'Market expansion strategy',
        'Operational scaling',
        'Strategic partnerships'
      ],
      color: 'bg-purple-500',
      investors: '100+ VCs'
    },
    {
      icon: Rocket,
      stage: 'Growth',
      range: '$15M+',
      description: 'Established companies seeking capital for rapid expansion and market dominance',
      features: [
        'International expansion',
        'Acquisition opportunities',
        'IPO preparation',
        'Strategic exits'
      ],
      color: 'bg-orange-500',
      investors: '50+ Growth Funds'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Stage-Wise Investor Matching
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect with the right investors at every stage of your startup journey. 
            From initial funding to growth capital, we match you with investors who understand your sector and stage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="bg-card border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl ${stage.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <stage.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{stage.stage}</h3>
                    <p className="text-sm font-medium text-primary">{stage.range}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-muted-foreground">{stage.investors}</div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-muted-foreground mb-6">
                {stage.description}
              </p>
              
              {/* Features */}
              <div className="space-y-3 mb-6">
                {stage.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Find {stage.stage} Investors
              </Button>
            </div>
          ))}
        </div>
        
        {/* Process section */}
        <div className="mt-16">
          <div className="bg-card border rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
              Our Matching Process
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-semibold">1</span>
                </div>
                <h4 className="font-medium text-foreground mb-2">Profile Analysis</h4>
                <p className="text-sm text-muted-foreground">
                  We analyze your startup's stage, sector, and funding requirements
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-semibold">2</span>
                </div>
                <h4 className="font-medium text-foreground mb-2">Investor Matching</h4>
                <p className="text-sm text-muted-foreground">
                  Our AI matches you with investors based on thesis alignment
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-semibold">3</span>
                </div>
                <h4 className="font-medium text-foreground mb-2">Introduction</h4>
                <p className="text-sm text-muted-foreground">
                  We facilitate warm introductions with interested investors
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-semibold">4</span>
                </div>
                <h4 className="font-medium text-foreground mb-2">Deal Support</h4>
                <p className="text-sm text-muted-foreground">
                  We support throughout due diligence and term negotiation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorMatching;
