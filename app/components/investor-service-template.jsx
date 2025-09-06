'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Target, 
  Settings, 
  BarChart, 
  ArrowRight, 
  DollarSign, 
  Globe, 
  Zap, 
  Users,
  Brain,
  TrendingUp,
  Handshake,
  Clock,
  Network,
  ChartLine,
  FileText,
  ShieldCheck,
  Percent,
  Search,
  Calculator,
  Shield,
  Rocket,
  Puzzle,
  MessageSquare
} from 'lucide-react';

const iconMap = {
  target: Target,
  settings: Settings,
  'bar-chart': BarChart,
  'arrow-right': ArrowRight,
  'dollar-sign': DollarSign,
  globe: Globe,
  zap: Zap,
  users: Users,
  brain: Brain,
  'trending-up': TrendingUp,
  handshake: Handshake,
  clock: Clock,
  network: Network,
  'chart-line': ChartLine,
  'file-text': FileText,
  'shield-check': ShieldCheck,
  percentage: Percent,
  search: Search,
  calculator: Calculator,
  shield: Shield,
  rocket: Rocket,
  puzzle: Puzzle,
  quality: ShieldCheck,
  growth: TrendingUp
};

const colorMap = {
  blue: 'bg-blue-500',
  purple: 'bg-purple-500',
  green: 'bg-green-500',
  orange: 'bg-orange-500',
  gray: 'bg-gray-500'
};

const InvestorServiceTemplate = ({ serviceData }) => {
  if (!serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
          <p className="text-muted-foreground">The requested investor service page could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full text-orange-600 font-medium text-sm mb-6">
              <Target className="w-4 h-4 mr-2" />
              {serviceData.name} Services
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              {serviceData.hero.title}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              {serviceData.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-8 py-4 text-lg bg-orange-500 hover:bg-orange-600">
                {serviceData.hero.cta}
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-orange-500 text-orange-600 hover:bg-orange-50">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {serviceData.mainSection.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {serviceData.mainSection.subtitle}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {serviceData.mainSection.features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon] || Target;
                const colorClass = colorMap[feature.color] || 'bg-blue-500';
                
                return (
                  <div
                    key={index}
                    className="bg-card border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${colorClass} mb-6`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {serviceData.benefits.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {serviceData.benefits.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceData.benefits.points.map((point, index) => {
                const IconComponent = iconMap[point.icon] || Target;
                const bgClass = point.highlight ? 'bg-yellow-400' : 'bg-background';
                const borderClass = point.highlight ? 'border-yellow-400' : 'border-border';
                
                return (
                  <div
                    key={index}
                    className={`${bgClass} ${borderClass} border rounded-xl p-8 hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-foreground">
                          <IconComponent className="w-6 h-6 text-background" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">
                          {point.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {serviceData.process.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {serviceData.process.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceData.process.steps.map((step, index) => {
                const bgClass = step.color === 'blue' ? 'bg-blue-500' : 'bg-background';
                const textClass = step.color === 'blue' ? 'text-white' : 'text-foreground';
                const subtextClass = step.color === 'blue' ? 'text-blue-100' : 'text-muted-foreground';
                const borderClass = step.color === 'blue' ? 'border-blue-500' : 'border-border';
                
                return (
                  <div
                    key={index}
                    className={`${bgClass} ${borderClass} border rounded-xl p-8 hover:shadow-lg transition-all duration-300 relative`}
                  >
                    <div className="absolute top-4 right-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        step.color === 'blue' ? 'bg-white text-blue-500' : 'bg-muted text-muted-foreground'
                      }`}>
                        {step.number}
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <MessageSquare className={`w-6 h-6 mt-1 ${step.color === 'blue' ? 'text-white' : 'text-blue-500'}`} />
                      <div>
                        <h3 className={`text-xl font-bold mb-3 ${textClass}`}>
                          {step.title}
                        </h3>
                        <p className={`leading-relaxed ${subtextClass}`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-orange-500 to-blue-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {serviceData.cta.title}
            </h2>
            <p className="text-lg text-orange-100 mb-8">
              {serviceData.cta.subtitle}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {serviceData.cta.features.map((feature, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/20 rounded-full text-white font-medium text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg bg-white text-orange-500 hover:bg-gray-100">
                {serviceData.cta.buttonText}
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-white text-white hover:bg-white/10">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorServiceTemplate;
