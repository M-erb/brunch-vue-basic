import Vue from 'vue'

module.exports.siteNav = Vue.component('site-nav', {
    template: `
    <header>
        {{test}}
    </header>`,
    data() {
        return {
            location: window.location,
            isMobiNavOpen: false,
            test: 'hello world'
        }
    },
    props: [],
    methods: {
        toggleMobiNav() {
            if (this.isMobiNavOpen) {
                this.isMobiNavOpen = false
                this.$root.htmlBody.classList.remove('no_scroll')
            } else {
                this.isMobiNavOpen = true
                this.$root.htmlBody.classList.add('no_scroll')
            }
        },
    },
    mounted: function() {
        console.log('site-nav.js')
    }
})
