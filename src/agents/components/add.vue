<template>
	<div class="add-content">
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
			style: function(val) {
				if (val) {
					var left = val.left;
					var top = val.top;
					// debugger;
					// $('.add-content').css({'position': "fixed",'top':val.top+100,'left':val.left+50,'z-index':2});   
				}
			}
		},
		created() {
			// console.log(this.style);
			// debugger;
		},
		methods: {
			
			//设置弹窗位置
			setPosition () {
				var wrap = $(".add-content");
		
			},

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
	}
</style>
