import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service | DG Detailing",
  description: "DG Detailing terms of service and service agreement.",
  canonical: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-black text-white mb-8">Terms of Service</h1>
        <div className="text-gray-400 leading-relaxed space-y-4">
          <p>By booking a service with DG Detailing, you agree to the following terms.</p>
          <h2 className="text-xl font-bold text-white mt-8 mb-3">Services</h2>
          <p>DG Detailing provides mobile auto detailing services in Greater Los Angeles. Service scope and pricing are confirmed at the time of booking.</p>
          <h2 className="text-xl font-bold text-white mt-8 mb-3">Cancellations</h2>
          <p>Please provide at least 24 hours notice for cancellations. Late cancellations may be subject to a cancellation fee.</p>
          <h2 className="text-xl font-bold text-white mt-8 mb-3">Liability</h2>
          <p>DG Detailing is fully insured. Any damage claims must be reported within 24 hours of service completion.</p>
          <h2 className="text-xl font-bold text-white mt-8 mb-3">Contact</h2>
          <p>Questions about these terms: <a href="mailto:diego@dgautodetailing.com" className="text-[#00B8E6]">diego@dgautodetailing.com</a> or <a href="tel:+13108554277" className="text-[#00B8E6]">(310) 855-4277</a>.</p>
        </div>
      </div>
    </div>
  );
}
