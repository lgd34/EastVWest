<template>
  <div>
    <router-link to="/lvl/1">
      <p><v-btn>Ascend</v-btn></p>
    </router-link>
    <h1><b>Second Level</b></h1>
    <transition :name="transitionName">
    <div v-if="isWest" key="west">
      <p><v-btn @click="toggleDiv">East ></v-btn></p>
      <img src="..\assets\img\2lust.jpg" alt="Lust">
      <p class="westp">It's the second circle of hell where the punishment truly begins.  This circle punishes those overcome by
        the sin of lust.  Their punishment is fitting for their crime, as they've let their carnal desires control and push them
        aimlessly through life, violent winds push their souls aimlessly here, depriving the souls of any sense of stability or rest.
      </p>
      <h3 class="westp">Minos</h3>
      <img id="minos" src="..\assets\img\2minos.jpg" alt="Minos">
      <p class="westp">The supreme judge of the underworld, Minos guards the second cirlce of hell and is charged with sentencing each soul to it's proper punishment in
        hell.  To indicate which circle a soul is assigned, he wraps his tail around his arm that many times.  Functionally speaking, 
        his purpose is similar to the first court in the Chinese rendition of hell.
      </p>
        <br>
      <p id="quote"><i>"I reached a place where every light is muted,<br>
        which bellows like the sea beneath a tempest,<br>
        when it is battered by opposing winds.<br>
        The hellish hurricane, which never rests,<br>
        drives on the spirits with its violence:<br>
        wheeling and pounding, it harasses them."</i><br>- Inferno</p>
    </div>
    <div v-else key="east">
      <p><v-btn @click="toggleDiv">&lt; West</v-btn></p>
      <img class="rightside" src="..\assets\img\2secondCourt.jpg" alt="Second Court">
      <p class="westp">In this court the deeds of all individuals are recorded, the good, bad and everything in between.  These behaviors, intentions
        and thoughts can result in rewards or punishments respectively in the lives of those being recorded.  This means that the juristication of
        those who run hell isn't limited to the afterlife, but the earthly world as well.
      </p>
      <h3>Southern and Northern Dippers</h3>
      <p class="westp">These figures, present in the top right hand corner of this scroll, are in charge of recording everyone's lives.  The Southern Dipper
        joyously introduces life into the world while the Northern in simliar glee ends those lives when the time comes.
      </p>
        <br>
      <p id="quote"><i>"Good and evil are recompensed as inevitably as shadow follows form. Therefore, there are spirits overseeing man’s
         misdeeds in heaven and on earth. According to the gravity of his transgressions, they reduce his lifespan by the appropriate 
         number of hundred-day units. After a one hundred-day unit is deducted, poverty comes upon the man, he meets with calamity and 
         misery, all men hate him, while happiness and good fortune flee him, and evil stars torment him. When his hundred-day units are 
         all exhausted, he dies."</i><br>- Tract of the Most Exalted on Action and Response</p>
    </div>
    </transition>
    <router-link to="/lvl/3">
      <p><v-btn>Descend</v-btn></p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Lvl2',
  data () {
    return {
      isWest: true,
      transitionName: 'slide-right'
    }
  },
  methods:{
    toggleDiv(){
      console.log(this.transitionName)
      if(this.isWest == true){
        this.transitionName = 'slide-left'
        this.isWest = false
      }
      else{
        this.transitionName = 'slide-right'
        this.isWest = true
      }
    }
  }
}
</script>

<style scoped>
  .slide-left-enter-active {
      transition-delay: 0.5s;
      transition-duration: 0.5s;
    }
    .slide-left-enter {
      transition-delay: 0.5s;
      transition-duration: 0.5s;
      transform: translate(100%, 0);
      opacity: 0;
    }
    .slide-left-leave-to {
      transform: translate(-100%, 0);
    }
    .slide-left-leave-active{
      transition: 0.5s;
      opacity: 0;
    }

    .slide-right-enter-active {
      transition-delay: 0.5s;
      transition-duration: 0.5s;
    }
    .slide-right-enter {
      transition-delay: 0.5s;
      transition-duration: 0.5s;
      transform: translate(-100%, 0);
      opacity: 0;
    }
    .slide-right-leave-to {
      transform: translate(100%, 0);
    }
    .slide-right-leave-active{
      transition: 0.5s;
      opacity: 0;
    }
    .westp{
      text-align: left;
    }
    #quote{
      clear:left;
      clear:right;
    }
    img{
      max-width: 95%;
      padding: 12px;
      height: auto;
    }
    #minos{
      max-width: 55%;
      float:right
    }
    .rightside{
      max-width: 55%;
      float:right
    }

</style>

