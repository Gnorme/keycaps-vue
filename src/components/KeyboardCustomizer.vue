<template>
	<div v-if="!isMobile()" id="keyboard-container">
		<div id="keyboardViewer">
			<select class="select" id="chooseKeyboard" style="width:200px; margin-bottom:10px;" v-on:change="changeKeyboard">
				<option v-for='option in keyboardOptions' :value="option.value">
					{{ option.name }}
				</option>
			</select>			
			<svg style="background-color:black; margin:20px 0;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :width="keyboard.width" :height="keyboard.height">
				<image v-bind:xlink:href='keyboard.backplate' :width="keyboard.width" :height="keyboard.height" />
				<image v-for="section in keyboard.sections" v-bind:xlink:href="section.data" :width="section.width" :height="section.height" :y="section.y" :x="section.x" />
				<g v-for="key in keyboard.keys">
					<rect :x="key.body.x" :y="key.body.y" :width="key.body.width" :height="key.body.height" rx="2" ry="2" :style="{fill:key.body.color}" :name="key.name" class="key-body"/>
					<rect :x="key.face.x" :y="key.face.y" :width="key.face.width" :height="key.face.height" rx="4" ry="4" :style="{fill:key.face.color,stroke:key.face.stroke}" :name="key.name" class="key-face"/>
				</g>
			</svg>
			<div class="colorPicker" style="width:auto" id="kbColorPicker">
				<div v-for='color in colors' class="colorChoice kbPicker" :data-color="color.name" v-bind:style="{'background-color':color.color, 'float':'left'}" v-on:click="selectColor(color)"></div>
			</div>
			<div id="keyboardActions">
				<div class="button" v-on:click="undo">Undo</div>
				<div class="button" v-on:click="redo">Redo</div>
				<div class="button" v-on:click="setColorAll">Set All</div>
				<div class="button" v-on:click="upload">Upload</div>
			</div>			
		</div>
	</div>
	<div v-else id="keyboard-container-mobile">
		<div id="keyboardViewer">
			<select class="select" id="chooseKeyboard" style="width:200px; margin-bottom:10px;" v-on:change="changeKeyboard">
				<option v-for='option in keyboardOptions' :value="option.value">
					{{ option.name }}
				</option>
			</select>
			<svg style="background-color:black; margin:20px 0; width:100%; height:auto;" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :viewBox="'0 0 ' + keyboard.width + ' ' + keyboard.height">
				<image v-bind:xlink:href='keyboard.backplate' :width="keyboard.width" :height="keyboard.height" />
				<image v-for="section in keyboard.sections" v-bind:xlink:href="section.data" :width="section.width" :height="section.height" :y="section.y" :x="section.x" />
				<g v-for="key in keyboard.keys">
					<rect :x="key.body.x" :y="key.body.y" :width="key.body.width" :height="key.body.height" rx="2" ry="2" :style="{fill:key.body.color}" :name="key.name" class="key-body"/>
					<rect :x="key.face.x" :y="key.face.y" :width="key.face.width" :height="key.face.height" rx="4" ry="4" :style="{fill:key.face.color,stroke:key.face.stroke}" :name="key.name" class="key-face"/>
				</g>
			</svg>
			<div class="colorPicker" style="width:auto" id="kbColorPicker">
				<div v-for='color in colors' class="colorChoice kbPicker" :data-color="color.name" v-bind:style="{'background-color':color.color, 'float':'left'}" v-on:click="selectColor(color)"></div>
			</div>
			<div id="keyboardActions">
				<div class="button" v-on:click="undo">Undo</div>
				<div class="button" v-on:click="redo">Redo</div>
				<div class="button" v-on:click="setColorAll">Set All</div>
				<div class="button" v-on:click="upload">Upload</div>
			</div>			
		</div>		
	</div>	
</template>

<script>
	import { DetectMobile } from '../mixins.js';
	export default {
		name:'KeyboardCustomizer',
		mixins:[DetectMobile],
		props: {
			keyboardOptions: Array,
			keyboard: Object,
			colors: Array,
			selectColor: Function,
			changeKeyboard: Function,
			undo: Function,
			redo: Function,
			setColorAll: Function,
			upload:Function
		}
	};
</script>
<style scoped>
	#keyboard-container {
		padding: 75px 0;
		display:grid;
		height:auto;
		grid-template-rows: 1fr;
		grid-template-columns:auto;
		max-width: 1140px;
		margin-left:auto;
		margin-right:auto;	
		grid-template-areas: 
			"keyboard"
	}
	#keyboard-container-mobile {
		padding: 30px 0;
		display:grid;
		height:auto;
		grid-template-rows: 1fr;
		grid-template-columns:auto;
		max-width: 1140px;
		margin-left:auto;
		margin-right:auto;	
		grid-template-areas: 
			"keyboard"
	}	
	#keyboardViewer {
		grid-area:keyboard;
		display:flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}	
	.colorPicker{
		width:230px;
		padding-bottom:10px;
	}
	.colorChoice{
		border:1px solid #d4d4d4;
		margin:5px;
		box-sizing: border-box;
		height:28px;
		width:28px;
	}
	.colorChoice:hover {
		border:2px solid black;
	}
	.select {
		line-height: 33px;
		border-radius: 3px;
		margin: 0;
		padding: 0 26px 0 4px;
		cursor: pointer; 
		background: url('../assets/arrow-down.svg') no-repeat;
		background-size:12px;
		-webkit-appearance: none; 
		-moz-appearance: none;
		background-position: right 10px center;
		border:1px solid rgb(169,169,169);
		font-size:14px;
		color:black;
	}
	.select:hover {
		border-color: darkslategray;
	}
	.select:focus {
		background: url('../assets/arrow-up.svg') no-repeat right;	
		background-size:12px;
		background-position: right 10px center;
	}
	.select:required:invalid {
	  font-weight:400;
	}
	.select, option {
	  font-weight:600;
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
		margin-right:5px;
		transition: all 0.2s;
		-webkit-transform: perspective(1px) translateZ(0);
		transform: perspective(1px) translateZ(0);
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);
		position: relative;		
	}	
	.button:hover {
		box-shadow: 0px 15px 25px -5px #ddd;
		-webkit-transform: scale(1.02);
		transform: scale(1.02);
	}
	.button:active{
		box-shadow: 0px 3px 5px white;
		-webkit-transform: scale(0.98);
		transform: scale(0.98);
	}
	.key-face {
		cursor:pointer;
	}
	.key-body{
		cursor:pointer;
	}			
</style>