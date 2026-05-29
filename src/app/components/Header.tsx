'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  status: 'idle' | 'live' | 'ended';
  timer: string;
}

const STATUS_CONFIG = {
  idle:  { label: 'Ready',  dot: 'bg-text-muted',       pill: 'text-text-muted border-border-subtle bg-surface-glass' },
  live:  { label: 'Live',   dot: 'bg-[#4BA541] animate-pulse-dot', pill: 'text-[#4BA541] border-[#4BA541]/25 bg-[#4BA541]/8' },
  ended: { label: 'Ended',  dot: 'bg-[#ef4444]',         pill: 'text-[#ef4444] border-[#ef4444]/20 bg-[#ef4444]/8' },
} as const;

export default function Header({ status, timer }: HeaderProps) {
  const cfg = STATUS_CONFIG[status];

  return (
    <header className="h-20 flex items-center justify-between px-6 lg:px-10 bg-bg-primary/95 backdrop-blur-xl border-b border-border-subtle shrink-0 z-20 transition-all duration-300">
      
      {/* Brand & Logo */}
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-3 group">
          {/* Rubenius SVG Logo */}
          <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
            <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[34px] h-[35px] md:w-[37px] md:h-[38px]">
              <path fillRule="evenodd" clipRule="evenodd" d="M17.6086 0H0V38H17.6086V0ZM28.1957 0C33.0601 0 37 4.00565 37 8.94118C37 13.8745 33.0601 17.8824 28.1957 17.8824C23.3533 17.8824 19.3914 13.8745 19.3914 8.94118C19.3914 4.00565 23.3533 0 28.1957 0Z" fill="#4BA541" />
            </svg>
          </div>
          
          <div className="leading-tight">
            <span className="text-[17px] md:text-[19px] font-bold text-text-primary tracking-tight font-sans">
              Rubenius
            </span>
            <span className="block text-[10px] md:text-[11px] text-text-muted font-medium tracking-wider uppercase mt-0.5">
              AI Video Agent
            </span>
          </div>
        </Link>
      </div>
      {/* Controls */}
      <div className="flex items-center gap-2 bg-surface-glass border border-border-subtle rounded-full p-1.5 transition-all duration-300">
        <ThemeToggle />

        {/* Status pill */}
        <div
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-all duration-300 ${cfg.pill}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cfg.dot}`} />
          {cfg.label}
        </div>

        {/* Timer */}
        <div
          className={`font-mono text-[12px] font-semibold px-3 py-1.5 rounded-full border transition-all duration-300 min-w-[58px] text-center tabular-nums
            ${status === 'live'
              ? 'text-[#4BA541] border-[#4BA541]/25 bg-[#4BA541]/8'
              : 'text-text-muted border-border-subtle bg-surface-glass'
            }`}
        >
          {timer}
        </div>
      </div>
    </header>
  );
}