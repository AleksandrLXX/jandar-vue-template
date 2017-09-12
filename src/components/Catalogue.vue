<template>
	<div style="align-items:center;margin-top:60px;" column>
	    <template v-if="totalNum">
			<section class='nail-items'>
				<mu-card v-for="(item,index) in goods" :key="index" class="nail mu-paper  mu-paper-round mu-paper-3" @click.native="handleGoodClick($event,item)">
				  <mu-card-media :title="'产地: '+item.FROMPLACE||'  '" class=" mu-paper  mu-paper-round mu-paper-4" >
				    <img :src='item.IMGSMALL'/>
				  </mu-card-media>
				  <mu-card-title :title="item.NAME" :subTitle='"单价:"+item.PRICE1+"元"'/>
				</mu-card>
			</section>
			<section class="propagation" row>·
				<mu-raised-button style="display:inline-block;width:300px;height:80px;" label="上一页" 
				@click.native="handlePre"/>
				<mu-raised-button style="display:inline-block;width:300px;height:80px;" label="下一页"
				@click.native="handleNxt" />
			</section>
			<div style="text-align:center;margin-top:20px;">第 {{currentPage}} 页/共 {{totalPage}} 页</div>
		</template>
		
		<div class="flex-column center pos-tf-center" v-else >
			<mu-circular-progress  :size="90" color="#558b2f" v-show="loading" />
			<div>{{loading?"稍等，数据正在载入":"数据加载失败,3秒后自动重新载入"}}</div>
		</div>
		
	</div>
</template>
<script type="es6">
	export default{
		data(){
			return {
				
				currentPage:1,
				loading:false,
			}
		},
		computed:{
			totalNum(){
				return this.$store.state.initial_goods.length;
			},
			goods(){
				
				if(this.currentPage*12<=this.$store.state.initial_goods.length){
					return this.$store.state.initial_goods
								.slice((this.currentPage-1)*12,this.currentPage*12)
				}else{
					return this.$store.state.initial_goods
								.slice((this.currentPage-1)*12)
				}
				
			},
			totalPage(){
				return this.$store.getters.totalPage
			}
		},
		methods:{
			handleNxt(){
				if(this.currentPage<this.totalPage)
					this.currentPage+=1;
			},
			handlePre(){
				if(this.currentPage>1)
					this.currentPage-=1;
			},
			handleGoodClick(e,good){
				console.log('send')
				this.$store.commit('setGoodSelected',good)
				this.$emit("good-selected",good)
			},
			fetchData(){
				this.loading=true;
				this.$store.dispatch('getDataFromRemote').then(result=>{},err=>{
					console.log('haserr');
					this.loading=false;
					this.timer&&clearTimeout(this.timer);
					this.timer=setTimeout(()=>{this.fetchData()},3000)
					
				})
			}
		},
		mounted(){
		    this.fetchData()
		}
	}
</script>
<style lang="SASS" scoped>
	.nail-items{
		display: flex;flex-direction: row;flex-wrap:wrap;
		justify-content: start;align-items: flex-start;
		width:960px;height: 1480px;
		flex-grow: 0;
		align-content: flex-start;

	}
	.nail.mu-card{
	
		
		box-shadow: none;
		img{
			height: 200px;
			width: 250px;
		}
		margin:0 35px;
		margin-bottom:70px;
		width: 250px;
		height: 300px;
		background:none;
		.mu-card-title-container {
			padding-bottom:10px; 
		}
	}
	.propagation{
		font-size: 30px;
		display: flex;flex-direction: row;
		justify-content: center;
		
		button{
			background-color: #817349;
			margin:0 20px;
			color:#fff;
		}
	}
</style>