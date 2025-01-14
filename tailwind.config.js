module.exports = {
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'dark', 'dark-hover', 'dark-group-hover', 'dark-active', 'dark-even', 'dark-odd'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'dark', 'dark-hover', 'dark-active'],
    height: ['responsive', 'hover', 'group-hover'],
    opacity: ['responsive', 'hover', 'group-hover'],
    display: ['responsive', 'hover', 'group-hover', 'dark'],
    border: ['responsive', 'hover', 'group-hover'],
    borderColor: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'dark', 'dark-hover', 'dark-active'],
    padding: ['responsive', 'group-hover'],
    translate: ['responsive', 'hover', 'group-hover']
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
}
