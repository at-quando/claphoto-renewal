<template>
  <div class="home">
    <slider/>
    <div id="cp-content-wrap" class="cp-content-wrap pd-tb0">
      <div class="cp-listed-items">
        <div class="container-fluid">
          <figure-list :figures="figures"></figure-list>
          <figure-list :figures="figures1"></figure-list>
          <figure-list :figures="figures2"></figure-list>
          <carousel :articles="articles"/>
        </div>
      </div>
    </div>
    <div id="cp-content-wrap" class="cp-content-wrap">
      <div class="container">
        <div class="cp-posts-style-1 cp-posts-style-2">
          <ul class="cp-posts-list">
            <prepost/>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as types from '../store/types'
import Vue from 'vue'
import store from '../store/store'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      figures: [
        {
          timeBefore: '12/9-20/9',
          type: 'Hot event',
          topic: 'GET 30% OFFER',
          cover: require('../assets/images/main-6.jpg')
        },
        {
          timeBefore: '',
          type: 'Trang Phục - Ảnh - Video',
          topic: 'Perfect Combo',
          cover: require('../assets/images/main-5.jpg')
        },
        {
          timeBefore: '1 phần/ 1 lớp',
          topic: 'GET YOUR GIFT',
          cover: require('../assets/images/main-4.jpg')
        }
      ],
      figures1: [
        {
          timeBefore: '',
          type: '',
          topic: 'Watch Our Gallery',
          cover: require('../assets/images/main-9.jpg')
        }
      ],
      figures2: [
        {
          timeBefore: '',
          type: 'LÀM TÓC - TRANG ĐIỂM - TẠO DÁNG',
          topic: 'Beauty Instruction',
          cover: require('../assets/images/main-8.jpg')
        },
        {
          timeBefore: '',
          type: 'TRANG trí - ban đêm - lớp học',
          topic: 'Watch Decoration',
          cover: require('../assets/images/main-7.jpg')
        }
      ],
      articles: []
    }
  },
  created () {
    console.log(122)
  },
  mounted () {
    if ($('#cp-banner-1').length) {
      $('#cp-banner-1').bxSlider({
        infiniteLoop: true,
        auto: true,
        hideControlOnEnd: true
      });
    }
    Vue.http.get(types.HOT_COSTUME).then(res => {
      this.articles = res.body
    })
  },
  methods: {
    setData (post) {
      this.articles = post
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
