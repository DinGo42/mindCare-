import plugin from 'tailwindcss/plugin';
import { type Config } from 'tailwindcss';

export enum COLORS_THEME {
  GREEN_100 = 'green-100',
  GREEN_500 = 'green-500',
  GREEN_600 = 'green-600',
  GREEN_700 = 'green-700',
  BLACK_300 = 'black-300',
  BLACK_400 = 'black-400',
  BLACK_500 = 'black-500',
  BLACK_600 = 'black-600',
  ORANGE_700 = 'orange-700',
}

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        [COLORS_THEME.GREEN_100]: '#EEF3EE',
        [COLORS_THEME.GREEN_500]: '#DDE6DD',
        [COLORS_THEME.GREEN_600]: '#769D78',
        [COLORS_THEME.GREEN_700]: '#548456',
        [COLORS_THEME.BLACK_300]: '#CCDACC',
        [COLORS_THEME.BLACK_400]: '#d9d9d9',
        [COLORS_THEME.BLACK_500]: '#7D7D7D',
        [COLORS_THEME.BLACK_600]: '#333',
        [COLORS_THEME.ORANGE_700]: '#F39753',
      },
      maxHeight: {
        '4xl': '50rem',
      },
      backgroundImage: {
        'leaf-texture-therapy-item':
          "url('public/imgs/therapy-content/leaf.svg')",
        'leaf-texture-review': "url('public/imgs/review/leaf.svg')",
        'leaf-texture-contacts': "url('public/imgs/contacts/leaf.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      padding: {
        26: '6.5rem',
      },
      minWidth: {
        360: '353px',
        300: '300px',
      },
      minHeight: {
        360: '363px',
        300: '300px',
      },
      width: {
        '2.76/6': '46%',
      },
      screens: {
        '2k': '2048px',

        phoneS: '320px',
        phoneM: '480px',
        tabletS: '768px',
        tabletM: '1024px',
        PCS: '1280px',
        PCM: '1440px',
      },
      borderRadius: {
        '4xl': '40px',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.text-bold-large': {
          'font-size': '45px',
          'font-weight': '600',
          'font-family': 'bold',
          'line-height': '54px',
        },
        '.text-large': {
          'font-size': '25px',
          'font-weight': '600',
          'font-family': 'medium',
          'line-height': '32.5px',
        },
        '.text-semi-bold-large': {
          'font-size': '25px',
          'font-weight': '600',
          'font-family': 'semi-bold',
          'line-height': '32.5px',
        },
        '.text-small-medium': {
          'font-size': '20px',
          'font-weight': '400',
          'font-family': 'medium',
          'line-height': '26px',
        },
        '.text-regular': {
          'font-size': '14px',
          'font-weight': '400',
          'font-family': 'medium',
          'line-height': '21px',
        },
        '.text-regular-bold': {
          'font-size': '16px',
          'font-weight': '500',
          'font-family': 'bold',
          'line-height': '20.8px',
        },
        '.text-regular-plus': {
          'font-size': '16px',
          'font-weight': '500',
          'font-family': 'medium',
          'line-height': '16px',
        },
      });
    }),
  ],
} satisfies Config;
