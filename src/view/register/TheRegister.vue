<template>
  <div>
    <the-form :LoginRegister="Register"
      >Register
      <template #title>Register</template>
      <template #text
        >Already have an account?<a href="/login" class="sp-login"
          ><span>Login</span></a
        >
      </template>
    </the-form>
  </div>
</template>

<script>
import TheForm from "../../components/form-register-login/TheForm.vue";
export default {
  components: { TheForm },
  name: "TheRegister",
  data() {
    return {};
  },

  mounted() {},

  methods: {
    Register(userPhone, password) {
      // Lấy danh sách người dùng hiện tại từ localStorage
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // Kiểm tra số điện thoại đã tồn tại chưa
      const userExists = users.some((user) => user.phone === userPhone);
      if (userExists) {
        alert("Số điện thoại đã được đăng ký!");
        return;
      }

      // Thêm người dùng mới
      users.push({ phone: userPhone, password: password });
      localStorage.setItem("users", JSON.stringify(users));
      console.log(users);
      alert("Đăng ký thành công!");
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
.sp-login {
  color: var(--brg-form);
}
.sp-login span:hover {
  color: black;
}
</style>