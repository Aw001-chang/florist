<template>
  <div class="goods">
    <loading :active.sync="isLoading"></loading>
    <div class="products pb-5">
      <div
        class="jumbotron  jumbotron-fluid jumbotron-bg d-flex align-items-end mb-0"
      >
        <div class="container">
          <div class="text-bg p-4">
            <h1 class="display-4">線上花店</h1>
            <p class="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>
      </div>
      <div class="container product_container mt-5">
        <div class="row">
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 goods_menu">
            <div class="list-group">
              <a
                href="javascript:;"
                class="list-group-item list-group-item-action"
                :class="{ active: isActive.active === '花束' }"
                @click.prevent="changeCategory('花束')"
                >花束</a
              >
              <a
                href="javascript:;"
                class="list-group-item list-group-item-action"
                :class="{ active: isActive.active === '盆花' }"
                @click.prevent="changeCategory('盆花')"
                >盆花</a
              >
              <a
                href="javascript:;"
                class="list-group-item list-group-item-action"
                :class="{ active: isActive.active === '禮盒花' }"
                @click.prevent="changeCategory('禮盒花')"
                >禮盒花</a
              >
            </div>
          </div>
          <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 goods_contant">
            <div class="row">
              <div
                class="col-xl-4 col-lg-6 col-md-6 col-sm-12 goods_item"
                v-for="item in nowCategory"
                :key="item.id"
              >
                <div class="card mb-5">
                  <img :src="item.imageUrl" class="card-img-top" alt="..." />
                  <div class="card-body text-white">
                    <h5 class="card-title text-left">{{ item.title }}</h5>
                    <div
                      class="pric_area d-flex flex-row justify-content-between"
                    >
                      <div class="h5" v-if="!item.price">
                        {{ item.origin_price | currency }}
                      </div>
                      <del class="h6" v-if="item.price">{{
                        item.origin_price | currency
                      }}</del>
                      <div class="h5" v-if="item.price">
                        {{ item.price | currency }}
                      </div>
                    </div>
                    <div
                      class="button_area d-flex flex-row justify-content-between"
                    >
                      <a
                        href="#"
                        class="btn btn-outline-info"
                        @click.prevent="getProduct(item)"
                        >詳細資訊</a
                      >
                      <a
                        href="#"
                        class="btn btn-primary"
                        @click.prevent="addtoCart(item.id)"
                        >加入購物車</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- modal -->
      <div
        class="modal fade"
        id="goodsModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-md" role="document">
          <div class="modal-content border-0">
            <div class="modal-header bg-white text-dark">
              <div class="h4">{{ product.title }}</div>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img class="img-fluid" alt="" :src="product.imageUrl" />
              <blockquote class="blockquote mt-3">
                <p class="mb-0">{{ product.content }}</p>
                <footer class="blockquote-footer text-right">
                  {{ product.description }}
                </footer>
              </blockquote>
              <div class="d-flex justify-content-between align-items-baseline">
                <div class="h4" v-if="!product.price">
                  {{ product.origin_price | currency }} 元
                </div>
                <del class="h6" v-if="product.price"
                  >原價{{ product.origin_price | currency }} 元</del
                >
                <div class="h4" v-if="product.price">
                  現在只要{{ product.price | currency }} 元
                </div>
              </div>
              <select name="" class="form-control mt-3" v-model="product.num">
                <option :value="num" v-for="num in 10" :key="num">
                  選購 {{ num }}{{ product.unit }}
                </option>
              </select>
            </div>
            <div class="modal-footer">
              <div class="text-muted text-nowrap mr-3">
                小計<strong>{{ product.num * product.price }}</strong> 元
              </div>
              <button
                type="button"
                class="btn btn-primary"
                @click.prevent="addtoCart(product.id, product.num)"
              >
                加到購物車
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- 以下為購物車 -->
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import ProductsBanner from "../assets/images/pink-flowers-background.jpg";

// import Footer from '@/components/Footer.vue';
export default {
  name: "Goods",
  data() {
    return {
      isLoading: false,
      ProductsBanner,
      products: [],
      product: {}, //存放modal資料
      nowCategory: [],
      nowCategoryTitle: "",
      isActive: {
        active: ""
      },
      // 以下為購物車列表
      cart: []
    };
  },
  methods: {
    getProducts() {
      const api = `https://vue-course-api.hexschool.io/api/anpo/products/all`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.products = response.data.products;
        vm.isLoading = false;
        vm.nowCategory = vm.products.filter(
          item => item.category.indexOf("花束") !== -1
        );
        vm.isActive.active = "花束";
      });
    },
    getProduct(item) {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/anpo/product/${item.id}`;
      this.$http.get(api).then(response => {
        vm.product = response.data.product;
        vm.product.num = 1;
        $("#goodsModal").modal("show");
        console.log(response);
      });
    },
    addtoCart(id, qty = 1) {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/anpo/cart`;
      const cart = {
        product_id: id,
        qty
      };
      this.$http.post(api, { data: cart }).then(response => {
        if(response.data.success){
          // console.log(response);
          this.$bus.$emit('message:push',response.data.message,'success');
          vm.$bus.$emit("addtoCart:update", (id, (qty = 1)));
          vm.getCart();
          $("#goodsModal").modal("hide");
        }else{
          this.$bus.$emit('message:push',response.data.message,'dannger');
        }
        
      });
    },
    getCart() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/anpo/cart`;
      this.$http.get(api).then(response => {
        vm.cart = response.data.data;
        console.log(response);
      });
    },
    removeCartItem(id) {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/anpo/cart/${id}`;
      this.$http.delete(api).then(() => {
        vm.$bus.$emit("addtoCart:update");
        vm.getCart();
      });
    },
    changeCategory(category) {
      const vm = this;
      vm.nowCategoryTitle = category;
      if (category === "全部") {
        vm.nowCategory = vm.products;
        vm.isActive.active = "全部";
      } else if (category !== "全部") {
        vm.nowCategory = vm.products.filter(item => {
          return item.category === category;
        });
        vm.isActive.active = category;
      }
    }
  },
  created() {
    this.getProducts();
    this.getCart();
  }
};
</script>

<style lang="scss">
.goods {
  .products {
    background-color: #091f0e;
    .jumbotron-bg {
      background-image: url("../assets/images/pink-flowers-background.jpg");
      background-size: cover;
      background-position: left bottom;
      min-height: 300px;
      .container {
        .text-bg {
          color: #f1d4ab;
          h1 {
            font-weight: bold;
          }
        }
      }
    }
    // product_container
    .product_container {
      .row {
        .goods_menu {
          .list-group {
            .list-group-item {
              background-color: #00460e;
              color: #fff;
              font-size: 1.2rem;
            }
            .active {
              background-color: #0d8425;
              border-color: transparent;
            }
          }
        }
        .goods_contant {
          .row {
            .goods_item {
              .card {
                border: 0;
                background-color: transparent;
                .card-body {
                  background-color: #283b2c;
                  border-radius: 0 0 0.25em 0.25em;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .goods {
    .products {
      .product_container {
        .row {
          padding: 0 15px;
          .goods_menu {
            margin-bottom: 20px;
            .list-group {
              justify-content: space-between;
              align-items: center;
              flex-direction: row;
              .list-group-item {
                width: 33.333333%;
                border-radius: 0;
                text-align: center;
                padding: 16px 0;
                &:first-child {
                  border-radius: 8px 0 0 8px;
                }
                &:last-child {
                  border-radius: 0 8px 8px 0;
                }
              }
            }
          }
          .goods_contant {
            .row {
              padding: 0;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 575px) {
  .goods {
    .products {
      .product_container {
        .row {
          padding: 0 15px;
          .goods_menu {
            margin-bottom: 20px;
            .list-group {
              justify-content: space-between;
              align-items: center;
              flex-direction: row;
              .list-group-item {
                width: 33.333333%;
                border-radius: 0;
                text-align: center;
                padding: 16px 0;
                &:first-child {
                  border-radius: 8px 0 0 8px;
                }
                &:last-child {
                  border-radius: 0 8px 8px 0;
                }
              }
            }
          }
          .goods_contant {
            .row {
              padding: 0;
            }
          }
        }
      }
    }
  }
}
</style>
