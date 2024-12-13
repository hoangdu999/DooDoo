<template>
  <div class="detailvonglac">
    <detail-template
      FlexBasiSwrap="70%"
      FlexBasiBoximg="30%"
      :detailArray="Constant.detailvonglacs"
      :ImgDetail="SrcImgDetail"
    ></detail-template>
  </div>
</template>

<script>
import constants from "/src/assets/js/constants";

import DetailTemplate from "../DetailTemplate/DetailTemplate.vue";
export default {
  components: { DetailTemplate },
  name: "DetailVongLac",
  data() {
    return {
      Constant: constants,

      SrcImgDetail:
        "https://lili.vn/wp-content/uploads/2021/05/Header_Bracelet_1f.jpg",
    };
  },
};
</script>

<style scoped>
</style>