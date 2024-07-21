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
            light: 'rgba(0, 115, 240, 0.2)',
            lighter: 'rgba(0, 115, 240, 0.12)',
            lightest: 'rgba(0, 115, 240, 0.06)',
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
            light: 'rgba(0, 115, 240, 0.2)',
            'light-68': 'rgba(0, 115, 240, 0.68)',
            'light-16': 'rgba(0, 115, 240, 0.16)',
            'light-6': 'rgba(0, 115, 240, 0.06)',
          },
          800: {
            DEFAULT: "#F00E00",
            light: "rgba(240, 14, 0, 0.12)",
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
          500: {
            DEFAULT: '#444444',
            'light-20': 'rgba(68, 68, 68, 0.2)',
          },
          300: '#999999',
          200: '#F2F4F6',
          100: '#CCCCCC',
          50: '#EEEEEE',
        },
        'notification-bg': '#FBFCFF',
        'instagram-bg': '#F5F6F8',
        warning: '#FF5252',
        error: 'rgba(255, 109, 109, 0.16)',
      },
      backgroundColor: (theme) => ({
        ...theme('textColor'),
        'primary-900-light-12': 'rgba(0, 115, 240, 0.12)',
        'primary-900-light-16': 'rgba(0, 115, 240, 0.16)'
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
        'header-tino-logo': "url('/icons/festino-logo.svg')",
        'header-team-introduction': "url('/icons/festino-icon.svg')",
        'booth-banner': "url('/images/booth/booth-banner.png')",
        'tino-thumbs-up': "url('/images/tinos/tino-thumbs-up.png')",
        'back-arrow': "url('/icons/arrow.png')",
        'more-arrow': "url('/icons/arrow-right.png')",
        'slide-banner-1': "url('/images/banner/slide-banner-1.png')",
        'slide-banner-2': "url('/images/banner/slide-banner-2.png')",
        'slide-banner-3': "url('/images/banner/slide-banner-3.png')",
        'tino-sing': "url('/images/tinos/tino-sing.png')",
        'booth-reservation-status': "url('/images/booth/booth-reservation-status.png')",
        'booth-detail-banner': "url('/images/booth/booth-detail-banner.png')",
        'x-button': "url('/icons/x.png')",
        'instagram': "url('/icons/instagram.png')",
        'pin-icon': "url('/icons/pin.svg')",
        'tino-order-banner': "url('images/orders/tino-order-banner.png')",
        'tino-order-shortcut': "url('images/orders/tino-order-shortcut.png')",
        'back-arrow-white': "url('/icons/arrow-back-white.png')",
        'board-icon': "url('/icons/orders/board.svg')",
        'tino-cd': "url('/icons/tino-cd.svg')",
        'booth-default-image': "url('/images/booth/booth-default-image.png')",
        'booth-map': "url('/images/booth/map.svg')",
        'link-icon': "url('/icons/link.svg')",
        'error-tino': "url('/icons/tino-error.svg')",
      },
      borderRadius: {
        'lg-xl': '0.625rem', //10px
        '3xl': '1.25rem', // 20px
        '3.5xl': '1.5rem', // 24px
        '10xl': '3.125rem', //50px
      },
      borderColor: (theme) => ({
        ...theme('textColor'),
        primary: 'rgba(0, 115, 240, 0.16)',
        'primary-900': theme('textColor.primary.900'),
        'primary-700': 'rgba(48, 130, 246, 0.6)',
        'primary-700-default': theme('textColor.primary.700'),
        'secondary-300': theme('textColor.secondary.300'),
      }),
      borderWidth: {
        1: '0.5px',
        2: '1px',
      },
      boxShadow: {
        's-primary-900': '0 1px 0 0 #0073F0',
        's-secondary-500-20': '0 1px 0 0 rgba(68, 68, 68, 0.2)',
        xs: '0 0 12px 0 rgba(0, 0, 0, 0.08)',
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
