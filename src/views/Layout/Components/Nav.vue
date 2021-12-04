<template>
  <div id="nav-warp">
      <h2 class="logo"><img src="../../../assets/logo.png" alt=""></h2>
      <el-menu 
      default-active="1-4-1" 
      class="el-menu-vertical-demo" 
      @open="handleOpen" 
      @close="handleClose" 
      :collapse="isCollapse" 
      background-color="transparent" 
      text-color="white"
      router>
        <template v-for="(item, index) in routers">
            <el-submenu v-if="!item.hidden"  :key="item.id" :index="index + '' ">
                <!-- 一级菜单 -->
                <template slot="title">
                    <i :class="item.meta.icon"></i>
                    <span slot="title">{{item.meta.name}}</span>
                </template>
                <!-- 子菜单 -->
                <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.path">{{ subItem.meta.name }}</el-menu-item>
            </el-submenu>
        </template>
    </el-menu>
    <!-- <svg-icon iconClass="menu11" className="menu22" /> -->
  </div>
</template>

<script>
import { computed, reactive, ref } from '@vue/composition-api'
export default {
    name: 'NavMenu',
    setup(props, { root }){
        // data 数组
        //const isCollapse = ref(false)
        const routers = reactive(root.$router.options.routes)

        const isCollapse = computed( () =>{
            return root.$store.state.isCollapse
        })

        const handleOpen = (key, keyPath) =>{
            console.log(key, keyPath);
        }

        const handleClose = (key, keyPath) =>{
            console.log(key, keyPath);
        }

        return{
            isCollapse,
            routers,
            handleOpen,
            handleClose
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../../styles/config.scss";
    .logo{
        text-align: center;
        img{
            margin: 0 auto;
            width: 64px;
            height: 64px;
        }
    }
    #nav-warp{
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        background-color: #344a5f;
        @include webkit(transition, all .3s ease 0s)
    }
    .open {
        #nav-wrap{ width: $navMenu;}
    }
    .close {
        #nav-wrap{ width: $navMenuMin;}
    }
</style>