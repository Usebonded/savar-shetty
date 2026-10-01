import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTextInput, setIsTextInput] = useState(false);

  // Position references for 60/120fps smooth lerp tracking
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Only initialize on devices that support hover & fine pointer (desktops/laptops)
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (!isVisible) {
        setIsVisible(true);
        // Instant teleport for initial entry so it doesn't fly across screen
        ringPos.current = { x: e.clientX, y: e.clientY };
      }

      // Check if hovering over an interactive element or text input
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = Boolean(
          target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer, [data-interactive="true"]')
        );
        const textElem = Boolean(
          target.closest('input[type="text"], input[type="email"], textarea')
        );

        setIsHovering(interactive);
        setIsTextInput(textElem);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // RAF Loop for silky smooth interpolated ring movement
    const updateRingPosition = () => {
      const lerp = 0.20;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerp;

      // Update lead dot immediately without lag
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      // Update outer targeting ring with interpolated coordinates
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId.current = requestAnimationFrame(updateRingPosition);
    };

    animationFrameId.current = requestAnimationFrame(updateRingPosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [isVisible]);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none z-[99999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* 1. Precision Lead Core Dot (Pure White, Zero Blur) */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full transition-transform duration-100 ${
          isClicking
            ? 'w-1.5 h-1.5 bg-white scale-90'
            : isHovering
            ? 'w-2 h-2 bg-white'
            : 'w-1.5 h-1.5 bg-white'
        }`}
      />

      {/* 2. Tactical Reticle Outer Chassis (Pure White, Zero Blur Effect) */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border transition-all duration-300 ease-out flex items-center justify-center ${
          isClicking
            ? 'w-6 h-6 border-white bg-white/20 scale-90'
            : isTextInput
            ? 'w-7 h-10 rounded-sm border-white bg-white/10'
            : isHovering
            ? 'w-12 h-12 border-white bg-white/10'
            : 'w-8 h-8 border-white/60 bg-transparent'
        }`}
      >
        {/* Reticle Targeting Crosshair Ticks (Top, Bottom, Left, Right) - Crisp White */}
        {!isTextInput && (
          <>
            {/* Top Tick */}
            <span
              className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1.5px] transition-all duration-200 ${
                isHovering ? 'h-2 bg-white' : 'h-1.5 bg-white/80'
              }`}
            />
            {/* Bottom Tick */}
            <span
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[1.5px] transition-all duration-200 ${
                isHovering ? 'h-2 bg-white' : 'h-1.5 bg-white/80'
              }`}
            />
            {/* Left Tick */}
            <span
              className={`absolute left-0 top-1/2 -translate-y-1/2 h-[1.5px] transition-all duration-200 ${
                isHovering ? 'w-2 bg-white' : 'w-1.5 bg-white/80'
              }`}
            />
            {/* Right Tick */}
            <span
              className={`absolute right-0 top-1/2 -translate-y-1/2 h-[1.5px] transition-all duration-200 ${
                isHovering ? 'w-2 bg-white' : 'w-1.5 bg-white/80'
              }`}
            />
          </>
        )}

        {/* Text Input Bracket Markers - Crisp White */}
        {isTextInput && (
          <div className="flex flex-col justify-between w-full h-full p-0.5">
            <div className="flex justify-between w-full">
              <span className="w-1.5 h-0.5 bg-white" />
              <span className="w-1.5 h-0.5 bg-white" />
            </div>
            <div className="flex justify-between w-full">
              <span className="w-1.5 h-0.5 bg-white" />
              <span className="w-1.5 h-0.5 bg-white" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
