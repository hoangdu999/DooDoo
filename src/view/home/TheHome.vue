<template>
  <div class="home">
    <div class="home-uudai">
      <ul class="uudai-wrap flex">
        <li
          class="uudai-li border-hover cur item-hover"
          v-for="(item, index) in Constant.ListUuDai"
          :key="index"
        >
          <div class="uudai-box">
            <img class="uudai-icon" :src="item.icon" alt="" />
            <p class="uudai-title">{{ item.title }}</p>
            <p class="uudai-detail">{{ item.detail }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="home-xuhuong">
      <the-titlehome>SEARCH TRENDS</the-titlehome>
      <ul class="xuhuong-box flex">
        <li v-for="(item, index) in Constant.ListXuhuong" :key="index">
          <div>
            <img class="xuhuong-img item-hover" :src="item.src" alt="" />
          </div>
          <p class="xuhuong-text cur p-hover">{{ item.text }}</p>
        </li>
      </ul>
    </div>
    <div class="home-yeuthich">
      <the-titlehome>MOST POPULAR PRODUCTS</the-titlehome>
      <ul class="flex ul-yeuthich">
        <li
          class="li-yeuthich item-hover"
          v-for="(item, index) in Constant.ListYeuThich"
          :key="index"
          @mouseover="onHover(item)"
          @mouseout="onMouseOut(item)"
          @click="ShowDetail(item.text, 'ListYeuThich')"
        >
          <the-itemhome class="img-yeuthich" :SrcItem="item.src">
            <template #item-title>{{ item.text }}</template>
            <template #item-price>
              <p class="cl-red">{{ item.price }}</p>
            </template>
          </the-itemhome>
        </li>
      </ul>
      <div class="w-100 flex-jc pt-20 nowrap">
        <ms-button
          class="button-hover"
          backgroundColor="#ffff"
          color="rgb(70, 69, 69)"
          width="247px"
          height="52px"
          >VIEW ALL NEW PRODUCTS</ms-button
        >
      </div>
    </div>
    <div class="home-sale">
      <the-titlehome>PROMOTIONAL PRODUCTS</the-titlehome>
      <ul class="flex ul-yeuthich">
        <li
          class="li-yeuthich item-hover"
          v-for="(item, index) in Constant.ListSale"
          :key="index"
          @mouseover="onHover(item)"
          @mouseout="onMouseOut(item)"
          @click="ShowDetail(item.text, 'ListSale')"
        >
          <the-itemhome class="img-yeuthich" :SrcItem="item.src">
            <template #item-title>{{ item.text }}</template>
            <template #item-price
              ><p class="mr-10 price-yeuthich">
                {{ item.price }}
              </p>
            </template>
            <template #item-sale>
              <p class="cl-red">{{ item.sale }}</p>
            </template>
          </the-itemhome>
        </li>
      </ul>
      <div class="w-100 flex-jc pt-20">
        <ms-button
          class="button-hover nowrap"
          backgroundColor="#ffff"
          color="rgb(70, 69, 69)"
          width="300px"
          height="52px"
          >VIEW ALL PROMOTION PRODUCTS</ms-button
        >
      </div>
    </div>
    <div class="home-info w-100 flex item-center flex-col mt-50">
      <p class="info-sologan">LiLi - Premium Jewelry - High-end Jewelry</p>
      <p class="info-detail">
        At LiLi, jewelry is more than just an accessory – it is the embodiment
        of our passion, our love, and ultimately, LiLi's gift to you.
      </p>
      <div class="w-100 flex-jc pt-20 mt-30">
        <ms-button
          class="button-hover nowrap"
          backgroundColor="transparent"
          color="rgb(70, 69, 69)"
          width="144px"
          height="58px"
          >About us</ms-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import MsButton from "../../components/button/MsButton.vue";
import TheItemhome from "../../components/home-item/TheItemhome.vue";
import TheTitlehome from "../../components/Titile/TheTitlehome.vue";
import constants from "/src/assets/js/constants";

export default {
  components: { TheTitlehome, TheItemhome, MsButton },
  name: "TheHome",
  data() {
    return {
      Constant: constants,
      hoveredItems: [], // Theo dõi các mục đang hover
    };
  },

  mounted() {},
  beforeRouteLeave(to, from, next) {
    // Gọi onMouseOut cho tất cả các mục đang hover trước khi rời trang
    this.hoveredItems.forEach((item) => {
      this.onMouseOut(item);
    });
    next();
  },
  methods: {
    onHover(item) {
      item.src = item.hover;
      // Lưu mục đang hover để xử lý sau
      if (!this.hoveredItems.includes(item)) {
        this.hoveredItems.push(item);
      }
    },
    onMouseOut(item) {
      item.src = item.original;
      // Xóa mục khỏi danh sách hover
      this.hoveredItems = this.hoveredItems.filter(
        (hoveredItem) => hoveredItem !== item
      );
    },
    ShowDetail(name, listname) {
      this.$router.push({
        name: "Content",
        params: {
          listType: listname,
          itemName: name,
        },
      });
      this.$state.nameItem = name;
      this.$state.listType = listname;
      console.log(this.$state.nameItem);
      console.log(this.$state.listType);
    },
  },
};
</script>
<style scoped>
@import url(thehomecss.css);
</style>