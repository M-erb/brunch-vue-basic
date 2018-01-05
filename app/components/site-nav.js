var headroom
module.exports.headRoom = headroom
module.exports.siteNav = Vue.component('site-nav', {
  data() {
    return {
      location: window.location,
      isMobiNavOpen: false
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
    var el = document.querySelector('#masthead.headroom')
    headroom = new Headroom(el)
    headroom.init()
  }
})
