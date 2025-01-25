/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.{html,js}"],
  theme: {
    fontFamily : {
        'vazir' : 'vazir',
        'lalezar' : 'lalezar',
        'poppins' : 'poppins',
        'montez' : 'montez',
        'montserrat' : 'montserrat',
        'helvetica' : 'helvetica'
    },
    container: {
      center: true,
      padding: "0.5rem",
    },
    extend: {
        content: {
            'shop': 'url("../img/hamburger.svg")',
          },
        colors: {
            'hero-color' : '#282F4F',
            'secend-color' : '#7E60BF',
            'third-color' : '#433878',
        },
        boxShadow: {
            'news': '0 4px 20px 0 rgba(0, 0, 0, 0.200)',
          }
    },
  },
  plugins: [],
};
