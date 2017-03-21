/**
 * @file app.vue测试用例
 * @author xujin
 */

// 引用vue
import Vue from 'vue';

// 引用要测试的组件
import app from '../../src/app.vue';
import filterObj from '../../src/filter.js';


// 描述要测试的内容
describe('test app.vue', () => {

    // 描述要测试的最小单元
    it('设置view为cruise', () => {

        // 这里将app生成vue实例，并使用 $mount() 模拟挂载状态
        let vm = new Vue(app).$mount();

        // 执行changeTitle方法
        vm.changeTitle('cruise');

        // 断言组件的view是否变为了'cruise'
        expect(vm.view).toEqual('cruise');
    });


    it('upperCase过滤器能把app转换为APP', () => {

        // vue 组件export出来的是个对象，我们直接用这个对象的属性和方发就能调用到要测试的filter
        let appStr =  app.filters.upperCase('app');

        // 断言组件的appStr是为'APP'
        expect(appStr).toEqual('APP');
    });

    // 异步数据更新
    it('数据更新后，视图应该改变', done => {

        // 这里将app生成vue实例，并使用 $mount() 模拟挂载状态
        let vm = new Vue(app).$mount();

        Vue.nextTick(() => {
            let view_first = vm.$el.getElementsByTagName('span')[0];
            expect(view_first.textContent).toEqual('DASHBOARD');

            let view_second = vm.$el.getElementsByTagName('span')[1];
            expect(view_second.textContent).toEqual('CRUISE');

            let view_third = vm.$el.getElementsByTagName('span')[2];
            expect(view_third.textContent).toEqual('AGENTS');

            let view_forth = vm.$el.getElementsByTagName('span')[3];
            expect(view_forth.textContent).toEqual('HELP');

            done();
        })
    });
});

// 描述要测试的内容
describe('test filters', () => {

    it('filters.upperFirstChart过滤器能把app转换为App', () => {

        // vue 组件export出来的是个对象，我们直接用这个对象的属性和方发就能调用到要测试的filter
        let appStr =  filterObj.filters.upperFirstChart('app');

        // 断言组件的appStr是为'App'
        expect(appStr).toEqual('App');
    });
});

    