import Vue from 'vue/dist/vue.js'
import KeyCustomizer from './components/KeyCustomizer.vue'
import KeySelector from './components/KeySelector.vue'
import NavBar from './components/NavBar.vue'
import KeycapProductInfo from './components/KeycapProductInfo'

Vue.config.productionTip = false

var customKey = new Vue({
  el:'#app',
  components:{KeyCustomizer, KeySelector, NavBar, KeycapProductInfo},
	data: {
		currentView:'topView',
		selectedColor: {name:'white',color:'#ffffff'},
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
		viewOptions: [
			{name:'Top',value:'topView'},
			{name:'Front',value:'frontView'},
			{name:'Left side',value:'leftView'},
			{name:'Right side',value:'rightView'},
			{name:'Back',value:'backView'}        
		],
		surfaces: {
			topView:{preview:'',img:{x:'20',y:'16', width:'80', height:'80',value:'', filename:''},text:{x:'25',y:'15',value:''}},
			frontView:{preview:'',img:{x:'50',y:'120',width:'80', height:'80', value:'', filename:''},text:{x:'50',y:'120',value:''}},
			leftView:{preview:'',img:{x:'50',y:'120',width:'80', height:'80',value:'', filename:''},text:{x:'50',y:'120',value:''}},
			rightView:{preview:'',img:{x:'50',y:'120',width:'80', height:'80',value:'', filename:''},text:{x:'50',y:'120',value:''}},
			backView:{preview:'',img:{x:'50',y:'120',width:'80', height:'80',value:'', filename:''},text:{x:'50',y:'120',value:''}}         
		},
		keys:{},
		selectedKey:{
			type:"square",
			sides:{
				"topView":{"body":{"x":0,"y":0,"width":39,"height":39,"rx":2,"ry":2},"face":{"x":5.5,"y":3,"width":28,"height":31,"rx":4,"ry":4},"viewbox":"0 0 39 39"},
				"frontView":{"path":"M37 29.5C35.31 19.71 34.25 13.6 33.83 11.15C33.71 10.45 33.21 9.86 32.53 9.63C32.44 9.6 32.98 9.78 32.81 9.73C32.33 9.56 31.82 9.53 31.32 9.64C30.5 9.82 30.48 9.82 30.08 9.91C28.18 10.33 26.25 10.6 24.31 10.73C23.35 10.79 24.23 10.73 23.48 10.78C20.83 10.95 18.17 10.94 15.52 10.73C14.52 10.66 14.01 10.62 12.64 10.51C11.24 10.4 9.84 10.18 8.47 9.85C8.16 9.78 7.85 9.7 7.18 9.54C7 9.5 6.81 9.49 6.62 9.52C6.41 9.55 6.59 9.52 6.51 9.53C5.96 9.61 5.52 10.04 5.42 10.58C4.97 13.11 3.83 19.41 2 29.5L37 29.5Z", "restrict":{"height":17,"width":27,"x":6,"y":12}},
				"leftView":{"path":"M2 29.89L37 30L30.75 10L3.77 14.33L2 29.89Z", "restrict":{"height":14,"width":26,"x":6,"y":15}},
				"rightView":{"path":"M36.94 29.89L1.94 30L8.18 10L35.16 14.33L36.94 29.89Z", "restrict":{"height":14,"width":26,"x":8,"y":15}},
				"backView":{"path":"M37 27.5C35.31 19.68 34.25 14.8 33.83 12.84C33.71 12.27 33.27 11.81 32.71 11.65C32.58 11.62 32.88 11.7 32.69 11.65C32.29 11.54 31.86 11.52 31.45 11.59C30.6 11.74 30.09 11.83 29.6 11.91C29.6 11.91 24.82 12.45 24.82 12.45C23.76 12.51 23.67 12.51 22.79 12.56C22.79 12.56 16.22 12.53 16.22 12.53C15.08 12.46 13.72 12.38 12.27 12.29C12.27 12.29 8.82 11.85 8.82 11.85C8.44 11.77 7.81 11.65 7.13 11.52C6.98 11.49 6.82 11.49 6.67 11.51C6.45 11.53 6.46 11.53 6.35 11.54C5.9 11.6 5.52 11.93 5.42 12.38C4.96 14.4 3.82 19.44 2 27.5L37 27.5Z", "restrict":{"height":14,"width":27,"x":6,"y":13}}    
		  }
		},
		sides:{},
		active:false,
		mainStyle:{
			pointerEvents:'none',
			opacity:0.3
		}
	},
  computed: {
    transformText () {
      return {transform: 'translate(' + this.surfaces[this.currentView].text.x + 'px,' + this.surfaces[this.currentView].text.y + 'px)',fontSize:'26px'}
    },
    transformImg () {
      return {transform: 'translate(' + this.surfaces[this.currentView].img.x + 'px,' + this.surfaces[this.currentView].img.y + 'px)'}        
    }
  },
    mounted: function () {
      var self = this;
      fetch('https://us-central1-hotsguide-188315.cloudfunctions.net/function-1?board=keyboard-104&sides=true', {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        }
      })
      .then(response => response.json())
      .then(data => {
        self.keys = data.keys;
        self.sides = data.sides
      })
      .catch(error => console.error(error));
    // $.ajax({
    //  url: 'https://us-central1-hotsguide-188315.cloudfunctions.net/function-1',  //read comments in search.php for more information usage
    //  type: 'GET',
    //  data: {board: 'keyboard-61', sides:true},
    //  dataType: 'json',
    //  success: function(json) {
    //    self.keys = json.keys;
    //    self.sides = json.sides;
    //  }
    // });      
    },  
  methods: {
    addToCart: function() {
      var self = this
      this.generatePreviews().then(function (){
        var key = {name:self.selectedKey.name, color:self.selectedColor.color,surfaces:self.surfaces, price:1000}     

        var cartItems = JSON.parse(sessionStorage.getItem('customKeycaps')) || []
        console.log(cartItems)
        cartItems.push(key)
        sessionStorage.setItem('customKeycaps', JSON.stringify(cartItems))

        var cartLink = document.getElementById('cartLink')
        var itemsSpan = cartLink.getElementsByTagName('span')[0]
        if (itemsSpan) {
          itemsSpan.innerHTML = ' ('+cartItems.length+')'
        } else {
          itemsSpan = document.createElement('span')
          itemsSpan.innerHTML = ' ('+cartItems.length+')'
          itemsSpan.setAttribute('style','color:blue;')
          cartLink.appendChild(itemsSpan)           
        }
      })
    },
    setColor: function(color) {
      document.querySelector('.keyPicker[data-color="'+this.selectedColor.name+'"]').style.removeProperty('border')
      document.querySelector('.keyPicker[data-color="'+color.name+'"]').style.border = '2px solid red'
      this.selectedColor = color
    },      
    changeView: function(ev) {
    	console.log(ev)
      document.activeElement.blur();
      this.currentView = ev.target.selectedOptions[0].value
      var fileInput = document.querySelector('input[type=file]')
      //var textInput = document.querySelector('input[type=text]')
      if (this.surfaces[this.currentView].img.filename == ''){
        fileInput.value = ''
        if(!/safari/i.test(navigator.userAgent)){
          fileInput.type = ''
          fileInput.type = 'file'
        }
      }
      //textInput.value = this.surfaces[this.currentView].text.value
      this.updateSnapPoints()
    },
    updateSnapPoints: function () {
      Vue.nextTick(function () {
       	var surface = document.querySelector('.restrictRect').getBoundingClientRect()
        var imgWidth = document.querySelector('.moveableImg').width
        var textWidth = document.querySelector('.moveableText').style.width
        var textHeight = document.querySelector('.moveableText').style.height

        interact('.moveableText').options.drag.snap.targets = calcSnapTargets(surface,textWidth,textHeight)
        interact('.moveableText').options.drag.restrict.restriction = {
          x:surface.x,
          y:surface.y,
          width:surface.width,
          height:surface.height         
        }

        interact('.moveableImg').options.drag.snap.targets = calcSnapTargets(surface,imgWidth,imgWidth)
        interact('.moveableImg').options.drag.restrict.restriction = {
          x:surface.x,
          y:surface.y,
          width:surface.width,
          height:surface.height         
        }
      })
    },
    changeKey: function(name) {
        var prevKey = this.selectedKey.name
        var color = '#ffffff'
        var keyType = JSON.parse(JSON.stringify(this.keys[name].type))
        if (!this.active) {
          this.active = true
          this.mainStyle.pointerEvents = 'auto'
          this.mainStyle.opacity = 1
          Vue.nextTick(function () {
            addInteractive()
          })
        }
        if (prevKey){
          this.keys[prevKey].body.color = '#0f0f0f'
          this.keys[prevKey].face.stroke = '#272727'  
          this.keys[prevKey].face.color = '#1a1a1a'           
        }

        this.selectedKey.sides = this.sides[keyType]
        this.selectedKey.type = keyType
        this.selectedKey.name = name

        this.keys[name].body.color = this.shadeBlend(-0.25, color)
        this.keys[name].face.stroke = this.shadeBlend(0.065, color) 
        this.keys[name].face.color = color

        //this.selectedKey.topView.viewbox = "0 0 " + this.selectedKey.topView.body.width + " " + this.selectedKey.topView.body.height
        this.updateSnapPoints()
    },
    updateText: function(text) {
      this.surfaces[this.currentView].text.value = text
      surface = document.querySelector('.restrictRect').getBoundingClientRect()
      var newWidth = document.querySelector('.moveableText').style.width
      var newHeight = document.querySelector('.moveableText').style.height
      interact('.moveableText').options.drag.snap.targets = calcSnapTargets(surface, newWidth, newHeight)
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
    // ugly, must be a better way
    generatePreviews: function() {
      var svgns = "http://www.w3.org/2000/svg"
      var allSides = []
      for (var surface in this.surfaces) {
        var self = this
        var promise = new Promise(function(resolve, reject) {
          var newSvg = document.createElementNS(svgns, "svg");
          newSvg.setAttribute('width', 260)
          newSvg.setAttribute('height', 210)
          newSvg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
          newSvg.setAttribute('viewBox', self.selectedKey.sides.topView.viewbox)          
          if (surface == 'topView'){        
            var body = document.createElementNS(svgns, 'rect');
            body.setAttribute('class','keySurface')
            body.setAttribute('x', self.selectedKey.sides.topView.body.x)
            body.setAttribute('y',self.selectedKey.sides.topView.body.y)
            body.setAttribute('width',self.selectedKey.sides.topView.body.width)
            body.setAttribute('height',self.selectedKey.sides.topView.body.height)
            body.setAttribute('rx',self.selectedKey.sides.topView.body.rx)
            body.setAttribute('ry',self.selectedKey.sides.topView.body.ry)
            body.setAttribute('fill',self.shadeBlend(-0.2,self.selectedColor.color))

            var face = document.createElementNS(svgns, 'rect');
            face.setAttribute('class','restrictRect')
            face.setAttribute('x', self.selectedKey.sides.topView.face.x)
            face.setAttribute('y',self.selectedKey.sides.topView.face.y)
            face.setAttribute('width',self.selectedKey.sides.topView.face.width)
            face.setAttribute('height',self.selectedKey.sides.topView.face.height)
            face.setAttribute('rx',self.selectedKey.sides.topView.face.rx)
            face.setAttribute('ry',self.selectedKey.sides.topView.face.ry)
            face.setAttribute('fill',self.selectedColor.color)
            face.setAttribute('stroke',self.shadeBlend(0.065,self.selectedColor.color))
            face.setAttribute('stroke-width','1px')

            newSvg.appendChild(body)
            newSvg.appendChild(face)
          } else {
            var path = document.createElementNS(svgns, 'path')
            path.setAttribute('stroke-width','0.5px')
            path.setAttribute('stroke',self.shadeBlend(-0.2,self.selectedColor.color))
            path.setAttribute('fill',self.selectedColor.color)
            path.setAttribute('class','keySurface')
            path.setAttribute('d',self.selectedKey.sides[surface].path)

            newSvg.appendChild(path)
          }
          
          if (self.surfaces[surface].img.value != '' || self.surfaces[surface].text.value != ''){
            var img = new Image()
            img.width = self.surfaces[surface].img.width
            img.height = self.surfaces[surface].img.height
            img.src = self.surfaces[surface].img.value
            var thisSurface = surface
            img.onload = function () {
              var svg_xml = (new XMLSerializer()).serializeToString(newSvg);
              canvg('canvas', svg_xml, {useCORS: true});
              var context = canvas.getContext('2d');
              console.log(img.width)
              console.log(img.height)             
              context.drawImage(img, self.surfaces[thisSurface].img.x, self.surfaces[thisSurface].img.y, self.surfaces[thisSurface].img.width,self.surfaces[thisSurface].img.height);
              self.surfaces[thisSurface].preview = canvas.toDataURL('image/png')
              resolve()
            }
            
            //console.log(this.surfaces[surface].img)
            //var img = document.getElementsByClassName('moveableImg')[0]
          } else {
            var svg_xml = (new XMLSerializer()).serializeToString(newSvg);
            canvg('canvas', svg_xml, {useCORS: true});            
            self.surfaces[surface].preview = canvas.toDataURL('image/png')
            resolve()
          }         
        })
        allSides.push(promise)
      }
      return Promise.all(allSides)
    },
    previewImg: function() {
      var file = document.querySelector('input[type=file]').files[0]; //sames as here
      var label = document.querySelector( '.inputfile' ).nextElementSibling
      var target = this.surfaces[this.currentView].img
      var reader  = new FileReader();
      var surface = document.querySelector('.restrictRect').getBoundingClientRect()

      var width = document.querySelector('.moveableImg').width

      reader.onloadend = function () {
        target.value = reader.result
        Vue.nextTick(function () {
          var image = document.querySelector('#keyImage')
          image.onload = function() {
            target.width = image.width
            target.height = image.height
          }
        })        
      }
      
      if (file) {
        target.filename = file.name
        reader.readAsDataURL(file); //reads the data as a URL   
        interact('.moveableImg').options.drag.snap.targets = calcSnapTargets(surface,width,width)
      } else {
        target.value = "";
      }       
    }             
  }	  
}).$mount('#app')


function calcSnapTargets(surface, width, height){
  var left = surface.left+(width / 2)
  var center = surface.left + (surface.width / 2)
  var right = surface.left + surface.width - (width / 2)
  var top = surface.top + (height / 2)
  var middle = surface.top + (surface.height / 2)
  var bottom = surface.top + surface.height - (height / 2)
  var snapTargets = [
    {x:left, y:top},
    {x:center,y:top},
    {x:right,y:top},
    {x:left, y:middle},
    {x:center,y:middle},
    {x:right,y:middle},
    {x:left, y:bottom},
    {x:center,y:bottom},
    {x:right,y:bottom},     
  ]
  return snapTargets    
}

function dragMoveListener (event) {
  var target = event.target
  if (target.className == "moveableImg"){
    var node = customKey.surfaces[customKey.currentView].img
  } else if (target.className == "moveableText") {
    var node = customKey.surfaces[customKey.currentView].text
  }

  node.x = (parseFloat(node.x) || 0) + event.dx,
  node.y = (parseFloat(node.y) || 0) + event.dy;
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener; 

function addInteractive() {
  var surface = document.querySelector('.restrictRect').getBoundingClientRect()
  interact('.moveableText')
    .draggable({
      onmove: window.dragMoveListener,
      snap: {
        targets: [{}],
        range:20,
          relativePoints: [
            //{ x: 0  , y: 0   }  // snap relative to the element's top-left,
            { x: 0.5, y: 0.5 }   // to the center
            // { x: 1  , y: 1   }    // and to the bottom-right
          ]     
      },
      restrict: {
        restriction: {
          x:surface.x,
          y:surface.y,
          width:surface.width,
          height:surface.height
        },
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      },
    })  
  interact('.moveableImg')
    .draggable({
      onmove: window.dragMoveListener,
      snap: {
        targets: [{}],
        range:10,
          relativePoints: [
            //{ x: 0  , y: 0   }  // snap relative to the element's top-left,
            { x: 0.5, y: 0.5 }   // to the center
            // { x: 1  , y: 1   }    // and to the bottom-right
          ]     
      },
      restrict: {
        restriction: {
          x:surface.left,
          y:surface.top,
          width:surface.width,
          height:surface.height
        },
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      },
    })
    .resizable({
      // resize from all edges and corners
      edges: {right: '.resize-corner', bottom: '.resize-corner', left: false, top:false},
      // keep the edges inside the parent
      preserveAspectRatio:true,
      restrictEdges: {
        outer:{
            x:surface.x,
            y:surface.y,
            width:surface.width,
            height:surface.height
          },
      },

      // minimum size
      restrictSize: {
        min: { width: 50, height: 50 }
      },
      inertia: false,
    })
    .on('resizemove', function (event) {
      var target = event.target
      //target.style.height = event.rect.height + 'px'
      if (event.rect.height < surface.height) {
        target.style.width = event.rect.width + 'px'
      } else {
        target.style.width = ((target.clientWidth / target.clientHeight) * surface.height) + 'px'
      }
      

  
      customKey.surfaces[customKey.currentView].img.width = target.clientWidth
      //ugly hack, can't figure out how to shrink div to image size properly. Tried css tricks eg inline-block, float, table, 
      customKey.surfaces[customKey.currentView].img.height = target.clientHeight - 5

      interact('.moveableImg').options.drag.snap.targets = calcSnapTargets(surface, event.rect.width, event.rect.height)    
      //placeImage()
    });
}

document.body.addEventListener('click', function(e) {
    var target = e.target;
    if (target.className){
    if (target.classList.contains('key-face')) {
      customKey.changeKey(target.getAttribute('name'))
    }     
    }
    e.stopPropagation()
}); 