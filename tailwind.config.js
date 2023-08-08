/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container:{
      center: true,
      padding: "2rem",
      screens:{
        sm: "95%",
        xl: "1240px"
      }
    },
    extend:{

      fontFamily:{
        title:['Syne', 'sans-serif'],
      },
      maxWidth:{
        "2.5xl": "45rem",
      },
      fontSize:{
        title:"3.75rem",
      },
      lineHeight:{
        title: "100%",
        description: "140%",
        cTitle: "120%",
        cDescription: "150%",

      },
      borderRadius:{
        card: "25px",
      },
      colors:{
        "solid": "#0f0f15",
      }
    }
  },
  plugins: [
    plugin(({addComponents, theme, addUtilities}) => {
      addComponents({
        '.a-centered': {
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: "translate(-50%, -50%)"
        },
        '.a-x-centered': {
          position: 'absolute',
          left: '50%',
          transform: "translate(-50%, 0)"
        },
        '.a-y-centered': {
          position: 'absolute',
          top: '50%',
          transform: "translate(0, -50%)"
        },
        '.title': {
          fontFamily: theme('fontFamily.title-font'),
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: "1.166666667em",
        }

      })
    }),
  ],
}
