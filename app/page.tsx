import { Contact } from "@/components/contact";
import { Flagship } from "@/components/flagship";
import { Hero } from "@/components/hero";
import { Impact } from "@/components/impact";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { WorkGrid } from "@/components/work-grid";
import {
  email,
  getSiteUrl,
  linkedInUrl,
  personName,
  siteDescription,
  siteName,
} from "@/lib/site";

export default function Home() {
  const siteUrl = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: siteName,
        url: siteUrl,
        description: siteDescription,
      },
      {
        "@type": "Person",
        name: personName,
        jobTitle: "Product Marketing",
        email: `mailto:${email}`,
        url: siteUrl,
        sameAs: [linkedInUrl],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main>
        <Hero />
        <Flagship />
        <Impact />
        <WorkGrid />
        <Services />
        <Contact />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
