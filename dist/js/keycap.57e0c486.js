(function(e){function t(t){for(var r,o,n=t[0],c=t[1],l=t[2],u=0,h=[];u<n.length;u++)o=n[u],s[o]&&h.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(h.length)h.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],r=!0,n=1;n<i.length;n++){var c=i[n];0!==s[c]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=i[0]))}return e}var r={},s={keycap:0},a=[];function o(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=r,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(i,r,function(t){return e[t]}.bind(null,r));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=t,n=n.slice();for(var l=0;l<n.length;l++)t(n[l]);var d=c;a.push([3,"chunk-vendors"]),i()})({"159e":function(e,t,i){"use strict";i.r(t);i("6b54"),i("28a5"),i("7f7f"),i("ac6a"),i("cadf"),i("551c"),i("097d");var r=i("ba4c"),s=i.n(r),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"product",style:e.mainStyle,attrs:{id:"keyViewer"}},[i("select",{staticClass:"select",attrs:{id:"chooseView"},on:{change:e.changeView}},e._l(e.viewOptions,function(t){return i("option",{domProps:{value:t.value}},[e._v("\n\t\t\t"+e._s(t.name)+"\n\t\t")])})),i("div",{staticClass:"surface"},[i("div",{staticClass:"moveableText",style:e.transformText},[e._v(" "+e._s(e.text)+" ")]),i("div",{staticClass:"moveableImg",style:e.transformImg},[""==e.img?i("img",{attrs:{src:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",width:"0",height:"0"}}):i("img",{staticStyle:{height:"100%",width:"100%"},attrs:{id:"keyImage",src:e.img}}),e._m(0)]),"topView"===e.currentView?[i("svg",{attrs:{width:"260",height:"210",preserveAspectRatio:"xMidYMid meet",viewBox:e.selectedKey.sides.topView.viewbox}},[i("rect",{staticClass:"keySurface",attrs:{x:e.selectedKey.sides.topView.body.x,y:e.selectedKey.sides.topView.body.y,width:e.selectedKey.sides.topView.body.width,height:e.selectedKey.sides.topView.body.height,rx:e.selectedKey.sides.topView.body.rx,ry:e.selectedKey.sides.topView.body.ry,fill:e.backgroundColor}}),i("rect",{staticClass:"restrictRect",attrs:{x:e.selectedKey.sides.topView.face.x,y:e.selectedKey.sides.topView.face.y,width:e.selectedKey.sides.topView.face.width,height:e.selectedKey.sides.topView.face.height,rx:e.selectedKey.sides.topView.face.rx,ry:e.selectedKey.sides.topView.face.ry,fill:e.color,stroke:e.strokeColor,"stroke-width":"1px"}})])]:[i("svg",{attrs:{width:"260",height:"210",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg",viewBox:e.selectedKey.sides.topView.viewbox}},[i("path",{staticClass:"keySurface",attrs:{"stroke-width":"1",stroke:e.backgroundColor,fill:e.color,d:e.selectedKey.sides[e.currentView].path,"vector-effect":"non-scaling-stroke"}}),i("rect",{staticClass:"restrictRect",attrs:{"fill-opacity":"0",height:e.selectedKey.sides[e.currentView].restrict.height,"stroke-opacity":"0",width:e.selectedKey.sides[e.currentView].restrict.width,x:e.selectedKey.sides[e.currentView].restrict.x,y:e.selectedKey.sides[e.currentView].restrict.y}})])]],2),i("div",{staticClass:"colorPicker",attrs:{id:"keyColorPicker"}},[i("div",{attrs:{id:"color-container"}},e._l(e.colors,function(t){return i("div",{staticClass:"colorChoice keyPicker",style:{"background-color":t.color},attrs:{"data-color":t.name},on:{click:function(i){e.setColor(t)}}})}))]),i("div",{attrs:{id:"fileSelect"}},[i("input",{staticClass:"inputfile",attrs:{type:"file",name:"imgUpload",id:"imgUpload",accept:".jpg, .jpeg, .png"},on:{change:e.onChange}}),i("label",{attrs:{for:"imgUpload"}},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",viewBox:"0 0 20 17"}},[i("path",{attrs:{d:"M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"}})]),e.filename.length>0?i("span",{staticStyle:{"font-family":"Lato"}},[e._v(e._s(e.filename))]):i("span",[e._v("Choose image…")])])])])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"resize-corner"},[r("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:i("239c")}})])}],n={name:"KeyCustomizer",props:{img:String,text:String,currentView:String,transformText:Object,transformImg:Object,color:String,backgroundColor:String,strokeColor:String,selectedKey:Object,setColor:Function,colors:Array,onChange:Function,filename:String,changeView:Function,viewOptions:Array,mainStyle:Object}},c=n,l=(i("7403"),i("2877")),d=Object(l["a"])(c,a,o,!1,null,null,null);d.options.__file="KeyCustomizer.vue";var u=d.exports,h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"options"},[i("h1",{staticStyle:{"margin-top":"0"}},[e._v("Custom Keycap")]),i("div",[e._v("\n\t\tSelect a key  -  "),i("span",{staticStyle:{"font-style":"italic","text-decoration":"underline"}},[e._v("Why the row matters")]),i("br"),i("svg",{staticStyle:{"background-color":"rgb(41,41,41)","margin-top":"5px"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid",width:"700",height:"205",viewBox:"0 0 925 265"}},e._l(e.keys,function(e){return i("g",[i("rect",{staticClass:"key-body",style:{fill:e.body.color},attrs:{x:e.body.x,y:e.body.y,width:e.body.width,height:e.body.height,rx:"2",ry:"2",name:e.name}}),i("rect",{staticClass:"key-face",style:{fill:e.face.color,stroke:e.face.stroke},attrs:{x:e.face.x,y:e.face.y,width:e.face.width,height:e.face.height,rx:"4",ry:"4",name:e.name}})])}))]),e.active?i("div",[i("h2",{staticStyle:{margin:"0",display:"inline-block"}},[e._v("$10.00")]),i("div",{staticClass:"button",staticStyle:{"margin-left":"20px"},on:{click:e.addToCart}},[e._v("Add to cart")])]):e._e()])},f=[],y={name:"KeySelector",props:{keys:Object,active:Boolean,addToCart:Function}},m=y,g=(i("2e97"),Object(l["a"])(m,h,f,!1,null,null,null));g.options.__file="KeySelector.vue";var p=g.exports,v=i("d000"),w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"product-info"},[i("div",{staticClass:"info"},[i("h2",[e._v("Product Info")]),i("div",[e._v("\n      Keycap Material: Dye-sublimation ABS"),i("br"),i("br"),e._v("\n\n      Compatibility: Fits most Cherry MX keyboards. See our Keycap Compatibility Guide for more information."),i("br"),i("br"),e._v("\n\n      Instructions\n      "),i("ul",{staticStyle:{"list-style":"none"}},[i("li",{staticClass:"info-item"},[e._v("Select the desired key (make sure to chose the correct row)")]),i("li",{staticClass:"info-item"},[e._v("Select the color you want")]),i("li",{staticClass:"info-item"},[e._v("Choose an image from your PC that you'd like printed on the keycap")]),i("li",{staticClass:"info-item"},[e._v("Resize and/or position the image as you see fit")]),i("li",{staticClass:"info-item"},[e._v("Optional: Add and position text")]),i("li",{staticClass:"info-item"},[e._v("Optional: Select a different key-face (front,side, back) and add an image and/or text")]),i("li",{staticClass:"info-item"},[e._v("Add to cart - "),i("span",{staticStyle:{"font-style":"italic"}},[e._v("you can add multiple copies in your cart before you checkout")])])])])])])}],x={name:"KeycapProductInfo"},C=x,k=(i("c196"),Object(l["a"])(C,w,b,!1,null,"9714b400",null));k.options.__file="KeycapProductInfo.vue";var S=k.exports;s.a.config.productionTip=!1;var _=new s.a({el:"#app",components:{KeyCustomizer:u,KeySelector:p,NavBar:v["a"],KeycapProductInfo:S},data:{currentView:"topView",selectedColor:{name:"white",color:"#ffffff"},colors:[{name:"black",color:"#1a1a1a"},{name:"white",color:"#ffffff"},{name:"gray",color:"#d0ccc0"},{name:"dark-gray",color:"#96938e"},{name:"graphite",color:"#60605b"},{name:"charcoal",color:"#373534"},{name:"pink",color:"#fbbbc9"},{name:"red",color:"#c13828"},{name:"maroon",color:"#5f3032"},{name:"blue",color:"#5eb1e7"},{name:"royal-blue",color:"#0046ad"},{name:"navy",color:"#002e5f"},{name:"mint",color:"#8ed7b0"},{name:"green",color:"#1db63a"},{name:"olive",color:"#53682b"},{name:"yellow",color:"#f8d615"},{name:"orange",color:"#f67f00"},{name:"graybrown",color:"#766e54"},{name:"brown",color:"#6f4c23"},{name:"purple",color:"#ac97d8"},{name:"aubergine",color:"#43165e"}],viewOptions:[{name:"Top",value:"topView"},{name:"Front",value:"frontView"},{name:"Left side",value:"leftView"},{name:"Right side",value:"rightView"},{name:"Back",value:"backView"}],surfaces:{topView:{preview:"",img:{x:"20",y:"16",width:"80",height:"80",value:"",filename:""},text:{x:"25",y:"15",value:""}},frontView:{preview:"",img:{x:"50",y:"120",width:"80",height:"80",value:"",filename:""},text:{x:"50",y:"120",value:""}},leftView:{preview:"",img:{x:"50",y:"120",width:"80",height:"80",value:"",filename:""},text:{x:"50",y:"120",value:""}},rightView:{preview:"",img:{x:"50",y:"120",width:"80",height:"80",value:"",filename:""},text:{x:"50",y:"120",value:""}},backView:{preview:"",img:{x:"50",y:"120",width:"80",height:"80",value:"",filename:""},text:{x:"50",y:"120",value:""}}},keys:{},selectedKey:{type:"square",sides:{topView:{body:{x:0,y:0,width:39,height:39,rx:2,ry:2},face:{x:5.5,y:3,width:28,height:31,rx:4,ry:4},viewbox:"0 0 39 39"},frontView:{path:"M37 29.5C35.31 19.71 34.25 13.6 33.83 11.15C33.71 10.45 33.21 9.86 32.53 9.63C32.44 9.6 32.98 9.78 32.81 9.73C32.33 9.56 31.82 9.53 31.32 9.64C30.5 9.82 30.48 9.82 30.08 9.91C28.18 10.33 26.25 10.6 24.31 10.73C23.35 10.79 24.23 10.73 23.48 10.78C20.83 10.95 18.17 10.94 15.52 10.73C14.52 10.66 14.01 10.62 12.64 10.51C11.24 10.4 9.84 10.18 8.47 9.85C8.16 9.78 7.85 9.7 7.18 9.54C7 9.5 6.81 9.49 6.62 9.52C6.41 9.55 6.59 9.52 6.51 9.53C5.96 9.61 5.52 10.04 5.42 10.58C4.97 13.11 3.83 19.41 2 29.5L37 29.5Z",restrict:{height:17,width:27,x:6,y:12}},leftView:{path:"M2 29.89L37 30L30.75 10L3.77 14.33L2 29.89Z",restrict:{height:14,width:26,x:6,y:15}},rightView:{path:"M36.94 29.89L1.94 30L8.18 10L35.16 14.33L36.94 29.89Z",restrict:{height:14,width:26,x:8,y:15}},backView:{path:"M37 27.5C35.31 19.68 34.25 14.8 33.83 12.84C33.71 12.27 33.27 11.81 32.71 11.65C32.58 11.62 32.88 11.7 32.69 11.65C32.29 11.54 31.86 11.52 31.45 11.59C30.6 11.74 30.09 11.83 29.6 11.91C29.6 11.91 24.82 12.45 24.82 12.45C23.76 12.51 23.67 12.51 22.79 12.56C22.79 12.56 16.22 12.53 16.22 12.53C15.08 12.46 13.72 12.38 12.27 12.29C12.27 12.29 8.82 11.85 8.82 11.85C8.44 11.77 7.81 11.65 7.13 11.52C6.98 11.49 6.82 11.49 6.67 11.51C6.45 11.53 6.46 11.53 6.35 11.54C5.9 11.6 5.52 11.93 5.42 12.38C4.96 14.4 3.82 19.44 2 27.5L37 27.5Z",restrict:{height:14,width:27,x:6,y:13}}}},sides:{},active:!1,mainStyle:{pointerEvents:"none",opacity:.3}},computed:{transformText:function(){return{transform:"translate("+this.surfaces[this.currentView].text.x+"px,"+this.surfaces[this.currentView].text.y+"px)",fontSize:"26px"}},transformImg:function(){return{transform:"translate("+this.surfaces[this.currentView].img.x+"px,"+this.surfaces[this.currentView].img.y+"px)"}}},mounted:function(){var e=this;fetch("https://us-central1-hotsguide-188315.cloudfunctions.net/function-1?board=keyboard-104&sides=true",{headers:{"Content-Type":"application/json; charset=utf-8"}}).then(function(e){return e.json()}).then(function(t){e.keys=t.keys,e.sides=t.sides}).catch(function(e){return console.error(e)})},methods:{addToCart:function(){var e=this;this.generatePreviews().then(function(){var t={name:e.selectedKey.name,color:e.selectedColor.color,surfaces:e.surfaces,price:1e3},i=JSON.parse(sessionStorage.getItem("customKeycaps"))||[];console.log(i),i.push(t),sessionStorage.setItem("customKeycaps",JSON.stringify(i));var r=document.getElementById("cartLink"),s=r.getElementsByTagName("span")[0];s?s.innerHTML=" ("+i.length+")":(s=document.createElement("span"),s.innerHTML=" ("+i.length+")",s.setAttribute("style","color:blue;"),r.appendChild(s))})},setColor:function(e){document.querySelector('.keyPicker[data-color="'+this.selectedColor.name+'"]').style.removeProperty("border"),document.querySelector('.keyPicker[data-color="'+e.name+'"]').style.border="2px solid red",this.selectedColor=e},changeView:function(e){console.log(e),document.activeElement.blur(),this.currentView=e.target.selectedOptions[0].value;var t=document.querySelector("input[type=file]");""==this.surfaces[this.currentView].img.filename&&(t.value="",/safari/i.test(navigator.userAgent)||(t.type="",t.type="file")),this.updateSnapPoints()},updateSnapPoints:function(){s.a.nextTick(function(){var e=document.querySelector(".restrictRect").getBoundingClientRect(),t=document.querySelector(".moveableImg").width,i=document.querySelector(".moveableText").style.width,r=document.querySelector(".moveableText").style.height;interact(".moveableText").options.drag.snap.targets=V(e,i,r),interact(".moveableText").options.drag.restrict.restriction={x:e.x,y:e.y,width:e.width,height:e.height},interact(".moveableImg").options.drag.snap.targets=V(e,t,t),interact(".moveableImg").options.drag.restrict.restriction={x:e.x,y:e.y,width:e.width,height:e.height}})},changeKey:function(e){var t=this.selectedKey.name,i="#ffffff",r=JSON.parse(JSON.stringify(this.keys[e].type));this.active||(this.active=!0,this.mainStyle.pointerEvents="auto",this.mainStyle.opacity=1,s.a.nextTick(function(){K()})),t&&(this.keys[t].body.color="#0f0f0f",this.keys[t].face.stroke="#272727",this.keys[t].face.color="#1a1a1a"),this.selectedKey.sides=this.sides[r],this.selectedKey.type=r,this.selectedKey.name=e,this.keys[e].body.color=this.shadeBlend(-.25,i),this.keys[e].face.stroke=this.shadeBlend(.065,i),this.keys[e].face.color=i,this.updateSnapPoints()},updateText:function(e){this.surfaces[this.currentView].text.value=e,surface=document.querySelector(".restrictRect").getBoundingClientRect();var t=document.querySelector(".moveableText").style.width,i=document.querySelector(".moveableText").style.height;interact(".moveableText").options.drag.snap.targets=V(surface,t,i)},shadeBlend:function(e,t,i){var r=e<0?-1*e:e,s=Math.round,a=parseInt;if(t.length>7){var o=t.split(","),n=(i||(e<0?"rgb(0,0,0)":"rgb(255,255,255)")).split(","),c=a(o[0].slice(4)),l=a(o[1]),d=a(o[2]);return"rgb("+(s((a(n[0].slice(4))-c)*r)+c)+","+(s((a(n[1])-l)*r)+l)+","+(s((a(n[2])-d)*r)+d)+")"}o=a(t.slice(1),16),n=a((i||(e<0?"#000000":"#FFFFFF")).slice(1),16);var u=o>>16,h=o>>8&255,f=255&o;return"#"+(16777216+65536*(s(((n>>16)-u)*r)+u)+256*(s(((n>>8&255)-h)*r)+h)+(s(((255&n)-f)*r)+f)).toString(16).slice(1)},generatePreviews:function(){var e="http://www.w3.org/2000/svg",t=[];for(var i in this.surfaces){var r=this,s=new Promise(function(t,s){var a=document.createElementNS(e,"svg");if(a.setAttribute("width",260),a.setAttribute("height",210),a.setAttribute("preserveAspectRatio","xMidYMid meet"),a.setAttribute("viewBox",r.selectedKey.sides.topView.viewbox),"topView"==i){var o=document.createElementNS(e,"rect");o.setAttribute("class","keySurface"),o.setAttribute("x",r.selectedKey.sides.topView.body.x),o.setAttribute("y",r.selectedKey.sides.topView.body.y),o.setAttribute("width",r.selectedKey.sides.topView.body.width),o.setAttribute("height",r.selectedKey.sides.topView.body.height),o.setAttribute("rx",r.selectedKey.sides.topView.body.rx),o.setAttribute("ry",r.selectedKey.sides.topView.body.ry),o.setAttribute("fill",r.shadeBlend(-.2,r.selectedColor.color));var n=document.createElementNS(e,"rect");n.setAttribute("class","restrictRect"),n.setAttribute("x",r.selectedKey.sides.topView.face.x),n.setAttribute("y",r.selectedKey.sides.topView.face.y),n.setAttribute("width",r.selectedKey.sides.topView.face.width),n.setAttribute("height",r.selectedKey.sides.topView.face.height),n.setAttribute("rx",r.selectedKey.sides.topView.face.rx),n.setAttribute("ry",r.selectedKey.sides.topView.face.ry),n.setAttribute("fill",r.selectedColor.color),n.setAttribute("stroke",r.shadeBlend(.065,r.selectedColor.color)),n.setAttribute("stroke-width","1px"),a.appendChild(o),a.appendChild(n)}else{var c=document.createElementNS(e,"path");c.setAttribute("stroke-width","0.5px"),c.setAttribute("stroke",r.shadeBlend(-.2,r.selectedColor.color)),c.setAttribute("fill",r.selectedColor.color),c.setAttribute("class","keySurface"),c.setAttribute("d",r.selectedKey.sides[i].path),a.appendChild(c)}if(""!=r.surfaces[i].img.value||""!=r.surfaces[i].text.value){var l=new Image;l.width=r.surfaces[i].img.width,l.height=r.surfaces[i].img.height,l.src=r.surfaces[i].img.value;var d=i;l.onload=function(){var e=(new XMLSerializer).serializeToString(a);canvg("canvas",e,{useCORS:!0});var i=canvas.getContext("2d");console.log(l.width),console.log(l.height),i.drawImage(l,r.surfaces[d].img.x,r.surfaces[d].img.y,r.surfaces[d].img.width,r.surfaces[d].img.height),r.surfaces[d].preview=canvas.toDataURL("image/png"),t()}}else{var u=(new XMLSerializer).serializeToString(a);canvg("canvas",u,{useCORS:!0}),r.surfaces[i].preview=canvas.toDataURL("image/png"),t()}});t.push(s)}return Promise.all(t)},previewImg:function(){var e=document.querySelector("input[type=file]").files[0],t=(document.querySelector(".inputfile").nextElementSibling,this.surfaces[this.currentView].img),i=new FileReader,r=document.querySelector(".restrictRect").getBoundingClientRect(),a=document.querySelector(".moveableImg").width;i.onloadend=function(){t.value=i.result,s.a.nextTick(function(){var e=document.querySelector("#keyImage");e.onload=function(){t.width=e.width,t.height=e.height}})},e?(t.filename=e.name,i.readAsDataURL(e),interact(".moveableImg").options.drag.snap.targets=V(r,a,a)):t.value=""}}}).$mount("#app");function V(e,t,i){var r=e.left+t/2,s=e.left+e.width/2,a=e.left+e.width-t/2,o=e.top+i/2,n=e.top+e.height/2,c=e.top+e.height-i/2,l=[{x:r,y:o},{x:s,y:o},{x:a,y:o},{x:r,y:n},{x:s,y:n},{x:a,y:n},{x:r,y:c},{x:s,y:c},{x:a,y:c}];return l}function A(e){var t=e.target;if("moveableImg"==t.className)var i=_.surfaces[_.currentView].img;else if("moveableText"==t.className)i=_.surfaces[_.currentView].text;i.x=(parseFloat(i.x)||0)+e.dx,i.y=(parseFloat(i.y)||0)+e.dy}function K(){var e=document.querySelector(".restrictRect").getBoundingClientRect();interact(".moveableText").draggable({onmove:window.dragMoveListener,snap:{targets:[{}],range:20,relativePoints:[{x:.5,y:.5}]},restrict:{restriction:{x:e.x,y:e.y,width:e.width,height:e.height},elementRect:{top:0,left:0,bottom:1,right:1}}}),interact(".moveableImg").draggable({onmove:window.dragMoveListener,snap:{targets:[{}],range:10,relativePoints:[{x:.5,y:.5}]},restrict:{restriction:{x:e.left,y:e.top,width:e.width,height:e.height},elementRect:{top:0,left:0,bottom:1,right:1}}}).resizable({edges:{right:".resize-corner",bottom:".resize-corner",left:!1,top:!1},preserveAspectRatio:!0,restrictEdges:{outer:{x:e.x,y:e.y,width:e.width,height:e.height}},restrictSize:{min:{width:50,height:50}},inertia:!1}).on("resizemove",function(t){var i=t.target;t.rect.height<e.height?i.style.width=t.rect.width+"px":i.style.width=i.clientWidth/i.clientHeight*e.height+"px",_.surfaces[_.currentView].img.width=i.clientWidth,_.surfaces[_.currentView].img.height=i.clientHeight-5,interact(".moveableImg").options.drag.snap.targets=V(e,t.rect.width,t.rect.height)})}window.dragMoveListener=A,document.body.addEventListener("click",function(e){var t=e.target;t.className&&t.classList.contains("key-face")&&_.changeKey(t.getAttribute("name")),e.stopPropagation()})},"239c":function(e,t,i){e.exports=i.p+"img/resize.0c518ccb.png"},2435:function(e,t,i){"use strict";var r=i("766f"),s=i.n(r);s.a},"2e97":function(e,t,i){"use strict";var r=i("c3fc"),s=i.n(r);s.a},3:function(e,t,i){e.exports=i("159e")},6516:function(e,t,i){},7403:function(e,t,i){"use strict";var r=i("e7ac"),s=i.n(r);s.a},"766f":function(e,t,i){},c196:function(e,t,i){"use strict";var r=i("6516"),s=i.n(r);s.a},c3fc:function(e,t,i){},d000:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"navbar"}},[i("div",{attrs:{id:"navbar-container"}},[i("div",{attrs:{id:"logo"}},[e._v("L O G O")]),i("div",{attrs:{id:"link-container"}},[i("ul",{attrs:{id:"navbar-links"}},[e._m(0),e._m(1),e._m(2),e._m(3),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{id:"cartLink",href:"cart.html"}},[e._v("View Cart "),e.itemsInCart>0?i("span",{staticStyle:{color:"blue"}},[e._v("("+e._s(e.itemsInCart)+")")]):e._e()])])])])])])},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:"index.html"}},[e._v("Home")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link"},[e._v("Products")]),i("ul",{staticClass:"dropdown"},[i("li",{staticClass:"dropdown-item"},[i("a",{attrs:{href:"keycap.html"}},[e._v("Single custom keycap")])]),i("li",{staticClass:"dropdown-item"},[i("a",{attrs:{href:"keyboard.html"}},[e._v("Custom keycap set")])])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:"gallery.html"}},[e._v("Gallery")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:"support.html"}},[e._v("Support")])])}],a=(i("cadf"),i("551c"),i("097d"),{name:"NavBar",computed:{itemsInCart:function(){var e=JSON.parse(sessionStorage.getItem("customKeycaps"))||0;return 0!=e?e.length:e}}}),o=a,n=(i("2435"),i("2877")),c=Object(n["a"])(o,r,s,!1,null,"35730eac",null);c.options.__file="NavBar.vue";t["a"]=c.exports},e7ac:function(e,t,i){}});
//# sourceMappingURL=keycap.57e0c486.js.map