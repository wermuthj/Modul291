(function(t){function e(e){for(var n,c,u=e[0],i=e[1],s=e[2],d=0,f=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={index:0},a=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=i;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("ff8d")},ff8d:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-container",{attrs:{fluid:""}},[r("div",{staticStyle:{"margin-top":"3rem"}}),r("Products"),r("div",{staticStyle:{"margin-top":"2rem"}}),r("Cart"),r("div",{staticStyle:{"margin-top":"2rem"}}),r("Checkout")],1)],1)},a=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Products")]),r("table",[t._m(0),r("tbody",t._l(t.products,(function(e,n){return r("tr",{key:n},[r("td",[t._v(t._s(e.name))]),r("td",[t._v("   ")]),r("td",[t._v(t._s(e.price.toFixed(2)))]),r("td",[t._v("   ")]),r("td",[r("b-button",{attrs:{variant:"success"},on:{click:function(r){return t.addToCart(e)}}},[t._v("+")]),r("b-button",{attrs:{variant:"danger"},on:{click:function(r){return t.removeFromCart(e)}}},[t._v("-")])],1)])})),0)])])},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Name")]),r("td",[t._v("   ")]),r("th",[t._v("Price")]),r("th",[t._v(" ")])])])}],i=r("2f62"),s={name:"Products",computed:Object(i["c"])(["products"]),methods:{addToCart:function(t){this.$store.commit("addToCart",t)},removeFromCart:function(t){this.$store.commit("removeFromCart",t)}},created:function(){this.$store.dispatch("loadProducts")}},l=s,d=r("2877"),f=Object(d["a"])(l,c,u,!1,null,null,null),p=f.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Cart")]),r("table",[t._m(0),r("tbody",t._l(t.cart,(function(e,n){return r("tr",{key:n},[r("td",[t._v(t._s(e.name))]),r("td",[t._v(t._s(e.quantity))])])})),0)])])},m=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Name")]),r("th",[t._v("Quantity")])])])}],h={name:"Cart",computed:Object(i["c"])(["cart"])},_=h,b=Object(d["a"])(_,v,m,!1,null,null,null),y=b.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Checkout")]),t._v(" Your total is CHF "+t._s(t.cartTotal.toFixed(2))+". "),r("b-button",{directives:[{name:"show",rawName:"v-show",value:t.cartTotal>0,expression:"cartTotal > 0"}],attrs:{variant:"primary"},on:{click:t.checkout}},[t._v("Checkout")])],1)},O=[],g={name:"Cart",computed:Object(i["b"])(["cartTotal"]),methods:{checkout:function(){alert("Checkout processed!")}}},j=g,x=Object(d["a"])(j,C,O,!1,null,null,null),P=x.exports,k={name:"app",components:{Products:p,Cart:y,Checkout:P}},w=k,T=Object(d["a"])(w,o,a,!1,null,null,null),$=T.exports;r("d3b7"),r("7db0"),r("b0c0"),r("c740"),r("a434");n["default"].use(i["a"]);var S="http://localhost:3000/",F=new i["a"].Store({state:{products:[],cart:[]},getters:{cartTotal:function(t){return t.cart.reduce((function(e,r){var n=t.products.find((function(t){return t.name===r.name}));return e+n.price*r.quantity}),0)}},mutations:{setProducts:function(t,e){t.products=e},addToCart:function(t,e){var r=t.cart.findIndex((function(t){return t.name===e.name}));-1!==r?t.cart[r].quantity++:t.cart.push({name:e.name,quantity:1})},removeFromCart:function(t,e){var r=t.cart.findIndex((function(t){return t.name===e.name}));-1!==r&&(t.cart[r].quantity--,0===t.cart[r].quantity&&t.cart.splice(r,1))}},actions:{loadProducts:function(t){fetch(S+"v1/products").then((function(t){return t.json()})).then((function(e){t.commit("setProducts",e)})).catch((function(t){console.error(t)}))}}}),q=r("5f5b");r("f9e3"),r("2dd8");n["default"].use(q["a"]),n["default"].config.productionTip=!1,new n["default"]({store:F,render:function(t){return t($)}}).$mount("#app")}});
//# sourceMappingURL=index.0f0ead85.js.map