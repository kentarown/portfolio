<template>
  <div>
    <About/>
    <Skills/>
    <Works/>
  </div>
</template>

<script>
import Skills from "../components/Skills";
import Works from "../components/Works";
import About from "../components/About";
export default {
  components: {About, Works, Skills}
}
</script>
