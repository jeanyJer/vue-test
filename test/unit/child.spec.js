/**
 * @file child.vue测试用例
 * @author xujin
 */

// 引用vue
import Vue from 'vue';

// 引用要测试的组件
import child from '../../src/agents/index.vue';

/**
 * 获取生成的vm
 *
 * @param {Object} Component 组件
 * @param {Object} propsData props数据
 * @return {Object} vue实例
 */
function getRenderedVm (Component, propsData) {
    const Ctor = Vue.extend(Component)
    const vm = new Ctor({ propsData }).$mount()
    return vm
}

    