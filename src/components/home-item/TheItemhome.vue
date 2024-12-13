<template>
  <div class="item-box cur">
    <img class="item-img" :src="SrcItem" alt="" />
    <div class="item-detail">
      <p class="item-title cur p-hover"><slot name="item-title"></slot></p>
      <div class="item-pricesale flex-jc">
        <slot name="item-price"></slot>
        <slot name="item-sale"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheIteam",
  props: {
    SrcItem: String,
  },
};
</script>
<style scoped>
.item-box {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 15px;
  overflow: hidden;
}
.item-img {
  height: 340px;
}

.item-title {
  height: 50px;
  font-size: 110%;
  padding: 5px;
}
.item-pricesale {
  font-size: 110%;
  height: 20px;
  margin-bottom: 8px;
}
</style>
