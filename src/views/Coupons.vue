<template>
  <div class="coupons">
    <loading :active.sync="isLoading"></loading>
    <div class="text-right mt-3">
      <button class="btn btn-outline-primary" @click="openModal(true)">
        建立優惠券
      </button>
    </div>
    <!--  -->
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{item.title}}</td>
          <td>{{item.percent}}%</td>
          <td>{{item.due_date}}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else class="text-secondary">未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm ml-1" @click="openDeleteModal(item)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Modal -->
    <div
      class="modal fade"
      id="couponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span v-if="isNew">新增優惠券</span>
              <span v-if="!isNew">編輯優惠券</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">標題</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="請輸入標題"
                v-model="tempCoupon.title"
              >
            </div>
            <div class="form-group">
              <label for="title">優惠碼</label>
              <input
                type="text"
                class="form-control"
                id="code"
                placeholder="請輸入優惠碼"
                v-model="tempCoupon.code"
              >
            </div>
            <div class="form-group">
              <label for="title">到期日</label>
              <input
                type="date"
                class="form-control"
                id="due_date"
                placeholder="請輸入到期日"
                v-model="tempCoupon.due_date"
              >
            </div>
            <div class="form-group">
              <label for="title">折扣百分比</label>
              <input
                type="text"
                class="form-control"
                id="percent"
                placeholder="此處是填寫銷售百分比，輸入 80 代表打八折"
                v-model="tempCoupon.percent"
              >
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="tempCoupon.is_enabled"
                  true-value="1"
                  false-value="0"
                  id="is_enabled"
                >
                <label class="form-check-label" for="is_enabled">是否啟用</label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary"
              @click="updateCoupon">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data(){
    return{
      isLoading:false,
      name:'coupons',
      coupons:[],
      tempCoupon:{},
      isNew: false,
      pagination: {},
    }
  },
  methods: {
    getCoupons(page = 1) {
      const api = `https://vue-course-api.hexschool.io/api/anpo/admin/coupons?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.isLoading = false;
        vm.coupons = response.data.coupons;
        vm.pagination = response.data.pagination;
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempCoupon = {};
        this.isNew = true;
      } else {
        this.tempCoupon = Object.assign({}, item);
        this.isNew = false;
      }
      $("#couponModal").modal("show");
    },
    updateCoupon() {
      let api = "https://vue-course-api.hexschool.io/api/anpo/admin/coupon";
      let httpMethod = "post";
      const vm = this;                                                  
      if (!vm.isNew) {
        api = `https://vue-course-api.hexschool.io/api/anpo/admin/coupon/${vm.tempCoupon.id}`;
        httpMethod = "put";
      }
      this.$http[httpMethod](api, { data: vm.tempCoupon }).then(response => {
        console.log(response.data);
        if (response.data.success) {
          $("#couponModal").modal("hide");
          vm.getCoupons();
        } else {
          $("#couponModal").modal("hide");
          vm.getCoupons();
          console.log("新增失敗");
        }
      });
    },
  },
  created() {
    this.getCoupons();
  },
}
</script>

<style>

</style>