<template>
    <div class="second-wrap">
    	<div class="tabs-wrap">
    		<span class="title">{{title | upperFirstChart}}</span>
    		<span v-for="item in types" :class="{btn:true, current:item.type == view}">{{item.type}}</span>
    	</div>
        <div class="content-wrap">
            <div class="left-wrap">
                <ul class="list">
                    this is my help list
                </ul>
            </div>
            <div class="right-wrap">
                this is my help summary
            </div>
        </div>
    </div>
</template>

<script>
	import {typeList} from './config.js';
    import filter from '../filter';
    export default {
        mixins: [filter],
    	data() {
    		return {
    			types: typeList,
    			view: 'all'
    		}
    	},
        props: {
        	title: {
        		type: String
        	}
        }
    }
</script>