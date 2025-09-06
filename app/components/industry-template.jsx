'use client';

import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Target, DollarSign, Globe, Building2 } from 'lucide-react';

const IndustryTemplate = ({ industryData }) => {
  if (!industryData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Industry Not Found</h1>
          <p className="text-muted-foreground">The requested industry page could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              <Target className="w-4 h-4 mr-2" />
              {industryData.name} Investment Opportunities
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              {industryData.hero.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Button size="lg" className="px-8 py-4 text-lg">
                {industryData.hero.cta}
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Funding Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {industryData.strategicFunding.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {industryData.strategicFunding.description}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-card border rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-6">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {industryData.strategicFunding.stats.funding}
                </div>
                <div className="text-muted-foreground">Total Funding Secured</div>
              </div>

              <div className="bg-card border rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-6">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {industryData.strategicFunding.stats.startups}
                </div>
                <div className="text-muted-foreground">Startups Funded</div>
              </div>

              <div className="bg-card border rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-full mb-6">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {industryData.strategicFunding.stats.growth}
                </div>
                <div className="text-muted-foreground">Market Growth Projection</div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Why Choose Our {industryData.name} Expertise?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Industry-Specific Expertise</h4>
                      <p className="text-muted-foreground">Deep understanding of {industryData.name.toLowerCase()} market dynamics, regulations, and growth patterns.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Tailored Funding Solutions</h4>
                      <p className="text-muted-foreground">Customized investment strategies that align with {industryData.name.toLowerCase()} startup needs and investor expectations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Strategic Partnerships</h4>
                      <p className="text-muted-foreground">Access to key industry players, corporate partners, and strategic investors in the {industryData.name.toLowerCase()} ecosystem.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
                <div className="text-center">
                  <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Global {industryData.name} Network
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Connect with investors who understand your market and can provide strategic value beyond capital.
                  </p>
                  <Button className="w-full">Explore Our Network</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth & Support Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {industryData.growthSupport.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {industryData.growthSupport.description}
              </p>
            </div>

            {/* Network Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-background border rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {industryData.growthSupport.networkStats.investors}
                </div>
                <div className="text-muted-foreground">Total Investors</div>
              </div>

              <div className="bg-background border rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-6">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {industryData.growthSupport.networkStats.vcs}
                </div>
                <div className="text-muted-foreground">Venture Capital Firms</div>
              </div>

              <div className="bg-background border rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-full mb-6">
                  <Building2 className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {industryData.growthSupport.networkStats.privateEquity}
                </div>
                <div className="text-muted-foreground">Private Equity Firms</div>
              </div>
            </div>

            {/* Support Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Comprehensive Support Services</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">Strategic consulting and market positioning</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">Investor matching and relationship management</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">Due diligence preparation and data room setup</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">Term sheet negotiation and deal structuring</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Post-Investment Support</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <span className="text-muted-foreground">Board advisory and governance support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <span className="text-muted-foreground">Follow-on funding and growth capital</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <span className="text-muted-foreground">Strategic partnerships and business development</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <span className="text-muted-foreground">Exit strategy planning and execution</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Ready to Scale Your {industryData.name} Startup?
                </h3>
                <p className="text-muted-foreground mb-8">
                  Join hundreds of successful {industryData.name.toLowerCase()} startups that have raised funding through our platform. Get matched with the right investors for your stage and sector.
                </p>
                <div className="space-y-4">
                  <Button size="lg" className="w-full">
                    Start Your Funding Journey
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryTemplate;
