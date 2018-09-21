<template>
	<div id="gallery-container">
		<div class="gallery">
			<img  v-for='image in images' :src="image">
		</div>
	</div>
</template>

<script>
	export default {
		name:'Gallery',
		props: {
			images:Array
		}
	};
</script>

<style scoped>
	.gallery {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		flex-direction: row;
		max-height: 100vh;
		justify-content: center;
		padding-bottom:100px;
	}
	.gallery img {
		margin: 10px;
		border: 1px solid #000;
		box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.3); 
		max-width: 20%;
		transition: transform .2s;
	}
	.gallery img:hover {
		transform: scale(1.5);
	}
	#gallery-container{
		max-width: 1140px;
		width:100%;
		padding-top:30px;
		padding-right:15px;
		padding-left:15px;
		margin-right: auto;
		margin-left:auto;	
	}
</style>