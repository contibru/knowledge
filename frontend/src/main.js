import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'
import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkJydW5vIiwiZW1haWwiOiJjb250aS5icnVAZ21haWwuY29tIiwiYWRtaW4iOjEsImlhdCI6MTU5OTQ4NzE2NSwiZXhwIjoxNTk5NzQ2MzY1fQ.hJj-ZiVOPcrP_vemZB79nhOjghyl7_tGQIYHXTkYk14'


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')