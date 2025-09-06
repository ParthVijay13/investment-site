import { notFound } from 'next/navigation';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import InvestorServiceTemplate from '@/app/components/investor-service-template';
import { getInvestorServiceData, getInvestorServiceSlugs } from '@/lib/investor-services-data';

export async function generateStaticParams() {
  const slugs = getInvestorServiceSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const serviceData = getInvestorServiceData(params.slug);
  
  if (!serviceData) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${serviceData.name} | InvestPro - Professional Investment Services`,
    description: `${serviceData.hero.subtitle} Expert ${serviceData.name.toLowerCase()} services for investors and startups.`,
    keywords: `${serviceData.name.toLowerCase()}, investment services, startup services, investor support, ${serviceData.name.toLowerCase().replace(/\s+/g, ', ')}`,
  };
}

export default function InvestorServicePage({ params }) {
  try {
    const serviceData = getInvestorServiceData(params.slug);

    if (!serviceData) {
      notFound();
    }

    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <InvestorServiceTemplate serviceData={serviceData} />
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('Error loading investor service page:', error);
    notFound();
  }
}
