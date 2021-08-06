<template>
  <div class="container">
    <!-- 头部区域 -->
    <GlobarHeader :user="currentUser" />
    <!-- 路由跳转区 -->
    <router-view></router-view>
    <!-- 底部区域 -->
    <footer>
      <small
        ><ul class="list-inline mb-0">
          <li class="list-inline-item">© 2020 者也专栏</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul></small
      >
    </footer>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobarHeader from "./components/GlobarHeader.vue";
import { useStore } from "vuex";
import { currentUserApi } from "@/request/api";
import request from "@/request/request";
export default defineComponent({
  name: "App",
  setup() {
    const store = useStore();
    if (sessionStorage.getItem("authorization")) {
      const getUserData = async (): Promise<void> => {
        // 获取用户信息
        let currentUserData = await request({
          url: currentUserApi,
        });
        if (currentUserData) {
          // 将个人信息存储到vuex中
          store.commit("setUserData", currentUserData);
        }
      };
      getUserData();
    }
    const currentUser = computed(() => store.state.user);
    return {
      currentUser,
    };
  },
  components: {
    GlobarHeader,
  },
});
</script>
<style lang="scss"></style>
