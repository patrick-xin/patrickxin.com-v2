/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        site: {
          DEFAULT: "hsl(var(--site))",
          foreground: "hsl(var(--site-foreground))",
        },
      },
      fontFamily: {
        code: ["var(--font-code)"],
        body: ["var(--font-body)"],
        heading: ["var(--font-heading)"],
        quote: ["var(--font-quote)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "blobbing": {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "blob-spin": "blobbing 25s linear infinite",
      },
      zIndex: {
        "-10": "-10",
        25: 25,
        50: 50,
        75: 75,
        100: 100,
        200: 200,
      },
      backgroundImage: {
        "code-border":
          "radial-gradient(100% 100% at 0 0,#4d4db3 0,#4d4db30d 50%,#4d4db380 100%)",
      },
      boxShadow: {
        darkGlow:
          "0 0 5px #a1c4fd, 0 0 10px #a1c4fd, 0 0 15px #c2e9fb, 0 0 20px #c2e9fb",
        lightGlow:
          "0 0 5px #cfb1d1, 0 0 10px #cfb1d1, 0 0 15px #dcace0, 0 0 20px #dcace0",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
