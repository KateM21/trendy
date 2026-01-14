
import React from 'react';

export const AppStoreBadge: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <a href="#" aria-label="Завантажити в App Store" {...props}>
    <svg width="150" height="50" viewBox="0 0 150 50">
      <rect width="150" height="50" rx="10" fill="black" />
      <path d="M27.2 35.7c-2 0-3.8-1.6-3.8-4.6 0-3 1.8-4.6 3.8-4.6 2 0 3.7 1.6 3.7 4.6 0 3-1.7 4.6-3.7 4.6zm.1-7.8c-1.1 0-1.9.9-1.9 2.9s.8 2.9 1.9 2.9 1.9-.9 1.9-2.9-.8-2.9-1.9-2.9zM22.8 19.3c.5-.7 1.2-1.1 2.2-1.1 1.3 0 2.1.8 2.1 2.4v.2h-1.6v-.2c0-.8-.4-1.2-1.2-1.2-.6 0-1 .4-1.2.9l-3.2 5.1-1.4-2.1-3.5 5.5h1.7l2.6-4.2 2.9 4.6c.8 1.2 1.7 1.7 2.9 1.7 1.1 0 2-.6 2.5-1.4l.2.2h1.4v-6.3c0-2.2-1.3-3.5-3.5-3.5-1.2 0-2.2.5-2.8 1.4l-.1-.2h-1.5v6.4h1.6v-3.8z" fill="white"/>
      <text x="50" y="23" fill="white" fontSize="12" fontWeight="bold">Завантажте в</text>
      <text x="50" y="40" fill="white" fontSize="16" fontWeight="bold">App Store</text>
    </svg>
  </a>
);
