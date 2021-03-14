<template>
  <div class="homeindex">
    <div
      class="jumbotron  jumbotron-fluid jumbotron-bg d-flex align-items-end mb-0"
    >
      <div class="container">
        <div class="text-bg p-4">
          <div class="h2">美好的日常從⼀盆瑰麗盛放的花開始</div>
          <p class="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
    </div>
    <!-- main -->
    <div class="course">
      <div class="container">
        <div class="row">
          <div class="col-lg col-md col-xs-12 card_grid">
            <div class="card">
              <div class="imgbox">
                <img
                  src="../assets/images/class_arrangment.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="coursename h2 text-white">法式插花藝術課</div>
              </div>
              <div class="card-body">
                <router-link to="/course" class="h6 text-white"
                  ><i class="fas fa-chevron-right mr-1"></i
                  >查看更多</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-lg col-md col-xs-12 card_grid">
            <div class="card">
              <div class="imgbox">
                <img
                  src="../assets/images/class_preserved.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="coursename h2 text-white">永生花手作課</div>
              </div>
              <div class="card-body">
                <router-link to="/course" class="h6 text-white"
                  ><i class="fas fa-chevron-right mr-1"></i
                  >查看更多</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-lg col-md col-xs-12 card_grid">
            <div class="card">
              <div class="imgbox">
                <img
                  src="../assets/images/class_mothersday.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="coursename h2 text-white">母親節花藝獻禮</div>
              </div>
              <div class="card-body">
                <router-link to="/course" class="h6 text-white"
                  ><i class="fas fa-chevron-right mr-1"></i
                  >查看更多</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- onlineshop -->
    <div class="onlineshop">
      <div class="bgtransparency">
        <div class="container shops_container text-center">
          <div class="h1 h1_title text-center">
            <i class="fas fa-store mr-3"></i>線上花店
          </div>
          <div class="row">
            <div class="col-lg col-md card_grid">
              <div class="card">
                <div class="imgbox">
                  <img
                    src="../assets/images/for_bouqiet.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body d-flex justify-content-between">
                  <div class="h3">花束</div>
                  <router-link to="/goods" class="btn btn-primary"
                    >查看更多</router-link
                  >
                </div>
              </div>
            </div>
            <div class="col-lg col-md card_grid">
              <div class="card">
                <div class="imgbox">
                  <img
                    src="../assets/images/for_basket.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body d-flex justify-content-between">
                  <div class="h3">花籃</div>
                  <router-link to="/goods" class="btn btn-primary"
                    >查看更多</router-link
                  >
                </div>
              </div>
            </div>
            <div class="col-lg col-md card_grid">
              <div class="card">
                <div class="imgbox">
                  <img
                    src="../assets/images/for_gift.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body d-flex justify-content-between">
                  <div class="h3">禮盒花</div>
                  <router-link to="/goods" class="btn btn-primary"
                    >查看更多</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- forwedding -->
    <div class="forwedding">
      <div class="weddingbg">
        <div class="container text-center">
          <div class="h1 h1_title text-center">
            <i class="fas fa-glass-martini-alt mr-3"></i>婚禮佈置
          </div>
          <div class="row">
            <div class="col-lg col-md col-xs-12 gridbox pr-0">
              <router-link to="/wedding">
                <img src="../assets/images/wedding01.jpg" alt="" />
              </router-link>
            </div>
            <div class="col-lg col-md col-xs-12 gridbox pl-0">
              <router-link to="/wedding">
                <img src="../assets/images/wedding02.jpg" alt="" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Homebanner from "../assets/images/pink-flowers-background.jpg";
export default {
  name: "Homeindex",
  data() {
    return {
      Homebanner: Homebanner
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  a:hover {
    text-decoration: none;
  }
  .h1_title {
    padding-top: 114px;
    padding-bottom: 64px;
    display: inline-block;
    position: relative;
    color: #f1d4ab;
    &:before {
      content: "";
      position: absolute;
      width: 300px;
      height: 1px;
      background-color: #f1d4ab;
      left: 50%;
      bottom: 60px;
      transform: translate(-50%, 0);
    }
  }
  .card {
    border: 0;
    border-radius: 8px;
    overflow: hidden;
  }
}
.jumbotron-bg {
  background-image: url("../assets/images/pink-flowers-background.jpg");
  background-size: cover;
  background-position: left bottom;
  min-height: 300px;
  .container {
    .text-bg {
      color: #f1d4ab;
    }
  }
}
// main
.course {
  background-color: #283b2c;
  padding-top: 40px;
  padding-bottom: 40px;
  .container {
    .row {
      .card_grid {
        .card {
          .imgbox {
            overflow: hidden;
            position: relative;
            &:before {
              content: "";
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 80%;
              height: 80%;
              background-color: rgba(0, 0, 0, 0.459);
              border-radius: 8px;
            }
            .coursename {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 100%;
              text-align: center;
            }
          }
          .card-body {
            background-color: #28671d;
          }
        }
      }
    }
  }
}
// onlineshop
.onlineshop {
  background-image: url("../assets/images/weddingbgi.jpg");
  background-size: cover;
  background-position: center bottom;
  .bgtransparency {
    background-color: rgba(14, 66, 13, 0.8);
    padding-bottom: 480px;
    .container {
      .row {
        .card_grid {
          .card {
            background-color: transparent;
            .imgbox {
              overflow: hidden;
              img {
                transform: scale(1, 1);
                transition: all 1s ease-out;
                &:hover {
                  transform: scale(1.2, 1.2);
                }
              }
            }
            .card-body {
              background-color: rgba(0, 0, 0, 0.5);
              display: flex;
              justify-content: space-between;
              align-items: center;
              .h3 {
                color: #fff;
                margin: 0;
              }
              a {
                height: fit-content;
              }
            }
          }
        }
      }
    }
  }
}
// forwedding
.forwedding {
  background-color: #876;
  height: 320px;
  position: relative;
  .weddingbg {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: -380px;
    .container {
      .row {
        .gridbox {
          overflow: hidden;
          &:first-child {
            a {
              img {
                border-radius: 8px 0 0 8px;
              }
            }
          }
          &:last-child {
            a {
              img {
                border-radius: 0 8px 8px 0;
              }
            }
          }
          a {
            display: block;
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .course {
    .container {
      .row {
        .card_grid {
          .card {
            .imgbox {
              .h2 {
                font-size: 1.3rem;
              }
            }
          }
        }
      }
    }
  }
  // onlineshop
  .onlineshop {
    .bgtransparency {
      padding-bottom: 300px;
      .container {
        .row {
          .card_grid {
            .card {
              margin-bottom: 60px;
              .card-body {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .h3 {
                  font-size: 1.2rem;
                  margin: 0;
                }
              }
            }
          }
        }
      }
    }
  }
  // forwedding
  .forwedding {
    height: 30vw;
    .weddingbg {
      top: -310px;
    }
  }
}
@media (max-width: 767px) {
  .course {
    .container {
      .row {
        padding: 0 15px;
        .card_grid {
          .card {
            margin-bottom: 60px;
            .imgbox {
              height: 200px;
            }
          }
          &:last-child {
            .card {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
  // onlineshop
  .onlineshop {
    .bgtransparency {
      padding-bottom: 400px;
      .container {
        .row {
          padding: 0 15px;
          .card_grid {
            .card {
              margin-bottom: 60px;
            }
          }
        }
      }
    }
  }
  // forwedding
  .forwedding {
    height: 100vw;
    .weddingbg {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      top: -380px;
      .container {
        .row {
          padding: 0 15px;
          .gridbox {
            margin-bottom: 60px;
            a {
              border-radius: 8px;
            }
            &:first-child {
              a {
                img {
                  border-radius: 8px;
                }
              }
            }
            &:last-child {
              a {
                img {
                  border-radius: 8px;
                }
              }
            }
          }
          .pr-0 {
            padding-right: 15px !important;
          }
          .pl-0 {
            padding-left: 15px !important;
          }
        }
      }
    }
  }
}
@media (max-width: 575px) {
  .course {
    .container {
      .row {
        .card_grid {
          .card {
            margin-bottom: 60px;
          }
        }
      }
    }
  }
  // onlineshop
  .onlineshop {
    .bgtransparency {
      padding-bottom: 360px;
      .container {
        .row {
          padding: 0 15px;
          .card_grid {
            .card {
              margin-bottom: 60px;
            }
          }
        }
      }
    }
  }
  // forwedding
  .forwedding {
    height: 120vw;
    .weddingbg {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      top: -380px;
      .container {
        .row {
          padding: 0 15px;
          .gridbox {
            margin-bottom: 60px;
            a {
              border-radius: 8px;
            }
            &:first-child {
              a {
                img {
                  border-radius: 8px;
                }
              }
            }
            &:last-child {
              a {
                img {
                  border-radius: 8px;
                }
              }
            }
          }
          .pr-0 {
            padding-right: 15px !important;
          }
          .pl-0 {
            padding-left: 15px !important;
          }
        }
      }
    }
  }
}
</style>
