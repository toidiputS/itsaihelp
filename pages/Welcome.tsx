import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Welcome: React.FC = () => {
  useEffect(() => {
    document.title = "Welcome to ItsAI";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Welcome to ItsAI. You\'re in.');
    }
  }, []);

  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

          {/* Card Container */}
          <div className="card-gold p-8 md:p-12 max-w-2xl mx-auto">

            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-50 tracking-tight mb-6">
              Access granted.
            </h1>

            <p className="text-xl text-slate-300 mb-8">
              Enter the Oracle to explore all PWAs or get guided recommendations.
            </p>

            {/* Single CTA Button */}
            <div className="mb-8">
              <a href="https://oracle.itsai.help" target="_blank" rel="noopener noreferrer">
                <button className="btn-reflection-gold text-xl px-8 py-4">
                  Enter the Oracle →
                </button>
              </a>
            </div>

            {/* Micro-copy */}
            <p className="text-sm text-slate-500">
              Takes less than 2 minutes. No setup. No configuration.
            </p>

          </div>

        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
