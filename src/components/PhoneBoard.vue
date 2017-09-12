<template>
	<div class="keyBoard flex-column flex-top hor-center paper mu-paper mu-paper-round mu-paper-1">
		<div txt show style="height:80px;width:380px;">{{keyBoardValue}}</div>
		<section  class="num-board flex-row">
			<mu-raised-button class='num-button mu-paper  mu-paper-round mu-paper-2' :label="i+''" :data-num="i"  
			@click.native="handleNumClick($event,i)" 
			v-for="i in 9" :key="i"/>
			<mu-raised-button style="width:140px;height:80px" class='num-button mu-paper  mu-paper-round mu-paper-2' :label="'清除'"   
			@click.native="handleClear" 
			 />
			 <mu-raised-button style="width:100px;height:80px;margin:5px 0" class='num-button mu-paper  mu-paper-round mu-paper-2' :label="'0'"   
			 @click.native="handleNumClick($event,0)" 
			  />
			  <mu-raised-button style="width:140px;height:80px" class='num-button mu-paper  mu-paper-round mu-paper-2' :label="'回退'"   
			  @click.native="handleKeyBack" 
			   />
		</section>
		<div class='input-confirm flex-row hor-center flex-bottom'>
			<mu-raised-button class='mu-paper  mu-paper-round mu-paper-4' label=" 确认 "
			@click.native="handlePhoneConfirm" />
			<mu-raised-button class=' mu-paper  mu-paper-round mu-paper-4' label=" 取消 " 
			@click.native="handlePhoneCancle"/>
		</div>
		<mu-toast v-if="toast" :message="toast_msg" style="width:1000px" />
	</div>
</template>
<script type="es6">
	export default{
		name:"phone-board",
		data(){
			return{
				keyBoardValue:'',
				toast:false,
				toast_msg:'',
			}
		},
		props:{
			initialValue:{
				type:[String,Number]
			}
		},
		methods:{

			handlePhoneConfirm(){
				console.log(/^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/.test(this.keyBoardValue))
				if(/^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/.test(this.keyBoardValue)){
					
					this.$emit('phone-confirm',this.keyBoardValue);
				}else{
					if (this.toastTimer) clearTimeout(this.toastTimer);
					this.toast_msg="请输入正确的手机号码"
					this.toast=true;
					this.toastTimer = setTimeout(() => { this.toast = false }, 1000)
				}
			},
			handlePhoneCancle(){
				this.$emit('phone-cancle');
			},
			handleNumClick(e,i){
				if(this.keyBoardValue.length<11)
				this.keyBoardValue+=i;
			},
			handleClear(){
				this.keyBoardValue='';
			},
			handleKeyBack(){
				if(this.keyBoardValue.length>0)
				this.keyBoardValue=this.keyBoardValue.slice(0,-1)
			},
		},
		mounted(){
			this.keyBoardValue=this.initialValue||'';
		}
	}
</script>
<style lang="SASS">
	[txt]{
		font-size: 50px;color: #000;
		margin:0 20px; 
	}
	[show]{
		text-align: center;
		width: 100px;
		background-color: lighten(#beaa6b,30%);
	}
	.num-board {
		margin-top: 30px;
		flex-wrap: wrap;
		width: 450px;
		padding:0 10px;
	}
	.num-button{
		display:inline-block;
		background-color: #beaa6b;
		width:120px;height:120px;color:#fff;
		font-size: 50px;
		margin:5px 10px;
	}
	.input-confirm{
		width: 450px;
		flex-shrink: 1;
		margin-top: 50px;
		padding:0 15px;
		button{
			display:inline-block;
			background-color: #beaa6b;
			width:190px;height:80px;color:#fff;
			font-size: 50px;
			margin:0 20px;		
		}
		
	}
</style>