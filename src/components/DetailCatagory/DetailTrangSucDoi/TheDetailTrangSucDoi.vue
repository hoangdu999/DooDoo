<template>
  <div class="detailnhan">
    <detail-template
      FlexBasiSwrap="50%"
      FlexBasiBoximg="49%"
      :detailArray="Constant.detailtrangsucdoi"
      :ImgDetail="SrcImgDetail"
    ></detail-template>
  </div>
</template>

<script>
import DetailTemplate from "../DetailTemplate/DetailTemplate.vue";
import constants from "/src/assets/js/constants";

export default {
  components: { DetailTemplate },
  name: "DetailBongTai",
  data() {
    return {
      Constant: constants,

      SrcImgDetail:
        "https://lili.vn/wp-content/uploads/2021/05/Header_Couple_1f.jpg",
    };
  },
};
</script>

<style scoped>
</style>