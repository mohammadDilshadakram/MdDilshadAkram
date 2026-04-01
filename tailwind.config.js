/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dark-bg': '#0a0a0a',
                'electric-blue': '#0070f3',
                'glass': 'rgba(255, 255, 255, 0.05)',
                'neo-white': '#e0e0e0', // Slightly off-white for text
            },
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
                'display': ['Oswald', 'sans-serif'],
            },
            boxShadow: {
                'neo': '4px 4px 0px 0px rgba(255, 255, 255, 1)', // White hard shadow
                'neo-c': '4px 4px 0px 0px #0070f3', // Blue hard shadow
            }
        },
    },
    plugins: [],
}
