<template>
  <div>
    <form class="form-signin" @submit.prevent="signin">
      <h1 class="h3 mb-3 font-weight-normal d-block text-center">登入</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
        v-model="user.username"
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
        v-model="user.password"
      />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        登入
      </button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    signin() {
      const api = "https://vue-course-api.hexschool.io/admin/signin";
      const vm = this;
      this.$http.post(api, vm.user).then(response => {
        console.log(response.data);
        if (response.data.success) {
          const token = response.data.token;
          const expired = response.data.expired;
          // 以下是寫入的方式，必須再轉址之前，使用反引號、樣板字面值作儲存${}
          // cookie名稱 ＝ 值 ，到期日 ＝ 到期日的值;
          document.cookie = `shopToken=${token}; expires=${new Date(expired)};`;
          vm.$router.push("/admin/products");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/login.scss";
</style>
