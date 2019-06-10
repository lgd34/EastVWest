<template>
  <div>
    <router-link to="/lvl/2">
      <p><v-btn>Ascend</v-btn></p>
    </router-link>
    <h1><b>Third Level</b></h1>
    <transition :name="transitionName">
    <div v-if="isWest" key="west">
      <p><v-btn @click="toggleDiv">East ></v-btn></p>
      <img src="..\assets\img\3gluttony.jpg" alt="Gluttony">
      <p class="westp">The third circle of hell punishes the glutonnous.  Here, icy rain pelts these souls with
        a foul slush, while the three-headed dog, Cerberus, vicouslly guards the sinners.  The filthy rain represents
        a physical manifestation of the degradtion one subjects themselves to for overindulgening in earthly pleasures.  
        Furthermore, the slush blinds the sinners, making them unware of the suffering shared by those around them, 
        thus symbolizing the selfishness and ignornance that gluttony produces.
      </p>
      <h3>Greco-Roman Myths Combined with Christianity</h3>
      <p class="westp">Notably, figures and beasts like Cerberus and Minos don't have biblical relgions, but rather are based on
        Greek and Roman mythology.  For example, Cerberus in the Greek tradition was the guardian of the Underworld as a whole, not
        a particular cirlce of hell.  With this poem written during the tail end of the Middle Ages, this interest in the Greek 
        world was very unusual, and wouldn't become the norm until the revival of classical ideals in the Renaissance.  This highlights
        the important fact the Dante's rendition of hell is just that, a rendition, subject to the biases and ideals of Dante and the 
        times he wrote this poem.  Other Christian authors and scholars have described hell in entirely different terms from how Dante 
        paints it here.</p>
        <br>
      <p id="quote"><i>"In the third circle I arrive, of show'rs<br>
        ceaseless, accursed, heavy, and cold, unchanged<br>
        for ever, both in kind and in degree.<br>
        Large hail, discolour'd water, sleety flaw<br>
        through the dun midnight air stream'd down amain:<br>
        Stank all the land whereon that tempest fell."</i><br>- Inferno</p>
    </div>
    <div v-else key="east">
      <p><v-btn @click="toggleDiv">&lt; West</v-btn></p>
      <img src="..\assets\img\3thirdCourt.jpg" alt="Third Court">
      <p class="westp">It's the third court where the punishments of hell begin to be carried out.  Despite the bureaucratic depection of Hell
        as a whole, it has a far looser organization for the types of punishments recieved in each court.  This scroll displays a chaotic mix
        of punishments, including decapitation, flogging, and tongue ploughing.  The range of crimes also lack the organization presnent in
        <i>Inferno</i>, with individuals being punished for adultury, betrayal, disrepecting parents, and "foolish chatter".
        <br>
      <h3>Punishment Fitting for the Crime</h3>
      <p class="westp">Addionally, unlike the Western depection of hell, many the the punishments present in these scrolls tend to be more "general
        purpose".  In other words, the a punishment isn't always exlusive or fitting to any particular crime.  There are plenty of exceptions however,
        in this scroll for example, those punished for "foolish chatter" are shown having their tongues cut out.</p>
        <br>
        <p id="quote"><i>"Those who know much speak little; those who speak much know little."</i><br>- Chinese Proverb</p>
    </div>
    </transition>
    <router-link to="/lvl/4">
      <p><v-btn>Descend</v-btn></p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Lvl3',
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
