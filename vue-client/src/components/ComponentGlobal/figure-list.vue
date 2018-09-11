<template>
  <div class="d-flex">
    <div class="figure-box" v-for="(item,index) in figures">
      <figure-item :figure="item"/>
    </div>
  </div>
</template>
<script>
  export default{
    props: ['figures']
  }
</script>
<style scoped>
.figure-box {
  padding: 1px;
  width: 100%;
}
</style>

