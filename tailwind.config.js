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
        title:['Syne', 'Ubuntu', 'sans-serif'],
      },
      height:{
        "display": "100dvh",
        "moreDisplay": "101dvh",
      },
      maxHeight:{
        "display": "100dvh",
      },
      width:{
        "display": "100dvw",
      },
      maxWidth:{
        "2.5xl": "45rem",
        "display": "100dvw"
      },
      fontSize:{
        title:"3.75rem",
      },
      lineHeight:{
        title: "100%",
        description: "140%",
        cTitle: "120%",
        cDescription: "150%",
        contactCTA: "87.4%",
      },
      borderRadius:{
        card: "25px",
      },
      colors:{
        "solid": "#0f0f15",
        "outline": "#e5e7eb",
        "descriptionColor": "#96979D",
      },
      backgroundImage:{
        "gradient-purple": "linear-gradient(139deg, #6121A0 0%, #3B1264 100%);"
      }
    }
  },
  plugins: [
    plugin(({addComponents, theme}) => {
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
          transform: "translate(0, -50%) !important"
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
