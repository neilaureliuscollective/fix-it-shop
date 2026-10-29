import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Proof } from "@/components/Proof";
import { Hero } from "@/components/Hero";
import { Policies } from "@/components/Policies";
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
        <Story />
        <ServiceMenu />
        <Proof />
        <Visit />
        <Policies />
        <FinalCta />
      </main>
      <Footer />
      <StickyBookBar />
    </>
  );
}
