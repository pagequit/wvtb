<template>
	<div class="container mx-auto">
		<figure class="msg bg-indigo-500 px-4">
			<picture>
				<source
					:data-srcset="require('./assets/img/707painter.jpg?format=webp').srcSet"
					type="image/webp"
				>
				<img
					:src="require('./assets/img/707painter.jpg').placeholder"
					:data-srcset="require('./assets/img/707painter.jpg').srcSet"
					alt="707painter"
					class="lazyload"
				>
			</picture>
			<figcaption>{{ msg }}</figcaption>
		</figure>
	</div>
</template>

<script>
export default {
	name: "App",
	props: {
		msg: String,
	},
};
</script>

<style>
.msg {
	color: whitesmoke;
}
</style>
