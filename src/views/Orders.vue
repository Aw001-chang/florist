<template>
  <div class="orders">
    <loading :active.sync="isLoading"></loading>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">購買時間</th>
          <th>顧客姓名</th>
          <th>購買款項</th>
          <th width="180">應付金額</th>
          <th width="120">是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td>{{item.create_at|date}}</td>
          <td>{{item.user.name}}</td>
          <td v-for="(product,i) in item.products" :key="i" class="d-flex flex-column">
            {{product.product.title}} 數量：{{product.qty}}{{product.product.unit}}
          </td>
          <td class="text-right">{{item.total|currency}}</td>
          <td>
            <span v-if="item.is_paid" class="text-success">已付款</span>
            <span v-else class="text-secondary">未付款</span>
          </td>
        </tr>
      </tbody>
    </table>
    <!--  -->
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: !pagination.has_pre }">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="getOrders(pagination.current_page - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="page in pagination.total_pages"
          :key="page"
          :class="{ active: pagination.current_page === page }"
        >
          <a class="page-link" href="#" @click.prevent="getOrders(page)">{{
            page
          }}</a>
        </li>
        <li class="page-item" :class="{ disabled: !pagination.has_next }">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="getOrders(pagination.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name:'orders',
  data(){
    return{
      isLoading:false,
      orders:[],
      pagination: {} //分頁
    }
  },
  methods: {
    getOrders(page = 1) {
      const api = `https://vue-course-api.hexschool.io/api/anpo/orders?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.isLoading = false;
        vm.orders = response.data.orders;
        vm.pagination = response.data.pagination;
      });
    },
  },
  created() {
    this.getOrders();
  },
}
</script>

<style>

</style>