import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle, Download, Globe, Smartphone } from 'lucide-react';
import { Button } from '../components/UI';

const Welcome: React.FC = () => {
  useEffect(() => {
    document.title = "Welcome | ItsAI.Help - Access Granted";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Welcome to ItsAI Core Founders Edition. Your are now active.');
    }
  }, []);

  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Success Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-400 mb-8">
            <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-sm font-medium text-green-400">Payment Confirmed - Access Granted</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-50 tracking-tight mb-6">
            Welcome to A New You
          </h1>

          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Congratulations! You're now part of the ItsAI Core Founders Edition. 
            Your journey begins here.
          </p>

          {/* Product Details Card */}
          <div className="bg-slate-900/50 border border-yellow-400/30 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-yellow-400 mr-2" />
              <h2 className="text-2xl font-bold text-yellow-400">ItsAI Core Founders Edition</h2>
            </div>
            
            <div className="text-3xl font-bold text-slate-50 mb-4">
              Lifetime System Access
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center justify-center">
                <Globe className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-slate-300">9 Domains</span>
              </div>
              <div className="flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-slate-300">14 PWAs</span>
              </div>
              <div className="flex items-center justify-center">
                <Download className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-slate-300">Downloadable</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              14 Downloadable Progressive Web Applications with advanced marketing specializations 
              built to bring you your first dollar online or your second million. These PWAs can 
              live on your phone's homescreen when you need them or on your home computer screen 
              when you don't.
            </p>
          </div>

          {/* Getting Started */}
          <div className="bg-slate-900/30 border border-slate-700 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-50 mb-4">What Happens Next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</div>
                <p className="text-slate-300 text-sm">Check your email for your access credentials and download links</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</div>
                <p className="text-slate-300 text-sm">Download and install your 14 Progressive Web Applications</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</div>
                <p className="text-slate-300 text-sm">Set up your domains and start building your first income stream</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">4</div>
                <p className="text-slate-300 text-sm">Join our community of founders and scale toward your first million</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Link to="/">
              <button className="btn-reflection-gold">
                Access Your Dashboard
              </button>
            </Link>
            <Link to="/">
              <button className="btn-reflection-outline">
                Browse Resources
              </button>
            </Link>
          </div>

          {/* Bottom Message */}
          <div className="mt-12 text-center">
            <p className="text-yellow-400 font-semibold text-lg">
              An interstate highway for a roadmap. Get in early, cause you are not going to want to miss this.
            </p>
            <p className="text-slate-400 text-sm mt-2">
              Welcome to your new beginning.
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
