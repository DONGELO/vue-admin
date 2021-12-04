import Vue from 'vue'

import SvgIcon from './SvgIcon'
//自定义全局组件
Vue.component('svg-icon', SvgIcon )

/*
 * req
 */
const req = require.context('./svg', false, /\.svg$/)

const requireAll = requireContext => requireContext.keys().map(requireContext)

/* onst requireAll = (requireContext) => {
    console.log(requireContext.keys().map(requireContext))
    return requireContext.keys().map(requireContext)
} */

requireAll(req)