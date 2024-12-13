<template>
  <div class="form">
    <div class="form-body flex">
      <div>
        <img
          class="w-100 boder-radius15"
          src="../../assets/img/login.png"
          alt=""
        />
      </div>
      <div class="form-main">
        <div class="form-title">
          <slot name="title"></slot>
        </div>
        <ms-input
          v-model="userPhone"
          :marginTopInput="18"
          :height="40"
          :fontSizeTile="24"
          placeholder="Phone Number"
          class="mb-15"
        ></ms-input>
        <ms-input
          v-model="password"
          :height="40"
          :fontSizeTile="24"
          placeholder="Password"
          type="password"
          class="mb-15"
        ></ms-input>
        <ms-button
          @click="handleLoginRegister"
          backgroundColor="rgb(177, 4, 4)"
          :marginTop="32"
          height="40px"
          width="100%"
          class="button-hover"
          ><slot />
        </ms-button>
        <div class="form-hr mt-32">
          <hr />
          <div class="text-hr">OR</div>
        </div>
        <div class="form-online grid-2-12 mt-32">
          <ms-button
            HeightButton="40px"
            backgroundColor="#fff"
            colorBorder="#525050"
            color="black"
            class="button-hover"
            >Facebook</ms-button
          >
          <ms-button
            HeightButton="40px"
            backgroundColor="#fff"
            colorBorder="#525050"
            color="black"
            class="button-hover"
            >Google</ms-button
          >
        </div>
        <div class="cs mt-8 text-center mt-16">
          <span>By registering, you agree to LiLi's</span>
          <br />
          <span class="text-cs">Terms of Service</span> &
          <span class="text-cs">Privacy Policy</span>
        </div>
        <div class="text-login text-center mt-32 mb-12">
          <slot name="text"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MsButton from "../../components/button/MsButton.vue";
import MsInput from "../input/Input.vue";
export default {
  name: "Theform",
  data() {
    return { userPhone: "", password: "" };
  },

  components: {
    MsInput,
    MsButton,
  },
  props: {
    LoginRegister: {
      type: Function,
      required: true,
    },
  },

  methods: {
    handleLoginRegister() {
      this.LoginRegister(this.userPhone, this.password); // Gọi hàm từ props với giá trị từ v-model
    },
  },
};
</script>
<style scoped>
.form {
  padding: 40px 0;
}
.form-hr {
  position: relative;
}
.form-hr hr {
}
.text-hr {
  position: absolute;
  left: 50%;
  border-radius: 4px;
  padding: 4px 8px;
  top: 50%;
  font-size: 12px;
  background: white;
  transform: translate(-50%, -50%);
}
.text-cs {
  color: rgb(173, 5, 5);
  font-size: 12px;
}
.form-body {
  margin: auto;
  width: 1040px;
  height: 465px;
  justify-content: space-between;
}
.form-main {
  width: 400px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid rgb(137, 136, 136);
  padding: 22px 30px;
}
.text-login {
  text-align: center;
}
.form-title {
  font-size: 180%;
  margin-bottom: 20px;
}
</style>
