<template>
  <div class="validate-input-container pb-3">
    <input
      v-bind="$attrs"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      aria-describedby="emailHelp"
      :value="inputRef.val"
      @input="updateValue"
      @blur="validateEmail"
    />
    <span v-if="inputRef.error" style="color: red">{{ inputRef.message }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive, onMounted } from "vue";
// import { emitter } from "./ValidateForm.vue";
const emailReg =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
interface RuleProp {
  type: "required" | "email";
  message: string;
}
export type RulesProp = RuleProp[];
export default defineComponent({
  name: "ValidateInput",
  inheritAttrs: false,
  props: {
    rules: {
      type: Array as PropType<RulesProp>,
      required: true,
    },
    modelValue: String,
  },
  setup(props, context) {
    const inputRef = reactive({
      val: props.modelValue || "",
      error: false,
      message: "",
    });
    const validateEmail = () => {
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
            default:
              passed = true;
          }
          return passed;
        });
        inputRef.error = !allPassed;
      }
    };
    const updateValue = (e: KeyboardEvent) => {
      const targetVal = (e.target as HTMLInputElement).value;
      inputRef.val = targetVal;
      context.emit("update:modelValue", targetVal);
    };
    // onMounted(() => {
    //   emitter.emit("form-item-created", inputRef.val);
    // });
    return {
      inputRef,
      validateEmail,
      updateValue,
    };
  },
});
</script>
