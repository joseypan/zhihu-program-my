import { createStore } from "vuex";
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default createStore({
  state: {
    user: {
      isLogin: false
    },
  },
  mutations: {
    setUserData(state,data){
      state.user={isLogin:true,...data}
    }
  },
  actions: {},
  modules: {},
});
