import { SVGProps } from "react";

export function Logo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 120 120" 
      fill="none" 
      stroke="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Outer Dotted Circle - Retaining the container concept from the original */}
      <circle 
        cx="60" 
        cy="60" 
        r="54" 
        strokeWidth="1.5" 
        strokeDasharray="4 6" 
        stroke="currentColor" 
        opacity="0.4"
      />
      
      {/* Inner Thin Circle */}
      <circle cx="60" cy="60" r="48" strokeWidth="0.5" stroke="currentColor" opacity="0.2"/>

      {/* Modernized Butterfly / Leaf Motif 
          Refined into an elegant, continuous organic line to represent
          growth (leaves) and transformation (butterfly) in ACP psychology. */}
      
      {/* Left Top Wing (Leaf) */}
      <path 
        d="M58 35 C 35 25, 20 50, 48 60 C 40 45, 52 35, 58 35 Z" 
        strokeWidth="1.5" 
        strokeLinejoin="round"
      />
      {/* Left Top Veins */}
      <path d="M48 60 C 42 50, 35 40, 32 38" strokeWidth="1" opacity="0.6"/>
      <path d="M42 50 C 38 48, 35 48, 35 48" strokeWidth="1" opacity="0.6"/>
      
      {/* Left Bottom Wing (Leaf) */}
      <path 
        d="M56 63 C 35 65, 30 85, 50 82 C 45 75, 48 63, 56 63 Z" 
        strokeWidth="1.5" 
        strokeLinejoin="round" 
      />
      
      {/* Right Top Wing (Leaf) */}
      <path 
        d="M62 35 C 85 25, 100 50, 72 60 C 80 45, 68 35, 62 35 Z" 
        strokeWidth="1.5" 
        strokeLinejoin="round"
      />
      {/* Right Top Veins */}
      <path d="M72 60 C 78 50, 85 40, 88 38" strokeWidth="1" opacity="0.6"/>
      <path d="M78 50 C 82 48, 85 48, 85 48" strokeWidth="1" opacity="0.6"/>

      {/* Right Bottom Wing (Leaf) */}
      <path 
        d="M64 63 C 85 65, 90 85, 70 82 C 75 75, 72 63, 64 63 Z" 
        strokeWidth="1.5" 
        strokeLinejoin="round" 
      />

      {/* Central elegant body line */}
      <path d="M60 30 C 58 45, 62 65, 60 85" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Small top dots (antennae abstraction) */}
      <circle cx="57" cy="25" r="1" fill="currentColor" stroke="none" />
      <circle cx="63" cy="25" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
