<template>
  <div id="app"  column >
    
      <component :is="currentView"  @back="handleBack">
        
      </component>
    
    
  </div>
</template>

<script>
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
       
    },
    
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
