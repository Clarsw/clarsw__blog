<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div> -->
  <div id="app">
    <div class="con">
      <div class="l-header">
        <Header :Name="navName" />
      </div>
      <div class="l-main">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <div class="l-footer">
        <Contact />
      </div>
      <Modal />
    </div>
  </div>
</template>
<script>
import Header from './components/Header'
import Modal from './components//Modal'
import Contact from './components/Contact'
import { nav } from '@/utils/config.js'
export default {
  components: { Header, Modal, Contact },
  computed: {
    navName() {
      let routerName = this.$route.name
      console.log(this.$route)
      console.log(routerName)
      if (routerName !== null) {
        return nav[routerName].en
      }
    }
  }
}
</script>
<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: $fontFamily1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.l-main {
  overflow: hidden;
}
@font-face {
  font-family: Trade Gothic;
  src: url('./assets/Trade Gothic LT Light.ttf');
}
@font-face {
  font-family: Trade Gothic W1;
  src: url('./assets/Trade Gothic LT Bold.ttf');
}
</style>
