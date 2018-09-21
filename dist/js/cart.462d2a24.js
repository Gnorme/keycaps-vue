(function(t){function e(e){for(var i,a,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)a=o[p],s[a]&&d.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={cart:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([12,"chunk-vendors"]),n()})({"0cd5":function(t,e,n){"use strict";n.r(e);n("6b54"),n("28a5"),n("cadf"),n("551c"),n("097d");var i=n("ba4c"),s=n.n(i),r=n("d000"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",[t._m(0),t._l(t.products,function(e,i){return n("tr",[n("td",{staticStyle:{"padding-left":"8px"}},[t._v("\n\t\t\t\tCustom keycap"),n("br"),t._l(e.surfaces,function(t){return n("img",{staticStyle:{width:"19%",height:"auto"},attrs:{src:t.preview}})})],2),n("td",{staticClass:"amount"},[t._v("x1")]),n("td",{staticClass:"price"},[t._v("$10.00")]),n("td",[n("div",{staticClass:"cancel",on:{click:function(e){t.removeItem(i)}}},[t._v("x")])])])})],2)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Product")]),n("th",{staticClass:"amount"},[t._v("Amount")]),n("th",{staticClass:"price"},[t._v("Price")]),n("th")])}],c={name:"Cart",props:{products:Array,removeItem:Function}},l=c,u=(n("b924"),n("2877")),p=Object(u["a"])(l,a,o,!1,null,"d01b9f26",null);p.options.__file="Cart.vue";var d=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{staticStyle:{"text-align":"right",padding:"4px","font-weight":"600"}},[t._v("\n\t\tHST: "+t._s(t.stringify("tax"))+" "),n("br"),t._v("\n\t\tShipping: "+t._s(t.stringify("shipping"))),n("br"),t._v("\n\t\tTotal: "+t._s(t.stringify("total"))+"\n\t")])])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"inline-block",float:"left","margin-top":"8px"}},[n("div",{staticStyle:{"margin-bottom":"8px"}},[t._v("Shipping Estimate")]),n("select",{staticClass:"select",attrs:{name:"country",required:""}},[n("option",{attrs:{value:"",selected:"",disabled:"",hidden:""}},[t._v("Country")]),n("option",[t._v("Canada")]),n("option",[t._v("United States of America")])]),n("select",{staticClass:"select",attrs:{name:"province",required:""}},[n("option",{attrs:{value:"",selected:"",disabled:"",hidden:""}},[t._v("State/Province")]),n("option",[t._v("Quebec")]),n("option",[t._v("British Columbia")])]),n("input",{staticClass:"text",attrs:{type:"text",placeholder:"Postal Code..."}}),n("button",{staticClass:"button",staticStyle:{"padding-top":"4px","font-size":"15px"}},[t._v("Get a quote")])])}],m={name:"Shipping",props:{stringify:Function}},h=m,g=(n("4487"),Object(u["a"])(h,v,f,!1,null,null,null));g.options.__file="Shipping.vue";var _=g.exports;new s.a({el:"#cart",components:{NavBar:r["a"],Cart:d,Shipping:_},data:{products:[],shipping:0},computed:{productsTotal:function(){for(var t=0,e=0;e<this.products.length;e++)t+=this.products[e].price;return t},tax:function(){return.14*this.productsTotal},total:function(){return console.log(this.productsTotal),console.log(this.shipping),console.log(this.tax),this.productsTotal+this.shipping+this.tax}},mounted:function(){this.products=JSON.parse(sessionStorage.getItem("customKeycaps"))||[],console.log(JSON.parse(sessionStorage.getItem("customKeycaps")))},methods:{stringify:function(t){return"$"+(this[t]/100).toFixed(2)},removeItem:function(t){this.products.splice(t,1),sessionStorage.setItem("customKeycaps",JSON.stringify(this.products));var e=document.getElementById("cartLink"),n=e.getElementsByTagName("span")[0];n?n.innerHTML=" ("+this.products.length+")":(n=document.createElement("span"),n.innerHTML=" ("+cartItems.length+")",n.setAttribute("style","color:blue;"),e.appendChild(n))},checkout:function(t){var e=this;console.log(e.total),this.shipping<=0?console.log("Calculate shipping"):(y.open({name:"Custom Keycaps",description:"2 custom printer keycaps",zipCode:!0,amount:e.total,billingAddress:!0,shippingAddress:!0}),t.preventDefault())},shadeBlend:function(t,e,n){var i=t<0?-1*t:t,s=Math.round,r=parseInt;if(e.length>7){var a=e.split(","),o=(n||(t<0?"rgb(0,0,0)":"rgb(255,255,255)")).split(","),c=r(a[0].slice(4)),l=r(a[1]),u=r(a[2]);return"rgb("+(s((r(o[0].slice(4))-c)*i)+c)+","+(s((r(o[1])-l)*i)+l)+","+(s((r(o[2])-u)*i)+u)+")"}a=r(e.slice(1),16),o=r((n||(t<0?"#000000":"#FFFFFF")).slice(1),16);var p=a>>16,d=a>>8&255,v=255&a;return"#"+(16777216+65536*(s(((o>>16)-p)*i)+p)+256*(s(((o>>8&255)-d)*i)+d)+(s(((255&o)-v)*i)+v)).toString(16).slice(1)}}});var y=StripeCheckout.configure({key:"pk_test_eLeDzlRBpa1Dao11EMQGl757",image:"https://stripe.com/img/documentation/checkout/marketplace.png",locale:"auto",token:function(t,e){console.log(t.id),console.log(e)}});window.addEventListener("popstate",function(){y.close()})},12:function(t,e,n){t.exports=n("0cd5")},2435:function(t,e,n){"use strict";var i=n("766f"),s=n.n(i);s.a},4487:function(t,e,n){"use strict";var i=n("c143"),s=n.n(i);s.a},6769:function(t,e,n){},"766f":function(t,e,n){},b924:function(t,e,n){"use strict";var i=n("6769"),s=n.n(i);s.a},c143:function(t,e,n){},d000:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"navbar"}},[n("div",{attrs:{id:"navbar-container"}},[n("div",{attrs:{id:"logo"}},[t._v("L O G O")]),n("div",{attrs:{id:"link-container"}},[n("ul",{attrs:{id:"navbar-links"}},[t._m(0),t._m(1),t._m(2),t._m(3),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{id:"cartLink",href:"cart.html"}},[t._v("View Cart "),t.itemsInCart>0?n("span",{staticStyle:{color:"blue"}},[t._v("("+t._s(t.itemsInCart)+")")]):t._e()])])])])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"index.html"}},[t._v("Home")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link"},[t._v("Products")]),n("ul",{staticClass:"dropdown"},[n("li",{staticClass:"dropdown-item"},[n("a",{attrs:{href:"keycap.html"}},[t._v("Single custom keycap")])]),n("li",{staticClass:"dropdown-item"},[n("a",{attrs:{href:"keyboard.html"}},[t._v("Custom keycap set")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"gallery.html"}},[t._v("Gallery")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"support.html"}},[t._v("Support")])])}],r=(n("cadf"),n("551c"),n("097d"),{name:"NavBar",computed:{itemsInCart:function(){var t=JSON.parse(sessionStorage.getItem("customKeycaps"))||0;return 0!=t?t.length:t}}}),a=r,o=(n("2435"),n("2877")),c=Object(o["a"])(a,i,s,!1,null,"35730eac",null);c.options.__file="NavBar.vue";e["a"]=c.exports}});
//# sourceMappingURL=cart.462d2a24.js.map