<template>
  <div>
    <h1>로그인</h1>
    <div class="row">
      <div class="col-8 offset-2">
        <form @submit.prevent="sendLogin">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" v-model="formData.email" class="form-control" id="email" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="formData.password" class="form-control" id="password" />
          </div>
          <button type="submit" class="btn btn-primary">로그인</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "loginComponent",
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    sendLogin() {
      axios.post("/api/login", this.formData).then((res) => {
        const data = res.data;
        console.log(data);
      });
    },
  },
};
</script>
<style scoped>
</style>