<template>
    <div  class="block" v-if="blockStatus.showBlock" @click="stopTimer">
        <h1>CLICK TO START</h1>
    </div>
  
</template>

<script >
import { ref , onMounted, onUnmounted} from 'vue'
export default {
    props:['isPlay'],
 
    setup(props, context){
        const blockStatus= ref({
            showBlock:false,
            timer:null,
            reactionTime:0
        })

        onMounted(()=>{
            setTimeout(()=>{
                blockStatus.value.showBlock = true
                startTime()
            }, props.isPlay.delay)
        })

        onUnmounted(()=>{
            console.log(blockStatus.value.timer,'unmouted')
        })

        const startTime = ()=>{
            blockStatus.value.timer = setInterval(()=>{
                blockStatus.value.reactionTime +=10
                },10)
            }
        const stopTimer = ()=>{
            clearInterval(blockStatus.value.timer)
            context.emit('end',blockStatus.value.reactionTime)
            }
        
        return{ blockStatus, stopTimer, startTime}
    }

}
</script>

<style>
 .block{
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>