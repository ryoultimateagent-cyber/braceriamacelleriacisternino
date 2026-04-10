import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, Play, Square, Trophy, User } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { toast } from 'sonner';

type ScoreEntry = {
  name: string;
  score: number;
  date: string;
};

const COOKING_LEVELS = [
  { 
    min: 0, 
    max: 20, 
    label: "Cruda", 
    color: "bg-blue-400", 
    emoji: "🐄", 
    comment: "Ancora muggisce! Portala subito sulla brace." 
  },
  { 
    min: 20, 
    max: 45, 
    label: "Al Sangue", 
    color: "bg-red-600", 
    emoji: "🥩", 
    comment: "PERFETTA! Sei un vero intenditore. Il macellaio approva." 
  },
  { 
    min: 45, 
    max: 70, 
    label: "Media", 
    color: "bg-orange-500", 
    emoji: "🔥", 
    comment: "Equilibrata e succosa. Ottima scelta per palati raffinati." 
  },
  { 
    min: 70, 
    max: 90, 
    label: "Ben Cotta", 
    color: "bg-amber-700", 
    emoji: "👞", 
    comment: "Un po' troppo asciutta per i miei gusti, ma i gusti sono gusti..." 
  },
  { 
    min: 90, 
    max: 100, 
    label: "Carbonizzata", 
    color: "bg-zinc-800", 
    emoji: "💀", 
    comment: "Hai cucinato una suola di scarpa! Chiama i pompieri!" 
  }
];

const SteakGame = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<typeof COOKING_LEVELS[0] | null>(null);
  const [direction, setDirection] = useState(1);
  const directionRef = useRef(1);
  const progressRef = useRef(0);
  const [leaderboard, setLeaderboard] = useState<ScoreEntry[]>([]);
  const [playerName, setPlayerName] = useState("");
  const [showNameInput, setShowNameInput] = useState(false);
  const [lastScore, setLastScore] = useState(0);
  const requestRef = useRef<number>();

  useEffect(() => {
    const saved = localStorage.getItem('steak-leaderboard');
    if (saved) {
      try {
        setLeaderboard(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse leaderboard", e);
      }
    }
  }, []);

  const calculateScore = (finalProgress: number) => {
    // Perfect point is 32.5 (center of "Al Sangue")
    const distance = Math.abs(finalProgress - 32.5);
    // Max distance is roughly 67.5 (to 100) or 32.5 (to 0). 
    // Let's normalize score so 32.5 gives 100, and it drops off.
    const score = Math.max(0, Math.round(100 - (distance * 2.5)));
    return score;
  };

  const saveScore = (name: string, score: number) => {
    const newEntry: ScoreEntry = {
      name: name || "Grigliatore Anonimo",
      score,
      date: new Date().toLocaleDateString('it-IT')
    };
    
    const newLeaderboard = [...leaderboard, newEntry]
      .sort((a, b) => b.score - a.score)
      .slice(0, 5); // Keep top 5
    
    setLeaderboard(newLeaderboard);
    localStorage.setItem('steak-leaderboard', JSON.stringify(newLeaderboard));
    setShowNameInput(false);
    toast.success("Punteggio salvato in classifica!");
  };

  const animate = () => {
    const nextProgress = progressRef.current + 1.2 * directionRef.current;
    
    if (nextProgress >= 100) {
      directionRef.current = -1;
      setDirection(-1);
      progressRef.current = 100;
    } else if (nextProgress <= 0) {
      directionRef.current = 1;
      setDirection(1);
      progressRef.current = 0;
    } else {
      progressRef.current = nextProgress;
    }
    
    setProgress(progressRef.current);
    requestRef.current = requestAnimationFrame(animate);
  };

  const handleStart = () => {
    setIsPlaying(true);
    setResult(null);
    setProgress(0);
    progressRef.current = 0;
    setDirection(1);
    directionRef.current = 1;
    setShowNameInput(false);
  };

  const handleStop = () => {
    setIsPlaying(false);
    if (requestRef.current) cancelAnimationFrame(requestRef.current);
    
    const finalProgress = progressRef.current;
    const finalResult = COOKING_LEVELS.find(
      level => finalProgress >= level.min && finalProgress <= level.max
    );
    const finalLevel = finalResult || COOKING_LEVELS[COOKING_LEVELS.length - 1];
    setResult(finalLevel);
    
    const calculatedScore = calculateScore(finalProgress);
    setLastScore(calculatedScore);
    
    // Only show name input if score is decent (above 60)
    if (calculatedScore > 60) {
      setTimeout(() => setShowNameInput(true), 1500);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying]);

  return (
    <section className="section-container relative z-10 py-20 overflow-hidden">
      <SectionHeader 
        title="Cuoci la Bistecca Perfetta" 
        subtitle="Metti alla prova le tue abilità da grigliatore"
      />

      <div className="max-w-2xl mx-auto mt-12 bg-black/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10 flex flex-col items-center gap-10">
          <div className="text-center">
            <p className="text-muted-foreground mb-4 uppercase tracking-widest text-xs font-bold italic">
              Obiettivo: Ferma la barra nella zona "Al Sangue" o "Media"
            </p>
          </div>

          {/* Cooking Bar Container */}
          <div className="w-full h-12 bg-zinc-900/80 rounded-full border border-white/10 relative overflow-hidden flex">
            {COOKING_LEVELS.map((level, idx) => (
              <div 
                key={idx}
                style={{ width: `${level.max - level.min}%` }}
                className={`h-full ${level.color} opacity-30 transition-opacity duration-300 ${isPlaying ? 'opacity-20' : ''}`}
              />
            ))}
            
            {/* The Moving Indicator */}
            <motion.div 
              className="absolute top-0 bottom-0 w-2 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20"
              style={{ left: `${progress}%`, translateX: '-50%' }}
            />
            
            {/* Progress labels */}
            <div className="absolute inset-0 flex justify-between px-4 items-center pointer-events-none">
              <span className="text-[10px] font-black italic opacity-50 uppercase">Cruda</span>
              <span className="text-[10px] font-black italic opacity-50 uppercase">Carbonizzata</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 w-full">
            {!isPlaying && !result ? (
              <button
                onClick={handleStart}
                className="group relative px-8 py-4 bg-primary text-white font-black italic uppercase rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Play className="w-5 h-5 fill-current" />
                <span>Inizia a Grigliare</span>
              </button>
            ) : isPlaying ? (
              <button
                onClick={handleStop}
                className="group relative px-10 py-5 bg-white text-black font-black italic uppercase rounded-xl transition-all hover:scale-110 active:scale-95 flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                <Square className="w-5 h-5 fill-current" />
                <span>STOP!</span>
              </button>
            ) : (
              <button
                onClick={handleStart}
                className="group px-6 py-3 bg-zinc-800 text-white font-bold italic uppercase rounded-xl transition-all hover:bg-zinc-700 flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Riprova</span>
              </button>
            )}
          </div>

          {/* Results Area */}
          <div className="min-h-32 flex flex-col items-center justify-center w-full">
            <AnimatePresence mode="wait">
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center flex flex-col items-center"
                >
                  <div className="flex flex-col items-center gap-3 mb-2">
                    <span className="text-5xl mb-2">{result.emoji}</span>
                    <h3 className={`text-3xl md:text-4xl font-black italic uppercase drop-shadow-[0_0_15px_rgba(255,0,0,0.5)] ${result.color === 'bg-red-600' || result.color === 'bg-orange-500' ? 'text-white' : result.color.replace('bg-', 'text-')}`}>
                      {result.label}
                    </h3>
                    <div className="flex items-center gap-2 px-4 py-1 bg-white/10 rounded-full border border-white/5">
                      <Trophy className="w-4 h-4 text-primary" />
                      <span className="font-black italic text-sm">{lastScore} Punti</span>
                    </div>
                  </div>
                  <p className="text-lg md:text-xl font-medium italic text-zinc-300 max-w-lg leading-tight px-4">
                    "{result.comment}"
                  </p>
                </motion.div>
              )}

              {showNameInput && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 w-full max-w-sm bg-zinc-900 border border-white/10 p-6 rounded-2xl shadow-2xl relative z-50"
                >
                  <h4 className="text-sm font-black italic uppercase mb-4 text-center">🏆 Grande Grigliata! Inserisci il tuo nome:</h4>
                  <div className="flex gap-2">
                    <div className="relative flex-grow">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Il tuo nome"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        className="w-full bg-black/50 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:border-primary outline-none transition-colors"
                        autoFocus
                      />
                    </div>
                    <button
                      onClick={() => saveScore(playerName, lastScore)}
                      className="bg-primary hover:bg-primary/90 text-white font-black italic uppercase px-4 py-2 rounded-lg text-xs"
                    >
                      Salva
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Leaderboard Section */}
          {leaderboard.length > 0 && (
            <div className="w-full mt-8 pt-8 border-t border-white/5">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Trophy className="w-5 h-5 text-primary" />
                <h3 className="font-black italic uppercase tracking-wider text-sm">Classifica Top Grigliatori</h3>
              </div>
              
              <div className="space-y-3">
                {leaderboard.map((entry, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={idx} 
                    className="flex items-center justify-between bg-white/5 px-4 py-3 rounded-xl border border-white/5"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-6 text-xs font-black italic ${idx === 0 ? 'text-primary' : 'text-muted-foreground'}`}>
                        #{idx + 1}
                      </span>
                      <span className="font-bold text-sm uppercase italic">{entry.name}</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-[10px] text-muted-foreground italic">{entry.date}</span>
                      <span className="font-black italic text-primary">{entry.score}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Ambient background effects */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/5 blur-3xl rounded-full" />
      </div>
    </section>
  );
};

export default SteakGame;