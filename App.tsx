// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import PromptVault from "./pages/PromptVault";
import Assistants from "./pages/Assistants";
import Sprint5k from "./pages/Sprint5k";
import ContentReactorPack from "./pages/ContentReactorPack";
import Pack1 from "./pages/Pack1";
import Pack3 from "./pages/Pack3";
import PromptingCourse from "./pages/PromptingCourse";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

/**
 * App
 *
 * Main routing shell for ItsAI.Help
 * Routes:
 *  - /                      → Home
 *  - /welcome               → Welcome page for post-Stripe buyers
 *  - /prompt-vault          → Prompt Vault index
 *  - /prompt-vault/content-reactor → Content Reactor Pack
 *  - /prompt-vault/pack1    → Pack 1
 *  - /prompt-vault/pack3    → Pack 3
 *  - /dfy-lab               → Done-For-You Lab
 *  - /assistants            → AI Assistants
 *  - /5k-sprint             → 5K Sprint program page
 */

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/prompt-vault" element={<PromptVault />} />
            <Route
              path="/prompt-vault/content-reactor"
              element={<ContentReactorPack />}
            />
            <Route
              path="/prompt-vault/pack1"
              element={<Pack1 />}
            />
            <Route
              path="/prompt-vault/pack3"
              element={<Pack3 />}
            />
            <Route path="/assistants" element={<Assistants />} />
            <Route path="/5k-sprint" element={<Sprint5k />} />
            <Route path="/prompting-course" element={<PromptingCourse />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
