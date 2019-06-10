<template>
  <div>
    <router-link to="/lvl/5">
      <p><v-btn>Ascend</v-btn></p>
    </router-link>
    <h1><b>Sixth Level</b></h1>
    <transition :name="transitionName">
    <div v-if="isWest" key="west">
      <p><v-btn @click="toggleDiv">East ></v-btn></p>
      <img src="..\assets\img\6heresy.jpg" alt="Heresy">
      <p class="westp">Heretics, those whom reject God, burn in flaming tombs in the sixth circle of hell.  Without
        any belief in anything greater, heretics spend their entire lives living in the present, with little regard
        for the future and none for the afterlife (since they deny the existance of an immortal soul).  Their tombs
        only allows to see what's in front of them, forcing them to see only the future without knowledge of the 
        present.  In Dante's journey, he witnesses the tomb of Pope Anastasius II in this level, another jab 
        directed at the church.
      </p>
        <br>
      <p id="quote"><i>"Within this region is the cemetery<br>
      of Epicurus and his followers,<br>
      all those who say the soul dies with the body." </i><br>- Inferno</p>
    </div>
    <div v-else key="east">
      <p><v-btn @click="toggleDiv">&lt; West</v-btn></p>
      <img id="scroll" src="..\assets\img\6sixthCourt.jpg" alt="Sixth Court">
      <p class="westp">The notable torture present in this court is the Pool of Blood and 
        Filth stetching across the bottom of this scroll.  This pool notably only punishes women,
        many of them holding infants, indicating their crime of shedding blood during childbirth, 
        thus "polluting" the ritual.  Other crimes associated with this punishment include having 
        children out of wedlock, abortion/infanticide, entering the kitchen within a month of giving birth, 
        and even dying during childbirth.  It's notably that all the crimes associated with women 
        for this particular torture are associated, directly or indirectly, with sexuality or childbirth,
        emphasising the belief of sexuality as a source of sin in women.
      </p>
      <img id="pool" src="..\assets\img\6pool.jpg" alt="Pool of Blood and Filth">
      <p id="quote"><i>""Here we do not punish men. It is only women that we punish. At the 
        period of menstruation and delivery, they bleed and defile earthly deities with blood. 
        Even if they wash the blood-stained clothes at a swamp far away from a river and a 
        mountain stream, the flowing water is defiled by blood. The pious men and women ignorantly
        make tea with this water and offer it to gods and Buddhas. As a result, gods and Buddhas
        are defiled. The Heavenly Great General keeps people's names in the black book recording
        their good and evil deeds for one hundred years. In death, they will suffer the rewards
        of karma."</i><br>- Blood Tray Sutra</p>
    </div>
    </transition>
    <router-link to="/lvl/7">
      <p><v-btn>Descend</v-btn></p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Lvl6',
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
    #pool{
      max-width: 50%;
      float:left
    }
    #scroll{
      max-width: 50%;
      float:right
    }
    img{
      max-width: 95%;
      padding: 12px;
      height: auto;
    }

</style>
