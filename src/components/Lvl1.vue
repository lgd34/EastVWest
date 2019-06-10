<template>
  <div>
    <router-link to="/">
      <p><v-btn>Ascend</v-btn></p>
    </router-link>
    <h1><b>First Level</b></h1>
    <transition :name="transitionName">
    <div v-if="isWest" key="west">
      <p><v-btn @click="toggleDiv">East ></v-btn></p>
      <img src="..\assets\img\1limbo.jpg" alt="Limbo">
      <p class="westp">The first circle of Hell in <i>Inferno</i> is Limbo.  This level contains all the souls of those who 
        lived virtuous lives, but were pagans or unbaptized in life.  Because they were not Christian, these souls are
        doomed to live an inferior version of Heaven.  Many figures from Greco-Roman world, such as Socrates, Homer, Julius 
        Caesar and Aristotle are depcited as residing in this circle.  When Dante sees how people whom he considered to be 
        virtuous could still be damned to hell, he questions whether God's judgement is truly without error.</p>
      <h3>Harrowing of Hell</h3>
      <p class="westp">While for most, Limbo is their final destination for eternity, there exists a sole exception.  Following 
        Christ's crucifixtion, he descends in into hell to save the souls made a connection with God but died before Christ's existance.  
        These include major figures of the Hebrew bible such as Noah, Abraham, and Moses.</p>
        <br>
      <p id="quote"><i>
        For these defects, and for no other evil,<br>
        we now are lost and punished just with this:<br>
        we have no hope and yet we live in longing."</i><br>- Inferno</p>
    </div>
    <div v-else key="east">
      <p><v-btn @click="toggleDiv">&lt; West</v-btn></p>
      <img src="..\assets\img\1firstCourt.jpg" alt="First Court">
      <p class="westp">By contrast, the first court of Chinese hell is not a final destination, but a place of judgement.  Here, 
        one's deeds, both good and bad, are weighed against each other before their punishment, or lack therof, is assigned.  In Mulian's 
        journey through hell, this judgement is depicted as a bureaucratic process capable of making errors, thus potentially good people
        could serve a punishment anyways.  This parallels Dante's journey in that they both witness what they believe to be a miscarriage
        of justice, only that in Mulian case, the mistake is far less justified.
      </p>
      <h3>Bridge of Seven Treasures</h3>
      <p class="westp">Unlike the Christian conception of hell, anyone here who lives virtuously and is judged
        worthy, regardless of their religous background, can be redeemed. Those souls who pass judgement are spared the cycle of
        death and rebirth and led the the "Western Heaven".
      </p>
        <br>
      <p id="quote"><i>"It's only because we have the same surnames and given names.<br>
        That our names were confused, and we were summoned here;<br>
        We wandered around for a few days.<br>
        Proven innocent, we were released, adn the went home.<br>
        But we had been buried prematurely by our families.<br>
        To moan and bewail our fates does no good in the end..."</i><br>- The Quest of Mulian</p>
    </div>
    </transition>
    <router-link to="/lvl/2">
      <p><v-btn>Descend</v-btn></p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Lvl1',
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
    }
    img{
      max-width: 55%;
      padding: 12px;
      height: auto;
      float: left;
    }

</style>
