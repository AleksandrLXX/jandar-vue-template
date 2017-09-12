/**@class 类 RMPrinter 热敏指令打印
*@author 李俊杰
*@see  
*/
import jQuery from "jquery"
var $=jQuery
var RMPrinter=function(gcfg){
	var stringBuffer="";
			this.config={
			"font-size":0,
			"line-height":5,
			"word-spacing":0,
			"sign":"."	//如果字数不足以整齐整个列的宽度，用来填充的字符
	};
	jQuery.extend(true,this.config,gcfg);
	//添加列表
	this.appendTable=function(array,colWordCountArray,style){
		var _config={};
		jQuery.extend(true,_config,this.config);
		if(style!=undefined && style!=null)
			jQuery.extend(true,_config,style);
		stringBuffer+=this.styleStart(_config);
		//主要处理
		 jQuery.each(array,function(n,arr) { 
		 	 jQuery.each(arr,function(x,value) { 
		 	 	//不足补齐
		 	 	value = RMPrint.rightPad(value,colWordCountArray[x],style)
		 	 	stringBuffer = stringBuffer + value;
		 	 });
		 	 stringBuffer = stringBuffer + "\n";
		 });
		stringBuffer+=this.styleEnd;
		return this;
  	};
  	//添加一行 单条记录 
  	//inPara 传入字符串样式
	this.appendRow=function(s,style){
		var _config={};
		jQuery.extend(true,_config,this.config);
		if(style!=undefined && style!=null)
			jQuery.extend(true,_config,style);
		stringBuffer+=this.styleStart(_config);
		stringBuffer+=s+this.styleEnd;
		return this;
  	};
  	//添加一行数据 就是addtable的一条记录
  	//inPara 数组 样式
	this.appendArrayRow=function(array,colWordCountArray,style){
		var _config={};
		jQuery.extend(true,_config,this.config);
		if(style!=undefined && style!=null)
			jQuery.extend(true,_config,style);
		stringBuffer+=this.styleStart(_config);
		$.each(array,function(n,value) {
			//不足补齐
			value = RMPrint.rightPad(value,colWordCountArray[n],style)
		 	stringBuffer = stringBuffer + value;
		});
		stringBuffer+=this.styleEnd+"\n";
		return this;
  	};
  	//添加标题
	this.appendTitel=function(s,style){
		var _config={};
		if(style!=undefined && style!=null){
			jQuery.extend(true,_config,this.config);
			jQuery.extend(true,_config,style);
			stringBuffer+=this.styleStart(_config);
			stringBuffer+=s+this.styleEnd+"\n";
			//stringBuffer+="<font style='font-size:0;line-height:44;word-spacing:0;'>\n"+this.styleEnd;
		}
		else{
			stringBuffer+="<font style='font-size:1;line-height:44;word-spacing:0;'>"+s+this.styleEnd+"\n";
			//stringBuffer+="<font style='font-size:0;line-height:44;word-spacing:0;'>\n"+this.styleEnd;
		}
		return this;
	}
	//样式font开始
	this.styleStart=function(config){
  		var style_start="<font style='";
  		for ( var p in config ){
			if(p=='sign')continue;
			style_start+=p+":"+config[p]+"; ";
		}
		style_start+="'>";
		return style_start;
 	};

	//闭合标签
	this.styleEnd="</font>";
	//重写toString
  	this.toString=function(){
  		var _stringBuffer=stringBuffer;
  		if(_stringBuffer.endsWith("</font>")){
  			
  			return "<body>"+_stringBuffer+"</body>";
  			}
  		else{
  			
  			return "<body>"+_stringBuffer+"</font></body>";
  			}
	};
	//json转array
	this.Json2Array=function(json){
		var returnArray = [];
		for(var i=0,l=json.length;i<l;i++){  
			var tempArray = [];
		   	for(var key in json[i]){    
		       tempArray.push(json[i][key]);
		   	} 
		   returnArray[i] = tempArray;
		} 
		return returnArray;
  	}
	//补全不足的长度
	this.rightPad=function(param,n,style){
		var _config={};
		jQuery.extend(true,_config,this.config);
		if(style!=undefined && style!=null)
			jQuery.extend(true,_config,style);
		if ((param + "").length >= n) return param;   
		param = param + _config.sign;
		return this.rightPad(param,n,style);   
	}
	this.clear=function(){
		stringBuffer="";
	}
};

//$(function(){
	//var rmprint=new RMPrinter();
	//var data = '[["总金额","140元","140元"],["总张数","1张","1张"]]';
	//var data = '[{"col1":"总金额","col2":"140元","col3":"140元"},{"col1":"总金额","col2":"140元","col3":"130元"}]';
	//console.log($x2RMPrinter.Json2Array(jQuery.parseJSON(data)));
	//var result=rmprint.appendTitel("清钞凭条")
		//.appendTable($x2RMPrinter.Json2Array(jQuery.parseJSON(data)),[18,18,6],{})
		//.appendArrayRow(["总金额","140元","120元"],[18,18,6],{})
		//.bodyEnd()
		//.toString();
	//console.log(result);	
	//$('.display').text(result);
//});


var RMPrint = new RMPrinter();
export {RMPrint}