<template>
  <div class="detailnhan">
    <detail-template
      FlexBasiSwrap="70%"
      FlexBasiBoximg="30%"
      :detailArray="Constant.detailxuyenxo"
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
        "https://lili.vn/wp-content/uploads/2021/08/Header_pierce.jpg",
    };
  },
};
</script>

<style scoped>
</style>