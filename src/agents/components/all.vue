<template>
	<div class="content-wrap">
		<div class="left-wrap">
			<ul class="list">
				this is my Agents list
			</ul>
		</div>
		<div class="right-wrap">
			this is my Agents summary
		</div>
	</div>
</template>
<script>
	import dataList from '../config.js';
	export default {
		data() {
			return {
				data: dataList,
			}
		}
	}
</script>
