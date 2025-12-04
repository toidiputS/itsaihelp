import React from "react";

const PromptingCourse: React.FC = () => {
    const handleBuyCourse = () => {
        // TODO: replace with real checkout URL for the course
        // e.g. window.location.href = "https://your-checkout-link/foundations";
        alert("Connect this button to your AI Prompting Foundations checkout URL.");
    };

    const handleViewSprint = () => {
        window.location.href = "/5k-sprint";
    };

    return (
        <main className="bg-slate-950 text-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
                {/* HERO */}
                <section className="space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        AI Prompting Foundations
                    </h1>
                    <p className="text-slate-300 max-w-2xl">
                        A focused course that teaches you how to think like a prompt
                        architect. Build systems, not one-off messages. Stop guessing and
                        start directing AI with clarity.
                    </p>
                    <div className="card-gold p-6 max-w-md">
                        <p className="text-sm text-slate-400 mb-1">Standalone Course</p>
                        <p className="text-3xl font-semibold mb-1">$97</p>
                        <p className="text-xs text-slate-400 mb-3">One-time payment · Lifetime access</p>
                        <button
                            onClick={handleBuyCourse}
                            className="inline-flex justify-center w-full px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm transition-colors"
                        >
                            Get AI Prompting Foundations – $97
                        </button>
                    </div>
                </section>

                {/* WHAT YOU LEARN */}
                <section className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-semibold">
                        What you&apos;ll learn
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-200">
                        <div className="card-gold p-4">
                            <h3 className="font-semibold mb-1">Prompting as Programming</h3>
                            <p className="text-slate-300">
                                Treat prompts like code. Design repeatable, testable "Prompt
                                Programs" that produce consistent results instead of random hits.
                            </p>
                        </div>
                        <div className="card-gold p-4">
                            <h3 className="font-semibold mb-1">Persona &amp; Role Prompts</h3>
                            <p className="text-slate-300">
                                Build clear roles for your AI: strategist, copywriter, researcher,
                                editor, coach. Get expert-level answers with one instruction.
                            </p>
                        </div>
                        <div className="card-gold p-4">
                            <h3 className="font-semibold mb-1">Context &amp; Output Control</h3>
                            <p className="text-slate-300">
                                Feed AI the right context and constraints so hallucinations drop
                                and outputs stay inside your brand voice and format.
                            </p>
                        </div>
                        <div className="card-gold p-4">
                            <h3 className="font-semibold mb-1">Reasoning Patterns</h3>
                            <p className="text-slate-300">
                                Use chain-of-thought and tree-of-thought prompting to tackle
                                complex problems step-by-step instead of brute-forcing answers.
                            </p>
                        </div>
                        <div className="card-gold p-4">
                            <h3 className="font-semibold mb-1">Adversarial Prompting</h3>
                            <p className="text-slate-300">
                                Make the model challenge your ideas, find flaws, and surface risks
                                for high-stakes decisions and content.
                            </p>
                        </div>
                        <div className="card-gold p-4">
                            <h3 className="font-semibold mb-1">Your Prompt OS</h3>
                            <p className="text-slate-300">
                                Build a reusable Prompt OS you can plug into content, offers,
                                funnels, research, and product building.
                            </p>
                        </div>
                    </div>
                </section>

                {/* BUNDLE NOTE */}
                <section className="card-gold p-6 text-sm text-slate-200">
                    <h2 className="text-lg font-semibold mb-2">
                        Want the full system?
                    </h2>
                    <p className="text-slate-300 mb-2">
                        You can start with the Foundations course alone for $97. When you&apos;re
                        ready to execute, add the ItsAI.Help 5K Sprint™. Once you own both, you
                        unlock the ItsAI.Help Lifetime Pack for free:
                    </p>
                    <ul className="space-y-1 text-slate-300">
                        <li>• All 4 ItsAI.Help prompt packs</li>
                        <li>• DFY Lab templates (bios, emails, content board)</li>
                        <li>• ItsAI.Help Content Director™ assistant</li>
                        <li>• ItsAI.Help Email Architect™ assistant</li>
                        <li>• Lifetime updates to packs &amp; tools</li>
                    </ul>
                    <button
                        onClick={handleViewSprint}
                        className="mt-4 inline-flex justify-center px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-sm transition-colors"
                    >
                        View the 5K Sprint – $297
                    </button>
                </section>

                {/* DEV TEST LINK */}
                <section>
                    <a
                        href="/downloads/AI_Prompting_Foundations_Course.pdf"
                        className="text-xs text-slate-500 underline"
                    >
                        Dev/Test: Download course PDF
                    </a>
                </section>
            </div>
        </main>
    );
};

export default PromptingCourse;
