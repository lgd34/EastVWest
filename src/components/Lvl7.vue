<template>
  <div>
    <router-link to="/lvl/6">
      <p><v-btn>Ascend</v-btn></p>
    </router-link>
    <h1><b>Seventh Level</b></h1>
    <transition :name="transitionName">
    <div v-if="isWest" key="west">
      <p><v-btn @click="toggleDiv">East ></v-btn></p>
      <img src="..\assets\img\7violence.jpg" alt="Violence">
      <p class="westp">The seventh circle of hell is broken up into three separate rings, each ring dedicated to a different
        form of violence.  The outermost ring contains those who've committed violence against neighbors.  These include
        murderers, tryants, and pillagers.  These souls reside a river of fire and boiling blood as punishment for "wallowing
        in blood" in their own loves.  To prevent escape from the river, centaurs guard the shoreline, shooting all who 
        attempt to emerge.
      </p>
      <img id="suicide" src="..\assets\img\7suicide.jpg" alt="Suicide">
      <p class="westp">The middle ring punishes the sin of commiting violence against yourself, suicide.  Here, 
        people are transformed into trees and fed upon by Harpies, only able to speak when in pain.  While ancient 
        Roman traditions praised suicide in certain contexts, in Christianity it is unequivocaly a sin, since unjustly
        challenges God's dominion on life and death. 
      </p>
      <img src="..\assets\img\7burning.jpg" alt="Plain of Burning Sand">
      <p class="westp">The innnermost ring is reserved for those committed violence against God (blasphemers), Nature 
        (sodomites), and Art (usurers). Since these souls reject the God's natural order, they are doomed to the Plain
         of Burning Sand, where (instead of snow) flakes of fire rain from the sky.  The precipitations heats the already
        scorchingly hot ground even further, doubling the pain for those damned here.  
      </p>
        <br>
      <p id="quote"><i>"No green leaves in that forest, only black;<br>
        no branches straight and smooth, but knotted, gnarled;<br>
        no fruits were there, but briers bearing poison.<br>
        Even those savage beasts that roam between<br>
        Cecina and Corneto, beasts that hate<br>
        tilled lands, do not have holts so harsh and dense"</i><br>- Inferno</p>
    </div>
    <div v-else key="east">
      <p><v-btn @click="toggleDiv">&lt; West</v-btn></p>
      <img src="..\assets\img\7seventhCourt.jpg" alt="Seventh Court">
      <p class="westp">One of the notable punishments depicted in this scroll is the "Terrace for viewing one's home village".  
        In this scroll, it is depicted as a punishment, where damned souls look back at the living world to 
        lament over what was lost to them.  One could see how they're descendants have little regard for them, or how
        happy they are now that he/she is dead.  However, some interpretations of this terrace indicate it as a reward for 
        the living, in which those who've lived good lives have a opprotunity to see the world they left and how well 
        their family is doing.  In this interpretation, the deprivation of the terrace is infact the punishment for sinners.  
        Similar to how Dante's interpretation of hell isn't the end all be all for how hell is percieved in the Western or 
        Christian world, the same is true for these hell scrolls, or the story of Mulian's journey thorugh hell.
      </p>
      <img id="terrace" src="..\assets\img\7terrace.jpg" alt="Terrace For Viewing One's Home Village">
      <p id="quote"><i>"It’s hard to enjoy your prime years again;<br>
        Blessings and honors won’t come around twice.<br>
        Suddenly the good times are all gone,<br>
        And your corporeal body turns to earth and dust.<br>
        So dark, that hall of the nine springs;<br>
        The body gone, the qi’s strength exhausted –<br>
        The quintessential hun-soul has no place to return.<br>
        Good sacrificial meats are set out but left unserved;<br>
        Excellent wine overflows the goblets and cups.<br>
        As you leave your tomb to gaze upon your old home,<br>
        You only see brambles and thickets."</i><br>- Ruan Yu, Chinese poet</p>
    </div>
    </transition>
    <router-link to="/lvl/8">
      <p><v-btn>Descend</v-btn></p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Lvl7',
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
    #suicide{
      max-width: 50%;
      float:right
    }
    #terrace{
      max-width: 50%;
      float:right
    }
    img{
      max-width: 50%;
      padding: 12px;
      height: auto;
      float: left;
    }

</style>
