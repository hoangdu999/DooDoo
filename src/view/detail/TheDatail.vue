<template>
  <div>
    <div class="detail-item flex">
      <div class="detail-img">
        <img :src="this.item.src" alt="" />
      </div>
      <div class="detail-wrap">
        <div class="wrap-top">
          <div class="wrap-itemname">{{ this.item.text }}</div>
          <p class="wrap-intro">
            You will not only look more beautiful and elegant when wearing this
            silver necklace with a unique mermaid design, but also show off your
            own aesthetic taste. Imagine how charming and attractive you will be
            when you wear this necklace to work, on a date or out with friends.
            It is made from specialized 925 silver, highlighted by high-quality
            Cubic Zirconia stones and meticulously crafted by skilled artisans.
            Let's go out and shine with it!!
          </p>
          <p class="detail-price cl-red">
            {{ this.item.sale || this.item.price }}
          </p>
        </div>
        <div class="wrap-button flex">
          <the-count CountHight="100%" v-model="parentQuantity"></the-count>
          <ms-button
            class="button-hoverred"
            backgroundColor="#c60018"
            height="100%"
            width="100%"
            @click="ToCart"
            >BUY NOW</ms-button
          >
          <ms-button
            class="button-hover"
            backgroundColor="#ffff"
            color="black"
            height="100%"
            width="100%"
            >CALL FOR FREE CONSULTATION</ms-button
          >
        </div>
        <div class="wrap-bonus">
          <p class="wrap-bonustitle flex">LIMITED QUANTITY PREMIUM GIFT SET</p>
          <ul class="wrap-bonuslist flex">
            <li
              class="wrap-bonusitem flex"
              v-for="(item, index) in Const.detailbonus"
              :key="index"
            >
              <img class="wrap-bonusimg" :src="item.src" alt="" />
              <p class="wrap-bonustext">{{ item.text }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import MsButton from "../../components/button/MsButton.vue";
import TheCount from "../../components/count/TheCount.vue";
import constants from "/src/assets/js/constants";
import store from "/src/store/";
import routerPublic from "/src/router/routes.js";

export default {
  components: { TheCount, MsButton },
  name: "TheDetail",
  // data() {
  //   return {
  //     Const: constants,
  //     parentQuantity: 1,
  //     item: {},
  //   };
  // },
  // created() {
  //   console.log("Global state in TheDetail:", StatePublic);
  //   const listTypeKey = RouterPublic.params.listType;
  //   const itemName = RouterPublic.params.itemName;

  //   if (!this.Const[listTypeKey]) {
  //     console.error(`List type ${listTypeKey} not found in constants.`);
  //     return;
  //   }

  //   const listType = this.Const[listTypeKey];

  //   this.item = listType.find((item) => item.text === itemName);

  //   if (!this.item) {
  //     console.error(`Item ${itemName} not found in list type ${listTypeKey}.`);
  //     console.log(itemName);
  //     console.log(listTypeKey);
  //   } else {
  //     console.log("Matched item:", this.item);
  //   }
  // },

  // mounted() {},

  // methods: {
  //   ToCart() {
  //     console.log("Add to cart:", this.item);
  //     console.log("Add to cart:", StatePublic.Cart);

  //     const existingItem = StatePublic.Cart.find(
  //       (cartItem) => cartItem.text === this.item.text
  //     );
  //     this.item.id = StatePublic.Cart.length + 1;

  //     if (existingItem) {
  //       existingItem.quantity += this.parentQuantity;
  //     } else {
  //       StatePublic.Cart.push({
  //         ...this.item,
  //         quantity: this.parentQuantity,
  //       });
  //     }

  //     console.log("Updated Cart:", StatePublic.Cart);

  //     RouterPublicr.push({ name: "Cart" });
  //   },
  //   computed: {},
  // },
  setup(){
    
    const RouterPublic = routerPublic;
    const StatePublic = store.state;

    const state = reactive({
      Const: constants,
      parentQuantity: 1,
      item: {},
    });
    onMounted(()=>{
      console.log("Global state in TheDetail:", StatePublic);
      console.log("Global state in TheDetail:", RouterPublic);

      const listTypeKey = RouterPublic.params.listType;
      const itemName = RouterPublic.params.itemName;

      if (!this.Const[listTypeKey]) {
        console.error(`List type ${listTypeKey} not found in constants.`);
        return;
      }

      const listType = this.Const[listTypeKey];

      this.item = listType.find((item) => item.text === itemName);

      if (!this.item) {
        console.error(`Item ${itemName} not found in list type ${listTypeKey}.`);
        console.log(itemName);
        console.log(listTypeKey);
      } else {
        console.log("Matched item:", this.item);
      }
    });
    const ToCart = ()=>{
      console.log("Add to cart:", this.item);
      // console.log("Add to cart:", StatePublic.Cart);

      const existingItem = StatePublic.Cart.find(
        (cartItem) => cartItem.text === this.item.text
      );
      this.item.id = StatePublic.Cart.length + 1;

      if (existingItem) {
        existingItem.quantity += this.parentQuantity;
      } else {
        StatePublic.Cart.push({
          ...this.item,
          quantity: this.parentQuantity,
        });
      }

      console.log("Updated Cart:", StatePublic.Cart);

      RouterPublicr.push({ name: "Cart" });
    };
    return {
      ...toRefs(state), 
      ToCart,
    };
  }
};
</script>
<style scoped>
@import url(TheDetailCss.css);
</style>