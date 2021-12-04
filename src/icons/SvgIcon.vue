<template>
  <div>
      <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
          <use :xlink:href="iconName"></use>
      </svg>
  </div>
</template>

<script>
import { ref, computed } from '@vue/composition-api'
export default {
    name: 'SvgIcon',
    //props:[ 'iconClass', 'className', ],
    props: {
        iconClass: {
            type: String, //定义接收的类型
            default: true
        },
        className: {
            type: String,
            default: ''
        }
    },
    setup( props ){
        const msg = ref('钱罐')

        const iconName = computed( () =>'#icon-${ props.iconClass }' )

        const svgClass = computed( () => {
            if( props.className ) {
                return ' svg-icon ${ props.className} '
            }else {
                return ' svg-icon '
            }
        })

        return {
            msg,
            iconName,
            svgClass
        }
    }
}
</script>

<style >
    .svg-icon {
        width: 2em;
        height: 2em;
        vertical-align: -0.8em;
        fill: currentColor;
        overflow: hidden;
        /* background-color: blue; */
        border: 1px solid #000;
        border-radius: 2px;
    }
</style>