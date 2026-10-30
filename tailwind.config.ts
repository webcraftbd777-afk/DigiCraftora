import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#05070f", navy: "#0b1b3a", deep: "#070d1f", electric: "#2563eb", cyan: "#22d3ee", violet: "#8b5cf6" },
    fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"] },
    backgroundImage: { brand: "linear-gradient(90deg,#22d3ee,#2563eb,#8b5cf6)" },
    boxShadow: { glow: "0 0 40px -8px rgba(34,211,238,.45)", glowv: "0 0 40px -8px rgba(139,92,246,.5)" },
  } },
  plugins: [],
};
export default config;
