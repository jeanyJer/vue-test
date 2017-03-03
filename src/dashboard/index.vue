<template>
    <div class="second-wrap">
    	<div class="tabs-wrap">
    		<span class="title">{{title | upperFirstChart}}</span>
    		<span v-for="item in types" :class="{btn:true, current:item.type == view}">{{item.type}}</span>
    	</div>
    </div>
</template>

<script>
	import {typeList} from '../config.js';
    export default {
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
        },
        filters: {
            upperFirstChart(str) {
            	var reg = /\b(\w)|\s(\w)/g;
                return str.replace(reg,function(m){return m.toUpperCase()});
            }
        }
    }
</script>
<style lang="sass">
	.second-wrap {
		.tabs-wrap {
			background-color: #666;
			padding: 10px;
			.title {
				font-size: 18px;
				color: #fff;
			}
			.btn {
				display: inline-block;
				width: 80px;
				text-align: center;
				padding: 3px 0;
				background-color: #999;
				cursor: pointer;
				margin-left: 10px;
				border-radius: 15px;
			}
			.current {
				background-color: #e0e0e0;
			}
		}
	}
</style>