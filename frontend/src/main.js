import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'
import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkJydW5vIiwiZW1haWwiOiJjb250aS5icnVAZ21haWwuY29tIiwiYWRtaW4iOjEsImlhdCI6MTYwMTIyODA2NywiZXhwIjoxNjAxNDg3MjY3fQ.L_VjNV5wKATKmuSGNwv5IBUXO7XWHElNpBAX8d3EmPA'


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')