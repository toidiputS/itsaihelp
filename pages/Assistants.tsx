import React from "react";
import { AgentIcon } from "../components/AgentIcon";

const Assistants: React.FC = () => {
  return (
    <main className="bg-slate-950 text-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
        {/* HERO */}
        <section className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold">ItsAI.Help Assistants</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Powerful, automated tools that help you operate like a full marketing
            team—without the overhead. Each assistant builds a complete plan,
            sequence, or system from your inputs.
          </p>
        </section>

        {/* ALL-ACCESS / LIFETIME PACK */}
        <section className="card-gold px-6 py-5 text-center">
          <p className="text-sm text-indigo-300 mb-1">
            All-Access Pass (included in Lifetime Pack)
          </p>
          <h2 className="text-xl font-semibold mb-2">
            Unlock every assistant with one pass.
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto mb-2">
            When you unlock the ItsAI.Help Lifetime Pack, you get access to all
            current assistants plus any future bots we add—no extra subscriptions.
          </p>
          <p className="text-xs text-slate-500">
            Lifetime Pack is unlocked automatically when you own both the 5K Sprint
            and AI Prompting Foundations.
          </p>
        </section>

        {/* ASSISTANT CARDS */}
        <section className="space-y-5">
          {/* Top Row: Featured Assistants - Gamma & Beta */}
          <div className="grid md:grid-cols-2 gap-5 text-sm">
            {/* Gamma – Content Director */}
            <article className="card-gold p-6">
              <div className="mb-3">
                <AgentIcon variant="contentDirector" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                ItsAI.Help Content Director™ (Agent Gamma)
              </h3>
              <p className="text-slate-300 mb-3">
                A complete content system that turns your niche and voice into
                multi-platform, SEO-ready content plans.
              </p>
              <ul className="text-slate-300 space-y-1 mb-3">
                <li>• 30-day multi-platform content strategy</li>
                <li>• Daily script, hook & caption generator</li>
                <li>• SEO keyword clusters & article outlines</li>
              </ul>
              <p className="text-xs text-slate-500">
                Included in the ItsAI.Help Lifetime Pack.
              </p>
            </article>

            {/* Beta – Email Architect */}
            <article className="card-gold p-6">
              <div className="mb-3">
                <AgentIcon variant="emailArchitect" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                ItsAI.Help Email Architect™ (Agent Beta)
              </h3>
              <p className="text-slate-300 mb-3">
                A powerful email engine that builds full nurture, launch, and
                long-term engagement sequences.
              </p>
              <ul className="text-slate-300 space-y-1 mb-3">
                <li>• 10-email nurture system</li>
                <li>• 7-email launch sequence</li>
                <li>• 90-day engagement follow-up map</li>
              </ul>
              <p className="text-xs text-slate-500">
                Included in the ItsAI.Help Lifetime Pack.
              </p>
            </article>
          </div>

          {/* Bottom Row: Additional Assistants - Alpha, Delta, Epsilon */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-sm">
            {/* Alpha – Product Page Architect */}
            <article className="card-gold p-6">
              <div className="mb-3">
                <AgentIcon variant="productPage" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                ItsAI.Help Product Page Architect™ (Agent Alpha)
              </h3>
              <p className="text-slate-300 mb-3">
                A sales page system that generates complete product page frameworks
                for your offers.
              </p>
              <ul className="text-slate-300 space-y-1 mb-3">
                <li>• Full-page section-by-section blueprint</li>
                <li>• Feature → benefit conversion engine</li>
                <li>• CTA, urgency & objection prompts</li>
              </ul>
              <p className="text-xs text-slate-500">
                Included in the ItsAI.Help Lifetime Pack.
              </p>
            </article>

            {/* Delta – Customer Response Architect */}
            <article className="card-gold p-6">
              <div className="mb-3">
                <AgentIcon variant="customerResponse" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                ItsAI.Help Customer Response Architect™ (Agent Delta)
              </h3>
              <p className="text-slate-300 mb-3">
                A customer communication system that builds a fully branded reply
                library for support, sales, and retention.
              </p>
              <ul className="text-slate-300 space-y-1 mb-3">
                <li>• 50-message tone-matched reply library</li>
                <li>• Support & sales response templates</li>
                <li>• Refund, escalation & win-back flows</li>
              </ul>
              <p className="text-xs text-slate-500">
                Included in the ItsAI.Help Lifetime Pack.
              </p>
            </article>

            {/* Epsilon – Market Insights Architect */}
            <article className="card-gold p-6">
              <div className="mb-3">
                <AgentIcon variant="marketInsights" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                ItsAI.Help Market Insights Architect™ (Agent Epsilon)
              </h3>
              <p className="text-slate-300 mb-3">
                A market insights system that turns data into daily prompt sets for
                trends, narratives, and decision-making.
              </p>
              <ul className="text-slate-300 space-y-1 mb-3">
                <li>• Daily trend breakdown prompt sets</li>
                <li>• High-signal narrative & content prompts</li>
                <li>• Weekly recap & insight scripts</li>
              </ul>
              <p className="text-xs text-slate-500">
                Included in the ItsAI.Help Lifetime Pack.
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Assistants;