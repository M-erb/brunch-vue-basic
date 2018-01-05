module.exports.vueGoogleMaps = Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCG07gqX6NHORs16YnOxEOlnaf63JuB_ms'
    },
    // https://github.com/xkjyeah/vue-google-maps/blob/vue2/API.md
});

module.exports.morphling = Vue.use(Morphling.default)

module.exports.root = new Vue({
    el: '#app',
    data: {
        location: window.location,
        apiOrigin: location.origin + '/wp-json/wp/v2/',
        apiOriginAcf: location.origin + '/wp-json/acf/v3/',
        sitePages: [],
        htmlBody: document.querySelector('body'),
        // visitBefore: window.sessionStorage.getItem('visitBefore'),
    },
    methods: {
        getPages() {
            var vm = this
            axios.get(vm.apiOrigin + "pages")
                .then(function (res) {
                    var sitePagesArray = []
                    for (var i = 0; i < res.data.length; i++) {
                        sitePagesArray.push(res.data[i])
                    }
                    // vm.sitePages = JSON.stringify(sitePagesArray)
                    vm.sitePages = sitePagesArray
                    vm.htmlBody.classList.remove('no_scroll')
                }).catch(function (err) {
                    console.error('There was an error getting pages: ', err)
                })
        },
        activate() {
            // this.htmlBody.classList.add('no_scroll')
            // this.getPages()
        },
        round(value, exp) {
            if (typeof exp === 'undefined' || +exp === 0)
                return Math.round(value);
            value = +value;
            exp = +exp;
            if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
                return NaN;
            // Shift
            value = value.toString().split('e');
            value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));
            // Shift back
            value = value.toString().split('e');
            return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
        },
        getParamByName(name, url) {
            if(!url) url = location.href
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]")
            var regexS = "[\\?&]" + name + "=([^&#]*)"
            var regex = new RegExp(regexS)
            var results = regex.exec(url)
            return results == null ? null : decodeURIComponent(results[1])
        }
    },
    mounted: function () {
        var vm = this
        vm.activate()
    }
})

/* WORDPRESS REST API INFO=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

/wp-json/wp/v2/product?include=175,177,181

-----ACF REST API
ACF - How to call post types only custom fields
/wp-json/acf/v3
/wp-json/acf/v3/posts - will list all posts BUT only their ACF custom fields

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
