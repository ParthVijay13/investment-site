import { notFound } from 'next/navigation';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import IndustryTemplate from '@/app/components/industry-template';
import { getIndustryData, getIndustrySlugs } from '@/lib/industry-data';

export async function generateStaticParams() {
  const slugs = getIndustrySlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const industryData = await getIndustryData(params.slug);
  
  if (!industryData) {
    return {
      title: 'Industry Not Found',
    };
  }

  return {
    title: `${industryData.name} Investors | InvestPro - Connect with ${industryData.name} Investment Opportunities`,
    description: `${industryData.hero.title} Connect with specialized ${industryData.name.toLowerCase()} investors and VCs. Access funding opportunities, strategic partnerships, and growth capital for your ${industryData.name.toLowerCase()} startup.`,
    keywords: `${industryData.name.toLowerCase()}, investors, venture capital, startup funding, investment opportunities, ${industryData.name.toLowerCase()} VCs`,
  };
}

export default  async function IndustryPage({ params }) {
  try {
    const industryData = await getIndustryData(params.slug);

    if (!industryData) {
      notFound();
    }

    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <IndustryTemplate industryData={industryData} />
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('Error loading industry page:', error);
    notFound();
  }
}
