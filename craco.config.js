// craco.config.js
module.exports = {
    style: {
        prefix: 'tw-',
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
}