<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="header-top flex">
        <div class="header-logo">
          <a href="/"
            ><img
              src="https://lili.vn/wp-content/uploads/2022/04/VLogo_LiLi_Horizontal_Premium-1.svg"
              alt=""
          /></a>
        </div>
        <div class="header-searchbar">
          <TheSearchbar> </TheSearchbar>
        </div>
        <ms-button
          class="button-home button-hover"
          backgroundColor="#ffff"
          color="rgb(70, 69, 69)"
          >Viewed products</ms-button
        >
        <ms-button
          @click="AccountAction()"
          class="button-home"
          backgroundColor="#ffff"
          color="rgb(70, 69, 69)"
          >Account</ms-button
        >
        <div>
          <a href="/cart">
            <img
              class="cart"
              src="https://lili.vn/wp-content/uploads/2022/04/bag-shopping.svg"
              alt=""
          /></a>
        </div>
      </div>
      <div class="header-bot flex">
        <ul class="listcategory flex">
          <div
            v-for="(category, index) in Constant.categories"
            :key="index"
            @mouseenter="
              index !== Constant.categories.length - 1
                ? showDetail(category.component)
                : null
            "
            @mouseleave="
              index !== Constant.categories.length - 1 ? hideDetail() : null
            "
            class="category-wrapper"
          >
            <li class="listcategory-name">
              {{ category.name }}
            </li>
          </div>
          <div
            @mouseenter="isHovering = true"
            @mouseleave="hideDetail"
            class="showdetail"
            v-if="isHovering"
          >
            <component :is="this.currentDetail" />
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TheSearchbar from "../../components/searchbar/TheSearchbar.vue";
import constants from "/src/assets/js/constants";
import MsButton from "../button/MsButton.vue";
import TheDetaildaychuyen from "../DetailCatagory/Detaildaychuyen/TheDetaildaychuyen.vue";
import TheDetailnhan from "../DetailCatagory/DetailNhan/TheDetailnhan.vue";
import TheDetailvonglac from "../DetailCatagory/DetailVongLac/TheDetailVongLac.vue";
import TheDetailBongTai from "../DetailCatagory/DetailBongTai/TheDetailBongTai.vue";
import TheDetailXuyenXo from "../DetailCatagory/DetailXuyenXo/TheDetailXuyenXo.vue";
import TheDetailTrangSucBo from "../DetailCatagory/DetailTrangSucBo/TheDetailTrangSucBo.vue";
import TheDetailTrangSucDoi from "../DetailCatagory/DetailTrangSucDoi/TheDetailTrangSucDoi.vue";
import TheDetailPhongThuy from "../DetailCatagory/DetailPhongThuy/TheDetailPhongThuy.vue";
import TheDetailQuaTang from "../DetailCatagory/DetailQuaTang/TheDetailQuaTang.vue";
import TheDetailPhuKien from "../DetailCatagory/DetailPhuKien/TheDetailPhuKien.vue";
export default {
  name: "ToDoAppTheHeader",
  components: {
    TheSearchbar,
    MsButton,
    TheDetailnhan,
    TheDetailvonglac,
    TheDetaildaychuyen,
    TheDetailXuyenXo,
    TheDetailTrangSucDoi,
    TheDetailPhongThuy,
    TheDetailQuaTang,
  },
  data() {
    return {
      isHovering: false,
      Constant: constants,
      currentDetail: null, // Lưu trữ component động hiện tại
    };
  },

  mounted() {},

  methods: {
    showDetail(component) {
      this.isHovering = true;
      this.currentDetail = component;
    },

    hideDetail() {
      this.isHovering = false;
    },
    AccountAction() {
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
@import url(./theheader.css);
</style>