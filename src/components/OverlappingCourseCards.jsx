"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

const cx = (...classes) => classes.filter(Boolean).join(" ");

/**
 * Reusable overlapping card section (desktop overlap + hover zoom/blue tone).
 *
 * Cards are positioned with fixed pixel offsets to match the reference screenshots.
 */
export default function OverlappingCourseCards({ cards, className }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const layout = useMemo(() => {
    // Desktop layout offsets (matching your reference screenshot composition).
    // Stage width is controlled by the wrapper below via max-w and fixed card widths.
    return [
      { left: 60, top: 92, rot: -8, z: 10 }, // Card 1
      { left: 285, top: 68, rot: -2, z: 20 }, // Card 2
      { left: 470, top: 28, rot: 2, z: 40 }, // Card 3 (front-most by default)
      { left: 685, top: 85, rot: 7, z: 30 }, // Card 4
    ];
  }, []);

  const centerLeft = 390; // stage center-ish (used when a card is hovered)
  const centerTop = 20;

  return (
    <section className={cx("w-full py-10", className)}>
      <div className="mx-auto w-full max-w-[1120px] lg:h-[290px] flex flex-col items-center gap-8 lg:block lg:gap-0 lg:py-0">
        {cards.map((card, idx) => {
          const isActive = activeIndex === idx;
          const base = layout[idx] ?? layout[0];

          const cardShell = cx(
            "group relative w-[340px] h-[220px] rounded-[18px] overflow-hidden",
            "border border-[#d3a84a] bg-[#FFEFA6]",
            isActive
              ? "shadow-[0_32px_70px_rgba(0,0,0,0.32)]"
              : "shadow-[0_18px_35px_rgba(0,0,0,0.16)]",
            "transition-[box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            "will-change-transform",
            "cursor-pointer p-0 text-left appearance-none"
          );

          return (
            <div
              key={card.title}
              className={cx(
                "relative lg:absolute",
                "outline-none focus:outline-none",
                // Desktop placement
                "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              )}
              style={{
                left: isActive ? `${centerLeft}px` : `${base.left}px`,
                top: isActive ? `${centerTop}px` : `${base.top}px`,
                zIndex: isActive ? 60 : base.z,
                transform: `rotate(${isActive ? -1 : base.rot}deg) scale(${isActive ? 1.06 : 1})`,
              }}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {card.href ? (
                <Link
                  href={card.href}
                  className={cx(cardShell, "focus-visible:ring-4 focus-visible:ring-yellow-300/70")}
                  onFocus={() => setActiveIndex(idx)}
                  onBlur={() => setActiveIndex(null)}
                >
                  <CardInner card={card} isActive={isActive} />
                </Link>
              ) : (
                <button
                  type="button"
                  className={cx(cardShell, "focus-visible:ring-4 focus-visible:ring-yellow-300/70")}
                  onFocus={() => setActiveIndex(idx)}
                  onBlur={() => setActiveIndex(null)}
                >
                  <CardInner card={card} isActive={isActive} />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CardInner({ card, isActive }) {
  return (
    <div className="flex h-full flex-col">
      <div className="px-5 pt-5">
        <h3 className="text-[14px] font-extrabold tracking-tight text-[#191919]">
          {card.title}
        </h3>
        <p
          className="mt-2 text-[11px] leading-[1.35] text-black/70 overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {card.desc}
        </p>
      </div>

      <div className="relative mt-auto h-[122px]">
        <img
          src={card.imageSrc}
          alt=""
          loading="lazy"
          className={cx(
            "h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isActive
              ? "scale-[1.16] saturate-[1.45] brightness-[1.02]"
              : "scale-[1.02] grayscale brightness-[0.72] contrast-[1.18] saturate-0"
          )}
        />

        {/* Blue-toned overlay only on hovered card */}
        <div
          className={cx(
            "absolute inset-0 bg-[#2563eb]/35 transition-opacity duration-500",
            isActive ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Subtle default dark overlay to match grayscale/dark look */}
        <div
          className={cx(
            "absolute inset-0 bg-black/10 transition-opacity duration-500",
            isActive ? "opacity-0" : "opacity-100"
          )}
        />

        {/* Code overlay lines (matches your screenshot vibe) */}
        {card.codeLines?.length ? (
          <div className="absolute inset-0 flex flex-col justify-end px-4 pb-3 gap-1 pointer-events-none">
            <div className="flex flex-row flex-wrap gap-x-3 gap-y-1">
              {card.codeLines.map((line, i) => (
                <span
                  key={`${line}-${i}`}
                  className={cx(
                    "rounded-[10px] px-[6px] py-[1px] text-[11px] leading-none",
                    "font-mono bg-white/25 text-black/70",
                    isActive && "bg-[#1d4ed8]/20 text-[#0b1b3a]"
                  )}
                >
                  {line}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>

    </div>
  );
}

