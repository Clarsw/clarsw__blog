<template>
  <div class="c-footer">
    <div class="c-footer-nav">
      <div class="cover"
           v-for="(item,index) in footerNav"
           :data-src="item.cover_url"
           :key="index"
           :style=" {backgroundImage:'url('+item.cover_url+')'}">
        <div class="inner">
          <router-link to="#"
                       class="inner_link"
                       tag="span">{{item.name}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      footerNav: [
        {
          name: 'HOME',
          cover_url:
            'https://img.ivsky.com/img/tupian/pic/202001/16/shanchuan-031.jpg'
        },
        {
          name: 'ABOUT',
          cover_url:
            'https://img.ivsky.com/img/tupian/pic/202001/16/shanchuan-042.jpg'
        },

        {
          name: 'More',
          cover_url:
            'https://img.ivsky.com/img/tupian/pic/201906/22/zhangpeng-011.jpg'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.c-footer-nav {
  .inner {
    display: table-cell;
    vertical-align: middle;
    background: rgba(0, 0, 0, 0.8);
    transition: all 0.3s;
    &:hover {
      background: rgba(0, 0, 0, 0.3);
      transition: all 0.3s;
    }
    &_link {
      display: block;
      height: 100px;
      line-height: 100px;
      color: #fff;
      font-size: 140px;
      font-weight: 700;
      text-align: center;
      width: 100%;
      letter-spacing: 10px;
      font-family: Trade Gothic W1;
      cursor: pointer;
    }
  }
}

.inner {
  position: relative;
}
.c-footer-nav .cover {
  display: table;
  height: 377px;
  background-size: cover;
  background-attachment: fixed;
}
.cover {
  width: 100%;
  position: relative;
  background-position: center center;
}
</style>
