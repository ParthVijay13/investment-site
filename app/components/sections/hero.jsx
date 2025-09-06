import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
              <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
              Trusted by 500+ Startups & Investors
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Where Innovation
              <span className="text-primary block">Meets Investment</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Connect promising startups with strategic investors. From seed funding to Series A and beyond, 
              we accelerate growth through smart capital partnerships.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="group">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold text-foreground">$2.5B+</div>
                <div className="text-sm text-muted-foreground">Funding Raised</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Startups Funded</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Placeholder for hero image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <ArrowRight className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <p className="text-muted-foreground">Professional Business Meeting</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
            
            {/* Floating stats cards */}
            <div className="absolute top-8 -left-4 bg-card border shadow-lg rounded-lg p-4 hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <div className="text-sm font-semibold">Active Deals</div>
                  <div className="text-xs text-muted-foreground">125+ this month</div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-8 -right-4 bg-card border shadow-lg rounded-lg p-4 hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div>
                  <div className="text-sm font-semibold">Avg. ROI</div>
                  <div className="text-xs text-muted-foreground">340% return</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
