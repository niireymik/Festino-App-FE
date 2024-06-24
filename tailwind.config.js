/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        primary: {
          700: {
            DEFAULT: '#3082F6',
            light: 'rgba(48, 130, 246, 0.4)',
          },
          500: '#4fa3ff',
          300: '#cfe3ff',
          100: '#f5f6f8',
          50: 'rgba(0, 0, 0, 0.03)',
        },
        secondary: {
          700: '#222222',
          500: '#444444',
          300: '#999999',
          100: '#CCCCCC',
          50: '#EEEEEE',
        },
      },
      backgroundColor: (theme) => ({
        ...theme('textColor'),
      }),
      fontSize: {
        '3xs': '0.5rem', // 8px
        '2xs': '0.625rem', // 10px
        '3xl': '1.75rem', // 28px
      },
      fontFamily: {
        pretendard: ['Pretendard Variable'],
        jalnan2: ['jalnan2'],
      },
      backgroundImage: {
        'tino-cheer-up': "url('/images/tinos/tino-cheer-up.png')",
        'tino-no-arm': "url('/images/tinos/tino-no-arm.png')",
        'tino-no-arm-v2': "url('/images/tinos/tino-no-arm-v2.png')",
        'tino-arm4x': "url('/images/tinos/tino-arm4x.png')",
        'tino-arm': "url('/images/tinos/tino-arm.png')",
        'tino-arm-only-4x': "url('/images/tinos/tino-arm-only-4x.png')",
      },
      borderRadius: {
        '3xl': '1.25rem', // 20px
      },
      borderColor: {
        primary: 'rgba(0, 115, 240, 0.16)',
      },
      borderWidth: {
        1: '0.5px',
      },
    },
  },
  plugins: [],
};
