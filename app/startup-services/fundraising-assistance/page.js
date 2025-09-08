import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { Button } from '@/components/ui/button';
import { 
  DollarSign, 
  TrendingUp, 
  FileText, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Briefcase,
  Target,
  Zap,
  Shield
} from 'lucide-react';

export default function FundraisingAssistance() {
  const processSteps = [
    {
      icon: Target,
      title: "Strategic Assessment",
      description: "Comprehensive evaluation of your funding requirements, business model, and growth trajectory",
      color: "bg-blue-500"
    },
    {
      icon: FileText,
      title: "Pitch Optimization",
      description: "Professional pitch deck creation and refinement with investor-focused messaging",
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "Investor Matching",
      description: "Strategic alignment with investors who understand your sector and stage",
      color: "bg-purple-500"
    },
    {
      icon: Briefcase,
      title: "Deal Execution",
      description: "End-to-end support through due diligence, negotiations, and closing",
      color: "bg-orange-500"
    }
  ];

  const services = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Valuation Guidance",
      description: "Market-based valuation analysis and positioning strategies",
      features: ["Comparable company analysis", "Market multiples research", "Valuation justification"]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Documentation Support",
      description: "Professional preparation of all fundraising materials",
      features: ["Executive summaries", "Financial models", "Legal document preparation"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Due Diligence Prep",
      description: "Comprehensive preparation for investor scrutiny",
      features: ["Document organization", "Financial audit readiness", "Legal compliance review"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Negotiation Support",
      description: "Expert guidance through term sheet negotiations",
      features: ["Term sheet analysis", "Deal structure optimization", "Legal coordination"]
    }
  ];

  const outcomes = [
    { metric: "95%", label: "Success Rate", description: "Of startups we assist successfully close funding rounds" },
    { metric: "40%", label: "Higher Valuations", description: "Average valuation improvement compared to initial estimates" },
    { metric: "60 Days", label: "Faster Closing", description: "Reduced time from initial contact to funding closure" },
    { metric: "200+", label: "Investor Network", description: "Vetted investors across all stages and sectors" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 mb-8">
              <DollarSign className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Fundraising Assistance
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Navigate your funding journey with confidence. Our comprehensive fundraising assistance 
              program provides end-to-end support from initial strategy to successful closing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Start Your Fundraise
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Proven Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach to fundraising that maximizes your chances of success 
              while minimizing time and effort.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.color} mb-4`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Comprehensive Support Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Every aspect of your fundraising journey is covered with professional expertise and proven methodologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card border rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Proven Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Our track record speaks for itself. Here's what our clients achieve with our support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <div key={index} className="text-center p-6 bg-card border rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">
                  {outcome.metric}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {outcome.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {outcome.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Accelerate Your Fundraising?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of successful startups who have secured funding with our expert guidance. 
              Let's discuss your fundraising goals and create a winning strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
