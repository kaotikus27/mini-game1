<template>
  <h1>Rankings Page</h1>
  <div v-if="players.length" class="contain" >
    <div v-for="(player,index) in players" :key="player.id" class="context">
      <p>TOP {{ index + 1 }} </p>
      <p>{{ player.name }}</p>
      <p>{{ player.timeSpeed }}ms</p>
    </div>
</div>
<div v-else>
  <p>No data</p>
</div>
</template>

<script>
import getData from '@/composables/getData'


export default {
  setup(){

    const {players, error, load}  = getData()
    load()

    return{players, error }
  }
}
</script>

<style scoped>

  .context{
   /*  border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .context p{
    padding: 30px;
  }

</style>