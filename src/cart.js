import Vue from 'vue/dist/vue.js'
import NavBar from './components/NavBar.vue'
import Cart from './components/Cart.vue'
import Shipping from './components/Shipping.vue'

new Vue({
	el:'#cart',
	components:{NavBar,Cart,Shipping},
	data:{
		products: [],
		shipping:0
	},
	computed: {
		productsTotal: function () {
			var productTotal = 0
			for (var i = 0; i < this.products.length; i++) {
				 productTotal += this.products[i].price
			}
			return productTotal
		},
		tax: function () {
			return this.productsTotal * 0.14
		},
		total: function () {
			console.log(this.productsTotal)
			console.log(this.shipping)
			console.log(this.tax)
			return this.productsTotal + this.shipping + this.tax
		}
	},
	mounted: function () {
		this.products = JSON.parse(sessionStorage.getItem('customKeycaps')) || [];
		console.log(JSON.parse(sessionStorage.getItem('customKeycaps')))
	},
	methods: {
		stringify: function(value) {
			return "$" + (this[value] / 100).toFixed(2)
		},
		removeItem: function(index) {
			this.products.splice(index, 1)
			sessionStorage.setItem('customKeycaps', JSON.stringify(this.products))

			var cartLink = document.getElementById('cartLink')
			var itemsSpan = cartLink.getElementsByTagName('span')[0]
			if (itemsSpan) {
				itemsSpan.innerHTML = ' ('+this.products.length+')'
			} else {
				itemsSpan = document.createElement('span')
				itemsSpan.innerHTML = ' ('+cartItems.length+')'
				itemsSpan.setAttribute('style','color:blue;')
				cartLink.appendChild(itemsSpan)						
			}			
		},
		checkout: function(e) {
			var self = this
			console.log(self.total)
			if (this.shipping <= 0) {
				console.log('Calculate shipping')
			} else {
				handler.open({
					name: 'Custom Keycaps',
					description: '2 custom printer keycaps',
					zipCode: true,
					amount: self.total,
					billingAddress: true,
					shippingAddress:true
				});
				e.preventDefault();					
			}
		},
		shadeBlend: function(p,c0,c1) {
		    var n=p<0?p*-1:p,u=Math.round,w=parseInt;
		    if(c0.length>7){
		        var f=c0.split(","),t=(c1?c1:p<0?"rgb(0,0,0)":"rgb(255,255,255)").split(","),R=w(f[0].slice(4)),G=w(f[1]),B=w(f[2]);
		        return "rgb("+(u((w(t[0].slice(4))-R)*n)+R)+","+(u((w(t[1])-G)*n)+G)+","+(u((w(t[2])-B)*n)+B)+")"
		    }else{
		        var f=w(c0.slice(1),16),t=w((c1?c1:p<0?"#000000":"#FFFFFF").slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF;
		        return "#"+(0x1000000+(u(((t>>16)-R1)*n)+R1)*0x10000+(u(((t>>8&0x00FF)-G1)*n)+G1)*0x100+(u(((t&0x0000FF)-B1)*n)+B1)).toString(16).slice(1)
		    }
		},		
	}	
})

var handler = StripeCheckout.configure({
	key: 'pk_test_eLeDzlRBpa1Dao11EMQGl757',
	image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
	locale: 'auto',
	token: function(token, args) {
		console.log(token.id)
		console.log(args)
	// You can access the token ID with `token.id`.
	// Get the token ID to your server-side code for use.
	}
});

// Close Checkout on page navigation:
window.addEventListener('popstate', function() {
	handler.close();
});