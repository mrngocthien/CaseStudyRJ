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
        'main-500': '#130c1C',
        'overlay-30': 'rgba(0, 0, 0, 0.3)',
        'overlay-20': 'rgba(0, 0, 0, 0.2)'
      },
      colors: {
        'light-violet': "#eb1eff",
        'dark-violet': "#940a8d",
        'dark-green': "#00bc00",
        'dark-orange': "#E2570D",
        'light-gray': "#E2E3D7",
        'dark-gray': "#7F7D7D",
        'light-purple': "#9b4de0"
      },
      keyframes: {
        'slide-right': {
          '0%': {
            '-webkit-transform': ' translateX(500px);',
            transform: 'translateX(500px);'
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
        },
        'scale-up-image': {
          '0%': {
            '-webkit-transform': 'scale(1);',
            transform: 'scale(1);'
          },
          '100%': {
            '-webkit-transform': 'scale(1.1);',
            transform: 'scale(1.1);'
          }
        },
        'scale-down-image': {
          '0%': {
            '-webkit-transform': 'scale(1.1);',
            transform: 'scale(1.1);'
          },
          '100%': {
            '-webkit-transform': 'scale(1);',
            transform: 'scale(1);'
          }
        }
      },
      animation: {
        'slide-right': 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left': 'slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left2': 'slide-left2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'rotate-slowly': 'rotate-slowly 10s linear infinite;',
        'rotate-faster': 'rotate-faster 0.5s linear 1 both;',
        'scale-up-image': 'scale-up-image 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'scale-down-image': 'scale-down-image 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;'
      },
      flex: {
        '4': '4 4 0%'
      }
    }
  },
  plugins: [],
}