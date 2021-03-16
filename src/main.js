import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import "bootstrap";
// 第一段：將元件從vee-validate導出，ValidationProvider是input驗證元件，ValidationObserver是整體<form>驗證元件，extend擴充功能，localize語系設定，configure本身的設定檔
// 第二段：針對繁體中文的語系設定
// 第三段：將所有驗證規則化
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
  configure
} from "vee-validate";
import TW from "vee-validate/dist/locale/zh_TW.json";
import * as rules from "vee-validate/dist/rules";

import App from "./App.vue";
import router from "./router";
import "./bus";
import currencyFilter from "./filters/currency.js";
import dateFilter from "./filters/date.js";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
axios.defaults.withCredentials = true;
Vue.filter("currency", currencyFilter);
Vue.filter("date", dateFilter);
Vue.component("Loading", Loading);

// 將規則導出，並且加入擴充套件內
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
  extend("phone", {
    message: "請輸入10位的手機號碼",
    validate: value => value.length === 10 && /^0[3456789]\d{8}$/.test(value)
  });
});

localize("zh_TW", TW);

Vue.component("ValidationObserver", ValidationObserver); //完整表單驗證
Vue.component("ValidationProvider", ValidationProvider); //針對單一input的驗證
// className的css樣式設定
configure({
  classes: {
    valid: "is-valid",
    invalid: "is-invalid"
  }
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

// 以下為 導航守衛
router.beforeResolve((to, from, next) => {
  if (to.meta.requiresAuth) {
    //有requiresAuth的話
    const api = "https://vue-course-api.hexschool.io/api/user/check";
    axios.post(api).then(response => {
      console.log(response.data);
      if (response.data.success) {
        // 如果成功登入就放行
        next();
      } else {
        next({
          path: "/login"
        });
      }
    });
  } else {
    //沒有的話直接放行
    next();
  }
});
