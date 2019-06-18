<template>
	<div id="navbar">
		<div v-if="!isMobile()" id="navbar-container">
			<div id="logo">L O G O</div>
			<div id="link-container">
				<ul id="navbar-links">
					<li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
					<li class="nav-item">
						<a class="nav-link">Products</a>
						<ul class="dropdown">
							<li class="dropdown-item"><a href="keycap.html">Single custom keycap</a></li>
							<li class="dropdown-item"><a href="keyboard.html">Custom keycap set</a></li>
						</ul>
					</li>
					<li class="nav-item"><a class="nav-link" href="gallery.html">Gallery</a></li>
					<li class="nav-item"><a class="nav-link" href="support.html">Support</a></li>
					<li class="nav-item"><a id="cartLink" href="cart.html" class="nav-link">View Cart <span v-if='itemsInCart > 0' style="color:blue">({{ itemsInCart }})</span></a></li>
				</ul>
			</div>
		</div>
		<div v-else id="navbar-container-mobile">
			<div id="logo"><a href="/">L O G O</a></div>
			<template v-if="isHome()">
				<a href="cart.html">Cart</a>
				<a href="#contact">Contact</a>
				<a href="#gallery">Gallery</a>
			</template>
			<template v-else>
				<a href="cart.html">Cart</a>
				<a href="support.html">Contact</a>
				<a href="gallery.html">Gallery</a>				
			</template>
			<div id="nav-hamburger">
				<svg height="100%" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
			</div>
		</div>
	</div>	
</template>

<script>
	import { DetectMobile, DetectHome } from '../mixins.js'
	export default {
		name:'NavBar',
		mixins: [DetectMobile, DetectHome],
		computed: {
			itemsInCart () {
				var items = JSON.parse(sessionStorage.getItem('customKeycaps')) || 0
				if (items != 0) {
					return items.length
				} else {
					return items
				}
			}
		}
	};
</script>

<style scoped>
	#navbar {
		width:100%;
		display:block;
		
	}
	#navbar-container-mobile {
		width:100%;
		overflow:hidden;
	}
	#navbar-container-mobile a {
		float:right;
		display:block;
		text-align:center;
		padding:7px 8px;
		text-decoration:none;
		font-size:16px;
	}
	#nav-hamburger {
		float:right;
		display:none;
		width:8%;
	}
	#navbar-container{
		max-width: 1140px;
		width:100%;
		display:flex;
		align-items: center;
		padding-right:15px;
		padding-left:15px;
		margin-right: auto;
		margin-left:auto;
	}
	#link-container {
		display:flex;
		flex-grow:1;
		flex-basis: auto;
		padding:0.5rem 1rem;
	}
	#navbar-links {
		flex-direction: row;
		margin-left: auto;
		display:flex;
		list-style:none;
	}
	.nav-link {
		padding: 20px 15px;
	}
	#logo {
		display:inline-block;
		float:left;
		height: auto;
	}
	.nav-item {
		padding-left:12px;
	}
	.nav-item:hover {
		background-image:url('../assets/bullet-key.svg'); 
		background-size:contain; 
		background-repeat:no-repeat; 	
	}
	.nav-item,
	.dropdown-item {
		background-color:white;
		display: block;
		position: relative;
		transition-duration: 0.5s;
	}
	.nav-item,
	.dropdown-item:hover {
		background-color:white;
		cursor:pointer;
	}
	.dropdown-item:hover {
		cursor:pointer;
		background-color:#c7e2f8;
	}
	.dropdown {
		visibility: hidden;
		opacity: 0;
		min-width: 10rem;
		position: absolute;
		transition: all 0.5s ease;
		margin-top: 1rem;
		left: 0;
		display: none;
		padding:0;
		margin:0;
		background-color:white;
	}
	ul li:hover > ul,
	ul li ul:hover  {
		visibility: visible;
		opacity: 1;
		display:block;
	}
	ul li ul li {
		padding:1rem;
		border-bottom:1px solid rgba(0,0,0,0.2);
		clear: both;
		width: 100%;
	}
	a {
		color:inherit;
		text-decoration: none;
	}		
</style>