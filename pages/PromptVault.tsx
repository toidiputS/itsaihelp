// pages/PromptVault.tsx
import React from "react";
import { Link } from "react-router-dom";

/**
 * PromptVault
 *
 * Shows the 4 core ItsAI.Help prompt packs:
 *  - Content Reactor Pack™
 *  - Sales Engine Pack™
 *  - Brand Blueprint Pack™
 *  - Side Hustle Kickstart Pack™
 *
 * Only the Content Reactor Pack needs to be live right now;
 * the others can point to "Coming Soon" or placeholder routes until built.
 */

const PromptVault: React.FC = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-50 mb-2">
        ItsAI.Help Prompt Vault
      </h1>
      <p className="text-slate-300 mb-8 max-w-2xl">
        Beginner-friendly, high-impact prompt packs designed to help you launch
        faster. Copy, paste, customize, and let AI handle the heavy lifting.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {/* 1. Content Reactor Pack */}
        <article className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
          <div className="mb-4">
            <p className="text-xs font-semibold text-indigo-400 mb-1 uppercase tracking-wide">
              Starter · Live
            </p>
            <h2 className="text-lg font-semibold text-slate-50 mb-1">
              ItsAI.Help Content Reactor Pack™
            </h2>
            <p className="text-sm text-slate-300">
              A complete system for producing high-performing content across all
              major platforms—without spending hours planning every post.
            </p>
          </div>

          <div className="flex items-center justify-between mt-2">
            <div>
              <p className="text-slate-100 font-semibold text-lg">$9</p>
              <p className="text-xs text-slate-500">PDF · Instant Download</p>
            </div>
            <Link
              to="/prompt-vault/content-reactor"
              className="inline-flex items-center px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-semibold transition-colors"
            >
              View Details
            </Link>
          </div>
        </article>

        {/* 2. Sales Engine Pack */}
        <article className="bg-slate-900/40 border border-slate-800/70 rounded-2xl p-5 flex flex-col justify-between">
          <div className="mb-4">
            <p className="text-xs font-semibold text-amber-400 mb-1 uppercase tracking-wide">
              Coming Soon
            </p>
            <h2 className="text-lg font-semibold text-slate-50 mb-1">
              ItsAI.Help Sales Engine Pack™
            </h2>
            <p className="text-sm text-slate-300">
              Turn your AI into a predictable sales generator. Focused on
              conversion psychology, persuasion frameworks, and marketing
              automation prompts.
            </p>
            <ul className="mt-2 text-xs text-slate-400 space-y-1">
              <li>• 10-email nurture sequences</li>
              <li>• Launch & promotion sequences</li>
              <li>• Offer-builder & lead magnet prompts</li>
              <li>• Follow-up & re-engagement prompts</li>
            </ul>
          </div>
          <div className="flex items-center justify-between mt-2 opacity-70">
            <div>
              <p className="text-slate-100 font-semibold text-lg">$29</p>
              <p className="text-xs text-slate-500">Planned</p>
            </div>
            <button
              disabled
              className="inline-flex items-center px-4 py-2 rounded-xl bg-slate-800 text-slate-500 text-sm font-semibold cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>
        </article>

        {/* 3. Brand Blueprint Pack */}
        <article className="bg-slate-900/40 border border-slate-800/70 rounded-2xl p-5 flex flex-col justify-between">
          <div className="mb-4">
            <p className="text-xs font-semibold text-amber-400 mb-1 uppercase tracking-wide">
              Coming Soon
            </p>
            <h2 className="text-lg font-semibold text-slate-50 mb-1">
              ItsAI.Help Brand Blueprint Pack™
            </h2>
            <p className="text-sm text-slate-300">
              A powerful identity-building toolkit for new creators,
              entrepreneurs, or businesses needing clarity and consistency.
            </p>
            <ul className="mt-2 text-xs text-slate-400 space-y-1">
              <li>• Platform-specific bio prompts</li>
              <li>• Brand voice generator</li>
              <li>• Taglines, slogans, positioning</li>
              <li>• Aesthetic & messaging frameworks</li>
            </ul>
          </div>
          <div className="flex items-center justify-between mt-2 opacity-70">
            <div>
              <p className="text-slate-100 font-semibold text-lg">$29</p>
              <p className="text-xs text-slate-500">Planned</p>
            </div>
            <button
              disabled
              className="inline-flex items-center px-4 py-2 rounded-xl bg-slate-800 text-slate-500 text-sm font-semibold cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>
        </article>

        {/* 4. Side Hustle Kickstart Pack */}
        <article className="bg-slate-900/40 border border-slate-800/70 rounded-2xl p-5 flex flex-col justify-between">
          <div className="mb-4">
            <p className="text-xs font-semibold text-amber-400 mb-1 uppercase tracking-wide">
              Coming Soon
            </p>
            <h2 className="text-lg font-semibold text-slate-50 mb-1">
              ItsAI.Help Side Hustle Kickstart Pack™
            </h2>
            <p className="text-sm text-slate-300">
              Perfect for total beginners looking to launch a new income stream
              fast, with step-by-step guided prompts.
            </p>
            <ul className="mt-2 text-xs text-slate-400 space-y-1">
              <li>• Niche selection prompts</li>
              <li>• Service creation & offer prompts</li>
              <li>• Pricing formulas for all tiers</li>
              <li>• Warm DM & “start today” scripts</li>
            </ul>
          </div>
          <div className="flex items-center justify-between mt-2 opacity-70">
            <div>
              <p className="text-slate-100 font-semibold text-lg">$29</p>
              <p className="text-xs text-slate-500">Planned</p>
            </div>
            <button
              disabled
              className="inline-flex items-center px-4 py-2 rounded-xl bg-slate-800 text-slate-500 text-sm font-semibold cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>
        </article>
      </div>
    </main>
  );
};

export default PromptVault;
