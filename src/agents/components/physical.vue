<template>
	<div class="content-wrap">
		<div class="left-wrap">
			<ul class="list">
				<li v-for="(item, index) in data" :class="{active: item.status == 1}">
					<div class="sort"></div>
					<div>
						<div class="info">
							<span>{{item.title}} </span>
							<span class="line"> | </span>
							<span v-if="item.status">building</span>
							<span v-else>idle</span>
							<span class="line"> | </span>
							<span>{{item.ip}}</span>
							<span class="line"> | </span>
							<span>{{item.path}}</span>
						</div>
						<div class="oper">
							<span>+</span>
							<span class="add-spe" @click="addSpecify">Specify Resources</span>
							<span class="line"> | </span>
							<span>Resources:</span>
							<span v-for="elem in item.resources">
								<span>{{elem.name}}</span>
								<span class="icon" @click="deleteResource">icon</span>
							</span>
						</div>
					</div>
					<div v-if="item.status == 0" class="deny">
						<span class="icon-deny">/</span>
						<span class="txt">Deny</span>
					</div>
				</li>
			</ul>
		</div>
		<div class="right-wrap">
			this is my summary
		</div>
		<add v-if="showAdd" :style="style"> </add>
	</div>
</template>
<script>
	import {dataList} from '../config.js';
	import add from './add.vue';
	export default {
		data() {
			return {
				data: dataList,
				showAdd: false,
				position: 0,
				style: {}
			}
		},
		methods: {
			addSpecify(event) {
				this.style = {
					left: event.clientX;
					top: event.clientY;
				};
				this.showAdd = true;
			},
			deleteResource() {

			},
		}
	}
</script>
<style lang="sass">
	.content-wrap {
		height: 500px;
		display: flex;
		.left-wrap {
			height:100%;
			border-right: 1px solid #333;
			flex: 1;
			.list {
				margin: 20px;
				>li {
					margin-top: 20px;
					border: 1px solid #333;
					border-radius: 10px;
					padding: 10px;
					position: relative;
					background-color: #c4e5ac;
					>div {
						display: inline-block;
						vertical-align: middle;
					}
					.line {
						color: #999;
					}
					.sort {
						height: 40px;
						width: 40px;
						background-color: #999;
						color: #fff;
						text-align: center;
						border-radius: 50%;
						margin-right: 10px;
					}
					.info {
						font-weight: bold;
						margin-bottom: 5px;
					}
					.oper {
						font-size: 12px;
					}
					.add-spe {
						text-decoration: underline;
						cursor: pointer;
					}
					.icon {
						cursor: pointer;
						color: #999;
						margin-right: 10px;
					}
					.deny {
						position: absolute;
						bottom: 10px;
						right: 10px;
						.icon-deny {
							display: inline-block;
						    height: 11px;
						    width: 11px;
						    border: 1px solid #000;
						    text-align: center;
						    line-height: 11px;
						    border-radius: 50%;
						}
						.txt {
							text-decoration: underline;
						}
					}
				}
				.active {
					background-color: #eef7a8;
				}
			}

		}
		.right-wrap {
			width: 260px;
			padding: 20px;
		}
	}
</style>>