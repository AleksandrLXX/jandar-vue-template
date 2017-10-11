/**
 * 一些调试用辅助函数或备用的特殊工具函数 
 */


const debug = (function(){
	let obj={},
		__debug__=true;
	obj.open=()=>{__debug__=true;}
	obj.close=()=>{__debug__=false;}
	Object.defineProperty(obj,"isOn",{
		get:()=>__debug__,
	})
	return obj;
})();
	


const log = function(msg, obj, division='-') {
	if(debug.isOn){
		let divisionStr="000000000000000000000000000000000".replace(/0/g,division)
		console.log(divisionStr+'\n')
		console.log(msg+'\n')
		console.log(obj);
		console.log(divisionStr+'\n')
	}
}

const assert = function(condition, 
						msg="the condition not work as expected",
						division) {
	if(debug.isOn){
	   	if (!condition) {
		     console.warn(`[jandar warn] ${msg}`)
		     if (typeof msg == 'object')
		       	log("",msg);
	  	}
    }
}

/**
 * [description] 
 * 按需调用页面，但由于添加变量后无法进行静态解析，
 * 实际上打包及下载体积并不会得到优化,推荐智助机使用
 * @Author   AleksandrLXX
 * @DateTime 2017-10-11T11:51:45+0800
 * @param    {[type]}                 path [description]
 * @return   {[type]}                      [description]
 */
const ensurePage = (path) =>{
    return resolve => {
        require.ensure([], (require) => {
            resolve(require('pages/' + path + '.vue'))
        },"pages")
    }
}

/**
 * [description] import() webpack 2 可用 可以分割成不同份 
 * 不知道为什么无法命名chunkName 推荐 移动端使用
 * @Author   AleksandrLXX
 * @DateTime 2017-10-11T11:51:38+0800
 * @param    {[type]}                 path [description]
 * @return   {[type]}                      [description]
 */
const importPage = (path) =>{
    return (resolve)=> {
       import(
       	/* webpackChunkName: "pages" */
       	"pages/" + path + ".vue").then((component)=>{resolve(component)})
    }
}

/**
 * [rem description rem格式化 使1rem 默认为设计图上100px]
 * @Author   AleksandrLXX
 * @DateTime 2017-10-11T10:23:01+0800
 * @param    {[Number]}                 PxOfDesign [设计图宽度 px]
 * @param    {Number}                 dpr        [默认为1 如果是移动设备要实现高清方案，需要配合修改viewport元标签]
 * @return   {[void]}                            [description]
 */
const rem = function(PxOfDesign,dpr=1){
    (function(doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function() {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                docEl.style.fontSize = 100 * (clientWidth / PxOfDesign) * dpr + 'px';
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
}

export {debug,log,assert,ensurePage,importPage,rem,}
export default {debug,log,assert,ensurePage,importPage,rem,}
