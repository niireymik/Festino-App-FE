/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'white-opacity': 'rgba(255, 255, 255, 0.68)',
         primary: { 
          900: {
            DEFAULT: '#0073F0',
            light: 'rgba(0, 115, 240, 0.16)'
          },
        },
        secondary: { 
          200: '#F2F4F6',
          100: '#CCCCCC',
        },
      },
      textColor: {
        primary: {
          900: {
            DEFAULT: '#0073F0',
            light: 'rgba(0, 115, 240, 0.16)',
          },
          700: {
            DEFAULT: '#3082F6',
            light: 'rgba(48, 130, 246, 0.4)',
          },
          600: '#54A6FF',
          500: '#4fa3ff',
          300: '#cfe3ff',
          100: '#f5f6f8',
          50: 'rgba(0, 0, 0, 0.03)',
        },
        secondary: {
          700: '#222222',
          500: '#444444',
          300: '#999999',
          200: '#F2F4F6',
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
        '10xl': '6.25rem', //100px
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
        'header-school-symbol': "url('/images/header/symbol.png')",
        'header-team-introduction': "url('/images/header/introduction.png')",
        'booth-banner': "url('/images/booth/booth-banner.png')",
        'tino-thumbs-up': "url('/images/tinos/tino-thumbs-up.png')",
        'back-arrow': "url('/icons/arrow.png')",
        'more-arrow': "url('/icons/arrow-right.png')",
        'slide-banner-1': "url('/images/banner/slide-banner-1.png')",
        'slide-banner-2': "url('/images/banner/slide-banner-2.png')",
        'tino-sing': "url('/images/tinos/tino-sing.png')",
        'booth-reservation-status': "url('/images/booth/booth-reservation-status.png')",
        'booth-detail-banner': "url('/images/booth/booth-detail-banner.png')",
      },
      borderRadius: {
        'lg-xl': '0.625rem', //10px
        '3xl': '1.25rem', // 20px
        '3.5xl': '1.5rem', // 24px
      },
      borderColor: (theme) => ({
        primary: 'rgba(0, 115, 240, 0.16)',
        'primary-900': theme('textColor.primary.900'),
        'primary-700': 'rgba(48, 130, 246, 0.6)',
      }),
      borderWidth: {
        1: '0.5px',
        2: '1px',
      },
      boxShadow: {
        '3xl': '0 1px 10px rgba(0, 115, 240, 0.01), 0 1px 10px rgba(0, 115, 240, 0.01)',
        '4xl': '0px 0px 16px rgba(0, 0, 0, 0.04)',
      },
    },
    screens: {
      xs: '405px',
      sm: '470px',
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
