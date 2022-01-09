<template>
  <div class="container mx-auto text-center my-8">
    <SectionTitle id="works-title" title="Works"/>
    <div>
      <section>
        <ul>
          <li >在庫管理システム<span class="info-icon" @click="infoClickHandler('modalStock')" ><font-awesome-icon icon="info-circle"  style="font-size: 18px"/></span></li>
          <li>求人情報検索サイト<span class="info-icon" @click="infoClickHandler('modalJobs')"><font-awesome-icon icon="info-circle"  style="font-size: 18px"/></span></li>
          <li>ECサイト<span class="info-icon" @click="infoClickHandler('modalEc')"><font-awesome-icon icon="info-circle"  style="font-size: 18px"/></span></li>
          <li>オウンドメディア開発<span class="info-icon" @click="infoClickHandler('modalOwnedMedia')"><font-awesome-icon icon="info-circle"  style="font-size: 18px"/></span></li>
          <li>その他色々</li>
        </ul>
      </section>
    </div>
    <Modal ref="modalDialog"></Modal>
    <ModalStock ref="modalStock"></ModalStock>
    <ModalJobs ref="modalJobs"></ModalJobs>
    <ModalEc ref="modalEc"></ModalEc>
    <modalOwnedMedia ref="modalOwnedMedia"></modalOwnedMedia>
  </div>
</template>

<script>
import SectionTitle from "./parts/SectionTitle";
import Modal from "./parts/Modal";
import ModalStock from "./parts/ModalStock";
import ModalJobs from "./parts/ModalJobs";
import ModalEc from "./parts/ModalEc";
import ModalOwnedMedia from "./parts/ModalOwnedMedia";
export default {
  name: "Works",
  components: {ModalOwnedMedia, ModalJobs, ModalStock,ModalEc, Modal, SectionTitle},
  data(){
    return {
      showModal:false,
    }
  },
  methods:{
    infoClickHandler(modalName){
      this.$refs[modalName].show()
    }
  }
}
</script>

<style scoped>
  .info-icon{
    @apply cursor-pointer pl-2 text-yellow-500
  }
</style>
