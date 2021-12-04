<template>
  <div id="layout" :class="[ menuStatus ? 'close' : 'open' ]">
      <layout-hearder />
      <layout-main />
      <layout-nav />
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'

import LayoutHearder from './Components/Hearder.vue'
import LayoutMain from './Components/Main.vue'
import LayoutNav from './Components/Nav.vue'
export default {
    name: 'Layout',
    components:{ LayoutHearder, LayoutMain, LayoutNav },
    setup( props, { root }){
        const menuStatus = computed( () =>{
          return root.$store.state.isCollapse
        })

        return {
          menuStatus
        }
    }
}
</script>

<style>

</style>