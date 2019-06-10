<template>
  <div>
    <router-link to="/lvl/3">
      <p><v-btn>Ascend</v-btn></p>
    </router-link>
    <h1><b>Fourth Level</b></h1>
    <transition :name="transitionName">
    <div v-if="isWest" key="west">
      <p><v-btn @click="toggleDiv">East ></v-btn></p>
      <img src="..\assets\img\4greed.jpg" alt="Greed">
      <p class="westp">Souls are punished for greed in the fourth circle of hell.  Here, two factions battle
        for all eternity, those who've hoarded their wealth through life, and those who lavishly wasted it, jousting
        with massive bags of money that they push with their chests.  So occupied by this activity, the souls here have 
        lost all sense of individuality and don't even acknowledge Dante when he enters this circle.  Addionally, during
        his visit Dante witnesses both clergymen and popes among the combatants, implying that the corruption of greed 
        has even inflitrated the highest levels of the church.
      </p>
        <br>
      <p id="quote"><i>"Here, more than elsewhere, I saw multitudes<br>
        to every side of me; their howls were loud<br>
        while, wheeling weights, they used their chests to push.<br>
        They struck against each other; at that point,<br>
        each turned around and, wheeling back those weights,<br>
        cried out, ‘Why do you hoard?" "Why do you squander?"<br>
        So did they move around the sorry circle<br>
        from left and right to the opposing point;<br>
        again, again they cried their chant of scorn;<br>
        and so, when each of them had changed positions,<br>
        he circled halfway back to his next joust."</i><br>- Inferno</p>
    </div>
    <div v-else key="east">
      <p><v-btn @click="toggleDiv">&lt; West</v-btn></p>
      <img src="..\assets\img\4fourthCourt.jpg" alt="Fourth Court">
      <p class="westp">Much like the third court, various types of punishments inflicted upon souls here as well.  In
        this scroll, dishonest merchants, burglars, and cheaters are punished through crucifixion, sawing, rebirth as
        an animal, and drowning.  Also similarly to the previous scroll, there's little sense of a greater organization,
        with the exception of merchants being hung from steel hooks, none of the punishments are particular exclusive
        to a particular crime, nor is there any particular theme that emcompasses the crimes punished within this court.
      </p>
      <h3>River of Futility</h3>
      <p class="westp">The scroll also depicts the River of Futility towards the bottom.  In Mulian's journey to rescue
        his mother, this river is presented as uncrossable for those who have commited misdeeds in life.  Those trapped by
        the river beg Mulian that he tells their children that "If you want to end our torment and suffering.  Nothing is 
        better than works of charity to save lost souls".
      </p>
      <img id="river" src="..\assets\img\4river.jpg" alt="River of Futility">
        <br>
      <p id="quote"><i>"The eyes of those in the water bulge out;<br> 
        The tears of those in the riverbank gush forth.<br>
        Had we known how bitter death would be,<br>
        How would we not have cultivated good deeds in life!"</i><br>- The Quest of Mulian</p>
    </div>
    </transition>
    <router-link to="/lvl/5">
      <p><v-btn>Descend</v-btn></p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Lvl4',
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
    #river{
      float: right;
    }
    img{
      max-width: 49%;
      padding: 12px;
      height: auto;
      float: left;
    }

</style>
