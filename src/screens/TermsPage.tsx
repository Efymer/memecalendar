import { SiteHeader } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { TestnetBanner } from "@/components/TestnetBanner";

export default function TermsPage() {
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
            <span className="text-white/50 text-sm">
              terms_and_conditions.txt
            </span>
          </div>

          <div className="p-6 space-y-6 text-sm leading-relaxed">
            <div className="space-y-2">
              <h1 className="text-xl font-bold">Terms and Conditions</h1>
              <p className="text-white/70">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="space-y-4">
              <section className="space-y-2">
                <h2 className="text-lg font-semibold">
                  1. Acceptance of Terms
                </h2>
                <p className="text-white/70">
                  By accessing and using this website, you accept and agree to
                  be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-semibold">2. Use License</h2>
                <p className="text-white/70">
                  Permission is granted to temporarily download one copy of the
                  materials (information or software) on Token Calendar&apos;s
                  website for personal, non-commercial transitory viewing only.
                </p>
                <ul className="list-disc pl-6 text-white/70 space-y-1">
                  <li>
                    This is the grant of a license, not a transfer of title
                  </li>
                  <li>You may not modify or copy the materials</li>
                  <li>
                    You may not use the materials for any commercial purpose
                  </li>
                  <li>
                    You may not attempt to decompile or reverse engineer any
                    software contained on Token Calendar&apos;s website
                  </li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-semibold">3. Disclaimer</h2>
                <p className="text-white/70">
                  The materials on Token Calendar&apos;s website are provided on
                  an &apos;as is&apos; basis. Token Calendar makes no
                  warranties, expressed or implied, and hereby disclaims and
                  negates all other warranties including, without limitation,
                  implied warranties or conditions of merchantability, fitness
                  for a particular purpose, or non-infringement of intellectual
                  property or other violation of rights.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-semibold">4. Limitations</h2>
                <p className="text-white/70">
                  In no event shall Token Calendar or its suppliers be liable
                  for any damages (including, without limitation, damages for
                  loss of data or profit, or due to business interruption)
                  arising out of the use or inability to use the materials on
                  Token Calendar&apos;s website.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-semibold">
                  5. Accuracy of Materials
                </h2>
                <p className="text-white/70">
                  The materials appearing on Token Calendar&apos;s website could
                  include technical, typographical, or photographic errors.
                  Token Calendar does not warrant that any of the materials on
                  its website are accurate, complete, or current.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-semibold">6. Links</h2>
                <p className="text-white/70">
                  Token Calendar has not reviewed all of the sites linked to its
                  website and is not responsible for the contents of any such
                  linked site. The inclusion of any link does not imply
                  endorsement by Token Calendar of the site.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-semibold">7. Modifications</h2>
                <p className="text-white/70">
                  Token Calendar may revise these terms of service for its
                  website at any time without notice. By using this website you
                  are agreeing to be bound by the then current version of these
                  terms of service.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-semibold">8. Governing Law</h2>
                <p className="text-white/70">
                  These terms and conditions are governed by and construed in
                  accordance with the laws and you irrevocably submit to the
                  exclusive jurisdiction of the courts in that location.
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
