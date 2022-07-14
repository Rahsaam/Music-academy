<template>
<div class="Sentbox text-center">
  <!-- <div v-if="showMassages.length"> -->
    <div v-for="massage in massages" :key="massage.id">
      <SingleMassage :massage="massage" @delete="handleDelete" @complete="handleComplete"/>
    </div>
  <!-- </div> -->
  <!-- <button @click="this.showMassages = !this.showMassages" class="sent-massages">sent massages</button> -->
</div>
</template>

<script>
import SingleMassage from '../components/SingleMassage.vue'

export default {
data() {
  return{
    massages: [],
    // showMassages: false
  }
},
components: {SingleMassage},
methods: {
  handleDelete(id) {
    this.massages = this.massages.filter(massage => {
    return massage.id !== id
    })
  },
  handleComplete(id) {
    let p = this.massages.find((massage) => {
      return massage.id === id
    })
    p.complete = !p.complete
  }
},
mounted() {
  fetch('http://localhost:3000/massages')
    .then(res => res.json())
    .then(data => this.massages = data)
    .catch(err => console.log(err.massage))
}
}
</script>

<style>

</style>