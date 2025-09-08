import { Play, FileText, TrendingUp, Users, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resources = () => {
  const videos = [
    {
      title: 'How to Pitch to Investors',
      description: 'Learn the key elements of a compelling pitch deck and presentation.',
      duration: '12:30',
      views: '25K',
      thumbnail: 'pitch-video'
    },
    {
      title: 'Understanding Term Sheets',
      description: 'Navigate the complexities of investment terms and negotiations.',
      duration: '18:45',
      views: '18K',
      thumbnail: 'terms-video'
    },
    {
      title: 'Due Diligence Process',
      description: 'What to expect and how to prepare for investor due diligence.',
      duration: '15:20',
      views: '22K',
      thumbnail: 'dd-video'
    }
  ];

  const resources = [
    {
      icon: FileText,
      title: 'Startup Funding Guide',
      description: 'Comprehensive guide covering all aspects of startup fundraising from pre-seed to IPO.',
      type: 'PDF Guide',
      size: '2.5 MB',
      downloads: '10K+',
      color: 'bg-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'Market Analysis Template',
      description: 'Professional templates for conducting market research and competitive analysis.',
      type: 'Excel Template',
      size: '1.2 MB',
      downloads: '8K+',
      color: 'bg-green-500'
    },
    {
      icon: Users,
      title: 'Investor Database',
      description: 'Curated list of active investors with their investment focus and contact information.',
      type: 'Database Access',
      size: 'Online',
      downloads: '15K+',
      color: 'bg-purple-500'
    }
  ];

  const caseStudies = [
    {
      company: 'TechFlow Solutions',
      industry: 'SaaS',
      funding: '$5M Series A',
      timeline: '4 months',
      description: 'How we helped a B2B SaaS startup secure Series A funding from tier-1 VCs.',
      metrics: ['300% revenue growth', '50+ enterprise clients', '95% retention rate']
    },
    {
      company: 'HealthTech Innovations',
      industry: 'Healthcare',
      funding: '$2M Seed',
      timeline: '3 months',
      description: 'Connecting a digital health startup with specialized healthcare investors.',
      metrics: ['FDA approval obtained', '10K+ patients served', '25% cost reduction']
    },
    {
      company: 'GreenEnergy Solutions',
      industry: 'CleanTech',
      funding: '$8M Series A',
      timeline: '6 months',
      description: 'Securing growth capital for a renewable energy technology company.',
      metrics: ['50MW capacity deployed', '3 strategic partnerships', 'Carbon neutral impact']
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Resources & Insights
          </h2>
          <p className="text-lg text-muted-foreground">
            Access our comprehensive library of guides, templates, case studies, and educational content 
            to accelerate your investment journey.
          </p>
        </div>
        
        {/* Videos Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Educational Videos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                {/* Video thumbnail */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Play className="h-8 w-8 text-primary ml-1" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                
                {/* Video info */}
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">{video.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{video.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{video.views} views</span>
                    <span>Watch now</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Downloadable Resources */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Downloadable Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${resource.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <resource.icon className="h-6 w-6 text-white" />
                </div>
                
                <h4 className="font-semibold text-foreground mb-2">{resource.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span>{resource.type}</span>
                  <span>{resource.size}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary font-medium">
                    {resource.downloads} downloads
                  </span>
                  <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Case Studies */}
        {/* <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Success Stories
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-foreground">{study.company}</h4>
                    <p className="text-sm text-primary">{study.industry}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-lg font-bold text-foreground">{study.funding}</div>
                    <div className="text-xs text-muted-foreground">Funding Raised</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground">{study.timeline}</div>
                    <div className="text-xs text-muted-foreground">Timeline</div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">{study.description}</p>
                
                <div className="space-y-2">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}
        
        {/* Newsletter CTA */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Stay Updated with Market Insights
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest investment trends, startup insights, 
              and exclusive resources delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
