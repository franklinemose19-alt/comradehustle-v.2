@import "tailwindcss";

@theme {
  --font-sans: "Inter", "Outfit", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;

  --color-primary-dark: #0A0A0B;
  --color-secondary-dark: #111114;
  --color-accent-cyan: #06b6d4;
  --color-accent-blue: #2563eb;
  --color-accent-emerald: #10b981;
  --color-accent-purple: #a855f7;
}

@layer base {
  body {
    @apply bg-primary-dark text-slate-200;
  }
}

@layer utilities {
  .glass {
    @apply bg-white/5 backdrop-blur-md border border-white/10;
  }
  
  .glass-card {
    @apply bg-secondary-dark border border-white/5 rounded-[2rem] shadow-2xl;
  }

  .text-gradient {
    @apply text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500;
  }

  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}
