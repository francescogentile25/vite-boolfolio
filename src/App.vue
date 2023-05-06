<script>
import Projects from './components/Projects.vue'
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Projects,
    Navbar
  }
}

</script>

<template>
  <router-view></router-view>
</template >

<style lang="scss">
@use'./style/general.scss'
</style>