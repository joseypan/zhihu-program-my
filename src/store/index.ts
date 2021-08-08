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
    isLoading:false
  },
  mutations: {
    setUserData(state,data){
      state.user={isLogin:true,...data}
    },
    changeLoadingState(state,loadingState:boolean){
      state.isLoading=loadingState;
    }
  },
  actions: {},
  modules: {},
});
