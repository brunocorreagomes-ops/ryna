import { SVGProps } from "react";

export function Logo({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 120 120" 
      fill="none" 
      stroke="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 hover:scale-105 hover:drop-shadow-sm ${className}`}
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
      
      {/* Single fluid path forming the outer wings/leaves */}
      <path 
        d="M 60 85 
           C 35 90, 20 70, 42 55 
           C 15 45, 30 18, 60 38 
           C 90 18, 105 45, 78 55 
           C 100 70, 85 90, 60 85 Z" 
        strokeWidth="1.5" 
        strokeLinejoin="round"
      />
      
      {/* Inner flowing vein/leaf lines to add leaf-like depth */}
      <path d="M 42 55 C 48 58, 52 70, 60 85" strokeWidth="1" opacity="0.5"/>
      <path d="M 78 55 C 72 58, 68 70, 60 85" strokeWidth="1" opacity="0.5"/>
      <path d="M 42 55 C 48 52, 52 45, 60 38" strokeWidth="1" opacity="0.5"/>
      <path d="M 78 55 C 72 52, 68 45, 60 38" strokeWidth="1" opacity="0.5"/>

      {/* Central elegant body stem */}
      <path d="M60 25 C 60 45, 60 65, 60 85" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Small top dots (antennae abstraction) */}
      <circle cx="56" cy="22" r="1.5" fill="currentColor" stroke="none" opacity="0.8" />
      <circle cx="64" cy="22" r="1.5" fill="currentColor" stroke="none" opacity="0.8" />
    </svg>
  );
}
