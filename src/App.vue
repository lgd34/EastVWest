<template>
  <div id="app">
    <v-app dark>
      <v-toolbar id="titlebar">
        
          
          <v-toolbar-title class="page-title">Eastern vs. Western Hell</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn flat @click="showPopup">Sources</v-btn>
          </v-toolbar-items>
        
      </v-toolbar>
    <div id="view">
    <transition :name="transitionName">
      <router-view/>
    </transition>
    </div>
    <SourcesPopup v-show="isPopupVisible" @close="closePopup"/>
    </v-app>

  </div>
</template>
<script>
import SourcesPopup from './components/SourcesPopup.vue'
  export default {
  name: 'App',
  components:{
    SourcesPopup
  },
  data() {
    return {
      transitionName: 'slide-down',
      isPopupVisible: false
    }
  },
  watch: {
    '$route' (to, from) {
    var toDepth = to.path.split('/')
    var fromDepth = from.path.split('/')
    if(fromDepth.length == 2){
      this.transitionName = 'slide-down'
      return
    }
    else if(toDepth.length == 2){
      this.transitionName = 'slide-up'
      return
    }
    else{
      toDepth = toDepth[2]
      fromDepth = fromDepth[2]
      if((parseInt(toDepth) > parseInt(fromDepth))){
        this.transitionName = 'slide-down'
        return
      }
      else{
        this.transitionName = 'slide-up'
        return
      }
    }
    }
  }
  ,
  methods:{
    showPopup(){
      this.isPopupVisible = true;
    },
    closePopup() {
        this.isPopupVisible = false;
    }
  }
  }
</script>
<style>
    
    .slide-down-enter-active {
      transition-delay: 0.5s;
      transition-duration: 0.5s;
    }
    .slide-down-enter {
      transition-delay: 0.5s;
      transition-duration: 0.5s;
      transform: translate(0, 100%);
      opacity: 0;
    }
    .slide-down-leave-to {
      transform: translate(0, -100%);
    }
    .slide-down-leave-active{
      transition: 0.5s;
      opacity: 0;
    }

    .slide-up-enter-active {
      transition-delay: 0.5s;
      transition-duration: 0.5s;
    }
    .slide-up-enter {
      transition-delay: 0.5s;
      transition-duration: 0.5s;
      transform: translate(0, -100%);
      opacity: 0;
    }
    .slide-up-leave-to {
      transform: translate(0, 100%);
    }
    .slide-up-leave-active{
      transition: 0.5s;
      opacity: 0;
    }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#view{
  padding: 18px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
ul {
  list-style-type: none;
  padding: 0;
}
h1, h2 {
  font-weight: normal;
  font-size: 24px;
}
p {
  font-size: 14px;
}
li {
  display: inline-block;
  margin: 0 10px;
  font-size: 30px;
}

.v-toolbar{
  z-index: 2;
}
</style>
