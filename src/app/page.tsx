import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InstallPrompt } from "@/components/InstallPrompt";
import { Pillars } from "@/components/Pillars";
import { Policies } from "@/components/Policies";
import { Ritual } from "@/components/Ritual";
import { ServiceMenu } from "@/components/ServiceMenu";
import { StickyBookBar } from "@/components/StickyBookBar";
import { Story } from "@/components/Story";
import { Visit } from "@/components/Visit";
import { localBusinessSchema } from "@/lib/schema";
import { siteUrl } from "@/lib/url";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema(siteUrl())).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main>
        <Hero />
        <Pillars />
        <ServiceMenu />
        <Story />
        <Ritual />
        <Visit />
        <Policies />
        <FinalCta />
      </main>
      <Footer />
      <StickyBookBar />
      <InstallPrompt />
    </>
  );
}
