import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import VueFormWizard from 'vue-form-wizard'


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Import Vue Wizard
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import router from './router'

Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
//
Vue.use(VueFormWizard)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
