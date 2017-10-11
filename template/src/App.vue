<template>
    <div id="app">
        
        <transition name="router-fade" mode="out-in">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive">
                    
                </router-view>
            </keep-alive>
        </transition>

        <transition name="router-fade" mode="out-in">
            <router-view v-if="!$route.meta.keepAlive">
                
            </router-view>
        </transition>
        
    </div>
</template>

<script type="es6">
import Hello from 'components/Hello'



export default {
    name: 'app',
    data(){
       return{
        currentView:'Hello',
        
       }
        
    },
    
    components: { 
        Hello,
    },
    methods:{
        handleBack(){
            this.currentView=''
       }
    },
    
}
</script>

<style lang="SASS" scoped>
.router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
