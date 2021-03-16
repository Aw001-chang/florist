<template>
  <div class="coustomerorders">
    <loading :active.sync="isLoading"></loading>
    <div class="procedure">
      <div class="container">
        <div class="row">
          <div class="step col-md-4 col-sm-12 active">
            <strong>1</strong>確認購物清單
          </div>
          <div class="step col-md-4 col-sm-12">
            <strong>2</strong>填寫訂購資料
          </div>
          <div class="step col-md-4 col-sm-12"><strong>3</strong>完成訂購</div>
        </div>
      </div>
    </div>
    <!-- orders -->
    <div class="order container">
      <div class="h5">購物車 ( 1件 )</div>
      <div class="table-header">
        <div class="row">
          <div class="col-4">商品資訊</div>
          <div class="col-3 text-center">單價</div>
          <div class="col-1">數量</div>
          <div class="col-3 text-center">小計</div>
          <div class="col-1"></div>
        </div>
      </div>
      <div class="table-body" v-for="item in cart.carts" :key="item.id">
        <div class="row">
          <div class="col-md-4 col-xs-12">
            <img
              :src="item.product.imageUrl"
              alt=""
              style="width:100px;margin-right:20px"
            />
            {{ item.product.title }}
          </div>
          <div class="col-md-3 col-xs-12 text-center price">
            {{ item.product.price | currency }}
          </div>
          <div class="col-md-1 col-xs-12 unit">
            {{ item.qty }}/{{ item.product.unit }}
          </div>
          <div class="col-md-3 col-xs-12 text-center final_total">
            {{ item.final_total | currency }}
          </div>
          <div class="col-md-1 col-xs-12 delete">
            <button class="btn btn-sm" @click="removeCartItem(item.id)">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="order_price text-right container">
        <div class="row">
          <div class="col-1"></div>
          <div class="h5 col align-self-end">
            總計 ： {{ cart.total | currency }}
          </div>
        </div>
      </div>
      <div class="order_price text-right container" v-if="cart.total !== cart.final_total">
        <div class="row">
          <div class="col-1"></div>
          <div class="h5 col align-self-end text-success">
            折扣價 ： {{ cart.final_total | currency }}
          </div>
        </div>
      </div>
      <div class="row justify-content-end mt-3">
        <div class="input-group col-lg-4 col-md-6">
          <input type="text" class="form-control" placeholder="輸入優惠卷代碼" v-model="couponCode">
          <div class="input-group-append">
              <button class="btn btn-outline-danger" type="button" @click="useCoupon">套用優惠卷</button>
          </div>
          <div class="codenumber col-12 mt-1">
            <div class="row align-items-center">
              <i class="fas fa-ticket-alt mr-2"></i>請輸入優惠代碼：520 ， 折扣80%
            </div>
          </div>
        </div>
        
      </div>
      <div class="nextstep text-right">
        <router-link to="/customerinformation" class="btn btn-outline-primary"
          >下一步<i class="fas fa-chevron-right ml-2"></i
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "coustomerorders",
  data() {
    return {
      isLoading: false,
      cart: [],
      couponCode:'',
    };
  },
  methods: {
    getCart() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/anpo/cart`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.cart = response.data.data;
        vm.isLoading = false;
        console.log(response);
      });
    },
    removeCartItem(id) {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/anpo/cart/${id}`;
      this.$http.delete(api).then(() => {
        vm.$bus.$emit("addtoCart:update", id);
        vm.getCart();
      });
    },
    createOrder() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/anpo/order`;
      const order = vm.form;
      this.$http.post(api, { data: order }).then(response => {
        console.log("訂單已建立", response);
        if (response.data.success) {
          vm.$router.push(`/checkout/${response.data.orderId}`);
        }
        vm.getCart();
      });
    },
    useCoupon(){
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/anpo/coupon`;
      vm.isLoading = true;
      this.$http.post(api, {data: {code: vm.couponCode}}).then(response => {
        vm.isLoading = false;
        if (response.data.success) {
          vm.couponCode='';
        } else {
          console.log(response.data)
        }
        vm.getCart();
      });
    },
  },
  created() {
    this.getCart();
  }
};
</script>

<style lang="scss" scoped>
.coustomerorders {
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
  // order
  .order {
    margin-top: 100px;
    .h5 {
      background-color: #e3e3e3;
      padding: 10px 16px;
      margin: 0;
      font-size: 1.4rem;
    }
    .table-header,
    .table-body {
      background-color: #fff;
      border-bottom: 1px solid #e3e3e3;
      .row {
        padding: 10px 16px;
        font-size: 1.2rem;
        align-items: center;
      }
    }
    .order_price {
      background-color: #fff;
      .h5 {
        background-color: #fff;
      }
    }
    .nextstep {
      margin-top: 60px;
      .btn {
        font-size: 1.2rem;
      }
    }
  }
}
@media (max-width: 767px) {
  .coustomerorders {
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
    // order
    .order {
      margin-top: 50px;
      .table-header {
        display: none;
      }
      .table-body {
        .row {
          position: relative;
          .price {
            text-align: left !important;
          }
          .final_total {
            position: absolute;
            width: auto;
            right: 15px;
            bottom: 10px;
          }
          .delete {
            width: auto;
            position: absolute;
            right: 15px;
            top: 10px;
          }
        }
      }
    }
  }
}
@media (max-width: 575px) {
  .coustomerorders {
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
    // order
    .order {
      margin-top: 50px;
      .table-header {
        display: none;
      }
      .table-body {
        .row {
          position: relative;
          .price {
            text-align: left !important;
          }
          .final_total {
            position: absolute;
            width: auto;
            right: 15px;
            bottom: 10px;
          }
          .delete {
            width: auto;
            position: absolute;
            right: 15px;
            top: 10px;
          }
        }
      }
    }
  }
}
</style>
