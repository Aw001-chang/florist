<template>
  <div class="checkoutpage">
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
          <div class="step col-md-4 col-sm-12 active">
            <strong>3</strong>完成訂購
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="checkout container">
      <div class="h5">購物車 ( 1件 )</div>
      <form @submit.prevent="payOrder">
        <div class="table-header">
          <div class="row">
            <div class="col-4">商品資訊</div>
            <div class="col-3 text-center">單價</div>
            <div class="col-2">數量</div>
            <div class="col-3 text-center">小計</div>
          </div>
        </div>
        <div class="table-body" v-for="item in order.products" :key="item.id">
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
              {{ item.total | currency }}
            </div>
          </div>
          <div class="order_price text-right">
            <div class="row">
              <div class="col-1"></div>
              <div class="h5 col align-self-end">
                總計 ： {{ item.final_total | currency }}
              </div>
            </div>
          </div>
        </div>

        <!--  -->
        <div class="orderinfocheck row justify-content-center">
          <div class="col-md-8 table-body">
            <div class="row">
              <div class="col-lg-3 col">收件人姓名:</div>
              <div class="col-lg-9 col">{{ order.user.name }}</div>
            </div>
            <div class="row">
              <div class="col-lg-3 col">收件人電話:</div>
              <div class="col-lg-9 col">{{ order.user.tel }}</div>
            </div>
            <div class="row">
              <div class="col-lg-3 col">收件人Email:</div>
              <div class="col-lg-9 col">{{ order.user.email }}</div>
            </div>
            <div class="row">
              <div class="col-lg-3 col">收件人地址:</div>
              <div class="col-lg-9 col">{{ order.user.address }}</div>
            </div>
            <div class="row">
              <div class="col-lg-3 col">付款狀態:</div>
              <div class="col-lg-9 col">
                <span v-if="!order.is_paid">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </div>
            </div>
          </div>
          <div class="text-center col-12" v-if="order.is_paid === false">
            <button class="btn btn-danger">確認付款</button>
          </div>
          <div class="text-center col-12" v-if="order.is_paid">
            <router-link class="btn btn-outline-primary" to="/goods"
              >繼續購物</router-link
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "checkoutpage",
  data() {
    return {
      isLoading: false,
      order: {
        user: {}
      },
      orderId: ""
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/anpo/order/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.order = response.data.order;
        vm.isLoading = false;
        console.log(response);
      });
    },
    payOrder() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/anpo/pay/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.post(api).then((response) => {
        if(response.data.success){
          vm.$bus.$emit("addtoCart:update");
          vm.isLoading = false;
          vm.getOrder();
          this.$bus.$emit('message:push',response.data.message,'success');
        }else{
          this.$bus.$emit('message:push',response.data.message,'dannger');
        }
      });
    }
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  }
};
</script>

<style lang="scss">
.checkoutpage {
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
  //
  .checkout {
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
  //
  .orderinfocheck {
    margin-top: 60px;
    .table-body {
      background-color: rgb(255, 255, 255);
    }
    .text-center {
      margin-top: 30px;
      .btn {
        font-size: 1.2rem;
      }
    }
  }
}
@media (max-width: 767px) {
  .checkoutpage {
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
    //
    .checkout {
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
        }
      }
    }
    //
    .orderinfocheck {
      padding: 0 15px;
      .table-body {
        .row {
          div {
            &:first-child {
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 575px) {
  .checkoutpage {
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
    //
    .checkout {
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
        }
      }
    }
    //
    .orderinfocheck {
      padding: 0 15px;
      .table-body {
        .row {
          div {
            &:first-child {
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
</style>
