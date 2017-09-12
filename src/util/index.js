import jQuery from "jquery"
var $ = jQuery;

// jd_namespace.js

/**@class 类 jd 建达名称空间 全称 jandar
*引到正个JS的第一句来定义公司的名称空间
*@version 当前版本 2.0.14
*@author 徐翔
*@see <a href="mailto:china_xuxiang@163.com" target="_blank">email:china_xuxiang@163.com</a >
*/
var jandar={};
var jd= jandar;



/**@class 类 jd.plugins 组件类
*@author 徐翔
*@see <a href="mailto:china_xuxiang@163.com" target="_blank">email:china_xuxiang@163.com</a >
*/
jd.plugins={};
var $plug=jd.plugins

/**@class 类 Collection 集合对象
*@author 徐翔
*@see <a href="mailto:china_xuxiang@163.com" target="_blank">email:china_xuxiang@163.com</a >
*/
jd.collection={};


/**@class 类 jd.global 全局对象
*@author 徐翔
*@see <a href="mailto:china_xuxiang@163.com" target="_blank">email:china_xuxiang@163.com</a >
*/
jd.global={};var $g=jd.global;
jd.global.socket_host="ws://localhost:9000";
jd.global.serverTimeDifference=0;
/**@class 类 jd.page 页面名称空间(方法 变量)*/
jd.page={};
var $page=jd.page;


/**@class 类 jd.page.config 所有服务器端读取的配置信息对象*/
jd.page.config={};var $c=$page.config

/**@class 类 jd.page.variable 页面自定义变量*/
jd.page.variable={};var $v=$page.variable;


/**@class 类 jd.page.fn 页面自定义方法*/
jd.page.fn={};var $f=$page.fn;

/**@class 类 jd.page.qt 调用qt.js中的方法*/
jd.page.qt={};var $qt=$page.qt;


/**@class 类 jd.page.web 调用web.js中的方法*/
jd.page.web={};var $web=$page.web;

/**@class 类 jd.msg 提示消息汇总*/
jd.msg={};var $msg=jd.msg;


/**@class 类 jd.fx */
jd.fx={};var $fx=jd.fx;

// jd_fn.js

 /**@class 类 jd.fn 通用函数方法
*@version 当前版本 2.0.14.1115
*@author 徐翔
*@see <a href="mailto:china_xuxiang@163.com">email:china_xuxiang@163.com</a >
*/
jd.fn={};

var $fn=jd.fn;
var jdFn = $fn;
/**Hello World*/
$fn.helloWorld =function(){
	console.log("jandar say : hello World!");
}
jd.fn.helloWorld();

/**@class String 原生字符串类*/




/**批量替换所有匹配的字符串 大小写敏感
*@param {String} s1 源字符串
*@param {String} s2 目标字符串

*/
String.prototype.replaceAll  = function(s1,s2){

	return this.replace(new RegExp(s1,"gm"),s2);
}

/**批量替换所有匹配的字符串 大小不敏感
*@param {String} s1 源字符串
*@param {String} s2 目标字符串
*/
String.prototype.replaceAll_i  = function(s1,s2){

	return this.replace(new RegExp(s1,"gmi"),s2);
}


/**原型方式修改，左右去空格
*/
String.prototype.trim=function(){
	return this.replace(/(^\s*)|(\s*$)/g, "");
}

/**原型方式修改，左去空格  */
String.prototype.ltrim=function(){
	return this.replace(/(^\s*)/g,"");
}

/**原型方式修改，右去空格  */
String.prototype.rtrim=function(){
	return this.replace(/(\s*$)/g,"");
}

/**原型方式修改，求真实长度 中文算2个*/
String.prototype.realLength=function(){
	return this.replace(/[^\x00-\xff]/g, '__').length;
}



/**@class Array 原生字符串类*/


/**原型方式修改，克隆数组元素*/
Array.prototype.clone=function(){
	return [].concat(this);
}

/**原型方式修改 ，字符串是否以STR字符开头
 * @param {String} str 比较字符串
 * @return {Boolean} 返回 true|false
 * */
String.prototype.startsWith = String.prototype.startWith = function(str) {
  return this.indexOf(str) == 0;
}

/**原型方式修改 ，字符串是否以STR字符结尾
 * @param {String} str 比较字符串
 * @return {Boolean} 返回 true|false
 * */
String.prototype.endsWith = String.prototype.endWith = function(str) {
	var i = this.lastIndexOf(str);
  return i>=0 && this.lastIndexOf(str) == this.length-str.length;
}

/**原型方式修改 ，字符串左加一定数量的字符，如左加4个空格 “0.99”.leftPad(' ',4)
 * @param {String} c 字符串
 * @param {String} count 重复次数
 * @return {String} 返回处理好的串
 * */
String.prototype.leftPad = function(c,count){
	if(!isNaN(count)){
		var a = "";
		for(var i=this.length;i<count;i++){
			a = a.concat(c);
		}
		a = a.concat(this);
		return a;
	}
	return null;
}

/**原型方式修改 ，字符串右加一定数量的字符，如右加4个空格 “0.99”.rightPad(' ',4)
 * @param {String} c 字符串
 * @param {String} count 重复次数
 * @return {String} 返回处理好的串
 * */
String.prototype.rightPad = function(c,count){
	if(!isNaN(count)){
		var a = this;
		for(var i=this.length;i<count;i++){
			a = a.concat(c);
		}
		return a;
	}
	return null;
}


/**原型方式修改 ，在数组中的INDEX的位置插入数据
 * @param {Int} index 插入位置
 * @param {Object} data 插入对象
  * @return {Array} 返回处理好的数组对象
 * */
Array.prototype.insert = function(index,data){
	if(isNaN(index) || index<0 || index>this.length) {
		this.push(data);
	}else{
		var temp = this.slice(index);
		this[index]=data;
		for (var i=0; i<temp.length; i++){
			this[index+1+i]=temp[i];
		}
	}
	return this;
}

/**原型方式修改 ，删除数组中的index位置对象，如果dust为ture，则返回被删除的元素
 * @param {Int} index 插入位置
 * @param {Boolean} dust 是否返回被删除的对象
 * @return {Array} 返回 dust 或数组
 * */
Array.prototype.remove = function(index,dust){//
	if(dust){
	var dustArr=[];
	  for(var i=0;i<this.length;i++){
		if(index == this[i]){
			dustArr.push(this.splice(i, 1)[0]);
		}
	  }
	  return dustArr;
	}

  for(var i=0;i<this.length;i++){
    if(index == this[i]){
		this.splice(i, 1);
    }
  }
  return this;
}


/**原型方式修改 ，查找对象在数组中的index位置
 * @param {Object} obj 对象
 * @return {int} 返回索引位置
 * */
Array.prototype.indexOf = function(obj){
	var len = this.length;
	for(var i=0;i<len;i++){
		if (this[i]==obj)
			return i;
	}
	return -1;
}


/**原型方式修改 ，遍历数组，并一一回调传入的方法
 * @param {Function} func 对象
 * */
Array.prototype.each = function(func){
	var len = this.length;
	for(var i=0;i<len;i++){
		try{
			func(this[i],i);
		}catch(ex){
			//alert("Array.prototype.each:"+ex.message);
		}
	}
}


/**对Date的扩展，将 Date 转化为指定格式的String
 * @param {String} fmt 格式
*月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
*年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
*例子：
*(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
*(new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
*/
Date.prototype.Format = function (fmt) {
 var o = {
     "M+": this.getMonth() + 1, //月份
     "d+": this.getDate(), //日
     "h+": this.getHours(), //小时
     "m+": this.getMinutes(), //分
     "s+": this.getSeconds(), //秒
     "q+": Math.floor((this.getMonth() + 3) / 3), //季度
     "S": this.getMilliseconds() //毫秒
 };
 if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
 for (var k in o)
 if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
 return fmt;
}




/**setTimeout原型修改，支持传参数  */
var _st = window.setTimeout;
window.setTimeout = function(fRef, mDelay) {
  if(typeof fRef == 'function'){
	  var argu = Array.prototype.slice.call(arguments,2);
	  var f = (function(){ fRef.apply(null, argu); });
	  return _st(f, mDelay);
  }
  return _st(fRef,mDelay);
}

jd.collection.HashMap=function(){
	/**定义长度*/
	var length = 0;
	//创建一个对象
	var obj = new Object();

	/**
	* 判断Map是否为空
	*@return {Boolean} 返回 true 或 false
	*/
	this.isEmpty = function(){
		return length == 0;
	};

	/**
	* 判断对象中是否包含给定Key
	* @param {String} key 键
	* @return {Object} 值
	*/
	this.containsKey=function(key){
		return (key in obj);
	};

	/**
	* 判断对象中是否包含给定的Value
	* @param {String} value 值对象
	* @return {Boolean} 返回 true 或 false
	*/
	this.containsValue=function(value){
		for(var key in obj){
			if(obj[key] == value){
				return true;
			}
		}
		return false;
	};

	/**
	*向map中添加数据
	* @param {String} key 键
	* @param {Object} value 值对象
	* @return void
	*/
	this.put=function(key,value){
		if(!this.containsKey(key)){
			length++;
		}
		obj[key] = value;
	};

	/**
	* 根据给定的Key获得Value
	* @param {String} key 键
	* @return {Object} 值
	*/
	this.get=function(key){
		return this.containsKey(key)?obj[key]:null;
	};

	/**
	* 根据给定的Key删除一个值
	* @param {String} key 键
	* @return void
	*/
	this.remove=function(key){
		if(this.containsKey(key)&&(delete obj[key])){
			length--;
		}
	};

	/**
	* 获得Map中的所有Value
	* @return {Array} value集合
	*/
	this.values=function(){
		var _values= new Array();
		for(var key in obj){
			_values.push(obj[key]);
		}
		return _values;
	};

	/**
	* 获得Map中的所有Key
	* @return {Array} key集合
	*/
	this.keySet=function(){
		var _keys = new Array();
		for(var key in obj){
			_keys.push(key);
		}
		return _keys;
	};

	/**
	* 获得Map的长度
	* @return {int} 集合中的对象数量
	*/
	this.size = function(){
		return length;
	};

	/**
	* 清空Map
	* @return void
	*/
	this.clear = function(){
		length = 0;
		obj = new Object();
	};
}
/**
 * 一个可以重复利用的promise
 */
var isPromise = function (value) {
    return value && typeof value.then === "function";
};
var defer = function () {
    var pending = [], value;
    return {
        resolve: function (_value) {
            if (pending) {
                value = ref(_value); // values wrapped in a promise
                for (var i = 0, ii = pending.length; i < ii; i++) {
                    var callback = pending[i];
                    value.then(callback); // then called instead
                }
                // pending = undefined;
            }
        },
        promise: {
            then: function (_callback) {
                var result = defer();
                // callback is wrapped so that its return
                // value is captured and used to resolve the promise
                // that "then" returns
                var callback = function (value) {
                    result.resolve(_callback(value));
                };
                if (pending) {
                    pending.push(callback);
                } else {
                    value.then(callback);
                }
                return result.promise;
            }
        }
    };
};

var ref = function (value) {
    if (value && typeof value.then === "function")
        return value;
    return {
        then: function (callback) {
            return ref(callback(value));
        }
    };
};
jd.fn.defer=defer;
/**把xml字符串转为DOM对象
 * @param {String} xml XML字符串
 * @return {Object} DOM 对象
 * */
jd.fn.xml2Dom = function(xml){
	var doc;
	if(isIE){
		try{
			doc = new ActiveXObject("Microsoft.XMLDOM");
		}catch(ex){
			doc = new ActiveXObject("Msxml2.DOMDocument");
		}
		doc.loadXML(xml);
	}else{
	   var p =new DOMParser();
	   doc= p.parseFromString(xml,"text/xml");
	}
	return doc;
}

/**把json对象转为json字符串
 * @param {Object} O json对象
 * @return {String} json字符串
 * */
jd.fn.json2string=function(O) {
	return JSON.stringify(O);
}


/**把json字符串为json对象转
 * @param {Object} str json字符串
 * @return {String} json对象
 * */
jd.fn.string2json=function(str) {
	return (typeof str=="string")?eval('(' + str + ')'):str;
}



/**左右去空格
*@param {String} str  目标字符串
*@return {String}  返回去空后的字符串
*/
jd.fn.trim=function(str){
   return str.replace(/(^\s*)|(\s*$)/g, "");
}


/**左去空格
*@param {String} str  目标字符串
*@return {String}  返回去空后的字符串
*/
jd.fn.ltrim=function(str){
	return str.replace(/(^\s*)/g,"");
}

/**右去空格
*@param {String} str 目标字符串
*@return {String}  返回去空后的字符串
*/
jd.fn.rtrim=function(str){
	return str.replace(/(\s*$)/g,"");
}


/**判断是否是空的
*@param {String} s  传入字符串
*@return {Boolean}  返回TRUE FALSE
*/
jd.fn.isEmpty=function(s){
	if(s==null || s=='undefined' || s=="")
		return true;
	return false;
}
/**
 * 将传入的字符串后面补0到len长度
 * @param {String} string 传入的字符串
 * @param {int} len 传入的长度
 * @return {String} 返回补齐后的字符串
 */
jd.fn.fillLong=function(string, len){
	var length=string.realLength();
	for(var i = length; i < len; i++){
		string = string + 0x00;
	}
	return string;
}

/**获取当前时间
*@param {int} type  传入类型选择不同的输出字符串格式<br>
*type=null - 时间[17:23:24]<br>
*else 	   - 17:23:24<br>
*@return {String}  返回当前时间字符串
*/
jd.fn.getTime = function(type){
    var myDate = new Date();
    var hours=myDate.getHours().toString();       //获取当前小时数(0-23)
    if(hours.length==1)
		hours="0"+hours;
    var minutes=myDate.getMinutes().toString();     //获取当前分钟数(0-59)
    if(minutes.length==1)
		minutes="0"+minutes;
	var seconds=myDate.getSeconds().toString();
	if(seconds.length==1)
		seconds="0"+seconds;

	if($fn.isEmpty(type))
		return "时间["+hours+":"+minutes+":"+seconds+"]";
	else
		return hours+":"+minutes+":"+seconds;
}

jd.fn.strLen = function strlen(str){
    var len = 0;
    for (var i=0; i<str.length; i++) {
     var c = str.charCodeAt(i);
    //单字节加1
     if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
       len++;
     }
     else {
      len+=2;
     }
    }
    return len;
}



/**获取当前方法的参数和值的信息
*@param {String} fnName  正在调用的方法名
*@param {Array} arguments 动态参数集合
*@param {Array} _ownargs 自定义输出的参数名集合
*@return {String}  返回调用该方法的信息字符串
*/
// jd.fn.fn_console=function(fnName,arguments_jd,_ownargs){
// try{
// 	if(true){
//         var _out=jd.fn.getTime()+"  正在调用方法："+fnName+" ";
// 	    var tmp = arguments.callee.toString();
// 	    if(_ownargs!==null)
// 	    	arguments_jd=_ownargs;
// 	    var args =tmp.substring(tmp.indexOf("(")+1,tmp.indexOf(")"));

// 	    if(args.length>0){
// 	    	var _args=args.split(",");
// 		    if(_args.length>0)
// 		    	_out+="参数如下："
// 		     for(var a=0 ;a< _args.length;a++){
// 		    	if(a>0)
// 		    		_out+=",";
// 		    	if(a<=arguments.length){
// 		    		_out+=_args[a]+":"+arguments[a];
// 		    	}else{
// 		    		_out+=_args[a]+":";
// 		    	}
// 		    }
// 	    }
//             var NowTime=new Date().toLocaleTimeString() ;
//             console.info(_out);
// 	}
// }catch(e){}
// 	return _out;
// }


/**返回代码表中的对应值
*@param {String} codeString  代码表字符串 如"key:value,key:value..."
*@param {String} key 值
*@return {String}  返回对应值
*/
jd.fn.getCodeStringValue=function(codeString,key){
	console.log(codeString+">>"+key);
	var result="";
	var defaultValue="";
	var codes=codeString.split(",");
	for( var i=0;i<codes.length;i++){
		var _code=codes[i].split(":");
		if(_code.length<2)
			//代码项格式后小于2为非正常值，乎略掉
			continue;
		else{
			if(key.trim()==_code[0]){
				result=_code[1];
				return result;
			}
			//如果有ELSE，那就是取ELSE中的默认值了
			if(_code[0].toUpperCase()=="ELSE"){
				defaultValue=_code[1];
			}
		}
	}
	//如果执行到这里，说明没有找到对应的翻译，
	result=defaultValue;//如果这个代码表有设置 ELSE 那就取ELSE的值
	return result;
}


/**加载CSS JS文件
*@param {String} type 文件类型  script 或 css
*@param {String} path 文件路径
*@return {String}  void
*/
jd.fn.loadingFile=function(type,path){
	var TMP_SCRIPT='<script type="text/javascript" src="{0}"><\/script>';
	var TMP_CSS='<link rel="stylesheet" type="text/css" href="{0}" />';
	var s='';
	if(type.toLowerCase()=="script"){
		s=TMP_SCRIPT.replace("{0}",path);
		if(jd.global.debug==true) console.log("加载脚本:",s)
	}else if(type.toLowerCase()=="stylesheet"){
		s=TMP_CSS.replace("{0}",path);
		if(jd.global.debug==true) console.log("加载样式:",s)
	}
	if(s!="")
		document.writeln(s);

}

/**将一个字符串重复自身N次
*@param {String} target 目标字符串
*@param {int} n 重复次数
*/
jd.fn.repeat = function(target, n) {
	  return (new Array(n + 1)).join(target);
}

/**取URL参数值
 * @param strName
 * @returns
 */
jd.fn.request = function(strName)
{
	var strHref = window.document.location.href;
	var intPos = strHref.indexOf("?");
	var strRight = strHref.substr(intPos + 1);

	var arrTmp = strRight.split("&");
	for(var i = 0; i < arrTmp.length; i++)
	{
		var arrTemp = arrTmp[i].split("=");
		if(arrTemp[0].toUpperCase() == strName.toUpperCase()) return arrTemp[1];
	}
	return "";
}

/**取URL的hash值
 * @param strName
 * @returns
 */
jd.fn.requestHash = function(strName)
{
	var strHref = window.document.location.href;
	var intPos = strHref.indexOf("#");
	var strRight = strHref.substr(intPos + 1);

	var arrTmp = strRight.split("&");
	for(var i = 0; i < arrTmp.length; i++)
	{
		var arrTemp = arrTmp[i].split("=");
		if(arrTemp[0].toUpperCase() == strName.toUpperCase()) return arrTemp[1];
	}
	return "";
}

/**取域名
 * @returns {String}
 */
jd.fn.requestGetHost = function(){
	var strHref = window.document.location.href;
	var strTmp = strHref.replace('http://','');
	var pos = strTmp.indexOf('/');
	return 'http://'+strTmp.substr(0,pos+1);
}


/**设置时间
 * @param {String} select 对象选择器，就是要填入的元素对象
 * @returns {String}
 */
jd.fn.setTime = function(select){
	console.log("生成：日期 星期 时间!");
	setInterval(function(){
		var d = new Date();
		var year = d.getFullYear();
		var mouth = jd.fn.plus0(d.getMonth() + 1);
		var day = jd.fn.plus0(d.getDate());
		var hh = jd.fn.plus0(d.getHours());
		var mm = jd.fn.plus0(d.getMinutes());

		var week;
		if(new Date().getDay()==0)          week="日"
		if(new Date().getDay()==1)          week="一"
		if(new Date().getDay()==2)          week="二"
		if(new Date().getDay()==3)          week="三"
		if(new Date().getDay()==4)          week="四"
		if(new Date().getDay()==5)          week="五"
		if(new Date().getDay()==6)          week="六"

		var daytype;
		if(d.getHours() > 12){
			daytype = "下午";
		}else{
			daytype = "上午";
		};
		$(".date").html(year+"年"+mouth+"月"+day+"日");
		$(".week").html("星期"+week+"&nbsp;"+daytype);
		var hh = jd.fn.plus0(d.getHours());
		var mm = jd.fn.plus0(d.getMinutes());
		$(select).html(hh+":"+mm);
	},1000);
}
jd.fn.plus0 = function(s){
	return s < 10 ? '0' + s: s;
}



/**取URL参数值
 * @param {String} strName 参数名
 * @returns {String}
 */
jd.fn.getParam=function(strName)
{
	var strHref = window.document.location.href;
	var intPos = strHref.indexOf("?");
	var strRight = strHref.substr(intPos + 1);

	var arrTmp = strRight.split("&");
	for(var i = 0; i < arrTmp.length; i++)
	{
		var arrTemp = arrTmp[i].split("=");
		if(arrTemp[0].toUpperCase() == strName.toUpperCase()) return arrTemp[1];
	}
	return "";
}

/**取hash参数值
 * @param {String} strName 参数名
 * @returns {String}
 */
jd.fn.getHash=function(strName)
{
	var strHref = window.document.location.href;
	var intPos = strHref.indexOf("#");
	var strRight = strHref.substr(intPos + 1);

	var arrTmp = strRight.split("&");
	for(var i = 0; i < arrTmp.length; i++)
	{
		var arrTemp = arrTmp[i].split("=");
		if(arrTemp[0].toUpperCase() == strName.toUpperCase()) return arrTemp[1];
	}
	return "";
}

/**取域名
 * @returns {String}
 */
jd.fn.RequestGetHost=function(){
	var strHref = window.document.location.href;
	var strTmp = strHref.replace('http://','');
	var pos = strTmp.indexOf('/');
	return 'http://'+strTmp.substr(0,pos+1);
}


/**选择样式类名
*@param {String} className 源字符串
*@return {String} 返回处理好的串
*/
jd.fn.selectClass=function(className){
	if( typeof(app)!='undefined'){
		return className+"_client";
	}else{
		return className;
	}
}

/**选择样式类名
*@param {String} str 源字符串
*@return {String} 返回处理好的串
*/
jd.fn.html=function(str){
	return str
	.replaceAll("&lt;","<")
	.replaceAll("&gt;",">")
}


/**选择样式类名
*@param {String} str 源字符串
*@return {String} 返回处理好的串
*/
jd.fn.descriptionClear=function(str){
	return str.replace(/[^\u4e00-\u9fa5a-zA-Z0-9，。,\?\？:.]/gi,"");
}

/**选择样式类名
*@param {String} str 源字符串
*@return {String} 返回处理好的串
*/
jd.fn.ContentClear=function(str){
	return str.replace(/[?\？]/gi,"");
}


/**选择样式类名
*@param {String} url 地址
*@return {String} 格式好的对象
*/
jd.fn.parseURL=function(url) {
    var a = document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':', ''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function () {
            var ret = {},
            seg = a.search.replace(/^\?/, '').split('&'),
            len = seg.length, i = 0, s;
            for (; i < len; i++) {
                if (!seg[i]) { continue; }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;

        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
        hash: a.hash.replace('#', ''),
        path: a.pathname.replace(/^([^\/])/, '/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
        segments: a.pathname.replace(/^\//, '').split('/')
    };
}

/**选择样式类名
*@param {String} url 地址
*@param {String} newParams 新参数对象 如{client:true}
*@return {String}  替换好的URL
*/
jd.fn.replaceUrlParams=function(url, newParams) {
	 var myUrl=jd.fn.parseURL(url)
    /*
    for (var x in myUrl.params) {
        for (var y in newParams) {
            if (x.toLowerCase() == y.toLowerCase()) {
                myUrl.params[x] = newParams[y];
            }
        }
    }
    */

    for (var x in newParams) {
        var hasInMyUrlParams = false;
        for (var y in myUrl.params) {
            if (x.toLowerCase() == y.toLowerCase()) {
                myUrl.params[y] = newParams[x];
                hasInMyUrlParams = true;
                break;
            }
        }
        //原来没有的参数则追加
        if (!hasInMyUrlParams) {
            myUrl.params[x] = newParams[x];
        }
    }
    var _result = myUrl.protocol + "://" + myUrl.host + ":" + myUrl.port + myUrl.path + "?";

    for (var p in myUrl.params) {
        _result += (p + "=" + myUrl.params[p] + "&");
    }

    if (_result.substr(_result.length - 1) == "&") {
        _result = _result.substr(0, _result.length - 1);
    }

    if (myUrl.hash != "") {
        _result += "#" + myUrl.hash;
    }
    return _result;
}


/**选择样式类名
*@param {String} source 源串
*@param {String} patterns 配置串数组 如['/homepage','/demo']
*@return {BOOLEN}  包含返回true
*/
jd.fn.isInclude=function(source,patterns){
	var flag=false;
	for(var i=0;i<patterns.length;i++){
		if(source.indexOf(patterns[i])!=-1){
			flag=true;
			return flag;
		}
	}
	return false;
}




/**生成一个当前的日期时间
 * 2009-06-12 12:00:01
*/
$fn.nowDateTime=function()
{
    var now = new Date();
    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日
    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分
    var ss = now.getSeconds();          //秒

    var clock = year + "-";

    if(month < 10)
        clock += "0";

    clock += month + "-";

    if(day < 10)
        clock += "0";

    clock += day + " ";

    if(hh < 10)
        clock += "0";
    clock += hh + ":";
    if (mm < 10) clock += '0';
    clock += mm;

    clock+=":"
    if(ss < 10)
    	clock += "0";
    clock += ss;
    return(clock);
}

/**是否是JSON对象
*@param {Object} obj
*@return true false
*/
jd.fn.isJson=function(obj){
	var isjson = typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
	return isjson;
}


//身份证隐藏
$fn.textMask=function(id,number,type){
	var str="";
	if(!id){
		return "";
	}
	for(var i=0;i<number;i++){
		str=str+"*";
	}
	if(type=="left"){
	  return str+id.substring(number, id.length);
	}else if(type=="right"){
	  return id.substring(0, id.length-number)+str;
	}else{
	  var begin=0;
	  if((id.length-number)%2){
		  begin=(id.length-number)/2;
	  }else{
		  begin=Math.round((id.length-number)/2);
	  }
	  var end=begin+str.length;
	  return  id.substring(0, begin)+str+id.substring(end, id.length);
	}
}
$fn.mobileCheck = function(value){
	if(/(^(13[0-9]|14[5|7]|15[0-9]|17[0-9]|18[0-9]|)\d{8}$)|(^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}(-\d{1,4})?$)/i.test(value)){
		return true;
	}else{
		return false;
	}
}
/**加法
 *@param {String}
 *@param {String}
*/
$fn.accAdd = function(arg1,arg2){
	var r1,r2,m;
	try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
	try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
	m=Math.pow(10,Math.max(r1,r2))
	console.log("arg1="+arg1)
	console.log("arg2="+arg2)
	return (arg1*m+arg2*m)/m
}
/**减法
 *@param {String} 被减数
 *@param {String} 减数
*/
$fn.accSub = function(arg1,arg2){
	return $fn.accAdd(arg1,-arg2)
}
/**模块页面跳转
*/
$fn.nextPage = function(){
	var nextFlowNum = parseInt(flowNum)+parseInt(1);
	var nextJson = flowJson[nextFlowNum];
	$page.location(contextPath+"/"+ui+"/"+nextJson.model+".jsp");
}
/**简单翻页
*@param {String} 需翻页内容父div
*@param {String} 翻页按钮父div
*@param {String} 从当前第几个开始显示
*@param {String} 元素总数
*@param {String} 一页需要显示的个数
*@param {String} 自定义翻页参数名
*/
$fn.initFlip = function(item,flip,now,total,num,flipNow){
	$(flip).children(".priBtn").unbind("click")
	$(flip).children(".nextBtn").unbind("click")
	$(item).children().addClass("hide");
	for(var a=now;a<(now*1+num*1);a++){
		$(item).children().eq(a).removeClass("hide");
	}
	if(now == 0){
		$(flip).children(".priBtn").attr("disabled","disabled")
	}else{
		$(flip).children(".priBtn").removeAttr("disabled");
		$(flip).children(".priBtn").click(function(){
			$fn.initFlip(item,flip,flipNow-num,total,num,flipNow)
		})
	}
	if((now*1+num*1) >= total){
		$(flip).children(".nextBtn").attr("disabled","disabled")
	}else{
		$(flip).children(".nextBtn").removeAttr("disabled");
		$(flip).children(".nextBtn").click(function(){
			$fn.initFlip(item,flip,(flipNow*1+num*1),total,num,flipNow)
		})
	}
	eval(flipNow = now);
}
/*
 * 是否为空校验
 * */
$fn.blankCheck = function(value){
	var reg = /^\s*$/;
	return reg.test(value);
}
/*
 * 金额校验 4位整数2位小数
 * */
$fn.amtCheck = function(value){
	var reg = /^[1-9]\d{0,3}(\.\d{1,2})?$|(?!^0.0$)(?!^0.00$)^0\.(\d{1,2})$/;
	return reg.test(value);
}
/**字符串前补位
*@param {String} 补位个数
*@param {String} 字符串
*/
$fn.PrefixInteger = function(num, n){
	return (Array(n).join(0) + num).slice(-n);
}
/**选择样式类名
*@param {Array} oneArray 源数组
*@param {String} num 每一维数据几个列
*@return {Array}  返回二维数组
*/
jd.fn.arrayOne2Two=function(oneArray,num){
	 var ar=[];
	 while(oneArray.length)
	 {
	 	ar.push(arr.splice(0,num));
	 }
	 return ar;
}

// jd_global.js


    var Include39485748323 = function() {}
    Include39485748323.prototype = {
        //倒序循环
        forEach: function(array, callback) {
            var size = array.length;
            for(var i = size - 1; i >= 0; i--){
                callback.apply(array[i], [i]);
            }
        },
        getFilePath: function() {
            var curWwwPath=window.document.location.href;
            var pathName=window.document.location.pathname;
            var localhostPaht=curWwwPath.substring(0,curWwwPath.indexOf(pathName));
            var projectName=pathName.substring(0,pathName.substr(1).lastIndexOf('/')+1);
            return localhostPaht+projectName;
        },
        //获取文件内容
        getFileContent: function(url) {
            var ie = navigator.userAgent.indexOf('MSIE') > 0;
            var o = ie ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest();
            o.open('get', url, false);
            o.send(null);
            return o.responseText;
        },
        parseNode: function(content) {
            var objE = document.createElement("div");
            objE.innerHTML = content;
            return objE.childNodes;
        },
        executeScript: function(content) {
            var mac = /<script>([\s\S]*?)<\/script>/g;
            var r = "";
            while(r = mac.exec(content)) {
                eval(r[1]);
            }
        },
        getHtml: function(content) {
            var mac = /<script>([\s\S]*?)<\/script>/g;
            content.replace(mac, "");
            return content;
        },
        getPrevCount: function(src) {
            var mac = /\.\.\//g;
            var count = 0;
            while(mac.exec(src)) {
                count++;
            }
            return count;
        },
        getRequestUrl: function(filePath, src) {
            if(/http:\/\//g.test(src)){ return src; }
            var prevCount = this.getPrevCount(src);
            while(prevCount--) {
                filePath = filePath.substring(0,filePath.substr(1).lastIndexOf('/')+1);
            }
            return filePath + "/"+src.replace(/\.\.\//g, "");
        },
        replaceIncludeElements: function() {
            var $this = this;
            var filePath = $this.getFilePath();
            var includeTals = document.getElementsByTagName("include");
            this.forEach(includeTals, function() {
                //拿到路径
                var src = this.getAttribute("src");
                //拿到文件内容
                var content = $this.getFileContent($this.getRequestUrl(filePath, src));
                //将文本转换成节点
                var parent = this.parentNode;
                var includeNodes = $this.parseNode($this.getHtml(content));
                var size = includeNodes.length;
                for(var i = 0; i < size; i++) {
                    parent.insertBefore(includeNodes[0], this);
                }
                //执行文本中的额javascript
                $this.executeScript(content);
                parent.removeChild(this);
                //替换元素 this.parentNode.replaceChild(includeNodes[1], this);
            })
        }
    }
    new Include39485748323().replaceIncludeElements();

// jd_log.js
/**@class 类 jd.log 日志类
*@author 徐翔 2016-04-06
*@see <a href="mailto:china_xuxiang@163.com"  target="_blank">email:china_xuxiang@163.com</a >
*/

// jd.log=function(){
// 	/**正常日志
// 	*@param {String} msg 日志内容
// 	*/
// 	this.info=function(msg){

// 		if($g.isClient && typeof(log)!='undefined'){
// 			log.info(msg);
// 		} else if($g.isClient){
// 			setTimeout(function(){$log.info(msg)},1000);
// 			return msg;
// 		}
// 		if($g.isClient && app.getFireBug()==true && document.getElementById("FireBugUI")!=null){
// 			console.info(msg);
// 		}else if($g.isClient && app.getFireBug()==true){
// 			setTimeout(function(){console.info(msg)},1000);
// 		}else{
// 			console.info(msg);
// 		}
// 		return msg;
// 	};

// 	/**调试日志
// 	*@param {String} msg 日志内容
// 	*/
// 	this.debug=function(msg){

// 		if($g.isClient && typeof(log)!='undefined'){
// 			log.debug(msg);
// 		} else if($g.isClient){
// 			setTimeout(function(){$log.debug(msg)},1000);
// 			return msg;
// 		}

// 		if($g.isClient && app.getFireBug()==true && document.getElementById("FireBugUI")!=null){
// 			console.debug(msg);
// 		}else if($g.isClient && app.getFireBug()==true){
// 			setTimeout(function(){console.debug(msg)},1000);
// 		}else{
// 			console.debug(msg);
// 		}
// 		return msg;
// 	};

// 	*警告日志
// 	*@param {String} msg 日志内容

// 	this.warn=function(msg){

// 		if($g.isClient && typeof(log)!='undefined'){
// 			log.warn(msg);
// 		} else if($g.isClient){
// 			setTimeout(function(){$log.warn(msg)},1000);
// 			return msg;
// 		}

// 		if($g.isClient && app.getFireBug()==true && document.getElementById("FireBugUI")!=null){
// 			console.warn(msg);
// 		}else if($g.isClient && app.getFireBug()==true){
// 			setTimeout(function(){console.warn(msg)},1000);
// 		}else{
// 			console.warn(msg);
// 		}
// 		return msg;
// 	};

// 	/**错误日志
// 	*@param {String} msg 日志内容
// 	*/
// 	this.error=function(msg){

// 		if($g.isClient && typeof(log)!='undefined'){
// 			log.error(msg);
// 		} else if($g.isClient){
// 			setTimeout(function(){$log.error(msg)},1000);
// 			return msg;
// 		}

// 		if($g.isClient && app.getFireBug()==true && document.getElementById("FireBugUI")!=null){
// 			console.error(msg);
// 		}else if($g.isClient && app.getFireBug()==true){
// 			setTimeout(function(){console.error(msg)},1000);
// 		}else{
// 			console.error(msg);
// 		}
// 		return msg;
// 	};
// };

// var $log=new jd.log();

// jd_hashmap.js

/**@class 类 jd.collection.HashMap HashMap类型对象 键-值对<br>
 * 操作实例
*	var map = new jd.collection.HashMap();<br>
*	map.put("key1","Value1");<br>
*	map.put("key2","Value2");<br>
*	map.put("key3","Value3");<br>
*	map.put("key4","Value4");<br>
*	map.put("key5","Value5");<br>
*	alert("size："+map.size()+" key1："+map.get("key1"));<br>
*	map.remove("key1");<br>
*	map.put("key3","newValue");<br>
*	var values = map.values();<br>
*	for(var i in values){<br>
*		document.write(i+"："+values[i]+"   ");<br>
*	}<br>
*	document.write("<br>");<br>
*	var keySet = map.keySet();<br>
*	for(var i in keySet){<br>
*		document.write(i+"："+keySet[i]+"  ");<br>
*	}<br>
*	alert(map.isEmpty());<br>
*@version 当前版本 2.0.14.1120
*@author 徐翔
*@see <a href="mailto:china_xuxiang@163.com"  target="_blank">email:china_xuxiang@163.com</a >
*/
jd.collection.HashMap=function(){
	/**定义长度*/
	var length = 0;
	//创建一个对象
	var obj = new Object();

	/**
	* 判断Map是否为空
	*@return {Boolean} 返回 true 或 false
	*/
	this.isEmpty = function(){
		return length == 0;
	};

	/**
	* 判断对象中是否包含给定Key
	* @param {String} key 键
	* @return {Object} 值
	*/
	this.containsKey=function(key){
		return (key in obj);
	};

	/**
	* 判断对象中是否包含给定的Value
	* @param {String} value 值对象
	* @return {Boolean} 返回 true 或 false
	*/
	this.containsValue=function(value){
		for(var key in obj){
			if(obj[key] == value){
				return true;
			}
		}
		return false;
	};

	/**
	*向map中添加数据
	* @param {String} key 键
	* @param {Object} value 值对象
	* @return void
	*/
	this.put=function(key,value){
		if(!this.containsKey(key)){
			length++;
		}
		obj[key] = value;
	};

	/**
	* 根据给定的Key获得Value
	* @param {String} key 键
	* @return {Object} 值
	*/
	this.get=function(key){
		return this.containsKey(key)?obj[key]:null;
	};

	/**
	* 根据给定的Key删除一个值
	* @param {String} key 键
	* @return void
	*/
	this.remove=function(key){
		if(this.containsKey(key)&&(delete obj[key])){
			length--;
		}
	};

	/**
	* 获得Map中的所有Value
	* @return {Array} value集合
	*/
	this.values=function(){
		var _values= new Array();
		for(var key in obj){
			_values.push(obj[key]);
		}
		return _values;
	};

	/**
	* 获得Map中的所有Key
	* @return {Array} key集合
	*/
	this.keySet=function(){
		var _keys = new Array();
		for(var key in obj){
			_keys.push(key);
		}
		return _keys;
	};

	/**
	* 获得Map的长度
	* @return {int} 集合中的对象数量
	*/
	this.size = function(){
		return length;
	};

	/**
	* 清空Map
	* @return void
	*/
	this.clear = function(){
		length = 0;
		obj = new Object();
	};
}

// jd_exception.js
if(!jd.collection.HashMap) console.error("请先加载jd_hashmap.js文件...")

/**@class 类 exception 异常处理类
*@version 当前版本 2.0.14.1120
*@author 徐翔
*@see <a href="mailto:china_xuxiang@163.com" target="_blank">email:china_xuxiang@163.com</a >
*/
jd.exception={
	/**异常处理方法的MAP集合*/
	handlesMap:new jd.collection.HashMap(),

	/**添加处理方法到集合中去
	*@param {String} className 错误处理类名
	*@param {Function} handle 错误处理Function实例
	*@return {jd.exception} jd.exception
	*/
	addHandles:function(className,handle){
		this.handlesMap.put(className,handle);
		return jd.exception;
	},

	/**去除处理方法从集合中
	*@param {String} className 错误处理类名
	*@return {jd.exception} jd.exception
	*/
	removeHandles:function(className){
		this.handlesMap.remove(className);
		return jd.exception;
	},
	/**去除处理方法从集合中
	*/
	clearHandles:function(){
		this.handlesMap.clear();
	},

	/**验证异常定义
	*@param {String} errorCode 错误码
	*@param {String} errorMessage 错误消息
	*@return void
	*/
    Error: function(errorCode,errorMessage){
    	this.errorCode=errorCode;
    	this.message = errorMessage;
    	this.name = '通用错误！';
    	jd.exception.err=this;
    },

    /**异常处理
	*@param {String} error 错误消息
	*@return void
	*/
    ErrorProcess:function(error){
    	if (error instanceof jd.exception.Error) {
				var _handle=null;
				if(this.handlesMap.containsKey(error.errorCode)){
					_handle=this.handlesMap.get(error.errorCode);
					_handle(error);
				}
				else
					this.defalutErrorFn(error.errorCode);

		}else{
			  console.log(error.stack);
			  throw error;
		}

    },
    /**默认异常处理FN
	*@param {String} error 错误消息
	*@return void
	*/
    defalutErrorFn:function(error){
    	console.log("默认异常处理方法:"+error.toString());
    }
};

var $Error=jd.exception.Error;


/**@class 类 jd.exception.errorCode 异常处理类-错误号
*@version 当前版本 2.0.14.1120
*@author 徐翔
*@see <a href="mailto:china_xuxiang@163.com" target="_blank">email:china_xuxiang@163.com</a >
*/
jd.exception.ErrorCode={}
var $ErrorCode=jd.exception.ErrorCode;


//jd.plugins.x2interval.serverTimeDifference= <%=java.util.Calendar.getInstance().getTimeInMillis()%> -(new   Date());
// jd_x2Validation.js
/**@class 类 jd.plugins.x2Validation 验证组件
*@version 当前版本 2.0.14.1118
*@author 徐翔
*@see <a href="mailto:china_xuxiang@163.com"  target="_blank">email:china_xuxiang@163.com</a >
*/
jd.plugins.x2Validation=function(element, optionsObj){
	/**验证规则集合
	*@type {Array}
	*/
	this.validations = [];

	/**添加校验规则
	*@param {Function} validationFunction -验证方法
	*@param {Object} validationParamsObj - 验证参数对象
	*@return {Object} jd.plugins.x2Validation - 实例本身
	*/
	this.add=function(validationFunction, validationParamsObj){
		  this.validations.push( {type: validationFunction, params: validationParamsObj || {} } );
		  return this;
    }

	/**去除校验规则
	*@param {Function} validationFunction -验证方法
	*@param {Object} validationParamsObj - 验证参数对象
	*@return {Object} jd.plugins.x2Validation - 实例本身
	*/
	this.remove=function(validationFunction, validationParamsObj){
	  var found = false;
	  for( var i = 0, len = this.validations.length; i < len; i++ ){
	  		if( this.validations[i].type == validationFunction ){
				if (this.validations[i].params == validationParamsObj) {
					found = true;
					break;
				}
			}
	  }
      if(found) this.validations.splice(i,1);
      return this;
    }

	/**执行校验 对所有集合中的规则
	*@return {Boolean} 验证是否通过
	*/
	this.doValidations=function(){
      	this.validationFailed = false;
      	for(var i = 0, len = this.validations.length; i < len; ++i){
    	 	var validation = this.validations[i];
    		switch(validation.type){
    		   	case jd.plugins.x2Validate.Presence:
                case jd.plugins.x2Validate.Confirmation:
                case jd.plugins.x2Validate.Acceptance:
    		   		this.displayMessageWhenEmpty = true;
    		   		this.validationFailed = !this.validateElement(validation.type, validation.params);
    				break;
    		   	default:
    		   		this.validationFailed = !this.validateElement(validation.type, validation.params);
    		   		break;
    		}
    		if(this.validationFailed) return false;
    	}
    	this.message = this.validMessage;
    	return true;
    }


	/**验证单个规则，只是个过渡方法，会去调用最终的规则方法执行验证
	*@param {Function} validationFunction -验证方法
	*@param {Object} validationParamsObj - 验证参数对象
	*@return {Boolean} 验证是否通过
	*/
	this.validateElement=function(validationFunction, validationParamsObj){
      	var value =this.fieldValue;
        var isValid = true;
      	try{
    		validationFunction(value, validationParamsObj,this);
    	} catch(error) {
    	  	if(error instanceof jd.plugins.x2Validate.Error){
    			if( value !== '' || (value === '' && this.displayMessageWhenEmpty) ){
    				this.validationFailed = true;
    				this.message = error.message;
    				isValid = false;
    			}
    		}else{
    		  	throw error;
    		}
    	}finally{
    	    return isValid;
        }
    }


	//初始化
	if(element==null || element.filedName=="" || element.fieldValue==null || element.validates==null ){
		 throw new Error("校验::验证对象或信息不全!");
		 return;
	}

	/**要验证的变量名称
	*@type {String}
	*/
	this.fieldName=element.fieldName;
	/**变量中的值
	*@type {Object}
	*/
	this.fieldValue=element.fieldValue;
	for(var i in element.validates){
		//从构造参数中取出规则放入规则组
		this.add(element.validates[i].f,element.validates[i]);
	}
	//console.dir(this.validations)

}

/**当前版本 */
jd.plugins.x2Validation.VERSION="2.0.14.1118";
console.log("jd.plugins.x2Validation - ",jd.plugins.x2Validation.VERSION);





/**@class 类 jd.plugins.x2Validate 规则校验对象
*@version 当前版本 2.0.14.1118
*@author 徐翔
*@see <a href="mailto:china_xuxiang@163.com">email:china_xuxiang@163.com</a >
*/

jd.plugins.x2Validate={
	 /**不为空校验
     *@param {String} value - 值
     *@param {Object} paramsObj - 验证参数对象<br>
	 *failureMessage {String} - 验证失败后的提示信息 默认值 - 不正确
     *	(默认值: "不能为空!")
	 *@return {Boolean} 验证是否通过 TRUE|FALSE
     */
	 Presence: function(value, paramsObj){
      	var paramsObj = paramsObj || {};
    	var message = paramsObj.failureMessage || "\u4e0d\u80fd\u4e3a\u7a7a!";
    	if(value === '' || value === null || value === undefined)	jd.plugins.x2Validate.fail(message);
    	return true;
    },

	 /**数字校验
     *@param {String} value - 值
     *@param {Object} paramsObj - 验证参数对象<br>
     *notANumberMessage {String} - the message to show when the validation fails when value is not a number
     *(DEFAULT: "Must be a number!")<br>
     *notAnIntegerMessage {String} - the message to show when the validation fails when value is not an integer
     *(DEFAULT: "Must be a number!")<br>
     *wrongNumberMessage {String} - the message to show when the validation fails when is param is used
     *(DEFAULT: "Must be {is}!")<br>
     *tooLowMessage {String} 		- the message to show when the validation fails when minimum param is used
     *(DEFAULT: "Must not be less than {minimum}!")<br>
     *tooHighMessage {String} 	- the message to show when the validation fails when maximum param is used
     *(DEFAULT: "Must not be more than {maximum}!")<br>
     *is {Int} - the length must be this long <br>
     *minimum {Int} - the minimum length allowed<br>
     *maximum {Int} - the maximum length allowed<br>
     *onlyInteger {Boolean} - if true will only allow integers to be valid
     *(DEFAULT: false)<br>
	 *@return {Boolean} 验证是否通过 TRUE|FALSE
     */
    Numericality: function(value, paramsObj){
        var suppliedValue = value;
        var value = Number(value);
    	var paramsObj = paramsObj || {};
        var minimum = ((paramsObj.minimum) || (paramsObj.minimum == 0)) ? paramsObj.minimum : null;;
        var maximum = ((paramsObj.maximum) || (paramsObj.maximum == 0)) ? paramsObj.maximum : null;
    	var is = ((paramsObj.is) || (paramsObj.is == 0)) ? paramsObj.is : null;
        var notANumberMessage = paramsObj.notANumberMessage || "\u8bf7\u8f93\u5165\u6570\u5b57!";
        var notAnIntegerMessage = paramsObj.notAnIntegerMessage || "\u8bf7\u8f93\u5165\u4e00\u4e2a\u6574\u6570!";
    	var wrongNumberMessage = paramsObj.wrongNumberMessage || "\u5fc5\u987b\u662f  " + is + "!";
    	var tooLowMessage = paramsObj.tooLowMessage || "\u4e0d\u80fd\u5c0f\u4e8e  " + minimum + "!";
    	var tooHighMessage = paramsObj.tooHighMessage || "\u4e0d\u80fd\u5927\u4e8e  " + maximum + "!";
        if (!isFinite(value)) jd.plugins.x2Validate.fail(notANumberMessage);
        if (paramsObj.onlyInteger && (/\.0+$|\.$/.test(String(suppliedValue))  || value != parseInt(value)) ) jd.plugins.x2Validate.fail(notAnIntegerMessage);
    	switch(true){
    	  	case (is !== null):
    	  		if( value != Number(is) ) jd.plugins.x2Validate.fail(wrongNumberMessage);
    			break;
    	  	case (minimum !== null && maximum !== null):
    	  		jd.plugins.x2Validate.Numericality(value, {tooLowMessage: tooLowMessage, minimum: minimum});
    	  		jd.plugins.x2Validate.Numericality(value, {tooHighMessage: tooHighMessage, maximum: maximum});
    	  		break;
    	  	case (minimum !== null):
    	  		if( value < Number(minimum) ) jd.plugins.x2Validate.fail(tooLowMessage);
    			break;
    	  	case (maximum !== null):
    	  		if( value > Number(maximum) ) jd.plugins.x2Validate.fail(tooHighMessage);
    			break;
    	}
    	return true;
    },

    /**正则校验
	 *  NB. will return true for an empty string, to allow for non-required, empty fields to validate.
     *		If you do not want this to be the case then you must either add a LiveValidation.PRESENCE validation
     *		or build it into the regular expression pattern
     *@param {String} value - 值
     *@param {Object} paramsObj - 验证参数对象<br>
	 *failureMessage {String} - 验证失败后的提示信息
     *(DEFAULT: "Not valid!")<br>
     *pattern {RegExp}  - the regular expression pattern
     *(DEFAULT: /./)<br>
     *negate {Boolean} - if set to true, will validate true if the pattern is not matched
     *(DEFAULT: false)<br>
	 *@return {Boolean} 验证是否通过 TRUE|FALSE
     */
    Format: function(value, paramsObj){
      var value = String(value);
    	var paramsObj = paramsObj || {};
    	var message = paramsObj.failureMessage || "\u65e0\u6548!";
      var pattern = paramsObj.pattern || /./;
      var negate = paramsObj.negate || false;
      if(!negate && !pattern.test(value)) jd.plugins.x2Validate.fail(message); // normal
      if(negate && pattern.test(value)) jd.plugins.x2Validate.fail(message); // negated
    	return true;
    },

    /**邮件校验
     *@param {String} value - 值
     *@param {Object} paramsObj - 验证参数对象<br>
	 *failureMessage {String} - 验证失败后的提示信息
     *(DEFAULT: "验证不正确")
	 *@return {Boolean} 验证是否通过 TRUE|FALSE
     */
    Email: function(value, paramsObj){
    	var paramsObj = paramsObj || {};
    	var message = paramsObj.failureMessage || "\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u4ef6\u5730\u5740!";
    	jd.plugins.x2Validate.Format(value, { failureMessage: message, pattern: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i } );
    	return true;
    },


    /**身份证验证
     *@param {String} value - 值
     *@param {Object} paramsObj - 验证参数对象<br>
	 *failureMessage {String} - 验证失败后的提示信息
     *(DEFAULT: "验证不正确!")
	 *@return {Boolean} 验证是否通过 TRUE|FALSE
     */
    Identity:function(value, paramsObj){
    	var paramsObj = paramsObj || {};
    	var message = paramsObj.failureMessage || "身份证有误，格式：15数字或18位数字最后一位为X！";
    	jd.plugins.x2Validate.Format(value, { failureMessage: message, pattern: /^(\d{18,18}|\d{15,15}|\d{17,17}X)$/ } );
    	return true;
    },


     /**中国邮政编码验证
     *@param {String} value - 值
     *@param {Object} paramsObj - 验证参数对象<br>
	 *failureMessage {String} - 验证失败后的提示信息
     *(DEFAULT: "验证不正确!")
	 *@return {Boolean} 验证是否通过 TRUE|FALSE
     */
    PostCode:function(value, paramsObj){
    	var paramsObj = paramsObj || {};
    	var message = paramsObj.failureMessage || "请填写6位数字格式的邮政编码";
    	jd.plugins.x2Validate.Format(value, { failureMessage: message, pattern: /^[0-9]{6}$/i } );
    	return true;
    },


     /**家用坐机号码检验
     *@param {String} value - 值
     *@param {Object} paramsObj - 验证参数对象<br>
	 *failureMessage {String} - 验证失败后的提示信息
     *(DEFAULT: "验证不正确!")
	 *@return {Boolean} 验证是否通过 TRUE|FALSE
     */
    Phone: function(value, paramsObj){
    	var paramsObj = paramsObj || {};
    	var message = paramsObj.failureMessage || "坐机号码有误,格式如:(地区号)坐机号-分机号";
    	jd.plugins.x2Validate.Format(value, { failureMessage: message, pattern: /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}(-\d{1,4})?$/i } );
    	return true;
    },


     /**手机号码检验
     *@param {String} value - 值
     *@param {Object} paramsObj - 验证参数对象<br>
	 *failureMessage {String} - 验证失败后的提示信息
     *(DEFAULT: "验证不正确!")
	 *@return {Boolean} 验证是否通过 TRUE|FALSE
     */
    Mobile: function(value, paramsObj){
    	var paramsObj = paramsObj || {};
    	var message = paramsObj.failureMessage || "手机号有误,格式如:13,14,15,170,18打头11位数字";
    	jd.plugins.x2Validate.Format(value, { failureMessage: message, pattern: /^(13[0-9]|14[5|7]|15[0-9]|170|18[0-9]|)\d{8}$/i } );
    	return true;
    },


     /**电话号码检验
     *@param {String} value - 值
     *@param {Object} paramsObj - 验证参数对象<br>
	 *failureMessage {String} - 验证失败后的提示信息
     *(DEFAULT: "验证不正确!")
	 *@return {Boolean} 验证是否通过 TRUE|FALSE
     */
    Tel: function(value, paramsObj){
    	var paramsObj = paramsObj || {};
    	var message = paramsObj.failureMessage || "电话号有误,请填写手机号或坐机号";
    	jd.plugins.x2Validate.Format(value, { failureMessage: message, pattern: /(^(13[0-9]|14[5|7]|15[0-9]|17[0-9]|18[0-9]|)\d{8}$)|(^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}(-\d{1,4})?$)/i } );
    	return true;
    },

    /**组织机构代码，8位数字或字母加上一个"-"再加一位数字或字母
     *@param {String} value - 值
     *@param {Object} paramsObj - 验证参数对象<br>
	 *failureMessage {String} - 验证失败后的提示信息
     *(DEFAULT: "验证不正确!")
	 *@return {Boolean} 验证是否通过 TRUE|FALSE
     */
    OrganizationCode: function(value, paramsObj){
    	var paramsObj = paramsObj || {};
    	var message = paramsObj.failureMessage || "您填写的组织机构代码不正确！格式：8位数字或字母加'-'加一位数字或字母";
    	jd.plugins.x2Validate.Format(value, { failureMessage: message, pattern: /^[A-Z|a-z|0-9]{8}-[A-Z|a-z|0-9]{1}$/i } );
    	return true;
    },

	/**金额校验
     *@param {String} value - 值
     *@param {Object} paramsObj - 验证参数对象<br>
	 *failureMessage {String} - 验证失败后的提示信息
     *(DEFAULT: "验证不正确!")
	 *@return {Boolean} 验证是否通过 TRUE|FALSE
     */
	Money: function(value, paramsObj){
    	var paramsObj = paramsObj || {};
    	var message = paramsObj.failureMessage || "您填写的金额格式不对！格式如:1234, 1234.56, 123,456.78, 12,345,678.90";
    	jd.plugins.x2Validate.Format(value, { failureMessage: message, pattern: /^([+-]?)((\d{1,3}(,\d{3})*)|(\d+))(\.\d{1,2})?$/ } );
    	return true;
    },

    /**长度验证
	 *NB. can be checked if it is within a range by specifying both a minimum and a maximum
     *@param {String} value - 值
     *@param {Object} paramsObj - 验证参数对象<br>
     *wrongLengthMessage {String} - the message to show when the fails when is param is used
     *(DEFAULT: "Must be {is} characters long!")<br>
     *tooShortMessage {String} 	- the message to show when the fails when minimum param is used
     *(DEFAULT: "Must not be less than {minimum} characters long!")<br>
     *tooLongMessage {String} 	- the message to show when the fails when maximum param is used
     *(DEFAULT: "Must not be more than {maximum} characters long!")<br>
     *is {Int} 	- the length must be this long <br>
     *minimum {Int} - the minimum length allowed<br>
     *maximum {Int} - the maximum length allowed<br>
	 *@return {Boolean} 验证是否通过 TRUE|FALSE
     */
    Length: function(value, paramsObj){
    	var value = String(value);
    	var paramsObj = paramsObj || {};
        var minimum = ((paramsObj.minimum) || (paramsObj.minimum == 0)) ? paramsObj.minimum : null;
    	var maximum = ((paramsObj.maximum) || (paramsObj.maximum == 0)) ? paramsObj.maximum : null;
    	var is = ((paramsObj.is) || (paramsObj.is == 0)) ? paramsObj.is : null;
        var wrongLengthMessage = paramsObj.wrongLengthMessage || "\u5fc5\u987b\u8f93\u5165 " + is + "  \u4e2a\u5b57\u7b26!";
    	var tooShortMessage = paramsObj.tooShortMessage || "\u4e0d\u5c11\u4e8e  " + minimum + "  \u4e2a\u5b57\u7b26!";
    	var tooLongMessage = paramsObj.tooLongMessage || "\u4e0d\u591a\u4e8e " + maximum + "  \u4e2a\u5b57\u7b26!";
    	switch(true){
    	  	case (is !== null):
    	  		if( value.length != Number(is) ) jd.plugins.x2Validate.fail(wrongLengthMessage);
    			break;
    	  	case (minimum !== null && maximum !== null):
    	  		jd.plugins.x2Validate.Length(value, {tooShortMessage: tooShortMessage, minimum: minimum});
    	  		jd.plugins.x2Validate.Length(value, {tooLongMessage: tooLongMessage, maximum: maximum});
    	  		break;
    	  	case (minimum !== null):
    	  		if( value.length < Number(minimum) ) jd.plugins.x2Validate.fail(tooShortMessage);
    			break;
    	  	case (maximum !== null):
    	  		if( value.length > Number(maximum) ) jd.plugins.x2Validate.fail(tooLongMessage);
    			break;
    		default:
    			throw new Error("Validate::Length - Length(s) to validate against must be provided!");
    	}
    	return true;
    },

     /**长度验证中文算2个字节
	 *NB. can be checked if it is within a range by specifying both a minimum and a maximum
     *@param {String} value - 值
     *@param {Object} paramsObj - 验证参数对象<br>
     *wrongLengthMessage {String} - the message to show when the fails when is param is used
     *(DEFAULT: "Must be {is} characters long!")<br>
     *tooShortMessage {String} 	- the message to show when the fails when minimum param is used
     *(DEFAULT: "Must not be less than {minimum} characters long!")<br>
     *tooLongMessage {String} 	- the message to show when the fails when maximum param is used
     *(DEFAULT: "Must not be more than {maximum} characters long!")<br>
     *is {Int} 	- the length must be this long <br>
     *minimum {Int} - the minimum length allowed<br>
     *maximum {Int} - the maximum length allowed<br>
	 *@return {Boolean} 验证是否通过 TRUE|FALSE
     */
    RealLength: function(value, paramsObj){
    	var value = String(value);
    	var paramsObj = paramsObj || {};
        var minimum = ((paramsObj.minimum) || (paramsObj.minimum == 0)) ? paramsObj.minimum : null;
    	var maximum = ((paramsObj.maximum) || (paramsObj.maximum == 0)) ? paramsObj.maximum : null;
    	var is = ((paramsObj.is) || (paramsObj.is == 0)) ? paramsObj.is : null;
        var wrongLengthMessage = paramsObj.wrongLengthMessage || "\u5fc5\u987b\u8f93\u5165 " + is + "  \u4e2a\u5b57\u7b26!";
    	var tooShortMessage = paramsObj.tooShortMessage || "\u4e0d\u5c11\u4e8e  " + minimum + "  \u4e2a\u5b57\u7b26!";
    	var tooLongMessage = paramsObj.tooLongMessage || "\u4e0d\u591a\u4e8e " + maximum + "  \u4e2a\u5b57\u7b26!";
    	switch(true){
    	  	case (is !== null):
    	  		if( value.realLength() != Number(is) ) jd.plugins.x2Validate.fail(wrongLengthMessage);
    			break;
    	  	case (minimum !== null && maximum !== null):
    	  		jd.plugins.x2Validate.Length(value, {tooShortMessage: tooShortMessage, minimum: minimum});
    	  		jd.plugins.x2Validate.Length(value, {tooLongMessage: tooLongMessage, maximum: maximum});
    	  		break;
    	  	case (minimum !== null):
    	  		if( value.realLength() < Number(minimum) ) jd.plugins.x2Validate.fail(tooShortMessage);
    			break;
    	  	case (maximum !== null):
    	  		if( value.realLength() > Number(maximum) ) jd.plugins.x2Validate.fail(tooLongMessage);
    			break;
    		default:
    			throw new Error("Validate::Length - Length(s) to validate against must be provided!");
    	}
    	return true;
    },

    /**包含验证
     *@param {String} value - 值
     *@param {Object} paramsObj - 验证参数对象<br>
     *failureMessage {String} - the message to show when the field fails validation
     *(DEFAULT: "Must be included in the list!")<br>
     *within {Array} - an array of values that the value should fall in
     *(DEFAULT: [])	<br>
     *allowNull {Bool} - if true, and a null value is passed in, validates as true
     *(DEFAULT: false)<br>
     *partialMatch {Bool} - if true, will not only validate against the whole value to check but also if it is a substring of the value
     *(DEFAULT: false)<br>
     *caseSensitive {Bool} - if false will compare strings case insensitively
     *(DEFAULT: true)<br>
     *negate {Bool} - if true, will validate that the value is not within the given set of values
     *(DEFAULT: false)	<br>
	 *@return {Boolean} 验证是否通过 TRUE|FALSE
     */
    Inclusion: function(value, paramsObj){
    	var paramsObj = paramsObj || {};
    	var message = paramsObj.failureMessage || "\u5fc5\u987b\u5305\u542b\u4e8e\u5217\u8868\u4e2d!["+paramsObj.within.toString()+"]";
      var caseSensitive = (paramsObj.caseSensitive === false) ? false : true;
    	if(paramsObj.allowNull && value == null) return true;
      if(!paramsObj.allowNull && value == null) jd.plugins.x2Validate.fail(message);
    	var within = paramsObj.within || [];
      //if case insensitive, make all strings in the array lowercase, and the value too
      if(!caseSensitive){
        var lowerWithin = [];
        for(var j = 0, length = within.length; j < length; ++j){
        	var item = within[j];
          if(typeof item == 'string') item = item.toLowerCase();
          lowerWithin.push(item);
        }
        within = lowerWithin;
        if(typeof value == 'string') value = value.toLowerCase();
      }
    	var found = false;
    	for(var i = 0, length = within.length; i < length; ++i){
    	  if(within[i] == value) found = true;
        if(paramsObj.partialMatch){
          if(value.indexOf(within[i]) != -1) found = true;
        }
    	}
    	if( (!paramsObj.negate && !found) || (paramsObj.negate && found) ) jd.plugins.x2Validate.fail(message);
    	return true;
    },

    /**不包含验证
     *@param {String} value - 值
     *@param {Object} paramsObj - 验证参数对象<br>
     *failureMessage {String} - the message to show when the field fails validation
     *(DEFAULT: "Must not be included in the list!")<br>
     *within {Array} - an array of values that the value should not fall in
     *(DEFAULT: [])<br>
     *allowNull {Bool} - if true, and a null value is passed in, validates as true
     *(DEFAULT: false)<br>
     *partialMatch {Bool} - if true, will not only validate against the whole value to check but also if it is a substring of the value
     *(DEFAULT: false)<br>
     *caseSensitive {Bool} - if false will compare strings case insensitively
     *(DEFAULT: true)<br>
	 *@return {Boolean} 验证是否通过 TRUE|FALSE
     */
    Exclusion: function(value, paramsObj){
      var paramsObj = paramsObj || {};
    	paramsObj.failureMessage = paramsObj.failureMessage || "\u5fc5\u987b\u4e0d\u5728\u5217\u8868\u4e2d!";
      paramsObj.negate = true;
    	jd.plugins.x2Validate.Inclusion(value, paramsObj);
      return true;
    },

    /**字段确认验证，如手机号输入两次，前后是否一至的验证
     *@param {String} value - 值
     *@param {Object} paramsObj - 验证参数对象<br>
     *failureMessage {String} - the message to show when the field fails validation
     *(DEFAULT: "Does not match!")<br>
     *match {String} - 输入参数中的字段名<br>
	 *@return {Boolean} 验证是否通过 TRUE|FALSE
     */
    Confirmation: function(value, paramsObj){
      	if(!paramsObj.match) throw new Error("Validate::Confirmation - Error validating confirmation: Id of element to match must be provided!");
    	var paramsObj = paramsObj || {};
    	var message = paramsObj.failureMessage || "\u8f93\u5165\u4e0d\u6b63\u786e!";
    	var match = eval("paramsObj.param."+paramsObj.match);
    	if(!match) throw new Error("Validate::Confirmation - There is no reference with name of, or element with id of '" + paramsObj.match + "'!");
    	if(value != match.value){
    	  	jd.plugins.x2Validate.fail(message);
    	}
    	return true;
    },


	/**用户自定义验证
	 *@param {String} value - 值
     *@param {Object} paramsObj - 验证参数对象<br>
     *failureMessage {String} - 验证失败后的提示信息 默认值 - 不正确<br>
     *against {Function}  - 一个验证函数 传入值和参数返回是否验证通过 return true or false <br>
     * (默认值: function against(value, args){ return true; })<br>
     *args {Object} - 验证函数against中需要的参数<br>
     *(默认值: {})<br>
	 *@return {Boolean} 验证是否通过 TRUE|FALSE
     */
	Custom: function(value, paramsObj){
		var paramsObj = paramsObj || {};
		var against = paramsObj.against || function(){ return true; };
		var args = paramsObj.args || {};
		var message = paramsObj.failureMessage || "\u65e0\u6548\u503c!";
	    if(!against(value, args)) jd.plugins.x2Validate.fail(message);
	    return true;
	  },

	/**立即验证
	*@param {Function} validationFunction 验证方法
	*@param {String} value 值
	*@param {Object} validationParamsObj 验证参数对象
	*@return {Boolean} 验证是否通过 TRUE|FALSE
	*/
	 now: function(validationFunction, value, validationParamsObj){
      	if(!validationFunction) throw new Error("校验::now - 验证函数必须存在!");
    	var isValid = true;
        try{
    		validationFunction(value, validationParamsObj || {});
    	} catch(error) {
    		if(error instanceof jd.plugins.x2Validate.Error){
    			isValid =  false;
    		}else{
    		 	throw error;
    		}
    	}finally{
            return isValid
        }
    },

	/**验证失败处理方法
	*@param {String} errorMessage 错误消息
	*@return void
	*/
	fail: function(errorMessage){
            throw new jd.plugins.x2Validate.Error(errorMessage);
    },

	/**验证异常定义
	*@param {String} errorMessage 错误消息
	*@return void
	*/
    Error: function(errorMessage){
    	this.message = errorMessage;
    	this.name = 'ValidationError';
    }
}

//简写
var $validate=jd.plugins.x2Validate;


/**批量验证
*@param {Array} _rules 验证规则指定（数组)
*@param {Object} sets 被验证对象
*@return {Boolean} 是否验证通过 TRUE | FALSE
*/
jd.plugins.x2Validate.batchValidate=function(_rules,sets){
	var fail=true;
	var rules=$.extend(true,{},_rules);
	for(var j=0;j<rules.length;j++){
		for(var k=0;k<rules[j].validates.length;k++){
			rules[j].validates[k].param=sets;
		}
	}

	for(var i=0;i<rules.length;i++){
		var fieldName=rules[i].fieldName;
		rules[i].fieldValue=eval("sets."+fieldName);
		if(rules[i].fieldValue==null){
			console.error("参数：",fieldName,"缺失,请检查有否定义和传入！");
			fail=false;
		}else{
			var _v=new jd.plugins.x2Validation(rules[i]);
			if(!_v.doValidations()){
				console.error("参数：",_v.fieldName,"=",_v.fieldValue,"校验出错了，原因是：",_v.message)
				fail=false;
			}
		}
	}
	return fail;
}



/**批量验证并返回错误对象
*@param {Array} _rules 验证规则指定（数组)
*@param {Object} sets 被验证对象
*@return {Object} 验证结果 result={msg:'',isPass:true}
*/
jd.plugins.x2Validate.batchValidateMsg=function(rules,sets){
	var result={msg:'',isPass:true};
	var fail=true;
	for(var j=0;j<rules.length;j++){
		for(var k=0;k<rules[j].validates.length;k++){
			rules[j].validates[k].param=sets;
		}
	}
	for(var i=0;i<rules.length;i++){
		var fieldName=rules[i].fieldName;
		rules[i].fieldValue=eval("sets."+fieldName);
		if(rules[i].fieldValue==null){
			console.error("参数：",fieldName,"缺失,请检查有否定义和传入！");
			fail=false;
		}else{
			var _v=new jd.plugins.x2Validation(rules[i]);
			if(!_v.doValidations()){
				console.error("参数：",_v.fieldName,"=",_v.fieldValue,"校验出错了，原因是：",_v.message)
				result.msg+=_v.message+"&nbsp;&nbsp;&nbsp;";
				fail=false;
			}
		}
	}
	result.isPass=fail;
	return result;
}


/*
调用样例
jd.plugins.x2Validate.validation_1=[
	{fieldName:'lengthField',fieldValue:'', validates:[{f:$validate.Presence,failureMessage: "必填" },{f:$validate.Length, minimum: 2, maximum: 4}]},
	{fieldName:'phone',fieldValue:'', validates:[{f:$validate.Mobile}]}
]

var _s={lengthField:'2',phone:'1358810520',IDCard:'330603198802030519',servicePass:'1',accountOpen:'1',payOnline:'1',SMSAlerts:'2',wisdomHospital:'dass'}
console.info("校验最终结果：",jd.plugins.x2Validate.batchValidate(jd.plugins.x2Validate.validation_1,_s));
*/
//jd_schedule.js
//
/**@class 类 jd.plugins.x2Scheduled 时钟组件
 * 用与在页面上生成一个唯的时钟，100ms遍历一次集合中的注册对象，执行指定的回调方法（观察者模式Observer）
*@version 当前版本 2.0.14.1121
*@author 徐翔
*@see <a href="mailto:china_xuxiang@163.com"  target="_blank">email:china_xuxiang@163.com</a >
*/
var jdSchedule=jd.plugins.x2Scheduled={
	/**
	 * 运行
	 * */
	running:function(){
		var values = this.handlesMap.values();

		for(var i =0 ;i<values.length;i++){
			var _handle=values[i];
			var _callback=_handle.callback;
			var _date=new Date();
			var _sub=_date-_handle.startDate;
			var _ccount=parseInt(_sub/_handle.interval);//从过去的秒数来推算执行次数
			//以下要判断是否要执行这个计划
			//条件：执行次数还有或无限执行类，及到可运行时间了吗？
			if((_handle.runCount<=_handle.count || _handle.count==0 ) && (_ccount>_handle.runCount) || (_handle.runCount==0 && _handle.execType==jd.plugins.x2ScheduledObserver.IMMEDIATELY) ){
				//如果是立即执行类型，那在第一次执行时，修改_handle.startDate为当前时间减去间隔时间,以保证本次做为正常的执行次数
				if((_handle.runCount==0 && _handle.execType==jd.plugins.x2ScheduledObserver.IMMEDIATELY))
						_handle.startDate=new Date()-_handle.interval;

				_handle.runCount++;//运行次数+1
				var stepCount=0;//返回计数值
				if(_handle.count==0 || _handle.direct==jd.plugins.x2ScheduledObserver.ASC){
					stepCount=_handle.runCount;
				}else{
					stepCount=_handle.count-_handle.runCount;
				}

				//转当前时间为服务器时间
				var _servDate=new Date(_date.getTime()+jd.global.serverTimeDifference);
				//如果是最后一次那就移除掉
				if(_handle.runCount >= _handle.count && _handle.count!=0 ){
					this.remove(_handle.name);
				}
				//执行回调
				if(this.debug) console.log(jd.fn.getTime(),"计划名：",_handle.name,"执行回调方法：",_handle.callback.toString().substring(0,100),"...");
				try{
					if(_callback){
						_callback(stepCount,_servDate);
//						console.log(_handle.timer)
//						window.clearTimeout(_handle.timer);//清除之前的_handle定时器
//						console.log(_handle.timer)
//						_handle.timer=window.setTimeout(_callback(stepCount,_servDate),5);//启一个新的定时器马上运行

					}
				}catch(error){
					if(error instanceof jd.exception.Error)
		    			jd.exception.ErrorProcess(error);
		    		else
						console.log("jd_x2Scheduled caught exception");
						console.dir(error);
						console.log(error.stack);
				}



			}else{
				if(_handle.runCount >= _handle.count && _handle.count!=0 ){
					this.remove(_handle.name);
				}

			}
		}
	},
 

	/**100ms时钟*/
	clock:null,
	

	start:function(){
		this.clock=window.setInterval(function(){jd.plugins.x2Scheduled.running();}, 100)
	},
	/**
	 * 老是要开硬件平台太麻烦，加个暂停时钟的方法。。
	 */
	stop:function(){
		this.clock=window.clearInterval(this.clock)
	},

	/**观察者的MAP集合*/
	handlesMap:new jd.collection.HashMap(),

	/**添加处理方法到集合中去
	*@param {String} planName 错误处理类名
	*@param {Function} handle 错误处理Function实例
	*@return {jd.plugins.x2interval} jd.plugins.x2interval
	*/
	add:function(planName,handle){
		if(this.debug) console.log(jd.fn.getTime(),"添加计划：",planName,handle);
		var _handle=jQuery.extend(true,{},jd.plugins.x2ScheduledObserver,handle);
		_handle.name=planName;
		_handle.init();//初始化一下对象
		this.handlesMap.put(planName,_handle);
		return jd.plugins.x2interval;
	},

	/**去除处理方法从集合中
	*@param {String} planName 错误处理类名
	*@return {jd.plugins.x2interval} jd.plugins.x2interval
	*/
	remove:function(planName){
		if(this.debug) console.log(jd.fn.getTime(),"移除计划：",planName);
		this.handlesMap.remove(planName);
		return jd.plugins.x2interval;
	},

	/**取计划从集合中
	*@param {String} planName 错误处理类名
	*@return {jd.plugins.x2ScheduledObserver} 计划对象
	*/
	get:function(planName){
		return this.handlesMap.get(planName);
	},

	/**去除处理方法从集合中
	 */
	clearHandles:function(){
		if(this.debug) console.log(jd.fn.getTime(),"清除",this.handlesMap.size(),"个定时计划");
		this.handlesMap.clear();
	},

	/**是否调试模式
	 * true 是 -  控制台将输出日志
	 * false 否 - 不输出日志
	 * */
	debug:jd.global.debug || false
}

/**@class 类 jd.plugins.x2ScheduledObserver 时钟组件-观察者
 * 定时计划类
*@version 当前版本 2.0.14.1124
*@author 徐翔
*@see <a href="mailto:china_xuxiang@163.com"  target="_blank">email:china_xuxiang@163.com</a >
*/
jd.plugins.x2ScheduledObserver={
	/**计划名称 */
	name:'',

	timer:null,

	/**回调方法
	 * @param {int} count 计数 分为正序计数和倒序计数
	 * @param {date} servDate 服务器时间
	 * @return void
	 * */
	callback:function(count,servDate){},

	/**时间间隔 必需是100的倍数*/
	interval:100,

	/**希望执行的次数 默认1次 0表示不停的执行*/
	count:1,

	/**已执行的次数*/
	runCount:0,

	/**常量 正序 如 1 2 3 4 5 */
	ASC:0,

	/**常量 倒序 如 5 4 3 2 1 */
	DESC:1,

	/**返回计数方向 正序或倒序 默认升序 */
	direct:0,

	/**开始时间 */
	startDate:null,

	/**执行类型 默认是NEXTTIME*/
	execType:1,

	/**常量 立即执行 一加入就执行*/
	IMMEDIATELY:0,

	/**常量 下次执行 加入后等待条件符合才执行*/
	NEXTTIME:1,

	/**初始化方法*/
	init:function(){
		if(this.interval<100)//不能小于100ms
			interval=100;
		if(this.direct!=this.ASC && this.direct!=this.DESC)//不能是空的，默认升序
			this.direct=this.ASC;
		if(this.count<0)//默认1次
			this.count=1;
		if(this.execType==null)
			this.execType=this.NEXTTIME;

		this.startDate=new Date();
	}
}

//jd.plugins.x2interval.serverTimeDifference= <%=java.util.Calendar.getInstance().getTimeInMillis()%> -(new   Date());


// jd_x2Dialog.js
/**@class 类 jd.plugins.x2Dialog 对话框组件
*@version 当前版本 2.0.14.1127
*@author 徐翔
*@see <a href="mailto:china_xuxiang@163.com"  target="_blank">email:china_xuxiang@163.com</a >
*/

var jdDialog=jd.plugins.x2Dialog=function(config){
	/**对象配置参数<br>
	 *  id:"dialog_"+jd.plugins.x2Dialog.getNextIdSequence()<br>
	 *	width:默认值 600px<br>
	 *	height:默认值 350px<br>
	 *	title:标题 信息提示:挂号业务 小字体:大字体 <br>
	 *	model:infoModel successModel errorModel 更多扩展<br>
	 *	msg:对话框内容，如果是iframeModel 那就是一个URL地址
	 *	btns:["确定","取消"]<br>
	 *	callback:null callback:function(dialog,btnName){}<br>
	 * scrolling:iframe方式下是否出滚动条
	 * execute:在显示对话框后 执行回调 function(dialog){}
	 * */
	this.config={
		id:"dialog_"+jd.plugins.x2Dialog.getNextIdSequence(),
		width:750,
		height:550,
		btnWidth:200,
		title:'信息提示',
		model:'infoModel', //infoModel successModel errorModel iframeModel(msg是一个URL)
		msg:'',
		btns:null,/*btns:["确定","取消"]*/
		callback:null,/*callback:function(dialog,btnName){}*/
		scrolling:'no',
		execute:null,
		split_top:0,
		split_height:-1,
		"z-index":1700,
		success:null
	}

	//更新构造参数到对象
	jQuery.extend(true,this.config,config);
	var dialog=this;

	/**对话框上的按钮集合JQUERY包装集对象*/
	this.btns=null;

	/**对话框模板*/
	this.tmplate='<div class="dialogA" id="{dialogA_id}"><div class="dialog_box transition"><div class="dialog_title" ></div><div class="dialog_content transition" ></div><div class="dialog_bbar transition"></div></div></div>';
	this.maskA_tmplate='<div class="maskA" id="{maskA_id}"><div class="maskA_content"></div></div>';
	/**获取HTML内容
	 * 从config.model中得到模型 并合成数据
	 * @return {String} 与模型合成后的结果
	 * */
	this.getOutputHtml=function(){
		if(this.config.model){
			var _model=jQuery("#"+this.config.model).parent().html();
			this.config.html=_model.replace("{msg}",this.config.msg)
							 .replace("{height}",this.config.height-162)
							 .replace("{width}",this.config.width-2)
							 .replaceAll("iframeiframe","iframe")
							 .replaceAll("{scrolling}",this.config.scrolling);
		}
		return this.config.html;
	}


	/**获取底栏按钮HTML
	 * @return {String} 合成后的按钮HTML
	 * */
	this.getBtns=function(){
		var _html_bbar="";
		if(!this.config.btns)
			return _html_bbar;
		for(var i=0;i<this.config.btns.length;i++){
			var _startNum=this.config.btns[i].indexOf('|');
			if(_startNum>0){
							var _curClass=this.config.btns[i].substring(_startNum+1);
						 	var _name=this.config.btns[i].substring(0,_startNum);
						 	console.log(_curClass+":"+_name);
							_html_bbar+='<input type="button" id="{id}" name="{name}"  class="dialogBtn" onclick="{click}" value="{name}"/>'
							.replaceAll("{click}","this.parentDialog.buttonClick('{name}')")
							.replaceAll("{id}",this.config.id+"_"+i)
							.replaceAll("{name}",_name)
							 .replaceAll("dialogBtn","dialogBtn "+_curClass);
					 	}else{
							_html_bbar+='<input type="button" id="{id}" name="{name}"  class="dialogBtn" onclick="{click}" value="{name}"/>'
							.replaceAll("{click}","this.parentDialog.buttonClick('{name}')")
							.replaceAll("{id}",this.config.id+"_"+i)
							.replaceAll("{name}",this.config.btns[i]);

					 	}

		}
		return _html_bbar;
	}

	/**获取对话框目标元素
	 * @return {Dom} 对话框元素对象
	 * */
	this.target=function(){
		return jQuery("#"+this.config.id);
	}



	/**标题处理
	 * @param {String} title 标题
	 * @return {String} 处理后的标题
	 * */
	this.filterTitle=function(title) {
		if (title.indexOf(":") > 0) {
			var tip = title.split(":");
			var title = tip[0] + ":" + "<span style='font-size:30px'>" + tip[1] + "</span>";
		} else {
			var title = "<span style='font-size:30px'>" + title + "</span>";
		}
		return title;
	}


	/**显示前初始化一下内容
	 * @return {Dom} 对话框元素对象
	 * */
	this.init=function(){
		if(this.config.split_height==-1)
			this.config.split_height=jQuery(window).height();
		if(this.config.model=='maskAModel'){
			if(jQuery("#"+this.config.id).length==0){
				var _t=this.maskA_tmplate.replace("{maskA_id}",this.config.id);
				jQuery(_t).appendTo("body");
				jQuery("#"+this.config.id+"  .maskA_content").empty().append(this.getOutputHtml());
				jQuery("#"+this.config.id).css("top",this.config.split_top+((this.config.split_height)/2-50)+"px");
			}
			//遮罩层
			if(jQuery('#dialog-overlay_'+this.config.id).length==0){
				var css="";
				css+="top:"+this.config.split_top+"px;"
				css+="height:"+this.config.split_height+"px;"
				jQuery('<div class="maskA-overlay" id="dialog-overlay_'+this.config.id+'" style="'+css+'""></div>').appendTo("body");
			}

			  if(this.config["z-index"]!=0){
			    	jQuery("#"+this.config.id).css("z-index",this.config["z-index"]+2);
			  		jQuery("#dialog-overlay_"+this.config.id).css("z-index",this.config["z-index"]+1);
			  }
		}
		else{

			if(jQuery("#"+this.config.id).length==0){
				var _t=this.tmplate.replace("{dialogA_id}",this.config.id);
				jQuery(_t).appendTo("body");
			}
			//放入标题
			jQuery("#"+this.config.id+"  .dialog_title").empty().append(this.filterTitle(this.config.title));
			//设置BOX宽高
			jQuery("#"+this.config.id+"  .dialog_box").css("width",this.config.width+"px")
			jQuery("#"+this.config.id).css("margin-left","-"+this.config.width/2+"px")

			//jQuery("#"+this.config.id).css("margin-top","-"+this.config.height/2+"px")
			jQuery("#"+this.config.id).css("top",this.config.split_top+((this.config.split_height-this.config.height)/2)+"px");
			jQuery("#"+this.config.id+"  .dialog_box").css("height",this.config.height+"px");
			//调整内容区尺寸
			jQuery("#"+this.config.id+"  .dialog_content").css("height",this.config.height-162+"px");
			//放入内容
			jQuery("#"+this.config.id+"  .dialog_content").empty().append(this.getOutputHtml());
			//放入按钮
			if(this.config.btns.length != 0){
				jQuery("#"+this.config.id+"  .dialog_bbar").empty().append(this.getBtns());
				this.btns=jQuery("#"+this.config.id+"  .dialog_bbar .dialogBtn");

				//把按钮绑定上本对话框对象
				jQuery("#"+this.config.id+"  .dialog_bbar .dialogBtn").each(function(){
					this.parentDialog=dialog;
				})
				//调整按钮尺寸
				jQuery("#"+this.config.id+"  .dialog_bbar .dialogBtn").css("width",this.config.btnwidth+"px");
			}else{
				jQuery("#"+this.config.id+"  .dialog_bbar").hide();
			}

			//遮罩层
			if(jQuery('#dialog-overlay_'+this.config.id).length==0){
				var css="";
				css+="top:"+this.config.split_top+"px;"
				css+="height:"+this.config.split_height+"px;"
				jQuery('<div class="dialog-overlay" id="dialog-overlay_'+this.config.id+'" style="'+css+'""></div>').appendTo("body");
			}

			//对位置的居中处理
			var content_height=jQuery("#"+this.config.id+"  .dialog_content").height();
			var content_width=jQuery("#"+this.config.id+"  .dialog_content").width();
			var _model=jQuery("#"+this.config.id+"  .dialog_content #"+this.config.model)

			if("errorModel,successModel,infoModel".indexOf(this.config.model)!=-1){
				_model.css("height",content_height+"px");
				//对left的计算
				_model.css("padding-left",((content_width-_model.width())/2)+"px");
				//对标准模板做进一步文字上的位置调整
				if((content_width-_model.width())>=12 ){
					_model.children().css("line-height","60px");
				}
			}
		}
		return this;
	}

	/**对话框显示
	 * @return {jd.plugins.x2Dialog} 对话框实例本身
	 * */
	this.show=function(){
		this.init();
		if(this.config.model=='maskAModel'){
			this.target().addClass("maskA-show");
			this.target().css("left",((document.documentElement.clientWidth-this.target().width())/2)+"px");
		}
		else{
			this.target().removeClass("dialog-hide");
			this.target().addClass("dialog-show");
		}

		//执行回调方法是否存在
		if(this.config.execute && this.config.execute.constructor==Function){
			this.config.execute(this);
		}

		return this;
	}


	/**隐藏对话框
	 * @return {jd.plugins.x2Dialog} 对话框实例本身
	 * */
	this.hide=function(ifClose){
		var _close=ifClose || false;
		var dialog=this;
		var target=dialog.target();

		if(this.config.model=='maskAModel'){
			this.target().removeClass("maskA-show");
			this.target().addClass("maskA-hide");//隐藏MASK
			if(_close==true){
					jQuery('#dialog-overlay_'+this.config.id).remove();
					jQuery("#"+dialog.config.id).remove();
			}
			try{
				jd.plugins.x2Scheduled.remove("计时器_mask");
			}
			catch(e){}
		}
		else{
			target.removeClass("dialog-show");//移出动画
			target.addClass("dialog-hide");//移出动画
			window.clearTimeout(this.timer);
			var _self=this;
			this.timer=setTimeout(function(){
					var target=dialog.target();
					_self.timer && window.clearTimeout(_self.timer);
					if(_close==true){
						jQuery("#dialog-overlay_"+dialog.config.id).remove();
						jQuery("#"+dialog.config.id).remove();
					}
			},450,dialog,_close);
		}

		return this;
	}
	this.timer=null;
	/**关闭对话框
	 * @return {jd.plugins.x2Dialog} 对话框实例本身
	 * */
	this.close=function(){
		this.hide(true);
	}


	/**设置标题
	 * @return {Dom} 对话框元素对象
	 * */
	this.setTitle=function(title){
		this.config.title=title;
		return this;
	}

	/**设置高度
	 * @param {int} 高度
	 * @return {Dom} 对话框元素对象
	 * */
	this.setHeight=function(height){
		this.config.height=height;
		return this;
	}

	/**设置宽度
	 * @param {int} 宽度
	 * @return {Dom} 对话框元素对象
	 * */
	this.setWidth=function(width){
		this.config.width=width;
		return this;
	}

	/**设置模板
	 * @param {String} 模板名
	 * @return {Dom} 对话框元素对象
	 * */
	this.setModel=function(model){
		this.config.model=model;
		return this;
	}

	/**设置msg
	 * @param {String} msg
	 * @return {Dom} 对话框元素对象
	 * */
	this.setMsg=function(msg){
		this.config.msg=msg;
		return this;
	}

	this.updateMsg=function(msg){
		$("#"+this.config.id+" #msgS").html(msg);
		$("#"+this.config.id).css("left",((document.documentElement.clientWidth-$(".maskA-show").width())/2)+"px");
		return this;
	}

	/**当对话框按钮单击的回调传入的callback方法
	 * @param {String} 点击的按钮名称
	 * @return {Dom} 对话框元素对象
	 * */
	this.buttonClick=function(btnName){
		if(this.config.callback){
			this.config.callback(dialog,btnName);
		}
		return this;
	}

	this.status=function(status){
		if(status=='error'){
			$('#'+this.config.id+' #maskAModel #status').removeAttr("class");
			$('#'+this.config.id+' #maskAModel #status').addClass('maskA_imgbak_div_error');
		}
		else if(status=='info'){
			$('#'+this.config.id+' #maskAModel #status').removeAttr("class");
			$('#'+this.config.id+' #maskAModel #status').addClass('maskA_imgbak_div_info');
		}
		else if(status=='loading'){
			$('#'+this.config.id+' #maskAModel #status').removeAttr("class");
			$('#'+this.config.id+' #maskAModel #status').addClass('maskA_imgbak_div');
		}
		else if(status=='success'){
			$('#'+this.config.id+' #maskAModel #status').removeAttr("class");
			$('#'+this.config.id+' #maskAModel #status').addClass('maskA_imgbak_div_success');
		}
		return this;
	}

}

/**@class 单例 jd.plugins.toast 快速提示
*@version 当前版本 2.0.14.1127
*@author 徐翔
*@see <a href="mailto:china_xuxiang@163.com"  target="_blank">email:china_xuxiang@163.com</a >
*/

jd.plugins.toast={
	/**
	 *@param {String} msg 提示内容
	 *@param {int} duration 持续时间 单位:毫秒
	 * */
	show:function(msg,duration,split_top,split_height){
		var _duration=duration || 4000;
		var _split_top=split_top || 0;
		var _split_height=split_height || (jQuery(window).height()-_split_top);
		var css="left:"+(jQuery(window).width()-550)/2+"px;";
			css+="top:"+(_split_top+(_split_height/2))+"px;";
		jQuery(".toast").remove();
		jQuery('<div class="toast" style="'+css+'"></div>').appendTo("body");
		jQuery(".toast").html(msg);
		jQuery(".toast").fadeIn("slow");
		jd.plugins.x2Scheduled.add('jd.plugins.toast.show',{callback:
			function(count,servDate){//回调函数
				jQuery(".toast").fadeOut("slow");
			}
		,interval:_duration,count:1,IMMEDIATELY:0});
	}
}
var $toast=jd.plugins.toast;


//简写
var $x2Dialog=jd.plugins.x2Dialog;


//以下为对话框快速配置的定义

/*对话框序列编号*/
jd.plugins.x2Dialog.idSequence=0;

/*获取页面对话框序列编号*/
jd.plugins.x2Dialog.getNextIdSequence=function(){
	if(!jd.plugins.x2Dialog.idSequence) jd.plugins.x2Dialog.idSequence=0;
	return jd.plugins.x2Dialog.idSequence++;
}

/**工厂方法 显示对话框
 * @param {Object} config 可多个 如jd.plugins.x2Dialog.show({msg:'打印完成'},$x2Dialog.successYesConfig)<br>后面的参数对象会覆盖前面的
 * @return {Dom} 对话框元素对象
 * */
jd.plugins.x2Dialog.show=function(){
	return jd.plugins.x2Dialog.create(arguments).show();
}


/**工厂方法 创建对话框
 * @param {Object} config 可多个 如jd.plugins.x2Dialog.show({msg:'打印完成'},$x2Dialog.successYesConfig)<br>后面的参数对象会覆盖前面的
 * @return {Dom} 对话框元素对象
 * */
jd.plugins.x2Dialog.create=function(args){
	var _args=arguments;
	//判断如果args是个数组对象，那就是jd.plugins.x2Dialog.show进来的
	if(args.length && args.length>=1)
		_args=args;
	var _config={};
	for(var i in _args){
		_config=jQuery.extend(false,_config,_args[i]);
	}
	return new jd.plugins.x2Dialog(_config);
}



/**快速参数配置 成功信息提示 带 确定按钮*/
jd.plugins.x2Dialog.closeConfig={title:'信息提示',model:'successModel',btns:["确定"],
		callback:function(dialog,btnName){
			dialog.close();
		}
};
/**快速参数配置 成功信息提示 带 确定按钮*/
jd.plugins.x2Dialog.successYesConfig={title:'信息提示',model:'successModel',btns:["确定"],
					callback:function(dialog,btnName){
							if(btnName=="确定"){
								dialog.close();
							}
							if(btnName=="取消"){
								dialog.close();
							}
					}
};

/**快速参数配置 失败信息提示 带 确定按钮*/
jd.plugins.x2Dialog.errorYesConfig={title:'信息提示',model:'errorModel',btns:["确定"],
					callback:function(dialog,btnName){
							if(btnName=="确定"){
								dialog.close();
							}
					}
};

/**快速参数配置 信息提示 带 确定按钮*/
jd.plugins.x2Dialog.infoYesConfig={title:'信息提示',model:'infoModel',btns:["确定"],
					callback:function(dialog,btnName){
							if(btnName=="确定"){
								dialog.close();
							}
					}
};


/**带倒计时功能的配置
 * @param {Object} config 参数配置
 * CountdownTimes 倒计时秒数 ,默认 5秒<br>
 * CountdownBtn 倒计时显示目标按钮名称 , 默认 确定<br>
 * CountdownClose 时间到后是否关闭 默认 true<br>
 * CountdownCallback 时间到后执行一个方法 默认为空<br>
 * */
jd.plugins.x2Dialog.countDown=function(config){
	var _default={
					  CountdownTimes:5,
					  CountdownBtn:'确定',
					  CountdownClose:true,
					  CountdownCallback:null,
					  execute:function(dialog){
							if(!jd.plugins.x2Scheduled) console.error("请先加载jd_x2Scheduled.js文件...")
							//dialog.btns.attr("disabled","disabled");
							var _CountdownTimes=dialog.config.CountdownTimes || 5;
							var _CountdownBtn=dialog.config.CountdownBtn || '确定';
							var _btn=dialog.btns.filter("[value="+_CountdownBtn+"]");
							_btn.click(function(){
								jd.plugins.x2Scheduled.remove(dialog.config.id+'倒计时');
							})
							jd.plugins.x2Scheduled.add(dialog.config.id+'倒计时',{callback:
									function(count,servDate){//回调函数
											_btn.val(_btn.attr("name")+"("+count+"秒)")
											if(count <= 2){
												dialog.btns.attr("disabled","disabled");
											}
											if(count==0){
												dialog.btns.removeAttr("disabled");
												if(dialog.config.CountdownClose)
													dialog.close();
												if(dialog.config.CountdownCallback && dialog.config.CountdownCallback.constructor==Function)
													dialog.config.CountdownCallback(dialog);
											}//end if
									}//end function
							,interval:1000,execType:jd.plugins.x2ScheduledObserver.IMMEDIATELY,count:_CountdownTimes,direct:jd.plugins.x2ScheduledObserver.DESC});
					 	}//end function
					};
	return jQuery.extend(true,_default,config);
}


/**数字密码键盘的配置
 * 请一定要配置 inputTxt:this
 * dialog.config.inputTxt - 保存有目标输入框对象（非jQuery对象）
 * dialog.config.keyboard - 键盘对象
 * */
jd.plugins.x2Dialog.kbNumberModel={
	title:'信息提示:数字密码键盘',model:'kbNumberModel',
	btns:["确定","取消"],
	height:600,width:420,
	execute:function(dialog){
		//初始化键盘
		dialog.config.keyboard=new jd.plugins.x2Keyboard({
								parentId:dialog.config.id,
								inputTxt:dialog.config.inputTxt,
								inputId:"txt_word",
								defaultIm:"数字输入"

						});
	},
	callback:function(dialog,btnName){
		if(btnName=="确定"){
			/*输入校验*/
			if(dialog.config.validates){
				var validate_Result=$validate.batchValidateMsg([{fieldName:'txt_word',fieldValue:'', validates:dialog.config.validates}],{'txt_word':dialog.config.keyboard.getValue()});
				if(!validate_Result.isPass){
					$toast.show("填写错误:"+validate_Result.msg,null,dialog.config.split_top,dialog.config.split_height);
					return false;
				}
			}

			if(dialog.config.beforeClose && typeof(dialog.config.beforeClose)=="function"){
				dialog.config.success && dialog.config.success(dialog.config.keyboard.getValue());
				if(dialog.config.beforeClose(dialog,btnName)==false)
					return ;
			}

			/*校验通过后的处理*/
			// jQuery(dialog.config.inputTxt).val(dialog.config.keyboard.getValue());
			// AleksandrLXX
			dialog.config.success&&console.log('success')
			dialog.config.success && dialog.config.success(dialog.config.keyboard.getValue());
		}else{
			if(dialog.config.beforeClose && typeof(dialog.config.beforeClose)=="function"){
				if(dialog.config.beforeClose(dialog,btnName)==false)
					return ;
			}
		}
		dialog.close();

	}
}

/**数字键盘的配置
 * 请一定要配置 inputTxt:this
 * dialog.config.inputTxt - 保存有目标输入框对象（非jQuery对象）
 * dialog.config.keyboard - 键盘对象
 * */
jd.plugins.x2Dialog.kbNumberPasswordModel={
	title:'信息提示:数字键盘',model:'kbNumberPasswordModel',
	btns:["确定","取消"],
	height:600,width:420,
	execute:function(dialog){
		//初始化键盘
		dialog.config.keyboard=new jd.plugins.x2Keyboard({
								parentId:dialog.config.id,
								inputTxt:dialog.config.inputTxt,
								inputId:"txt_word",
								defaultIm:"数字输入"

						});
	},
	callback:function(dialog,btnName){
		if(btnName=="确定"){
			/*输入校验*/
			if(dialog.config.validates){
				var validate_Result=$validate.batchValidateMsg([{fieldName:'txt_word',fieldValue:'', validates:dialog.config.validates}],{'txt_word':dialog.config.keyboard.getValue()});
				if(!validate_Result.isPass){
					$toast.show("填写错误:"+validate_Result.msg,null,dialog.config.split_top,dialog.config.split_height);
					return false;
				}
			}

			if(dialog.config.beforeClose && typeof(dialog.config.beforeClose)=="function"){
				if(dialog.config.beforeClose(dialog,btnName)==false)
					return ;
			}

			/*校验通过后的处理*/
			jQuery(dialog.config.inputTxt).val(dialog.config.keyboard.getValue());
		}else{
			if(dialog.config.beforeClose && typeof(dialog.config.beforeClose)=="function"){
				if(dialog.config.beforeClose(dialog,btnName)==false)
					return ;
			}
		}
		dialog.close();

	}
}

/**左右按钮组数字键盘的配置
 * 请一定要配置 inputTxt:this
 * dialog.config.inputTxt - 保存有目标输入框对象（非jQuery对象）
 * dialog.config.keyboard - 键盘对象
 * */
jd.plugins.x2Dialog.kbAmountModel={
	title:'信息提示:数字键盘',model:'kbAmountModel',
	btns:["确定","取消"],
	height:700,width:740,
	execute:function(dialog){
		//初始化键盘
		dialog.config.keyboard=new jd.plugins.x2Keyboard({
								parentId:dialog.config.id,
								inputTxt:dialog.config.inputTxt,
								inputId:"txt_word",
								defaultIm:"数字输入"

						});
	},
	callback:function(dialog,btnName){
		if(btnName=="确定"){
			/*输入校验*/
			if(dialog.config.validates){
				var validate_Result=$validate.batchValidateMsg([{fieldName:'txt_word',fieldValue:'', validates:dialog.config.validates}],{'txt_word':dialog.config.keyboard.getValue()});
				if(!validate_Result.isPass){
					$toast.show("填写错误:"+validate_Result.msg,null,dialog.config.split_top,dialog.config.split_height);
					return false;
				}
			}

			if(dialog.config.beforeClose && typeof(dialog.config.beforeClose)=="function"){
				if(dialog.config.beforeClose(dialog,btnName)==false)
					return ;
			}
			/*校验通过后的处理*/
			jQuery(dialog.config.inputTxt).val(dialog.config.keyboard.getValue());
		}else{
			if(dialog.config.beforeClose && typeof(dialog.config.beforeClose)=="function"){
				if(dialog.config.beforeClose(dialog,btnName)==false)
					return ;
			}
		}
		dialog.close();
	}
}


/**身份证键盘的配置
 * 请一定要配置 inputTxt:this
 * dialog.config.inputTxt - 保存有目标输入框对象（非jQuery对象）
 * dialog.config.keyboard - 键盘对象
 * */
jd.plugins.x2Dialog.kbIdCardModel={
	title:'信息提示:数字键盘',model:'kbIdCardModel',
	btns:["确定","取消"],
	height:520,width:525,
	execute:function(dialog){
		//初始化键盘
		dialog.config.keyboard=new jd.plugins.x2Keyboard({
								parentId:dialog.config.id,
								inputTxt:dialog.config.inputTxt,
								inputId:"txt_word",
								defaultIm:"数字输入"
						});
	},
	callback:function(dialog,btnName){
		if(btnName=="确定"){
			/*输入校验*/
			if(dialog.config.validates){
				var validate_Result=$validate.batchValidateMsg([{fieldName:'txt_word',fieldValue:'', validates:dialog.config.validates}],{'txt_word':dialog.config.keyboard.getValue()});
				if(!validate_Result.isPass){
					$toast.show("填写错误:"+validate_Result.msg,null,dialog.config.split_top,dialog.config.split_height);
					return false;
				}
			}

			if(dialog.config.beforeClose && typeof(dialog.config.beforeClose)=="function"){
				if(dialog.config.beforeClose(dialog,btnName)==false)
					return ;
			}
			/*校验通过后的处理*/
			jQuery(dialog.config.inputTxt).val(dialog.config.keyboard.getValue());
		}else{
			if(dialog.config.beforeClose && typeof(dialog.config.beforeClose)=="function"){
				if(dialog.config.beforeClose(dialog,btnName)==false)
					return ;
			}
		}
		dialog.close();

	}
}


/**手机号的配置
 * 请一定要配置 inputTxt:this
 * dialog.config.inputTxt - 保存有目标输入框对象（非jQuery对象）
 * dialog.config.keyboard - 键盘对象
 * */
jd.plugins.x2Dialog.kbPhoneModel={
	title:'信息提示:请输入手机',model:'kbPhoneModel',
	btns:["确定","取消"],
	height:600,width:420,
	execute:function(dialog){
		//初始化键盘
		dialog.config.keyboard=new jd.plugins.x2Keyboard({
								parentId:dialog.config.id,
								inputTxt:dialog.config.inputTxt,
								inputId:"txt_word",
								defaultIm:"数字输入"
						});
	},
	callback:function(dialog,btnName){
		if(btnName=="确定"){
			/*输入校验*/
			if(dialog.config.validates){
				var validate_Result=$validate.batchValidateMsg([{fieldName:'txt_word',fieldValue:'', validates:dialog.config.validates}],{'txt_word':dialog.config.keyboard.getValue()});
				if(!validate_Result.isPass){
					$toast.show("填写错误:"+validate_Result.msg,null,dialog.config.split_top,dialog.config.split_height);
					return false;
				}
			}

			if(dialog.config.beforeClose && typeof(dialog.config.beforeClose)=="function"){
				if(dialog.config.beforeClose(dialog,btnName)==false)
					return ;
			}
			/*校验通过后的处理*/
			// jQuery(dialog.config.inputTxt).val(dialog.config.keyboard.getValue());
						dialog.config.success && dialog.config.success(dialog.config.keyboard.getValue());

		}else{
			if(dialog.config.beforeClose && typeof(dialog.config.beforeClose)=="function"){
				if(dialog.config.beforeClose(dialog,btnName)==false)
					return ;
			}
		}
		dialog.close();

	}
}

/**全键盘的配置
 * 请一定要配置 inputTxt:this
 * dialog.config.inputTxt - 保存有目标输入框对象（非jQuery对象）
 * dialog.config.keyboard - 键盘对象
 * */
jd.plugins.x2Dialog.kbFullModel={
	title:'信息提示:拼音输入',model:'kbFullModel',
	btns:["确定","取消"],
	height:590,width:1034,
	execute:function(dialog){
		//初始化键盘
		dialog.config.keyboard=new jd.plugins.x2Keyboard({
								parentId:dialog.config.id,
								inputTxt:dialog.config.inputTxt,
								inputId:"txt_word",
								defaultIm:"拼音输入"
						});
	},
	callback:function(dialog,btnName){
		closePinyinDialog();
		if(btnName=="确定"){
			/*输入校验*/
			if(dialog.config.validates){
				var validate_Result=$validate.batchValidateMsg([{fieldName:'txt_word',fieldValue:'', validates:dialog.config.validates}],{'txt_word':dialog.config.keyboard.getValue()});
				if(!validate_Result.isPass){
					$toast.show("填写错误:"+validate_Result.msg,null,dialog.config.split_top,dialog.config.split_height);
					return false;
				}
			}

			if(dialog.config.beforeClose && typeof(dialog.config.beforeClose)=="function"){
				if(dialog.config.beforeClose(dialog,btnName)==false)
					return ;
			}
			/*校验通过后的处理*/
			jQuery(dialog.config.inputTxt).val(dialog.config.keyboard.getValue());
		}else{
			if(dialog.config.beforeClose && typeof(dialog.config.beforeClose)=="function"){
				if(dialog.config.beforeClose(dialog,btnName)==false)
					return ;
			}
		}
		dialog.close();

	}
}


/**全键盘的配置
 * 请一定要配置 inputTxt:this
 * dialog.config.inputTxt - 保存有目标输入框对象（非jQuery对象）
 * dialog.config.keyboard - 键盘对象
 * */
jd.plugins.x2Dialog.kbFullModelEnglish={
	title:'信息提示:英文输入',model:'kbFullModel',
	btns:["确定","取消"],
	height:590,width:1034,
	execute:function(dialog){
		//初始化键盘
		dialog.config.keyboard=new jd.plugins.x2Keyboard({
								parentId:dialog.config.id,
								inputTxt:dialog.config.inputTxt,
								inputId:"txt_word",
								defaultIm:"英文输入",
								capslock:dialog.config.capslock
						});
	},
	callback:function(dialog,btnName){
		closePinyinDialog();
		if(btnName=="确定"){
			/*输入校验*/
			if(dialog.config.validates){
				var validate_Result=$validate.batchValidateMsg([{fieldName:'txt_word',fieldValue:'', validates:dialog.config.validates}],{'txt_word':dialog.config.keyboard.getValue()});
				if(!validate_Result.isPass){
					$toast.show("填写错误:"+validate_Result.msg,null,dialog.config.split_top,dialog.config.split_height);
					return false;
				}
			}

			if(dialog.config.beforeClose && typeof(dialog.config.beforeClose)=="function"){
				if(dialog.config.beforeClose(dialog,btnName)==false)
					return ;
			}

			/*校验通过后的处理*/
			jQuery(dialog.config.inputTxt).val(dialog.config.keyboard.getValue());
		}else{
			if(dialog.config.beforeClose && typeof(dialog.config.beforeClose)=="function"){
				if(dialog.config.beforeClose(dialog,btnName)==false)
					return ;
			}
		}
		dialog.close();
	}
}

/**全密码键盘的配置
 * 请一定要配置 inputTxt:this
 * dialog.config.inputTxt - 保存有目标输入框对象（非jQuery对象）
 * dialog.config.keyboard - 键盘对象
 * */
jd.plugins.x2Dialog.kbFullPasswordModel={
	title:'信息提示:英文输入',model:'kbFullPasswordModel',
	btns:["确定","取消"],
	height:590,width:1034,
	execute:function(dialog){
		//初始化键盘
		dialog.config.keyboard=new jd.plugins.x2Keyboard({
								parentId:dialog.config.id,
								inputTxt:dialog.config.inputTxt,
								inputId:"txt_word",
								defaultIm:"英文输入"
						});
	},
	callback:function(dialog,btnName){
		closePinyinDialog();
		if(btnName=="确定"){
			/*输入校验*/
			if(dialog.config.validates){
				var validate_Result=$validate.batchValidateMsg([{fieldName:'txt_word',fieldValue:'', validates:dialog.config.validates}],{'txt_word':dialog.config.keyboard.getValue()});
				if(!validate_Result.isPass){
					$toast.show("填写错误:"+validate_Result.msg,null,dialog.config.split_top,dialog.config.split_height);
					return false;
				}
			}

			if(dialog.config.beforeClose && typeof(dialog.config.beforeClose)=="function"){
				if(dialog.config.beforeClose(dialog,btnName)==false)
					return ;
			}
			/*校验通过后的处理*/
			jQuery(dialog.config.inputTxt).val(dialog.config.keyboard.getValue());
		}else{
			if(dialog.config.beforeClose && typeof(dialog.config.beforeClose)=="function"){
				if(dialog.config.beforeClose(dialog,btnName)==false)
					return ;
			}
		}
		dialog.close();

	}
}

//定义一个出错回首页的对话框
jd.plugins.x2Dialog.errHomeDialog=function(err){
	$page.dialogError=$x2Dialog.show({
		model:'infoModel',
		msg:$fn.renameError(err.errorMsg),
		title:err.errorTitle,
		btns:["确定"],
		callback:function(dialog,btnName){
			$page.goHome();
		}
	});
}
//定义一个出错关闭的对话框
jd.plugins.x2Dialog.errCloseDialog=function(err){
	$page.dialogError=$x2Dialog.show({
		model:'infoModel',
		msg:$fn.renameError(err.errorMsg),
		title:err.errorTitle,
		btns:["确定"],
		callback:function(dialog,btnName){
			dialog.close();
		}
	});
	$page.transOnError(err.errorCode,err.errorMsg,err.errorTrans);
}
//定义一个出错关闭并执行JS的对话框
jd.plugins.x2Dialog.errCloseFnDialog=function(err,fn){
	$page.dialogError=$x2Dialog.show({
		model:'infoModel',
		msg:$fn.renameError(err.errorMsg),
		title:err.errorTitle,
		btns:["确定"],
		callback:function(dialog,btnName){
			dialog.close();
			fn();
		}
	});
	$page.transOnError(err.errorCode,err.errorMsg,err.errorTrans);
}
//定义一个出错并执行JS的两个按钮对话框
jd.plugins.x2Dialog.errFn2Dialog=function(err,fn,fn2){
	$page.dialogError=$x2Dialog.show({
		model:'infoModel',
		width:750,
		height:550,
		btnwidth:200,
		msg:$fn.renameError(err.errorMsg),
		title:err.errorTitle,
		btns:[err.Btn1,err.Btn2,err.Btn3],
		callback:function(dialog,btnName){
			dialog.close();
			if(btnName == err.Btn1){
				fn();
			}
			if(btnName == err.Btn2){
				fn2();
			}
			if(btnName == "取消"){
				dialog.close();
			}
		}
	});
	$page.transOnError(err.errorCode,err.errorMsg,err.errorTrans);
}
//定义一个出错并执行JS的三个按钮对话框
jd.plugins.x2Dialog.errFn3Dialog=function(err,fn,fn2,fn3){
	$page.dialogError=$x2Dialog.show({
		model:'infoModel',
		msg:$fn.renameError(err.errorMsg),
		title:err.errorTitle,
		btns:[err.Btn1,err.Btn2,err.Btn3],
		callback:function(dialog,btnName){
			dialog.close();
			if(btnName == err.Btn1){
				fn();
			}
			if(btnName == err.Btn2){
				fn2();
			}
			if(btnName == err.Btn3){
				fn3();
			}
		}
	});
	$page.transOnError(err.errorCode,err.errorMsg,err.errorTrans);
}

//定义一个出错返回的对话框
jd.plugins.x2Dialog.errBackDialog=function(err){
	$page.dialogError=$x2Dialog.show({
		model:'infoModel',
		msg:$fn.renameError(err.errorMsg),
		title:err.errorTitle,
		btns:["确定"],
		callback:function(dialog,btnName){
			 $page.goBack();
		}
	});
	$page.transOnError(err.errorCode,err.errorMsg,err.errorTrans);
}
//定义一个mask
jQuery(function($){
	$f.mask=new jd.plugins.x2Dialog({id:'mask01',msg:'正在处理中，请稍候！',model:'maskAModel'});
	$f.maskClose=function(){
		$f.mask.close();
		return $f;
	}
	$f.maskShowLoading=function(msg){
		$f.mask.close();
		$f.mask.setMsg(msg).status('loading').show();
		return $f;
	}

	$f.maskShowError =function(msg){
		$f.mask.close();
		$f.mask.setMsg(msg).status('error').show();
		return $f;
	}
	$f.maskShowInfo =function(msg){
		$f.mask.close();
		$f.mask.setMsg(msg).status('info').show();
		return $f;
	}

	$f.maskShowSuccess =function(msg){
		$f.mask.close();
		$f.mask.setMsg(msg).status('success').show();
		return $f;
	}


	$f.maskShow=function(msg){
		$f.mask.close();
		$f.mask.setMsg(msg).show();
		return $f;
	}


	//带日志
	$f.maskShowLoadingLog=function(msg){
		$f.maskShowLoading(msg);
		if( typeof(log)!='undefined')
			log.info(">>"+msg);
		return $f;
	}


	$f.maskShowErrorLog  =function(msg){
		$f.maskShowError(msg);
		if( typeof(log)!='undefined')
			log.info(">>"+msg);
		return $f;
	}
	$f.maskShowInfoLog =function(msg){
		$f.maskShowInfo(msg);
		if( typeof(log)!='undefined')
			log.info(">>"+msg);
		return $f;
	}

	$f.maskShowSuccessLog =function(msg){
		$f.maskShowSuccess(msg);
		if( typeof(log)!='undefined')
			log.info(">>"+msg);
		return $f;
	}

	$f.maskUpdateMsg=function(msg){
		$(".maskA-show #msgS").html(msg);
		$(".maskA-show").css("left",((document.documentElement.clientWidth-$(".maskA-show").width())/2)+"px");
		return $f;
	}

	$f.maskTimerAscShow=function(msg){
		if(msg=="" || msg==null){
			msg=$(".maskA-show #msgS").html();
		}
		jd.plugins.x2Scheduled.add('计时器_mask',
				{
				callback:function(count,servDate){//回调函数
					$f.maskUpdateMsg(msg +count + "秒");
					}
				,interval:1000,count:0});
		return $f;
	}

	$f.maskTimerDescShow=function(msg,_s,fn_callback){
		if(msg=="" || msg==null){
			msg=$(".maskA-show #msgS").html();
		}
		jd.plugins.x2Scheduled.add('计时器_mask',
				{
				callback:function(count,servDate){//回调函数
					$f.maskUpdateMsg(msg +count + "秒");
					if(count==0){
						fn_callback();
					}
				}
				,interval:1000,count:_s,direct:jd.plugins.x2ScheduledObserver.DESC,execType:jd.plugins.x2ScheduledObserver.IMMEDIATELY});
		return $f;
	}



});


// jd_x2Keyboard_swift.js
(function(window){
//Extends build in types
  String.prototype.fs=function() {
    var segments=this.split('%s');
    ret='';
    for (var i in arguments) {
      ret += segments[i] + arguments[i];
    }
    return ret + segments[segments.length-1];
  }
  String.prototype.trim=function() {
      return this.replace(/^\s+|\s+$/g,"");
  }
  String.prototype.ltrim=function() {
      return this.replace(/^\s+/,"");
  }
  String.prototype.rtrim=function() {
      return this.replace(/\s+$/,"");
  };
  String.prototype.empty=function() {
      return this == '';
  };
  String.prototype.endswith=function(substr) {
      return this.slice(-substr.length) == substr;
  }
  String.prototype.startswith=function(substr) {
      return this.slice(0, substr.length) == substr;
  }


  if (!Array.prototype.forEach)
    Array.prototype.forEach=function(callback){
      for (var i=0; i<this.length; i++){
        callback(this[i], i, this);
      }
    }

 var swift = function(selector, ctx){
    if ( !selector )
      return null;
    if ( !ctx )
      ctx = window.document;
    function Swift(tags, selector, context) {
      for (var i=0; i<tags.length; i++) {
        this[i] = tags[i];
      }
      this.length = tags.length;
      this.context = context;
      this.selector = selector;
    }
    // extend Swift prototype
    Swift.prototype = Array.prototype;
    Swift.prototype.constructor = Swift;
    Swift.prototype.find = function(selector) {
      if (this.length) {
        return swift(selector, this[0]);
      }
      return swift([]);
    }
    Swift.prototype.filternot = function(selector) {
      var ised = swift(selector, this.context);
      var noted = [];
      this.each(function() {
        if (!swift.inArray(this, ised)) {
          noted.push(this);
        }
      });
      return swift(noted);
    }
    Swift.prototype.each = function(callback) {
      for (var i=0; i<this.length; i++) {
        callback.call(this[i], i, this);
      }
    }
    Swift.prototype.bind = function(action, callback, cancelBubble) {
      if (window.addEventListener) {
        this.each(function(i){
          this.addEventListener(action, function(event) {
            if (cancelBubble) {
              event.cancelBubble = true;
              event.stopPropagation();
            }
            callback.apply(this, arguments);
          });
        });
      } else if (window.attachEvent) {
        this.each(function(i){
          this.attachEvent('on'+action, function(event) {
            if (cancelBubble) {
              event.cancelBubble = true;
              event.stopPropagation();
            }
            callback.apply(this, arguments);
          });
        });
      }
      return this;
    }
    Swift.prototype.unbind = function(action, callback) {
      if (window.document.removeEventListener)
        this.each(function(i) {
          this.removeEventListener(action, callback);
        });
      else
        this.each(function(i) {
          this.detachEvent("on"+action, callback);
        });
      return this;
    }
    Swift.prototype.toggle = function() {
      if (arguments.length == 2) {
        var action = 'click',
            cb1 = arguments[0],
            cb2 = arguments[1];
      } else {
        var action = arguments[0],
            cb1 = arguments[1],
            cb2 = arguments[2],
            cancelBubble = arguments[3];
      }
      return this.bind(action, function() {
        this.clicked = this.clicked ? (this.clicked + 1) : 1;
        (this.clicked % 2 ? cb1 : cb2).apply(this, arguments);
      }, cancelBubble);
    }
    Swift.prototype.live = function(action, callback) {
      var targets = this;
      swift(this.context).bind(action, function(event) {
        var src = event.target || event.srcElement;
        var matchedTargets = swift(targets.selector, targets.context);
        for (var i=0; i<matchedTargets.length; i++) {
          if (src == matchedTargets[i])
            callback.call(src, event);
        }
      });
      return this;
    }
    var actions = "blur focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error contextmenu".split(" ");
    for (var i=0; i<actions.length; i++) {
      var action = actions[i];
      (function(action) {
        Swift.prototype[action] = function(callback, cancelBubble) {
          return this.bind(action, callback, cancelBubble);
        }
      })(action);
    }
    Swift.prototype.focus = function() {
      if (this.length) {
        this[0].focus();
      }
      return this;
    }
    Swift.prototype.attr = function() {
      if (arguments.length == 1 && swift.type(arguments[0]) == 'Object') {
        for (var name in arguments) {
          this.attr(name, arguments[name]);
        }
        return this;
      } else
        var name = arguments[0],
            value = arguments[1];
      if (value !== undefined) {
        this.each(function(i) {
          this.setAttribute(name, value);
        });
        return this;
      } else {
        if (this.length) {
          return this[0].getAttribute(name);
        }
      }
    }
    Swift.prototype.tag = function() {
      return this.length ? this[0].tagName.toLowerCase() : undefined;
    }
    Swift.prototype.val = function(value) {
      if (value === undefined) {
        if (this.length) {
          if (this[0].value != null)
            return this[0].value;
          else
            if (this.tag() == 'select') {
              var options = this.children();
              for (var i=0; i<options.length; i++) {
                if (options[i].selected) {
                  return options[i].value;
                }
              }
            } else if (this.tag() == 'input' && this.attr('type') == 'checkbox') {
              var valueList = [];
              for (var i=0; i<this.length; i++)
                if (this[i].tagName.toLowerCase() != 'input' || this[i].type == 'checkbox')
                  return undefined;
                else if (this[i].checked)
                  valueList.push(this[i].value);
              return valueList;
            } else if (this.tag() == 'input' && this.attr('type') == 'radio') {
              for (var i=0; i<this.length; i++)
                if (this[i].tagName.toLowerCase() != 'input' || this[i].type != 'radio')
                  return undefined;
                else if (this[i].checked)
                  return this[i].value;
            } else if (this.tag() == 'textarea') {
              return arguments[1] ? swift.htmlEncode(this[0].value) : this[0].value;
            } else {
              return this[0].value;
            }
        }
      } else {
        if (this.tag() == 'select') {
          var options = this.children();
          for (var i=0; i<options.length; i++) {
            if (options[i].value == value)
              options[i].selected = 'selected';
            else
              options[i].removeAttribute('selected');
          }
        } else if (this.tag() == 'input' && this.attr('type') == 'checkbox') {
          var values = swift.slice(value);
          if (!values.length) values = [value];
          this.each(function() {
            if (this.tagName.toLowerCase() == 'input' && this.type == 'checkbox') {
              var box = this;
              values.forEach(function(v, i, vs){
                if (box.value == v)
                  box.checked = 'checked';
                else
                  box.removeAttribute('checked');
              });
            }
          });
        } else if (this.tag() == 'input' && this.attr('type') == 'radio') {
          this.each(function() {
            if (this.tagName.toLowerCase() == 'input' && this.type == 'radio' && this.value == value)
              this.checked = 'checked';
            else
              this.removeAttribute('checked');
          });
        } else if (this.tag() == 'textarea') {
          this.html(value);
        } else if (this.tag() == 'input') {
          this.each(function() {
            if (this.tagName.toLowerCase() == 'input')
              this.value = value;
          });
        }
      }
    }
    Swift.prototype.id = function(value) {
      this.attr('id', value);
    }
    Swift.prototype.removeAttr = Swift.prototype.rmAttr = function(name) {
      this.each(function() {
        this.removeAttribute(name);
      });
      return this;
    }
    Swift.prototype.css = function() {
      if (arguments.length == 1 && arguments[0] === undefined) return this;
      if (arguments.length == 2 && arguments[1] === undefined) return this;
      if (arguments.length == 1 && swift.type(arguments[0]) == 'Object') {
        for (var name in arguments[0]) {
          this.css(name, arguments[0][name]);
        }
        return this;
      } else
        var name = arguments[0],
            value = arguments[1];

      var isIntStyle =  (name.endswith('size') || name.endswith('width') || name.endswith('height') || name == 'left' || name == 'top');
      var name = swift.styleName(name);
      if (value === undefined) { // read
        if (this.length) {
          return this[0].style[name];
        }
      } else { // write
        var elem = this[0];
        if (elem && elem.nodeType !== 3 && elem.nodeType !== 8 && elem.style)
          this.each(function() {
            this.style[name] = (isIntStyle && swift.isInt(value)) ? '%spx'.fs(value) : value;
          });
        return this;
      }
    }
    Swift.prototype.style = function(name) {
      if (this.length) {
        var name = swift.styleName(name);
        if (window.getComputedStyle) {
          return window.getComputedStyle(this[0], null)[name];
        } else {
          return this[0].currentStyle[name];
        }
      }
    }
    Swift.prototype.width = function(value) {
      if (arguments.length) {
        if (!swift.isInt(value)) {
          return this.css('width', value);
        } else {
          return this.css('width', value+'px');
        }
      } else if (this.length) {
        var width = swift.asInt(this.css('width'));
        if (width) return width;
        var padding_left = this.css('padding-width-left') || 0;
        var padding_right = this.css('padding-width-right') || 0;
        return this[0].clientWidth - padding_left - padding_right;
      }
    }
    Swift.prototype.innerWidth = function() {
      return this.width();
    }
    Swift.prototype.outterWidth = function() {
      return this.width2();
    }
    Swift.prototype.innerHeight = function() {
      return this.height();
    }
    Swift.prototype.outterHeight = function() {
      return this.height2();
    }
    Swift.prototype.data = function(name, value) {
      if (arguments.length == 0) return swift.data[this.guid] || null;
      if (arguments.length == 1) return swift.data[this.guid] ? swift.data[this.guid][name] || null : null;
      if (arguments.length == 2) {
        swift.data[this.guid = swift.generateGUID()] = value;
      }
    }
    Swift.prototype.removeData = Swift.prototype.rmData = function(name) {
      if (swift.data[this.guid]) delete swift.data[this.guid];
    }
    Swift.prototype.add = function(other) {
      if (this.length) {
        if (other.length != undefined) {
          for (var i=0; i<other.length; i++) {
            this.push(other[i]);
          }
        } else {
          this.push(other);
        }
      }
      return this;
    }
    Swift.prototype.not = function(callback) {
      var orig = this,
          targets = [];
      this.each(function(i) {
        if (!callback.call(this, i)) {
          targets.push(orig[i]);
        }
      });
      return swift(targets);
    }
    Swift.prototype.width2 = function(value) {
      if (this.length) {
        if (value === undefined) {
          return this[0].clientWidth;
        } else {
          var padding_left = this.css('padding-width-left') || 0;
          var padding_right = this.css('padding-width-right') || 0;
          return this.css('width', value - padding_left - padding_right);
        }
      }
    }
    Swift.prototype.width3 = function(value) {
      if (this.length) {
        if (value === undefined) {
          return this[0].offsetWidth;
        } else {
          var border_left = this.css('border-width-left') || 0;
          var border_right = this.css('border-width-right') || 0;
          return this.width2('width', value - border_left - border_right);
        }
      }
    }
    Swift.prototype.width4 = function() {
      if (this.length) return this[0].scrollWidth;
    }
    Swift.prototype.height = function(value) {
      if (arguments.length) {
        if (!swift.isInt(value)) {
          return this.css('height', value);
        } else {
          return this.css('height', value+'px');
        }
      } else if (this.length) {
        var height = this.css('height');
        if (height) return height;
        var padding_left = this.css('padding-height-left') || 0;
        var padding_right = this.css('padding-height-right') || 0;
        return this[0].clientHeight - padding_left - padding_right;
      }
    }
    Swift.prototype.height2 = function(value) {
      if (this.length) {
        if (value === undefined) {
          return this[0].clientHeight;
        } else {
          var padding_left = this.css('padding-height-left') || 0;
          var padding_right = this.css('padding-height-right') || 0;
          return this.css('height', value - padding_left - padding_right);
        }
      }
    }
    Swift.prototype.height3 = function(value) {
      if (this.length) {
        if (value === undefined) {
          return this[0].offsetHeight;
        } else {
          var border_left = this.css('border-height-left') || 0;
          var border_right = this.css('border-height-right') || 0;
          return this.height2('height', value - border_left - border_right);
        }
      }
    }
    Swift.prototype.height4 = function() {
      if (this.length) return this[0].scrollHeight;
    }
    Swift.prototype.classes = function() {
      if (this.length) return this[0].classList;
    }
    Swift.prototype.hasClass = function(name) {
      if (this.length) return this[0].classList.contains(name);
    }
    Swift.prototype.addClass = function(name) {
      this.each(function(i) {
        this.classList.add(name);
      });
      return this;
    }
    Swift.prototype.removeClass = Swift.prototype.rmClass = function(name) {
      this.each(function(i) {
        this.classList.remove(name);
      });
      return this;
    }
    Swift.prototype.hide = function(speed) {
      if (!speed)
        return this.css('display', 'none');
      var orgwidth = this.css('width');
      var orgheight = this.css('height');
      return this.animate({width:0, height:0}, speed, function() {
        this.hide();
        this.css({width:orgwidth, height:orgheight});
      });
    }
    Swift.prototype.show = function(speed) {
      if (!speed)
        return this.css('display', swift.isinline(this.tag()) ? 'inline' : 'block');
      var orgwidth = this.css('width'),
          orgheight = this.css('height'),
          dsp = this.css('display');
      this.show();
      var width = this.width(),
          height = this.height();
      this.css({width:0, height:0});
      return this.animate({width:width, height:height}, speed, function() {
        this.css({width:orgwidth, height:orgheight});
      });
    }
    Swift.prototype.html = function(htmlStr) {
      if (htmlStr !== undefined) {
        this.each(function(i) {
          this.innerHTML = htmlStr;
        });
        return this;
      } else if (this.length)
        return this[0].innerHTML;
    }
    Swift.prototype.text = function(textStr) {
      if (textStr !== undefined) {
        this.each(function(i) {
          this.innerText = textStr;
        });
        return this;
      } else
        return this.innerText;
    }
    Swift.prototype.remove = function() {
      this.each(function(i) {
        this.parentNode.removeChild(this);
      });
      return this;
    }
    Swift.prototype.append = function(other) {
      if (this.length) {
        if (swift.type(other) == 'String') {
          this.html(this.html() + other);
        } else if (other.length != undefined) {
          for (var i=0; i<other.length; i++) {
            this[0].appendChild(other[i]);
          }
        } else {
          this[0].appendChild(other);
        }
      }
      return this;
    }
    Swift.prototype.appendTo = function(other) {
      if (this.length)
        for (var i=0; i<this.length; i++)
          (other.length != undefined ? other[0] : other)
              .appendChild(this[i]);
      return this;
    }
    Swift.prototype.after = function(other) {
      if (this.length) {
        var other = other.length != undefined ? other[0] : other;
        for (var i=0; i<this.length; i++)
          other.parentElement.insertBefore(this[i], other.next());
      }
      return this;
    }
    Swift.prototype.before = function(other) {
      if (this.length) {
        var other = other.length != undefined ? other[0] : other;
        for (var i=0; i<this.length; i++)
          other.parentElement.insertBefore(this[i], other);
      }
      return this;
    }
    Swift.prototype.next = function() {
      if (this.length)
        return swift(this[0].nextSibling);
      return swift([]);
    }
    Swift.prototype.prev = function() {
      if (this.length)
        return swift(this[0].previousSibling);
    }
    Swift.prototype.clone = function(includeAll) {
      var newTags = [];
      this.each(function(){
        newTags.push(this.cloneNode(includeAll));
      });
      return swift(newTags);
    }
    Swift.prototype.parent = function() {
      return this.length ? swift(this[0].parentElement) : undefined;
    }
    Swift.prototype.children = function() {
      return this.length ? swift.filter(this[0].childNodes, function() {
        return this.tagName ? true : false;
      }) : swift([]);
    }
    Swift.prototype.load = function(url) {
      var mytag = this;
      swift.get({
        url: url,
        success: function(ret) {
          mytag.html(ret);
        }
      });
      return this;
    }
    Swift.prototype.serialize = function(asObj) {
      if (this.length && this.tag() == 'form') {
        var eles = this[0].elements;
        var data = {};
        for (var i=0; i<eles.length; i++) {
          var ele = eles[i];
          data[ele.name] = swift(ele).val() || '';
        }
        if (asObj) return data;
        var mappings = [];
        for (var k in data)
          mappings.push('%s=%s'.fs(k, encodeURIComponent(data[k])));
        return mappings.join('&');
      }
    }
    Swift.prototype.filter = function(callback /* or selector */) {
      if (typeof callback == "function") {
        return swift.filter.call(this, callback);
      } else if (typeof callback == "string" && callback.startswith("!")) {
        var ised = swift(callback.slice(1), this.context);
        var noted = [];
        this.each(function() {
          if (!swift.inArray(this, ised)) {
            noted.push(this);
          }
        });
        return swift(noted);
      } else if (typeof callback == "string" && !callback.startswith("!")) {
        var restricted = swift(callback, this.context);
        var ised = [];
        this.each(function() {
          if (swift.inArray(this, restricted)) {
            ised.push(this);
          }
        });
        return swift(ised);
      }
    };
    Swift.prototype.dialog = function(param) {
      if (!arguments.length) param = {};
      if (this.length !== 1) return this;

      if (!this.length || !param || !(param instanceof Object)) return;
      var userDlg = this,
          oldParent = this.parent();
      var dlg = userDlg.dialog = swift('<div></div>').addClass('swift-dialog')
                                    .width(param.width)
                                    .height(50)
                                    .css('border', 'solid 3px #999')
                                    .css('background', '#FFF')
                                    .css("top","5px")
                                    .css("left","30px")
                                    .css("font-size","14px")
                                    .css(param.style)
                                    .css("-webkit-opacity",0.95)
                                    .css("zoom",2);

      var bgDiv = param.model ? swift('<div></div>').width(swift(this.doc().body).width())
                                                 .height(swift(this.doc().body).height())
                                                 .css('z-index', '999')
                                                 .css('position', 'absolute')
                                                 .css('left', 0)
                                                 .css('top', 0)
                                                 .css('background', param.bgBackgroundColor
                                                      || 'rgba(0, 0, 0, %s)'.fs(param.bgAlpha || 0.2))
                                                 .appendTo(this.doc().body)
                          : undefined;

      if (param.title || param.titleDivStyle || param.close || param.closeText || param.closeIcon || param.closeDivStyle)
        var titleDiv = swift('<div></div>').addClass('swift-dialog-title')
                            .html('<span">%s</span>'.fs(param.title || ""))
                            .height(25)
                            .width('100%')
                            .css('text-align', 'center')
                            .css('font-size', '14px')
                            .css(param.titleDivStyle)
                            .appendTo(dlg);

        if (param.close || param.closeText || param.closeIcon || param.closeStyle)
          swift('<div></div>').css('float', 'right')
                              .css('line-height', '25px')
                              .css('font-size', 14)
                              .css(param.closeDivStyle)
                              .css('cusor', 'pointer')
                              .height(25)
                              .css(param.closeDivStyle)
                              .html(param.closeText
                                     || param.closeIcon ?
                                         '<img src="%s">'.fs(param.closeIcon)
                                         : 'X&nbsp;')
                              .appendTo(titleDiv ? titleDiv : dlg)
                              .click(function() {
                                  if (swift.type(param.close) == 'Function') {
                                    if (param.close.apply(userDlg, arguments))
                                      userDlg.close();
                                  } else userDlg.close();
                              });

      if (param.buttons) {
        var bntDiv = swift('<div></div>').addClass('swift-dialog-buttons')
                                         .height(25)
                                         .css({
                                           'float': 'right'
                                         })
                                         .width('100%')
                                         .css(param.buttonDivStyle)
                                         .append(swift('<div></div>').css('float', 'right'));
        for (var text in param.buttons) {
          (function(text) {
            swift('<button></button>').html(text)
                                      .click(function() {
                                        param.buttons[text].apply(userDlg, arguments);
                                      })
                                      .appendTo(bntDiv.children());
          })(text);
        }
        if (bntDiv.children().length)
            bntDiv.appendTo(dlg);
      }
      if (param.resizable) {//TODO
      }
      if (param.movable) {//TODO
      }
      dlg.css('z-index', '10000')
         .css('position', 'absolute')
         .appendTo(dlg.doc().body);
      var contentDiv = swift('<div></div>').addClass('swift-dialog-content')
                                           .width('100%')
                                           .css(param.contentDivStyle);
      if (bntDiv) contentDiv.before(bntDiv);
      else contentDiv.appendTo(dlg);
      userDlg.appendTo(contentDiv).show();
      contentDiv.height(dlg.height()
                           - (dlg.find('.swift-dialog-title').height2() || 0)
                           - (dlg.find('.swift-dialog-buttons').height2() || 0));
      if (!param.style || param.style.left == undefined)
        dlg.css('left', window.innerWidth/2 - dlg.width3()/2 + 'px');
      if (!param.style || param.style.top == undefined)
        dlg.css('top', window.innerHeight/2 - dlg.height3()/2 + 'px');
      this.close = function(event) {
        if (oldParent){
          this.appendTo(oldParent);
          if (this.style("display") != "none")
            this.hide();
        } else
          this.remove();
        dlg.remove();
        bgDiv && bgDiv.remove();
      }
      return this;
    };
    Swift.prototype.doc = function() {
      return this.length ? this[0].ownerDocument : undefined;
    };
    Swift.prototype.animate = function(ts/*target style*/, duration, callback) {
      function interpolate(start, end, points) {
        var interval = (end-start) / points,
            values = [];
        for (var i=0; i<points; i++) {
          values.push(start + i*interval);
        }
        values.push(end);
        return values;
      }
      if (swift.type(duration) == 'Function') {
        callback = duration;
        duration = undefined;
      }
      var interval = 10,
          ele = this,
          duration = swift.type(duration) == 'Number' ? duration : (function(preset) {
            if (preset == 'slow') return 700;
            if (preset == 'middle') return 500;
            if (preset == 'fast') return 300;
          })(duration),
          overflow = this.css('overflow');
      if (ts instanceof Object) {
        var styles = {};
        for (var name in ts) {
          var tsv/*target style value*/ = ts[name];
          tsv = swift.asInt(tsv);
          if (isNaN(tsv)) continue;
          var unit = /\D*$/.exec(tsv);
          if (!!unit) unit = 'px';
          var csv/*current style value*/ = this.css(name);
          if (!csv) csv = this.style(name);
          csv = swift.asInt(csv) || 0;
          styles[name] = {start:csv, end:tsv, unit:unit, interpolations:interpolate(csv, tsv, (duration||300)/interval)};
        }
        ele.css('overflow', 'hidden');
        for (var name in styles) {
          (function(name) {
            for (var i in styles[name]['interpolations']) {
              (function(i) {
                setTimeout(function() {
                  ele.css(name, styles[name]['interpolations'][i]+unit);
                }, interval*i);
              })(i);
            }
            setTimeout(function() {
              callback && callback.apply(ele, arguments);
              ele.css('overflow', overflow);
            }, interval*styles[name]['interpolations'].length);
          })(name);
        }
      }
    };
    Swift.prototype.em2px = function() {
      if (!this.length) return;
      if (window.getComputedStyle) {
        return swift.asInt(window.getComputedStyle(this[0], null)['font-size']);
      } else {
        return swift.asInt(this[0].currentStyle["fontSize"]);
      }
    };
    Swift.prototype.first = function() {
      return swift(this.slice(0, 1));
    };
    Swift.prototype.last = function() {
      return swift(this.slice(-1));
    };
    Swift.prototype.firstChild = function() {
      return swift(this.children().slice(0, 1));
    };
    Swift.prototype.lastChild = function() {
      return swift(this.children().slice(-1));
    };
    Swift.prototype.eq = function(i) {
      return swift(this.slice(i, i+1));
    };
    // ### Swift ends
    var type = swift.type(selector);
    if (type == "String") {
      var matched = /^<(\w+)\s*\/?>(?:<\/\1>)?$/.exec(selector);
      if (matched)
        var tags = [window.document.createElement(matched[1])];
      else
        var tags = ctx.querySelectorAll(selector);
    } else if (selector instanceof HTMLElement
      || selector instanceof HTMLDocument
      || selector === window)
      var tags = [selector];
    else if (type == 'Array' || type == 'NodeList')
      var tags = selector;
    else if (type == 'Swift')
      return selector;
    else if (type == 'Function') {
    //TODO validate this stuff
      if (/loaded|complete/.test(document.readyState)) {
        selector();
      } else {
        if (window.document.addEventListener) {
          window.document.addEventListener("DOMContentLoaded", selector, false);
        } else if (swift.browser.webkit) {
          var _timer = setInterval(function() {
            if (/loaded|complete/.test(document.readyState)) {
              selector();
              clearInterval(_timer);
            }
          }, 10);
        } else {
          window.onload = selector;
        }
      }
      return;
    }
    return new Swift(tags, selector, ctx);
  }
  window.swift = swift;
  swift.log = console.log;
  swift.error = console.error;
  swift.slice = function(items) {
    return Array.prototype.slice.call(items);
  }
  swift.type = function(value) {
    var type = Object.prototype.toString.call(value).slice(8, -1);
    if (type == "Object") {
      var funcNameRegex = /function (.{1,})\(/;
      var results = (funcNameRegex).exec(value.constructor.toString());
      type = (results && results.length > 1) ? results[1] : type;
    }
    return type;
  }
  swift.browser = (function() {
    var ua = navigator.userAgent.toLowerCase(),
        rwebkit = /(webkit)[ \/]([\w.]+)/,
        ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        rmsie = /(msie) ([\w.]+)/,
        rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/;
    var binfo = rwebkit.exec(ua) || ropera.exec(ua) || rmsie.exec(ua) || rmozilla.exec(ua);
    return {
      name: binfo[1],
      version: binfo[2],
      webkit: binfo[1] == 'webkit',
      opera: binfo[1] == 'opera',
      msie: binfo[1] == 'msie',
      mozilla: binfo[1] == 'mozilla'
    };
  })();
  swift.filter = function(items, callback) {
    var len = items.length;
    if (typeof callback != "function")
      throw new TypeError();
    var res = [];
    for (var i = 0; i < len; i++) {
      if (i in items) {
        var val = items[i]; // in case fun mutates this
        if (callback.call(val, i, items))
          res.push(val);
      }
    }
    return res;
  }
  swift.htmlEncode = function(source) {
    return source.replace(/</g, '&lt;')
                 .replace(/>/g, '&gt;')
                 .replace(/&/g, '&amp;')
                 .replace(/"/g, '&quot;')
                 .replace(/'/g, '&#39;')
                 .replace(/ /g, '&nbsp;');
  }
  swift.ajax = function(param) {
    if (param == undefined) return;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      var xmlhttp = new XMLHttpRequest();
    } else {// code for IE6, IE5
      var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (param.method.toUpperCase() == 'GET') {
      if (param.data) {
        if (swift.type(param.data) == "String") {
          xmlhttp.send(param.data);
        } else if (swift.type(param.data) == "Object") {
          var data = [];
          for (var i in param.data) {
            data.push("%s=%s".fs(encodeURIComponent(i), encodeURIComponent(param.data[i])));
          }
          param.url += "?" + data.join("&");
        }
      }
    }
    xmlhttp.open(param.method.toUpperCase(), param.url, true);
    for (var key in param.headers) {
      xmlhttp.setRequestHeader(key, param.headers[key]);
    }
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4) {
        if (param[xmlhttp.status]) {
          var ret = {'error': 'HTTP_ERROR',
                     'status': xmlhttp.status,
                     'headers': xmlhttp.getAllResponseHeaders(),
                     'body': xmlhttp.responseText};
          param[xmlhttp.status](ret);
        } else if (xmlhttp.status == 200) {
          if (param.success) {
            var type = param.type;
            if (type == undefined || type.toLowerCase() in ['html', 'text']) {
              var ret = xmlhttp.responseText;
            } else if (type.toLowerCase() == 'json') {
              var ret = swift.parseJSON(xmlhttp.responseText);
            } else if (type.toLowerCase() == 'xml') {
              var ret = xmlhttp.responseXML;
            }
            param.success(ret);
          }
        } else if (param.error) {
            var ret = {'error': 'HTTP_ERROR',
                       'status': xmlhttp.status,
                       'headers': xmlhttp.getAllResponseHeaders(),
                       'body': xmlhttp.responseText};
            param.error(ret);
        }
      }
    }
    if (param.timeout) {
      setTimeout(function(){
        xmlhttp.abort();
        var ret = {'error': 'TIMEOUT'}
        param.error(ret);
      }, param.timeout);
    }
    if (param.method.toUpperCase() == 'POST') {
      if (!param.data) {
        xmlhttp.send('');
      } else if (swift.type(param.data) == "String") {
        xmlhttp.send(param.data);
      } else if (swift.type(param.data) == "Object") {
        var data = [];
        for (var i in param.data) {
          data.push("%s=%s".fs(encodeURIComponent(i), encodeURIComponent(param.data[i])));
        }
        xmlhttp.send(data.join("&"));
      }
    }
    xmlhttp.send();
  }
  swift.get = function(param) {
    param.method = 'GET';
    return swift.ajax(param);
  }
  swift.post = function(param) {
    param.method = 'POST';
    return swift.ajax(param);
  }
  swift.generateGUID = function() {
    return swift.guid = (swift.guid + 1) || 1;
  }
  swift.isInt = function(n) {
  // Attension: 1E209 is no a int here
    return typeof n == 'number' && parseFloat(n) == parseInt(n) && !isNaN(n);
  }
  swift.styleName = function(name) {
    var camelCase = name.replace(/^-ms-/, "ms-").replace(/-([a-z]|[0-9])/ig, function (all, letter) {
        return (letter + "").toUpperCase();
    });
    if (camelCase == 'float')
      return !!swift('<div></div>').html('<a style="float:left"></a>').find('a')[0].style.cssFloat ? 'cssFloat' : 'styleFloat';
    return camelCase;
  }
  swift.alert = function(msg/*required*/, handler/*optional*/, userStyle/*optional*/) {
    if (!(arguments[1] instanceof Function))
      var style = arguments[1];
    else if (!(arguments[2] instanceof Function))
      var callback = arguments[1],
          style = arguments[2];
    swift('<div></div>').html(msg || '')
                    .css('padding', '20px 50px 20px 50px')
                    .css(style)
                    .dialog({
                      model: true,
                      buttons: {
                        'OK': function(){
                          callback && callback.apply(this, arguments);
                          this.close();
                        }
                      }
                    });
  }
  swift.confirm = function(param) {
    if (!param) return;
    param.yesText = param.yesText || 'OK';
    param.noText = param.noText || 'Cancel';
    swift('<div></div>').html(param.msg || '')
                    .css('padding', '20px 50px 20px 50px')
                    .css(param.style)
                    .dialog({
                      buttons: {
                        'OK': function() {
                          param.yes && param.yes.apply(this, arguments);
                          this.close();
                        },
                        'Cancel': function() {
                          param.no && param.no.apply(this, arguments);
                          this.close();
                        }
                      }
                    });
  }
  swift.human = function(size) {
    if (size < 1024)
        return parseInt(size) + 'B';
    else if (size < 1024 * 1024)
        return parseInt(size/1024*10)/10 + 'KB';
    else if (size < 1024 * 1024 * 1024)
        return parseInt(size/1024/1024*10)/10 + 'MB';
    else if (size < 1024 * 1024 * 1024 * 1024)
        return parseInt(size/1024/1024/1024*10)/10 + 'GB';
    else
        return parseInt(size/1024/1024/1024/1024*10)/10 + 'TB';
  }
  swift.time = function(seconds, secondUnit, minuteUnit, hourUnit, dayUnit) {
    if (seconds < 60)
      return seconds + (secondUnit || 'S');
    else if (seconds < 3600)
      return parseInt(seconds/60)  + (minuteUnit || 'M');
    else if (seconds < 3600*24)
      return parseInt(seconds/3600) + (hourUnit || 'H');
    else
      return parseInt(seconds/3600/24) + (dayUnit || 'D');
  }
  swift.asInt = function(numberWithUnit) {
    return parseInt(/\d*/.exec(numberWithUnit)[0]);
  }
  swift.data = {};
  swift.param = function(data) {
    var mappings = [];
    for (var k in data)
      mappings.push('%s=%s'.fs(k, encodeURIComponent(data[k])));
    return mappings.join('&');
  }
  swift.merge = function() {
    return [].concat(swift.slice(arguments));
  }
  swift.isNumberic = function(data) {
    return !isNaN(parseFloat(data)) && isFinite(data);
  }
  swift.parseXML = function(data) {
    var xml;
    try {
        if (window.DOMParser)
            xml = new DOMParser().parseFromString(data, "text/xml");
        else {
            xml = new ActiveXObject("Microsoft.XMLDOM");
            xml.async = "false";
            xml.loadXML(data);
        }
    } catch (e) {
        xml = undefined;
    }
    if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length)
        swift.error("Invalid XML: " + data);
    return xml;
  }
  swift.now = function() {
    return (new Date()).getTime();
  }
  swift.inArray = function(value, arr, startIdx) {
    for (var i=startIdx||0; i<arr.length; i++) {
      if (value === arr[i]) return true;
      else continue;
    }
    return false;
  }
  swift.extend = function() {
    var fns = arguments[0],
        name = arguments[0],
        fn = arguments[1];
    if (arguments.length == 1) {
      for (var name in fns) {
        (function(name) {
          swift[name] = fns[name];
        })(name);
      }
    } else {
      swift[name] = fn;
    }
  }
  swift.cleanData = function() {
    delete this.data;
    this.data = {};
  }
  swift.toJSON = typeof window.JSON === 'object' && window.JSON.stringify ? JSON.stringify : function (o) {
    if (o === null) return 'null';
    var type = typeof o;
    if (type === 'undefined') return undefined;
    if (type === 'number' || type === 'boolean') return '' + o;
    if (type === 'string') return swift.quoteString(o);
    if (type === 'object') {
      if (o.constructor === Date) {
        var month = o.getUTCMonth() + 1,
          day = o.getUTCDate(),
          year = o.getUTCFullYear(),
          hours = o.getUTCHours(),
          minutes = o.getUTCMinutes(),
          seconds = o.getUTCSeconds(),
          milli = o.getUTCMilliseconds();
        if (month < 10) month = '0' + month;
        if (day < 10) day = '0' + day;
        if (hours < 10) hours = '0' + hours;
        if (minutes < 10) minutes = '0' + minutes;
        if (seconds < 10) seconds = '0' + seconds;
        if (milli < 100) milli = '0' + milli;
        if (milli < 10) milli = '0' + milli;
        return '"' + year + '-' + month + '-' + day + 'T' + hours + ':' + minutes + ':' + seconds + '.' + milli + 'Z"';
      }
      if (o.constructor === Array) {
        var ret = [];
        for (var i = 0; i < o.length; i++) {
          ret.push(swift.toJSON(o[i]) || 'null');
        }
        return '[' + ret.join(',') + ']';
      }
      var name, val, pairs = [];
      for (var k in o) {
        type = typeof k;
        if (type === 'number')
          name = '"' + k + '"';
        else if (type === 'string')
          name = swift.quoteString(k);
        else
          continue;
        type = typeof o[k];
        if (type === 'function' || type === 'undefined')
          continue;
        val = swift.toJSON(o[k]);
        pairs.push(name + ':' + val);
      }
      return '{' + pairs.join(',') + '}';
    }
  }
  swift.parseJSON = swift.evalJSON = typeof window.JSON === 'object' && window.JSON.parse ? window.JSON.parse : function (src) {
    var filtered = src.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, '');
    if (/^[\],:{}\s]*$/.test(filtered))
      return eval('(' + src + ')');
    else
      swift.error("Invalid JSON: " + o);
  }
  swift.quoteString = function (string) {
    var escapeable = /["\\\x00-\x1f\x7f-\x9f]/g,
        meta = {'\b':'\\b', '\t':'\\t', '\n':'\\n', '\f':'\\f', '\r':'\\r', '"':'\\"', '\\':'\\\\'};
    if (string.match(escapeable)) {
      return '"' + string.replace(escapeable, function (a) {
        var c = meta[a];
        if (typeof c === 'string')
          return c;
        c = a.charCodeAt();
        return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
      }) + '"';
    }
    return '"' + string + '"';
  }
  swift.isinline = function(tag) {
    return swift.inArray(tag, ["a", "abbr", "acronym", "b", "bdo", "big", "br", "cite", "code", "dfn", "em", "i", "img", "input", "kbd", "label", "q", "samp", "select", "small", "span", "strong", "sub", "sup", "textarea", "tt", "var"]);
  }
})(window);

// jd_x2Keyboard_wordlib.js
window.wordlib = {};

// jd_x2Keyboard_im.js
var _texts=null;
var keydown = null;
var keyup=null;
var im=null;
var input_tool=null;
var input=null;
$(function() {
	 input_tool = {
		setInputPosition : function(elem, pos) {
			if (elem.setSelectionRange) {
				elem.setSelectionRange(pos, pos);
			} else if (elem.createTextRange) {
				var range = elem.createTextRange();
				range.collapse(true);
				range.moveEnd('character', pos);
				range.moveStart('character', pos);
				range.select();
			}
		},

		getInputPositon : function(elem) {
			if (document.selection) { // IE Support
				elem.focus();
				var Sel = document.selection.createRange();
				return {left : Sel.boundingLeft,top : Sel.boundingTop,bottom : Sel.boundingTop + Sel.boundingHeight};
			} else {
				var that = this;
				var cloneDiv = '{$clone_div}', cloneLeft = '{$cloneLeft}', cloneFocus = '{$cloneFocus}', cloneRight = '{$cloneRight}';
				var none = '<span style="white-space:pre-wrap;"> </span>';
				var div = elem[cloneDiv] || document.createElement('div'), focus = elem[cloneFocus]|| document.createElement('span');
				var text = elem[cloneLeft] || document.createElement('span');
				var offset = that._offset(elem), index = this._getFocus(elem), focusOffset = {left : 0,top : 0};

				if (!elem[cloneDiv]) {
					elem[cloneDiv] = div, elem[cloneFocus] = focus;
					elem[cloneLeft] = text;
					div.appendChild(text);
					div.appendChild(focus);
					document.body.appendChild(div);
					focus.innerHTML = '|';
					focus.style.cssText = 'display:inline-block;width:0px;overflow:hidden;z-index:-100;word-wrap:break-word;word-break:break-all;';
					div.className = this._cloneStyle(elem);
					div.style.cssText = 'visibility:hidden;display:inline-block;position:absolute;z-index:-100;word-wrap:break-word;word-break:break-all;overflow:hidden;';
				};
				div.style.left = this._offset(elem).left + "px";
				div.style.top = this._offset(elem).top + "px";
				var strTmp = elem.value.substring(0, index).replace(/</g, '<').replace(/>/g, '>').replace(/\n/g, '<br/>').replace(/\s/g, none);
				text.innerHTML = strTmp;

				focus.style.display = 'inline-block';
				try {
					focusOffset = this._offset(focus);
				} catch (e) {
				};
				focus.style.display = 'none';
				return {left : focusOffset.left,top : focusOffset.top,bottom : focusOffset.bottom};
			}
		},

		// 克隆元素样式并返回类
		_cloneStyle : function(elem, cache) {
			if (!cache && elem['${cloneName}'])
				return elem['${cloneName}'];
			var className, name, rstyle = /^(number|string)$/;
			var rname = /^(content|outline|outlineWidth)$/; // Opera: content;
															// IE8:outline &&;
															// outlineWidth;
			var cssText = [], sStyle = elem.style;

			for (name in sStyle) {
				if (!rname.test(name)) {
					var val = this._getStyle(elem, name);
					if (val !== '' && rstyle.test(typeof val)) { // Firefox 4;
						name = name.replace(/([A-Z])/g, "-$1").toLowerCase();
						cssText.push(name);
						cssText.push(':');
						cssText.push(val);
						cssText.push(';');
					};
				};
			};
			cssText = cssText.join('');
			elem['${cloneName}'] = className = 'clone' + (new Date).getTime();
			this._addHeadStyle('.' + className + '{' + cssText + '}');
			return className;
		},

		// 向页头插入样式;
		_addHeadStyle : function(content) {
			var style = this._style[document];
			if (!style) {
				style = this._style[document] = document.createElement('style');
				document.getElementsByTagName('head')[0].appendChild(style);
			};
			style.styleSheet && (style.styleSheet.cssText += content) || style.appendChild(document.createTextNode(content));
		},
		_style : {},

		// 获取最终样式;
		_getStyle : 'getComputedStyle' in window ? function(elem, name) {
			return getComputedStyle(elem, null)[name];
		} : function(elem, name) {
			return elem.currentStyle[name];
		},

		// 获取光标在文本框的位置;
		_getFocus : function(elem) {
			try{
				var index = 0;
				if (document.selection) {// IE Support;
					elem.focus();
					var Sel = document.selection.createRange();
					if (elem.nodeName === 'TEXTAREA') {// textarea;
						var Sel2 = Sel.duplicate();
						Sel2.moveToElementText(elem);
						var index = -1;
						while (Sel2.inRange(Sel)) {
							Sel2.moveStart('character');
							index++;
						};
					} else if (elem.nodeName === 'INPUT') {// input;
						Sel.moveStart('character', -elem.value.length);
						index = Sel.text.length;
					}
				} else if (elem.selectionStart || elem.selectionStart == '0') { // Firefox // support;
					index = elem.selectionStart;
				}
				return (index);
			}
			catch(e){
			return 0;
			}
		},

		// 获取元素在页面中位置;
		_offset : function(elem) {
			var box = elem.getBoundingClientRect(), doc = elem.ownerDocument, body = doc.body, docElem = doc.documentElement;
			var clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0;
			var top = box.top + (self.pageYOffset || docElem.scrollTop)- clientTop, left = box.left+ (self.pageXOffset || docElem.scrollLeft) - clientLeft;
			return {
				left : left,
				top : top,
				right : left + box.width,
				bottom : top + box.height
			};
		}
	};

	function getPosition(ctrl) {
		return input_tool.getInputPositon(ctrl);
	}

	var im = {
		keys : "",
		page : 0
	};
	var KEY_CODE_SHIFT = 16, KEY_CODE_CTRL = 17, KEY_CODE_A = 65, KEY_CODE_Z = 90, KEY_CODE_BACKSPACE = 8, KEY_CODE_COMMA = 188, KEY_CODE_DOT = 190, KEY_CODE_ZERO = 48, KEY_CODE_NINE = 57, KEY_CODE_SPACE = 32, KEY_CODE_LEFT = 37, KEY_CODE_UP = 38, KEY_CODE_RIGHT = 39, KEY_CODE_DOWN = 40, KEY_CODE_ENTER = 13, KEY_CODE_ESC = 27, CANDIDATE = 13, IM_DIALOG_ID = "im_dialog", IM_INPUT_ID = "im_input", IM_SELECTED_CLASS = "im-selected";

	$("<div></div>")
			.appendTo(document.body)
			.attr("id", IM_DIALOG_ID)
			.html("<div id=\""+IM_INPUT_ID+"\" ><input style=\"width:100%;font-size:14px;border:0\" type=\"text\" id=\"imInput\"></div><ul></ul>"
					).css({
						"display" : "none",
						"padding" : 0,
						"background":"rgb(229, 229, 229)"
					}).find("ul").css({
						"list-style" : "none",
						"padding" : "1px 5px",
						"margin" : 0,
						"width":"615px",
					}).prev().css({
						"padding" : "2px 5px",
						"font-size" : 16,
						"font-weight" : "bold",
						"font-family" : "sans-serif"
					});
	var input = $('#'+IM_INPUT_ID+' input'), dialog = $('#'+IM_DIALOG_ID);
	keydown = function(e) {
		try{
		//u i v;
		 if(e.keyCode==0 || ( (e.keyCode==85 || e.keyCode==86 || e.keyCode==73)&& im.keys==""))
		 	return false;
		 console.log("keycode",e.keyCode, im.keys);
		}catch(e){}
		// if (im.ctrled) return;

		if (e.keyCode == KEY_CODE_SHIFT) {
			// shift;
			im.shifted = true;
		} else if (e.keyCode >= KEY_CODE_A && e.keyCode <= KEY_CODE_Z || e.keyCode == KEY_CODE_BACKSPACE || e.keyCode == KEY_CODE_COMMA || e.keyCode == KEY_CODE_DOT) {
			// a-z;
			if (e.keyCode == KEY_CODE_BACKSPACE) {
				if (im.keys)
					im.keys = im.keys.slice(0, -1);
			} else if (e.keyCode == KEY_CODE_COMMA) {
				im.page = Math.max(im.page - 1, 0);
				im.need_trim = true;
			} else if (e.keyCode == KEY_CODE_DOT) {
				im.page += 1;
				im.need_trim = true;
			} else {
				var key = String.fromCharCode(e.keyCode).toLowerCase();
				im.keys += key;
				im.page = 0;
			}

			// input.val(im.keys);
			if (im.keys) {
				var words = [];
				im.has_next_page = false;
				for (var keys in wordlib) {
					if (keys.startswith(im.keys)) {
						word = wordlib[keys];
						var ws = word.split(",");
						for (var i = 0; i < ws.length; i++) {
							words.push(ws[i]);
						}
						if (words.length > CANDIDATE*2*(im.page)+13) {
							im.has_next_page = true;
							break;
						}

					}
				}

				if (!words.length) {
				}
				if (words.length <= CANDIDATE *2*( im.page-1)+13)
					if (im.page)
						im.page -= 1;
				im.has_prev_page = !!im.page;

				if( im.page==0){
					words = words.slice(0, CANDIDATE);
				}else{
					words = words.slice(CANDIDATE *2* (im.page-1)+13, CANDIDATE*2* (im.page )+13);
				}


				if (words.length) {
					var word_list = [];
					for (var i = 0; i < words.length; i++) {
						word_list.push("<li class=\"word\">"+(i+ 1)+". "+words[i]+"</li>");
					}
					console.log(word_list);
					if (word_list.length) {
						word_list[0] = '<li class="word '+IM_SELECTED_CLASS+'"  style="background:#0099FF;color:#FFF;">1. '+ words[0]+'</li>';
					}
					word_list.push("<li class=\"prev\">&lt;</li>");
					word_list.push("<li class=\"next\">&gt;</li>");
					word_list.push("<div style=\"clear:both\"><div>");
					if (im.dialog) {
						im.dialog.find("ul").html(word_list.join(""));
						if (im.has_prev_page) {
							im.dialog.find("ul li.prev").css({"color" : "#FFF","background" : "#0099FF","margin-right" : 5});
						}
						if (im.has_next_page) {
							im.dialog.find("ul li.next").css({"color" : "#FFF","background" : "#0099FF"});
						}
					} else {

						src_input=jQuery(".dialog-show #txt_word").get(0);
						var position = getPosition(src_input);
						var fontSize = swift(src_input).style("font-size") || "20";
						if (fontSize.endswith("px")) {
							fontSize = fontSize.slice(0, -2);
						}
						im.dialog = swift("#" + IM_DIALOG_ID).find("ul")
								.html(word_list.join("")).parent().dialog({
									style : {
										"border" : "0",
										//"left" : parseInt(position.left),
										"left" :parseInt(jQuery(".dialog-show #"+src_input.id).offset().left/2+10),
										//"top" :( parseInt(jQuery(".dialog-show  #"+src_input.id).offset().top)+ parseInt(fontSize))/2,
										"top" :"20px",
										"font-size" : "14px",
										"height" : "50px",
										"color" : "#000",
										//"box-shadow" : "#555 1px 3px 3px",
										"border-radius" : "5px",
										"padding" : "0 6px",
										"background" : "#E5E5E5",
										"zoom":"2"
									}
								});
					    jQuery(".swift-dialog").css("width","615px");
					 //   jQuery(".swift-dialog").css("left",parseInt(jQuery(".dialog-show  #"+src_input.id).offset().left/2+10));
					      jQuery(".swift-dialog").css("left","5px");

					    if (im.has_prev_page) {
							im.dialog.find("ul li.prev").css({"color" : "#FFF","background" : "#0099FF","margin-right" : 5});
						}
						if (im.has_next_page) {
							im.dialog.find("ul li.next").css({"color" : "#FFF","background" : "#0099FF"});
						}
						im.started = true;
					}


				    if(im.page<=0)
				    	jQuery(".swift-dialog").css("height","");
				    else
				    	jQuery(".swift-dialog").css("height","100px");
					im.dialog.find("li").css({
								"font-size" : "14px",
								"float" : "left",
								"padding" : "2px 5px 2px 5px",
								"margin-right" : 5,
								"cursor" : "pointer"
							}).filter(".word").click(function(e) {
						var selected_word_tag_li = im.dialog.find("ul>li."+IM_SELECTED_CLASS), target_word_tag_li = $(this);
						if (target_word_tag_li) {
							if (selected_word_tag_li) {
								selected_word_tag_li.removeClass(IM_SELECTED_CLASS).css("background", "").css("color","");
							}
							target_word_tag_li.addClass(IM_SELECTED_CLASS).css("background", "#0099FF").css("color","#FFF");
							im.word = target_word_tag_li.html().substr(3);
						} else {
							delete im.word;
						}
						input.val("");
						im.word=im.word.trim();
						if (im.word) {
							src_input=jQuery(".dialog-show  #"+src_input.id).get(0);
							src_input.value = src_input.value.slice(0,im.cursor)+ im.word+ src_input.value.slice(im.cursor);
							im.cursor += im.word.length;
						}
						im.keys = "";
						im.dialog && im.dialog.close();
						src_input.focus();
						input_tool.setInputPosition(src_input, im.cursor);
						im.word = "";
						keyboard_input_e_focus=im.cursor;
						console.log("keyboard_input_e_focus",keyboard_input_e_focus);
						delete im.dialog;
					});
					im.dialog.find('li.prev').click(function(e) {
								// im.page = Math.max(im.page - 1, 0);
								keydown.call(this, {keyCode : KEY_CODE_COMMA});
								im.need_trim = false;
							});
					im.dialog.find('li.next').click(function(e) {
								// im.page += 1;
								keydown.call(this, {keyCode : KEY_CODE_DOT});
								im.need_trim = false;
							});
				} else {
					try{
					im.dialog.find("ul li.word").remove();
					}catch(e){};
					// im.word = "";
					// im.ended = true;
				}
			} else if (im.dialog) {
				im.started = false;
				im.ended = true;
			}
		} else if (e.keyCode > KEY_CODE_ZERO&& e.keyCode <= KEY_CODE_ZERO + CANDIDATE) {
			// 1-5
			if (im.dialog) {
				var key = String.fromCharCode(e.keyCode), selected_word_tag_li = im.dialog.find("ul>li."+IM_SELECTED_CLASS), target_word_tag_li = $(im.dialog.find("ul>li")[key - 1]);
				if (target_word_tag_li) {
					if (selected_word_tag_li) {
						selected_word_tag_li.removeClass(IM_SELECTED_CLASS).css("background", "").css("color", "");
					}
					target_word_tag_li.addClass(IM_SELECTED_CLASS).css("background", "#0099FF").css("color", "#FFF");
					im.word = target_word_tag_li.html().substr(3);
				} else {
					delete im.word;
				}
				im.ended = true;
				// im.keys += key;
			}
		} else if (e.keyCode == KEY_CODE_CTRL) {
			// ctrl;
			im.ctrled = true;
		} else if (e.keyCode == KEY_CODE_LEFT || e.keyCode == KEY_CODE_RIGHT) {
		} else if (e.keyCode == KEY_CODE_UP || e.keyCode == KEY_CODE_DOWN) {
			if (im.dialog) {
				var selected_word_tag_li = im.dialog.find("ul>li."+IM_SELECTED_CLASS);
				if (selected_word_tag_li) {
					var target_word_tag_li = e.keyCode == KEY_CODE_UP? selected_word_tag_li.prev(): selected_word_tag_li.next();
					if (target_word_tag_li) {
						selected_word_tag_li.removeClass(IM_SELECTED_CLASS)
								.css("background", "").css("color", "");
						target_word_tag_li.addClass(IM_SELECTED_CLASS).css(
								"background", "#0099FF").css("color", "#FFF");
					}
				}
			}
		} else if (e.keyCode == KEY_CODE_SPACE) {
			// enter;
			if (im.dialog) {
				var selected_word_tag_li = im.dialog.find("ul>li."+IM_SELECTED_CLASS);
				if (selected_word_tag_li.length) {
					im.word = selected_word_tag_li.html().substr(3);
					im.need_trim = (e.keyCode == KEY_CODE_SPACE);
					im.ended = true;
				} else {
					im.keys += " ";
				}
			}
		} else if (e.keyCode == KEY_CODE_ENTER) {
			// enter;
			if (im.dialog) {
				im.word = im.keys;
				im.ended = true;
			}
		} else if (e.keyCode == KEY_CODE_ESC) {
			im.ended = true;
			im.keys = "";
		}
	}
	 keyup= function(e) {
		var key = String.fromCharCode(e.keyCode).toLowerCase();
		if (key == "shift") {
			im.shifted = false;
		}
		if (im.ended) {
			input.val("");
			if (im.word) {
				src_input.value = src_input.value.slice(0, im.cursor) + im.word
						+ src_input.value.slice(im.cursor);
				im.cursor += im.word.length;
				keyboard_input_e_focus=im.cursor;
			    console.log("keyboard_input_e_focus",keyboard_input_e_focus);
			}
			im.keys = "";
			im.ended = false;
			im.dialog && im.dialog.close();
			src_input.focus();
			input_tool.setInputPosition(src_input, im.cursor);
			im.word = "";
			delete im.dialog;
		}
		im.ctrled = false;
		if (im.need_trim) {
			input.val(input.val().slice(0, -1));
			im.need_trim = false;
		}
	}

var src_input = null;
_texts=$("input,textarea").filter("#"+IM_INPUT_ID+" input");
$("input,textarea").filter("#"+IM_INPUT_ID+" input").on("keydown",
		function(e) {
			src_input = this;
			im.cursor = input_tool._getFocus(src_input);
			keydown.call(input, e);
			input.focus();
		}).on("keyup", function(e) {
			e.stopPropagation();
		});
input.keydown(keydown).keyup(keyup);

});


function closePinyinDialog(ifSetVal){
			//if(ifSetVal==true)
			//	jQuery(keyboard_current_request_input).val(jQuery(".dialog-show #txt_word").val());
			im.keys = "";
			im.dialog && im.dialog.close();
			src_input=jQuery(".dialog-show #txt_word").get(0);
			src_input.focus();
			input_tool.setInputPosition(src_input, im.cursor);
			im.word = "";
			keyboard_input_e_focus=im.cursor;
			jQuery("#imInput").val("");
			//console.log("keyboard_input_e_focus",keyboard_input_e_focus);
			delete im.dialog;
	}

// jd_x2Keyboard.js
var keyboard_input_e_focus=null;

/**@class 类 jd.plugins.x2Keyboard 屏幕键盘控件
*@author 徐翔
*@see <a href="mailto:china_xuxiang@163.com"  target="_blank">email:china_xuxiang@163.com</a >
*/


var jdKeyboard=jd.plugins.x2Keyboard = function(config){
	this.debug=jd.global.debug || true;

	/**对象配置参数<br>
	 * parentId 父对象ID
	 * inputTxt 输入框DOM对象
	 * defaultIm 输入法
	 * */
	this.config={
		parentId:null,
		inputTxt:null,
		defaultIm:"拼音输入",
		capslock:null
	};
	//更新构造参数到对象
	jQuery.extend(true,this.config,config);
	var kb=this;

	/**得到最后输入的值
	 * @return {String} 最后输入框中的值
	 * */
	this.getValue=function(){
		return this.keyboard_input_e.val();
	}
	/**表单输入框对象*/
	this.keyboard_input_e = jQuery(this.config.inputTxt);
	/**表单输入框对象光标位置*/
	this.keyboard_input_e_focus = 0;
	/**是否为拼音方式(实际是中文方式 包括五笔)*/
	this.keyboard_mode_pinyin = false;


	keyboard_input_e_focus=this.keyboard_input_e_focus;

	/**初始化方法*/
    this.init = function() {
    	//大小写切换
    	if (this.config.capslock == 'upper') {
            if (jQuery(".capslock").html().indexOf("小写") != -1) {
            	jQuery('.letter').toggleClass('uppercase');
                capslock = true;
                jQuery(".capslock").html("大写<font style='color:#ccc'>/小</font>")
            }
    	}
    	if (this.config.capslock == 'little') {
    		if (jQuery(".capslock").html().indexOf("大写") != -1) {
    			jQuery('.letter').toggleClass('uppercase');
    			capslock = false;
    			jQuery(".capslock").html("小写<font style='color:#ccc'>/大</font>")
    		}
    	}
    	//设置输入法
        if (this.config.defaultIm == '拼音输入') {
            this.keyboard_mode_pinyin = true;
            jQuery(".right-language").html("拼音输入")
            jQuery('.right-language').removeClass("disabled");
        } else {
            this.keyboard_mode_pinyin = false;
            jQuery(".right-language").html("英文输入")
            jQuery('.right-language').addClass("disabled");
        };

        //当前对话框中的#txt_word文本框得到光标
        try {
        	var _input2=jQuery("#"+this.config.parentId+" #txt_word");
            _input2.focus();
            //把修改目标的值读取到对话框输入框中
            _input2.val(this.keyboard_input_e.val())
            //设置为当前输入目标
            this.keyboard_input_e=_input2;
            this.keyboard_input_e_focus=input_tool._getFocus(this.keyboard_input_e.get(0));
        } catch(e) {};
        //按键处理开始
        var shift = false;
        var capslock = false;

        //按键处理
        jQuery("#"+this.config.parentId+" #keyboard li").not(".disabled").mousedown(function() {
            var src_input=kb.keyboard_input_e.get(0);
            console.log('src_input')
            console.log(src_input);
            kb.keyboard_input_e_focus = getCursorPosition(src_input);
        	//当前的按键对象
            var touchBtn_e = jQuery(this),
            //按键字母
            charater = touchBtn_e.html();
            if (touchBtn_e.hasClass('symbol')) charater = jQuery('span:visible', touchBtn_e).html();
            if (touchBtn_e.hasClass('delete')) {
                if (jQuery(".swift-dialog").length > 0) {
                    keyboard_pinyin_call(kb.keyboard_input_e, null, KEY_CODE_BACKSPACE)
                } else {
                    if (src_input.value.length > 0) {
                        src_input.value = src_input.value.slice(0, kb.keyboard_input_e_focus - 1) + src_input.value.slice(kb.keyboard_input_e_focus);
                        kb.keyboard_input_e_focus--;
                        setCaretPosition(src_input, kb.keyboard_input_e_focus);
                    }
                };
                if(kb.debug==true) console.log("kb.keyboard_input_e_focus", kb.keyboard_input_e_focus);
                return false
            };
            if (touchBtn_e.hasClass('tab')) charater = '\t';
            if (touchBtn_e.hasClass('capslock')) {
                jQuery('.letter').toggleClass('uppercase');
                if (jQuery(".capslock").html().indexOf("小写") != -1) {
                    capslock = true;
                    jQuery(".capslock").html("大写<font style='color:#ccc'>/小</font>")
                } else {
                    capslock = false;
                    jQuery(".capslock").html("小写<font style='color:#ccc'>/大</font>")
                };
                return false
            };
            if (touchBtn_e.hasClass('enter')) {
                if (jQuery(".swift-dialog").length > 0) {
                    keyboard_pinyin_call(kb.keyboard_input_e, null, KEY_CODE_ENTER);
                    return false
                } else {
                    charater = '\n'
                }
            };
            if (touchBtn_e.hasClass('right-language')) {
                if (touchBtn_e.html() == "拼音输入") {
                    touchBtn_e.html("英文输入");
                    kb.keyboard_mode_pinyin = false;
                    kb.keyboard_input_e.attr("im", "英文输入")
                } else {
                    touchBtn_e.html("拼音输入");
                    kb.keyboard_mode_pinyin = true;
                    kb.keyboard_input_e.attr("im", "拼音输入")
                };
                return false
            };
            if (touchBtn_e.hasClass('left-shift') || touchBtn_e.hasClass('right-shift')) {
                jQuery('.letter').toggleClass('uppercase');
                jQuery('.symbol span').toggle();
                shift = (shift === true) ? false: true;
                capslock = false;
                if (jQuery(".capslock").html().indexOf("小写") != -1) {
                    capslock = true;
                    jQuery(".capslock").html("大写<font style='color:#ccc'>/小</font>")
                } else {
                    capslock = false;
                    jQuery(".capslock").html("小写<font style='color:#ccc'>/大</font>")
                };
                if (shift === true) {
                    touchBtn_e.html("<font style='color:#ccc'>数字/</font>符号")
                } else {
                    touchBtn_e.html("数字<font style='color:#ccc'>/符号</font>")
                };
                return false
            };
            if (touchBtn_e.hasClass('space')) {
                if (jQuery(".swift-dialog").length > 0) {
                    keyboard_pinyin_call(kb.keyboard_input_e, null, KEY_CODE_SPACE);
                    return false
                } else {
                    charater = ' '
                }
            };
            if (touchBtn_e.hasClass('clear')) {
                try {
                    jQuery(kb.keyboard_input_e).val('' + '');
                    kb.keyboard_input_e_focus = 0;
                    if(kb.debug==true) console.log("kb.keyboard_input_e_focus", kb.keyboard_input_e_focus);
                    im.keys = "";
                    jQuery("#imInput").val("");
                    if (jQuery(".swift-dialog").length > 0) closePinyinDialog(false)
                } catch(e) {}
                return false
            };
            if (touchBtn_e.hasClass('uppercase')) charater = charater.toUpperCase();
            var e = {
                keyCode: 70
            };

            if (window.outerWidth == undefined) {
                src_input.fireEvent("onkeydown")
            } else {
                try {
                    var vo = document.createEvent("KeyboardEvent");
                    vo.initKeyboardEvent("keydown", true, true, null, false, true, false, false, 9, 0);
                    src_input.dispatchEvent(vo)
                } catch(e) {}
            };

            //如果是内容按键输入，那需要pinyin检查和翻译
            if (kb.keyboard_mode_pinyin == true && (charater.toUpperCase() >= 'A' && charater.toUpperCase() <= 'Z' || (charater.toUpperCase() >= '0' && charater.toUpperCase() <= '9' && jQuery(".swift-dialog").length > 0)))
            	keyboard_pinyin_call(kb.keyboard_input_e, charater);
            else {
                if(charater.toUpperCase()=="."){
                	if(src_input.value.length>0){
		            	if(src_input.value.indexOf(".")>=0){
		            		return false;
		            	}
	            	}else{
	            		charater="";
	            	}
            	}
                if (kb.keyboard_input_e_focus == undefined) kb.keyboard_input_e_focus = 0;
                if(kb.debug==true) console.log("kb.keyboard_input_e_focus", kb.keyboard_input_e_focus);
                src_input.value = src_input.value.slice(0, kb.keyboard_input_e_focus) + charater + src_input.value.slice(kb.keyboard_input_e_focus);
                kb.keyboard_input_e_focus++;
                setLocation(src_input, kb.keyboard_input_e_focus)
            }
        })
        return this;
    }//init
    this.init();


	function keyboard_pinyin_call(elem, charater, keycode) {
		// if(kb.debug==true) jd.fn.fn_console("keyboard_pinyin_call",arguments);
	    var _keycode = "";
	    try {
	        _keycode = unicode(charater.toUpperCase())
	    } catch(e) {};
	    if (keycode != null) {
	        _keycode = keycode
	    };
	    elem.focus();
	    im.cursor = kb.keyboard_input_e_focus;
	    if ((_keycode == 85 || _keycode == 86 || _keycode == 73) && im.keys == "") return false;
	    var current_keyCode = {
	        keyCode: _keycode
	    };
	    keydown.call(input, current_keyCode);
	    keyup.call(input, current_keyCode);
	    var imInput = jQuery("#imInput");
	    if (keycode == null && !(charater.toUpperCase() >= '0' && charater.toUpperCase() <= '9')) {
	        imInput.val(imInput.val() + charater)
	    } else if (keycode == KEY_CODE_BACKSPACE) {
	        imInput.val(imInput.val().substring(0, imInput.val().length - 1))
	    }
	};
	function unicode(char) {
	    var chars = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMN" + "OPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
	    c = chars.indexOf(char.charAt(0));
	    if (c != -1) return c + 32;
	    char = escape(char);
	    return parseInt(char.replace(/%u?/, ""), 16)
	};
	function getLocation(elm) {
	    if (elm.createTextRange) {
	        var range = document.selection.createRange();
	        range.setEndPoint('StartToStart', elm.createTextRange());
	        return range.text.length
	    } else if (typeof elm.selectionStart == 'number') {
	        return elm.selectionStart
	    }
	};
	function setLocation(elm, n) {
	    if (n > jQuery(elm).val().length) n = jQuery(elm).val().length;
	    if (elm.createTextRange) {
	        var textRange = elm.createTextRange();
	        textRange.moveStart('character', n);
	        textRange.collapse();
	        textRange.select()
	    } else if (elm.setSelectionRange) {
	        elm.setSelectionRange(n, n);
	        elm.focus()
	    }
	};
	function getCursorPosition(obj) {
	    var evt = window.event ? window.event: getTa1CursorPosition.caller.arguments[0];
	    var oTa1 = obj;
	    try {
	        if (oTa1.value == "") return 0;
	        var cursurPosition = -1;
	        if (oTa1.selectionStart) {
	            cursurPosition = oTa1.selectionStart
	        } else {
	            var rngSel = document.selection.createRange();
	            var rngTxt = oTa1.createTextRange();
	            var flag = rngSel.getBookmark();
	            rngTxt.collapse();
	            rngTxt.moveToBookmark(flag);
	            rngTxt.moveStart('character', -oTa1.value.length);
	            cursurPosition = rngTxt.text.replace(/\r\n/g, '').length
	        };
	        return cursurPosition
	    } catch(e) {
	        return oTa1.value.length
	    }
	};

	function setCaretPosition(ctrl, pos) {
	    if (ctrl.setSelectionRange) {
	        ctrl.focus();
	        ctrl.setSelectionRange(pos, pos)
	    } else if (ctrl.createTextRange) {
	        var range = ctrl.createTextRange();
	        range.collapse(true);
	        range.moveEnd('character', pos);
	        range.moveStart('character', pos);
	        range.select()
	    }
	}

};

// socket.js
/**存放web回调方法的容器*/


$web.funReturn= new jd.collection.HashMap();
var $funReturn=$web.funReturn;

/**
 * readyState值的含义
 *   0        CONNECTING        连接尚未建立
 *   1        OPEN            WebSocket的链接已经建立
 *   2        CLOSING            连接正在关闭
 *   3        CLOSED            连接已经关闭或不可用
 */


 /**
  * 建立socket对象
  * @param {} config 配置参数
  * Fix _AleksandrLXX 修改了send方法，并增加了stop方法 现在可以通过stop方法停下来 
  * 方便在控制台控制。
  */
var jdSocket=$web.socket=function(config){
	
		this.msgId=0;
		/**
		 * 对象配置参数<br>
		 * addr：请求地址
		 * repeat：重试次数
		 * intervalTime：重试间隔时间
		 * errorFn：开始前执行的执行的方法
		 * timeOut：超时时间
		 */
		
		this.config = {
			addr : "",
			repeat : 0,
			intervalTime : 5000,
			errorFn:null,
			timeOut:""
			
		};
		this.socket=null;
		var Self=this;
		//Websocket地址前缀
		this.hostprefix="ws://";
		//发送的参数
		var sendparam=null;
		//更新构造参数到对象
		jQuery.extend(true, this.config, config);
		
		/**
		 * 建立连接
		 */
		this.connect=function(){
				console.error('Websocket开始连接...');
				if (!window.WebSocket) {// 检测浏览器支持
							console.error('该浏览器不支持Websocket!!!');
							return;
				}
				if(Self.socket==null)
					Self.socket = new WebSocket(this.config.addr);// 创建连接并注册响应函数
				
				Self.socket.onopen = function(evt){//打开连接
									console.info("WebSocket已打开!!!")
				};
						
				Self.socket.onmessage = function(message) {//接收消息
						var dataJson=jd.fn.string2json(message.data);
						console.log("接收消息>>>："+message.data);
						//若拒绝需提示@@@
						var _funkey=dataJson.callpath+"."+dataJson.fn;//+"."+dataJson.fn;
						var _fun=$funReturn.get(_funkey);
						if(_fun) _fun(dataJson.ret,dataJson.fn);
				};
					
				Self.socket.onclose = this.onclose;
				Self.socket.onerror = this.onerror;
				
			return Self;
		}
		
		this.onerror=function(){
			console.error("websocket已出错!!!");
			this.close();
		};
		
		this.onclose=function(){//
			console.info("websocket已关闭!!!");
			jd.plugins.x2Scheduled.remove("sendsocket");
			this.close();
			Self.socket=null;
			jd.plugins.x2Scheduled.add('openloop',{callback:		
				function(count,servDate){//回调函数								
							Self.connect();//发送消息	
				},interval:Self.config.intervalTime,count:1,direct:jd.plugins.x2ScheduledObserver.DESC});
		};
		
		
		/**
		 *格式化参数
		 *@param {Object} arguments 参数数组 第一个参数:回调函数，第二个参数：调用web的方法名，调用web方法的参数
		 *@return {Object} 返回格式话参数对象的字符串
		 */
		this.paramFormat=function(arguments_self){
			
			/**参数对象不能超过11个长度*/
			if(arguments_self.length<0||arguments_self.length>11){
					console.error("请注意：web.run参数为空或长度过长!!!");
					console.dir(arguments_self);
					return;
				}
			
			
	//		console.log(arguments_self[1]);
	//		console.dir(arguments_self[0]);
			
			/**定义入参对象 callpath:web类名，fn:web方法，param：参数数组*/
			var _socketP={callpath:"",fn:"",param:[]};
			/**给定义入参callpath赋值*/
			_socketP.callpath=arguments_self[1].substring(0,arguments_self[1].lastIndexOf('.'));
			/**给定义入参fn赋值*/
			_socketP.fn=arguments_self[1].substring(arguments_self[1].lastIndexOf('.')+1);
			/**将回调方法放到回调方法集合中*/
			console.info("服务端Socket");
			if(_socketP.callpath!=null)  $funReturn.put(_socketP.callpath+"."+_socketP.fn,arguments_self[0]);
			
			/**如果第三个参数是个数组，那就只解析数组了*/
			if(arguments_self[2] instanceof Array){
				_socketP.param=arguments_self[2];
			}else{
				/**拼合socket发送参数*/
				for(var i=2;i<arguments_self.length;i++){
					_socketP.param.push(arguments_self[i]);
				}
			}
			console.dir(_socketP)
			sendparam=jd.fn.json2string(_socketP);
			return Self;//将对象转换成字符串
			
		}
		
		/**
		 *发送消息 
		 */
		this.send=function(){
			if(arguments.length>1)
				this.paramFormat(arguments);//格式化后的消息
			else if(arguments.length==1)
				this.sendparam=arguments[0];
			
			try{
				if(this.socket){
					var _socket=this.socket;
					this.msgId+=1;
					var _interval=this.msgId%2==0?Self.config.intervalTime+100:Self.config.intervalTime;
					var _sendparam=sendparam;
					var param=jd.fn.string2json(sendparam);
					jd.plugins.x2Scheduled.add('sendsocket'+param['callpath']+param['fn'],{callback:		
							function(count,servDate){//回调函数
									if(_socket.readyState==1){
										_socket.send(_sendparam);//发送消息
										console.log("发送消息："+_sendparam);
										jd.plugins.x2Scheduled.remove("sendsocket"+param['callpath']+param['fn']);
									}else{
										console.log("readyState:"+_socket.readyState+"  重试发送消息："+_sendparam);
										if(count==0){
											jd.plugins.x2Scheduled.remove("sendsocket"+param['callpath']+param['fn']);
											if(Self.config.errorFn) Self.config.errorFn();//执行回调出错回调函数
											Self.connect().send(_sendparam);//发送消息重试
										}else{

											_socket.close();
											Self.connect().send(_sendparam);//发送消息重试
										}
								}
									
							},interval:_interval,count:Self.config.repeat,direct:jd.plugins.x2ScheduledObserver.DESC});
							
				}else{//发送时连接断开始，重新连接，再发送	
				
					console.error(' 请先连接服务!!!');return sendparam; 

					
				}
				return sendparam;
			}catch(e){
				console.error(e.message);
			}
		}
			
		
		
		
		/**
		 *发送消息 
		 */
		this.log=function(content){
			var sendparam="log:"+content;
			if(content!=null && content!="")
				try{
					if(this.socket){
						console.log(sendparam);
						_socket=this.socket;
						_socket.msgId++;
						jd.plugins.x2Scheduled.add('sendlog'+_socket.msgId,{callback:		
								function(count,servDate){//回调函数
	//								console.log(_socket.readyState);
										if(_socket.readyState==1){
											_socket.send(sendparam);//发送消息
											jd.plugins.x2Scheduled.remove("sendlog"+_socket.msgId);
										}else{
											
											if(count==0){
												jd.plugins.x2Scheduled.remove("sendlog"+_socket.msgId);
												if(Self.config.errorFn) Self.config.errorFn();//执行回调出错回调函数
											}else{
	//											console.dir(Self);
												_socket.close();
												Self.connect().send();//发送消息重试
											}
									}
										
								},interval:Self.config.intervalTime,count:Self.config.repeat,direct:jd.plugins.x2ScheduledObserver.DESC});
								
					}else{//发送时连接断开始，重新连接，再发送	
					
						console.error(' 请先连接服务!!!');return sendparam; 
						
					}
					return sendparam;
				}catch(e){
					console.error(e.message);
			 }
		}

}


var $socket=new $web.socket({
	addr:jd.global.socket_host,
	repeat:0,
	intervalTime:3000,
	errorFn:null,
	timeOut:3000
});
$socket.connect();
var aSocket=$socket;
//此处需要加配置





$web.sound={
	logout:"logout.wav|感谢您的使用，请不要忘记您的卡片",
	login:"login.wav|欢迎使用，请点继续办理业务按钮",
	onPrint:"onPrint.wav|正在为您打印，请留意出纸口",
	onSubMenu:"onSubMenu.wav|请选择您的服务项，查询或办理业务",
	onSearch:"onSearch.wav|请在右方字母键盘上按拼音首字母搜索，比如保险输入B,X",
	onHomeWithLogin:"onHomeWithLogin.wav|请继续操作或选择注销并取走卡片",
	onReadCard:"onReadCard.wav|请按页面提示刷卡",
	senceBase:"senceBase.wav|我能为您提供以下服务",
	senceCY:"senceCY.wav|您好！您是要创业吗？",
	senceJY:"senceJY.wav|您好！您是要找工作吗？",
	senceYangLBX:"senceYangLBX.wav|您是要查保险信息吗？"
}
/**
 * 播放声音
 * @param {String} filename 文件名
 * */
$web.playSound=function(filename){
	var _filename=filename;
	var _tips="";
	if(filename.indexOf("|")!=-1){
		var s=filename.split("|");
		_filename=s[0];
		_tips=s[1];
	}

	if(_filename.toLowerCase().indexOf(".wav")==-1){
		$log.error("只能播放.wav格式的文件");
		return ;
	}

	if(_tips!="")
		$log.info("播放声音："+_tips);
	else
		$log.info("播放声音："+_filename);


	$socket.send(
		function(m, funname) {},
		'tool.playSound',
		{soundName:jd.global.soundPath+_filename}
	);
}


/**
 * 停止播放
 * */
$web.stopSound=function(){
	$socket.send(
		function(m, funname) {},
		'tool.stopSound'
	);
}
//$web.playSound($web.sound.onHomeWithLogin)



//调用键盘
//callback调用回调方法
$socket.callKeyBoard=function (text,callback){
	 $page.startCountdown(500);
     $f.maskShowLoading("正在加载中，请稍后");
     $socket.send(function(m, funname) {
      $page.startCountdown(60);
           if('cancel'==m){
             $f.mask.close();
             callback(text);
          }else{
             $f.mask.close();
              callback(m);
       }
     }, "dev.jdwrite.handwriting_1.startWriting",text);
}

// $hardware = new hardware();

export default jd;
// export $web.socket as jdSocket;
// export $socket
export {
	jdDialog,
	jdKeyboard,
	jdSocket,
	aSocket,
	jdSchedule,
	jdFn
}
// export jd.plugins.x2Keyboard as jdKeyboard;


