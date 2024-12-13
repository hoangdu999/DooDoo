<template>
  <div class="detailnhan">
    <detail-template
      FlexBasiSwrap="50%"
      FlexBasiBoximg="49%"
      :detailArray="Constant.detailnhan"
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
        "https://lili.vn/wp-content/uploads/2021/05/Header_Ring_1f.jpg",
    };
  },
};
</script>

<style scoped>
</style>