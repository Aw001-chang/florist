(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ed7ab32"],{"20a4":function(t,a,e){"use strict";e("be77")},8629:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"goods"},[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"products pb-5"},[t._m(0),e("div",{staticClass:"container product_container mt-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-3 col-lg-3 col-md-3 col-sm-12 goods_menu"},[e("div",{staticClass:"list-group"},[e("a",{staticClass:"list-group-item list-group-item-action",class:{active:"花束"===t.isActive.active},attrs:{href:"javascript:;"},on:{click:function(a){return a.preventDefault(),t.changeCategory("花束")}}},[t._v("花束")]),e("a",{staticClass:"list-group-item list-group-item-action",class:{active:"盆花"===t.isActive.active},attrs:{href:"javascript:;"},on:{click:function(a){return a.preventDefault(),t.changeCategory("盆花")}}},[t._v("盆花")]),e("a",{staticClass:"list-group-item list-group-item-action",class:{active:"禮盒花"===t.isActive.active},attrs:{href:"javascript:;"},on:{click:function(a){return a.preventDefault(),t.changeCategory("禮盒花")}}},[t._v("禮盒花")])])]),e("div",{staticClass:"col-xl-9 col-lg-9 col-md-9 col-sm-12 goods_contant"},[e("div",{staticClass:"row"},t._l(t.nowCategory,(function(a){return e("div",{key:a.id,staticClass:"col-xl-4 col-lg-6 col-md-6 col-sm-12 goods_item"},[e("div",{staticClass:"card mb-5"},[e("img",{staticClass:"card-img-top",attrs:{src:a.imageUrl,alt:"..."}}),e("div",{staticClass:"card-body text-white"},[e("h5",{staticClass:"card-title text-left"},[t._v(t._s(a.title))]),e("div",{staticClass:"pric_area d-flex flex-row justify-content-between"},[a.price?t._e():e("div",{staticClass:"h5"},[t._v(" "+t._s(t._f("currency")(a.origin_price))+" ")]),a.price?e("del",{staticClass:"h6"},[t._v(t._s(t._f("currency")(a.origin_price)))]):t._e(),a.price?e("div",{staticClass:"h5"},[t._v(" "+t._s(t._f("currency")(a.price))+" ")]):t._e()]),e("div",{staticClass:"button_area d-flex flex-row justify-content-between"},[e("a",{staticClass:"btn btn-outline-info",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getProduct(a)}}},[t._v("詳細資訊")]),e("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.addtoCart(a.id)}}},[t._v("加入購物車")])])])])])})),0)])])]),e("div",{staticClass:"modal fade",attrs:{id:"goodsModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-md",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[e("div",{staticClass:"modal-header bg-white text-dark"},[e("div",{staticClass:"h4"},[t._v(t._s(t.product.title))]),t._m(1)]),e("div",{staticClass:"modal-body"},[e("img",{staticClass:"img-fluid",attrs:{alt:"",src:t.product.imageUrl}}),e("blockquote",{staticClass:"blockquote mt-3"},[e("p",{staticClass:"mb-0"},[t._v(t._s(t.product.content))]),e("footer",{staticClass:"blockquote-footer text-right"},[t._v(" "+t._s(t.product.description)+" ")])]),e("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[t.product.price?t._e():e("div",{staticClass:"h4"},[t._v(" "+t._s(t._f("currency")(t.product.origin_price))+" 元 ")]),t.product.price?e("del",{staticClass:"h6"},[t._v("原價"+t._s(t._f("currency")(t.product.origin_price))+" 元")]):t._e(),t.product.price?e("div",{staticClass:"h4"},[t._v(" 現在只要"+t._s(t._f("currency")(t.product.price))+" 元 ")]):t._e()]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.product,"num",a.target.multiple?e:e[0])}}},t._l(10,(function(a){return e("option",{key:a,domProps:{value:a}},[t._v(" 選購 "+t._s(a)+t._s(t.product.unit)+" ")])})),0)]),e("div",{staticClass:"modal-footer"},[e("div",{staticClass:"text-muted text-nowrap mr-3"},[t._v(" 小計"),e("strong",[t._v(t._s(t.product.num*t.product.price))]),t._v(" 元 ")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.addtoCart(t.product.id,t.product.num)}}},[t._v(" 加到購物車 ")])])])])])])],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"jumbotron  jumbotron-fluid jumbotron-bg d-flex align-items-end mb-0"},[e("div",{staticClass:"container"},[e("div",{staticClass:"text-bg p-4"},[e("h1",{staticClass:"display-4"},[t._v("線上花店")]),e("p",{staticClass:"lead"},[t._v(" This is a modified jumbotron that occupies the entire horizontal space of its parent. ")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],o=(e("4de4"),e("1157")),c=e.n(o),r=e("be9a"),n=e.n(r),l={name:"Goods",data:function(){return{isLoading:!1,ProductsBanner:n.a,products:[],product:{},nowCategory:[],nowCategoryTitle:"",isActive:{active:""},cart:[]}},methods:{getProducts:function(){var t="https://vue-course-api.hexschool.io/api/anpo/products/all",a=this;a.isLoading=!0,this.$http.get(t).then((function(t){a.products=t.data.products,a.isLoading=!1,a.nowCategory=a.products.filter((function(t){return-1!==t.category.indexOf("花束")})),a.isActive.active="花束"}))},getProduct:function(t){var a=this,e="https://vue-course-api.hexschool.io/api/anpo/product/".concat(t.id);this.$http.get(e).then((function(t){a.product=t.data.product,a.product.num=1,c()("#goodsModal").modal("show"),console.log(t)}))},addtoCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=this,i="https://vue-course-api.hexschool.io/api/anpo/cart",s={product_id:t,qty:a};this.$http.post(i,{data:s}).then((function(t){console.log(t),e.$bus.$emit("addtoCart:update",a=1),e.getCart(),c()("#goodsModal").modal("hide")}))},getCart:function(){var t=this,a="https://vue-course-api.hexschool.io/api/anpo/cart";this.$http.get(a).then((function(a){t.cart=a.data.data,console.log(a)}))},removeCartItem:function(t){var a=this,e="https://vue-course-api.hexschool.io/api/anpo/cart/".concat(t);this.$http.delete(e).then((function(){a.$bus.$emit("addtoCart:update"),a.getCart()}))},changeCategory:function(t){var a=this;a.nowCategoryTitle=t,"全部"===t?(a.nowCategory=a.products,a.isActive.active="全部"):"全部"!==t&&(a.nowCategory=a.products.filter((function(a){return a.category===t})),a.isActive.active=t)}},created:function(){this.getProducts(),this.getCart()}},d=l,u=(e("20a4"),e("2877")),p=Object(u["a"])(d,i,s,!1,null,null,null);a["default"]=p.exports},be77:function(t,a,e){},be9a:function(t,a,e){t.exports=e.p+"img/pink-flowers-background.ad068f8b.jpg"}}]);
//# sourceMappingURL=chunk-2ed7ab32.493655fa.js.map