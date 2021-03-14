<template>
  <div class="frontnav">
    <div class="front_navbar">
      <div class="container">
        <nav class="navbar navbar-expand-lg">
          <router-link to="/home" class="navbar-brand">
            <img src="../assets/brand_logo.png" alt="" />
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link to="/course" class="nav-link">課程</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/goods" class="nav-link">線上花店</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/wedding" class="nav-link"
                  >婚禮佈置</router-link
                >
              </li>
            </ul>
            <!-- <router-link to="./login" class="adminlogin btn btn-outline-primary ml-2">後台管理員登入</router-link> -->
          </div>
          <!-- 以下購物車 -->
          <div class="cartsbtn dropdown ml-auto">
            <button
              class="btn btn-cart btn-sm dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-shopping-cart fa-2x text-white"></i>
              <span
                class="badge badge-pill badge-danger"
                v-if="cart.carts !== undefined && cart.carts.length > 0"
                >{{ cart.carts.length }}</span
              >
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <div class="px-4 py-3" style="min-width: 300px;">
                <h6>
                  已選擇商品 {{ cart.carts !== undefined && cart.carts.length }}
                </h6>
                <table
                  class="table table-hover"
                  v-if="cart.carts !== undefined && cart.carts.length > 0"
                >
                  <tbody>
                    <tr v-for="item in cart.carts" :key="item.id">
                      <td class="align-middle text-center">
                        <a
                          href="#"
                          class="text-muted"
                          data-toggle="modal"
                          data-target="#removeModal"
                          @click="removeCartItem(item.id)"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </a>
                      </td>
                      <td class="align-middle">{{ item.product.title }}</td>
                      <td class="align-middle">
                        {{ item.qty }}/{{ item.product.unit }}
                      </td>
                      <td class="align-middle text-right">
                        {{ item.total | currency }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <router-link
                  to="/customerorders"
                  v-if="cart.carts !== undefined && cart.carts.length > 0"
                  class="btn btn-primary btn-block"
                  >結帳去</router-link
                >
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrontNav",
  data() {
    return {
      cart: {}
    };
  },
  methods: {
    getCart() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/anpo/cart`;
      this.$http.get(api).then(response => {
        vm.cart = response.data.data;
      });
    },
    removeCartItem(id) {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/anpo/cart/${id}`;
      this.$http.delete(api).then(() => {
        vm.$bus.$emit("addtoCart:update");
        vm.getCart();
      });
    }
  },
  created() {
    const vm = this;
    vm.getCart();
    vm.$bus.$on("addtoCart:update", () => {
      vm.getCart();
    });
  }
};
</script>

<style lang="scss" scoped>
.front_navbar {
  background-color: #00460e;
  display: block;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  .container {
    .navbar {
      .navbar-brand {
        color: #fff;
        background-color: transparent;
        box-shadow: none;
        font-size: 1.6rem;
        letter-spacing: 0.1rem;
        img {
          width: 200px;
        }
      }
      //
      .collapse {
        .navbar-nav {
          .nav-item {
            .nav-link {
              color: #f1d4ab;
              font-size: 1.2rem;
              letter-spacing: 0.1rem;
            }
          }
        }
        .adminlogin {
          border-color: #c4c4c4;
          color: #c4c4c4;
        }
      }
    }
  }
}
.cartsbtn {
  position: relative;
  .dropdown-toggle {
    &:after {
      color: #fff;
    }
  }
  .badge {
    position: absolute;
    right: 0;
    top: 0;
  }
}
@media (max-width: 991px) {
  .front_navbar {
    box-shadow: 0px 5px 10px #002d08;
    .container {
      .navbar {
        .navbar-brand {
          padding: 0;
          img {
            width: 120px;
          }
        }
        .navbar-toggler {
          border: 1px solid #f1d4ab;
          .navbar-toggler-icon {
            color: #f1d4ab;
            height: auto;
            width: auto;
          }
        }
        //
        .collapse {
          padding-top: 20px;
          .navbar-nav {
            .nav-item {
              .nav-link {
                border-bottom: 1px solid #8a7862;
              }
              &:nth-child(3) {
                .nav-link {
                  border-bottom: 0;
                }
              }
            }
          }
        }
        .cartsbtn {
          position: fixed;
          z-index: 10;
          bottom: 15px;
          right: 15px;
          .btn {
            position: relative;
            &:before {
              content: "";
              position: absolute;
              width: 60px;
              height: 60px;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background-color: #00460e;
              z-index: -1;
              border-radius: 50%;
              box-shadow: 2px 2px 10px #002d08;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .front_navbar {
    box-shadow: 0px 1px 8px #002d08;
    .container {
      .navbar {
        .navbar-brand {
          padding: 0;
          img {
            width: 120px;
          }
        }
        .navbar-toggler {
          border: 1px solid #f1d4ab;
          .navbar-toggler-icon {
            color: #f1d4ab;
            height: auto;
            width: auto;
          }
        }
        //
        .collapse {
          padding-top: 20px;
          .navbar-nav {
            .nav-item {
              .nav-link {
                border-bottom: 1px solid #8a7862;
              }
              &:nth-child(3) {
                .nav-link {
                  border-bottom: 0;
                }
              }
            }
          }
        }
        .cartsbtn {
          position: fixed;
          z-index: 10;
          bottom: 15px;
          right: 15px;
          .btn {
            position: relative;
            &:before {
              content: "";
              position: absolute;
              width: 60px;
              height: 60px;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background-color: #00460e;
              z-index: -1;
              border-radius: 50%;
              box-shadow: 1px 1px 8px #002d08;
            }
          }
          .dropdown-menu {
            top: auto;
            bottom: 100%;
            .btn {
              &:before {
                content: none;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 575px) {
  .front_navbar {
    box-shadow: 0px 1px 8px #002d08;
    .container {
      .navbar {
        .navbar-brand {
          padding: 0;
          img {
            width: 120px;
          }
        }
        .navbar-toggler {
          border: 1px solid #f1d4ab;
          .navbar-toggler-icon {
            color: #f1d4ab;
            height: auto;
            width: auto;
          }
        }
        //
        .collapse {
          padding-top: 20px;
          .navbar-nav {
            .nav-item {
              .nav-link {
                border-bottom: 1px solid #8a7862;
              }
              &:nth-child(3) {
                .nav-link {
                  border-bottom: 0;
                }
              }
            }
          }
        }
        .cartsbtn {
          position: fixed;
          z-index: 10;
          bottom: 15px;
          right: 15px;
          .btn {
            position: relative;
            &:before {
              content: "";
              position: absolute;
              width: 60px;
              height: 60px;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background-color: #00460e;
              z-index: -1;
              border-radius: 50%;
              box-shadow: 1px 1px 8px #002d08;
            }
          }
          .dropdown-menu {
            top: auto;
            bottom: 100%;
            .btn {
              &:before {
                content: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
