import React from "react";

const DfyLab: React.FC = () => {
  return (
    <main className="bg-slate-950 text-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
        <section className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold">ItsAI.Help Lab</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Don&apos;t want to learn prompt engineering? We&apos;ll run the AI for
            you and hand you the polished results.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-4 text-sm">
          {/* Bio Makeover */}
          <article className="card-gold p-6 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-lg mb-1">
                ItsAI.Help Bio Makeover™
              </h2>
              <p className="text-slate-300 mb-3">
                A complete identity rewrite for creators. Communicates clarity,
                authority, and purpose.
              </p>
              <p className="text-2xl font-semibold mb-1">$25</p>
              <p className="text-xs text-slate-400 mb-3">One-time · 24h delivery</p>
              <ul className="space-y-1 text-slate-300">
                <li>• 3 optimized bio versions</li>
                <li>• CTA recommendations</li>
                <li>• Brand voice snapshot</li>
                <li>• Positioning summary</li>
              </ul>
            </div>
            <button className="mt-4 inline-flex justify-center px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-xs transition-colors">
              Order Now
            </button>
          </article>

          {/* Cashflow Email Kit */}
          <article className="card-gold p-6 flex flex-col justify-between">
            <div>
              <p className="text-xs text-indigo-300 font-semibold mb-1">
                Most Popular
              </p>
              <h2 className="font-semibold text-lg mb-1">
                ItsAI.Help Cashflow Email Kit™
              </h2>
              <p className="text-slate-300 mb-3">
                A powerful revenue-driven email system crafted for launches or
                nurturing.
              </p>
              <p className="text-2xl font-semibold mb-1">$97</p>
              <p className="text-xs text-slate-400 mb-3">Per kit · 48h delivery</p>
              <ul className="space-y-1 text-slate-300">
                <li>• 10 fully written emails</li>
                <li>• Curated subject lines</li>
                <li>• Recommended send schedule</li>
                <li>• Offer angle optimization</li>
              </ul>
            </div>
            <button className="mt-4 inline-flex justify-center px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-xs transition-colors">
              Order Now
            </button>
          </article>

          {/* 30-Day Content Board */}
          <article className="card-gold p-6 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-lg mb-1">
                ItsAI.Help 30-Day Content Board™
              </h2>
              <p className="text-slate-300 mb-3">
                A done-for-you monthly content plan to remain consistent without
                burning out.
              </p>
              <p className="text-2xl font-semibold mb-1">$149</p>
              <p className="text-xs text-slate-400 mb-3">Per month · 72h delivery</p>
              <ul className="space-y-1 text-slate-300">
                <li>• 30 personalized content ideas</li>
                <li>• 10 fully written scripts</li>
                <li>• 10 carousel/post outlines</li>
                <li>• Keyword cluster + posting guide</li>
              </ul>
            </div>
            <button className="mt-4 inline-flex justify-center px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-xs transition-colors">
              Order Now
            </button>
          </article>
        </section>

        {/* How it works */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-center">How it works</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="card-gold p-4 text-center">
              <h3 className="font-semibold mb-1">1. Order</h3>
              <p className="text-slate-300">
                Secure checkout via your preferred payment link.
              </p>
            </div>
            <div className="card-gold p-4 text-center">
              <h3 className="font-semibold mb-1">2. Intake</h3>
              <p className="text-slate-300">
                Fill out a short form so we can tune everything to your brand.
              </p>
            </div>
            <div className="card-gold p-4 text-center">
              <h3 className="font-semibold mb-1">3. Receive</h3>
              <p className="text-slate-300">
                Get polished assets in your inbox, ready to paste and publish.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DfyLab;