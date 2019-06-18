<template>
    <div class="product-info">
      <div class="info" >
        <h2>Product Info</h2>
        <div>
          Keycap Material: Dye-sublimation ABS<br><br>

          Compatibility: Fits most Cherry MX keyboards. See our Keycap Compatibility Guide for more information.<br><br>

          Instructions
          <ul id="points" style="list-style: none;">
            <li class="info-item">Select the desired key (make sure to chose the correct row)</li>
            <li class="info-item">Select the color you want</li>
            <li class="info-item">Choose an image from your PC that you'd like printed on the keycap</li>
            <li class="info-item">Resize and/or position the image as you see fit</li>
            <li class="info-item">Optional: Add and position text</li>
            <li class="info-item">Optional: Select a different key-face (front,side, back) and add an image and/or text</li>
            <li class="info-item">Add to cart - <span style="font-style:italic">you can add multiple copies in your cart before you checkout</span></li>
          </ul>       
        </div>
      </div>
    </div>	
</template>

<script>
	export default {
		name: 'KeycapProductInfo'
	};
</script>

<style scoped>
	.product-info {
	  width:100%;
	  background:#efefef;
	}  
	.info {
	  font-size:18px;
	  width:50%;
	  margin: 0 auto;
	  padding: 15px 0 15px 50px;
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
	@media(max-width:1140px) {
		.info {
			width:100%;
			padding: 5px 10px;
		}
		.info-item:before {
			padding-left: 10px;
		}
		#points {
			padding-inline-start: 20px;
		}
	} 
	.info-item {
	  padding: 10px 5px;
	  font-size:18px;
	} 

</style>