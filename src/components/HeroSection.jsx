import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowDownRight, FileText, Send, Sparkles } from 'lucide-react';

const TOTAL_WAVE_FRAMES = 45; // wave_00.webp to wave_44.webp
const BG_COLOR = '#d03d36';
const RESTING_FRAME = 43; // Hand completely lowered below frame

export default function HeroSection({ onNavigate, waveTrigger }) {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isWaving, setIsWaving] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(RESTING_FRAME);
  const animationFrameRef = useRef(null);
  const waveAnimStateRef = useRef({
    playing: false,
    frame: 0,
    lastTime: 0,
    fps: 20
  });

  // Preload all WebP frames into memory
  useEffect(() => {
    let loadedCount = 0;
    const imgs = [];

    for (let i = 0; i < TOTAL_WAVE_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(2, '0');
      img.src = `/wave_frames/wave_${frameNum}.webp`;

      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_WAVE_FRAMES) * 100));
        if (loadedCount === TOTAL_WAVE_FRAMES) {
          imagesRef.current = imgs;
          setIsLoaded(true);
          // Initial greeting when page first loads
          setTimeout(() => {
            triggerWaveAnimation();
          }, 350);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === TOTAL_WAVE_FRAMES) {
          imagesRef.current = imgs;
          setIsLoaded(true);
        }
      };
      imgs.push(img);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Trigger wave from outside (navbar or return to home)
  useEffect(() => {
    if (waveTrigger > 0 && isLoaded) {
      triggerWaveAnimation();
    }
  }, [waveTrigger, isLoaded]);

  // Wave animation function: 0 -> 44, ending with hand 100% down
  const triggerWaveAnimation = useCallback(() => {
    if (waveAnimStateRef.current.playing) return;

    waveAnimStateRef.current.playing = true;
    waveAnimStateRef.current.frame = 0;
    waveAnimStateRef.current.lastTime = performance.now();
    setIsWaving(true);

    const frameDuration = 1000 / waveAnimStateRef.current.fps;

    const animate = (now) => {
      const elapsed = now - waveAnimStateRef.current.lastTime;

      if (elapsed >= frameDuration) {
        waveAnimStateRef.current.lastTime = now - (elapsed % frameDuration);
        const nextFrame = waveAnimStateRef.current.frame + 1;

        if (nextFrame < TOTAL_WAVE_FRAMES) {
          waveAnimStateRef.current.frame = nextFrame;
          setCurrentFrame(nextFrame);
          drawFrame(nextFrame);
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          // Finished wave: rests cleanly at frame 43 with hand completely lowered
          waveAnimStateRef.current.playing = false;
          waveAnimStateRef.current.frame = RESTING_FRAME;
          setCurrentFrame(RESTING_FRAME);
          drawFrame(RESTING_FRAME);
          setIsWaving(false);
        }
      } else {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [isLoaded]);

  // Canvas Drawing with balanced character on the right
  const drawFrame = useCallback((frameIdx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[frameIdx];
    if (!img || !img.complete) return;

    const dpr = window.devicePixelRatio || 1;
    const displayW = canvas.clientWidth;
    const displayH = canvas.clientHeight;

    if (canvas.width !== displayW * dpr || canvas.height !== displayH * dpr) {
      canvas.width = displayW * dpr;
      canvas.height = displayH * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // 1. Seamless background match
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, displayW, displayH);

    // 2. Position character on the RIGHT side with responsive scale
    const videoW = 1280;
    const videoH = 720;
    const isDesktop = displayW >= 1024;
    const isTablet = displayW >= 768 && displayW < 1024;

    let scale;
    let targetCenterX;
    let targetBottomY;

    if (isDesktop) {
      scale = Math.min((displayH * 0.88) / videoH, (displayW * 0.52) / 800);
      targetCenterX = displayW * 0.72;
      targetBottomY = displayH + 5;
    } else if (isTablet) {
      scale = Math.min((displayH * 0.76) / videoH, (displayW * 0.6) / 800);
      targetCenterX = displayW * 0.70;
      targetBottomY = displayH + 5;
    } else {
      scale = Math.min((displayH * 0.52) / videoH, (displayW * 0.95) / 800);
      targetCenterX = displayW * 0.5;
      targetBottomY = displayH + 5;
    }

    const drawW = videoW * scale;
    const drawH = videoH * scale;
    const drawX = targetCenterX - (drawW * 0.5);
    const drawY = targetBottomY - drawH;

    // Single crisp frame at 100% opacity
    ctx.drawImage(img, drawX, drawY, drawW, drawH);

    // Cleanly cover any tiny watermark in bottom-right corner
    const patchW = 75 * scale;
    const patchH = 35 * scale;
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(drawX + drawW - patchW, drawY + drawH - patchH, patchW + 5, patchH + 5);

    ctx.restore();
  }, []);

  // Redraw on resize
  useEffect(() => {
    const handleResize = () => {
      drawFrame(currentFrame);
    };
    window.addEventListener('resize', handleResize);
    drawFrame(currentFrame);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame, currentFrame]);

  // Click handler on character
  const handleCharacterClick = () => {
    triggerWaveAnimation();
  };

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen overflow-hidden bg-[#d03d36] flex items-center select-none"
    >
      {/* 60FPS Crisp Canvas Character Renderer */}
      <div 
        className="absolute inset-0 z-0 cursor-pointer"
        onClick={handleCharacterClick}
        title="Click to say Hi!"
      >
        <canvas 
          ref={canvasRef} 
          className="w-full h-full block"
        />

        {/* Subtle, understated wave badge */}
        <div className="hidden lg:block absolute bottom-8 right-12 z-10">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleCharacterClick();
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#3D0F0E]/70 border border-[#F5C28F]/40 text-[#FDEBD0] hover:text-white hover:bg-[#3D0F0E]/90 transition-all duration-300 text-xs font-semibold tracking-wide shadow-md active:scale-95 backdrop-blur-md"
          >
            <span>👀</span>
            <span>{isWaving ? "Make mistakes. Learn. Improve. :)" : "Someone's curious! 👋 Tap me "}</span>
          </button>
        </div>
      </div>

      {/* Hero Typography & Content (Enhanced Colors, Responsive Layout) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 pt-28 pb-16 lg:py-0 pointer-events-none">
        <div className="max-w-2xl pointer-events-auto">
          
          {/* Eyebrow Pill with warm champagne border and pulsing gold dot */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#3D0F0E]/60 border border-[#F5C28F]/40 backdrop-blur-md shadow-sm mb-6 text-xs font-semibold tracking-wider text-[#FDEBD0] uppercase">
            <span className="leading-tight">Every challenge is another opportunity to build better</span>
          </div>

          {/* Greeting in warm radiant champagne */}
          <p className="text-lg sm:text-xl font-medium tracking-wide text-[#FCD5B5] mb-2 drop-shadow-xs">
            Hey, I'm
          </p>

          {/* Name: Luminous luxury gradient heading */}
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-4 bg-gradient-to-r from-[#FFFFFF] via-[#FFF5E6] to-[#FCD5B5] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
            Moushmi
          </h1>

          {/* Designation with warm amber accent line */}
          <div className="flex items-center gap-3 mb-5">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#FFEAD0] drop-shadow-xs">
              Software Developer
            </h2>
          </div>

          {/* Short description in soft, readable warm pearl */}
          <p className="max-w-xl text-base sm:text-lg text-[#FFF0E8] leading-relaxed font-normal mb-8 drop-shadow-xs">
            I'm a Software Engineer who genuinely enjoys coding, exploring new technologies, and building things from scratch. I love learning how things work, solving coding challenges, and turning ideas into working applications.
          </p>

          {/* Hero Buttons: Rich pearl and champagne styling */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Primary Button: Resume */}
            <a
              href="/resume.pdf"
              download="Moushmi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                fetch('/resume.pdf', { method: 'HEAD' })
                  .then(res => {
                    if (!res.ok) {
                      e.preventDefault();
                      onNavigate('contact');
                    }
                  })
                  .catch(() => {
                    e.preventDefault();
                    onNavigate('contact');
                  });
              }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FFFBF7] via-[#FFF4EA] to-[#FEE8D8] text-[#B82F29] hover:from-white hover:to-[#FFF0E2] font-bold text-sm sm:text-base shadow-lg hover:shadow-2xl border border-white/80 active:scale-95 transition-all duration-200"
            >
              <FileText className="w-4 h-4 text-[#B82F29]" />
              <span>Resume</span>
              <ArrowDownRight className="w-4 h-4 text-[#B82F29]" />
            </a>

            {/* Secondary Button: Let's Talk */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-[#F5C28F]/50 bg-white/10 hover:bg-[#F5C28F]/20 text-[#FFFBF7] hover:text-white hover:border-[#F5C28F] font-semibold text-sm sm:text-base shadow-md active:scale-95 transition-all duration-200 backdrop-blur-md"
            >
              <Send className="w-4 h-4" />
              <span>Let's Talk</span>
            </a>
          </div>

        </div>
      </div>

      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#d03d36] z-50 flex flex-col items-center justify-center text-white">
          <div className="font-serif text-5xl font-bold mb-3 text-[#FDEBD0]">Moushmi</div>
          <div className="w-44 h-1 bg-white/20 rounded-full overflow-hidden mb-2">
            <div 
              className="h-full bg-gradient-to-r from-[#F5C28F] to-white transition-all duration-300 ease-out"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <div className="text-xs tracking-widest uppercase text-[#FCD5B5]/90">
            Loading ({loadProgress}%)
          </div>
        </div>
      )}
    </section>
  );
}
