import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { Button } from '@/components/ui/button';
import { 
  Users, 
  MessageCircle, 
  Mail, 
  Phone, 
  Calendar,
  CheckCircle, 
  ArrowRight,
  Handshake,
  Star,
  Clock,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

export default function InvestorOutreach() {
  const outreachChannels = [
    {
      icon: Mail,
      title: "Email Campaigns",
      description: "Personalized email sequences with high open and response rates",
      effectiveness: "78% Open Rate",
      color: "bg-blue-500"
    },
    {
      icon: MessageCircle,
      title: "LinkedIn Outreach",
      description: "Professional networking and relationship building on LinkedIn",
      effectiveness: "65% Connection Rate",
      color: "bg-indigo-500"
    },
    {
      icon: Phone,
      title: "Direct Calls",
      description: "Strategic phone outreach to warm leads and referrals",
      effectiveness: "45% Response Rate",
      color: "bg-green-500"
    },
    {
      icon: Calendar,
      title: "Event Networking",
      description: "Face-to-face meetings at industry events and conferences",
      effectiveness: "90% Meeting Success",
      color: "bg-purple-500"
    }
  ];

  const approachSteps = [
    {
      title: "Research & Profiling",
      description: "Deep research into investor backgrounds, preferences, and investment history",
      icon: <Shield className="w-6 h-6" />,
      details: ["Investment thesis analysis", "Portfolio company research", "Personal interest mapping"]
    },
    {
      title: "Message Personalization",
      description: "Crafting compelling, personalized messages that resonate with each investor",
      icon: <Zap className="w-6 h-6" />,
      details: ["Custom value propositions", "Relevant case studies", "Timing optimization"]
    },
    {
      title: "Multi-Channel Engagement",
      description: "Strategic outreach across multiple channels for maximum visibility",
      icon: <TrendingUp className="w-6 h-6" />,
      details: ["Email sequences", "Social media engagement", "Warm introductions"]
    },
    {
      title: "Relationship Nurturing",
      description: "Long-term relationship building beyond immediate funding needs",
      icon: <Handshake className="w-6 h-6" />,
      details: ["Regular updates", "Value-add sharing", "Future opportunity mapping"]
    }
  ];

  const testimonials = [
    {
      quote: "Their outreach strategy helped us connect with 15 qualified investors in just 3 weeks. The personalization was incredible.",
      author: "Sarah Chen",
      role: "CEO, HealthTech Innovations",
      company: "Series A - $8M raised",
      rating: 5
    },
    {
      quote: "The quality of investor meetings we secured was outstanding. Each conversation was meaningful and led to serious discussions.",
      author: "Marcus Rodriguez",
      role: "Founder, EcoSolutions",
      company: "Seed - $2.5M raised",
      rating: 5
    },
    {
      quote: "Professional, strategic, and results-driven. They transformed our fundraising approach completely.",
      author: "Emily Watson",
      role: "Co-founder, AI Dynamics",
      company: "Series B - $15M raised",
      rating: 5
    }
  ];

  const metrics = [
    { number: "89%", label: "Response Rate", description: "Average investor response to our outreach campaigns" },
    { number: "3.2x", label: "Meeting Conversion", description: "Higher meeting-to-pitch conversion compared to cold outreach" },
    { number: "24 hrs", label: "Average Response Time", description: "Typical time to receive initial investor feedback" },
    { number: "150+", label: "Successful Placements", description: "Startups successfully connected with investors monthly" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500 mb-8">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Professional Investor Outreach
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform cold prospects into warm conversations. Our strategic outreach program 
              connects you with the right investors through personalized, professional engagement.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-white/80 backdrop-blur rounded-lg p-4 text-center border">
                  <div className="text-2xl font-bold text-primary mb-1">{metric.number}</div>
                  <div className="text-sm font-medium text-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Start Outreach Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Outreach Channels */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Multi-Channel Outreach Strategy
            </h2>
            <p className="text-lg text-muted-foreground">
              We leverage multiple communication channels to maximize your reach and ensure 
              your message gets in front of the right investors at the right time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outreachChannels.map((channel, index) => (
              <div key={index} className="group">
                <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center h-full">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${channel.color} mb-6 group-hover:scale-110 transition-transform`}>
                    <channel.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {channel.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {channel.description}
                  </p>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {channel.effectiveness}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Process */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Strategic Approach
            </h2>
            <p className="text-lg text-muted-foreground">
              Every outreach campaign is carefully planned and executed to maximize engagement 
              and build meaningful relationships with potential investors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {approachSteps.map((step, index) => (
              <div key={index} className="bg-card border rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {detail}
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

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from founders who have successfully raised funding through our outreach programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary font-medium mt-1">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Typical Outreach Timeline
              </h2>
              <p className="text-lg text-muted-foreground">
                From initial strategy to investor meetings - here's what you can expect.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/20"></div>
              
              <div className="space-y-12">
                {[
                  { week: "Week 1", title: "Strategy & Research", description: "Investor profiling, message crafting, and campaign setup" },
                  { week: "Week 2-3", title: "Initial Outreach", description: "Launch multi-channel campaigns and begin investor engagement" },
                  { week: "Week 4-5", title: "Follow-up & Nurturing", description: "Strategic follow-ups and relationship building activities" },
                  { week: "Week 6+", title: "Meetings & Pitches", description: "Scheduled investor meetings and pitch presentations" }
                ].map((phase, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`bg-card border rounded-xl p-6 w-5/12 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                      <div className="flex items-center mb-3">
                        <Clock className="w-5 h-5 text-primary mr-2" />
                        <span className="text-sm font-medium text-primary">{phase.week}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{phase.title}</h3>
                      <p className="text-muted-foreground text-sm">{phase.description}</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Connect with Your Ideal Investors?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Stop sending cold emails into the void. Let our proven outreach strategies 
              open doors to meaningful investor conversations and successful funding rounds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Begin Outreach Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-purple-600">
                Schedule Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
