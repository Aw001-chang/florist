<template>
  <div>
    <Navbar />
    <div class="container-fluid">
      <div class="row">
        <Sidebar />
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
export default {
  components: {
    Navbar,
    Sidebar
  },
  created() {
    // 將token取出的方式
    const myCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)shopToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    // 取出後，往後端送，套用axios
    this.$http.defaults.headers.common.Authorization = myCookie;
  }
};
</script>
