<!--
* @FileDescription: 封装上传组件
* @Author: 潘旭敏
* @Date: 2021-08-08
* @LastEditors: 潘旭敏
* @LastEditTime: 2021-08-08 10:21
 -->
<template>
  <div class="uploader">
    <div class="uploader-container" @click.prevent="handleUpload">
      <slot name="uploadArea">
        <button
          type="button"
          class="btn btn-primary"
          aria-haspopup="true"
          aria-expanded="false"
        >
          点击上传
        </button>
      </slot>
    </div>
    <input type="file" @change="getFile" class="hidden" ref="inputEle" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { uploadApi } from "@/request/api";
import request from "@/request/request";
export default defineComponent({
  name: "Uploader",
  props: {
    beforeUpload: Function,
  },
  setup(props, context) {
    const inputEle = ref<null | HTMLInputElement>(null);
    const handleUpload = () => {
      //   用户点击了点击上传按钮（触发inputEle的点击)
      if (inputEle.value) {
        inputEle.value.click();
      }
    };
    const getFile = async (e: Event) => {
      const currentTarget = e.target as HTMLInputElement;
      const fileList = currentTarget.files as FileList;
      const file: File = fileList[0];
      if (props.beforeUpload) {
        let result = props.beforeUpload(file);
        console.log(result);
      }
      const formData = new FormData();
      formData.append("file", file);
      //   请求
      let res = await request({
        method: "post",
        data: formData,
        url: uploadApi,
        options: {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      });
      console.log(res);
    };
    return {
      getFile,
      inputEle,
      handleUpload,
    };
  },
});
</script>
<style lang="scss" scoped>
.uploader {
  .uploader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    background-color: #eee;
    text-align: center;
    cursor: pointer;
  }
  input {
    display: none;
  }
}
</style>
