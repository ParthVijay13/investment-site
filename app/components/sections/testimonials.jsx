import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechFlow Solutions',
      company: 'Series A Startup',
      content: 'InvestPro connected us with the perfect investor who not only provided capital but became a strategic partner. Their matching process is incredibly precise and saved us months of networking.',
      rating: 5,
      avatar: 'SC',
      funding: '$5M Series A'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Managing Partner',
      company: 'Venture Capital Fund',
      content: 'The quality of deal flow from InvestPro is exceptional. Their screening process ensures we only see startups that align with our investment thesis, making our due diligence much more efficient.',
      rating: 5,
      avatar: 'MR',
      funding: '$50M+ Invested'
    },
    {
      name: 'Emily Watson',
      role: 'Founder, HealthTech Innovations',
      company: 'Seed Stage Startup',
      content: 'From pitch deck refinement to investor introductions, InvestPro supported us every step of the way. We closed our seed round 40% faster than expected thanks to their expertise.',
      rating: 5,
      avatar: 'EW',
      funding: '$2M Seed Round'
    },
    {
      name: 'David Kim',
      role: 'Angel Investor',
      company: 'Tech Industry Veteran',
      content: 'InvestPro\'s platform gives me access to pre-vetted startups with detailed analysis. It\'s like having a dedicated research team that identifies the best opportunities in my focus areas.',
      rating: 5,
      avatar: 'DK',
      funding: '25+ Investments'
    },
    {
      name: 'Lisa Thompson',
      role: 'Co-founder, GreenEnergy Solutions',
      company: 'CleanTech Startup',
      content: 'The team at InvestPro understood our mission and connected us with impact investors who share our vision. Their sector expertise in CleanTech made all the difference.',
      rating: 5,
      avatar: 'LT',
      funding: '$8M Series A'
    },
    {
      name: 'James Park',
      role: 'Investment Director',
      company: 'Corporate Venture Capital',
      content: 'InvestPro streamlined our startup scouting process significantly. Their AI-powered matching and detailed company profiles help us make faster, more informed investment decisions.',
      rating: 5,
      avatar: 'JP',
      funding: '$100M+ AUM'
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what founders and investors say about their experience with InvestPro.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="h-8 w-8" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                </div>
              </div>
              
              {/* Funding info */}
              <div className="mt-4 pt-4 border-t">
                <div className="text-sm font-medium text-center text-primary">
                  {testimonial.funding}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="mt-16">
          <div className="bg-primary/5 rounded-2xl p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
