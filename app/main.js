// directives
import {
    PageYPix,
    defaultOffset,
    defaultClassName,
    defaultDuration,
    defaultDely,
    isListenerLoaded,
    aniList,
    createScrollEvent,
    scrollEvent,
    ani
} from './directives/viewport-scroll'
// Components
import contactUs from './components/contact-us/contact-us'
import contactPeole from './components/contact-us/contact-people'
import homePage from './components/home/home-page'
import homeHero from './components/home/home-hero'
import photoWheel from './components/home/photo-wheel'
import homeFullCta from './components/home/home-full-cta'
import followUsBar from './components/home/follow-us-bar'
import {headRoom, siteNav} from './components/site-nav'
import peoplePage from './components/people/people-page'
import personExcec from './components/people/person-excec'
import person from './components/people/person'
import marketSectors from './components/projects/market-sectors'
import project from './components/projects/project'
// Plugin Config
// require('vue-google-maps')
// import { load, Map, Marker } from 'vue-google-maps'
// root of app
import {vueGoogleMaps, morphling, root} from './root'

document.addEventListener('DOMContentLoaded', function () {
    // do your setup here
    console.log('Initialized app');
})
