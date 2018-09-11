<template>
  <div v-if="price" class="cp-price-item">
    <span class="title">{{price.num_pp}}</span>
    <div v-if="price.types == 0" class="price-holder">
      <p>{{price.priceFirst}}k/<i class="fa fa-user"></i> cho 30 người đầu tiên</p>
      <h6>từ người thứ 31 chỉ còn</h6>
      <sup>VND</sup>{{price.price}}k
      <span><i class="fa fa-user"></i></span>
    </div>
    <div v-if="price.types == 1" class="price-holder">
      <p>Áp dụng theo gói không giới hạn sĩ số</p>
      <sup>VND</sup>{{price.price}}k
    </div>
    <p>Số thợ chụp: sĩ số / 20</p>
    <p v-if="price.takenTime">Thời gian: <b>{{price.takenTime}}</b></p>
    <ul>
      <li v-for="(item, index) of price.offer.split('/')" :key="index">
        <a href="#">{{item}}</a>
      </li>
      <li class="btn-buynow"><a href="#">Book Now</a></li>
    </ul>
  </div>
</template>
<script>
  export default{
    props: ['price']
  }
</script>
<style lang="scss">

</style>
