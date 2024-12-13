<template>
  <div>
    <the-form :LoginRegister="Login"
      >Login
      <template #title> Login</template>
      <template #text
        >New to LiLi?
        <a href="/register" class="sp-register"><span>Register</span></a>
      </template>
    </the-form>
  </div>
</template>

<script>
import TheForm from "../../components/form-register-login/TheForm.vue";
export default {
  components: { TheForm },
  name: "TheLogin",
  data() {
    return {};
  },

  mounted() {},

  methods: {
    Login(userPhone, password) {
      // Lấy danh sách người dùng từ localStorage
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // Kiểm tra thông tin đăng nhập
      const user = users.find(
        (user) => user.phone === userPhone && user.password === password
      );

      if (user) {
        alert("Đăng nhập thành công!");
        this.$router.push("/"); // Chuyển hướng sau khi đăng nhập thành công
      } else {
        alert("Số điện thoại hoặc mật khẩu không đúng!");
      }
    },
  },
};
</script>
<style scoped>
.sp-register {
  color: var(--brg-form);
}
.sp-register span:hover {
  color: black;
}
</style>