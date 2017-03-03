<template>
    <div class="second-wrap">
    	<div class="tabs-wrap">
    		<span class="title">{{title | upperFirstChart}}</span>
    		<span v-for="item in types" :class="{btn:true, current:item.type == view}" @click="changeTabs(item.type)">{{item.type}}</span>
    	</div>
        <component v-bind:is="view" :title="view"></component>
    </div>
</template>

<script>
    import physical from './components/physical.vue';
    import all from './components/all.vue';
    import virtual from './components/virtual.vue';
    import {typeList} from './config.js';
    import filter from '../filter';
    export default {
        mixins: [filter],
    	data() {
    		return {
    			types: typeList,
    			view: 'physical'
    		}
    	},
        props: {
        	title: {
        		type: String
        	}
        },
        methods: {

            /**
             * 切换模版内容页
             * @param  {String} type 要切换的组件名称
             */
            changeTabs(type) {
                this.view = type;
            }
        },
        components: {
            physical,
            all,
            virtual
        }
    }
</script>