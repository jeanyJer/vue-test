/**
 * @file agents测试用例
 * @author xujin
 */

// 引用vue
import Vue from 'vue';

// 引用要测试的组件
import child from '../../../src/agents/index.vue';

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

// 描述要测试的内容
describe('test agents', () => {

    // 描述要测试的最小单元
    it('组件加载后，child组件的title应该是agents', () => {
        let childvm = getRenderedVm(child, {
            title: 'this is agents'
        });

        // 断言组件的child组件的props是否生效
        expect(childvm.title).toEqual('this is agents');
    });
});
    