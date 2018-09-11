<template>
  <div class="price">
    <section class="cp_price-section">
      <div class="container">
        <div class="cp-heading-holder">
          <h3>{{this.$route.query.title}} Prices </h3>
          <p>Bảng giá {{this.$route.query.title}}</p>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-4" v-for="(item, index) of prices" :key ="index">
            <price-item :price="item"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import * as types from '../store/types'
export default {
  name: 'Price',
  data () {
    return {
      prices: []
    }
  },
  created () {
    this.$http.get(types.LIST_PRICE).then(res => {
      this.prices = res.body
      this.prices = this.prices.filter(x => x.aspect == parseInt(this.$route.query.type))
      console.log(this.prices)
    })
  }
 
}
</script>
