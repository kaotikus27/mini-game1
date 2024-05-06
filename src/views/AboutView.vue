<template>
  <div class="about-container">
    <p>The game test your reaction <br> Speed</p>
    <p>The faster you click, Amazing <span style="color: yellow">REWARDS await.</span></p>
    <p>Can youo beat them? <router-link style="text-decoration: none; color: white; cursor: pointer;"   :to="{name:'rankings'}">RAN<span style="color: crimson; text-decoration: underline;" >KINGS</span></router-link>.</p>
  </div>
  <router-view/>
</template>

<script>
export default {

}
</script>

<style scoped>
  .about-container{
    border-radius: 20px;
    background: #5b6650;
    color: white;
    letter-spacing: 2px;
    line-height: 1.5;
    padding: 35px;
    }
    
</style>