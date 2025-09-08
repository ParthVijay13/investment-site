import { TrendingUp, Users, DollarSign } from 'lucide-react';

const Highlight = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Powering the Future of Investment
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We bridge the gap between visionary entrepreneurs and strategic investors, 
            creating opportunities that drive innovation and generate exceptional returns.
          </p>
          
          {/* Key stat highlight */}
          <div className="inline-flex items-center justify-center p-6 bg-primary/10 rounded-2xl">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">$200 M+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Total Market Value Created
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Market Intelligence
            </h3>
            <p className="text-muted-foreground">
              Advanced analytics and market insights to identify high-potential investment opportunities 
              across emerging sectors.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Strategic Matching
            </h3>
            <p className="text-muted-foreground">
              AI-powered matching system that connects startups with investors based on 
              sector expertise, investment thesis, and growth stage.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Capital Efficiency
            </h3>
            <p className="text-muted-foreground">
              Streamlined funding processes and due diligence frameworks that accelerate 
              deal closure and maximize capital deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
