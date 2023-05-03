<script>
import Projects from './components/Projects.vue'

export default {
  components: {
    Projects
  }
}

</script>

<template>
  <header>
    <div class="container ">


      <ul class="nav__menu">
        <li>
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'portfolio' }">Portfolio</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'chisono' }">Chi sono</router-link>
        </li>
        <li>
          <router-link to="/contacts">Contatti</router-link>
        </li>
      </ul>

    </div>
  </header>

  <div class="container">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template >

<style lang="scss">
@use'./style/general.scss'
</style>