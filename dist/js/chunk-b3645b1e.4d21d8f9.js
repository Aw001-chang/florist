(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3645b1e"],{"1c5a":function(t,s,a){},a159:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"checkoutpage"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),t._m(0),a("div",{staticClass:"checkout container"},[a("div",{staticClass:"h5"},[t._v("購物車 ( 1件 )")]),a("form",{on:{submit:function(s){return s.preventDefault(),t.payOrder(s)}}},[t._m(1),t._l(t.order.products,(function(s){return a("div",{key:s.id,staticClass:"table-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 col-xs-12"},[a("img",{staticStyle:{width:"100px","margin-right":"20px"},attrs:{src:s.product.imageUrl,alt:""}}),t._v(" "+t._s(s.product.title)+" ")]),a("div",{staticClass:"col-md-3 col-xs-12 text-center price"},[t._v(" "+t._s(t._f("currency")(s.product.price))+" ")]),a("div",{staticClass:"col-md-1 col-xs-12 unit"},[t._v(" "+t._s(s.qty)+"/"+t._s(s.product.unit)+" ")]),a("div",{staticClass:"col-md-3 col-xs-12 text-center final_total"},[t._v(" "+t._s(t._f("currency")(s.final_total))+" ")])]),a("div",{staticClass:"order_price text-right"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"h5 col align-self-end"},[t._v(" 總計 ： "+t._s(t._f("currency")(s.total))+" ")])])])])})),a("div",{staticClass:"orderinfocheck row justify-content-center"},[a("div",{staticClass:"col-md-8 table-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3 col"},[t._v("收件人姓名:")]),a("div",{staticClass:"col-lg-9 col"},[t._v(t._s(t.order.user.name))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3 col"},[t._v("收件人電話:")]),a("div",{staticClass:"col-lg-9 col"},[t._v(t._s(t.order.user.tel))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3 col"},[t._v("收件人Email:")]),a("div",{staticClass:"col-lg-9 col"},[t._v(t._s(t.order.user.email))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3 col"},[t._v("收件人地址:")]),a("div",{staticClass:"col-lg-9 col"},[t._v(t._s(t.order.user.address))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3 col"},[t._v("付款狀態:")]),a("div",{staticClass:"col-lg-9 col"},[t.order.is_paid?a("span",{staticClass:"text-success"},[t._v("付款完成")]):a("span",[t._v("尚未付款")])])])]),!1===t.order.is_paid?a("div",{staticClass:"text-center col-12"},[a("button",{staticClass:"btn btn-danger"},[t._v("確認付款")])]):t._e(),t.order.is_paid?a("div",{staticClass:"text-center col-12"},[a("router-link",{staticClass:"btn btn-outline-primary",attrs:{to:"/goods"}},[t._v("繼續購物")])],1):t._e()])],2)])],1)},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"procedure"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"step col-md-4 col-sm-12 active"},[a("strong",[t._v("1")]),t._v("確認購物清單 ")]),a("div",{staticClass:"step col-md-4 col-sm-12 active"},[a("strong",[t._v("2")]),t._v("填寫訂購資料 ")]),a("div",{staticClass:"step col-md-4 col-sm-12 active"},[a("strong",[t._v("3")]),t._v("完成訂購 ")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"table-header"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[t._v("商品資訊")]),a("div",{staticClass:"col-3 text-center"},[t._v("單價")]),a("div",{staticClass:"col-2"},[t._v("數量")]),a("div",{staticClass:"col-3 text-center"},[t._v("小計")])])])}],e={name:"checkoutpage",data:function(){return{isLoading:!1,order:{user:{}},orderId:""}},methods:{getOrder:function(){var t=this,s="https://vue-course-api.hexschool.io/api/anpo/order/".concat(t.orderId);t.isLoading=!0,this.$http.get(s).then((function(s){t.order=s.data.order,t.isLoading=!1,console.log(s)}))},payOrder:function(){var t=this,s="https://vue-course-api.hexschool.io/api/anpo/pay/".concat(t.orderId);t.isLoading=!0,this.$http.post(s).then((function(){t.$bus.$emit("addtoCart:update"),t.isLoading=!1,t.getOrder()}))}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()}},o=e,l=(a("a5c1"),a("2877")),r=Object(l["a"])(o,i,c,!1,null,null,null);s["default"]=r.exports},a5c1:function(t,s,a){"use strict";a("1c5a")}}]);
//# sourceMappingURL=chunk-b3645b1e.4d21d8f9.js.map