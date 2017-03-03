<template>
	<div class="content-wrap">
		<div class="left-wrap">
			<ul class="list">
				this is my Virtual list
			</ul>
		</div>
		<div class="right-wrap">
			this is my Virtual summary
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
