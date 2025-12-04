// pages/ContentReactorPack.tsx
import React from "react";

/**
 * ItsAI.Help Content Reactor Pack™
 *
 * Product detail page for the first prompt pack.
 * - EXACT name + promise from your spec.
 * - No renamed product, no extra packs.
 *
 * NOTE:
 *  - Update `handleBuyClick` with your real checkout link.
 *  - Make sure the PDF lives at: /public/downloads/ItsAI_Help_Content_Reactor_Pack.pdf
 */

const ContentReactorPack: React.FC = () => {
    const handleBuyClick = () => {
        // TODO: Replace this with your real checkout URL (Stripe, LemonSqueezy, etc.)
        // Example:
        // window.location.href = "https://your-checkout-url-here";
        alert("Hook this button up to your real checkout URL.");
    };

    return (
        <main className="max-w-3xl mx-auto px-4 py-12">
            {/* Breadcrumb */}
            <p className="text-sm text-slate-400 mb-4">
                Prompt Vault /{" "}
                <span className="text-slate-100">
                    ItsAI.Help Content Reactor Pack™
                </span>
            </p>

            {/* Title + tagline */}
            <h1 className="text-3xl md:text-4xl font-bold text-slate-50 mb-2">
                ItsAI.Help Content Reactor Pack™
            </h1>
            <p className="text-slate-300 mb-6">
                A complete system for producing high-performing content across all major
                platforms. Perfect for creators, coaches, small business owners, and
                beginners who want to increase output without spending hours editing or
                planning.
            </p>

            {/* Price + CTA */}
            <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 mb-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <p className="text-xs font-semibold text-indigo-400 mb-1 uppercase tracking-wide">
                            Prompt Pack · PDF Download
                        </p>
                        <p className="text-3xl font-semibold text-slate-50">$9</p>
                        <p className="text-slate-400 text-sm mt-1">
                            One-time purchase. Lifetime access. Instant download.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 w-full md:w-auto">
                        <button
                            onClick={handleBuyClick}
                            className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold transition-colors"
                        >
                            Get Instant Access
                        </button>

                        {/* TEMP: direct download link for testing.
                Remove once checkout/fulfillment is wired. */}
                        <a
                            href="/downloads/ItsAI_Help_Content_Reactor_Pack.pdf"
                            className="text-xs text-slate-400 underline text-center"
                        >
                            Dev/Test: Download PDF directly
                        </a>
                    </div>
                </div>

                {/* Bullet summary matching your ORIGINAL includes */}
                <ul className="mt-6 space-y-2 text-slate-200 text-sm">
                    <li>• 30 complete short-form video script prompts</li>
                    <li>
                        • Hook generators with emotional, logical, and curiosity-based
                        variations
                    </li>
                    <li>
                        • Topic-to-content conversion prompts that turn ideas into polished
                        posts
                    </li>
                    <li>
                        • Daily content prompts to maintain consistency and visibility
                    </li>
                    <li>
                        • Style-shift prompts to adapt content to Shorts, TikTok, Reels, and
                        X
                    </li>
                </ul>
            </section>

            {/* What’s inside – mirrors the PDF sections */}
            <section className="space-y-6 text-slate-200 text-sm leading-relaxed">
                <div>
                    <h2 className="text-xl font-semibold text-slate-50 mb-2">
                        What you get inside
                    </h2>
                    <p className="text-slate-300">
                        This pack is designed to be your always-on content engine. Every
                        prompt is built so you can copy it into your AI, plug in your niche,
                        and get usable scripts, posts, and ideas in seconds.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-slate-50 mb-1">
                        ✅ 30 Short-Form Script Prompts
                    </h3>
                    <p className="text-slate-300">
                        Use these to generate TikTok, Reels, and Shorts scripts that stay
                        under 20–30 seconds, hit a clear point, and keep people watching.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-slate-50 mb-1">
                        ✅ Hook Generators (Emotional, Logical, Curiosity)
                    </h3>
                    <p className="text-slate-300">
                        Don&apos;t guess hooks. Generate 10–50 at a time tailored to your
                        niche and let the best ones float to the top.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-slate-50 mb-1">
                        ✅ Topic-to-Content Conversion Prompts
                    </h3>
                    <p className="text-slate-300">
                        Take messy notes, rants, or bullet points and convert them into
                        polished scripts, carousels, captions, and threads with one prompt.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-slate-50 mb-1">
                        ✅ Daily Content Prompts
                    </h3>
                    <p className="text-slate-300">
                        30+ repeatable daily prompts that keep you consistent without having
                        to stare at a blank screen wondering what to post.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-slate-50 mb-1">
                        ✅ Style-Shift Prompts
                    </h3>
                    <p className="text-slate-300">
                        Instantly adapt one idea into multiple formats and platforms—Shorts,
                        TikTok, Reels, X, and more—without reinventing the wheel each time.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default ContentReactorPack;
