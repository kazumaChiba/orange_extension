
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import App from './App'
import router from './router'
import store from './store'

// Fullpage : https://github.com/alvarotrigo/fullPage.js/
import Vue from 'vue'

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBQiOSZLRvuKC0Ejo-2tLNv5v3l_qfbrW4', //AIzaSyD-Yjh575xmaPu3O-gBx_kk4AZ1Nyx_GjI
        libraries: 'places',
    },
    // Demonstrating how we can customize the name of the components
    //installComponents: true,
});

Vue.component('GmapMap', VueGoogleMaps.Map);
Vue.component('GmapMarker', VueGoogleMaps.Marker);
Vue.component('GmapInfoWindow', VueGoogleMaps.InfoWindow);

//https://www.npmjs.com/package/vue2-scrollbar


//
//import VueFullPage from 'vue-fullpage.js'
//import VueFullPageScrolOverflow from 'fullpage.js/vendors/scrolloverflow.js'
//require('fullpage.js/vendors/scrolloverflow.min.js')
//
// FontAwesome : https://github.com/FortAwesome/vue-fontawesome#usage
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

import faLightbulb from '@fortawesome/fontawesome-pro-light/faLightbulb';
import falMapMarkerAlt from '@fortawesome/fontawesome-pro-light/faMapMarkerAlt';
import falPaperPlane from '@fortawesome/fontawesome-pro-light/faPaperPlane';
import falUser from '@fortawesome/fontawesome-pro-light/faUser';
import falEnvelope from '@fortawesome/fontawesome-pro-light/faEnvelope';
import falPhone from '@fortawesome/fontawesome-pro-light/faPhone';
import falMapMarker from '@fortawesome/fontawesome-pro-light/faMapMarker';
import falQuestionCircle from '@fortawesome/fontawesome-pro-light/faQuestionCircle';

import fabFacebook from '@fortawesome/fontawesome-free-brands/faFacebookF';
import fabTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import fabGoogle from '@fortawesome/fontawesome-free-brands/faGoogle';
import fabLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

fontawesome.library.add(faLightbulb);
fontawesome.library.add(fabFacebook);
fontawesome.library.add(fabTwitter);
fontawesome.library.add(falMapMarkerAlt);
fontawesome.library.add(falPaperPlane);
fontawesome.library.add(falUser);
fontawesome.library.add(falEnvelope);
fontawesome.library.add(falPhone);
fontawesome.library.add(falMapMarker);
fontawesome.library.add(falQuestionCircle);
fontawesome.library.add(fabGoogle);
fontawesome.library.add(fabLinkedinIn);


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

//Vue.use(VueFullPage);
Vue.use(ElementUI);

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});