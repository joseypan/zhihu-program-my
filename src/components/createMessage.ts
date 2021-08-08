/**
 * @FileDescription: 控制Message组件的显示
 * @Author: 潘旭敏
 * @Date: 2021-08-06
 * @LastEditors: 潘旭敏
 * @LastEditTime: 2021-08-06 14:38
 */
import { createApp } from "vue";
import Message from "./Message.vue";
import {createNode} from '@/hooks/useCreateNode';
export type MessageType = "success" | "info" | "warning" | "danger";
const createMessage = (message: string, type: MessageType, timeout = 2000) => {
  const messageInstance = createApp(Message, {
    messageData: {
      type,
      text: message,
    },
  });
  const mountNode = createNode("message");
  messageInstance.mount(mountNode);
  setTimeout(() => {
    messageInstance.unmount();
    document.body.removeChild(mountNode);
  }, timeout);
};
export default createMessage;
