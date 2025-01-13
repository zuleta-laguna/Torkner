/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
       'bgSection1': "url('/image/Group 34.png')",
       'Group6': "url('/image/Group 66.png')",
       'GroupMobile': "url('/image/GroupMobile.png')",
       'Maskgroup': "url('/image/Mask Group.png')",
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
};
