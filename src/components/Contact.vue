<template>
  <div class="c-contact">
    <div class="contact__title">CONTACT</div>
    <div class="contact__body row content-box">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div class="contact__user">
          <div>
            <span class="wpcf7-form-control-wrap your-name"><input type="text"
                     name="your-name"
                     value=""
                     size="40"
                     class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                     aria-required="true"
                     aria-invalid="false"
                     placeholder="NAME"></span>
            <span class="gradient"></span>
          </div>
          <div>
            <span class="wpcf7-form-control-wrap your-email"><input type="email"
                     name="your-email"
                     value=""
                     size="40"
                     class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                     aria-required="true"
                     aria-invalid="false"
                     placeholder="EMAIL"></span>
            <span class="gradient"></span>
          </div>
          <div>
            <span class="wpcf7-form-control-wrap your-subject"><input type="text"
                     name="your-subject"
                     value=""
                     size="40"
                     class="wpcf7-form-control wpcf7-text"
                     aria-invalid="false"
                     placeholder="TITLE"></span>
            <span class="gradient"></span>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div class="contact__message">
          <span class="wpcf7-form-control-wrap your-message"><textarea name="your-message"
                      cols="40"
                      rows="10"
                      class="wpcf7-form-control wpcf7-textarea"
                      aria-invalid="false"
                      placeholder="MESSAGE"
                      style="margin: 0px; width: 279px; height: 114px;"></textarea></span>
          <span class="gradient"></span>
        </div>
      </div>
    </div>
    <div class="contact__submit">SUBMIT</div>
  </div>
</template>
<style scoped lang="scss">
.c-contact {
  background: #000;
  padding: 100px 0;
  .contact {
    &__title {
      font-family: Trade Gothic W1;
      font-weight: 700;
      font-size: 20px;
      text-align: center;
      letter-spacing: 5px;
      line-height: 90px;
      color: #fff;
    }
    &__body {
      input {
        height: 39px;
        width: 100%;
        border: none;
        background: none;
        color: #fff;
        font-weight: 800;
        letter-spacing: 1px;
        font-size: 13px;
        line-height: 3;
        &:focus {
          outline: none;
        }
      }
      textarea {
        border: none;
        background: none;
        color: #fff;
        font-weight: 800;
        letter-spacing: 1px;
        font-size: 13px;
        line-height: 3;
      }
    }
    &__user {
      width: 300px;
      margin: 0 40px 0 auto;
    }
    &__message {
      width: 300px;
      margin: 0 auto 0 40px;
    }
    &__submit {
      padding: 8px 0;
      font-family: Trade Gothic W1;
      color: #fff;
      font-weight: 800;
      letter-spacing: 1px;
      font-size: 13px;
      line-height: 3;
      cursor: pointer;
    }
  }
  .content-box {
    width: 1080px;
    max-width: 100%;
    margin: 0 auto;
  }
}
.wpcf7-form-control-wrap {
  position: relative;
}

.gradient {
  width: 100%;
  height: 1px;
  display: block;
  transition: all 0.3s;
  // background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwLjEiLz4KICAgIDxzdG9wIG9mZnNldD0iOTklIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuMSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.1) 99%,
    rgba(255, 255, 255, 0.1) 100%
  );
}

@media screen and (max-width: 767px) and (min-width: 0px) {
  .c-contact {
    padding: 50px 0;
  }
  .c-contact .content-box {
    width: 100%;
  }
  .c-contact .contact__user,
  .c-contact .contact__message {
    // width: 100%;
    margin: 0 auto;
  }
}
</style>