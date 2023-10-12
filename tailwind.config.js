/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './main.js', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'games-not-played': {
                    primary: '#3b5249',
                    'bg-0': '#141314',
                    light: '#e6fffbfa',
                },
            },
        },
    },
    plugins: [],
}
