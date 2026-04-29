import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | DG Detailing",
  description: "DG Detailing's privacy policy. We respect your privacy and protect your personal information.",
  canonical: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-black text-white mb-8">Privacy Policy</h1>
        <div className="prose text-gray-400 leading-relaxed space-y-4">
          <p>DG Detailing (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates www.dgautodetailing.com. This page informs you of our policies regarding the collection, use, and disclosure of personal information.</p>
          <h2 className="text-xl font-bold text-white mt-8 mb-3">Information We Collect</h2>
          <p>We collect information you provide when booking a service or contacting us, including name, email address, phone number, and vehicle information.</p>
          <h2 className="text-xl font-bold text-white mt-8 mb-3">How We Use Your Information</h2>
          <p>We use collected information to confirm appointments, communicate about services, and improve our offerings. We do not sell or share your personal information with third parties except as required to fulfill services.</p>
          <h2 className="text-xl font-bold text-white mt-8 mb-3">Contact</h2>
          <p>For privacy-related questions, contact us at <a href="mailto:diego@dgautodetailing.com" className="text-[#00B8E6]">diego@dgautodetailing.com</a> or call <a href="tel:+13108554277" className="text-[#00B8E6]">(310) 855-4277</a>.</p>
        </div>
      </div>
    </div>
  );
}
