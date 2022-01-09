<template>
  <div class="container mx-auto text-center my-8">
    <SectionTitle id="skills-title" title="Skills"/>
    <div>
        <ul>
          <li>Laravel</li>
          <li>Symfony</li>
          <li>EC-CUBE</li>
          <li>Wordpress</li>
          <li>Flask</li>
          <li>Nuxt.js</li>
          <li>Next.js</li>
          <li>AWS</li>
        </ul>

    </div>

    </div>
</template>

<script>
import SectionTitle from "./parts/SectionTitle";
import Modal from "./parts/Modal";
export default {
  name: "Skills",
  components: {Modal, SectionTitle},
  data(){
    return {
      showModal:false,
    }
  },

}
</script>

<style scoped>
.info-icon{
  @apply cursor-pointer pl-2 text-yellow-500
}
</style>
