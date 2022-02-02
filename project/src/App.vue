<template>
  <div>
    <Header />
  </div>
  <router-view/>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>
<style lang="less">
body{
  background-color: #E8E8E8 !important;
  overflow-x: hidden;
}
a{
  text-decoration: none;
}
</style>