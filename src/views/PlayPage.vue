<template>
  <button class="startPlaying" @click="start" :disabled="isPlay.status"  > CLICK TO START PLAYING</button>
  <Block  v-if="isPlay.status" :isPlay="isPlay" @end="endGame"/>
  <ResultPage v-if="isPlay.showResult" :isPlay="isPlay"/>
</template>

<script>
import { ref } from 'vue'
import Block from './Block.vue'
import ResultPage from './ResultPage.vue'



export default {
  name:'play',
  components:{Block, ResultPage},

  setup(){

    const isPlay= ref({
      status:false,
      delay:null,
      score:null,
      showResult:false
    })
   
    const start = () => {
      isPlay.value.delay = 2000 + Math.random() * 500
      isPlay.value.status= true
      isPlay.value.status=true
      isPlay.value.showResult = false
      console.log(isPlay.status= true, " ?? ")

    }

    const endGame = (reactionTime)=>{
      isPlay.value.score = reactionTime
      isPlay.value.status= false
      isPlay.value.showResult = true
      console.log('your score', isPlay.value.score)
    }

   
    return{isPlay, start, endGame}
  }
}
</script>

<style>
  .startPlaying{
    font-size: 20px;
    padding-top: 20px;
    cursor: pointer;
    border: none;
    background: none;
  }
  .startPlaying:hover{
    color: green;
    font-weight: bold;
  }

  .startPlaying[disabled]{
    opacity: 0.2;
    cursor: not-allowed;
  }

</style>