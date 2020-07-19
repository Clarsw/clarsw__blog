<template>
  <div class="c-header">
    <div class="header-mask">
      <div class="header-mask__inner">{{Name}}</div>
    </div>
    <div class="toggle"
         data-toggle="modal"
         data-target="#myModal">
      <span class="glyphicon glyphicon-th"
            :class="[isShow ? 'active':'']"
            aria-hidden="true"></span>
    </div>

    <nav class="navbar">
      <ul>
        <router-link to="Home"
                     class="navbar__item"
                     tag="li">HOME</router-link>
        <router-link to="About"
                     class="navbar__item"
                     tag="li">ABOUT</router-link>
        <router-link to="Skill"
                     class="navbar__item"
                     tag="li">SKILL</router-link>
        <router-link to="#"
                     class="navbar__item"
                     tag="li">PROJECT</router-link>
        <router-link to="#"
                     class="navbar__item"
                     tag="li">CONTACT</router-link>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  props: {
    Name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  mounted() {
    const _this = this
    $('#myModal').on('hidden.bs.modal', function(e) {
      _this.isShow = false
    })
    $('#myModal').on('show.bs.modal', function(e) {
      _this.isShow = true
    })
  }
}
</script>
<style scoped lang="scss">
.c-header {
  // height: 100px;
  // background: #000;
  height: 667px;
  background-size: cover;
  background-image: url(http://kenjiendo.com/wp/wp-content/themes/kenjiendo_v2/img/suppages_header_about.jpg);
  width: 100%;
  position: relative;
  background-position: center center;
  background-attachment: fixed;
  display: table;
  .header-mask {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    background: rgba(0, 0, 0, 0.4);
    &__inner {
      font-family: Trade Gothic W1;
      padding: 0 2%;
      overflow: hidden;
      font-size: 140px;
      letter-spacing: 10px;
      color: #fff;
      font-weight: 700;
    }
  }
}

.toggle {
  margin: 38px;
  width: 24px;
  height: 24px;
  position: fixed;
  z-index: 10004;
  cursor: pointer;
  top: 0;
  left: 0;
  .glyphicon.glyphicon-th {
    font-size: 24px;
    color: #fff;
    transition: 0.4s;
  }
  .glyphicon.glyphicon-th.active {
    font-size: 16px;
    color: #715699;
    transition: 0.4s;
  }
}
.navbar {
  position: absolute;
  left: 0;
  right: 0;
  .navbar__item {
    display: inline-block;
    width: 100px;
    height: 100px;
    line-height: 100px;
    color: #fff;
    cursor: pointer;
    letter-spacing: 2px;
    font-size: 11px;
  }
}
</style>