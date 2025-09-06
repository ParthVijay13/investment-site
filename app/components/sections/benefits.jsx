import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Benefits = () => {
  const benefits = [
    'Access to pre-vetted, high-quality investment opportunities',
    'Comprehensive due diligence and risk assessment reports',
    'Direct connections with verified startup founders and teams',
    'Real-time market intelligence and sector analysis',
    'Streamlined investment process with legal and financial support',
    'Post-investment monitoring and portfolio optimization',
    'Exclusive access to emerging market opportunities',
    'Expert advisory support throughout the investment lifecycle'
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
              Why Choose InvestPro
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Your Strategic Investment Partner
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              We combine cutting-edge technology with deep industry expertise to deliver 
              exceptional investment outcomes. Our platform streamlines the entire investment 
              process while providing unparalleled market insights.
            </p>
            
            {/* Key metrics */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary mb-1">15x</div>
                <div className="text-sm text-muted-foreground">Average ROI Multiple</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary mb-1">6 Mo</div>
                <div className="text-sm text-muted-foreground">Average Deal Timeline</div>
              </div>
            </div>
            
            <Button size="lg" className="group">
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Right content - Benefits checklist */}
          <div className="bg-card border rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              What You Get With InvestPro
            </h3>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
            
            {/* Bottom highlight */}
            <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Guaranteed Results</div>
                  <div className="text-sm text-muted-foreground">
                    Success fee only - no upfront costs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
