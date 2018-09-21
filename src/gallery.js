import Vue from 'vue/dist/vue.js'
import NavBar from './components/NavBar.vue'
import Gallery from './components/Gallery.vue'

new Vue({
	el:"#gallery",
	components:{NavBar,Gallery},
	data: {
		images:['../img/egg.jpg','../img/egg.jpg','../img/egg.jpg','../img/egg.jpg','../img/egg.jpg','../img/egg.jpg','../img/egg.jpg','../img/egg.jpg']
	}
})