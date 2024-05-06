<template>
  <div class="container">
    <h1>Result</h1>
    <p> reaction Time: {{ isPlay.score }}</p>
    <p >Your Rank: <span class="rank">{{ rankStatus.rank }}</span></p>
  </div>
  
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
    props:['isPlay'],
    setup(props){
        const rankStatus= ref({
            rank:null
        })
        onMounted(()=>{
            console.log("were are you ",props.isPlay.score)
          if(props.isPlay.score < 250){
            rankStatus.value.rank = '1'
            console.log(props.isPlay.score)
          }else if(props.isPlay.score < 400){
            rankStatus.value.rank = '2'
            console.log(props.isPlay.score)
          }else{
            rankStatus.value.rank = '3'
            console.log(props.isPlay.score)
          }
        })
       
        return{rankStatus}
    }
}
</script >

<style scoped>
    .rank{
        font-size: 1.4em;
        color: #0faf87;
        font-weight: bold;
    }
    .container{
      /* border: 1px solid red; */
      margin-top: 35px;
    }
</style>