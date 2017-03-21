<template>
	<div class="add-content" v-bind:style="{left: style.left, top: style.top,display: 'block'}">
		<span class="triangle-up"></span>
		<span class="triangle-border"></span>
		<div>(separate multiple resources name with commas)</div>
		<input class="input-wrap" type="text">
		<div>
			<span class="btn" @click="addResource">Add resources</span>
			<span class="btn" @click="close">close</span>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			style: {
				type: Object,
				default: function () {
        			return {};
        		}
			}
		},
		watch: {
		},
		created() {
			
		},
		methods: {

			//添加资源
			addResource() {
				var val = $('.input-wrap').val();
				var newVal = $.trim(val);
				if (newVal) {
					let arr = newVal.split(',');
					this.$emit('add', arr);
					this.$parent.showAdd = false;
				}
			},

			//关闭弹窗
			close() {
				this.$parent.showAdd = false;
			}
		}
	}
</script>
<style lang="sass">
	.add-content {
		position: fixed;
		display: none;
		top: 0;
		left: 0;
		background-color: #b8d6d0;
		padding: 10px;
		border: 2px solid #333;
		border-radius: 10px;
		.input-wrap {
			margin: 10px 0;
			width: 380px;
			outline: none;
			border: 1px solid #333;
		}
		.btn {
			display: inline-block;
			padding: 3px 10px;
			border: 1px solid #333;
			background-color: #e0e0e0;
			margin-right: 10px;
			border-radius: 15px;
			cursor: pointer;
		}
		.triangle-up {
	        position: absolute;
		    width: 0;
		    height: 0;
		    border-left: 10px solid transparent;
		    border-right: 10px solid transparent;
		    border-bottom: 15px solid #000;
		    top: -15px;
		    left: 30px;
		}
		.triangle-border {
	        position: absolute;
		    width: 0;
		    height: 0;
		    border-left: 10px solid transparent;
		    border-right: 10px solid transparent;
		    border-bottom: 15px solid #b8d6d0;
		    top: -12px;
		    left: 30px;
		}
	}
</style>
