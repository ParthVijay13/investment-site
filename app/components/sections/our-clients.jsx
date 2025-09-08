'use client';

import Image from 'next/image';

const OurClients = () => {
  // Array of client logos - includes existing ones and new ones
  const clientLogos = [
    // Existing logos (PNG format)
    { name: 'Cosmium', src: '/logos/cosmium.png', alt: 'Cosmium' },
    { name: 'Dhurina', src: '/logos/Dhurina.png', alt: 'Dhurina' },
    { name: 'Eeki', src: '/logos/eeki.png', alt: 'Eeki' },
    { name: 'Farak', src: '/logos/farak.png', alt: 'Farak' },
    { name: 'Maalexi', src: '/logos/maalexi.png', alt: 'Maalexi' },
    { name: 'Pauerte Visual', src: '/logos/pauerteVisual.png', alt: 'Pauerte Visual' },
    { name: 'Saveo', src: '/logos/saveo.png', alt: 'Saveo' },
    
    // New SVG logos
    
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-muted-foreground">
            Join the growing list of successful companies that have accelerated their 
            growth with our investment matching and funding solutions.
          </p>
        </div>
        
        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center justify-items-center">
          {clientLogos.map((client, index) => (
            <div 
              key={index}
              className="group relative bg-card border rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 w-full h-20 flex items-center justify-center"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={100}
                  height={50}
                  className="object-contain max-w-full max-h-full  transition-opacity duration-300 "
                  unoptimized={client.src.endsWith('.svg')}
                />
              </div>
              
            </div>
            
          ))}
          <div className="text-center">
            <h3 className="text-md font-semibold text-foreground mb-4">+10 more</h3>
          </div>
        </div>
        
        
        {/* Stats Section */}
        
        
        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="bg-muted/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let us help you connect with the right investors and accelerate your growth journey.
            </p>
            <button className="px-8 py-3 bg-primary/90 text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
