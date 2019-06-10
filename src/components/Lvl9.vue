<template>
  <div>
    <router-link to="/lvl/8">
      <p><v-btn>Ascend</v-btn></p>
    </router-link>
    <h1><b>Ninth Level</b></h1>
    <transition :name="transitionName">
    <div v-if="isWest" key="west">
      <p><v-btn @click="toggleDiv">East ></v-btn></p>
      <img src="..\assets\img\9treachery.jpg" alt="Treachery">
      <p class="westp">The lowest level of hell contains the frozen lake Cocytus, where those who've who've committed betryal lie.  
        Like many of the other circles, the severity of punishment is divided into tiers, with the more severe beytrals punished 
        towards the center of the lake.  The outer most ring is called <b>Caina</b>, the story of Cain and Abel.  Like the name 
        suggests, those here are punished for the beytral of kindred.  While the empahsis on respect towards ancestors is downplayed
        compared to Eastern traditions, the betrayal of ancestors/family is taken very seriously.  These souls, committing the least
        severe form of betrayal, still have the head and neck above the ice, allowing some ability to shield themselves from the cold 
        winds.
      </p>
      <p class="westp">The next ring is <b>Antenora</b>, named after the Trojan solider, Antentor, who sold out his city to the Greeks.  
      Those hove commited treason are punished here.  While their heads are still above the ice, allowing them to still speak, their necks
      are below, minimizing what meager ability the could have protecting themselves.
      </p>
      <p class="westp"><b>Ptolomea</b> is the name of the next ring, named after Pitolemy, who invited his 
      father-in-law and his family to a dinner only to kill them.  Traitors to guests suffer in this ring, with
      only their face resting above the ice.  Their tear ducts are completley frozen, denying them even the ability to cry.
      </p>
      <p class="westp">The center ring is <b>Judecca</b>, named after the Judas, the disciple who betrayed Jesus.  Those who have beytrayed 
      their lords are trapped here completely encased in the ice.  Becuase of this, the ring is dead silent.
      </p>
        <br>
      <p id="quote"><i>"And as the croaking frog sits with its muzzle<br>
      above the water, in the season when<br>
      the peasant woman often dreams of gleaning,<br>
      so, living in the ice, up to the place<br>
      where shame can show itself, were those sad shades,<br>
      whose teeth were chattering with notes like storks’.<br>
      Each kept his face bent downward steadily;<br>
      their mouths bore witness to the cold they felt,<br>
      just as their eyes proclaimed their sorry hearts. "</i><br>- Inferno</p>
    </div>
    <div v-else key="east">
      <p><v-btn @click="toggleDiv">&lt; West</v-btn></p>
      <img src="..\assets\img\9ninthCourt.jpg" alt="Ninth Court">
      <p class="westp">Entering the ninth court of hell marks the one year anniversary since a person's death.  Living ancestors
        in life are encouraged to commision a scripture or image to mark this date, so that the punishment of those they've lost 
        are minimized and their rebirth is hastened.  Highlighting the horrors of hell isn't only meant to make you want to be a 
        better person to spare youself from those horrors, but also allows you to feel as if you can help those you've lost through 
        devotion to your ancestors.  Christian traditions generally don't have an equivilant of this, your punishment in hell is entirely
        on you, and no one else can get you out of it.  Tortures present in this level of hell include being tied to heated brass pillars,
        being attacked by snakes, and having your organs ripped out of your body.
      </p>
      <p class="westp">The Quest of Mulian also emphasizes the importance of filial piety.  After rescuing his mother from hell, it's 
        only the continued religous devotion that his mother can truly be cleansed of her wrongdoings.  The redemption of Mulian's mother 
        is nearly entirely orchestrated and carried out by Mulian himself.
      </p>

      <p id="quote"><i>"At one year they pass here, turning about in suffering and grief, depending on what merit their sons and daughters have cultivated.
        The wheel of rebirth in the six paths is revolving, still not settled;
        Commission a scripture or commission an image, and they will emerge from the stream of delusion."</i><br>- The Scripture of the Ten Kings</p>
    </div>
    </transition>
    <router-link to="/lvl/10">
      <p><v-btn>Descend</v-btn></p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Lvl9',
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
    .rightside{
      max-width: 60%;
      float:right
    }
    .leftside{
      max-width: 60%;
      float:left
    }
    img{
      max-width: 95%;
      padding: 12px;
      height: auto;
    }

</style>
