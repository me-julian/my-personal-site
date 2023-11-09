/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './main.js', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Ubuntu', 'Helvetica', 'Arial', 'sans-serif'],
        },
        backgroundImage: {
            'parking-lot': "url('/img/parkinglot.jpg')",
        },
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
