import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { Button } from '@/components/ui/button';
import { 
  Database, 
  Shield, 
  FileText, 
  Lock, 
  Eye,
  CheckCircle, 
  ArrowRight,
  Folder,
  Download,
  Share2,
  BarChart3,
  Clock,
  Users,
  AlertCircle,
  Zap
} from 'lucide-react';

export default function DataRoomCreation() {
  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Enterprise-level encryption and security protocols",
      highlight: "256-bit SSL encryption"
    },
    {
      icon: Eye,
      title: "Advanced Analytics",
      description: "Track investor engagement and document views",
      highlight: "Real-time insights"
    },
    {
      icon: Users,
      title: "Access Control",
      description: "Granular permissions and user management",
      highlight: "Role-based access"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Always accessible to global investors",
      highlight: "99.9% uptime"
    }
  ];

  const documentCategories = [
    {
      category: "Corporate Documents",
      icon: <FileText className="w-5 h-5" />,
      documents: [
        "Articles of Incorporation",
        "Bylaws and Operating Agreements",
        "Board Resolutions",
        "Cap Table and Shareholding Structure",
        "Previous Funding Documentation"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      category: "Financial Information",
      icon: <BarChart3 className="w-5 h-5" />,
      documents: [
        "Audited Financial Statements",
        "Monthly/Quarterly Reports",
        "Budget and Forecasts",
        "Revenue Recognition Policies",
        "Tax Returns and Compliance"
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      category: "Legal & Compliance",
      icon: <Shield className="w-5 h-5" />,
      documents: [
        "Material Contracts",
        "Intellectual Property Portfolio",
        "Employment Agreements",
        "Compliance Certifications",
        "Litigation History"
      ],
      color: "bg-purple-50 border-purple-200"
    },
    {
      category: "Business Operations",
      icon: <Zap className="w-5 h-5" />,
      documents: [
        "Business Plan and Strategy",
        "Market Research and Analysis",
        "Customer References",
        "Operational Metrics",
        "Technology Documentation"
      ],
      color: "bg-orange-50 border-orange-200"
    }
  ];

  const setupProcess = [
    {
      step: "Document Audit",
      description: "We review your existing documents and identify what's needed for a comprehensive data room",
      icon: <AlertCircle className="w-6 h-6" />,
      duration: "2-3 days"
    },
    {
      step: "Structure Design",
      description: "Create logical folder structure and organization system tailored to your industry",
      icon: <Folder className="w-6 h-6" />,
      duration: "1 day"
    },
    {
      step: "Document Preparation",
      description: "Help prepare, format, and optimize documents for investor review",
      icon: <FileText className="w-6 h-6" />,
      duration: "3-5 days"
    },
    {
      step: "Platform Setup",
      description: "Configure secure data room with proper access controls and permissions",
      icon: <Database className="w-6 h-6" />,
      duration: "1 day"
    },
    {
      step: "Testing & Launch",
      description: "Quality assurance testing and investor access coordination",
      icon: <CheckCircle className="w-6 h-6" />,
      duration: "1 day"
    }
  ];

  const analytics = [
    { metric: "Document Views", value: "Track which documents investors spend time reviewing" },
    { metric: "Time Spent", value: "Monitor engagement duration and investor interest levels" },
    { metric: "Download Activity", value: "See which materials investors are saving for review" },
    { metric: "Access Patterns", value: "Understand investor behavior and follow-up priorities" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Side-by-Side Layout */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500 mb-8">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Professional Data Room Creation
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Streamline your due diligence process with secure, organized, and professional 
                data rooms that impress investors and accelerate funding decisions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-muted-foreground">Complete setup in 7-10 business days</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-muted-foreground">Bank-grade security and encryption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-muted-foreground">Real-time analytics and insights</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4">
                  Create Data Room
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  View Demo
                </Button>
              </div>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                  <div className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full inline-block">
                    {feature.highlight}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Document Categories */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Comprehensive Document Organization
            </h2>
            <p className="text-lg text-muted-foreground">
              We organize your documents into logical categories that investors expect, 
              making due diligence smooth and efficient.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documentCategories.map((category, index) => (
              <div key={index} className={`bg-white border-2 rounded-xl p-6 ${category.color}`}>
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 p-2 bg-white rounded-lg mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.documents.map((doc, docIndex) => (
                    <li key={docIndex} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Process */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Streamlined Setup Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Our systematic approach ensures your data room is professional, complete, and ready for investor review.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-primary/20 hidden lg:block"></div>
              
              <div className="space-y-8">
                {setupProcess.map((process, index) => (
                  <div key={index} className="relative flex items-start space-x-6">
                    {/* Step Number */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                        {index + 1}
                      </div>
                      <div className="absolute inset-2 bg-primary/20 rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            {process.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {process.step}
                          </h3>
                        </div>
                        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {process.duration}
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        {process.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Preview */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Powerful Analytics & Insights
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Gain valuable insights into investor behavior and engagement. 
                Know which investors are most interested and when to follow up.
              </p>
              <div className="space-y-4">
                {analytics.map((analytic, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-white rounded-lg p-4 border">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">{analytic.metric}</div>
                      <div className="text-sm text-muted-foreground">{analytic.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mock Dashboard */}
            <div className="bg-white rounded-xl p-6 border shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Data Room Analytics</h3>
                <div className="text-sm text-muted-foreground">Last 7 days</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Eye className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium">Total Views</span>
                  </div>
                  <span className="font-bold text-blue-500">1,247</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Download className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium">Downloads</span>
                  </div>
                  <span className="font-bold text-green-500">89</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span className="text-sm font-medium">Active Investors</span>
                  </div>
                  <span className="font-bold text-purple-500">12</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-medium">Avg. Time Spent</span>
                  </div>
                  <span className="font-bold text-orange-500">18m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Enterprise-Grade Security
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Your sensitive business information deserves the highest level of protection. 
              Our data rooms meet the strictest security standards.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">SSL Encryption</h3>
                <p className="text-muted-foreground">256-bit SSL encryption for all data transmission and storage</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <Lock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Access Control</h3>
                <p className="text-muted-foreground">Granular permissions and multi-factor authentication</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Audit Trail</h3>
                <p className="text-muted-foreground">Complete activity logging and compliance reporting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Impress Your Investors?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't let a disorganized data room slow down your fundraising. Create a professional, 
              secure data room that showcases your startup in the best light.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-indigo-600">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
