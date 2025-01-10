import { SiteHeader } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { TestnetBanner } from "@/components/TestnetBanner";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0D14] text-white font-mono flex flex-col">
      <TestnetBanner />
      <SiteHeader />
      <main className="container py-6 flex-1">
        <div className="bg-[#0A0D14]/50 border border-[#1a2333] rounded-lg overflow-hidden max-w-4xl mx-auto">
          <div className="bg-[#1a2333] px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="text-white/50 text-sm">privacy_policy.txt</span>
          </div>

          <div className="p-6 space-y-6 text-sm leading-relaxed">
            <div className="space-y-2">
              <h1 className="text-xl font-bold">Privacy Policy</h1>
              <p className="text-white/70">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="space-y-4">
              <section className="space-y-2">
                <h2 className="text-lg font-semibold">
                  1. Information We Collect
                </h2>
                <p className="text-white/70">
                  We collect information that you provide directly to us,
                  including:
                </p>
                <ul className="list-disc pl-6 text-white/70 space-y-1">
                  <li>Account information (e.g., wallet address, username)</li>
                  <li>Communication preferences</li>
                  <li>Transaction data</li>
                  <li>Information about your interactions with our platform</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-semibold">
                  2. How We Use Your Information
                </h2>
                <p className="text-white/70">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-white/70 space-y-1">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process your transactions</li>
                  <li>Send you technical notices and support messages</li>
                  <li>
                    Communicate with you about products, services, and events
                  </li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>
                    Detect, investigate, and prevent fraudulent transactions and
                    other illegal activities
                  </li>
                  <li>
                    Protect the rights and property of Token Calendar and others
                  </li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-semibold">
                  3. Information Sharing
                </h2>
                <p className="text-white/70">
                  We do not share your personal information with third parties
                  except as described in this policy. We may share your
                  information with:
                </p>
                <ul className="list-disc pl-6 text-white/70 space-y-1">
                  <li>Service providers who assist in our operations</li>
                  <li>Professional advisors</li>
                  <li>
                    Law enforcement or regulatory agencies when required by law
                  </li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-semibold">4. Security</h2>
                <p className="text-white/70">
                  We take reasonable measures to help protect information about
                  you from loss, theft, misuse, unauthorized access, disclosure,
                  alteration, and destruction. However, no security system is
                  impenetrable and we cannot guarantee the security of our
                  systems 100%.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-semibold">5. Your Rights</h2>
                <p className="text-white/70">You have the right to:</p>
                <ul className="list-disc pl-6 text-white/70 space-y-1">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your information</li>
                  <li>Withdraw consent where previously provided</li>
                  <li>Object to our processing of your information</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-semibold">
                  6. Cookies and Tracking
                </h2>
                <p className="text-white/70">
                  We use cookies and similar tracking technologies to track
                  activity on our platform and hold certain information. You can
                  instruct your browser to refuse all cookies or to indicate
                  when a cookie is being sent.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-semibold">
                  7. Changes to This Policy
                </h2>
                <p className="text-white/70">
                  We may update this privacy policy from time to time. We will
                  notify you of any changes by posting the new privacy policy on
                  this page and updating the &quot;Last updated&quot; date at
                  the top of this policy.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-semibold">8. Contact Us</h2>
                <p className="text-white/70">
                  If you have any questions about this privacy policy or our
                  practices, please contact us at:
                </p>
                <p className="text-white/70">
                  Email: privacy@tokencalendar.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
