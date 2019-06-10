<template>
  <transition name="popup-fade">
  <div class="popup-backdrop">
    <div class="popup">
      <h1>Sources</h1>
      <div id="bib">
      <h3>Literary</h3>
      <p>1. Alighieri, Dante, et al. <i>Dantes Inferno</i>. Chronicle Book, 2004.</p>
      <p>2. Grant, Beata, and Wilt L. Idema. <i>Escape from Blood Pond Hell: the Tales of Mulian and Woman Huang.</i> University of Washington Press, 2012.</p>
        <p>3. Minford, John, and Joseph S. M. Lau. <i>Classical Chinese Literature.</i> Columbia University Press, 2000.</p> 
        <h3>Online</h3>
        <p>1. Brashier, Ken. “A Study Collection of Chinese Hell Scrolls.” <i>Taizong's Hell</i>, Reed College, people.reed.edu/~brashiek/scrolls.html.</p>
        <p>2. Raffa, Guy P. “Dante's Inferno.” <i>Dantesworld</i>, University of Texas at Austin, danteworlds.laits.utexas.edu/index2.html.</p>
      </div>
      <v-btn @click="close" >Close</v-btn>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'SourcesPopup',
  methods:{
    close(){
      this.$emit('close');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .popup-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .popup {
    max-width: 50%;
    padding: 8px;;
    background:black;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .popup-fade-enter,
.popup-fade-leave-active {
  opacity: 0;
}

.popup-fade-enter-active,
.popup-fade-leave-active {
  transition: opacity .5s ease
}
#bib{
    text-align: left;
}
</style>

