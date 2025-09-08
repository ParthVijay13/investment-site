'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How does QuickRaise match startups with investors?',
      answer: 'Our proprietary AI-powered matching system analyzes multiple factors including industry sector, funding stage, geographic preferences, investment thesis, and portfolio synergies. We consider both quantitative metrics and qualitative factors to ensure optimal matches that benefit both parties.'
    },
    {
      question: 'What are the fees for using QuickRaise\'s services?',
      answer: 'We operate on a success-fee model, meaning you only pay when we successfully facilitate a funding round. Our fees are competitive and transparent, typically ranging from 3-5% of the funding amount raised, with no upfront costs or monthly subscriptions.'
    },
    {
      question: 'How long does the typical funding process take?',
      answer: 'The timeline varies depending on the funding stage and complexity, but our streamlined process typically takes 3-6 months from initial matching to term sheet signing. We\'ve helped companies close rounds in as little as 6 weeks for well-prepared startups.'
    },
    {
      question: 'What stages of funding do you support?',
      answer: 'We support all funding stages from pre-seed ($50K+) to growth rounds ($15M+). Our network includes angel investors, seed funds, venture capital firms, and growth equity funds across various sectors and geographies.'
    },
    {
      question: 'Do you work with international startups and investors?',
      answer: 'Yes, we have a global network spanning North America, Europe, Asia, and other key markets. We facilitate cross-border investments and help international startups access U.S. capital markets, as well as connect U.S. companies with international investors.'
    },
    {
      question: 'What information do you need to get started?',
      answer: 'We typically need your pitch deck, financial projections, cap table, and basic company information. Our team will also conduct an initial assessment call to understand your specific needs, goals, and timeline for fundraising.'
    },
    {
      question: 'How do you ensure investor quality and legitimacy?',
      answer: 'All investors in our network go through a rigorous vetting process. We verify their track record, available capital, investment focus, and reputation in the market. We only work with accredited investors and established funds with proven portfolios.'
    },
    {
      question: 'What support do you provide during due diligence?',
      answer: 'We provide comprehensive support including data room setup, document preparation, financial model review, legal coordination, and negotiation guidance. Our team has extensive experience helping startups navigate the due diligence process efficiently.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about our investment matching process, 
            fees, and how we can help accelerate your funding journey.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card border rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-card border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Schedule a consultation to discuss your specific needs 
              and learn how we can accelerate your investment journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Schedule a Call
              </button>
              <button className="px-6 py-3 border border-input rounded-lg hover:bg-accent transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
