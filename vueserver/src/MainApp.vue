<template>
  <div class="container">
    <!-- row start -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">YY Chat</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" @click="changeMenu(0)" :class="{ active: menu === 0 }">
              <router-link to="/" class="nav-link">
                Home
              </router-link>
          </li>
        </ul>
        <div class="my-group">
            <router-link to="/register" class="btn btn-outline-primary">회원가입</router-link>
            <router-link to="/login" class="btn btn-outline-success">로그인</router-link>
        </div>
      </div>
    </nav>
    <!-- row end -->
    <div class="row my-3">
      <div class="col-12">
        <section class="content">
          <transition name="sc" mode="out-in">
            <router-view></router-view>
          </transition>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MainApp",
  data() {
    return {
      menu: 0,
    };
  },
  methods: {
    changeMenu(idx) {
      console.log(idx);
      this.menu = idx;
    },
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  overflow: hidden;
}
</style>