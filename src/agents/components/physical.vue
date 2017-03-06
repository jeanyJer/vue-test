<template>
	<div class="content-wrap">
		<div class="left-wrap">
			<ul class="list">
				<li v-for="(item, sort) in data" :class="{active: item.status == 1}">
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
							<span class="add-spe" @click="addSpecify($event,sort)">Specify Resources</span>
							<span class="line"> | </span>
							<span>Resources:</span>
							<span v-for="(elem, index) in item.resources">
								<span>{{elem.name}}</span>
								<span class="icon" @click="deleteResource(sort, index,elem.id)">
									×
								</span>
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
			<div class="summary-wrap">
				<p>Summary</p>
				<ul class="records">
					<li v-for="item in summarys">
						<span>{{item.name}}</span>
						<span>{{item.count}}</span>
					</li>
				</ul>
			</div>
			<div class = "history-wrap">
				<p>History</p>
				<ul class="records">
					<li v-for="item in historys">
						{{item.name}}
					</li>
				</ul>
			</div>
		</div>
		<add v-if="showAdd" :style="style" v-on:add="addResource"></add>
	</div>
</template>
<script>
	import {dataList, summaryList, historyList} from '../config.js';
	import add from './add.vue';
	export default {
		data() {
			return {
				data: dataList,
				summarys: summaryList,
				historys: historyList,
				showAdd: false,
				position: 0,
				style: {},
				sort: 0
			}
		},
		methods: {
			/**
			 * 打开添加资源弹窗
			 * @param {Object} event 当前鼠标事件对象
			 * @param {Number} sort  当前操作列表的索引
			 */
			addSpecify(event, sort) {
				var scrollTop = $('body').scrollTop();
				var scrollLeft = $('body').scrollLeft();
				var addTag = $(".add-spe").eq(sort);
				var left = addTag.offset().left - scrollLeft;
				var top = addTag.offset().top + 25 - scrollTop;
				
				this.style = {
					left: left + 'px',
					top: top + 'px',
				};
				this.sort = sort;
				this.showAdd = true;
			},

			/**
			 * 添加新增的资源
			 * @param {Array} arr 新增的资源数组
			 */
			addResource(arr) {
				arr.forEach((elem) => {
					let obj = {
						'id': 0,
						'name': elem
					};
					this.data[this.sort].resources.push(obj);
				});
			},

			/**
			 * 删除资源
			 * @param  {Number} sort  当前操作的列表数据索引
			 * @param  {Number} index 当前数据中删除资源的索引
			 * @param  {Number} id    删除资源的id
			 */
			deleteResource(sort, index, id) {
				this.data[sort].resources.splice(index, 1);
			},
		},
		components: {
			add
		}
	}
</script>