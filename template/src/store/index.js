import Vue from 'vue'
import Vuex from 'vuex'
import {baseurl} from 'api'
//使用vuex管理全局状态
Vue.use(Vuex)
let baseURL=baseurl+''

const state={
	msg:"vue template for Jandar"
}
const mutations={
	
}
const actions={}

const getters={}



 const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

 export default store;