/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx, ts, tsx}",
    "./public/index.html"
],
  theme: {
    extend: {
      backgroundColor: {
        'main-100': "#2f2739",
        'main-200': '#221A2D',
        'main-300': '#170F23',
        'main-400': '#120822',
        'main-500': '#130c1C'
      },
      colors: {
        'light-violet': "#eb1eff",
        'dark-violet': "#940a8d"
      },
      keyframes: {
        'slide-right': {
          '0%': {
            '-webkit-transform': ' translateX(-500px);',
            transform: 'translateX(-500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left': {
          '0%': {
            '-webkit-transform': ' translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left2': {
          '0%': {
            '-webkit-transform': ' translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'rotate-slowly': {
          '0%': {
            '-webkit-transform': ' rotate(0);',
            transform: 'rotate(0);'
          },
          '100%': {
            '-webkit-transform': 'rotate(360deg);',
            transform: 'rotate(360deg);'
          }
        },
        'rotate-faster': {
          '0%': {
            '-webkit-transform': ' rotate(360deg);',
            transform: 'rotate(360deg);',
            'border-radius': '9999px'
          },
          '100%': {
            '-webkit-transform': 'rotate(0);',
            transform: 'rotate(0);'
          }
        }
      },
      animation: {
        'slide-right': 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left': 'slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left2': 'slide-left2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'rotate-slowly': 'rotate-slowly 10s linear infinite;',
        'rotate-faster': 'rotate-faster 0.5s linear 1 both;'
      },
      flex: {
        '4': '4 4 0%'
      }
    },
    screens: {
      '1600': '1600px'
    }
  },
  plugins: [],
}