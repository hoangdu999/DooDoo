import { reactive } from "vue";

const state = reactive({
  toggleSidebar: true,
  nameItem: "",
  listName: "",
  Cart: [],
});
export default {
  state,
};
