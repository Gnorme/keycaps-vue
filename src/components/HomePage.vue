<template>
	<div>
		<div id="hero" style="padding:25px 0; text-align:center">
			<img src="../assets/fp2-1.jpg" />
		</div>
		<div class="info-section dark">
			<div class="info-container">
				<div class="demo" id="keycap-demo">
					<video muted autoplay style="margin-right:30%">
						<source src="../assets/demo.mp4" type="video/mp4">
					</video>
				</div>
				<div class="info-details right">
					<ul style="list-style: none">
						<li class="info-item">Design your own custom keycaps</li>
						<li class="info-item">Simplified and intuitive design process</li>
						<li class="info-item">Add graphics and position them as you see fit</li>
						<li class="info-item">Add key labels or custom text wherever you want</li>
						<li class="info-item">Create truly unique designs and share them with others</li>
					</ul>
					<div style="padding:20px 15px;">
						<div class="button"><a href="keycap.html">Design a keycap</a></div>
					</div>
				</div>
			</div>
		</div>
		<div class="info-section">
			<div class="info-container">
				<div class="info-details left">
					<ul style="list-style: none">
						<li class="info-item">Design your own custom keycaps</li>
						<li class="info-item">Simplified and intuitive design process</li>
						<li class="info-item">Add graphics and position them as you see fit</li>
						<li class="info-item">Add key labels or custom text wherever you want</li>
						<li class="info-item">Create truly unique designs and share them with others</li>
					</ul>
					<div style="padding:20px 15px;">
							<div class="button"><a href="keyboard.html">Design a keyboard</a></div>
					</div>
				</div>
				<div class="demo" id="keyboard-demo">
					<img src="../assets/keyboard-demo.png" />
				</div>		
			</div>
		</div>
	</div>	
</template>

<script>
	export default {
		name:'HomePage'
	};
</script>

<style scoped>
	.dark {
		background:#f9f9f9;
	}
	.info-container{
		max-width: 1140px;
		width:100%;
		display:flex;
		padding: 25px 15px;
		align-items: center;
		margin-right: auto;
		margin-left:auto;
		flex-grow:1;
	}
	.right {
		margin-left:auto;
	}
	.left {
		margin-right: auto;
	}
	.demo{
		display:inline-block;
		width:50%;
		text-align: center;
	}
	.info-item {
		padding: 10px 5px;
		font-size:18px;
	}
	.info-item:before { 
		content:''; 
		display:inline-block; 
		height:1.3em; 
		width:1.3em; 
		background-image:url('../assets/bullet-key.svg'); 
		background-size:contain; 
		background-repeat:no-repeat; 
		padding-left: 2em; 
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
	a {
		color:inherit;
		text-decoration: none;
	}		
</style>