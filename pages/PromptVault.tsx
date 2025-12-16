// pages/PromptVault.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/UI";

/**
 * PromptVault
 *
 * Shows the 5 ItsAI.Help prompt packs:
 *  - The $0 → $1K Blueprint
 *  - Content Reactor
 *  - Conversion Scripts Vault
 *  - The Resolution Prompting Handbook
 *  - Viral Offer Lab
 *
 * All packs are live at $39.
 */

const PromptVault: React.FC = () => {
  const stripePaymentLink = "https://buy.stripe.com/3cI4gB5MN7Ibakb2L61VK00";

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-50 mb-2">
        ItsAI.Help Prompt Vault
      </h1>
      <p className="text-slate-300 mb-4 max-w-2xl">
        Beginner-friendly, high-impact prompt packs designed to help you launch faster.
      </p>
      <p className="text-sm text-slate-400 mb-4 italic">
        Normally $99 each - Happy Holidays - These are not PDFs. They are weapons.
      </p>
      <p className="text-slate-300 mb-8 max-w-2xl">
        Copy, paste, customize, and let AI handle the heavy lifting.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* PACK 1 */}
        <Card className="card-gold h-full p-8">
          <h3 className="font-bold text-xl mb-2 text-yellow-400">PACK 1</h3>
          <h4 className="font-semibold text-lg mb-4">The $0 → $1K Blueprint</h4>
          <p className="text-sm text-slate-400 mb-4 italic">(This is the pack you pray exists somewhere. Merry Christmas.)</p>
          <p className="text-sm text-slate-400 mb-4">"The First Money Machine."</p>

          <div className="space-y-2 text-sm text-slate-300 mb-6">
            <p>What's inside:</p>
            <ul className="space-y-1 text-xs">
              <li>• 30 days of tasks (no fluff — prompts + execution)</li>
              <li>• 10 plug-and-play offers ANYONE can sell</li>
              <li>• 25 proven AI workflows that replace 5 contractors</li>
              <li>• 10 short-form scripts for instant authority</li>
              <li>• 20 social posts engineered for visibility</li>
              <li>• 10 DM scripts (with the psychology explained)</li>
              <li>• 7 sales angles you can reuse forever</li>
              <li>• 1 "Launch in a day" workflow</li>
              <li>• 1 "Sell without selling" messaging system</li>
            </ul>
          </div>

          <div>
            <p className="text-slate-100 font-semibold text-lg">$39</p>
            <a
              href={stripePaymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-semibold transition-colors"
            >
              Purchase Now
            </a>
          </div>
        </Card>

        {/* PACK 2 */}
        <Card className="card-gold h-full p-8">
          <h3 className="font-bold text-xl mb-2 text-yellow-400">PACK 2</h3>
          <h4 className="font-semibold text-lg mb-4">Content Reactor</h4>
          <p className="text-sm text-slate-400 mb-4 italic">(Content = Attention = Income. Stop freezing. Maintain consistency with this and you will find your audience.)</p>
          <p className="text-sm text-slate-400 mb-4">"The Attention Engine."</p>

          <div className="space-y-2 text-sm text-slate-300 mb-6">
            <p>What's inside:</p>
            <ul className="space-y-1 text-xs">
              <li>• 90 prompts: viral threads, reels, shorts, carousels</li>
              <li>• 12 content structures that ALWAYS perform</li>
              <li>• 30-day done-for-you content calendar</li>
              <li>• 50 hooks engineered for scroll-stop</li>
              <li>• The "Gamma method" simplified for beginners</li>
              <li>• 10 CTA templates that don't feel salesy</li>
              <li>• 1 "instantly become a creator" crash system</li>
            </ul>
          </div>

          <div>
            <p className="text-slate-100 font-semibold text-lg">$39</p>
            <a
              href={stripePaymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-semibold transition-colors"
            >
              Purchase Now
            </a>
          </div>
        </Card>

        {/* PACK 3 */}
        <Card className="card-gold h-full p-8">
          <h3 className="font-bold text-xl mb-2 text-yellow-400">PACK 3</h3>
          <h4 className="font-semibold text-lg mb-4">Conversion Scripts Vault</h4>
          <p className="text-sm text-slate-400 mb-4 italic">(Most people SUCK at writing. I might cause this is straight out of my personal vault. No shame in conversion.)</p>
          <p className="text-sm text-slate-400 mb-4">"Say Exactly The Right Thing — Every Time."</p>

          <div className="space-y-2 text-sm text-slate-300 mb-6">
            <p>What's inside:</p>
            <ul className="space-y-1 text-xs">
              <li>• 20 sales email templates</li>
              <li>• 20 landing page templates</li>
              <li>• 15 value ladder frameworks</li>
              <li>• 5 done-for-you offer stacks</li>
              <li>• 10 "explain your product" clarity scripts</li>
              <li>• 10 scarcity sequences</li>
              <li>• 10 rebuttal templates so good they feel illegal</li>
              <li>• Delta-style plug-and-play flows</li>
            </ul>
          </div>

          <div>
            <p className="text-slate-100 font-semibold text-lg">$39</p>
            <a
              href={stripePaymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-semibold transition-colors"
            >
              Purchase Now
            </a>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* PACK 4 */}
        <Card className="card-gold h-full p-8">
          <h3 className="font-bold text-xl mb-2 text-yellow-400">PACK 4</h3>
          <h4 className="font-semibold text-lg mb-4">The Resolution Prompting Handbook</h4>
          <p className="text-sm text-slate-400 mb-4 italic">(Change Your Life with 100 Prompts.)</p>
          <p className="text-slate-300 mb-4">"These will change more than just your life."</p>

          <div className="space-y-2 text-sm text-slate-300 mb-6">
            <p>What's inside:</p>
            <ul className="space-y-1 text-xs">
              <li>• 100 life-changing prompts for personal transformation</li>
              <li>• Goal-setting and achievement frameworks</li>
              <li>• Mindset shifting techniques</li>
              <li>• Productivity and focus enhancers</li>
              <li>• Relationship and communication scripts</li>
              <li>• Career and business growth prompts</li>
              <li>• Health and wellness transformations</li>
              <li>• Daily habit-building systems</li>
            </ul>
          </div>

          <div>
            <p className="text-slate-100 font-semibold text-lg">$39</p>
            <a
              href={stripePaymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-semibold transition-colors"
            >
              Purchase Now
            </a>
          </div>
        </Card>

        {/* PACK 5 */}
        <Card className="card-gold h-full p-8">
          <h3 className="font-bold text-xl mb-2 text-yellow-400">PACK 5</h3>
          <h4 className="font-semibold text-lg mb-4">Viral Offer Lab</h4>
          <p className="text-sm text-slate-400 mb-4 italic">(Turn Any Idea into a Sellable Offer in 10 Minutes.)</p>
          <p className="text-slate-300 mb-4">"How FAST can you build a micro-offer. Create better content with pro-level results."</p>

          <div className="space-y-2 text-sm text-slate-300 mb-6">
            <p>What's inside:</p>
            <ul className="space-y-1 text-xs">
              <li>• 50 proven offer templates</li>
              <li>• Pricing psychology frameworks</li>
              <li>• Market validation scripts</li>
              <li>• Value proposition builders</li>
              <li>• Launch sequence templates</li>
              <li>• Customer objection handlers</li>
              <li>• Upsell and cross-sell systems</li>
              <li>• Viral marketing hooks</li>
            </ul>
          </div>

          <div>
            <p className="text-slate-100 font-semibold text-lg">$39</p>
            <a
              href={stripePaymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-semibold transition-colors"
            >
              Purchase Now
            </a>
          </div>
        </Card>
      </div>
    </main>
  );
};

export default PromptVault;
