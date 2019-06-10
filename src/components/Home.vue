<template>
  <div>
    <h1><b>A Comparison of Hells from Different Traditions</b></h1>
    <p><img src="../assets/img/intro.jpg" alt="Levels of Hell"></p>
    <p><i>The light was departing. The brown air drew down
     all the earth’s creatures, calling them to rest
     from their day-roving, as I, one man alone,
     prepared myself to face the double war
     of the journey and the pity, which memory
     shall here set down, nor hesitate, nor err.</i><br>- Inferno</p>
    <router-link to="/lvl/1">
      <v-btn>Descend</v-btn>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
img{
  max-width: 100%;
  padding-top: 5%;
  height: auto;
}
</style>
