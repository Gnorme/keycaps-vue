<template>
	<div v-if="!isMobile()" class="options">
		<h1 style="margin-top:0">Custom Keycap</h1>
		<div>
			Select a key  -  <span style="font-style:italic;text-decoration:underline">Why the row matters</span><br>
			<svg style="background-color:rgb(50,50,50); margin-top:5px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="700" height="205" viewBox="0 0 925 265">
				<g v-for="key in keys">
					<rect :x="key.body.x" :y="key.body.y" :width="key.body.width" :height="key.body.height" rx="2" ry="2" :style="{fill:key.body.color}" :name="key.name" class="key-body"/>
					<rect :x="key.face.x" :y="key.face.y" :width="key.face.width" :height="key.face.height" rx="4" ry="4" :style="{fill:key.face.color,stroke:key.face.stroke}" :name="key.name" class="key-face"/>
				</g>
			</svg>
		</div>
		<div v-if="active">
			<h2 style="margin:0;display:inline-block;" >$10.00</h2> 
			<div class="button" style="margin-left: 20px" v-on:click="addToCart">Add to cart</div>
		</div>  
	</div>
	<div v-else>
		<div>
			Select a key  -  <span style="font-style:italic;text-decoration:underline">Why the row matters</span><br>
			<div id="keyboard">
				<svg style="background-color:rgb(50,50,50); margin-top:5px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="400" height="117" viewBox="0 0 925 265">
					<g v-for="key in keys">
						<rect :x="key.body.x" :y="key.body.y" :width="key.body.width" :height="key.body.height" rx="2" ry="2" :style="{fill:key.body.color}" :name="key.name" class="key-body"/>
						<rect :x="key.face.x" :y="key.face.y" :width="key.face.width" :height="key.face.height" rx="4" ry="4" :style="{fill:key.face.color,stroke:key.face.stroke}" :name="key.name" class="key-face"/>
					</g>
				</svg>
			</div>
			<div v-if="active" style="float:right; padding-right:15px;">
				<h2 style="margin:0;display:inline-block;" >$10.00</h2> 
				<div class="button" style="margin-left: 20px" v-on:click="addToCart">Add to cart</div>
			</div> 
		</div> 
	</div>
</template>

<script>
	import { DetectMobile } from '../mixins.js'
	export default {
		name:'KeySelector',
		mixins:[DetectMobile],
		props:{
			keys: Object,
			active: Boolean,
			addToCart: Function
		}
	};
</script>
<style>
	.options {
		grid-area:options;
		display:grid;
		grid-template-columns:1fr;
		grid-template-rows:0.3fr 1.2fr 0.5fr;
		padding-top: 20px;
	}  
	.button {
		background: #1574cd;
		border-radius: 2px;
		font-weight:300;
		color: white;
		border:none;
		font-family: 'Open Sans', sans-serif;
		padding:7px 20px;
		font-size:16px;
		box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
		display:inline-block;
		cursor: pointer;
	}
	.key-face {
		cursor:pointer;
	}
	.key-body{
		cursor:pointer;
	}	  
	#keyboard {
		margin: 10px 0px;
	}
</style>