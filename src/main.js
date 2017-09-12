// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import MuseUI from 'muse-ui'

import './util/date.js'
import 'muse-ui/dist/muse-ui.css'
import './google_font.css'
import './google_icon.css'
import './main.scss'

import FastClick from 'fastclick'
import {jdSchedule} from './util/index.js'

// jdSchedule.start()
window.jdSchedule=jdSchedule;


//取消点击延迟
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

//打印工具函数 
window.assert = function(condition, msg) {
  if (!condition) {
    console.log(`[regis] ${msg}`)
    if (typeof msg == 'object')
      console.log(msg)
  }
}
Vue.use(MuseUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
