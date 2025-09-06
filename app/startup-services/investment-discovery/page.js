import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Search, 
  MapPin, 
  BarChart3, 
  Target, 
  Layers,
  CheckCircle, 
  ArrowRight,
  Globe,
  Filter,
  Database,
  Lightbulb
} from 'lucide-react';

export default function InvestmentDiscovery() {
  const discoveryPhases = [
    {
      phase: "Market Intelligence",
      icon: Globe,
      description: "Comprehensive market landscape analysis and investor ecosystem mapping",
      deliverables: ["Market size analysis", "Competitive landscape", "Trend identification"],
      color: "bg-emerald-500"
    },
    {
      phase: "Investor Profiling",
      icon: Filter,
      description: "Detailed profiling of potential investors based on your specific criteria",
      deliverables: ["Investment thesis analysis", "Portfolio mapping", "Contact prioritization"],
      color: "bg-blue-500"
    },
    {
      phase: "Strategic Mapping",
      icon: MapPin,
      description: "Visual mapping of investment opportunities and strategic pathways",
      deliverables: ["Investment roadmap", "Timeline planning", "Risk assessment"],
      color: "bg-purple-500"
    }
  ];

  const capabilities = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Proprietary Database",
      description: "Access to our extensive database of 15,000+ active investors worldwide",
      stats: "15K+ Investors"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "AI-powered analysis of investment patterns and success probabilities",
      stats: "95% Accuracy"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Strategic Insights",
      description: "Deep market intelligence and investment trend analysis",
      stats: "50+ Markets"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Matching",
      description: "Sophisticated algorithms for optimal investor-startup alignment",
      stats: "85% Match Rate"
    }
  ];

  const benefits = [
    "Reduce fundraising timeline by 40%",
    "Increase investor response rates by 60%",
    "Access hidden investment opportunities",
    "Minimize rejection risks through better targeting",
    "Gain competitive intelligence on funding landscape",
    "Build strategic relationships beyond immediate funding needs"
  ];

  const industries = [
    { name: "FinTech", investors: "2,400+", color: "bg-blue-100 text-blue-800" },
    { name: "HealthTech", investors: "1,800+", color: "bg-green-100 text-green-800" },
    { name: "AI/ML", investors: "3,200+", color: "bg-purple-100 text-purple-800" },
    { name: "SaaS", investors: "2,900+", color: "bg-orange-100 text-orange-800" },
    { name: "E-commerce", investors: "1,600+", color: "bg-pink-100 text-pink-800" },
    { name: "CleanTech", investors: "1,200+", color: "bg-emerald-100 text-emerald-800" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Split Layout */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500 mb-8">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Investment Discovery & Mapping
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Unlock hidden funding opportunities with our comprehensive investor discovery platform. 
                Map your path to success with data-driven insights and strategic intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4">
                  Explore Opportunities
                  <Search className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  View Sample Report
                </Button>
              </div>
            </div>
            
            {/* Industry Coverage */}
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Industry Coverage</h3>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-card border rounded-lg p-4 text-center">
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${industry.color}`}>
                      {industry.name}
                    </div>
                    <div className="text-sm text-muted-foreground">{industry.investors} investors</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Advanced Discovery Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Leverage cutting-edge technology and market intelligence to identify the perfect investors for your startup.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {capability.description}
                </p>
                <div className="text-2xl font-bold text-primary">
                  {capability.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery Process */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Discovery Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach to uncovering and mapping the most relevant investment opportunities for your venture.
            </p>
          </div>
          
          <div className="space-y-12">
            {discoveryPhases.map((phase, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${phase.color} mr-4`}>
                      <phase.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-primary">Phase {index + 1}</div>
                      <h3 className="text-2xl font-bold text-foreground">{phase.phase}</h3>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    {phase.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Deliverables:</h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, delIndex) => (
                        <li key={delIndex} className="flex items-center text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-muted/30 rounded-xl p-8 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <phase.icon className="h-24 w-24 text-muted-foreground/30 mx-auto mb-4" />
                      <div className="text-sm text-muted-foreground">Visual representation</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Choose Our Discovery Platform?
              </h2>
              <p className="text-lg text-muted-foreground">
                Transform your fundraising approach with intelligent investor discovery and strategic mapping.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 bg-card border rounded-lg p-6">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Start Discovering Your Perfect Investors Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't leave your fundraising to chance. Use our advanced discovery platform to identify 
              and connect with investors who are actively seeking opportunities like yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Launch Discovery Process
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-emerald-600">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
