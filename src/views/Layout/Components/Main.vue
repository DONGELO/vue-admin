<template>
  <div id="main-warp">
      <div class="main-content">
          <div class="content">
              <router-view />
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Main',
    setup(){
        
    }
}
</script>

<style lang="scss" scoped>
    @import "../../../styles/config.scss";
    #main-warp{
        height: 100vh;
        //position: fixed;
        //top: 75px;
        //left: $navMenu;
        //bottom: 0;
        //right: 0;
        //background-color: white;
        //box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
        //margin: 30px 0 0 30px;
    }
    .main-content{
        width: 100%;
        height: 100%;
        padding-top: $layoutHeader +30;
        padding-right: 30px;
        @include webkit(transition, all .3s ease 0s);
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .open {
        .main-content{padding-left: $navMenu +30;}
    }
    .close {
        .main-content{ padding-left: $navMenuMin +30;}
    }
    .content{
        width: 100%;
        height: 100%;
        padding: 30px 30px 0 30px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        background-color: white;
    }
</style>