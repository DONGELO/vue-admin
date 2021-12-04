<template>
  <div id="header-warp">
        <div class="pull-left header-icon" @click="navMenuState"><svg-icon class="menu" iconClass="menu" /></div>
        <div class="pull-right header-icon">
            <div class="user-info pull-left">
                <img src="../../../assets/face.jpg" alt="">
                管理员
            </div>
            <div class="header-icon pull-left"><svg-icon class="console" iconClass="console" /></div>
        </div>
  </div>
</template>

<script>
import SvgIcon from '../../../icons/SvgIcon.vue'
export default {
  components: { SvgIcon },
    name: 'Hearder',
    setup(props, { root } ) {
        const navMenuState = () =>{
            root.$store.commit('SET_COLLAPSE')
        }
        //返回值
        return {
            navMenuState
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../../styles/config.scss";
    #header-warp{
        position: fixed;
        top: 0;
        right: 0;
        height: 75px;
        background-color: white;
        @include webkit(transition, all .3s ease 0s);
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        line-height: 75px;
    }
    .open {
        #header-warp{ left: $navMenu;}
    }
    .close {
        #header-warp{ left: $navMenuMin;}
    }
    .header-icon{
        padding: 0 32px;
        svg{
            margin-bottom: -8px;
            font-size: 25px;
            cursor: pointer;
        }
    }
    .user-info{
        height: 100%;
        padding: 0 32px;
        border-right: 1px solid #ededed;
        font-size: 14px;
        display: flex;
        align-items: center;
        img{
            width: 32px;
            height: 32px;
            border-radius: 50%;
            margin-right: 10px;
        }
    }
</style>