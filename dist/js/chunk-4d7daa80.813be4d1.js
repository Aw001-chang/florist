(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d7daa80"],{a480:function(t,e,s){"use strict";s("c5c4")},a55b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{staticClass:"form-signin",on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[s("h1",{staticClass:"h3 mb-3 font-weight-normal d-block text-center"},[t._v("登入")]),s("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}}),s("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._m(0),s("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v(" 登入 ")]),s("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("© 2017-2020")])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"checkbox mb-3"},[s("label",[s("input",{attrs:{type:"checkbox",value:"remember-me"}}),t._v(" Remember me ")])])}],n=(s("99af"),{data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var t="https://vue-course-api.hexschool.io/admin/signin",e=this;this.$http.post(t,e.user).then((function(t){if(console.log(t.data),t.data.success){var s=t.data.token,a=t.data.expired;document.cookie="shopToken=".concat(s,"; expires=").concat(new Date(a),";"),e.$router.push("/admin/products")}}))}}}),o=n,i=(s("a480"),s("2877")),u=Object(i["a"])(o,a,r,!1,null,"2779a964",null);e["default"]=u.exports},c5c4:function(t,e,s){}}]);
//# sourceMappingURL=chunk-4d7daa80.813be4d1.js.map