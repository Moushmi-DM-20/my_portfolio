import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let ringScale = 1;
    let targetScale = 1;
    let isVisible = false;
    let animId;

    // Cache dark section bounds to avoid calling getBoundingClientRect on every mouse move
    let darkRanges = [];

    const calculateDarkRanges = () => {
      const hero = document.getElementById('home');
      const contact = document.getElementById('contact');
      const ranges = [];
      if (hero) {
        const top = hero.offsetTop;
        const bottom = top + hero.offsetHeight;
        ranges.push({ top, bottom });
      }
      if (contact) {
        const top = contact.offsetTop;
        const bottom = top + contact.offsetHeight;
        ranges.push({ top, bottom });
      }
      darkRanges = ranges;
    };

    calculateDarkRanges();
    window.addEventListener('resize', calculateDarkRanges, { passive: true });
    window.addEventListener('scroll', calculateDarkRanges, { passive: true });

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (containerRef.current) {
          containerRef.current.style.opacity = '1';
        }
      }

      // Check if mouse is over a dark section using page scroll position
      const pageY = e.clientY + window.pageYOffset;
      const isOverDark = darkRanges.some(r => pageY >= r.top && pageY <= r.bottom);

      if (containerRef.current) {
        if (isOverDark) {
          containerRef.current.classList.add('cursor-theme-dark');
          containerRef.current.classList.remove('cursor-theme-light');
        } else {
          containerRef.current.classList.add('cursor-theme-light');
          containerRef.current.classList.remove('cursor-theme-dark');
        }
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      if (containerRef.current) {
        containerRef.current.style.opacity = '0';
      }
    };

    const handleMouseEnter = () => {
      isVisible = true;
      if (containerRef.current) {
        containerRef.current.style.opacity = '1';
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.interactive') ||
        target.closest('canvas')
      ) {
        targetScale = 1.45;
      } else {
        targetScale = 1;
      }
    };

    // 120/60 FPS Lerp Render Loop
    const render = () => {
      // Lerp ring position with high responsiveness (0.28 factor)
      ringX += (mouseX - ringX) * 0.28;
      ringY += (mouseY - ringY) * 0.28;
      ringScale += (targetScale - ringScale) * 0.22;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${ringScale})`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', calculateDarkRanges);
      window.removeEventListener('scroll', calculateDarkRanges);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="cursor-container cursor-theme-dark pointer-events-none fixed inset-0 z-[9999] opacity-0 transition-opacity duration-300"
    >
      {/* Trailing Aura Ring */}
      <div 
        ref={ringRef} 
        className="custom-cursor-ring" 
      />
      {/* Central Sharp Glowing Dot */}
      <div 
        ref={dotRef} 
        className="custom-cursor-dot" 
      />
    </div>
  );
}
