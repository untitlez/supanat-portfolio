/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import forms from '@tailwindcss/forms';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  plugins: [
    daisyui,
    forms,
  ],
};
