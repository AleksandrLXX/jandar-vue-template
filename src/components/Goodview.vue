<template>
	<div style="justify-content:flex-start;padding:0 80px;align-items:center;width:100%;height:1600px;" column>
		<div class='title'>{{goodSelected.NAME}}</div>
		
		<section class="detail mu-paper  mu-paper-round mu-paper-3" row>
			<div bgi-normal class="detail-img" v-if="!goodSelected.IMGBIG"	
			>
			</div >
			<div bgi-normal class="detail-img" v-else 
			:style="{'background-image':'url('+goodSelected.IMGBIG+')'}"
			>
			</div >
			<section class='table' column>
				<div row="">
					<div class='cell-head'>产地</div><div class='cell-body'>{{goodSelected.FROMPLACE}}</div>
				</div>
				<div row="">
					<div class='cell-head'>规格</div><div class='cell-body'>{{goodSelected.UNIT}}</div>
				</div>
				<div row="">
					<div class='cell-head'>价格</div><div class='cell-body'>{{goodSelected.PRICE1}}元</div>
				</div>
				<div row="">
					<div class='cell-head'>其它</div><div class='cell-body'></div>
				</div>
			</section>


		</section>
		<div bgi-normal class="top-img" ></div>
		<div style="width:900px;letter-spacing: 0.1em;line-height:2em;color:#000;max-height:600px;overflow: hidden;" v-html="goodSelected.MARK1" ></div>
		<div bgi-normal class="bottom-img" ></div>
		<section class='payment flex-column hor-center'>
			<div class='amount flex-row center'>
				<div txt>购买数量</div>
				<div txt show>{{num}}</div>
				
				<mu-raised-button  label="-"
				@click.native="sub" />
				<mu-raised-button  label="+" 
				@click.native="add"/>
			</div>
			<div class="phone flex-row center">
				<div txt>手机号码</div>
				<input txt show style="height:80px;width:380px;" :value="phone" @focus="handlePhoneInput"/>
			</div>
			<div class='flex-row flex-left' style="width:660px"><div>
				请务必填写正确手机号<br/>
				付款失败时将作为凭证
			</div></div>
			<div class='payfun flex-row hor-center flex-bottom'>
				<mu-raised-button class='ali mu-paper  mu-paper-round mu-paper-4' label="支付宝购买"
				@click.native="handleAlipay" v-show="alipay"/>
				<mu-raised-button class='weico mu-paper  mu-paper-round mu-paper-4' label="微信购买" 
				@click.native="handleWeico" v-show="wxpay"/>
			</div>
		</section>
		<div style="width:100%;position:absolute;bottom:60px;left:60px" class='flex-row flex-left' >
			<mu-raised-button class='back ali mu-paper  mu-paper-round mu-paper-4' label="< 返回" 
			@click.native="back"/>
		</div>
		<mu-toast v-if="toast" :message="toast_msg" @close="hideToast"/>
		<div class="model flex-column center"  v-if="confirm">
			<div class="confirm flex-column flex-top hor-center paper mu-paper mu-paper-round mu-paper-1" :class="{'not-pending':payStatus!='pending'}">

				<template v-if="payStatus=='pending'">
					<div>确定购买和付款</div>
					<section class='table' column>
						<div row="">
							<div class='cell-head'>商品名</div><div class='cell-body'>{{goodSelected.NAME}}</div>
						</div>
						<div row="">
							<div class='cell-head'>规格</div><div class='cell-body'>{{goodSelected.UNIT}}</div>
						</div>
						<div row="">
							<div class='cell-head'>单价</div><div class='cell-body'>{{goodSelected.PRICE1}} 元</div>
						</div>
						<div row="">
							<div class='cell-head'>数量</div><div class='cell-body'>{{num}}</div>
						</div>

						<div row="">
							<div class='cell-head'>总价</div><div class='cell-body'><span style="color:#dd1111" big>{{totalPrice}}</span> 元</div>
						</div>
					</section>
					<section class="flex-column center" style="margin-top:40px;">
						<div id='QR'></div>
						<div  v-if="payImg"  class="flex-row center" style="margin-top:30px">
							<div v-if="payfun=='alipay'" bgi-normal alipay-img ></div>
							<div v-if="payfun=='wxpay'"  bgi-normal weico-img ></div>
							<div style="margin-left:10px;" >
								打开{{payfun=='alipay'?'手机支付宝':'微信钱包'}}<br/>
								扫一扫进行付款
							</div>
						</div>
					</section>
					<div class='pay-confirm flex-row hor-center flex-bottom' 
					v-if="!payImg">
						<mu-raised-button class='' label="√ 确认支付" :class="{'mu-paper  mu-paper-round mu-paper-4':!disable,
						'disable':disable
							}" :disable="disable"
						@click.native="handleConfirm" />
						<mu-raised-button class=' mu-paper  mu-paper-round mu-paper-4' label="× 取消支付" 
						@click.native="handleCancle"/>
					</div>
					<div class='pay-confirm flex-column flex-top hor-center' style="margin-top:10px" 
					v-else>
						<mu-raised-button  label="取消支付" class="mu-paper  mu-paper-round mu-paper-4" v-show="finishShow"
						@click.native="handleFinish" />
						<div><time-counter startCount='90' @count-start="handleTimeStart" @count-end="handleTimeEnd"></time-counter></div>
						<div>请在90秒内完成支付,超时将自动取消订单</div>
						
					</div>
				</template>
				<template v-if="payStatus=='success'">
					<div margin big>支付结果</div>
					<div  bgi-normal success >
						
					</div>
					<div >购买成功,请凭小票或手机支付记录取货</div>
					<div class='pay-confirm flex-row hor-center flex-bottom'>
						<mu-raised-button class='mu-paper  mu-paper-round mu-paper-4' label=" 确认 "
						@click.native="handleFinish" />
						
					</div>
				</template>
				<template v-if="payStatus=='fail'">
					<div margin big>支付结果</div>
					<div  bgi-normal fail >
						
					</div>
					<div >购买失败</div>
					<div class='pay-confirm flex-row hor-center flex-bottom'>
						<mu-raised-button class='mu-paper  mu-paper-round mu-paper-4' label=" 确认 "
						@click.native="handleFinish" />
						
					</div>
				</template>
				
			</div>
		</div>
		<div class="model flex-column center" v-if="keyBoard">
			<phone-board :initialValue="phone"
			@phone-confirm='handlePhoneConfirm' @phone-cancle="handlePhoneCancle"></phone-board>
		</div>
	</div>
</template>
<script type="es6">
	import PhoneBoard from './PhoneBoard.vue'
	import TimeCounter from './TimeCounter.vue'
    import {QRCode} from '../util/qrcode.js'
   	import {printer} from '../hardware'
   	import {RMPrint} from '../util/RMPrint'
   	
   	

	export default{
		data(){
			return {
				num:0,
				toast:false,
				toast_msg:"",
				phone:"",
				keyBoard:false,
				keyBoardValue:"",
				payImg:false,
				payfun:'',
				payStatus:'pending',
				finishShow:false,
				confirm:false,
				disable:false,
				alipay:process.env.NODE_ENV=="production"?config.alipay:true,
				alipay:process.env.NODE_ENV=="production"?config.alipay:true,
			}
		},
		components:{
			'phone-board':PhoneBoard,
			"time-counter":TimeCounter,
		},
		computed:{
			goodSelected(){
				return this.$store.state.goodSelected;
			},
			account(){
				return Number(this.$store.state.goodSelected.STOCKCOUNT)||0;
			},
			totalPrice(){
				return this.num*this.$store.state.goodSelected.PRICE1
			}
		},
		methods:{
			add(){
				if(this.account==0){
					if (this.toastTimer) clearTimeout(this.toastTimer)
					this.toast_msg="该药品已售罄"
					this.toast=true;
					this.toastTimer = setTimeout(() => { this.toast = false }, 1000)
				}else if(this.num<this.account){
						this.num+=1;
				}else {
					if (this.toastTimer) clearTimeout(this.toastTimer);
					this.toast_msg="这已经是该药品所有库存"
					this.toast=true;
					this.toastTimer = setTimeout(() => { this.toast = false }, 1000)
				}
			},
			sub(){
				if(this.num>1){
					this.num-=1;
				}else{
					if (this.toastTimer) clearTimeout(this.toastTimer);
					this.toast_msg="购买数量不能为 0"
					this.toast=true;
					this.toastTimer = setTimeout(() => { this.toast = false }, 1000)
				}
			},
			hideToast(){
				this.toast = false
		      	if (this.toastTimer) clearTimeout(this.toastTimer)
			},
			back(){
				this.$emit('back')
			},
			handleCancle(){
				this.payStatus='pending'
				this.payImg=false;
				this.confirm=false;
				this.disable=false;

			},
			handleFinish(){
				this.$emit('back')
				this.payStatus='pending'
				this.payImg=false;
				this.confirm=false;
				
			},
			handleConfirm(){

				(!this.disable&&!this.payImg)&&this.$store.dispatch('getQRFromRemote',{
					deal_money:this.totalPrice,
					pay_channel:this.payfun,
					subject:this.goodSelected.NAME,
					productnum:this.num+'',
					name:this.phone,
					device_no:"SSR",
					productprice:this.goodSelected.PRICE1,
					productid:this.goodSelected.ID

				}).then(({brcode,sn})=>{
					if(sn){
						this.payImg=true;
						var qrcode = new QRCode(document.getElementById("QR"), {
							text: brcode,
							width: 279,
							height: 279,
							colorDark : "#000000",
							colorLight : "#d0c5a2",
							correctLevel : QRCode.CorrectLevel.H
						})

						this.$store.dispatch('getResultFromRemote',
							{sn,pay_channel:this.payfun})
						.then((status)=>{
							if(status=='001'){
								this.payStatus='success'
								setTimeout(()=>{this.$emit('back')},20000)
							   	printer.check().then(result=>{
							   		if(result=="success"){
							   			var payfunName=this.payfun=='alipay'?"支付宝支付":"微信支付";
								   		var printXml=RMPrint.appendTitel("支付凭证")
													.appendRow("产品名:"+this.goodSelected.NAME)
													.appendRow("数量:"+this.num)
													.appendRow("支付金额:"+this.totalPrice)
													.appendRow("手机号:"+this.phone)
													.appendRow("支付方式:"+payfunName)
													.appendRow("订单号:"+sn);
										console.log(printXml.toString())		
								   		printer.print(printXml.toString())
								   		RMPrint.clear();
								   		this.$emit('back')
								   	}else{
								   		if (this.toastTimer) clearTimeout(this.toastTimer);
								   		this.toast_msg="抱歉,打印机暂时无法使用,请出示手机支付记录领取商品"
								   		this.toast=true;
								   		this.toastTimer = setTimeout(() => { this.toast = false }, 1000)
								   		setTimeout(() => { this.$emit('back')}, 5000)
								   	}
						   		})
							}else{

								this.payStatus="fail"
							}
						})
					}else{
						if (this.toastTimer) clearTimeout(this.toastTimer);
				   		this.toast_msg="抱歉,订单服务除了点问题,暂时无法购买"
				   		this.toast=true;
				   		this.toastTimer = setTimeout(() => { this.toast = false }, 3000)
				   		
					}
				},(err)=>{
						if (this.toastTimer) clearTimeout(this.toastTimer);
						this.toast_msg="抱歉,网络似乎出了点问题,请再次尝试"
						this.toast=true;
						this.toastTimer = setTimeout(() => { this.toast = false }, 1000)
						this.payImg=false
				})
				this.disable=true;
				
			},
			handleAlipay(){
				if(this.phone){
					this.confirm=true;
					this.payfun='alipay'
					console.log('pay')
				}else{
					if (this.toastTimer) clearTimeout(this.toastTimer);
					this.toast_msg="手机号码是重要的支付凭证,不能为空"
					this.toast=true;
					this.toastTimer = setTimeout(() => { this.toast = false }, 1000)
				}
			},
			handleTimeStart(){
				setTimeout(()=>{this.finishShow=true},30000)
			},
			handleWeico(){
				if(this.phone){
					this.confirm=true;
					this.payfun='alipay'
				}else{
					if (this.toastTimer) clearTimeout(this.toastTimer);
					this.toast_msg="手机号码是重要的支付凭证,不能为空"
					this.toast=true;
					this.toastTimer = setTimeout(() => { this.toast = false }, 1000)
				}
				
			},
			handlePhoneInput(){
				this.keyBoard=true
			},
			handlePhoneConfirm(payload){
				this.phone=payload;
				this.keyBoard=false;
			},
			handlePhoneCancle(payload){
				this.keyBoard=false
			},
			handleTimeEnd(){
				this.$emit("back")
			}
			
		},
		mounted(){
			if(this.account>0){
				this.num=1;
			}
			
			
		}
	}
</script>
<style lang="SASS" scoped>

	.title{
		text-align:center;width:100%;
		background-color: transparentize(#817349,0.5);
		margin-top: 20px;
	}
	.detail{
		flex-shrink: 0;
		margin-bottom: 50px;
		padding:30px;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		height: 420px;
		background-color: lighten(#beaa6b,30%);
		margin-top: 20px;
		.detail-img{
			display: flex;
			flex-shrink: 1;
			min-height: 350px;width:400px;
			background-image:url(../imgs/样图.png);

			background-size: 100% 100%;
		}
		.table{
			display: flex;
			flex-shrink: 1;
			min-height: 350px;
			width:50%;
			justify-content: space-between;
			&>div{
				height:85px;
				width: 100%;
				line-height: 85px;
				text-align: center;
			}
			.cell-head{
				width:30%;
				background-color: lighten(#beaa6b,10%);
			}
			.cell-body{
				width: 70%;
				background-color: lighten(#beaa6b,15%);
				text-align:left;text-indent: 2em;
			}
		}
	}
	.top-img{
		margin:40px 0;
		width:936px;height:36px;
		background-image:url(../imgs/top.png);
		-webkit-background-size: 100% 100%;
		background-size: 100% 100%;
	}
	.bottom-img{
		margin:40px 0;
		width:936px;height:36px;
		background-image:url(../imgs/bottom.png);
		background-size: 100% 100%;
	}
	.payment{
		width: 900px;height: 500px;
		min-height: 380px;
		.amount,.phone{
			height: 100px;
			flex-shrink: 0;
			[txt]{
				font-size: 50px;color: #000;
				margin:0 20px; 
			}
			[show]{
				text-align: center;
				width: 100px;
				background-color: lighten(#beaa6b,30%);
			}
			button{
				display:inline-block;
				background-color: #beaa6b;
				width:100px;height:80px;color:#fff;
				font-size: 50px;
				margin:0 20px;
			}
	
		}
		.payfun{
			flex-shrink: 1;
			height:300px;
			button{
				display:inline-block;
				text-indent: 50px;
				background-color: #beaa6b;
				width:300px;height:80px;color:#fff;
				font-size: 30px;
				margin:0 20px;
				&.ali.mu-raised-button{
					
					background:#beaa6b url(../imgs/支付宝.png) 30px center no-repeat;
					background-size: 60px 60px;
				}
				&.weico.mu-raised-button{
					
					background:#beaa6b url(../imgs/微信.png) 30px center no-repeat;
					background-size: 60px 60px;
				}
			}
		}
		
	}
	.back{
		display:inline-block;
		background-color: #beaa6b;
		width:200px;height:80px;color:#fff;
		font-size: 50px;
		margin:0 20px;
	}
	
	.confirm{
		padding-top: 50px;
		position: relative;
		background-color: #d0c5a2;
		width: 1000px;height: 1200px;
		top:-150px;
		.table{
			display: flex;
			flex-shrink: 1;
			min-height: 350px;
			width:50%;
			justify-content: space-between;
			margin-top: 50px;
			&>div{
				height:85px;
				width: 100%;
				line-height: 85px;
				text-align: center;
			}
			.cell-head{
				width:30%;
				background-color: lighten(#beaa6b,5%);
			}
			.cell-body{
				width: 70%;
				background-color: lighten(#beaa6b,10%);
				text-align:left;text-indent: 2em;
			}
		}
		.pay-confirm{
			flex-shrink: 1;
			margin-top: 150px;
			button{
				display:inline-block;
				background-color: #beaa6b;
				width:300px;height:80px;color:#fff;
				font-size: 30px;
				margin:0 20px;		
			}
			.mu-raised-button.disable{
				background-color: #666;color:#ddd;
			}
		}

	}
	.keyBoard{
		padding-top: 50px;
		position: relative;
		background-color: #d0c5a2;
		width: 600px;height: 800px;
		top:-150px;
		
	}
	[alipay-img]{
		 width:60px;height:70px;background-image:url(../imgs/支付宝.png);
	}
	[weico-img]{
		 width:60px;height:70px;background-image:url(../imgs/微信.png);
	}
	[success]{
		background-image: url(../imgs/success.png);width:100px;height:80px;margin:5px;height: 150px;
	}
	[margin]{
		margin-top:150px;
	}
	[fail]{
		background-image: url(../imgs/fail.png);width:100px;height:80px;margin:5px;height: 150px;
	}
	.not-pending{
		width: 600px;height: 800px;
	}
	

</style>