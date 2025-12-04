// src/pages/Sprint5k.tsx
import React from "react";

const Sprint5k: React.FC = () => {
  const handleJoinSprint = () => {
    // TODO: replace with real checkout URL for the Sprint
    // e.g. window.location.href = "https://your-checkout-link/sprint";
    alert("Connect this button to your 5K Sprint checkout URL.");
  };

  const handleViewPromptingCourse = () => {
    // Takes user to the Foundations course page
    window.location.href = "/prompting-course";
  };

  return (
    <main className="bg-slate-950 text-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        {/* HERO */}
        <section className="text-center space-y-4 mb-32">
          <p className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-transparent text-yellow-400 border border-yellow-400">
            Beginner-Friendly · Closing Soon
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">
            The ItsAI.Help 5K Sprint™
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A guided beginner-to-expert transformation program. Create, launch,
            and scale your first digital income stream using AI in 30 days—without
            getting lost in tech.
          </p>
          <p className="text-xs text-slate-400 mt-4 mb-12">
            Less than $10/day for 30 days of focused execution.
          </p>
          <button
            onClick={handleJoinSprint}
            className="btn-reflection"
          >
            Join the 5K Sprint – $297
          </button>
        </section>

        {/* WHY PEOPLE FAIL */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-center">
            Most people fail at AI side hustles because…
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card-gold p-4 text-sm">
              <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-yellow-400 text-slate-900 text-xs font-bold mr-2">
                1
              </span>
              Trying to learn Midjourney, Claude, GPTs, and every tool at once.
            </div>
            <div className="card-gold p-4 text-sm">
              <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-yellow-400 text-slate-900 text-xs font-bold mr-2">
                2
              </span>
              Generating cool ideas instead of offers. Selling is avoidable, so they
              never ship.
            </div>
            <div className="card-gold p-4 text-sm">
              <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-yellow-400 text-slate-900 text-xs font-bold mr-2">
                3
              </span>
              Without a roadmap and real constraints, the first obstacle becomes the
              end of the road.
            </div>
          </div>
        </section>

        {/* WHAT'S INSIDE – WEEKS */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-center">
            What&apos;s Inside The Sprint
          </h2>
          <p className="text-center text-slate-300">
            30-day starter program. One goal: help you build something that can
            realistically earn your first $1k–$5k online.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="card-gold p-5 text-sm">
              <h3 className="font-semibold text-lg mb-2">Week 1 – Build Your First Money Machine</h3>
              <ul className="space-y-1 text-slate-300">
                <li>• Pick your lane: prompt packs, DFY services, or AI assistants.</li>
                <li>• Build a simple, validated offer using ItsAI.Help frameworks.</li>
                <li>• Set up a no-friction checkout link.</li>
                <li>• Create a quick offer page that doesn&apos;t need a designer.</li>
                <li>• Publish your first "value proof" post.</li>
              </ul>
            </div>

            <div className="card-gold p-5 text-sm">
              <h3 className="font-semibold text-lg mb-2">Week 2 – Traffic That Converts</h3>
              <ul className="space-y-1 text-slate-300">
                <li>• Story-based posts that attract your exact people.</li>
                <li>• Short-form videos scripted with the Content Reactor Pack.</li>
                <li>• Comment-to-DM scripts that start real conversations.</li>
                <li>• Lead magnet + follow-up sequence using the Sales Engine Pack.</li>
                <li>• Optional: first AI assistant for credibility.</li>
              </ul>
            </div>

            <div className="card-gold p-5 text-sm">
              <h3 className="font-semibold text-lg mb-2">Week 3 – Start Making Sales</h3>
              <ul className="space-y-1 text-slate-300">
                <li>• $0 → $500 warm outreach plan.</li>
                <li>• "Help 10 people today" method for instant trust.</li>
                <li>• Turn one prompt pack into a $29 intro product.</li>
                <li>• Start selling your DFY offers for real money.</li>
                <li>• Collect testimonials and proof.</li>
              </ul>
            </div>

            <div className="card-gold p-5 text-sm">
              <h3 className="font-semibold text-lg mb-2">Week 4 – Scale Toward $5k</h3>
              <ul className="space-y-1 text-slate-300">
                <li>• Add a second offer that stacks on the first.</li>
                <li>• Add a simple upsell to increase order value.</li>
                <li>• Launch a basic referral system.</li>
                <li>• Automate repeatable work with assistants + prompts.</li>
                <li>• 5-day content push and "next 30 days" plan.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PRICING + BUNDLE LOGIC */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-center">
            Choose how you want to start
          </h2>
          <p className="text-center text-slate-300 max-w-2xl mx-auto">
            You can buy everything individually. But if you grab the Sprint and the
            AI Prompting Foundations course together, you unlock the Lifetime Pack
            for free.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Sprint card */}
            <div className="card-gold p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-1">ItsAI.Help 5K Sprint™</h3>
                <p className="text-slate-300 text-sm mb-3">
                  30 days of guided implementation to build and launch your first
                  AI-powered income stream.
                </p>
                <p className="text-3xl font-semibold mb-1">$297</p>
                <p className="text-xs text-slate-400 mb-3">One-time payment · Lifetime access to materials</p>
                <ul className="text-sm text-slate-300 space-y-1 mb-4">
                  <li>• Full 4-week roadmap</li>
                  <li>• Offer, traffic, and sales frameworks</li>
                  <li>• Video lessons + templates</li>
                  <li>• Private community access</li>
                  <li>• Weekly live Q&amp;A / office hours</li>
                </ul>
              </div>
              <button
                onClick={handleJoinSprint}
                className="mt-2 inline-flex justify-center px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm transition-colors"
              >
                Join the 5K Sprint – $297
              </button>
            </div>

            {/* Foundations card */}
            <div className="card-gold p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-1">AI Prompting Foundations</h3>
                <p className="text-slate-300 text-sm mb-3">
                  Learn how to actually think, design, and build with AI so your
                  prompts stop feeling like guesses.
                </p>
                <p className="text-3xl font-semibold mb-1">$97</p>
                <p className="text-xs text-slate-400 mb-3">One-time payment · Course + templates</p>
                <ul className="text-sm text-slate-300 space-y-1 mb-4">
                  <li>• Prompting mental models</li>
                  <li>• Persona &amp; role prompts</li>
                  <li>• Context &amp; output control frameworks</li>
                  <li>• Chain-of-thought &amp; tree-of-thought patterns</li>
                  <li>• Reusable Prompt OS template</li>
                </ul>
              </div>
              <button
                onClick={handleViewPromptingCourse}
                className="mt-2 inline-flex justify-center px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-sm transition-colors"
              >
                View the $97 Foundations Course
              </button>
            </div>
          </div>

          {/* Lifetime Pack explanation */}
          <div className="card-gold p-6 text-sm text-slate-200">
            <h3 className="font-semibold text-lg mb-2">
              Lifetime Pack – Free when you own both
            </h3>
            <p className="text-slate-300 mb-2">
              You can buy the Sprint and the Foundations course separately. But
              once you own both, you unlock the ItsAI.Help Lifetime Pack at no
              extra cost.
            </p>
            <ul className="space-y-1 text-slate-300">
              <li>• All 4 prompt packs (including Content Reactor)</li>
              <li>• DFY Lab templates (bios, emails, content board)</li>
              <li>• ItsAI.Help Content Director™ assistant</li>
              <li>• ItsAI.Help Email Architect™ assistant</li>
              <li>• Lifetime updates to packs &amp; tools</li>
            </ul>
            <p className="text-xs text-slate-400 mt-3">
              You&apos;ll get an email with your Lifetime Pack access as soon as both
              purchases are confirmed.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Sprint5k;