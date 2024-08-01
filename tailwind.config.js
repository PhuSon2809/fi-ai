/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/tailwind-datepicker-react/dist/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        customThin: ['Thin'],
        customXLight: ['Xlight'],
        customLight: ['Light'],
        customMedium: ['Medium'],
        customRegular: ['Regular'],
        customSemiBold: ['SemiBold'],
        customBold: ['Bold'],
        customXBold: ['XBold'],
        customBlack: ['Black'],
        customHeavy: ['Heavy'],
        customItalic: ['Italic']
      },
      colors: {
        blackMain: '#1A1A1A',
        // gray
        grey100: '#FCFCFC',
        grey200: '#F2F2F2',
        grey500: '#f5f5f5',
        grey999: '#999999',
        greyLighter: '#D1D1D6',
        greyLight: '#F8F8F9',
        greyMain: '#F6F6F7',
        // blue
        blueLight: '#E5F4FF',
        blueMain: '#5495FC',
        blueDark: '#007AFF',
        // green
        greenLightest: '#EBF9EE',
        greenLighter: '#00CA39',
        greenLight: '#31D366',
        greenMain: '#60EC8E',
        greenDark: '#34C759',
        // green neon
        greenNeonMain: '#06D7A0',
        // orange
        orangeLight: '#FFF2E6',
        orangeMain: '#FF9900',
        orangeDark: '#FE7E07',
        // yellow
        yellowMain: '#FFD020',
        // red
        redLight: '#FFEAEE',
        redMain: '#E33E3E',
        redDark: '#FF2D55',
        // purple
        purpleMain: '#9A3EE3',
        //pink
        pinkMain: '#F04770'
      },
      backgroundImage: {
        'today-vistor-card': "url('/src/assets/bg/bg-vistor-card.png')",
        earth: "url('/src/assets/bg/bg-earth.png')",
        'earth-2': "url('/src/assets/bg/bg-earth-2.png')",
        // linear
        'ln-grey-to-b': 'linear-gradient(0deg, #F2F3F5 0%, rgba(242, 243, 245, 0) 105.07%)',
        'ln-white': 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
        'ln-white-2': 'linear-gradient(180deg, #F6F9FF 0%, rgba(246, 249, 255, 0) 100%)',
        'ln-white-3': 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.44) 100%)',
        'ln-white-4': 'linear-gradient(177.49deg, rgba(242, 243, 245, 0) 2.12%, #F6F6F7 97.93%)',
        'ln-white-5': 'linear-gradient(115.46deg, #F7F9FF 3.98%, #F2F3F5 83.97%)',
        'ln-white-6': 'linear-gradient(180deg, #FFF3F3 0%, #FFFFFF 100%)',
        'ln-white-blue': 'linear-gradient(180deg, #EBF7FF 0%, #FFFFFF 100%)',
        'ln-white-blue-2': 'linear-gradient(360deg, #EBF7FF 0%, #FFFFFF 100%)',
        'ln-white-red': 'linear-gradient(180deg, #FFF3F3 0%, #FFFFFF 100%)',
        'ln-white-green': 'linear-gradient(360deg, #EDFFF5 0%, #FFFFFF 100%)',
        'ln-grey-white': 'linear-gradient(174.32deg, #F8F8F9 -0.3%, rgba(255, 255, 255, 0) 107.82%)',
        'ln-blue-green': 'linear-gradient(225deg, #60EC8E 0%, #5495FC 100%)',
        'ln-blue-green-2': 'linear-gradient(270deg, #31D366 0%, #546AFC 100%)',
        'ln-blue-pink': 'linear-gradient(180deg, #DAFCFC 0%, #F9E7FE 100%)',
        'ln-blue-pink-2': 'linear-gradient(30.41deg, #DAFCFC 2.14%, #F9E7FE 101.31%)',
        'rg-blue-green': 'radial-gradient(60.41% 60.41% at 50% 50%, #85DCFC 0%, #7A8DF1 100%)',
        'ln-red-purple': 'linear-gradient(260.59deg, #C15CFF 14.15%, #FF5454 82.29%)',
        'ln-purple-red': 'linear-gradient(91.2deg, #C15CFF 1.43%, #FF5454 85.84%)',
        'ln-purple-red-2': 'linear-gradient(51.51deg, #C15CFF 0%, #FF5454 100%)',
        'ln-blue-purple': 'linear-gradient(91.44deg, #64FBD7 -7.38%, #5383FF 66.9%)',
        'ln-green-to-b': 'linear-gradient(180deg, #9DFFB3 0%, #1AA37A 100%)',
        'ln-yellow-pink': 'linear-gradient(0deg, #F7F5CA 0%, #FFF1EB 100%)',
        'ln-blue-to-b': 'linear-gradient(180deg, #37CFFF 0%, #0D57C6 100.07%, #0F5ED6 100.07%)',
        'ln-orange': 'linear-gradient(329.43deg, #FF6B00 36.3%, #FABF26 88.8%)',
        'ln-orange-2': 'linear-gradient(308.51deg, #FE7E07 -0.02%, #FFDE67 100.01%)',
        'ln-orange-3': 'linear-gradient(360deg, #FFF6E8 0%, #FFFFFF 100%)',
        'ln-blue': 'linear-gradient(137.17deg, #64FBD7 -3.08%, #5383FF 99.14%)',
        'ln-blue-2': 'linear-gradient(180deg, #64FBD7 -0.03%, #5383FF 100.04%)',
        'ln-grey': 'linear-gradient(303.39deg, #D1E4F2 4.41%, #DEECF6 92.37%)',
        'ln-purple': 'linear-gradient(128.49deg, #CB5DFF 0%, #1D41BE 100%)',
        'ln-red-green': 'linear-gradient(270deg, #31D366 0%, #FF5454 100%)',
        'ln-yellow': 'linear-gradient(199.9deg, #FFFFFF 0.09%, #F6F9DB 99.92%)',
        'ln-green-orange': 'linear-gradient(270deg, #FE7E07 0%, #31D366 143.93%)',
        'ln-orange-purple': 'linear-gradient(270deg, #6D59FF 0%, #FE7E07 143.93%)',
        'ln-purple-green': 'linear-gradient(270deg, #53D750 0%, #6D59FF 143.93%)'
      }
    },
    screens: {
      xs: { max: '639px' },
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    boxShadow: {
      's-1': '0px 0px 80px 0px #1A1A1A0D',
      's-2': '0px 2.58px 26.67px 0px #0000000D',
      's-3': '0px 0px 64px 0px #1A1A1A14',
      's-4': '0px 4px 80px 0px #0000000D',
      's-5': '0px 4px 80px 0px #0000001A',
      's-6': '0px 4px 64px 0px #0000000D',
      's-7': '0px 4px 32px 0px #0000001A',
      's-8': '0px 5.02px 25.12px 0px #00000029',
      's-9': '0px 6.05px 30.24px 0px #00000029',
      's-10': '0px 4px 20px 0px #0000000D',
      's-11': '0px 0px 55.19px 0px #0000000D',
      's-12': '0px 4px 40px 0px #0000000D',
      's-13': '0px 1px 5px 0px #00000029',
      's-14': '0px 0px 16.63px 0px #0000000D'
    }
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1440px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }
      })
    })
  ]
}
