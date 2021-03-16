<template>
  <div class="home">
    <FrontNav />
    <Alert/>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import FrontNav from "@/components/FrontNav.vue";
import Footer from "@/components/Footer.vue";
import Alert from "@/components/AlertMessage.vue";
export default {
  name: "Home",
  components: {
    FrontNav,
    Footer,
    Alert,
  }
};
</script>

<style lang="scss">
* {
  font-family: "Roboto Condensed", "Open Sans", "Helvetica Neue", Helvetica,
    Arial, "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", "STHeiti",
    "WenQuanYi Micro Hei", SimSun, sans-serif;
}
.home {
  background-color: #091f0e;
  margin-top: 86px;
}
@media (max-width: 991px) {
  .home {
    margin-top: 54px;
  }
}
@media (max-width: 767px) {
  .home {
    margin-top: 54px;
  }
}
@media (max-width: 575px) {
  .home {
    margin-top: 54px;
  }
}
</style>
