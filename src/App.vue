<template>
  <div id="app"  column >
    
      <component :is="currentView" @good-selected="handleGoodSelected" @back="handleBack">
        <!-- 非活动组件将被缓存！ -->
      </component>
    
    
  </div>
</template>

<script>

import Catalogue from 'components/Catalogue'
import Goodview from 'components/Goodview'


export default {
    name: 'app',
    data(){
       return{
        currentView:'Catalogue',
        todayStr:'',
       }
        
    },
    
    components: { 
        Catalogue,
        Goodview
    },
    methods:{
        handleGoodSelected(payload){
            this.currentView="Goodview"
        },
        handleBack(){
            this.currentView='Catalogue'
            // 生产环境下的处理
            // if(process.env.NODE_ENV=="production"){
            //       setTimeout(()=>{
            //         this.todayStr=this.todayStr||new Date().format("yyyy-MM-dd")
                    
            //         var timeAgo=new Date().ago(this.todayStr+' '+config.timeLimit)

            //         if(timeAgo=='刚刚'){
            //           exec('cmd /c shutdown -p',
            //                     {encoding:'binary',
            //                         timeout: 100000,
            //                         maxBuffer: 200*1024,
            //                         killSignal: 'SIGTERM',
            //                         cwd: null,
            //                         env: null
            //                     },
            //                     function(error,stdout,stderr){
            //                         console.log(stdout);
            //                     }
            //               );
            //         }
            //     },60000)
              
            // }
        }
    },
    
}
</script>

<style>
#app {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background:url(./imgs/title1.png) 100% 100% no-repeat,url(./imgs/bg.png) 100% 100% no-repeat;
  
  color: #2c3e50;
  width:1080px;
  height: 1920px;
  align-items: center;
  justify-content:flex-start;
  padding-top: 120px;
  position: relative;
}
</style>
