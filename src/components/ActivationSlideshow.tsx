import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

export type SlideshowItem = {
  src: string;
  alt: string;
  title: string;
  desc: string;
  objectPosition?: string;
  /** Override the default responsive width classes for this slide's image. */
  widthClassName?: string;
};

const AUTOPLAY_MS = 3000;

export function ActivationSlideshow({ items }: { items: SlideshowItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [manuallyPaused, setManuallyPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const playing = !manuallyPaused && !hovering;

  const remainingRef = useRef(AUTOPLAY_MS);
  const startedAtRef = useRef<number | null>(null);

  const goTo = (index: number) => {
    const next = ((index % items.length) + items.length) % items.length;
    setActiveIndex(next);
    setCycle((c) => c + 1);
  };
  const scrollPrev = () => goTo(activeIndex - 1);
  const scrollNext = () => goTo(activeIndex + 1);

  // A new slide became active — give it a full countdown.
  useEffect(() => {
    remainingRef.current = AUTOPLAY_MS;
  }, [activeIndex, cycle]);

  // Runs (or pauses/resumes) the countdown for the active slide, tracking
  // exactly how much time is left so pausing on hover and resuming picks up
  // where it left off instead of restarting the full interval.
  useEffect(() => {
    if (!playing) {
      if (startedAtRef.current !== null) {
        remainingRef.current -= Date.now() - startedAtRef.current;
        startedAtRef.current = null;
      }
      return;
    }
    startedAtRef.current = Date.now();
    const id = setTimeout(() => goTo(activeIndex + 1), Math.max(remainingRef.current, 0));
    return () => {
      clearTimeout(id);
      if (startedAtRef.current !== null) {
        remainingRef.current -= Date.now() - startedAtRef.current;
        startedAtRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, activeIndex, cycle]);

  const active = items[activeIndex];

  return (
    <div
      className="relative rounded-2xl overflow-hidden bg-black ring-1 ring-cream/10 shadow-[0_0_60px_-15px_rgba(212,175,140,0.25)]"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Image area — its own box, separate from the caption below it so the
          two never overlap on any screen size. */}
      <div className="relative">
        {/* Grid stack: every slide shares the same cell, so the row sizes
            itself to whichever image is tallest — nothing gets cropped, and
            shorter images sit centered within that shared height. */}
        <div className="grid">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="col-start-1 row-start-1 self-center justify-self-center w-full py-6 sm:py-8"
              style={{
                opacity: i === activeIndex ? 1 : 0,
                zIndex: i === activeIndex ? 1 : 0,
              }}
            >
              <img
                key={i === activeIndex ? cycle : "static"}
                src={item.src}
                alt={item.alt}
                className={`block mx-auto ${item.widthClassName ?? "w-[80%] sm:w-[70%]"} h-auto rounded-lg ${
                  i === activeIndex ? "activation-slide-in" : ""
                }`}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {/* Prev / Next — scoped to the image area, not the caption below */}
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/40 backdrop-blur-md border border-cream/20 text-cream hover:bg-background/60 hover:scale-110 active:scale-95 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next slide"
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/40 backdrop-blur-md border border-cream/20 text-cream hover:bg-background/60 hover:scale-110 active:scale-95 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Caption — a normal-flow block below the image, never overlaid on it */}
      <div className="relative border-t border-cream/10 bg-black p-6 sm:p-8 md:p-10">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-cream mb-3">In Action</p>
        <h3 className="display text-2xl sm:text-3xl md:text-4xl text-white leading-tight max-w-xl">
          {active.title}
        </h3>
        <p className="mt-3 text-sm md:text-base text-white/70 max-w-md leading-relaxed">{active.desc}</p>

        {/* Play / pause */}
        <button
          type="button"
          onClick={() => setManuallyPaused((p) => !p)}
          aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          className="absolute bottom-5 right-5 md:bottom-8 md:right-8 z-10 inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-background/40 backdrop-blur-md border border-cream/20 text-cream hover:bg-background/60 hover:scale-110 active:scale-95 transition"
        >
          {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>

      <style>{`
        @keyframes slide-in-blurred {
          0% {
            transform: translateY(40px);
            filter: blur(16px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            filter: blur(0px);
            opacity: 1;
          }
        }
        .activation-slide-in {
          animation: slide-in-blurred 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
      `}</style>
    </div>
  );
}
