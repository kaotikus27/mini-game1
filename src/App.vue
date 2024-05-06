<template>
  <div class="container">
    <h1 class="header">WELCOME TO MY SIMPLE <span class="span">GAME</span> </h1>
    <nav>
      <router-link class="about" :to="{name:'about'}">ABOUT</router-link> 
      <router-link class="play"  :to="{name:'play'}" >PLAY</router-link> 
      <router-link class="rankings" :to="{name:'rankings'}">RANKINGS</router-link> 
    </nav>
  <router-view/>
  </div>
  

</template>

<script>

  export default{
    setup(){

      

      }
    }

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Amaranth:ital,wght@0,400;0,700;1,400;1,700&family=Gayathri:wght@100;400;700&display=swap');
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Gayathri", sans-serif;
  }

  .header{
    font-weight:normal;
    padding: 10px;
    margin-top: 35px;
  }
  .span{
    color: crimson;
    font-weight: bold;
  }
  nav a{
    text-decoration: none;
    color: black;
    margin: 0 20px 0 20px;
  }
  nav{
    /* border: 1px solid red; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
  }
  .container{
    /* border: 1px solid green; */
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .about{
    text-decoration: underline;
    font-weight: bold;
  }
  .rankings{
    text-decoration: underline;
    font-weight: bold;
  }
  .play{
    color: #053BFB;
    font-weight: bolder;
  }
</style>
