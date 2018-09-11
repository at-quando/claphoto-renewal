<template>
  <div class="cp-post-carousel">
    <div id="cp-post-carousel" class="owl-carousel">
      <div v-for="(item, index) of articles" :key="index" class="item">
        <img class="lazyOwl" :src="item.images[0].name.url |takeImage" alt="Lazy Owl Image">
        <div class="cp-slider-content">
          <h2><a href="#">{{item.title}}</a></h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import * as types from '../../store/types'

export default {
  props: ['articles'],
  mounted() {
    console.log(this.articles)
  },
  updated() {
    if ($('#cp-post-carousel').length) {
      $("#cp-post-carousel").owlCarousel({
        autoPlay: 3000,
        items : 3,
        pagination:false,
        itemsCustom : false,
        itemsDesktop : [1199,3],
        lazyLoad : true,
        navigation : true,
        itemsDesktopSmall : [979,3]
      })
    }
  }
}
</script>
<style>
.custom-carousel {
  height: 563px;
}
.lazyOwl {
  height: 563px !important;
  width: auto !important;
}
</style>
