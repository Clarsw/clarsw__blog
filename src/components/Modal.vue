<template>
  <div class="c-modal">

    <!-- 模态框（Modal） -->
    <div class="modal fade"
         id="myModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="myModalLabel"
         aria-hidden="true">
      <div class="modal-con">
        <div class="row scene">
          <div class="col-xs-4 col-md-4 col-lg-4">
            <router-link to="#"
                         class="card nav-box"
                         tag="div">
              <div class="card__face card__face--front">
                <i class="fa fa-home fa-fw icon"></i>
              </div>
              <div class="card__face card__face--back">
                <span class="icon">Home</span>
              </div>
            </router-link>
            <router-link to="#"
                         class="card nav-box"
                         tag="div">
              <div class="card__face card__face--front">
                <i class="fa fa-home fa-fw icon"></i>
              </div>
              <div class="card__face card__face--back">
                back
              </div>
            </router-link>
            <router-link to="#"
                         class="card nav-box"
                         tag="div">
              <div class="card__face card__face--front">
                <i class="fa fa-home fa-fw icon"></i>
              </div>
              <div class="card__face card__face--back">
                back
              </div>
            </router-link>

          </div>
          <div class="col-xs-4 col-md-4 col-lg-4">
            <router-link to="#"
                         class="card nav-box"
                         tag="div">
              <div class="card__face card__face--front">
                <i class="fa fa-home fa-fw icon"></i>
              </div>
              <div class="card__face card__face--back">
                back
              </div>
            </router-link>
            <router-link to="#"
                         class="card nav-box"
                         tag="div">
              <div class="card__face card__face--front">
                <i class="fa fa-home fa-fw icon"></i>
              </div>
              <div class="card__face card__face--back">
                back
              </div>
            </router-link>
            <router-link to="#"
                         class="card nav-box"
                         tag="div">
              <div class="card__face card__face--front">
                <i class="fa fa-home fa-fw icon"></i>
              </div>
              <div class="card__face card__face--back">
                back
              </div>
            </router-link>

          </div>
          <div class="col-xs-4 col-md-4 col-lg-4">
            <router-link to="#"
                         class="card nav-box"
                         tag="div">
              <div class="card__face card__face--front">
                <i class="fa fa-home fa-fw icon"></i>
              </div>
              <div class="card__face card__face--back">
                back
              </div>
            </router-link>
            <router-link to="#"
                         class="card nav-box"
                         tag="div">
              <div class="card__face card__face--front">
                <i class="fa fa-home fa-fw icon"></i>
              </div>
              <div class="card__face card__face--back">
                back
              </div>
            </router-link>
            <router-link to="#"
                         class="card nav-box"
                         tag="div">
              <div class="card__face card__face--front">
                <i class="fa fa-home fa-fw icon"></i>
              </div>
              <div class="card__face card__face--back">
                back
              </div>
            </router-link>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.modal-con {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 500px;
  width: 500px;
  z-index: 10002;
  .icon {
    font-size: 40px;
    line-height: 158px;
  }
}
.nav-box {
  width: 160px;
  height: 160px;
  margin-bottom: 10px;
  transition: 0.4s;
  // background: red;
  border: 1px solid rgba(220, 220, 220, 0.15);
}
@media screen and (max-width: 767px) and (min-width: 0px) {
  .nav-box {
    transition: 0.4s;
    width: 96px;
    height: 96px;
  }
  .modal-con {
    height: 300px;
    width: 300px;
    .icon {
      font-size: 22px;
      line-height: 96px;
    }
  }
}
</style>
<style scoped>
.scene .card {
  position: relative;
  /* width: 240px;
  height: 300px; */
  /* width: 160px;
  height: 160px; */
  color: white;
  cursor: pointer;
  transition: 1s ease-in-out;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.scene .card:hover {
  -webkit-transform: rotateY(0.5turn);
  transform: rotateY(0.5turn);
}
.scene .card .card__face {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: 1s ease-in-out;
  /* -webkit-box-reflect: below 0
    linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4)); */
}

.scene .card .card__face--back {
  -webkit-transform: rotateY(0.5turn);
  transform: rotateY(0.5turn);
  /* background: #715699; */
  /* background: rgba(113, 86, 153, 0.6); */
  background: rgba(70, 37, 95, 0.5);
}
</style>