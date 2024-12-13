<template>
  <div class="footer">
    <div class="home-tomluoc">
      <ul class="uudai-wrap flex">
        <li
          class="uudai-li"
          v-for="(item, index) in Constant.ListTomLuoc"
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
    <div class="footer-bot flex">
      <div class="footer-infor">
        <div class="footer-logo mb-15">
          <img
            class="w-100"
            src="https://lili.vn/wp-content/uploads//2022/04/VLogo_LiLi_Horizontal.svg"
            alt=""
          />
        </div>
        <ul>
          <li
            class="flex cur p-hover"
            v-for="(item, index) in Constant.ListInfor"
            :key="index"
          >
            <div class="mr-10 pb-25 footer-inforicon">
              <i :class="item.icon" class="w-100"></i>
            </div>
            <p class="footer-infortext">{{ item.title }}</p>
          </li>
        </ul>
        <ul class="flex">
          <li
            class="mr-10"
            v-for="(item, index) in Constant.ListCNC"
            :key="index"
          >
            <a :href="item.src">
              <i :class="item.icon" class="w-100"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-listservies-hr">
        <ul class="flex">
          <li
            class="mr-10 listservies-box"
            v-for="(items, indexs) in Constant.ListServies"
            :key="indexs"
          >
            <p class="listservies-title">{{ items.title }}</p>
            <div class="listservies-hr"></div>
            <ul>
              <li
                class="listservies-detail cur p-hover"
                v-for="(item, index) in items.service"
                :key="index"
              >
                <a href="/dieukhoan"
                  ><p>{{ item }}</p></a
                >
              </li>
              <ms-button
                class="button-hover"
                width="100%"
                height="40px"
                backgroundColor="#ffff"
                color="black"
                v-if="indexs === Constant.ListServies.length - 1"
                >SEND COMMENTS</ms-button
              >
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MsButton from "../button/MsButton.vue";
import constants from "/src/assets/js/constants";
export default {
  name: "ToDoAppTheFooter",
  components: {
    MsButton,
  },
  data() {
    return {
      Constant: constants,
    };
  },

  mounted() {},

  methods: {},
};
</script>
<style scoped>
@import url(thefooter.css);
</style>