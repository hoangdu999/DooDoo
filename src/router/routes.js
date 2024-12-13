import TheHome from "../view/home/TheHome.vue";
import TheRegister from "../view/register/TheRegister.vue";
import TheLogin from "../view/login/TheLogin.vue";
import TheDetail from "../view/detail/TheDatail.vue";
import TheCart from "../view/Cart/TheCart.vue";
import TheDieukhoan from "../view/Dieukhoan/TheDieukhoan.vue";

const routes = [
  {
    path: "/",
    component: TheHome,
    name: "Home",
  },

  {
    path: "/register",
    component: TheRegister,
  },

  {
    path: "/login",
    component: TheLogin,
  },
  {
    path: "/detail/:listType/:itemName",
    name: "Content",
    component: TheDetail,
  },
  {
    path: "/cart",
    name: "Cart",
    component: TheCart,
  },
  {
    path: "/dieukhoan",
    component: TheDieukhoan,
    name: "TheDieukhoan",
  },
];
export default routes;
