<template>
  <div class="container mx-auto text-gray-700">

    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke-width="2.5" stroke="#CACBD2" fill="none" class="duration-300 transform transition-all" style="width: 48px; height: 48px;"><path d="M49.78 31.63L32 49.39c-2.09 2.09-10.24 6-16.75-.45-4.84-4.84-5.64-11.75-.95-16.58 5-5.17 15.24-15.24 20.7-20.7 2.89-2.89 7.81-4.28 12.17.07s2.41 9.44 0 11.82L27.81 43a4.61 4.61 0 01-6.89-.06c-2.19-2.19-1.05-5.24.36-6.66l18-17.89"></path></svg>
          <span class="ml-3 text-xl"><a>kentarow</a></span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <ul class="menu-list" >
            <li><a class="menu-link" href="/#about-title">About</a></li>
            <li><a class="menu-link" href="/#skills-title">Skills</a></li>
            <li><a class="menu-link" href="/#works-title">Works</a></li>
            <li class="dropdown">
                <div v-if=true class=" relative my-32">
                  <button @click="dropdownOpen = !dropdownOpen" class=" relative z-10 block rounded-md bg-white p-2 focus:outline-none">
                    ひまつぶし
                    <svg class="h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>

                  <div v-if=dropdownOpen @click="dropdownOpen = !dropdownOpen" class=" fixed inset-0 h-full w-full z-10"></div>

                  <div v-if=dropdownOpen   class="dropdown-items absolute right-0 mt-8 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                    <NuxtLink to="coloring" @click.native="dropdownOpen = !dropdownOpen" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                      coloring
                    </NuxtLink>
                    <a href="#"  class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                      準備中
                    </a>

                  </div>
                </div>
            </li>
          </ul>

        </nav>
      </div>
    </header>

    <main>
      <Nuxt/>
    </main>

    <footer class="text-gray-600 body-font">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke-width="2.5" stroke="#CACBD2" fill="none" class="duration-300 transform transition-all" style="width: 48px; height: 48px;"><path d="M49.78 31.63L32 49.39c-2.09 2.09-10.24 6-16.75-.45-4.84-4.84-5.64-11.75-.95-16.58 5-5.17 15.24-15.24 20.7-20.7 2.89-2.89 7.81-4.28 12.17.07s2.41 9.44 0 11.82L27.81 43a4.61 4.61 0 01-6.89-.06c-2.19-2.19-1.05-5.24.36-6.66l18-17.89"></path></svg>
          <span class="ml-3 text-xl">kentarow</span>
        </a>
        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a class="text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
          ※準備中
        </span>
      </div>
    </footer>

  </div>

</template>

<script>
export default {
  name: "default",
  data(){
    return {
      dropdownOpen:false,
    }
  },
  mounted() {
  }
}
</script>

<style global>
  .menu-link{
    @apply mr-5 hover:text-gray-900
  }
  @import url('https://fonts.googleapis.com/css2?family=Condiment&family=Licorice&family=M+PLUS+1p:wght@100;300;400&family=Mr+Dafoe&family=Oswald:wght@200;300;400;500&family=Work+Sans:wght@100&family=Zen+Maru+Gothic&display=swap');

  body{
     /*font-family: 'Condiment', cursive;*/
    /*font-family: 'M PLUS 1p', sans-serif;*/
    /*font-family: 'Mr Dafoe', cursive;*/
    /*font-family: 'Oswald', sans-serif;*/
    /*font-family: 'Work Sans', sans-serif;*/
    font-family: 'Zen Maru Gothic', sans-serif;
  }
 .menu-list *{
   @apply inline
 }
 .dropdown-items *{
   @apply block
 }
  /*.menu-list span svg {*/
  /*  @apply inline*/
  /*}*/
</style>
