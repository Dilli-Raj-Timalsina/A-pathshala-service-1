/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cta-green-gradient':
          'linear-gradient(90deg, #3CB371 0%, #2E8B57 100%)',
        'cta-blue-gradient': 'linear-gradient(90deg, #4169E1 0%, #1E90FF 100%)',
        'header-light-blue-gradient':
          'linear-gradient(90deg, #BFE3F3 0%, #ADD8E6 100%)',
        'header-white-green-gradient':
          'linear-gradient(90deg, #FFFFFF 0%, #2E8B57 100%)',
        'nav-neutral-gradient':
          'linear-gradient(90deg, #F5F5F5 0%, #E8E8E8 100%)',
        'nav-light-blue-gradient':
          'linear-gradient(90deg, #BFE3F3 0%, #ADD8E6 100%)',
        'nav-green-gradient':
          'linear-gradient(90deg, #3CB371 0%, #2E8B57 100%)',
        'content-white-gradient':
          'linear-gradient(90deg, #FFFFFF 0%, #F2F2F2 100%)',
        'content-light-blue-gradient':
          'linear-gradient(90deg, #BFE3F3 0%, #ADD8E6 100%)',
        'content-green-gradient': 'linear-gradient(to right, #000000, #e74c3c)',
        'sidebar-neutral-gradient':
          'linear-gradient(90deg, #F5F5F5 0%, #E8E8E8 100%)',
        'sidebar-light-blue-gradient':
          'linear-gradient(90deg, #BFE3F3 0%, #ADD8E6 100%)',
        'sidebar-green-gradient':
          'linear-gradient(90deg, #3CB371 0%, #2E8B57 100%)',
        'testimonial-gradient':
          'linear-gradient(to bottom, rgba(235,233,249,1) 0%,rgba(216,208,239,1) 50%,rgba(206,199,236,1) 51%,rgba(193,191,234,1) 100%)',
        'form-gradient': 'linear-gradient(to right, #ffefba, #ffffff);',
      },
      colors: {
        secondary: '#2E8B57',
        neutral: '#F5F5F5',
      },
    },
  },

  plugins: [],
};
