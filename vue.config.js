module.exports = {
	pages: {
		index: {
			entry: 'src/main.js',
			template: 'public/index.html',
			filename: 'index.html',
			title:'Index Page',
			chunks: ['chunk-vendors', 'chunk-common', 'index']
		},
		keycap: {
			entry: 'src/keycap.js',
			template:'public/keycap.html',
			filename: 'keycap.html',
			title:'Custom Keycap',
			chunks: ['chunk-vendors', 'chunk-common', 'keycap']
		},
		keyboard: {
			entry: 'src/keyboard.js',
			template: 'public/keyboard.html',
			filename :'keyboard.html',
			title:'Custom Keyboard Set',
			chunks: ['chunk-vendors', 'chunk-common', 'keyboard']
		},
		gallery: {
			entry: 'src/gallery.js',
			template:'public/gallery.html',
			filename:'gallery.html',
			title:'Gallery',
			chunks: ['chunk-vendors', 'chunk-common', 'gallery']
		},
		cart: {
			entry: 'src/cart.js',
			template:'public/cart.html',
			filename:'cart.html',
			title:'Cart',
			chunks: ['chunk-vendors', 'chunk-common', 'cart']			
		}
	}
}