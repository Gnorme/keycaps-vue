<template>
	<div v-if="!isMobile()" style="width:100%">
		<div id="hero">
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
	<div v-else>
		<div id="hero">
			<img src="../assets/fp2-1.jpg" />
		</div>
		<div id="info-container-mobile">
			<p style="text-align:justify;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
			</p>
		</div>
		<div id="options">
			<div class="section" style="grid-area:keycap">
				<div class="button"><a href="keycap.html">Design a keycap</a></div>
			</div>	
			<div class="section" style="grid-area:keyboard">
					<div class="button"><a href="keyboard.html">Design a keyboard</a></div>
			</div>
		</div>			
		<div id="gallery" class="gallery-container-mobile">
			Gallery
			<div id="gallery-mobile">
				<img  v-for='image in images' :src="image" class="gallery-section">
			</div>
		</div>
		<div id="contact" class="contact-container-mobile">
			Contact Us
			<input class="form-control" placeholder="Your Name *"></input>
			<input class="form-control" placeholder="Your Email *"></input>
			<input class="form-control" placeholder="Your Phone *"></input>
			<textarea id="message" class="form-control" placeholder="Your Message *"></textarea>
			<button id="submit" type="submit" value="Submit" disabled="disabled">Send Message</button>
		</div>
	</div>

</template>

<script>
	import { DetectMobile } from '../mixins.js'
	export default {
		name:'HomePage',
		mixins:[DetectMobile],
		data: function () {
			return {
				images: ['../img/egg.jpg','../img/egg.jpg','../img/egg.jpg','../img/egg.jpg','../img/egg.jpg','../img/egg.jpg','../img/egg.jpg','../img/egg.jpg']
			}
		}
	};
</script>

<style scoped>
	.dark {
		background:#f9f9f9;
	}
	#message {
		height:250px;
	}
	#submit {
		background-color: #1574cd;
		padding:20px 40px;
		border-radius:3px;
		font-size:14px;
		font-weight:700;
		color:white;
		display:inline-block;
		border: 1px solid transparent;
		margin-top:20px;
		margin-bottom:20px;
	}
	.form-control{
		display:block;
		width:100%;
		height:auto;
		padding:15px 15px;
		margin-top:20px;
		font-size:14px;
		color: #555;
		line-height:1.4;
		background-color: #fff;
		border: 1px solid black;
		border-radius:3px;
		box-sizing:border-box;
	}
	.section {
		justify-content: center;
		align-items: center;
		display:flex;
	}
	.gallery-section{
		display:inline-block;
		padding:10px 10px;
		max-width:350px;
		box-sizing:border-box;
	}
	#options {
		display:grid;
		grid-template-rows:1fr;
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			"keycap keyboard"
	}
	#hero {
		width:100%;
		padding:25px 0; 
		text-align:center;
	}
	#hero img {
		width:auto;
		height:auto;
		max-width:100%;
	}
	.contact-container-mobile {
		text-align:center;
		font-weight:700;
		padding-left:10px;
		padding-right:10px;
		font-size:22px;
		width:100%;
		height:auto;
		margin-top:90px;
		padding-top:20px;
		box-sizing:border-box;
		background:#ddd;
		background-image: url("/img/map-image.png");
	}
	.gallery-container-mobile {
		text-align:center;
		font-weight:700;
		font-size: 22px;
		width:100%;
		height: 350px;
		padding: 30px 15px;
		box-sizing:border-box;
	}
	#gallery-mobile{
		overflow:auto;
		padding-top:5px;
		white-space:nowrap;		
		overflow-y:hidden;
		-webkit-overflow-scrolling: touch;
		width: 100%;
		height:350px;
	}
	#info-container-mobile {
		width:100%;
		margin-top:-30px;
		padding: 7px 15px;
		box-sizing: border-box;
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
		padding:11px 20px;
		font-size:1em;
		box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
		display:inline-block;
		cursor: pointer;
		transition all .3s
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

	a {
		color:inherit;
		text-decoration: none;
	}		
</style>