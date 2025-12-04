// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PromptVault from "./pages/PromptVault";
import DfyLab from "./pages/DfyLab";
import Assistants from "./pages/Assistants";
import Sprint5k from "./pages/Sprint5k";
import ContentReactorPack from "./pages/ContentReactorPack";
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
 *  - /prompt-vault          → Prompt Vault index
 *  - /prompt-vault/viral-content-pack → Product detail page
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
            <Route path="/prompt-vault" element={<PromptVault />} />
            <Route
              path="/prompt-vault/content-reactor"
              element={<ContentReactorPack />}
            />
            <Route path="/dfy-lab" element={<DfyLab />} />
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
