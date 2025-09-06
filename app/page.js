import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Hero from "@/app/components/sections/hero";
import Highlight from "@/app/components/sections/highlight";
import Services from "@/app/components/sections/services";
import Benefits from "@/app/components/sections/benefits";
import Industries from "@/app/components/sections/industries";
import InvestorMatching from "@/app/components/sections/investor-matching";
import Testimonials from "@/app/components/sections/testimonials";
import FAQs from "@/app/components/sections/faqs";
import Resources from "@/app/components/sections/resources";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Highlight />
        <Services />
        <Benefits />
        <Industries />
        <InvestorMatching />
        <Testimonials />
        <FAQs />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}
