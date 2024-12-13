<template>
  <div class="detailnhan">
    <detail-template
      FlexBasiSwrap="70%"
      FlexBasiBoximg="30%"
      :detailArray="Constant.detaildaychuyen"
      :ImgDetail="SrcImgDetail"
    ></detail-template>
  </div>
</template>

<script>
import constants from "/src/assets/js/constants";
import DetailTemplate from "../DetailTemplate/DetailTemplate.vue";
export default {
  components: { DetailTemplate },
  name: "DetailNhan",
  data() {
    return {
      Constant: constants,
      SrcImgDetail:
        "https://lili.vn/wp-content/uploads/2021/05/Header_Necklace_1f.jpg",
    };
  },
};
</script>

<style scoped>
</style>