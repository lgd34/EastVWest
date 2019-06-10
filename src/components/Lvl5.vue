<template>
  <div>
    <router-link to="/lvl/4">
      <p><v-btn>Ascend</v-btn></p>
    </router-link>
    <h1><b>Fifth Level</b></h1>
    <transition :name="transitionName">
    <div v-if="isWest" key="west">
      <p><v-btn @click="toggleDiv">East ></v-btn></p>
      <img src="..\assets\img\5anger.jpg" alt="Anger">
      <p class="westp">The fifth circle of hell punishes the angry, both those who express it (the wrathful) and those
        who suppress it (the sullen).  Both groups populate the river Styx, with the wrathful fighting each other on
        the surface of the murky, filthy waters, while the the sullen are buried beneath the water entirely.  Much like
        the Cerebus from the thrid Circle, the river Styx is orginally from Greek mythology, serving as the boundary
        between the underworld and earth.
      </p>
      <h3 class="westp">City of Dis</h3>
      <img id="dis" src="..\assets\img\5dis.jpg" alt="City of Dis">
      <p class="westp">The other side of the river Styx lies the City of Dis, where the last four circles of hell are
        enclosed.  The city is guarded by fallen angels, those who joined Satan in his rebellion against God.  Having
        rejected God, they've lost their orginal beauty and were transformed into horrific demons and monsters.  In 
        Dante's journey, these angels intially prevent him from entering the city at all.  It's only with the assisatance
        of an angel of heaven that Dante is able to ward off the monsters and enter the city.  This indicates that the
        sins of the later circles cannot be fully comprehended by human knowledge alone, but only with the assistance
        and acceptance of God. 
      </p>
        <br>
      <p id="quote"><i>"Wedged in the slime, they say: ‘We had been sullen<br>
        in the sweet air that’s gladdened by the sun;<br>
        we bore the mist of sluggishness in us:<br>
        now we are bitter in the blackened mud.’<br>
        This hymn they have to gurgle in their gullets,<br>
        because they cannot speak it in full words."</i><br>- Inferno</p>
    </div>
    <div v-else key="east">
      <p><v-btn @click="toggleDiv">&lt; West</v-btn></p>
      <img src="..\assets\img\5fifthCourt.jpg" alt="Fifth Court">
      <p class="westp">The fifth court of hell is presided by King Yama, the ruler of the underworld and the most famous of
        the ten judges of hell.  Orginated from Buddist mythlogy, Yama rules the fifth court of hell as opposed to the first
        or last because the scroll for the fifth court would have been placed closest to the altar of a shrine.  Unlike, Satan
        or God in the Christian world, Yama is not depicted as a malevolent nor a pure, all-powerful being.  Rather, he's a 
        relatively noble soul, that can be subjected the the punishments of hell like any other being.  Rather the gods controlling
        the mechanisms of hell, they gears within the bureaucratic system.  They both carry out the punishments of the system, 
        a can face punishments from the system.  The organization of hell is seens as above even the gods that rule it.
      </p>
      <p class="westp">In Mulian's journey to save his mother, he asks one of the generals of hell why his mother was never
        judged by King Yama.  The general informs him that only souls that aren't entirely good or bad need to recieve 
        a judgement, with the rest placed directly into heaven or hell.  This meant that Mulian's mother was so bad in life 
        that she didn't even needed to be judged before being sent to her punishment.
      </p>
      <p id="quote"><i>"'There are two kinds of people in the world who are not
        allowed an audience with the King.  One includes those who have observed
        the Ten Commandments adn the Five Prohibitions - these don't have to meet 
        the king after their death, for their spirits will live on in heaven.  The 
        second cateogry includes those who in their lives did no practice good deeds, 
        but gave themselves to evil karma, so that when they die, they are sent forthwith 
        into hell.  They also do not see the King.  Only those who are half good and half 
        evil get to see the King to have their fate judged.'"</i><br>- Quest of Mulian</p>
    </div>
    </transition>
    <router-link to="/lvl/6">
      <p><v-btn>Descend</v-btn></p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Lvl5',
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
    #dis{
      max-width: 45%;
      float:right
    }
    img{
      max-width: 95%;
      padding: 12px;
      height: auto;
    }

</style>
