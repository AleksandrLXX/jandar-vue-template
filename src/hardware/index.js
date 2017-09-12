import {aSocket} from '../util/index.js'


const handles={
  	PRINTTICK(Printer,xml){
      	aSocket.send(function(m,funcname){
      		Printer.resolve("success");
      	},
        // "dev.printrm.tp_kp80t_1.printXml",
        "dev.printrm.rg_mtp58b_1.printXml",
        xml)
	},
	CHECKPRINTER(Printer){
		aSocket.send(function(m,funcname){
      		var s=m.split('|');
      		if(s[0]==0){
				Printer.resolve("success");
      		}else{
      			Printer.resolve("fail"); 
      		}
		},"dev.printrm.rg_mtp58b_1.checkPrint"
    // "dev.printrm.tp_kp80t_1.checkPrint"
    )
	}
  
}
const formats={

}




class Printer{
    constructor(props) {
    	this.printHandle=handles[props.printHandle];
    	this.checkHandle=handles[props.checkHandle];
    	
    	this.name=props.name;
    	this.type=props.type;
    	this.tipsUrl=props.tipsUrl;
    }
    print(xml){
    	return new Promise((resolve,reject)=>{
    		this.resolve=resolve;
    		this.reject=reject;
    		this.printHandle(this,xml);
    	})
    }
    check(){
    	return new Promise((resolve,reject)=>{
    		this.resolve=resolve;
    		this.reject=reject;
    		this.checkHandle(this);
    	})
    }
    format(){

    }
}

export const printer = new Printer({printHandle:"PRINTTICK",checkHandle:"CHECKPRINTER",name:"义乌打印机",type:"",tipsUrl:""});
