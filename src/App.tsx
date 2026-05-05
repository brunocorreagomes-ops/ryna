import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8 } from './components/Slides';

const slidesList = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8];
const slideLabels = ["Capa", "Diagnóstico", "Marca", "Estrutura", "Temas", "Website", "Investimento", "Início"];

export default function App() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent(p => Math.min(slidesList.length - 1, p + 1));
  const prevSlide = () => setCurrent(p => Math.max(0, p - 1));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const CurrentComponent = slidesList[current];

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col relative bg-marrom-escuro selection:bg-verde selection:text-white">
      
      {/* Slide Counter */}
      <div className="absolute top-8 right-10 z-50 font-display font-medium text-sm text-white/40 tracking-[0.2em]">
        {String(current + 1).padStart(2, '0')} <span className="opacity-50">/ 08</span>
      </div>

      {/* Main Slide Area */}
      <div className="flex-1 relative w-full h-full">
        <AnimatePresence mode="wait">
          <CurrentComponent key={current} />
        </AnimatePresence>
      </div>

      {/* Navigation Footer */}
      <footer className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center pointer-events-none w-full">
        <div className="pointer-events-auto flex items-center bg-marrom-escuro/60 backdrop-blur-xl border border-white/10 p-2 rounded-full gap-1 shadow-2xl">
          {slideLabels.map((lbl, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                current === idx 
                  ? 'bg-verde text-off-white shadow-md' 
                  : 'text-bege/50 hover:text-bege hover:bg-white/5'
              }`}
            >
              {lbl}
            </button>
          ))}
        </div>
      </footer>

      {/* Floating Arrows */}
      <div className="absolute bottom-8 right-10 z-50 flex items-center gap-2">
        <button 
          onClick={prevSlide}
          disabled={current === 0}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-verde border border-white/10 disabled:opacity-20 disabled:hover:bg-white/5 transition-colors text-bege"
        >
          <ChevronLeft size={18} />
        </button>
        <button 
          onClick={nextSlide}
          disabled={current === slidesList.length - 1}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-verde border border-white/10 disabled:opacity-20 disabled:hover:bg-white/5 transition-colors text-bege"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
