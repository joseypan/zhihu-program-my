<template>
  <ValidateForm @form-submit="onFormSubmit">
    <template v-slot:default>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <ValidateInput
          :rules="emailRules"
          v-model="emailVal"
          type="text"
          placeholder="请输入邮箱地址"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <ValidateInput
          :rules="passwordRules"
          type="password"
          v-model="passwordVal"
          placeholder="请输入密码"
        />
      </div>
    </template>
    <template #submit>
      <button type="submit" class="btn btn-primary">登录</button>
    </template>
  </ValidateForm>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import ValidateInput, { RulesProp } from "../components/ValidateInput.vue";
import ValidateForm from "../components/ValidateForm.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import request from "../request/request";
import { loginApi, currentUserApi } from "../request/api";
import createMessage from "../components/createMessage";
const emailRules: RulesProp = [
  {
    type: "required",
    message: "电子邮箱地址不能为空",
  },
  {
    type: "email",
    message: "请输入正确的电子邮箱格式",
  },
];
const passwordRules: RulesProp = [
  {
    type: "required",
    message: "密码不能为空",
  },
];

export default defineComponent({
  name: "Login",
  setup(props) {
    const emailVal: Ref<string> = ref("123@test.com");
    const passwordVal: Ref<string> = ref("123");
    const router = useRouter();
    const store = useStore();
    const onFormSubmit = async (isSubmit: boolean): Promise<void> => {
      if (isSubmit) {
        // 调登录接口
        let res = await request({
          url: loginApi,
          method: "post",
          data: {
            email: emailVal.value,
            password: passwordVal.value,
          },
        });
        sessionStorage.setItem("authorization", `Bearer ${res.token}`);
        // 获取用户信息
        let currentUserData = await request({
          url: currentUserApi,
        });
        // 将个人信息存储到vuex中
        store.commit("setUserData", currentUserData);
        createMessage("登录成功,2秒之后跳转", "success");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    };
    return {
      emailRules,
      passwordRules,
      emailVal,
      onFormSubmit,
      passwordVal,
    };
  },
  components: {
    ValidateInput,
    ValidateForm,
  },
});
</script>
