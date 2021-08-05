<template>
  <div class="validate-input-container pb-3">
    <input
      v-if="tag !== 'textarea'"
      v-bind="$attrs"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      :value="inputRef.val"
      @input="updateValue"
      @blur="validateInputData"
    />
    <textarea
      v-else
      v-bind="$attrs"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      :value="inputRef.val"
      @input="updateValue"
      @blur="validateInputData"
    ></textarea>
    <span v-if="inputRef.error" style="color: red">{{ inputRef.message }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive,onMounted } from "vue";
import { emitterTool } from "./ValidateForm.vue";
const emailReg =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
interface RuleProp {
  type: "required" | "email" | "custom";
  message: string;
  validator?: () => boolean;
}
export type RulesProp = RuleProp[];
export type tagType = "input" | "textarea";
export default defineComponent({
  name: "ValidateInput",
  inheritAttrs: false,
  props: {
    rules: {
      type: Array as PropType<RulesProp>,
      required: true,
    },
    modelValue: String,
    tag: {
      type: String as PropType<tagType>,
      default: "input",
    },
  },
  setup(props, context) {
    const inputRef = reactive({
      val: props.modelValue || "",
      error: false,
      message: "",
    });
    const validateInputData = () => {
      if (props.rules) {
        const allPassed = props.rules.every((rule) => {
          let passed = true;
          inputRef.message = rule.message;
          switch (rule.type) {
            case "required":
              passed = inputRef.val.trim() !== "";
              break;
            case "email":
              passed = emailReg.test(inputRef.val);
              break;
            case "custom":
              passed = rule.validator ? rule.validator() : true;
              break;
            default:
              passed = true;
          }
          return passed;
        });
        inputRef.error = !allPassed;
        return allPassed;
      }
    };
    const updateValue = (e: KeyboardEvent) => {
      const targetVal = (e.target as HTMLInputElement).value;
      inputRef.val = targetVal;
      context.emit("update:modelValue", targetVal);
    };
    onMounted(() => {
      // 将检测结果返回给validateForm
      emitterTool.emit("form-item-created", validateInputData);
    });
    return {
      inputRef,
      validateInputData,
      updateValue,
    };
  },
});
</script>
