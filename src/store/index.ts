import { createStore } from "vuex";
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default createStore({
  state: {
    user: {
      isLogin: false,
      name: "josey",
      id: 1,
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
