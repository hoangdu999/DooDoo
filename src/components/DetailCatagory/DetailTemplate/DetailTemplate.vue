<template>
  <div class="detailvonglac flex">
    <div class="detailvonglac-wrap flex" :style="{ flexBasis: FlexBasiSwrap }">
      <div
        class="detailvonglac-box"
        v-for="(detailvonglac, indexs) in detailArray"
        :key="indexs"
      >
        <p class="detailvonglac-title">{{ detailvonglac.tilte }}</p>
        <div class="box-border"></div>
        <ul>
          <li
            class="detailvonglac-detail cur p-hover"
            v-for="(detail, index) in detailvonglac.details"
            :key="index"
          >
            {{ detail }}
          </li>
        </ul>
      </div>
    </div>
    <div class="detailvonglac-boximg" :style="{ flexBasis: FlexBasiBoximg }">
      <img class="detailvonglac-img cur" :src="ImgDetail" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailTemplate",
  data() {
    return {};
  },
  props: {
    FlexBasiSwrap: String,
    FlexBasiBoximg: String,
    detailArray: Array,
    ImgDetail: String,
    ImgDetail: String,
  },
};
</script>

<style scoped>
.detailvonglac {
  padding: 30px;
  max-width: 100%;
  flex-wrap: wrap;
}
.detailvonglac-box {
  width: 220px;
  margin-right: 20px;
}
.detailvonglac-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.detailvonglac-title {
  margin-bottom: 5px;
  font-size: 16px;
}
.box-border {
  border-top: 1px solid black;
}
.detailvonglac-detail {
  margin-top: 28px;
  font-size: 14px;
}
.detailvonglac {
  overflow: hidden;
  max-height: 300px;
}
</style>