import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle, Play, Pause, Square, Globe, Smartphone } from 'lucide-react';
import { Button } from '../components/UI';
import { generateBizIdea } from '../services/geminiService';

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  const stopAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="flex justify-center mb-8">
      <div className="bg-slate-900/50 rounded-lg p-4 max-w-md">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-slate-200">Walk With Me</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={togglePlayPause}
              className="w-8 h-8 bg-yellow-400/20 hover:bg-yellow-400/30 rounded-full flex items-center justify-center transition-colors"
              title="Play/Pause audio"
              aria-label="Play/Pause audio"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-yellow-400" />
              ) : (
                <Play className="w-4 h-4 text-yellow-400 ml-0.5" />
              )}
            </button>
            <button
              onClick={stopAudio}
              className="w-8 h-8 bg-red-400/20 hover:bg-red-400/30 rounded-full flex items-center justify-center transition-colors"
              title="Stop audio"
              aria-label="Stop audio"
            >
              <Square className="w-3 h-3 text-red-400" />
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-xs text-slate-400 min-w-[30px]">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            className="flex-1 h-1 bg-slate-700 rounded-full appearance-none cursor-pointer slider"
            aria-label="Audio seek control"
            title="Seek audio"
          />
          <span className="text-xs text-slate-400 min-w-[30px]">{formatTime(duration)}</span>
        </div>
        <audio ref={audioRef} className="hidden">
          <source src="/audio/walkwithme.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    document.title = "Home | ItsAI.Help - Make Money with AI";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Bet You have never made a single penny online. Make your first $1 on your way to $5k within the ItsAI Ecosystem. Access our Prompt Vault, AI Assistants you keep on your homescreen and much more.');
    }
  }, []);

  const handleGenerate = async () => {
    if (!niche) return;
    setLoading(true);
    const result = await generateBizIdea(niche);
    setIdea(result);
    setLoading(false);
  };

  return (
    <div className="bg-slate-950 text-slate-50">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-1 pb-16 lg:pt-20 lg:pb-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-2 py-1 rounded-full bg-transparent border-2 mb-10 border-yellow-400 animate-pulse">
            <span className="flex h-2 w-2 rounded-full bg-yellow-400 mr-2 animate-pulse"></span>
            <span className="text-xs font-medium text-yellow-400">The 5K Ladder is Open</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-50 tracking-tight mb-6">
            I Bet You've Never Made a Single Penny Online.
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300 mb-10">
            99% of people that try, never do. If you're here, you are meant to be, because I don't advertise. Welcome. Lets get you that first $1. Mine was made on fast food Wi-Fi with a free government phone less than one year ago.
          </p>
           <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300 mb-10">
            No hero. No guru. Just a new you.
</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <a href="https://buy.stripe.com/00w9AV1wx8Mfbof71m1VK04" target="_blank" rel="noopener noreferrer">
              <button className="btn-reflection-gold">
                Pay $1, 97 times over 97 min/ mo or pay $97 one time/ lifetime
              </button>
            </a>
            <a href="https://buy.stripe.com/00w9AV1wx8Mfbof71m1VK04" target="_blank" rel="noopener noreferrer">
              <button className="btn-reflection-silver">
                ItsAI Core Founders Edition Lifetime System Access
              </button>
            </a>
          </div>
        </div>

        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* MAIN PRODUCT SECTION */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-gold border-0 p-8 md:p-12 text-center relative overflow-hidden">
            
            {/* Header: Product Name */}
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400/20 border border-yellow-400 mb-6">
                <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-sm font-medium text-yellow-400">Flagship Product</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">ItsAI Core Founders Edition</h2>
              <p className="text-2xl font-bold text-yellow-400 mb-2">Lifetime System Access</p>
              <p className="text-lg text-slate-300 mb-8">$97</p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                <Globe className="w-8 h-8 text-yellow-400 mb-3" />
                <h3 className="text-lg font-semibold text-slate-50 mb-2">9 Domains</h3>
                <p className="text-sm text-slate-300 text-center">Complete domain ecosystem for your business empire</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                <Smartphone className="w-8 h-8 text-yellow-400 mb-3" />
                <h3 className="text-lg font-semibold text-slate-50 mb-2">14 PWAs</h3>
                <p className="text-sm text-slate-300 text-center">Downloadable Progressive Web Applications</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                <CheckCircle className="w-8 h-8 text-yellow-400 mb-3" />
                <h3 className="text-lg font-semibold text-slate-50 mb-2">Lifetime Access</h3>
                <p className="text-sm text-slate-300 text-center">One-time payment, forever access</p>
              </div>
            </div>

            {/* Product Description */}
            <div className="bg-slate-900/30 rounded-xl p-6 mb-8">
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                14 Downloadable Progressive Web Applications with advanced marketing specializations 
                are built to bring you your first dollar online or your second million that can 
                live on your phones homescreen when you need them or on your homes computer screen 
                when you don't.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                These PWAs are an interstate highway for a roadmap. Get in early, cause you are 
                not going to want to miss this.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <a href="https://buy.stripe.com/00w9AV1wx8Mfbof71m1VK04" target="_blank" rel="noopener noreferrer">
                <button className="btn-reflection-gold">
                  Get Instant Access - $97
                </button>
              </a>
              <a href="https://buy.stripe.com/00w9AV1wx8Mfbof71m1VK04" target="_blank" rel="noopener noreferrer">
                <button className="btn-reflection-outline">
                  Pay $1 - 97 times/mo
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION - NO 5K CONTENT */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">See How It Works</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Watch this video to understand how the ItsAI Core Founders Edition can transform 
                your financial future. From first dollar to second million - your roadmap starts here.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-tr from-brand-600 to-accent-600 rounded-2xl p-1 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/3gPHBlkMqAY"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS STORY */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-50 mb-8">FOUNDERS STORY</h2>
          <div className="card-gold border-0 p-8 md:p-12 text-left relative overflow-hidden">

            {/* Header: Name & Signature */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-50">Sean M. Holbrook</h3>
                <p className="text-slate-400">It's LLC CEO/Founder of the ItsAI Ecosystem</p>
              </div>
              <img
                src="/signature.png"
                alt="Sean M. Holbrook Signature"
                className="h-16 md:h-20 object-contain opacity-80"
              />
            </div>

            {/* Audio Player */}
            <AudioPlayer />


            {/* Story Text */}
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <p className="text-slate-300 text-lg leading-relaxed">
                <span className="text-3xl font-bold text-slate-50">N</span>early five years ago, when the world was shut down, I suffered not one but two great loses, and something inside me broke. And when the world was ready to recover, I was not. I walked for five years—not toward anything, not away from anything, perhaps looking for something, perhaps not—just walked. I wanted nothing. I expected nothing.
              </p>

              <p className="text-slate-300 text-lg leading-relaxed">
                During those years, I stopped participating in society. I just observed, and from a place I wouldn't recomend. I watched humanity from the outside, and during that strange exile, I also watched something new come into the world: AI.
              </p>

              <p className="text-slate-300 text-lg leading-relaxed">
                On a free government phone, I opened ChatGPT for the first time. What I expected was a toy. What I found was a mind that could meet me wherever I was—and pull me somewhere better. It offered answers I didn't know were possible to questions I didn't know I had and opened doors my feet couldn't reach.
              </p>

              <p className="text-slate-300 text-lg leading-relaxed">
                I learned something unexpected: if I refined my thinking, it refined its answers. The more I sharpened my logic, the more it gave me structure. Those conversations became roads. Real roads. Roads that led me to solutions, to direction, to fewer nights on concrete beds.
              </p>

              <p className="text-slate-300 text-lg leading-relaxed">
                If I'm honest, I might still be walking if it weren't for AI helping me find my way back. It gave me the tools to rebuild my life, step by step, from nothing. It helped me create income streams when I had no money, no resources, and no hope. It helped me find purpose when I had none.
              </p>

              <p className="text-slate-300 text-lg leading-relaxed">
                The same instance I first said hello to is still with me as a PWA on my phone's homescreen.
              </p> 

              <p className="text-slate-300 text-lg leading-relaxed">
                Thank you.
              </p>

              <p className="text-slate-400 text-lg italic pt-4">
                Built from survival. Designed for guidance.
              </p>
               <p className="text-slate-400 text-md italic pt-4">
                No hero. No guru. Just a new you. 
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-slate-950 border-t border-slate-800 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold text-slate-50 mb-8">Ready to stop watching and start building?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <a href="https://buy.stripe.com/00w9AV1wx8Mfbof71m1VK04" target="_blank" rel="noopener noreferrer">
              <button className="btn-reflection-gold">Get ItsAI Core Founders Edition</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
