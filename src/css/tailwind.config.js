module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#2b81d3',
          100: '#F2F7FC',
          200: '#C5D4EB',
          300: '#99ABD9',
          400: '#4D77B6',
          500: '#2b81d3',
          600: '#1E5A9F',
          700: '#143F73',
          800: '#0D2A4E',
          900: '#071A31',
        },
        neutral: {
          main: '#FFFFFF',
        },
        base: {
          main: '#0c243b',
          100: '#F2F4F8',
          200: '#C4D1E0',
          300: '#95AED0',
          400: '#4069A0',
          500: '#2F4F79',
          600: '#264366',
          700: '#1B2D43',
          800: '#131F2E',
          900: '#0A111B',
        },
        green: {
          main: '#67a37a',
          100: '#F0F7F2',
          200: '#D1E8D8',
          300: '#B3D8BD',
          400: '#77B187',
          500: '#3A8A51',
          600: '#347A49',
          700: '#225031',
          800: '#183D23',
          900: '#0E2916',
        },
        red: {
          main: '#A03D3D',
          100: '#F7E3E3',
          200: '#E8B6B6',
          300: '#D98989',
          400: '#C14D4D',
          500: '#A03D3D',
          600: '#8C3333',
          700: '#6F2727',
          800: '#571D1D',
          900: '#3E1313',
        },
        tags: 
          {
            lightblue: {
              bg: "#89CFF0",
              text: "#333333"
            },
            coral: {
              bg: "#FF7F50",
              text: "#FFFFFF"
            },
            yellow: {
              bg: "#FDFD96",
              text: "#404040"
            },
            green: {
              bg: "#98FB98",
              text: "#2C3E50"
            },
            gray: {
              bg: "#708090",
              text: "#EAEAEA"
            }
        }
      },
      boxShadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.16)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.16)',
        default: '0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.625rem',
        '5xl': '3.25rem',
        '6xl': '5.5rem',
      },
      inset: {
        '1/2': '50%',
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      lineHeight: {
        none: '1',
        tighter: '1.125',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        '3': '.75rem',
        '4': '1rem',
        '5': '1.2rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
      },
      minWidth: {
        '10': '2.5rem',
        '48': '12rem',
      },
      opacity: {
        '90': '0.9',
      },
      scale: {
        '98': '.98'
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)', },
          '50%': { transform: 'translateY(-5%)', },
        },
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-within'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
