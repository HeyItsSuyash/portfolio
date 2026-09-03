"use client";

import React, { memo, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useMotionValue, animate, motion } from "motion/react";
import useMeasure from "react-use-measure";

export type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

const InfiniteSlider = memo(function InfiniteSlider({
  children,
  gap = 42,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const size = direction === "horizontal" ? width : height;
    if (!size || size === 0) return;

    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    let controls: { stop: () => void } | undefined;

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration:
          currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prev) => prev + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration: currentDuration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => translation.set(from),
      });
    }

    return () => controls?.stop();
  }, [
    key,
    translation,
    currentDuration,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentDuration(durationOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentDuration(duration);
        },
      }
    : {};

  const isHorizontal = direction === "horizontal";

  return (
    <div className={cn("overflow-hidden w-full", className)}>
      <motion.div
        ref={ref}
        style={{
          display: "flex",
          flexDirection: isHorizontal ? "row" : "column",
          flexWrap: "nowrap",
          alignItems: "center",
          width: "max-content",
          gap: `${gap}px`,
          ...(isHorizontal ? { x: translation } : { y: translation }),
        }}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
});

const LogoImage = memo(function LogoImage({ logo }: { logo: Logo }) {
  const isPolylearn = logo.src.toLowerCase().includes("polylearn");

  return (
    <div className="flex items-center justify-center shrink-0 h-[50px] w-auto">
      <img
        alt={logo.alt}
        src={logo.src}
        loading="lazy"
        className="pointer-events-none select-none max-h-[50px] max-w-[140px] w-auto h-auto object-contain transition-all duration-300 opacity-80 hover:opacity-100"
        style={{
          maxHeight: "50px",
          maxWidth: "140px",
          height: "auto",
          width: "auto",
          filter: isPolylearn
            ? "none"
            : "grayscale(100%) brightness(0) invert(96%) sepia(8%) saturate(542%) hue-rotate(338deg) brightness(101%) contrast(97%)",
        }}
      />
    </div>
  );
});

export const LogoMarquee = memo(function LogoMarquee({
  logos,
  className,
  gap = 96,
}: {
  logos: Logo[];
  className?: string;
  gap?: number;
}) {
  return (
    <div
      className={cn(
        "relative max-w-7xl w-full mx-auto overflow-hidden py-4",
        className,
      )}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <InfiniteSlider gap={gap} reverse duration={40} durationOnHover={18} direction="horizontal">
        {[...logos, ...logos].map((logo, i) => (
          <LogoImage key={`${logo.alt}-${i}`} logo={logo} />
        ))}
      </InfiniteSlider>
    </div>
  );
});

LogoMarquee.displayName = "LogoMarquee";
export default LogoMarquee;
