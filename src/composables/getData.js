import { ref } from 'vue'

const getData = ()=>{
   const players= ref([])
   const error = ref(null)

   const load = async ()=> {
    try {
      let data = await fetch('http://127.0.0.1:3000/Users')
      if(!data.ok){
        throw Error('no data available')
      }
      players.value = await data.json()
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
   }

   return {players, error, load}
}

export default getData