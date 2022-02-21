function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        paper: 'url(/images/texture.png)',
        home: 'url(/images/bg-home.png)',
        story: 'url(/images/bg-story.png)',
        'story-mobile': 'url(/images/bg-story-mobile.png)',
        volunteer: 'url(/images/volunteer-bg-plain.png)',
        footer: 'url(/images/footer-bg.svg)',
        about: "url('/images/bg-about.png')",
        blob: 'url(/images/blob.svg)',
        committee: 'url(/images/bg-committee.png)',
        positionOpen: 'url(/images/bg-positionOpenCover.svg)',
        newspaper: 'url(/images/bg-newspaper.png)',
        'newspaper-content': 'url(/images/bg-newspaper-content-new.jpg)',
        'book-cover': 'url(/svg/book-bg.svg)',
      },
      dropShadow: {
        'solid-sm': '-1px 1px rgb(33 33 33)',
        'solid-md': '-2px 2px rgb(33 33 33)',
        'solid-lg': '-5px 5px rgb(33 33 33)',
        'solid-xl': '-8px 8px rgb(33 33 33)',
        'solid-2xl': '-10px 10px rgb(33 33 33)',
        'solid-3xl': '-12px 12px rgb(33 33 33)',
      },
      fontFamily: {
        fivo: ['Fivo Sans Modern'],
        lucki: ['Luckiest Guy'],
        pilow: ['Pilowlava'],
        sympath: ['Sympathizing'],
      },
      colors: {
        //#region  //*=========== Primary ===========
        primary: {
          50: withOpacity('--tw-clr-primary-50'),
          100: withOpacity('--tw-clr-primary-100'),
          200: withOpacity('--tw-clr-primary-200'),
          300: withOpacity('--tw-clr-primary-300'),
          400: withOpacity('--tw-clr-primary-400'),
          500: withOpacity('--tw-clr-primary-500'),
          600: withOpacity('--tw-clr-primary-600'),
          700: withOpacity('--tw-clr-primary-700'),
          800: withOpacity('--tw-clr-primary-800'),
          900: withOpacity('--tw-clr-primary-900'),
        },
        //#endregion  //*======== Primary ===========
        //used for primary colors
        cred: '#eb5d37',
        //accent color
        cdark: '#212121',
        clight: '#f7f5f2',
        cgreen: '#009F4F',
        cblue: '#2f65e7',
        cyellow: '#e7fa51',
        cpurple: '#780ae7',
        cpink: '#ffbcf0',
        //text color
        cgray: '#efedea',
      },
      fill: {
        primary: {
          50: withOpacity('--tw-clr-primary-50'),
          100: withOpacity('--tw-clr-primary-100'),
          200: withOpacity('--tw-clr-primary-200'),
          300: withOpacity('--tw-clr-primary-300'),
          400: withOpacity('--tw-clr-primary-400'),
          500: withOpacity('--tw-clr-primary-500'),
          600: withOpacity('--tw-clr-primary-600'),
          700: withOpacity('--tw-clr-primary-700'),
          800: withOpacity('--tw-clr-primary-800'),
          900: withOpacity('--tw-clr-primary-900'),
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        draw: 'draw 25s linear infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        draw: {
          '0%, 100%': {
            'stroke-dashoffset': '3000',
          },
          '50%': {
            'stroke-dashoffset': '0',
          },
        },
        'draw-reverse': {
          '0%, 100%': {
            'stroke-dashoffset': '0',
          },
          '50%': {
            'stroke-dashoffset': '30000',
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '100% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
