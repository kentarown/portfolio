<template>
  <div v-if="this.showDialog" class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
    <!-- modal -->
    <div class="bg-white rounded shadow-lg w-10/12 md:w-1/3">
      <!-- modal header -->
      <div class="border-b px-4 py-2 flex justify-between items-center">
        <h3 class="font-semibold text-lg">ECサイト開発</h3>
        <button class="text-black close-modal" @click="close">&cross;</button>
      </div>
      <!-- modal body -->
      <div class="p-3">
        Laravel/EC-CUBE/WordpressなどでECサイトの構築を行ってまいりました。<br/>
        関わった案件として一番多いのはECサイト開発案件になります。
      </div>
      <div class="flex justify-end items-center w-100 border-t p-3">
<!--        <button class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal" @click="close">Cancel</button>-->
        <button class="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white" @click="close">Ok</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalEc",
  data(){

    return {
      title:'',
      body:'',
      showDialog:false,
    }
  },

  methods:{
    show(){
      this.showDialog = true
    },
    close(){
      this.showDialog = false
    }
  }
}
</script>

<style scoped>

</style>
