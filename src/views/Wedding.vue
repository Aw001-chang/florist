<template>
  <div class="wedding">
    <div
      class="jumbotron  jumbotron-fluid jumbotron-bg d-flex align-items-end mb-0"
    >
      <div class="container">
        <div class="text-bg p-4">
          <h1 class="display-4">婚禮佈置</h1>
          <p class="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="container">
      <div class="wedding_style">
        <div class="weddingpage_title text-center">
          <div class="h2">鄉村庭園風</div>
        </div>
        <!-- 輪播 -->
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../assets/images/wedding4.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/images/wedding01.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/images/wedding02.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <!-- 描述 -->
        <div class="discription">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 text-white textarea">
              <p>在這裡 我們將為您打造一場令人難忘的婚禮/活動佈置</p>
              <p>我們喜歡聆聽每對新人獨一無二的愛情故事</p>
              <p>我們熱愛參與每對新人天馬行空的佈置想像</p>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 text-white textarea">
              <p>森林小精靈舞動，牽起陣陣微風，空氣中散發著輕甜自然芬多精</p>
              <p>自然調的清新森林風格，在蔥鬱的森林庭園中，透出純淨質感</p>
              <p>在幸福鐘聲敲響之時，百花綻放，百鳥齊鳴帶來優美祝福</p>
            </div>
          </div>
        </div>
      </div>
      <!-- style 2 -->
      <div class="wedding_style">
        <div class="weddingpage_title text-center">
          <div class="h2">蔚藍海洋風</div>
        </div>
        <!-- 輪播 -->
        <div id="carouselOcean" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li
              data-target="#carouselOcean"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselOcean" data-slide-to="1"></li>
            <li data-target="#carouselOcean" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../assets/images/weddingocean01.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/images/weddingocean02.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/images/wedding02.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselOcean"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselOcean"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <!-- 描述 -->
        <div class="discription">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 text-white textarea">
              <p>為喜歡大海、極富冒險精神，將整片浩瀚深藍席入場中</p>
              <p>現在，我們決定以愛結誓，展開人生最幸福的篇章</p>
              <p>走入這片美麗的初夏河畔花園，新人正在交換誓言</p>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 text-white textarea">
              <p>這不僅是一場婚禮，他們想告訴所有人</p>
              <p>身邊有位不畏全世界的眼光執意與自己相守的真愛</p>
              <p>而這份愛，我們希望能讓所有人看見</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wedding"
};
</script>

<style lang="scss">
.wedding {
  .jumbotron-bg {
    background-image: url("../assets/images/weddingbanner.jpg");
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
  //
  .container {
    .wedding_style {
      margin-top: 100px;
      margin-bottom: 100px;
      .weddingpage_title {
        margin-top: 60px;
        margin-bottom: 60px;
        .h2 {
          position: relative;
          display: inline-block;
          color: #f1d4ab;
          &:before {
            content: "";
            position: absolute;
            width: 300px;
            height: 1px;
            background-color: #f1d4ab;
            bottom: -4px;
            left: 50%;
            transform: translate(-50%, 0);
          }
        }
      }
    }
    //
    .carousel {
      max-height: 400px;
      overflow: hidden;
      .carousel-inner {
        .carousel-item {
          img {
            width: 100%;
          }
        }
      }
    }
    //
    .discription {
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 1rem;
      .row {
        .textarea {
          p {
            margin: 0;
            line-height: 24px;
            letter-spacing: 2px;
          }
          &:first-child {
            position: relative;
            text-align: right;
            &:after {
              content: "";
              position: absolute;
              width: 1px;
              height: 100%;
              right: 0;
              top: 0;
              background-color: #39523e;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 991px) {
  .wedding {
    .container {
      .discription {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 1rem;
        .row {
          position: relative;
          .textarea {
            text-align: center;
            margin-bottom: 10px;
            p {
              font-size: 1.1rem;
            }
            &:first-child {
              text-align: center;
              &:after {
                content: none;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .wedding {
    .container {
      .discription {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 1rem;
        .row {
          position: relative;
          .textarea {
            text-align: center;
            margin-bottom: 10px;
            p {
              font-size: 1.1rem;
            }
            &:first-child {
              text-align: center;
              &:after {
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
  .wedding {
    .container {
      .discription {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 1rem;
        .row {
          position: relative;
          .textarea {
            text-align: center;
            margin-bottom: 10px;
            p {
              font-size: 1.1rem;
            }
            &:first-child {
              text-align: center;
              &:after {
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
