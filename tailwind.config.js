/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './main.js', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Ubuntu', 'Helvetica', 'Arial', 'sans-serif'],
        },
        extend: {
            backgroundImage: {
                'parking-lot': "url('/img/parkinglot.jpg')",
                'games-not-played': "url('/img/games-not-played.png')",
                'movie-db': "url('/img/movie-db.png')",
                'jeep-com': "url('/img/jeep-com.png')",
            },
            colors: {
                'games-not-played': {
                    primary: '#3b5249',
                    'bg-0': '#141314',
                    light: '#e6fffbfa',
                },
                'cyan-125': '#aef4fc',
            },
            dropShadow: {
                'xl-left': [
                    '-6px 20px 13px rgb(0 0 0 / 0.03)',
                    '-6px 8px 5px rgb(0 0 0 / 0.08)',
                ],
            },
        },
    },
    plugins: [],
}
