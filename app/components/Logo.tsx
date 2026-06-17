import React from "react";

/**
 * Ganga Amrit logomark.
 * A droplet (the "Amrit" / nectar) resting on two flowing currents (the "Ganga" / river).
 * Pure inline SVG so it stays crisp at any size and needs no external asset.
 */
export default function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="23" fill="#EA580C" />
      <circle cx="24" cy="24" r="23" fill="url(#ga-sheen)" />
      <path
        d="M24 9c4.8 6.2 9 11.7 9 16.6A9 9 0 0 1 15 25.6C15 20.7 19.2 15.2 24 9Z"
        fill="#FFF7ED"
      />
      <path
        d="M24 16.5c2.6 3.6 4.6 6.6 4.6 9.1a4.6 4.6 0 0 1-9.2 0c0-2.5 2-5.5 4.6-9.1Z"
        fill="#EA580C"
        opacity="0.18"
      />
      <path
        d="M7 33.5c3.7-2.2 7.4-2.2 11 0s7.3 2.2 11 0 7.3-2.2 11 0"
        stroke="#FFF7ED"
        strokeWidth="2.1"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M7 38.5c3.7-2.2 7.4-2.2 11 0s7.3 2.2 11 0 7.3-2.2 11 0"
        stroke="#FFF7ED"
        strokeWidth="2.1"
        strokeLinecap="round"
        opacity="0.55"
      />
      <defs>
        <radialGradient id="ga-sheen" cx="0.3" cy="0.25" r="0.9">
          <stop offset="0%" stopColor="#FB923C" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#EA580C" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
