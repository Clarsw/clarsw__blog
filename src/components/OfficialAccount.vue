<template>
  <div class="c-official-account inner">
    <Drop />
    <div class="official-account__box center">
      <ul>
        <li><i class="fa fa-weibo"
             aria-hidden="true"></i></li>
        <li><i class="fa fa-qq"
             aria-hidden="true"></i></li>
        <li><i class="fa fa-weixin"
             aria-hidden="true"></i></li>
      </ul>
    </div>
  </div>
</template>
<script>
import Drop from '@/components/Drop'
export default {
  components: { Drop }
}
</script>
<style scoped lang="scss">
.c-official-account {
  display: table-cell;
  vertical-align: middle;
  position: relative;
  padding: 0 40px;
}
.inner {
  display: table-cell;
  vertical-align: middle;
  ul > li {
    display: inline-block;
    padding: 0 4px;
    position: relative;
    z-index: 10004;
    cursor: pointer;
  }
}

@media screen and (max-width: 767px) and (min-width: 0px) {
  .c-official-account {
    padding: 0 20px;
  }
}
.center {
  float: right;
}
.official-account__box {
  background: none;
  border: 0;
  box-sizing: border-box;
  margin: 1em;
  padding: 1em 2em;
  box-shadow: inset 0 0 0 2px #fff;
  color: #fff;
  font-size: inherit;
  font-weight: 700;
  position: relative;
  vertical-align: middle;
}
.official-account__box::before,
.official-account__box::after {
  box-sizing: inherit;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
}

.center:hover {
  color: #6477b9;
}
.center::before,
.center::after {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  -webkit-transform-origin: center;
  transform-origin: center;
}
.center::before {
  border-top: 2px solid #6477b9;
  border-bottom: 2px solid #6477b9;
  -webkit-transform: scale3d(0, 1, 1);
  transform: scale3d(0, 1, 1);
}
.center::after {
  border-left: 2px solid #6477b9;
  border-right: 2px solid #6477b9;
  -webkit-transform: scale3d(1, 0, 1);
  transform: scale3d(1, 0, 1);
}
.center:hover::before,
.center:hover::after {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  transition: -webkit-transform 0.5s;
  transition: transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s;
}
</style>