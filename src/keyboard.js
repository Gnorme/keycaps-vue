import Vue from 'vue/dist/vue.js'
import NavBar from './components/NavBar.vue'
import KeyboardCustomizer from './components/KeyboardCustomizer.vue'
import KeyboardProductInfo from './components/KeyboardProductInfo.vue'

var keyboardViewer = new Vue({
	el:"#keyboard",
	components:{NavBar, KeyboardCustomizer, KeyboardProductInfo},
	data:{
		selectedColor: {name:'white',color:'#ffffff'},
		states:[],
		undone:[],
		currentState:0,
		colors: [
			{name:'black', color:'#1a1a1a'},
			{name:'white',color:'#ffffff'},
			{name:'gray', color:'#d0ccc0'},
			{name:'dark-gray', color:'#96938e'},
			{name:'graphite', color:'#60605b'},
			{name:'charcoal', color:'#373534'},
			{name:'pink', color:'#fbbbc9'},
			{name:'red', color:'#c13828'},
			{name:'maroon', color:'#5f3032'},
			{name:'blue', color:'#5eb1e7'},
			{name:'royal-blue', color:'#0046ad'},	
			{name:'navy', color:'#002e5f'},
			{name:'mint', color:'#8ed7b0'},	
			{name:'green', color:'#1db63a'},
			{name:'olive', color:'#53682b'},	
			{name:'yellow', color:'#f8d615'},	
			{name:'orange', color:'#f67f00'},	
			{name:'graybrown', color:'#766e54'},	
			{name:'brown', color:'#6f4c23'},	
			{name:'purple', color:'#ac97d8'},	
			{name:'aubergine', color:'#43165e'}					
		],
		keyboard:{},
		keyboardOptions: [
			{name:'104-Key Keycap Set', value:'keyboard-104'},
			{name:'87-Key Keycap Set', value:'keyboard-87'},
			{name:'61-Key Keycap Set',value:'keyboard-61'}
		]
	},
    mounted: function () {
    	this.getKeyboard('keyboard-104')    
    },
	methods: {
		getKeyboard: function(name) {
			var self = this;
			fetch('https://us-central1-hotsguide-188315.cloudfunctions.net/function-1?board='+name, {
				headers: {
					"Content-Type": "application/json; charset=utf-8",
				}
			})
			.then(response => response.json())
			.then(data => {
				self.keyboard = data;
				self.states = [JSON.parse(JSON.stringify(self.keyboard.keys))]
			})
			.catch(error => console.error(error));
		},
		uploadKeyboard: function() {
			$.ajax({
			    type: "POST",
			    url: "http://localhost:3000/customKeyboard",
			    processData: false,
			    contentType: 'application/json',			    
			    data: JSON.stringify(this.keyboard.keys),
			    success: function(res) {
					console.log(res)
			    }
			});	
		},
		changeKeyboard: function(ev) {
			document.activeElement.blur();
			this.getKeyboard(ev.target.selectedOptions[0].value)
		},
		updateStates: function() {
			var keys = JSON.parse(JSON.stringify(this.keyboard.keys));
			this.states.push(keys)	
		},
		setColorAll: function() {
			var color = this.selectedColor.color
			for (var key in this.keyboard.keys){
				if (this.keyboard.keys.hasOwnProperty(key)) {
					this.keyboard.keys[key].body.color = this.shadeBlend(-0.25, color)
					this.keyboard.keys[key].face.stroke = this.shadeBlend(0.065, color)	
					this.keyboard.keys[key].face.color = color
				}
			}
			this.updateStates();
		},
		selectColor: function (color) {
			document.querySelector('.kbPicker[data-color="'+this.selectedColor.name+'"]').style.border = '1px solid #d4d4d4'
			document.querySelector('.kbPicker[data-color="'+color.name+'"]').style.border = '2px solid red'
			this.selectedColor = color
			//this.setColor(color.color)
		},
		setColor: function (target) {
			var color = this.selectedColor.color
			var key = target.getAttribute('name')
			this.keyboard.keys[key].body.color = this.shadeBlend(-0.25, color)
			this.keyboard.keys[key].face.stroke = this.shadeBlend(0.065, color)	
			this.keyboard.keys[key].face.color = color
			this.updateStates();	
		},
		undoChange: function () {
			if (this.states.length > 1){
				this.undone.push(this.states.pop())
				this.keyboard.keys = JSON.parse(JSON.stringify(this.states[this.states.length - 1]));
				console.log("Undo")
			}
		},
		redoChange: function() {
			if (this.undone.length > 0){
				var length = this.states.push(this.undone.pop());
				this.keyboard.keys = JSON.parse(JSON.stringify(this.states[length - 1]));
				console.log("Redo")				
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
		}
	}	
})

document.body.addEventListener('click', function(e) {
    var target = e.target;
    if (target.className){
		if (target.classList.contains('key-face')) {
			keyboardViewer.setColor(target)
		}   	
    }
    e.stopPropagation()
});