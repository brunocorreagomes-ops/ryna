import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Slide1, Slide2, Slide3, SlideConcepts, Slide4, Slide5, Slide6, Slide7, Slide8 } from './components/Slides';

const slidesList = [Slide1, Slide2, Slide3, SlideConcepts, Slide4, Slide5, Slide6, Slide7, Slide8];
const slideLabels = ["Capa", "Diagnóstico", "Marca", "3 Conceitos", "Estrutura", "Temas", "Website", "Investimento", "Início"];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

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
    <div 
      className="w-screen h-[100dvh] overflow-hidden flex flex-col relative bg-marrom-escuro selection:bg-verde selection:text-white"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEndHandler}
    >
      
      {/* Slide Counter */}
      <div className="absolute top-4 sm:top-8 right-6 sm:right-10 z-50 font-display font-medium text-xs sm:text-sm text-white/40 tracking-[0.2em] pointer-events-none">
        {String(current + 1).padStart(2, '0')} <span className="opacity-50">/ {String(slidesList.length).padStart(2, '0')}</span>
      </div>

      {/* Main Slide Area */}
      <div className="flex-1 relative w-full h-full">
        <AnimatePresence mode="wait">
          <CurrentComponent key={current} />
        </AnimatePresence>
      </div>

      {/* Navigation Footer */}
      <footer className="absolute bottom-6 left-0 right-0 z-50 flex items-center justify-center pointer-events-none px-4 sm:px-8">
        <div className="pointer-events-auto flex items-center bg-marrom-escuro/80 backdrop-blur-xl border border-white/10 p-1.5 sm:p-2 rounded-full gap-1 sm:gap-1.5 shadow-2xl overflow-x-auto max-w-full hidden-scrollbar scroll-smooth">
          {slideLabels.map((lbl, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`px-3 sm:px-4 py-2 rounded-full text-[9px] sm:text-[10px] font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap shrink-0 ${
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
      <div className="absolute bottom-20 sm:bottom-8 right-4 sm:right-10 z-50 hidden md:flex items-center gap-2">
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
