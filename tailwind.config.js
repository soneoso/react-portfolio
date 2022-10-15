/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'asgard': ['asgard'],
        'rubinski': ['rubinski'],
        'roboto': ['roboto'],
        'fulgent': ['fulgent'],
        'blackbird': ['blackbird'],
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('./assets/hiphop.gif')",
        })
    },
    
  },
  plugins: [],
}
