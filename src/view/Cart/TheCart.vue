<template>
  <div class="cart flex">
    <div class="cart-inforcustom">
      <div class="inforcustom-header">
        <p class="inforcustom-title">ORDER INFORMATION</p>
        <p>Your information will be kept absolutely confidential by LiLi.</p>
      </div>

      <div class="inforcustom-form">
        <p class="inforcustom-form-title">CUSTOMER INFORMATION</p>
        <form action="">
          <div class="inforcustom-form-top flex mb-15">
            <the-input
              class="inforcustom-form-name"
              placeholder="Full Name"
              height="50px"
            ></the-input>
            <the-input
              class="inforcustom-form-phone"
              placeholder="Phone Number"
              type="number"
              height="50px"
            ></the-input>
            <the-input
              class="inforcustom-form-email"
              placeholder="Email"
              type="email"
              height="50px"
            ></the-input>
          </div>
          <div class="inforcustom-form-mid flex mb-15">
            <the-selectlocation
              class="inforcustom-form-selector"
            ></the-selectlocation>
            <the-input
              class="inforcustom-form-address"
              placeholder="Address"
              height="50px"
            ></the-input>
          </div>
          <the-input
            class="inforcustom-form-note"
            placeholder="Order Notes"
            height="50px"
          ></the-input>
        </form>
      </div>
      <div class="payment-method">
        <p class="payment-title">PAYMENT METHODS</p>
        <div class="payment-options flex">
          <label class="payment-option">
            <input
              type="radio"
              class="m-10"
              name="payment-method"
              value="cod"
              checked
            />
            <span class="m-10">Cash on Delivery (COD)</span>
          </label>
          <label class="payment-option">
            <input
              class="m-10"
              type="radio"
              name="payment-method"
              value="bank-transfer"
            />
            <span class="m-10">Bank Transfer or E-wallet (Save 20,000đ)</span>
          </label>
          <label class="payment-option">
            <input
              class="m-10"
              type="radio"
              name="payment-method"
              value="momo"
            />
            <span class="m-10">MoMo QR Code (Save 10,000đ)</span>
          </label>
          <label class="payment-option">
            <input
              class="m-10"
              type="radio"
              name="payment-method"
              value="shopeepay"
            />
            <span class="m-10">ShopeePay QR Code (Save 10,000đ)</span>
          </label>
        </div>
      </div>
    </div>
    <div class="cart-inforcart">
      <p class="cart-inforcart-titel">ORDER DETAILS</p>
      <ul class="cart-inforcart-list">
        <li
          v-for="(item, index) in ListCart"
          :key="index"
          class="cart-item flex-js"
        >
          <div class="flex">
            <img
              class="cart-item-image"
              :src="item.src || 'default-image.jpg'"
              :alt="item.text || 'Product image'"
            />
            <div class="cart-item-detail">
              <p>{{ item.text }}</p>
              <!-- Calculate item total -->
              <TheCount
                CountHight="25px"
                WidthButton="20px"
                WidthInput="20px"
                v-model="item.quantity"
              />
            </div>
          </div>
          <div class="cart-item-detail">
            <p>{{ calculateItemTotal(item).toLocaleString("en-US") }}đ</p>
            <i
              @click="DeteleItem(item)"
              class="far fa-circle-xmark flex delete-item cur p-hover"
            ></i>
          </div>
        </li>
      </ul>
      <div class="flex cart-inforcart-code">
        <the-input
          class="cart-inforcart-code-input"
          placeholder="Promo Code"
          height="100%"
        ></the-input>
        <ms-button class="cart-inforcart-code-button button-hover" height="100%"
          >Apply</ms-button
        >
      </div>
      <div class="sum-temp-box">
        <div class="flex-js size-120 mb-5">
          <label for="">Subtotal</label>
          <p>{{ calculateTotalPrice.toLocaleString("vi-VN") }}đ</p>
        </div>
        <div class="flex-js size-120">
          <label for="">Shipping</label>
          <p>Free</p>
        </div>
      </div>
      <div class="sum-box flex-js cl-red mt-30">
        <label for="" class="size-120">Total</label>
        <p class="size-150">
          {{ calculateTotalPrice.toLocaleString("vi-VN") }}đ
        </p>
      </div>
      <ms-button
        class="pay button-hoverred"
        width="100%"
        height="58px"
        backgroundColor=" #C60018"
        @click="isShow"
        >PLACE ORDER</ms-button
      >
      <m-pop-up :isShow="IsShow" @close-pop-up="closePopup">
        <template #header>Notification</template>
        Order placed successfully!
      </m-pop-up>
    </div>
  </div>
</template>


<script>
import MsButton from "../../components/button/MsButton.vue";
import TheCount from "../../components/count/TheCount.vue";
import constants from "/src/assets/js/constants";
import Input from "../../components/input/Input.vue";
import TheSelectlocation from "../../components/selectLocation/TheSelectlocation.vue";
import MPopUp from "../../components/pop-up/MPopUp.vue";
import { reactive, computed, onMounted, toRefs  } from "vue";
import store from "/src/store/";

export default {
  name: "TheDetail",
  components: {
    TheInput: Input,
    TheSelectlocation: TheSelectlocation,
    TheCount: TheCount,
    MsButton: MsButton,
    MPopUp: MPopUp,
  },
  // data() {
  //   return {
  //     ListCart: [],
  //     parentQuantity: 1,
  //     IsShow: false,
  //   };
  // },
  // created() {
  //   this.ListCart = this.$state.Cart;
  //   console.log(this.ListCart);
  // },

  // mounted() {},

  // methods: {
  //   parsePrice(priceString) {
  //     return parseInt(priceString.replace("đ", "").replace(/\,/g, ""));
  //   },
  //   calculateItemTotal(item) {
  //     const price = this.parsePrice(item.sale || item.price);
  //     return price * item.quantity;
  //   },
  //   isShow() {
  //     this.IsShow = true;
  //   },
  //   closePopup() {
  //     this.IsShow = false;
  //   },
  //   DeteleItem(item) {
  //     this.ListCart = this.ListCart.filter((i) => i !== item);
  //     this.$state.Cart = this.ListCart;
  //   },
  // },

  // computed: {
  //   // Tính tổng tiền của toàn bộ ListCart
  //   calculateTotalPrice() {
  //     return this.ListCart.reduce((total, item) => {
  //       console.log(this.$state.Cart);

  //       return total + this.calculateItemTotal(item); // Cộng dồn tổng giá
  //     }, 0);
  //   },
  // },

  setup(){

    const StatePublic = store.state;
    const state = reactive({
      ListCart:[],
      parentQuantity: 1,
      IsShow: false,
    });
    onMounted(()=>{
      state.ListCart = StatePublic.Cart || [];
      console.log(state.ListCart);
    });
    const parsePrice = (priceString) => {
      return parseInt(priceString.replace("đ", "").replace(/\,/g, ""));
    };
    const calculateItemTotal = (item) => {
      const price = parsePrice(item.sale || item.price);
      return price * item.quantity;
    };
    const isShow = () => {
      state.IsShow = true;
    };
    const closePopup = () => {
      state.IsShow = false;
    };
    const DeteleItem = (item) => {
      state.ListCart = state.ListCart.filter((i) => i !== item);
      StatePublic.Cart = state.ListCart;
    };
    const calculateTotalPrice = computed(() => {
      return state.ListCart.reduce((total, item) => {
        console.log(StatePublic.Cart);

        return total + calculateItemTotal(item); // Cộng dồn tổng giá
      }, 0);
    });
    return {
      ...toRefs(state), 
      calculateItemTotal,
      isShow,
      closePopup,
      DeteleItem,
      calculateTotalPrice,
    };
  }
};
</script>
<style scoped>
@import url(TheCartcss.css);
</style>