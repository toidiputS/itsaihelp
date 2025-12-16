import React from 'react';
import { Twitter, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="ItsAI.Help logo" className="w-8 h-8" />
              <span className="text-lg font-bold text-white tracking-tight">ItsAI.Help</span>
            </div>
            <p className="text-sm text-slate-400">
              Making AI simple, profitable, and accessible for everyone.
            </p>
          </div>

          <div>
            <ul className="space-y-2 text-sm">
            
            </ul>
          </div>

          <div>
            <ul className="space-y-2 text-sm">
              <li><span className="cursor-pointer hover:text-white">Privacy Policy</span></li>
              <li><span className="cursor-pointer hover:text-white">Terms of Service</span></li>
              <li><span className="cursor-pointer hover:text-white">Earnings Disclaimer</span></li>
            </ul>
          </div>

          <div>
            <div className="flex space-x-4">
              <a href="#" title="Visit our Twitter" className="hover:text-brand-400"><Twitter className="w-5 h-5" /></a>
              <a href="#" title="Visit our YouTube channel" className="hover:text-brand-400"><Youtube className="w-5 h-5" /></a>
              <a href="#" title="Send us an email" className="hover:text-brand-400"><Mail className="w-5 h-5" /></a>
            </div>
            <p className="mt-4 text-xs text-slate-500">© 2024 ItsAI.Help. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
