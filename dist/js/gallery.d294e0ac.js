(function(t){function e(e){for(var a,s,l=e[0],c=e[1],o=e[2],f=0,p=[];f<l.length;f++)s=l[f],n[s]&&p.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,o||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,l=1;l<r.length;l++){var c=r[l];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={gallery:0},i=[];function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;i.push([10,"chunk-vendors"]),r()})({10:function(t,e,r){t.exports=r("b1bb")},2435:function(t,e,r){"use strict";var a=r("766f"),n=r.n(a);n.a},"766f":function(t,e,r){},b1bb:function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var a=r("ba4c"),n=r.n(a),i=r("d000"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"gallery-container"}},[r("div",{staticClass:"gallery"},t._l(t.images,function(t){return r("img",{attrs:{src:t}})}))])},l=[],c={name:"Gallery",props:{images:Array}},o=c,u=(r("edcc"),r("2877")),f=Object(u["a"])(o,s,l,!1,null,"3cef2550",null);f.options.__file="Gallery.vue";var p=f.exports;new n.a({el:"#gallery",components:{NavBar:i["a"],Gallery:p},data:{images:["../img/egg.jpg","../img/egg.jpg","../img/egg.jpg","../img/egg.jpg","../img/egg.jpg","../img/egg.jpg","../img/egg.jpg","../img/egg.jpg"]}})},d000:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"navbar"}},[r("div",{attrs:{id:"navbar-container"}},[r("div",{attrs:{id:"logo"}},[t._v("L O G O")]),r("div",{attrs:{id:"link-container"}},[r("ul",{attrs:{id:"navbar-links"}},[t._m(0),t._m(1),t._m(2),t._m(3),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{id:"cartLink",href:"cart.html"}},[t._v("View Cart "),t.itemsInCart>0?r("span",{staticStyle:{color:"blue"}},[t._v("("+t._s(t.itemsInCart)+")")]):t._e()])])])])])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"index.html"}},[t._v("Home")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link"},[t._v("Products")]),r("ul",{staticClass:"dropdown"},[r("li",{staticClass:"dropdown-item"},[r("a",{attrs:{href:"keycap.html"}},[t._v("Single custom keycap")])]),r("li",{staticClass:"dropdown-item"},[r("a",{attrs:{href:"keyboard.html"}},[t._v("Custom keycap set")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"gallery.html"}},[t._v("Gallery")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"support.html"}},[t._v("Support")])])}],i=(r("cadf"),r("551c"),r("097d"),{name:"NavBar",computed:{itemsInCart:function(){var t=JSON.parse(sessionStorage.getItem("customKeycaps"))||0;return 0!=t?t.length:t}}}),s=i,l=(r("2435"),r("2877")),c=Object(l["a"])(s,a,n,!1,null,"35730eac",null);c.options.__file="NavBar.vue";e["a"]=c.exports},edcc:function(t,e,r){"use strict";var a=r("fb76"),n=r.n(a);n.a},fb76:function(t,e,r){}});
//# sourceMappingURL=gallery.d294e0ac.js.map