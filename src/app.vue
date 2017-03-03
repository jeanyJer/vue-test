<template>
    <div class="main">
        <ul class="title-list">
            <li v-for="item in titles" :class="{active: item.title == view}" @click="changeTitle(item.title)">
                <span>{{item.title | upperCase}}</span>
            </li>
        </ul>
        <div class="list-wrap">
            <component v-bind:is="view" :title="view"></component>
        </div>
    </div>
</template>

<script>
    import dashboard from './dashboard/index.vue';
    import agents from './agents/index.vue';
    import cruise from './cruise/index.vue';
    import help from './help/index.vue';
    import {titleList} from './config.js';
    export default {
        data() {
            return {
                titles: titleList,
                view: "agents",
            }
        },
        methods: {
            /**
             * 切换模板页面
             * @param  {String} title 要切换的模板名
             */
            changeTitle(title) {
                this.view = title;
            }
        },
        filters: {
            //将字符串转成大写
            upperCase(str) {
                return str.toUpperCase();
            }
        },
        components: {
            dashboard,
            agents,
            cruise,
            help
        }
    }
</script>
<style lang="sass">
    
</style>