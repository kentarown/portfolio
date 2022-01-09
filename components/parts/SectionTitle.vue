<template>
  <h2 v-bind:id="id" class="text-4xl underline underline-offset-8 my-8 title-font">{{title}}</h2>
</template>

<script>
export default {
  name: "SectionTitle",
  props:{
    id:'',
    title:"",
  }
}
</script>

<style scoped>
.underline-offset-8{
  text-underline-offset: 8px;
}
.title-font{
  font-family: 'Licorice', cursive;
}
</style>
