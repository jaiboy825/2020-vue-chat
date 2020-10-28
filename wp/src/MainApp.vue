<template>
  <div class="container">
      <!-- row start -->
    <div class="row my-2">
      <div class="col-12">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">활성링크</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/board" class="nav-link">메뉴2</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">메뉴3</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">메뉴4</router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- row end -->
    <!-- sec row start -->
    <div class="row">
        <div class="col-12">
            <section class="content">
                <router-view></router-view>
            </section>
        </div>
    </div>
    <!-- sec row end -->
  </div>
</template>
<script>
export default {
  name: "MainApp",
  methods: {
    aaa() {
      swal.fire("안녕하세요");
    },
  },
};
</script>
<style scoped>
</style>