

/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";
import { fontFamily } from "tailwindcss/defaultTheme";


module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

    
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {

      

		fontFamily: {
			heading: ['var(--font-heading)', ...fontFamily.sans],
			body: ['var(--font-body)', ...fontFamily.sans]
		  },

		  colors: {
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			primary: {
			  DEFAULT: '#36a39e',
			  foreground: '#0b8d7c'
			},
			secondary: {
			  DEFAULT: 'hsl(var(--secondary))',
			  foreground: 'hsl(var(--secondary-foreground))'
			},
			destructive: {
			  DEFAULT: 'hsl(var(--destructive))',
			  foreground: 'hsl(var(--destructive-foreground))'
			},
			muted: {
			  DEFAULT: 'hsl(var(--muted))',
			  foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
			  DEFAULT: 'hsl(var(--accent))',
			  foreground: 'hsl(var(--accent-foreground))'
			},
			popover: {
			  DEFAULT: 'hsl(var(--popover))',
			  foreground: 'hsl(var(--popover-foreground))'
			},
			card: {
			  DEFAULT: 'hsl(var(--card))',
			  foreground: 'hsl(var(--card-foreground))'
			},
		  },
		  borderRadius: {
			xl: `calc(var(--radius) + 4px)`,
			lg: `var(--radius)`,
			md: `calc(var(--radius) - 2px)`,
			sm: `calc(var(--radius) - 4px)`
		  },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "bounce": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
		"accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 }
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce ": "bounce 1s infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
		
      },
    },
  },
  plugins: [require("tailwindcss-animate"),nextui()],
}


