<template>
	<div class="content-wrap">
		<div class="left-wrap">
			<ul>
				<li>
					this is my list
				</li>
			</ul>
		</div>
		<div class="right-wrap">
			this is my summary
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
