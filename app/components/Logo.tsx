import React from "react";
import Image from "next/image";

export default function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/ganga-amrit-logo.jpeg"
      alt="Ganga Amrit - शुद्धता का वादा"
      width={160}
      height={160}
      className={className}
      priority
    />
  );
}