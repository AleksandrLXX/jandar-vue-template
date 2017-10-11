// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import MuseUI from 'muse-ui'
import VueRouter from 'vue-router'
import routes from './router'

import 'muse-ui/dist/muse-ui.css'
import 'styles/google_icon.css'
import 'styles/main.scss'

import FastClick from 'fastclick'
import {jdSchedule,jdDialog,aSocket,jdFn} from './util/index.js'
import {debug,log,assert,ensurePage,importPage} from './util/assist.js'

$socket.stop();
$jdSchedule.remove('sendsocket用户信息获取')

Object.assign(window,{

  $jdSchedule:jdSchedule,
  $jdSchedule:jdDialog,
  $socket:aSocket,
  $fn:jdFn,
  jdDebug:debug,
  log,
  assert,
  ensurePage,
  importPage
})



//取消点击延迟
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(VueRouter)
Vue.use(MuseUI)

const router = new VueRouter({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
        return { x: 0, y: to.meta.savedPosition ||0}
    }
  }
})

const beforeEach = (to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) { 
    
      to.matched
      .filter(record=>record.meta.requiresAuth)
      .every(record=>store.state.user.userInfo.userauth[record.name])
      ?next()
      :function(){
      next(false);
      $dialog.alert({
                 theme:'ios',
                 title: '注意',
                 content: '您没有查看该业务的权限',
                 okText: '确定'
               });}();

    } else {
      next(); 
    }
}

router.beforeEach(beforeEach);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
