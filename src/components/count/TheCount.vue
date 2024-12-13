<template>
  <div class="count flex" :style="{ height: CountHight }">
    <button
      class="count-giam"
      @click="decrement"
      :style="{ width: WidthButton }"
    >
      -
    </button>
    <input
      class="count-number"
      type="number"
      v-model="quantity"
      min="1"
      :style="{ width: WidthInput }"
    />
    <button
      class="count-tang"
      @click="increment"
      :style="{ width: WidthButton }"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  name: "TheCount",
  props: {
    CountHight: {
      type: String,
      default: "25px",
    },
    WidthButton: String,
    WidthInput: String,
    modelValue: {
      // Giá trị từ cha qua v-model
      type: Number,
      default: 1,
    },
  },
  computed: {
    quantity: {
      get() {
        return this.modelValue; // Lấy giá trị từ cha
      },
      set(value) {
        this.$emit("update:modelValue", Number(value)); // Truyền giá trị mới về cha
      },
    },
  },
  methods: {
    increment() {
      this.quantity += 1; // Tăng giá trị
    },
    decrement() {
      if (this.quantity > 1) {
        this.quantity -= 1; // Giảm giá trị
      }
    },
  },
};
</script>

<style scoped>
.count {
}
.count-giam,
.count-tang {
  width: 30px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgb(210, 210, 210);
  cursor: pointer;
}
.count-number {
  width: 35px;
  height: 100%;
  border: none;
  border-top: 1px solid rgb(210, 210, 210);
  border-bottom: 1px solid rgb(210, 210, 210);
  background-color: rgba(0, 0, 0, 0.03);
  text-align: center;
}
</style>
