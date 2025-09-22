import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px', // Extra small devices
      },
      colors: {
        'teal-primary': '#208599',
        'teal-secondary': '#8ae4da',
        'dark-blue': '#124757',
        // Custom gradient intermediate colors for seamless transitions
        'gradient-1': '#1a5c6b', // dark-blue to teal-primary
        'gradient-2': '#2a9fb5', // teal-primary to teal-secondary  
        'gradient-3': '#a5e8df', // teal-secondary to lighter
        'gradient-4': '#6db8c5', // projects section blend
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
