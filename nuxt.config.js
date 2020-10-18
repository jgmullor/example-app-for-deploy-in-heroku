export default {
    head: {
        title: 'Example app for deploy in Heroku',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    css: [
        '~/assets/css/main.css'
    ],
    components: true,
    buildModules: [
        '@nuxt/typescript-build'
    ],
    modules: [
        'bootstrap-vue/nuxt'
    ]
}
