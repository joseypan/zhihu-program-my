<!--
* @FileDescription: 封装的消息通知组件
* @Author: 潘旭敏
* @Date: 2021-08-06
* @LastEditors: 潘旭敏
* @LastEditTime: 2021-08-06 14:17
 -->
<template>
  <div class="message">
    <div
      class="alert fixed-top w-50 mx-auto d-flex justify-content-between mt-2"
      :class="messageTypeClass"
      role="alert"
    >
      {{ messageData.text }}
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
type MessageType = "success" | "info" | "warning" | "danger";
interface MessageData {
  type: MessageType;
  text: string;
}
export default defineComponent({
  name: "Message",
  props: {
    messageData: {
      type: Object as PropType<MessageData>,
      required: true,
    },
  },
  setup(props) {
    const messageTypeClass = computed(() => `alert-${props.messageData.type}`);
    return {
      messageTypeClass,
    };
  },
});
</script>
