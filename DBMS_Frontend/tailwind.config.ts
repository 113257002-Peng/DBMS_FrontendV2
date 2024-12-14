import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // 支援 Pages Router
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // 用於元件
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // 支援 App Router
    "./node_modules/@nextui-org/react/**/*.{js,ts,jsx,tsx}", // 支援 NextUI
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // 自訂背景色
        foreground: "var(--foreground)", // 自訂前景色
      },
    },
  },
  plugins: [],
} satisfies Config;
