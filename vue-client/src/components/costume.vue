<template>
  <div v-if="articles.length != 0">
    <banner/>
    <div id="cp-content-wrap" class="cp-content-wrap">
      <div class="container">
        <div class="row"> 
          <article-list :type="1" :articles="articles"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as types from '../store/types'
export default {
  name: 'Costume',
  data () {
    return {
      articles: []
    }
  },
  created () {
    this.$http.get(types.LIST_COSTUME).then(res => {
      this.articles = res.body
    })
  },
  mounted () {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
