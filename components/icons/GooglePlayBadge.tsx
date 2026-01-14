
import React from 'react';

export const GooglePlayBadge: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <a href="#" aria-label="Доступно в Google Play" {...props}>
    <svg width="168" height="50" viewBox="0 0 168 50">
      <rect width="168" height="50" rx="10" fill="black" />
      <path fill="#FFD700" d="M26.8 25l-6.2-6.2 12.5-12.5 12.5 12.5-6.3 6.2-6.2-6.2z"/>
      <path fill="#4CAF50" d="M20.6 18.8L8.1 31.3l6.2 6.2 12.5-12.5z"/>
      <path fill="#F44336" d="M8.1 18.8l12.5-12.5L33.1 18.8 20.6 31.3z"/>
      <path fill="#2196F3" d="M33.1 31.3l-6.2 6.2-6.3-6.2 6.2-6.3z"/>
      <text x="50" y="23" fill="white" fontSize="12" fontWeight="normal">ДОСТУПНО В</text>
      <text x="50" y="40" fill="white" fontSize="16" fontWeight="bold">Google Play</text>
    </svg>
  </a>
);
