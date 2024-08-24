/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'custom-gradient':
                    'linear-gradient(180deg, #09318e 0%, #1e5bfd 50%, #0893f6 100%)',
                'custom-gradient-2':
                    'linear-gradient(280deg, #051c2c 0%, #051c2c 50%, #033192 100%)',
                'custom-gradient-3':
                    'linear-gradient(100deg, #051c2c 0%, #051c2c 50%, #033192 100%);',
            },
            colors: {
                primary: '#00548F',
                'dark-blue': '#152869',
                yellow: '#EDB73F',
            },
            boxShadow: {
                custom: `
                  rgba(255, 255, 255, 0.1) 0px 1px 1px,
                  rgba(50, 50, 93, 0.25) 0px 8px 16px -8px,
                  rgba(0, 0, 0, 0.3) 0px 16px 32px -16px,
                  rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset
                `,
            },
            keyframes: {
                slide: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
            animation: {
                slide: 'slide 35s linear infinite',
            },
        },
    },
    plugins: [],
};
