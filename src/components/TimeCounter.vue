<template>
	<div :class="timeClass" :style='{color:color}'>
		{{timeCount}}秒
	</div>
</template>
<script type="es6">
	export default{
		name:"time-counter",
		data(){
			return{
				onTimeCount:false,
				timeCounter:null,
				timeCount:this.startCount,
			}
		},
		props:{
			startCount:{
				type:String,
				default:'60',
			},
			color:{
				type:String,
				default:"#cf3a7d",
			},
			timeClass:{
				type:String,
				default:'time-counter'
			}
		},
		watch:{
			timeCount(val){
			  if(!val){
			    this.reset();
			    this.$emit("count-end");
			  }
			},
			startCount(val,oldVal){
				if(val!=oldVal){
					this.timeCount=val;
				}
			},
			onTimeCount(val){
				if(val){
					this.$emit("count-start");
				}
			}
		},
		methods:{
			start(){ 
			    this.timeCounter && clearInterval(this.timeCounter)
			    this.timeCounter=setInterval(()=>{this.timeCount--},1000);
			    this.onTimeCount=true;         
			},
			reset(){
				this.timeCounter && clearInterval(this.timeCounter);
				this.timeCount=this.startCount;
				this.onTimeCount=false;
			},
			stop(){
				this.timeCounter && clearInterval(this.timeCounter);
				this.onTimeCount=false;
			},
		},
		beforeDestroy(){
	        this.timeCounter && clearInterval(this.timeCounter)
      	},
      	mounted(){
      		this.start()
      	}
	}
</script>
<style type="SASS" scoped></style>