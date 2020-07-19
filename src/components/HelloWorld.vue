<template>
  <div class="hello">

    <Modal />
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer'
import Modal from './Modal'
export default {
  components: { Footer, Modal },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
</style>
