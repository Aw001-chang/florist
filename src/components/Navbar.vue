<template>
  <div class="navcomponent sticky-top">
    <nav class="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow">
      <router-link to="/" class="navbar-brand col-md-3 col-lg-2 mr-0 px-3">宣品花藝</router-link>
      <button
        class="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <input
        class="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click="signin_out">登出</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name:'navcomponent',
  methods: {
    signin_out() {
      const api = "https://vue-course-api.hexschool.io/logout";
      const vm = this;
      this.$http.post(api).then(response => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push("/");
        }
      });
    }
  }
};
</script>
