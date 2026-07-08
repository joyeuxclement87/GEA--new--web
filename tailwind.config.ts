import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#10367D',
        pearl: '#F8F8F8',
        gold: '#C8A45D',
        border: '#E6E6E6',
        gea: {
          primary: '#10367D',
          accent: '#C8A45D',
          text: '#1F2937',
          border: '#E6E6E6',
          bg: '#FFFFFF',
          'bg-secondary': '#F8F8F8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
      },
      letterSpacing: {
        nav: '0.02em',
      },
      maxWidth: {
        content: '1440px',
      },
      height: {
        navbar: '88px',
        'navbar-scrolled': '72px',
      },
      transitionTimingFunction: {
        refined: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        nav: '10px',
      },
      boxShadow: {
        'navbar-scrolled': '0 1px 0 0 #E6E6E6',
        'mega-menu': '0 24px 64px -12px rgba(16, 54, 125, 0.12)',
        'card-hover': '0 12px 40px -10px rgba(16, 54, 125, 0.15)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.25s ease forwards',
        'fade-in': 'fade-in 0.2s ease forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
