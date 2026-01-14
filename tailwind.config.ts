
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        display: ['var(--font-space)', 'sans-serif'],
      },
      colors: {
        // "Blueprint Paper" Palette
        paper: '#F8FAFC',
        surface: '#FFFFFF',
        ink: '#0F172A',
        
        // "Electric Cobalt" Brand Color
        cobalt: {
          DEFAULT: '#2563EB',
          50: '#EFF6FF',
          100: '#DBEAFE',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          900: '#1E3A8A',
        },
        
        // Technical Grays
        tech: {
          100: '#F1F5F9', // Grid lines
          200: '#E2E8F0',
          300: '#CBD5E1', // Borders
          400: '#94A3B8',
          500: '#64748B', // Secondary Text
          900: '#0F172A',
        },
        
        // Accent Colors
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        }
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #F1F5F9 1px, transparent 1px), linear-gradient(to bottom, #F1F5F9 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.08) 0%, transparent 70%)',
        'blue-gradient': 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
        'cyan-gradient': 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
        'metal-gradient': 'linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%)',
        'glass': 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(37, 99, 235, 0.15)',
        'glow-hover': '0 0 30px rgba(37, 99, 235, 0.25)',
      },
      animation: {
        "scan": "scan 4s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        "scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
