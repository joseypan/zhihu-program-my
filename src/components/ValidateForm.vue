<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
import mitt from "mitt";
type validateFunc =()=>boolean
export const emitterTool = mitt();
export default defineComponent({
  name: "ValidateForm",
  emits: ["form-submit"],
  setup(props, context) {
    const funcArr:validateFunc[]=[];
    const submitForm = () => {
      // 调用funcArr中的方法判断是否都为true
      let validateResult=funcArr.map(func=>func()).every(result=>result)
      context.emit("form-submit", validateResult);
    };
    const callback = (func?:validateFunc) => {
      if(func){
        funcArr.push(func);
      }
    };
    emitterTool.on("form-item-created", callback);
    onUnmounted(() => {
      emitterTool.off("form-item-created", callback);
    });
    return {
      submitForm,
    };
  },
});
</script>
