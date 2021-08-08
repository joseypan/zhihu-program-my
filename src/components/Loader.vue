<!--
* @FileDescription: loading组件封装
* @Author: 潘旭敏
* @Date: 2021-08-07
* @LastEditors: 潘旭敏
* @LastEditTime: 2021-08-07 15:40
 -->
<template>
  <teleport to="#back">
    <div
      class="
        loader-container
        d-flex
        justify-content-center
        align-items-center
        h-100
        w-100
        loading-container
      "
      :style="{ backgrondColor: bgColor || '' }"
    >
      <div class="loading-content">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only"></span>
        </div>
        <p v-if="text" class="text-primary small">{{ text }}</p>
      </div>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
import { createNode } from "../hooks/useCreateNode";
export default defineComponent({
  name: "Loader",
  props: {
    bgColor: String,
    text: String,
  },
  setup(props) {
    const loadingNode = createNode("back");
    onUnmounted(() => {
      document.body.removeChild(loadingNode);
    });
  },
});
</script>
<style lang="scss" scoped>
.loader-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: 0.5);
  z-index: 100;
  text-align: center;
  .loading-content {
    z-index: 101;
  }
}
</style>
