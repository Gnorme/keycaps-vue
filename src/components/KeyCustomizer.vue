<template>
	<div id="keyViewer" class="product" :style="mainStyle">
		<select class="select" id="chooseView" v-on:change="changeView">
			<option v-for='option in viewOptions' :value="option.value">
				{{ option.name }}
			</option>
		</select>		
		<div class="surface">
			<div class="moveableText" :style="transformText"> {{ text }} </div>
			<div class="moveableImg" :style="transformImg">
				<img v-if="img == ''" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" width='0' height='0'/>
				<img  v-else id="keyImage" :src="img" style="height:100%; width:100%"/>
				<div class="resize-corner">
					<img src="../assets/resize.png" style="width:100%;height:100%" />
				</div>
			</div>
			<template v-if="currentView === 'topView'">				
				<svg width="280" height="210" preserveAspectRatio="xMidYMid meet" :viewBox="selectedKey.sides.topView.viewbox">
					<rect class="keySurface" :x="selectedKey.sides.topView.body.x" :y="selectedKey.sides.topView.body.y" :width="selectedKey.sides.topView.body.width" :height="selectedKey.sides.topView.body.height" :rx="selectedKey.sides.topView.body.rx" :ry="selectedKey.sides.topView.body.ry" :fill="backgroundColor"/>
					<rect class="restrictRect" :x="selectedKey.sides.topView.face.x" :y="selectedKey.sides.topView.face.y" :width="selectedKey.sides.topView.face.width" :height="selectedKey.sides.topView.face.height" :rx="selectedKey.sides.topView.face.rx" :ry="selectedKey.sides.topView.face.ry" :fill="color" :stroke="strokeColor" stroke-width="1px" />				
				</svg>
			</template>					
			<template v-else>	
				<svg width="280" height="210" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" :viewBox="selectedKey.sides.topView.viewbox">
					<path stroke-width="1" :stroke="backgroundColor" :fill="color" class="keySurface" :d="selectedKey.sides[currentView].path" vector-effect="non-scaling-stroke"/>
					<rect class="restrictRect" fill-opacity="0" :height="selectedKey.sides[currentView].restrict.height" stroke-opacity="0" :width="selectedKey.sides[currentView].restrict.width" :x="selectedKey.sides[currentView].restrict.x" :y="selectedKey.sides[currentView].restrict.y"/>
				</svg>						
			</template>	
		</div>
		<div class="colorPicker" id="keyColorPicker">
			<div id="color-container">
				<div v-for='color in colors' class="colorChoice keyPicker" :data-color="color.name" v-bind:style="{'background-color':color.color}" v-on:click="setColor(color)"></div>
			</div>
		</div>
		<div id="fileSelect">
			<input type="file" name="imgUpload" id="imgUpload" class="inputfile" v-on:change="onChange" accept=".jpg, .jpeg, .png"/>
			<label for="imgUpload">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
					<path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/>	
				</svg> 
				<span v-if="filename.length > 0" style="font-family:Lato">{{ filename }}</span>
				<span v-else>Choose image&hellip;</span>
			</label>
		</div>	
	</div>
</template>

<script>
	export default {
		name:'KeyCustomizer',
		props: {
			img: String,
			text: String,
			currentView: String,
			transformText: Object,
			transformImg: Object,
			color: String,
			backgroundColor: String,
			strokeColor: String,
			selectedKey: Object,
			setColor: Function,
			colors: Array,
			onChange: Function,
			filename:String,
			changeView: Function,
			viewOptions:Array,
			mainStyle:Object
		},
	};
</script>

<style>
	.product {
		grid-area:product;
		margin-left: 50px;
		display:flex;
		align-items: center;
	}   
	#keyViewer {
		display:flex;
		flex-direction:column;
		align-items: center;
		width:280px;
	}	
	.moveableImg{
		color: white;
		width:80px;
		height:auto;
		display:table;
		position:absolute;
		/* This makes things *much* easier */
		box-sizing: border-box;
	}
	.moveableImg:hover .resize-corner {
		opacity: 1;
	}
	.resize-corner{
		width:16px;
		height:16px;
		padding-left:8px;
		padding-top:8px;
		right:0;
		bottom:-8px;
		position:absolute;
		opacity: 0;
		transition: opacity 0.5s;
	}	
	.surface{
		padding-top:10px;
		padding-bottom:15px;
		touch-action:none;
	}
	.inputfile {
		width: 0.1px;
		height: 0.1px;
		opacity: 0;
		overflow: hidden;
		position: absolute;
		z-index: -1;
	}
	.inputfile + label {
	    max-width: 80%;
	    font-size: 1.1rem;
	    /* 20px */
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    cursor: pointer;
	    display: inline-block;
	    overflow: hidden;
	    padding-top:0.625rem;
	    padding-bottom:0.625rem;
	    padding-left:1rem;
	    padding-right:1.5rem;
	    /*color: #f1e5e6;
	    background-color: #d3394c;*/
	    /* 10px 20px */
	}
	.inputfile:focus + label,
	.inputfile.has-focus + label {
	    outline: 1px dotted #000;
	    outline: -webkit-focus-ring-color auto 5px;
	    text-decoration: underline;
	    /*background-color: #722040;*/
	}
	.inputfile + label:hover {
	    /*background-color: #722040;*/
	    text-decoration: underline;
	}
	.inputfile + label svg {
	    width: 1em;
	    height: 1em;
	    vertical-align: middle;
	    fill: currentColor;
	    margin-top: -0.25em;
	    /* 4px */
	    margin-right: 0.25em;
	    /* 4px */
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
	#color-container {
		display:inline-flex;
		flex-flow: row wrap;
		padding-left:10px;
		justify-content:space-between;
		margin:auto;
	}
	.colorChoice{
		border:1px solid #d4d4d4;
		margin:3px;
		box-sizing: border-box;
		height:27px;
		width:27px;
	}
	.colorChoice:hover {
		border:1px solid black;
	}
	.colorPicker{
		width:260px;
		padding-bottom:10px;
	}		
</style>