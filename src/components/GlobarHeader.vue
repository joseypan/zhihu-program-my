<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">者也专栏</router-link>
      <ul v-if="!user.isLogin" class="list-inline mb-0">
        <li class="list-inline-item">
          <router-link to="/login" class="btn btn-outline-light my-2"
            >登录</router-link
          >
        </li>
        <li class="list-inline-item">
          <router-link to="/register" class="btn btn-outline-light my-2"
            >注册</router-link
          >
        </li>
      </ul>
      <ul v-else class="list-inline mb-0">
        <li class="list-inline-item">
          <Dropdown :title="`你好，${user.nickName}`">
            <DropdownItem
              ><a href="#" class="dropdown-item">新建文章</a></DropdownItem
            >
            <DropdownItem :disabled="true"
              ><a href="#" class="dropdown-item">编辑资料</a></DropdownItem
            >
            <DropdownItem
              ><a href="#" class="dropdown-item">退出登录</a></DropdownItem
            >
          </Dropdown>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import Dropdown from "./Dropdown.vue";
import DropdownItem from "./DropdownItem.vue";
import { UserProps } from "../store/index";

export default defineComponent({
  name: "GlobalHeader",
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
  
  components: {
    Dropdown,
    DropdownItem,
  },
});
</script>
