<template>
  <div class="register-container">
    <h4>注册者也账户</h4>
    <validate-form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <ValidateInput
          :rules="emailRules"
          v-model="registerFormData.email"
          type="text"
          placeholder="请输入邮箱地址"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">昵称</label>
        <ValidateInput
          :rules="nicknameRules"
          v-model="registerFormData.nickName"
          type="text"
          placeholder="请输入昵称"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">密码</label>
        <ValidateInput
          :rules="passworldRules"
          v-model="registerFormData.password"
          type="text"
          placeholder="请输入密码"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">重复密码</label>
        <ValidateInput
          :rules="repeatPasswordRules"
          v-model="registerFormData.repeatPassword"
          type="text"
          placeholder="请再次输入密码"
        />
      </div>
      <router-link to="/login">已经有账户了？去登录</router-link>
      <template v-slot:submit>
        <button type="submit" class="btn btn-primary">注册新用户</button>
      </template>
    </validate-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import ValidateForm from "../components/ValidateForm.vue";
import ValidateInput from "../components/ValidateInput.vue";

export default defineComponent({
  name: "Register",
  setup(props, context) {
    const registerFormData = reactive({
      email: "",
      nickName: "",
      password: "",
      repeatPassword: "",
    });
    const emailRules = [
      { type: "required", message: "电子邮箱地址不能为空" },
      { type: "email", message: "请输入正确的电子邮箱格式" },
    ];
    const nicknameRules = [{ type: "required", message: "昵称不能为空" }];
    const passworldRules = [{ type: "required", message: "密码不能为空" }];
    const repeatPasswordRules = [
      { type: "required", message: "重复密码不能为空" },
      {
        type: "custom",
        message: "重复密码与密码不一致",
        validator: () => {
          return registerFormData.repeatPassword === registerFormData.password;
        },
      },
    ];
    return {
      emailRules,
      nicknameRules,
      registerFormData,
      passworldRules,
      repeatPasswordRules,
    };
  },
  components: {
    ValidateForm,
    ValidateInput,
  },
});
</script>
<style lang="scss" scoped>
.register-container {
  h4 {
    text-align: center;
  }
  width: 50%;
  margin: 0 auto;
  .btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
