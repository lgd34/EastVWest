<template>
  <div>
    <router-link to="/lvl/7">
      <p><v-btn>Ascend</v-btn></p>
    </router-link>
    <h1><b>Eighth Level</b></h1>
    <transition :name="transitionName">
    <div v-if="isWest" key="west">
      <p><v-btn @click="toggleDiv">East ></v-btn></p>
      <img src="..\assets\img\8fraud.jpg" alt="Fraud">
      <p class="westp">Also known as Malebolge, the eight circle of hell is divided into 10 separate trenches ("bolgias"),
        each punishing a different type of fraud.
      </p>
      <img class="rightside" src="..\assets\img\8seducer.jpg" alt="Seducers">
      <p class="westp"><b>Bolgia 1:</b> Panderers and seducers are forced to march in circles as they're lashed by demons.</p>
      <p class="westp"><b>Bolgia 2:</b> Flatterers are forced into a river of excrement, representing the falsity of their flattery
      in life.</p>
      <p class="westp"><b>Bolgia 3:</b> Simoniacs, those who've used the chruch to make money for themeselves, are placed upside down
      as their feet are burned.  The more guilty the sinner, the hotter the flame.  Dante depicts numerous Popes being punished in this 
      level of hell.</p>
      <p class="westp"><b>Bolgia 4:</b> Sorcerers and astrologers are punished for attempting to challenge God by looking into the future.  
      These souls have the heads twisted around their bodies, thus forced walk backwards, deprived of any vision of the futre at all.</p>
      <p class="westp"><b>Bolgia 5:</b> Extortionists, blackmailers, and corrupt politicians suffer in a river of boiling tar.  Any attempt 
      to rise out of the tar is punished by the claws of winged demons.</p>
      <img class="leftside" src="..\assets\img\8simoniacs.jpg" alt="Simoniacs">
      <p class="westp"><b>Bolgia 6:</b> Hypocrites are forced to walk in circles wearing robes of heavy lead.  These robes are beautiful on 
      surface, representing outward beauty of hypocricy that hides the weight of deceit.</p>
      <p class="westp"><b>Bolgia 7:</b> Thieves are trapped in a pit full of serpents, dragons, and other beastial reptiles.  Some of the 
      theives are acutally the reptiles themselves, only able to regain human form by painfully robbing another sinner of theirs.</p>
      <img class="rightside" src="..\assets\img\8discord.jpg" alt="Discord">
      <p class="westp"><b>Bolgia 8:</b> Evil and fraudulent councellors and advisors are set permanently on fire, reduced to nothing of tongues of 
      flame, for the lies their tongues spoke to gain power and wealth.</p>
      
      <p class="westp"><b>Bolgia 9:</b> Those who've promoted chaos are forced to walk in circles with disfiguring wounds inflicted upon them 
      by a sword wielding demon.  The more guilty the sinner, the more sever the wounds, with some forced to walk decapitated, holding their head 
      in their arms.</p>
      <p class="westp"><b>Bolgia 10:</b> Falsifiers, such as alchemists, imposters, counterfeiters, and liars are afflicted with horrific diseases, 
      since in life they were a disease to society.  These disease can inhibit movement, create scabs, bloat body parts, and cause unsatiable hunger 
      or thirst.</p>
        <br>
      <p id="quote"><i>"I’d only turned my head there briefly when<br>
        I seemed to make out many high towers; then<br>
        I asked him: 'Master, tell me, what’s this city?'<br>
        And he to me: 'It is because you try<br>
        to penetrate from far into these shadows<br>
        that you have formed such faulty images.<br>
        When you have reached that place, you shall see clearly<br>
        how much the distance has deceived your sense;<br>
        and, therefore, let this spur you on your way.'"</i><br>- Inferno</p>
    </div>
    <div v-else key="east">
      <p><v-btn @click="toggleDiv">&lt; West</v-btn></p>
      <img src="..\assets\img\8eighthCourt.jpg" alt="Eighth Court">
      <p class="westp">This scroll depicting the eighth court of hell shows punishments for two notable crimes.  Firstly, those who've mistreated 
        animals are tortured here, often by the animals they've harmed in life.  In some Buddihist traditions, animals are considered human
        <img class="rightside" src="..\assets\img\8wrongfulDeath.jpg" alt="City of Wrongful Death">(specifically, bad humans are reborn into animals), and thus must only be killed respectfully out of necessity.  Christian traditions tend 
        to lack this concern, rather insisting that it is in fact only humans that have souls, since they were created in God's image.   
      </p>
      <h3 class="westp">The City of Wrongful Death</h3>
      <p class="westp">One sin in which Eastern and Western traditions both condemn however, is suicide.  Those who've ended their lives early are 
      placed in the City of Wrongful Death, where they they're punished based on their method of suicide, such as swollen tongues for
      poisoning, ropes on their neck for hanging, and scars for any type of physical self harm.  Some traditions indicate that those
      who've committed suicide must remain in this city for the duration of the live they could have lived before continuing through 
      the courts.</p>
      <p id="quote"><i>"To those who scald, burn, behead, cut, or otherwise injure 
        animals, he speak of repayment in kind."</i><br>- Sutra of the Past Vows of Earth Store Bodhisattva</p>
    </div>
    </transition>
    <router-link to="/lvl/9">
      <p><v-btn>Descend</v-btn></p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Lvl8',
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
