<template>
	<div class="msg bg-gray-600">
		{{ msg }}
	</div>
</template>

<script>
export default {
	props: {
		msg: String,
	}
}
</script>

<style>
	.msg {
		color: whitesmoke;
	}
</style>