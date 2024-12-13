<template>
  <div>
    <the-header />
    <div class="container flex">
      <div class="sidebar">
        <!-- <the-sidebar v-if="!shouldHideSidebar" /> -->
      </div>
      <div class="container-main w-100">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <the-footer />
  </div>
</template>
<script>
import TheFooter from "./components/footer/TheFooter.vue";
import TheHeader from "./components/header/TheHeader.vue";
import TheSidebar from "./components/sidebar/TheSidebar.vue";
export default {
  components: {
    TheFooter,
    TheHeader,
    TheSidebar,
  },
  created() {
    // this.$state.setDefaultState();
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {},

  methods: {},
};
</script>
<style>
@import url(./assets/css/index.css);
.container-main {
  margin-top: 137.59px;
  padding: 40px 64px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
