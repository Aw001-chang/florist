<template>
  <div class="coursepage">
    <loading :active.sync="isLoading"></loading>
    <div
      class="jumbotron  jumbotron-fluid jumbotron-bg d-flex align-items-end mb-0"
    >
      <div class="container">
        <div class="text-bg p-4">
          <h1 class="display-4">課程介紹</h1>
          <p class="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="container">
      <div class="item pt-5 pb-5" v-for="item in course" :key="item.id">
        <div class="card">
          <div class="row no-gutters">
            <div class="col-lg-3 col-md col-xs">
              <img :src="item.imageUrl" class="card-img" alt="..." />
            </div>
            <div class="col-lg-9 col-md col-xs">
              <div class="card-body">
                <div class="h3 card-title">{{ item.title }}</div>
                <p class="card-text">
                  <small class="text-muted">報名截止日期：2021/01/20</small>
                </p>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseBanner from "../assets/images/coursebanner.jpg";
export default {
  name: "course",
  data() {
    return {
      isLoading: false,
      CourseBanner,
      products: [],
      course: []
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
        vm.course = vm.products.filter(
          item => item.category.indexOf("課程") !== -1
        );
      });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

<style lang="scss">
.coursepage {
  background-image: url("../assets/images/course_bg.jpg");
  background-size: cover;
  .jumbotron-bg {
    background-image: url("../assets/images/coursebanner.jpg");
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
  .container {
    padding: 0 30px;
    .item {
      border-bottom: 1px solid #1d5c2c;
      .card {
        border: 0;
        .row {
          .col-lg-3 {
            overflow: hidden;
            img {
              height: 100%;
              border-radius: 0.25rem 0 0 0.25rem;
            }
          }
          .col-lg-9 {
            .card-body {
              .card-text {
                font-size: 1.2rem;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 991px) {
  .coursepage {
    .container {
      .item {
        padding: 0 15px;
        .card {
          .row {
            .col-md-5 {
              img {
                width: auto;
                display: block;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .coursepage {
    .container {
      .item {
        padding: 0 15px;
        .card {
          .row {
            .col-xs {
              img {
                border-radius: 0.25rem 0.25rem 0 0;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 575px) {
  .coursepage {
    .container {
      .item {
        padding: 0 15px;
        .card {
          .row {
            .col-xs {
              img {
                border-radius: 0.25rem 0.25rem 0 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
