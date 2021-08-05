<template>
  <div class="create-poem">
    <h4>编辑文章</h4>
    <h2>点击上传头图</h2>
    <validate-form>
      <div class="mb-3">
        <label class="form-label">文章标题：</label>
        <validate-input
          :rules="titleRules"
          v-model="titleVal"
          placeholder="请输入文章标题"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">文章详情：</label>
        <validate-input
          rows="10"
          tag="textarea"
          placeholder="请输入文章详情"
          :rules="contentRules"
          v-model="contentVal"
        />
      </div>
      <template v-slot:submit>
         <button class="btn btn-primary btn-large">发表文章</button>
      </template>
    </validate-form>
  </div>
</template>
<script lang="ts">
import { defineComponent,ref } from "vue";
import ValidateInput,{RulesProp} from "../components/ValidateInput.vue"
import validateForm from "../components/ValidateForm.vue";
export default defineComponent({
  name: "CreatePeom",
  setup(props,context){
    const titleVal = ref("");
    const contentVal= ref("")
    const titleRules:RulesProp=[
      {
        type:'required',
        message:'文章标题不能为空'
      }
    ]
    const contentRules:RulesProp=[
      {
        type:'required',
        message:'文章内容不能为空'
      }
    ]
    return{
      titleVal,
      contentVal,
      titleRules,
      contentRules
    }
  },
  components: {
    validateForm,
    ValidateInput
  },
});
</script>
<style lang="" scoped></style>
