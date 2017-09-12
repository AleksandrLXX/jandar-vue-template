import Vue from 'vue'
import Vuex from 'vuex'
import {getdata,getQR,getResult,baseurl} from 'api'
//使用vuex管理全局状态
Vue.use(Vuex)
let baseURL=baseurl+'KSaleMonitor'

const state={
	msg:'jandar',
	initial_goods:[
	],
	goodSelected:{
		}
}
const mutations={
	setGoods(state,payload){
		let goods=[];
		payload.map((item)=>{
			item.IMGBIG=baseURL+item.IMGBIG;
			item.IMGSMALL=baseURL+item.IMGSMALL;
			goods.push(item)
		})
		state.initial_goods=goods;
	},
	setGoodSelected(state,payload){
		state.goodSelected=payload;
	}
}
const actions={
	getDataFromRemote({state,commit}){
		return new Promise((resolve,reject)=>{
			getdata().then((result)=>{
				console.log(result)
				commit('setGoods',result)
			},err=>{reject(err)})
		})
	},
	getQRFromRemote({state,commit},payload){
		console.log(payload)
		return new Promise((resolve,reject)=>{
			getQR(payload).then((result)=>{
				console.log(result)
				resolve({brcode:result.brcode,sn:result.sn})
			},(err)=>{reject(err)})
		})

	},
	getResultFromRemote({state,commit},payload){
		console.log(payload)
		return new Promise((resolve,reject)=>{
			getResult(payload).then((result)=>{
				console.log(result)
				resolve(result.status)
				
			})
		})

	},
}

const getters={
	goods(){

	},
	totalPage(state){
		let num=Math.ceil(state.initial_goods.length/12)
		return num
	}
}



 const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

 export default store;