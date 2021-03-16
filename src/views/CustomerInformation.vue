<template>
  <div class="coustomerinformation">
    <loading :active.sync="isLoading"></loading>
    <div class="procedure">
      <div class="container">
        <div class="row">
          <div class="step col-md-4 col-sm-12 active">
            <strong>1</strong>確認購物清單
          </div>
          <div class="step col-md-4 col-sm-12 active">
            <strong>2</strong>填寫訂購資料
          </div>
          <div class="step col-md-4 col-sm-12"><strong>3</strong>完成訂購</div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="container">
      <div class="row justify-content-center info">
        <div class="infobox" style="width:768px">
          <div class="infotitle text-center"><strong>訂購資訊</strong></div>
          <validation-observer v-slot="{ invalid }" style="width:100%">
            <form @submit.prevent="createOrder">
              <div class="row">
                <validation-provider
                  rules="required"
                  v-slot="{ errors, failed }"
                  name="姓名"
                  class="col-sm-6"
                >
                  <div class="form-group">
                    <label for="username"><span class="text-danger">*</span>收件人姓名</label>
                    <input
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': failed }"
                      name="name"
                      id="username"
                      v-model="form.user.name"
                      placeholder="輸入姓名"
                    />
                    <span v-if="failed" class="invalid-feedback">{{
                      errors[0]
                    }}</span>
                  </div>
                </validation-provider>
                <validation-provider
                  rules="required|phone"
                  v-slot="{ errors, classes }"
                  name="手機號碼"
                  class="col-sm-6"
                >
                  <div class="form-group">
                    <label for="usertel"><span class="text-danger">*</span>收件人電話</label>
                    <input
                      type="tel"
                      class="form-control"
                      :class="classes"
                      id="usertel"
                      v-model="form.user.tel"
                      placeholder="請輸入電話"
                    />
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </div>
                </validation-provider>
              </div>
              <validation-provider
                rules="required|email"
                v-slot="{ errors, classes }"
              >
                <div class="form-group">
                  <label for="email"><span class="text-danger">*</span>Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    v-model="form.user.email"
                    class="form-control"
                    :class="classes"
                  />
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </div>
              </validation-provider>
              <validation-provider
                rules="required"
                v-slot="{ errors, classes }"
                name="地址欄位不得留空"
              >
                <div class="form-group">
                  <label for="useraddress"><span class="text-danger">*</span>收件人地址</label>
                  <input
                    type="text"
                    class="form-control"
                    :class="classes"
                    name="address"
                    id="useraddress"
                    v-model="form.user.address"
                    placeholder="請輸入地址"
                  />
                  <span class="text-danger">{{ errors[0] }}</span>
                </div>
              </validation-provider>
              <div class="form-group">
                <label for="comment">留言</label>
                <textarea
                  id="comment"
                  class="form-control"
                  cols="30"
                  rows="10"
                  v-model="form.message"
                ></textarea>
              </div>
              <div class="text-right btns">
                <router-link to="/goods" class="btn btn-outline-primary mr-2"
                  >繼續選購</router-link
                >
                <button class="btn btn-danger" :disabled="invalid">
                  送出訂單
                </button>
              </div>
            </form>
          </validation-observer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery';
export default {
  name: "coustomerInformation",
  data() {
    return {
      isLoading: false,
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: ""
        },
        message: ""
      }
    };
  },
  methods: {
    getCart() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/anpo/cart`;
      this.$http.get(api).then(response => {
        vm.cart = response.data.data;
        console.log(response);
      });
    },
    createOrder() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/anpo/order`;
      const order = vm.form;
      vm.isLoading = true;
      this.$http.post(api, { data: order }).then(response => {
        console.log("訂單已建立", response);
        vm.isLoading = false;
        if (response.data.success) {
          vm.$router.push(`/checkout/${response.data.orderId}`);
        }
        vm.getCart();
      });
    }
  },
  created() {
    this.getCart();
  }
};
</script>

<style lang="scss" scoped>
.coustomerinformation {
  background-color: #f8f8fa;
  padding-bottom: 100px;
  .procedure {
    padding-top: 100px;
    .container {
      .row {
        .step {
          font-size: 1.1rem;
          background-color: rgb(227, 227, 227);
          text-align: center;
          padding: 12px 0;
          position: relative;
          color: rgb(89, 141, 106);
          letter-spacing: 1px;
          &:before {
            content: "";
            position: absolute;
            width: 6px;
            height: 100%;
            background-color: #f8f8fa;
            top: 0;
            left: 0;
          }
          &:after {
            content: "";
            position: absolute;
            display: block;
            width: 0;
            height: 0;
            right: 0px;
            top: 0;
            background-color: #fff;
            border-width: 26px 0 26px 30px;
            border-style: solid;
            border-color: #f8f8fa transparent #f8f8fa rgb(227, 227, 227);
          }
          strong {
            font-size: 1.2rem;
            margin-right: 20px;
          }
          &:last-child {
            &:after {
              border: none;
            }
          }
        }
        .active {
          background-color: rgb(89, 141, 106);
          color: #fff;
          &:after {
            border-color: #f8f8fa transparent #f8f8fa rgb(89, 141, 106);
          }
        }
      }
    }
  }
  // info
  .info {
    margin-top: 100px;
    .infobox {
      border-radius: 8px;
      .infotitle {
        strong {
          border-radius: 8px 8px 0 0;
          display: block;
          background-color: #e3e3e3;
          margin: 0;
          font-size: 1.4rem;
          margin-bottom: 20px;
          padding: 10px 0;
        }
      }
      form {
        font-size: 1.2rem;
        .form-group {
          #comment {
            height: 130px;
          }
        }
        .btns {
          margin-top: 30px;
          margin-bottom: 30px;
          .btn {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .coustomerinformation {
    background-color: #f8f8fa;
    padding-bottom: 50px;
    .procedure {
      padding-top: 50px;
      .container {
        .row {
          padding: 0 15px;
          .step {
            &:before {
              content: none;
            }
            &:after {
              content: none;
            }
            strong {
              position: absolute;
              top: 50%;
              transform: translate(0, -50%);
              left: 26%;
            }
          }
        }
      }
    }
    // info
    .info {
      margin-top: 50px;
      padding: 0 15px;
      .infobox {
        border-radius: 0;
        .infotitle {
          strong {
            border-radius: 0;
          }
        }
      }
    }
  }
}
@media (max-width: 575px) {
  .coustomerinformation {
    background-color: #f8f8fa;
    padding-bottom: 50px;
    .procedure {
      padding-top: 50px;
      .container {
        .row {
          padding: 0 15px;
          .step {
            &:before {
              content: none;
            }
            &:after {
              content: none;
            }
            strong {
              position: absolute;
              top: 50%;
              transform: translate(0, -50%);
              left: 26%;
            }
          }
        }
      }
    }
    // info
    .info {
      margin-top: 50px;
      padding: 0 15px;
      .infobox {
        border-radius: 0;
        .infotitle {
          strong {
            border-radius: 0;
          }
        }
      }
    }
  }
}
</style>
