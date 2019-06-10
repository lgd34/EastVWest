<template>
  <div>
    <router-link to="/lvl/9">
      <p><v-btn>Ascend</v-btn></p>
    </router-link>
    <h1><b>Final Level</b></h1>
    <transition :name="transitionName">
    <div v-if="isWest" key="west">
      <p><v-btn @click="toggleDiv">East ></v-btn></p>
      <img src="..\assets\img\10satan.jpg" alt="Satan">
      <p class="westp">The center of Cocytus contains the core of hell itself, where Satan resides.  Once the most beautiful angel of heaven,
        Satan became a giant, hideous beast after committing the of heinous form of treachery of them all, the beytral of God himself.  In his three,
        mouths lies Brutus, Casscius, and Judas.  The former two figures were primarily responsible for the assination of Julius Caesar, while
        Judas, as mentioned before, was the disciple who betrayed Jesus, causing his crucifiction.  His massive wings produce icy gusts of wind that
        chill the other cirlces, ensuring his presence is felt throughout the hell.  Unlike King Yama, Satan is the manifestation of pure evil, with absolutely no redeeming quality or virtue.  In Dante's depiction, Satan is far less
        powerful than typically depicted in Christian tradition, being imprisoned in this frozen lake with the rest of the sinners as punishment for his 
        attempted rebellion.  
      </p>
        <br>
      <p id="quote"><i>"If he was once as handsome as he now<br>
        is ugly and, despite that, raised his brows<br>
        against his Maker, one can understand<br>
        how every sorrow has its source in him!<br>
        I marveled when I saw that, on his head,<br>
        he had three faces: one – in front – bloodred;<br>
        and then another two that, just above<br>
        the midpoint of each shoulder, joined the first…<br>
        Beneath each face of his, two wings spread out,<br>
        as broad as suited so immense a bird:<br>
        I’ve never seen a ship with sails so wide.<br>
        They had no feathers, but were fashioned like<br>
        a bat’s; and he was agitating them,<br>
        so that three winds made their way out from him –<br>
        and all Cocytus froze before those winds.<br>
        He wept out of six eyes; and down three chins,<br>
        tears gushed together with a bloody froth.<br>
        Within each mouth – he used it like a grinder –<br>
        with gnashing teeth he tore to bits a sinner,<br>
        so that he brought much pain to three at once. "</i><br>- Inferno</p>
    </div>
    <div v-else key="east">
      <p><v-btn @click="toggleDiv">&lt; West</v-btn></p>
      
      <img src="..\assets\img\10tenthCourt.jpg" alt="Tenth Court">
      <p class="westp">The message on the top right hand corner of the scroll:</p>
      <p id="quote"><i>When you exist as a human, you may suffer bitterness during this turning of samsara’s wheel but not understand for how many lifetimes. 
        If you know enough to do good deeds, Yama will judge you and give you one lifetime of fortune. If you don’t know enough to do good, 
        you’ll be punished and given one lifetime of want and pettiness. If you carry out evil and depravity, you will be downgraded and 
        transformed into a domestic animal for one lifetime. Your existence just ends up being [an endless cycle of] reaching your end point 
        and then dying, dying and then being reborn. When will you ever get a chance to think in detail upon what is proper or study what is 
        fixed upon the gentleman’s mind? When will you ever get a chance not to commit a host of evils but carry out all manner of goodness? 
        Yet if you are capable of observing the abstentions and receiving the precepts and if you study the Dao of Anterior Heaven and Inaction, 
        of shirking death at the end of life, then you will forever dwell in the Heavenly Halls in utmost joy and you will avoid the miseries 
        and sorrows of the turning wheels of samsara. I regard the Buddhist doctrines and the true words, the host of goodness and the believers 
        all to be valid. (?) So if the gentleman mourns these turnings of samsara’s wheel, he must understand how to carefully carry out these 
        precepts and carefully carry out these undertakings, avoid sinking downward and gradually rising upward to the joyous realm. The only 
        thing he won’t understand is how the precepts and undertakings haven’t yet come to fruition, but repenting only after suffering bitterness 
        no good.</i></p>
        <img class="rightside" src="..\assets\img\10mulian.jpg" alt="Mulian">
      <p class="westp">The final court of Chinese hell paints a far more optimistic picture.  Souls here, after going through the torments of hell 
        are now returned to the realm of living to live a better life, continuing the cycle of life and death.  Mulian himself is depicted in this 
        scroll resucing his mother form hell, and breaking the gates of hell in the process.  Depite the sucess of this miraculous mission, Mulian 
        journey doesn't end here.  As mentioned before, he must continue his devotion to Buddism in order to truly save his mother and restore her 
        human form.
      </p>
      <p id="quote"><i>"In the Buddha's eyebrows flashed a thousand hues; <br>
        Behind his head, a halo-cloud in dazzling colors. <br>
        When the radiance permeates hell, it disintegrates - <br>
        The Forest of Swords, the Grove of Knives, crushed to dust.<br>
        The lichors of the hells, accepting grace, bow down on their knees<br>
        And clasp their hands in supplication to the Buddha...<br>
        The sinners all gain rebirth in heaven;<br>
        Only Mulian's mother still goes hungry.<br>
        Hell then is totally transformed;<br>
        In the end, the majest of the Shakyamuni prevails."</i><br>- The Quest of Mulian</p>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Lvl10',
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
